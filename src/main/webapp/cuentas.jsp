<%-- 
    Document   : index
    Created on : 17/05/2017, 07:42:26 PM
    Author     : Fabian
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Map"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Reasentamientos | Beneficiarios</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/font-awesome.css" rel="stylesheet">

        <!-- Text spinners style -->
        <link href="css/plugins/textSpinners/spinners.css" rel="stylesheet">

        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <!-- Tooltip -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>
        <script src="js/img_upload.js"></script>


    </head>

    <body class="skin-1">
        <%
            session = request.getSession(false);
            if (session.getAttribute("user") == null) {

                String uri = request.getRequestURI();
                String pageName = uri.substring(uri.lastIndexOf("/") + 1);
                String urlParams = "?source=" + pageName;

                Map parametros = new LinkedHashMap(request.getParameterMap());

                if (parametros.size() > 0) {
                    Iterator itr = parametros.entrySet().iterator();
                    while (itr.hasNext()) {
                        Map.Entry e = (Map.Entry) itr.next();
                        urlParams += "&" + e.getKey().toString() + "=" + ((String[]) e.getValue())[0];
                    }
                }
                response.sendRedirect("login.jsp" + urlParams);
            }
            if (!((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("70")) {
                response.sendRedirect("login.jsp");
            }

        %>
        <div id="wrapper">

            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="dropdown profile-element">
                                <a href="index.jsp">
                                    <span class="clear"> 
                                        <span class="block m-t-xs">
                                            <br><br><br><strong class="font-bold text-white">Caja de la vivienda popular</strong>
                                            <span class="text-white text-xs block">SIG Reasentamientos</span>
                                        </span>  
                                    </span> 
                                </a>
                            </div>
                            <div class="logo-element">
                                Reas
                            </div>
                        </li>
                        <li class="active">
                            <a href="index.jsp"><i class="fa fa-group"></i> <span class="nav-label">Consulta de Beneficiarios</span></a>
                        </li>                      
                        <li>
                            <%  if (session.getAttribute("user") != null) {
                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("90")) {
                                        out.print("<a href='visor.jsp?config=viewer'><i class='fa fa-map-marker'></i> <span class='nav-label'>Visor Geográfico</span></a>");
                                    } else {
                                        out.print("<a href='visor.jsp?config=viewer_consulta'><i class='fa fa-map-marker'></i> <span class='nav-label'>Visor Geográfico</span></a>");
                                    }
                                }
                            %>

                        </li>
                    </ul>

                </div>
            </nav>

            <div id="page-wrapper" class="gray-bg">
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                            <form role="search" class="navbar-form-custom" action="search_results.html">
                                <div class="form-group">
                                    <!--<input type="text" placeholder="Buscar..." class="form-control" name="top-search" id="top-search">-->
                                </div>
                            </form>
                        </div>
                        <ul class="nav navbar-top-links navbar-right" id="enca">                                                    
                            <li>
                                <span class="m-r-sm text-muted welcome-message">Sistema de Información Geográfica, Reasentamientos | CVP</span>

                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i class="fa fa-user"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-alerts">


                                    <li>
                                        <span class="m-r-sm text-muted welcome-message" id="user_code">
                                            <%  if (session.getAttribute("user") != null) {
                                                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre"));
                                                }
                                            %>   
                                        </span>
                                    </li>
                                    <li>
                                        <div id="img_user">
                                        </div>  
                                    </li>                                    
                                    <li class="divider"></li>
                                    <form>
                                        <li>
                                            <div class="m-r-sm " id="qrcode"></div>
                                            <span class="m-r-sm text-muted welcome-message">
                                                <%  if (session.getAttribute("user") != null) {
                                                        out.print(((Map<String, Object>) session.getAttribute("info")).get("codigo"));
                                                    }
                                                %>   
                                            </span>
                                        </li>
                                    </form>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="login.jsp">
                                            <i class="fa fa-sign-out"></i> Cerrar sesión
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>

                </div>       
                <div>
                    <h3>Cuentas de ahorro programado </h3>

                    <form action="CuentasUploader" method="post" enctype="multipart/form-data">  
                        <div class="alert alert-info" role="alert">
                           <p>¡Tenga en cuenta!-</p> El sisguiente botón actualizará la información de las cuentas de ahorro programado, con la información depositada en el último archivo generado.
                        </div>
                        <!--                        <input type="file" class="form-control" name="file"/>-->

                        <input type="submit"  class="btn btn-success" />
                    </form>


                </div>	
                <br>
                <div >	
                    <c:if test="${not empty message}">
                        <h3>${message}</h3>
                    </c:if>

                </div>	
                <div class="pazysalvo" >	
                    <table class="table small m-b-xs">	
                        <tbody>
                            <tr>			
                                <th>Nombre Archivo</th>		
                                <th>Fecha de carga</th>		
                                <th>Opción</th>	                	
                            </tr>			
                        </tbody>
                        <tbody id="arch_cuentas">	                          			

                        </tbody>
                    </table>
                </div>	


            </div>

        </div>




        <!-- Mainly scripts -->
        <script src="js/jquery-3.1.1.min.js"></script>

        <script src="js/bootstrap.min.js"></script>
        <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
        <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

        <!-- Custom and plugin javascript -->
        <script src="js/inspinia.js"></script>
        <script src="js/plugins/pace/pace.min.js"></script>

        <!-- dotdotdot -->
        <script src="js/plugins/dotdotdot/jquery.dotdotdot.min.js"></script>

        <script src="js/reas/namespaceReas.js"></script>
        <script src="js/reas/cuentas/cuentas_ahorro.js"></script>



        <script src="js/plugins/qrcodejs/qrcode.min.js "></script>

        <script>
            var id_user = '<%
                if ((session.getAttribute("user") != null)) {
                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_id"));
                }
            %>';
            var data = {
            'file': $('#file').prop('files')[0]

            };
            var l = window.location;
            var base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1];
            $('#subir').on('click', function () {
            $.ajax({
            type: "POST",
                    url: base_url + "/FileUploader"
                    success: function (data) {

                    },
                    error: function () {

                    }
            });
            });
        </script>

        <script src="alerta/notificaciones.js"></script>
        <script src="alerta/devolucion_act.js"></script>
        <script src="alerta/re_asignacion_tarea.js"></script>
        <script src="alerta/resolucion.js"></script>
        <script src="alerta/est_documentos.js"></script>
        <script src="alerta/step.js"></script>
        <script src="alerta/lista_chequeo.js"></script>


        <!-- Impresion Resolucion-->
        <script src="pdf/impresion_estudio.js"></script>
        <script src='pdf/pdfmake.min.js'></script>
        <script src='pdf/pdfmake.js'></script>
        <script src='pdf/vfs_fonts.js'></script>

        <script src="alerta/envio.js"></script>

        <script src="alerta/actividad.js"></script>


        <style>
            .titulo{
                background-color: #F2F3F4;

            }
            .form-horizontal .control-label{
                text-align: left;
            }
            h1{
                color:#3498DB;
            }



            .stepwizard-step p {
                margin-top: 10px;
            }
            .stepwizard-row {
                display: table-row;
            }
            .stepwizard {
                display: table;
                width: 100%;
                position: relative;
            }
            .stepwizard-step button[disabled] {
                opacity: 1 !important;
                filter: alpha(opacity=100) !important;
            }
            .stepwizard-row:before {
                top: 14px;
                bottom: 0;
                position: absolute;
                content: " ";
                width: 100%;
                height: 1px;
                background-color: #ccc;
                z-order: 0;
            }
            .stepwizard-step {
                display: table-cell;
                text-align: center;
                position: relative;
            }
            .btn-circle {
                width: 30px;
                height: 30px;
                text-align: center;
                padding: 6px 0;
                font-size: 12px;
                line-height: 1.428571429;
                border-radius: 15px;
            }








        </style>





        <script type="text/javascript">
            <%  if (session.getAttribute("user") != null) {
                    out.print("var qr = '" + ((Map<String, Object>) session.getAttribute("info")).get("codigo") + "';");
                }
            %>
            var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: qr,
                    width: 256,
                    height: 256,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
            });
            <%
                if ((session.getAttribute("user") != null)) {
                    if (!((ArrayList) ((Map< String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                        out.print("$('#creacion_form').hide();");
                    }

                }
            %>
        </script>


        <script>
            $(document).ready(function () {

            <%  if (session.getAttribute("user") != null) {
                    out.print("var cod_user = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';");
                }
            %>

            imagenUsuario(cod_user);
            tippy('#img_profile', {
            placement: 'right',
                    animation: 'fade',
                    duration: 250,
                    followCursor: true
            });
            });
        </script>











    </body>

</html>
