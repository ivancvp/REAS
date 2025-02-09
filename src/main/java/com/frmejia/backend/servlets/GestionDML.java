/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.servlets;

import com.frmejia.backend.manager.ConsultasManager;
import com.frmejia.backend.manager.UsuarioManager;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.Calendar;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import json.JSONArray;
import json.JSONObject;
/**
 *
 * @author ministerio
 */
public class GestionDML extends HttpServlet {

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
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            if (request.getSession().getAttribute("user") != null) {

                String op = request.getParameter("op");

                if (op != null) {

                    if (!op.isEmpty()) {

                        Map parametros = new LinkedHashMap(request.getParameterMap());
//                        out.println(UsuarioManager.getInfoSesion("municipios").toString());

                        Calendar cal = Calendar.getInstance();
                        parametros.put("USUARIO_SISTEMA", new String[]{(String) request.getSession().getAttribute("user")});
                        parametros.put("SESSION_ID", new String[]{(String) ((HashMap) request.getSession().getAttribute("info")).get("unique_id")});
                        parametros.put("TIMESTAMP_SISTEMA", new String[]{new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss").format(new java.util.Date())});
                        parametros.put("FECHA_SISTEMA", new String[]{new Date(cal.getTime().getTime()).toString()});
//                        out.println("usuario: " + UsuarioManager.getInfoSesion("usuario_id").toString());
//                        parametros.put("USUARIO_ID", new String[]{UsuarioManager.getInfoSesion("usuario_id").toString()});
                        /*
                        String municipios = "'" + UsuarioManager.getInfoSesion("municipios").toString().replaceAll(", ", "','").replaceAll("\\[", "").replaceAll("\\]", "") + "'";
                        parametros.put("MUNICIPIOS_ID", new String[]{municipios});
                         */
//                        parametros.put("USUARIO_ID", new String[]{info.get("usuario_id").toString()});
                        //out.println(municipios);

                        ConsultasManager consultasManager = new ConsultasManager();
                        String result = consultasManager.EjecutarDML(op, parametros);
                        
                        out.println(result);

                    } else {

                        Map error = new LinkedHashMap();
                        error.put("error", "Operación no definida 2");

                        JSONObject jsonObject = new JSONObject(error);
                        out.println(jsonObject.toString());
                    }

                } else {

                    Map error = new LinkedHashMap();
                    error.put("error", "Operación no definida 5");

                    JSONObject jsonObject = new JSONObject(error);
                    out.println(jsonObject.toString());

                }

            } else {
                Map error = new LinkedHashMap();
                error.put("error", "Servicio denegado por falta de permisos");

                JSONObject jsonObject = new JSONObject(error);
                out.println(jsonObject.toString());
            }

        } catch (Exception e) {
            Map error = new LinkedHashMap();
//            error.put("error",e.getLocalizedMessage());
            error.put("error", "Operación no definida "+e.getMessage());
            JSONObject jsonObject = new JSONObject(error);
            out.println(jsonObject.toString());
            System.out.println("por aqui: " +  e.getMessage());
           

         

        }
        finally {
            out.close();
            Runtime.getRuntime().gc();
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
     @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        processRequest(req, resp);
    }
}
