/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.servlets;

import com.frmejia.backend.entity.Ent_Consulta;
import com.frmejia.backend.util.PostgresUtil;
import com.frmejia.backend.util.XMLUtil;
import com.lowagie.text.Document;
import com.lowagie.text.pdf.PdfCopy;
import com.lowagie.text.pdf.PdfImportedPage;
import com.lowagie.text.pdf.PdfReader;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import json.JSONArray;
import json.JSONException;
import json.JSONObject;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author user
 */
public class SplitPDFFileUpload extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");
        Map result = new LinkedHashMap();

        if (request.getSession().getAttribute("user") == null) {
            result.put("error", "Servicio denegado por falta de permisos");

            JSONObject jsonObject = new JSONObject(result);
            out.println(jsonObject.toString());
            return;
        }

        try {
            String fileName = null;
            InputStream content = null;
            String identificador = null;
            JSONArray steps = null;

            ServletFileUpload upload = new ServletFileUpload(new DiskFileItemFactory());
            upload.setHeaderEncoding("UTF-8");

            List<FileItem> items = upload.parseRequest(request);

            for (FileItem item : items) {

                if (item.isFormField()) {
                    if (item.getFieldName().equals("steps")) {
                        steps = new JSONArray(item.getString());
                    }else if (item.getFieldName().equals("identificador")) {
                        identificador = item.getString();
                    }

                } else {
                    fileName = item.getName();
                    String ok = new String(item.getName().getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);
                    content = item.getInputStream();
                    /**
                     * * Guardar archivo en el servidor String path =
                     * getServletContext().getRealPath("UploadedFiles"); File
                     * file = new File(path + File.separator + fileName); try {
                     * OutputStream salida = new FileOutputStream(file); byte[]
                     * buf = new byte[1024]; int len; while ((len =
                     * content.read(buf)) > 0) { salida.write(buf, 0, len); }
                     * salida.close(); content.close(); System.out.println("Se
                     * realizo la conversion con exito"); } catch (IOException
                     * e) { System.out.println("Se produjo el error : " +
                     * e.toString()); }
                     */
                    //System.out.println(Streams.asString(content));
                }
            }

            //Guardar archivo en la base de datos
            if (steps != null && identificador != null) {
                try {
                    PdfReader reader = new PdfReader(content);

                    Calendar cal = Calendar.getInstance();

                    XMLUtil xmlUtil = new XMLUtil();
                    PostgresUtil postgresUtil = new PostgresUtil();

                    Ent_Consulta ent_Consulta = new Ent_Consulta();
                    ent_Consulta = xmlUtil.obtenerConfiguracionConsultaDML("InsertarDocumento");

                    postgresUtil.connecting(ent_Consulta.getUrl(), ent_Consulta.getUser(), ent_Consulta.getPassword());
                    try (Connection con = postgresUtil.getConnection()) {
                        for (int i = 0; i < steps.length(); i++) {

                            JSONObject step = steps.getJSONObject(i);
                            Integer start = step.getInt("from");
                            Integer end = step.getInt("to");
                            Integer tipo_documento = step.getInt("selected_tidoc_id");
                            Integer numFolios = ((Double) Math.ceil((end - start) / 2)).intValue();
                            String descripcion = step.has("descripcion") ? step.getString("descripcion") : "";

                            PreparedStatement pstmt = con.prepareStatement(ent_Consulta.getSql(), PreparedStatement.RETURN_GENERATED_KEYS);

                            pstmt.setString(1, descripcion);
                            pstmt.setInt(2, numFolios);
                            pstmt.setString(3, fileName);
                            pstmt.setTimestamp(4, new Timestamp(cal.getTime().getTime()));
                            pstmt.setString(5, request.getSession().getAttribute("user").toString());
                            pstmt.setString(6, identificador);
                            pstmt.setInt(7, tipo_documento);

                            //set null tumbnail
                            pstmt.setNull(8, java.sql.Types.VARCHAR);

                            pstmt.executeUpdate();
                            ResultSet rs = pstmt.getGeneratedKeys();

                            while (rs.next()) {
                                String id = rs.getString("doc_id");
                                int year = cal.get(Calendar.YEAR);
                                int month = cal.get(Calendar.MONTH) + 1;
                                int day = cal.get(Calendar.DAY_OF_MONTH);

                                Ent_Consulta ent_repositorio = new Ent_Consulta();
                                ent_repositorio = xmlUtil.obtenerConfiguracionConsulta("conexion_repositorio");
                                String dir = ent_repositorio.getUrl() + File.separator + year + File.separator + month + File.separator + day;

                                new File(dir).mkdirs();

                                String outFile = fileName + "_" + String.format("%03d", start) + "-" + String.format("%03d", end);
                                Document document = new Document(reader.getPageSizeWithRotation(1));
                                //FileOutputStream outString = new FileOutputStream(outFile);
                                ByteArrayOutputStream outStream = new ByteArrayOutputStream();
                                PdfCopy writer = new PdfCopy(document, outStream);
                                document.open();

                                for (Integer p = start; p <= end; p++) {
                                    PdfImportedPage page = writer.getImportedPage(reader, p);
                                    writer.addPage(page);
                                }
                                document.close();
                                writer.close();

                                //nombre del archivo dentro del zip
                                ZipEntry entry = new ZipEntry(outFile + ".pdf");

                                //nombre y ubicacion del zip
                                FileOutputStream dest = new FileOutputStream(dir + File.separator + id + ".zip");

                                try (ZipOutputStream o = new ZipOutputStream(new BufferedOutputStream(dest))) {
                                    o.putNextEntry(entry);
                                    o.write(outStream.toByteArray());

                                    outStream.close();
                                    o.close();
                                } catch (IOException e) {
                                    System.out.println("Se produjo el error : " + e.toString());
                                }

                                pstmt.close();
                                rs.close();
                                //exit while
                                break;
                            }

                        }
                        con.close();
                    }

                    postgresUtil.cerrarConexion();

                    /*
                    Calendar cal = Calendar.getInstance();

                    XMLUtil xmlUtil = new XMLUtil();
                    PostgresUtil postgresUtil = new PostgresUtil();

                    Ent_Consulta ent_Consulta = new Ent_Consulta();
                    ent_Consulta = xmlUtil.obtenerConfiguracionConsultaDML("InsertarDocumento");

                    postgresUtil.connecting(ent_Consulta.getUrl(), ent_Consulta.getUser(), ent_Consulta.getPassword());
                    try (Connection con = postgresUtil.getConnection()) {
                        PreparedStatement pstmt = con.prepareStatement(ent_Consulta.getSql(), PreparedStatement.RETURN_GENERATED_KEYS);

                        pstmt.setString(1, descripcion);
                        pstmt.setInt(2, numFolios);
                        pstmt.setString(3, fileName);
                        pstmt.setTimestamp(4, new Timestamp(cal.getTime().getTime()));
                        pstmt.setString(5, request.getSession().getAttribute("user").toString());
                        pstmt.setString(6, identificador);
                        pstmt.setInt(7, tipo_documento);
                        if (thumbnail != null) {
                            pstmt.setString(8, thumbnail);
                            //System.out.println("com.frmejia.backend.servlets.FileUploader.processRequest()" + thumbnail);
                        } else {
                            pstmt.setNull(8, java.sql.Types.VARCHAR);
                        }

                        //pstmt.setBinaryStream(3, content, content.available());
                        int resultados = pstmt.executeUpdate();
                        ResultSet rs = pstmt.getGeneratedKeys();
                        while (rs.next()) {
                            String id = rs.getString("doc_id");
                            int year = cal.get(Calendar.YEAR);
                            int month = cal.get(Calendar.MONTH) + 1;
                            int day = cal.get(Calendar.DAY_OF_MONTH);

                            Ent_Consulta ent_repositorio = new Ent_Consulta();
                            ent_repositorio = xmlUtil.obtenerConfiguracionConsulta("conexion_repositorio");
                            String dir = ent_repositorio.getUrl() + File.separator + year + File.separator + month + File.separator + day;

                            new File(dir).mkdirs();

                            try {
                                System.out.println("Procesando: " + dir + File.separator + " -- Archivo: " + fileName);
                                byte data[] = new byte[2048];
                                ZipEntry entry = new ZipEntry(fileName);
                                FileOutputStream dest = new FileOutputStream(dir + File.separator + id + ".zip");
                                ZipOutputStream o = new ZipOutputStream(new BufferedOutputStream(dest));
                                o.putNextEntry(entry);
                                int count;
                                while ((count = content.read(data, 0, 2048)) != -1) {
                                    o.write(data, 0, count);
                                }
                                o.close();
                                content.close();

                            } catch (IOException e) {
                                System.out.println("Se produjo el error : " + e.toString());
                            }
                            break;
                        }
                        result.put("success", "El archivo \"" + fileName + "\" Fué cargado correctamente");

                        con.close();
                        pstmt.close();
                    }

                    postgresUtil.cerrarConexion();
                     */
                } catch (Exception e) {
                    result.put("error", e.getMessage());
                } finally {
                    //pstmt.close();
                }
            } else {
                result.put("error", "No se cargó el archivo " + fileName + ". debe diligenciar todos los campos");
            }

        } catch (FileUploadException e) {
            throw new ServletException("No fué posible cargar el archivo.", e);
        } catch (JSONException ex) {
            Logger.getLogger(SplitPDFFileUpload.class.getName()).log(Level.SEVERE, null, ex);
        }

        JSONObject jsonObject = new JSONObject(result);
        out.println(jsonObject.toString());
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
