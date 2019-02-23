package com.frmejia.backend.util;


import java.io.IOException;
import javax.servlet.AsyncContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import static org.jfree.util.Log.debug;

@WebServlet("/googleplus") 
public class GooglePlusServlet extends HttpServlet {
   private static final String CLIENT_ID = "234765107054-sl9nk9robbu8a74e3qp8r23ueg6lhjnq.apps.googleusercontent.com"; 
   private static final String CLIENT_SECRET = "DtRH2k7ZEfEs-30f5Q4PT_CH";
   
   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse res) 
      throws IOException, ServletException {
      //Configure 
//       //Configure 
//      ServiceBuilder builder= new ServiceBuilder(); 
//      OAuthService service = builder.provider(Google2Api.class) 
//         .apiKey(CLIENT_ID) 
//         .apiSecret(CLIENT_SECRET) 
//         .callback("http://localhost:8080/mywebapp/oauth2callback&quot;) 
//         .scope("openid profile email " + 
//               "https://www.googleapis.com/auth/plus.login " + 
//               “https://www.googleapis.com/auth/plus.me”)  
//         .debug(System.out) 
//         .build(); //Now build the call
//      HttpSession sess = req.getSession(); 
//      sess.setAttribute("oauth2Service", service);
//      resp.sendRedirect(service.getAuthorizationUrl(null));
   }
} 
