/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.servlets;

import com.frmejia.backend.entity.Ent_Consulta;
import com.frmejia.backend.util.PostgresUtil;
import com.frmejia.backend.util.XMLUtil;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import json.JSONObject;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import static org.aspectj.weaver.tools.cache.SimpleCacheFactory.path;

/**
 *
 * @author fabian.Dc
 */
public class CuentasUploader extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    public static final char SEPARATOR = ';';
    public static final char QUOTE = '"';

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String ajaxUpdateResult = "";

        if (request.getSession().getAttribute("user") == null) {
            response.setContentType("application/json;charset=UTF-8");
            PrintWriter out = response.getWriter();
            Map error = new LinkedHashMap();
            error.put("error", "Servicio denegado por falta de permisos");

            JSONObject jsonObject = new JSONObject(error);
            out.println(jsonObject.toString());
            return;
        }

        try {

            List<FileItem> items = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
            Calendar cal = Calendar.getInstance();
            String fileName = null;
            InputStream content = null;

            Integer numFolios = null;
            String descripcion = null;
            Integer soli_id = null;
            Integer tipo_documento = null;
            int year = cal.get(Calendar.YEAR);
            int month = cal.get(Calendar.MONTH) + 1;
            int day = cal.get(Calendar.DAY_OF_MONTH);
            XMLUtil xmlUtil = new XMLUtil();
            Ent_Consulta ent_repositorio = new Ent_Consulta();
            ent_repositorio = xmlUtil.obtenerConfiguracionConsulta("conexion_repositorio");
            String dir = ent_repositorio.getUrl() + File.separator + year + File.separator + month + File.separator + day + File.separator;
            String download_dir = "/repositorio/cuentas" + File.separator + year + File.separator + month + File.separator + day + File.separator;
            for (FileItem item : items) {

                if (item.isFormField()) {
                    if (item.getFieldName().equals("numFolios")) {
                        numFolios = Integer.parseInt(item.getString());
                    }
                    if (item.getFieldName().equals("descripcion")) {
                        descripcion = item.getString();
                    }
                    if (item.getFieldName().equals("soli_id")) {
                        soli_id = Integer.parseInt(item.getString());
                    }
                    if (item.getFieldName().equals("tipo_documento")) {
                        tipo_documento = Integer.parseInt(item.getString());
                    }

                } else {
                    fileName = item.getName();
                    content = item.getInputStream();

//                  Guardar archivo en el servidor 
                    new File(dir).mkdirs();
                    File file = new File(dir + File.separator + fileName);
                    try {
                        OutputStream salida = new FileOutputStream(file);
                        byte[] buf = new byte[1024];
                        int len;
                        while ((len
                                = content.read(buf)) > 0) {
                            salida.write(buf, 0, len);
                        }
                        salida.close();
                        content.close();
                    } catch (IOException e) {
                        System.out.println("Se produjo el error : " + e.toString());
                    }

                }

            }

//           Se lee el archivo CSV
//          Abre el archivo 
            BufferedReader reader = new BufferedReader(new FileReader(dir + fileName));
            // lee line por linea
            String line = null;
            Scanner scanner = null;
            int index = 0;       
            PostgresUtil postgresUtil = new PostgresUtil();
            Ent_Consulta ent_Consulta = new Ent_Consulta();
            ent_Consulta = xmlUtil.obtenerConfiguracionConsultaDML("InsertarDocumento");
            postgresUtil.connecting(ent_Consulta.getUrl(), ent_Consulta.getUser(), ent_Consulta.getPassword());

            Connection con = postgresUtil.getConnection();

            postgresUtil.executeQuerySQL("INSERT INTO public.documento_adjunto(  doc_descripcion, doc_ruta,doc_time, doc_time_upd, tidoc_id)\n"
                    + "VALUES ('Archivo de cuentas de ahorro','" + download_dir + fileName + "',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2)");
            postgresUtil.executeQuerySQL("delete from cuenta_ahorro_programado");

            while ((line = reader.readLine()) != null) {
                scanner = new Scanner(line);
                scanner.useDelimiter(";");
                String registro = "INSERT INTO public.cuenta_ahorro_programado(identificador, titular_principal, cedula_principal, titular_secundario, cedula_secundario, numero_cuenta, fecha_apertura, banco,sucursal, valor_movilizado_cap)VALUES (";
                int col = 0;
                while (scanner.hasNext()) {
                    String data = scanner.next();
                    if (col == 2 || col == 4 || col == 9) {
                        String num = !(data.equals("")) ? data : "0";
                        registro += "," + num;
                    } else if (col == 0) {
                        registro += "'" + data + "'";
                    } else if (col == 6) {
                        String fecha = !(data == null || data.equals("")) ? "'" + data + "'" : "NULL";
                        registro += "," + fecha + "";
                    } else {
                        registro += ",'" + data + "'";
                    }
                    col++;

                }
                registro += ")";

                index++;
                if (index > 0) {
                    postgresUtil.executeQuerySQL(registro);
                }
            }
            //close reader
            reader.close();
            ajaxUpdateResult = "Se ha subido correctamente el archivo";

        } catch (FileUploadException e) {
            throw new ServletException("No fué posible cargar el archivo.", e);
        }
        request.setAttribute("message", ajaxUpdateResult);
        request.getRequestDispatcher("/cuentas.jsp").forward(request, response);

    }

    private static String[] removeTrailingQuotes(String[] fields) {

        String result[] = new String[fields.length];

        for (int i = 0; i < result.length; i++) {
            result[i] = fields[i].replaceAll("^" + QUOTE, "").replaceAll(QUOTE + "$", "");
        }
        return result;
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
