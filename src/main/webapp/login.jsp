<%-- 
    Document   : newjsp
    Created on : 21/06/2016, 10:21:30 AM
    Author     : fabian.mejia
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page import="java.util.ArrayList"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="es">
    <head>
        <%
            session = request.getSession(false);
            if (session.getAttribute("user") != null) {
                if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("200")) {
                    response.sendRedirect("caracoli.jsp");
                }else{
                    response.sendRedirect("index.jsp" );
                }
            }
        %>
        <meta name="google-site-verification" content="bjGTjjA8uiwlL7nUjiPcyB47FoR-Avhxl1ds9cP6WfE" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-signin-client_id" content="716754315264-g6jragf9t9rtc8u8oqp25uv0ijh7039d.apps.googleusercontent.com">
        <title>Inicio de sesión</title>
        <!-- Latest compiled and minified CSS -->
        <link href="js/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

        <!-- Latest compiled JavaScript -->
        <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        
        <link href="font-awesome/css/fontawesome-all.min.css" rel="stylesheet" type="text/css"/>
        
        <script src="https://apis.google.com/_/scs/apps-static/_/js/k=oz.gapi.es.0sQsuU8sov8.O/m=signin2/rt=j/sv=1/d=1/ed=1/am=wQ/rs=AGLTcCOLcF4k1CyCAD-sYVY8nHtdwaLiSw/cb=gapi.loaded_0" async=""></script>

        <script language="JavaScript" src="js/md5.js"></script>
        <!-- jQuery -->
        <!--<script src="/js/jquery-3.1.1.min.js"></script>-->
        
        <script src="https://apis.google.com/js/platform.js" async defer></script> 
        <!--<script src="js/reas/beneficiarios/login.js" async defer></script>--> 
        <script>
            var prevenirCierre = false;
            window.onbeforeunload = function (e) {
                gapi.auth2.getAuthInstance().signOut();
            };
            //Iniciar los controles de la interfaz de usuario
            $(document).ready(function () {
                $('.usuario').attr('placeholder', 'Usuario').attr("required", "true");
                $('.password').attr('placeholder', 'Clave').attr("required", "true");
            });
            function onSignIn(googleUser) {
                var profile = googleUser.getBasicProfile();
                var id_token = googleUser.getAuthResponse().id_token;
                var email = profile.getEmail();
                var data = {
                    'email': email,
                    'token': id_token
                };
                var l = window.location;
                var base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1];
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.disconnect();
               
                $.ajax({
                    type: "POST",
                    url: base_url + "/loginGreas",
                    data: data,
                    dataType: "json",
                    success: function (data) {
                        console.log(data['resultado']);

                        if (data.resultado) {
                            window.location.href = base_url + '/index.jsp';
                        } else {
                            alert("su usuario de google no tiene permisos en el aplicativo");
                        }
                    },
                    error: function () {

                    }
                });
                
            }

            function signOut() {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                    console.log('User signed out.');
                });
            }

            function actionWithURLParams() {
                return "login";
            }
        </script>
        <style>
            .abcRioButtonLightBlue {
                background-color: #fff;
                color: black;
            }
            .abcRioButton {
                -webkit-border-radius: 1px;
                border-radius: 1px;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;
                transition: background-color .218s,border-color .218s,box-shadow .218s;
                -webkit-user-select: none;
                -webkit-appearance: none;
                background-color: #fff;
                background-image: none;
                color: #262626;
                cursor: pointer;
                outline: none;
                overflow: hidden;
                position: relative;
                text-align: center;
                vertical-align: middle;
                white-space: nowrap;
                width: auto;
            }
            .abcRioButton {
                width: 100% !important;
            }
            .login_content {
                margin: 0 auto;
                padding: 25px 0 0;
                position: relative;
                text-align: center;
                text-shadow: 0 1px 0 #fff;
                min-width: 280px;
            }              
            .login_wrapper {
                right: 0px;
                margin: 0px auto;
                margin-top: 5%;
                max-width: 350px;
                position: relative;
            }
            body {
                color: #73879C;
                background: #F7F7F7;

                font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
                font-size: 13px;
                font-weight: 400;
                line-height: 1.471;
            }
        </style>
    </head>
    <body class="login">
        <div>
            <div class="login_wrapper">
                <div class="animate form login_form">
                    <section class="login_content">

                        <form id="login" name="login" method="POST" action="login" >
                            <!--<input type="hidden" name="login" value="login">-->

                            <h1>Inicio de sesión</h1>
                            <div>
                                <input id="login:username" type="text" name="login:username" class="form-control usuario" placeholder="Usuario" required="required"> 
                            </div>
                            <div>
                                <input id="login:password" type="password" name="login:password" value="" onchange="document.getElementById('login:password').value = calcMD5(document.getElementById('login:password').value)" class="form-control password" placeholder="Clave" required="required">
                            </div>
                            <div>
                                <input id="submit" type="submit" name="login:submit" value="Ingresar" style="float: none; margin: 0 auto;" class="btn btn-default submit">
                                <div class="clearfix"></div>

                            </div>
                            <div class="clearfix"></div>
                            <c:if test="${not empty message}">
                                <h1>${message}</h1>
                            </c:if>
                            <%
                                if (request.getParameter("idle") != null) {
                                    out.println("<h4>Usted ha sido redireccionado por inactividad en la página.<br/><br/>Por motivos de seguridad es necesario que ingrese nuevamente sus credenciales de usuario</h4>");
                                    //out.println("<input type='hidden' name='source' value='" + request.getParameter("source") + "' />");
                                }
                                if (request.getParameter("secondlogin") != null) {
                                    out.println("<h4 style='color:red'>Su sesión ha finalizado!</h4><br><h4>Por motivos de seguridad usted ha sido redireccionado.<br><h4>Es probable que su sesión expirara por inactividad u otro usuario ingresó al sistema utilizando sus mismas credenciales.</h4><br><br>Recuerde que los datos de usuario y contraseña son personales y solo deben ser utilizados por la persona autorizada.</h4>");
                                }

                                Map parametros = new LinkedHashMap(request.getParameterMap());

                                if (parametros.size() > 0) {
                                    Iterator itr = parametros.entrySet().iterator();
                                    while (itr.hasNext()) {
                                        Map.Entry e = (Map.Entry) itr.next();
                                        out.println("<input type='hidden' name='" + e.getKey().toString() + "' value='" + request.getParameter(e.getKey().toString()) + "' />");
                                    }
                                }
                            %>
                            <hr>
                            para entrar con google
                            <div  style="width: 100%" class="g-signin2" data-onsuccess="onSignIn"></div>
                            <div class="separator">
                                <div class="clearfix"></div>
                                <br>

                                <div>
                                    <h1>GIS Reasentamientos</h1>
                                    <p>Caja de la Vivienda Popular</p>
                                </div>
                            </div>
                            <!--Fabian: esto se necesita?-->
                            <!--<input type="hidden" name="javax.faces.ViewState" id="javax.faces.ViewState" value="-4750283184121915811:-5228658476506959493" autocomplete="off">-->
                        </form>
                    </section>
                </div>

            </div>
        </div>

        </body>
</html>
