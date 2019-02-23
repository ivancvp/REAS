/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.servlets;

import com.frmejia.backend.entity.Ent_Consulta;
import com.frmejia.backend.util.PostgresUtil;
import com.frmejia.backend.util.XMLUtil;
import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import sun.misc.BASE64Decoder;

/**
 *
 * @author frmejia
 */
@WebServlet(name = "ImagenesFicha", urlPatterns = {"/ImagenesFicha"})
public class ImagenesFicha extends HttpServlet {

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
            throws ServletException, IOException, SQLException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        XMLUtil xmlUtil = new XMLUtil();
        Ent_Consulta ent_repositorio = new Ent_Consulta();

        ent_repositorio = xmlUtil.obtenerConfiguracionConsulta("conexion_repositorio");
        

        
        
        
        String identificador = String.valueOf(request.getParameter("identificador"));
       
        
        String[] datos =new String[12];
        
        datos[0] = String.valueOf(request.getParameter("img_ext"));
        datos[1] = String.valueOf(request.getParameter("img_esp"));
        datos[2] = String.valueOf(request.getParameter("img_coc"));
        datos[3] = String.valueOf(request.getParameter("img_nom"));
        datos[4] = String.valueOf(request.getParameter("img_hab"));
        datos[5] = String.valueOf(request.getParameter("img_usa"));
        datos[6] = String.valueOf(request.getParameter("img_extMini"));
        datos[7] = String.valueOf(request.getParameter("img_espMini"));
        datos[8] = String.valueOf(request.getParameter("img_cocMini"));
        datos[9] = String.valueOf(request.getParameter("img_nomMini"));
        datos[10] = String.valueOf(request.getParameter("img_habMini"));
        datos[11] = String.valueOf(request.getParameter("img_usaMini"));
        
        
        for(int i = 0; i <6; i++){            
            if(datos[i]!=""){
                
                String data = datos[i];
               
                String base64Image = data.split(",")[1];
                byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);

                BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
                String nombre="";
                String descripcion="";
                Integer tidoc=0;
                    if(i==0){
                        nombre="img_ext";
                        descripcion="imagen9101";
                        tidoc=9101;
                    }
                    if(i==1){
                        nombre="img_esp";
                        descripcion="imagen9102";
                        tidoc=9102;
                    }
                    if(i==2){
                        nombre="img_coc";
                        descripcion="imagen9103";
                        tidoc=9103;
                    }
                    if(i==3){
                        nombre="img_nom";
                        descripcion="imagen9104";
                        tidoc=9104;
                    }
                    if(i==4){
                        nombre="img_hab";
                        descripcion="imagen9105";
                        tidoc=9105;
                    }
                    if(i==5){
                        nombre="img_usa";
                        descripcion="imagen9106";
                        tidoc=9106;
                    }
                

                
                    Ent_Consulta ent_Consulta = new Ent_Consulta();
                    ent_Consulta = xmlUtil.obtenerConfiguracionConsultaDML("InsertarDocumento");
                    PostgresUtil postgresUtil = new PostgresUtil();
                    postgresUtil.connecting(ent_Consulta.getUrl(), ent_Consulta.getUser(), ent_Consulta.getPassword());
                    Calendar cal = Calendar.getInstance();
                    int year = cal.get(Calendar.YEAR);
                    int month = cal.get(Calendar.MONTH) + 1;
                    int day = cal.get(Calendar.DAY_OF_MONTH);
                    
                    
                    
                        try (Connection con = postgresUtil.getConnection()) {
                        PreparedStatement pstmt = con.prepareStatement(ent_Consulta.getSql(), PreparedStatement.RETURN_GENERATED_KEYS);

                        pstmt.setString(1, descripcion);
                        pstmt.setInt(2, 1);
                        pstmt.setString(3,nombre+".png");
                        pstmt.setTimestamp(4, new Timestamp(cal.getTime().getTime()));
                        pstmt.setString(5, request.getSession().getAttribute("user").toString());
                        pstmt.setString(6, identificador);
                        pstmt.setInt(7, tidoc);
                        if (datos[0] != null) {
                            pstmt.setString(8,datos[i+6]);
                            //System.out.println("com.frmejia.backend.servlets.FileUploader.processRequest()" + thumbnail);
                        } else {
                            pstmt.setNull(8, java.sql.Types.VARCHAR);
                        }

                        //pstmt.setBinaryStream(3, content, content.available());
                        int resultados = pstmt.executeUpdate();
                        ResultSet rs = pstmt.getGeneratedKeys();
                        while (rs.next()) {
                            String id = rs.getString("doc_id");
                            
                            try {
                                String dir1 = ent_repositorio.getUrl() + File.separator + year + File.separator + month + File.separator + day;                                
                                new File(dir1).mkdirs();
                                out.println(dir1);
                                FileOutputStream fileOut = new FileOutputStream(dir1 + File.separator +id + ".zip");
                                ZipOutputStream zipOut = new ZipOutputStream(fileOut);
                                zipOut.setLevel(9); // 9 is the max level      
                                ZipEntry zipEntry = new ZipEntry(nombre +".png");
                                zipOut.putNextEntry(zipEntry);

                                // you get the bytes from the image 
                                ByteArrayOutputStream out = new ByteArrayOutputStream();
                                javax.imageio.ImageIO.write(img, "png", out);
                                byte[] bytes = out.toByteArray();

                                // you write the bytes in the zipOutputStream
                                zipOut.write(bytes, 0, bytes.length);
                                zipOut.close();
                            } catch (IOException e) {
                                System.out.println("Se produjo el error : " + e.toString());
                            }
                            
                            

                        }


                        con.close();
                        pstmt.close();
                    }
                    
                    
                    
                    
    
                    
                



            }
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
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(ImagenesFicha.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(ImagenesFicha.class.getName()).log(Level.SEVERE, null, ex);
        }

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
