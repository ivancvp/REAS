/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.servlets;

import com.frmejia.backend.entity.Ent_Consulta;
import com.frmejia.backend.manager.UsuarioManager;
import static com.frmejia.backend.manager.UsuarioManager.TYPE_USER_SESSION_KEY;
import static com.frmejia.backend.manager.UsuarioManager.USER_INFO;
import static com.frmejia.backend.manager.UsuarioManager.USER_SESSION_KEY;
import com.frmejia.backend.util.PostgresUtil;
import com.frmejia.backend.util.XMLUtil;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import javax.json.Json;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.table.DefaultTableModel;
import json.JSONException;
import json.JSONObject;

/**
 *
 * @author frmejia
 */
@WebServlet(name = "login", urlPatterns = {"/login"})
public class login extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            ServletContext context = getServletContext();
            String user = request.getParameter("login:username");
            String pass = request.getParameter("login:password");
//            System.console().writer().println(user);
//            System.console().writer().println(pass);
            String respuesta = validateUsuario(context, user, pass, request);
            String res = "{resultado:" + respuesta + "}";
            request.setAttribute("message", res);

            Map parametros = new LinkedHashMap(request.getParameterMap());

            if (request.getParameter("source") != null && parametros.size() > 0) {
                String urlParams = "";

                Iterator itr = parametros.entrySet().iterator();
                while (itr.hasNext()) {
                    Map.Entry e = (Map.Entry) itr.next();
                    if (!e.getKey().toString().contains("login") && !e.getKey().toString().equals("source")) {
                        urlParams += (urlParams.isEmpty() ? "?" : "&") + e.getKey().toString() + "=" + request.getParameter(e.getKey().toString());
                    }
                }
                response.sendRedirect(request.getParameter("source") + urlParams);
                //request.getRequestDispatcher("/" + request.getParameter("source") + urlParams).forward(request, response);
            } else {
                request.getRequestDispatcher("/login.jsp").forward(request, response);
            }

        } catch (Exception e) {
            out.println(e.getLocalizedMessage());
        }
    }

    public String validateUsuario(ServletContext context, String user, String pass, HttpServletRequest request) {

        XMLUtil xmlUtil = new XMLUtil();
        PostgresUtil postgresUtil = new PostgresUtil();
        Ent_Consulta ent_Consulta = new Ent_Consulta();
        ent_Consulta = xmlUtil.obtenerConfiguracionConsulta("ConsultaUsuarioByNombre");

        String query = "";
        query = ent_Consulta.getSql();
        query = query.replaceAll("@USUARIO", user);

        postgresUtil.connecting(ent_Consulta.getUrl(), ent_Consulta.getUser(), ent_Consulta.getPassword());
        DefaultTableModel tablaUsuario = postgresUtil.obtenerTabla(postgresUtil.executeQuerySQL(query));
        postgresUtil.cerrarConexion();

        Ent_Consulta registro_login = new Ent_Consulta();
        registro_login = xmlUtil.obtenerConfiguracionConsultaDML("InsertarLogUsuario");

        PostgresUtil pgUtil = new PostgresUtil();
        pgUtil.connecting(registro_login.getUrl(), registro_login.getUser(), registro_login.getPassword());
        String q = registro_login.getSql();
        UUID uniqueID = UUID.randomUUID();
        q = q.replaceAll("@USUARIO", user);
        q = q.replaceAll("@USER_AGENT", request.getHeader("User-Agent"));
        q = q.replaceAll("@REFERER", request.getHeader("Referer"));

        pgUtil.executeDML(q);
//       if(!request.getHeader("Host").equals("localhost:8084")){
//        //if(!request.getHeader("Host").equals("sig-reas")){
//             return null;
//        }
        if (tablaUsuario != null && tablaUsuario.getRowCount() > 0) {
            if (!tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_pwd")).toString().equals(pass)) {
//                out.println(pass);
                return null;
            }
            if (tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_activo")).toString().equals("false")) {

                return null;

            }

            Map<String, Object> info = new HashMap<String, Object>();
            String f = "";
            try {
                f = tablaUsuario.getValueAt(0, tablaUsuario.findColumn("funcionalidades")).toString();
            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
//            String[] listFunc = new String[1];
            ArrayList listFunc = new ArrayList();
            if (f.contains(",")) {
                String[] lista = new String[1];
                lista = f.split(",");
                for (int i = 0; i < lista.length; i++) {
                    listFunc.add(lista[i]);
                }
            } else if (!"".equals(f)) {
                listFunc.add(f);
            }

            info.put("funcionalidades", listFunc);
            info.put("usuario_nombre", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_nombre")));
            info.put("usuario_usuario", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_usuario")));
            info.put("usuario_id", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_id")));
            info.put("usuario_user", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_user")));
            info.put("usuario_time", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_time")));
            info.put("usuario_user_upd", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_user_upd")));
            info.put("usuario_time_upd", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_time_upd")));
            info.put("usuario_correo", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_correo")));
            info.put("usuario_cargo", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_cargo")));
            info.put("usuario_activo", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_activo")));
            info.put("usuario_fecha_vigencia", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_fecha_vigencia")));
            info.put("codigo", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("codigo")));
            info.put("tius_id", tablaUsuario.getValueAt(0, tablaUsuario.findColumn("tius_id")));
            info.put("unique_id", uniqueID.toString());

            request.getSession().setAttribute(USER_SESSION_KEY, tablaUsuario.getValueAt(0, tablaUsuario.findColumn("usuario_usuario")).toString());
            request.getSession().setAttribute(TYPE_USER_SESSION_KEY, tablaUsuario.getValueAt(0, tablaUsuario.findColumn("tius_id")));
            request.getSession().setAttribute(USER_INFO, info);
            request.getSession().setAttribute("status", "YES");

            return "app-main";
        } else {
            out.println(user);
            return null;
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
