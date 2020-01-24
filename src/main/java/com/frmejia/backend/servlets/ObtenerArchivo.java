/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.servlets;

import com.frmejia.backend.entity.Ent_Consulta;
import com.frmejia.backend.util.PostgresUtil;
import com.frmejia.backend.util.XMLUtil;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author user
 */
public class ObtenerArchivo extends HttpServlet {

    private static final int BUFSIZE = 4096;
    private String filePath;

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
        try {
            XMLUtil xmlUtil = new XMLUtil();
            PostgresUtil postgresUtil = new PostgresUtil();

            Map parametros = new LinkedHashMap(request.getParameterMap());

            Calendar cal = Calendar.getInstance();
            parametros.put("USUARIO_SISTEMA", new String[]{(String) request.getSession().getAttribute("user")});
            parametros.put("SESSION_ID", new String[]{(String) ((HashMap) request.getSession().getAttribute("info")).get("unique_id")});
            parametros.put("FECHA_SISTEMA", new String[]{new Date(cal.getTime().getTime()).toString()});

            Ent_Consulta ent_Consulta = new Ent_Consulta();
            ent_Consulta = xmlUtil.obtenerConfiguracionConsulta("consulta_binario_documento_adjunto");

            String query = "";
            query = ent_Consulta.getSql();

            //Remplazamos los parametros
            Iterator itr = parametros.entrySet().iterator();
            while (itr.hasNext()) {
                Map.Entry e = (Map.Entry) itr.next();

                if (!e.getKey().toString().equals("op")) {
                    query = query.replaceAll("@" + e.getKey().toString(), ((String[]) e.getValue())[0].toString());
                }
            }

            postgresUtil.connecting(ent_Consulta.getUrl(), ent_Consulta.getUser(), ent_Consulta.getPassword());
            ResultSet resultSet = postgresUtil.executeQuerySQL(query);

            int length = 0;
            ServletOutputStream outStream = response.getOutputStream();
            ServletContext context = getServletConfig().getServletContext();
            while (resultSet.next()) {
                byte[] buffer = new byte[256];

                String fileName = resultSet.getString("doc_ruta");
                String id = resultSet.getString("doc_id");
                String year = resultSet.getString("year");
                String month = resultSet.getString("month");
                String day = resultSet.getString("day");
                //InputStream is = resultSet.getBinaryStream("repdoc_binario");
                try {
                    int BUFFER = 2048;
                    ZipEntry entry;

                    Ent_Consulta ent_repositorio = new Ent_Consulta();
                    ent_repositorio = xmlUtil.obtenerConfiguracionConsulta("conexion_repositorio");
                    String dir = ent_repositorio.getUrl() + File.separator + File.separator + year + File.separator + month + File.separator + day;
                            
                    System.out.println(dir);
                    
                    File f = new File(dir + File.separator + id + ".zip");
                    if (f.exists() && !f.isDirectory()) {
                        BufferedInputStream is = null;
                        ZipFile zipfile = new ZipFile(dir + File.separator + id + ".zip");
                        Enumeration e = zipfile.entries();

                        while (e.hasMoreElements()) {
                            entry = (ZipEntry) e.nextElement();
                            System.out.println("Extracting: " + entry);
                            is = new BufferedInputStream(zipfile.getInputStream(entry));

                            String mimetype = context.getMimeType(filePath);

                            if (mimetype == null) {
                                mimetype = "application/octet-stream";
                            }
                            
                            String tipoDato=fileName.split("\\.")[1];
                            
                            if(tipoDato.equals("jpg") || tipoDato.equals("png") ){
                               response.setContentType("image/jpeg"); 
                            }
                            else if(tipoDato.equals("pdf") ){
                                response.setContentType("application/pdf");
                                
                            }
                            else if(tipoDato.equals("PDF") ){
                                response.setContentType("application/pdf");
                            }
                            else{
                                response.setContentType("text/plain");
                            }
                           
                            response.setContentLength((int) is.available());

                            response.setHeader("Content-Disposition", "inline; attachment; filename=\"" + fileName + "\"");
                            while (((length = is.read(buffer)) != -1)) {
                                outStream.write(buffer, 0, length);
                            }
                            is.close();

                            outStream.close();
                            break;
                        }
                    }
                    /*else {
                        ent_Consulta = xmlUtil.obtenerConfiguracionConsulta("ConsultaBinarioDocumentoAdjuntoRespaldo");
                        query = ent_Consulta.getSql();
                        query = query.replaceAll("@ID", id);
                        ResultSet binResultSet = postgresUtil.executeQuerySQL(query);
                        while (binResultSet.next()) {
                            try (InputStream is = binResultSet.getBinaryStream("repdoc_binario")) {
                                String mimetype = context.getMimeType(filePath);

                                if (mimetype == null) {
                                    mimetype = "application/octet-stream";
                                }
                                response.setContentType(mimetype);
                                response.setContentLength((int) is.available());

                                response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
                                while (((length = is.read(buffer)) != -1)) {
                                    outStream.write(buffer, 0, length);
                                }
                            }

                            outStream.close();
                            break;
                        }
                    }*/

                } catch (Exception e) {
                    e.printStackTrace();
                }
                break;
            }
            resultSet.close();
            postgresUtil.cerrarConexion();
        } catch (SQLException ex) {
            Logger.getLogger(ObtenerArchivo.class.getName()).log(Level.SEVERE, null, ex);
        }
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
