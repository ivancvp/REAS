<%-- 
    Document   : index
    Created on : 17/05/2017, 07:42:26 PM
    Author     : Fabian Dc
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.Random"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Map"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page import="com.trelta.commons.web.CacheBuster"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Reasentamientos | Beneficiarios</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/fontawesome-all.css" rel="stylesheet">

        <!-- Text spinners style -->
        <link href="csºs/plugins/textSpinners/spinners.css" rel="stylesheet">

        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <!-- Tooltip, es el que muestra los mensajes de ayuda para los botones -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>

        <!-- Js para el cambio de foto de usuario -->
        <script src="js/img_upload.js"></script>        

        <script src="js/reas/util/idleRedirect.js" type="text/javascript"></script>


        <style>

            .btn.outline {
                background: none;
            }

            .btn-primary.outline {
                border: 2px solid #0099cc;
                color: #0099cc;
            }           


            .btn-primary.outline:hover, .btn-primary.outline:focus, .btn-primary.outline:active, .btn-primary.outline.active, .open > .dropdown-toggle.btn-primary {
                color: #27AE60;
                border-color: #27AE60;
            }
            .btn-primary.outline:active, .btn-primary.outline.active {
                border-color: #007299;
                color: #007299;
                box-shadow: none;
            }

        </style>

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


        %>
        <script  type='text/javascript'>
            <%                if (session.getAttribute("user") != null) {
                    out.print("var usuario_usuario = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_usuario") + "';");
                    out.print("var usuario_nombre = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre") + "';");
                    out.print("var usuario_identificador = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';");
                    out.print("var usuario_cargo = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_cargo") + "';\n");
                }

            %>
        </script>
        <script  type='text/javascript'>
            <%                if ((session.getAttribute("user") != null)) {

                    out.print("var usr_ref=" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + ";\n");

                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                        out.print("var user_tec=true;\n");
                    } else {
                        out.print("var user_tec=false;\n");
                    }

                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("3")) {
                        out.print("var user_soc=true;\n");
                    } else {
                        out.print("var user_soc=false;\n");
                    }

                }


            %>

        </script>

        <div id="wrapper">

            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="dropdown profile-element">
                                <a href="caracoli.jsp">
                                    <span class="clear"> 
                                        <span class="block m-t-xs">
                                            <br><br><br><strong class="font-bold text-white">Caja de la vivienda popular</strong>
                                            <span class="text-white text-xs block">GIS Reasentamientos</span>
                                        </span>  
                                    </span> 
                                </a>
                            </div>
                            <div class="logo-element">
                                Reas
                            </div>
                        </li>
                        <li class="active">
                            <a href="caracoli.jsp"><i class="fa fa-users"></i> <span class="nav-label">Consulta de Beneficiarios</span></a>
                        </li>
                        <li>
                            <a href="reportes_caracoli.jsp"><i class="fa fa-chart-area"></i> <span class="nav-label">Reportes Caracolí</span></a>
                        </li>                       
                        <li>
                            <a href='visor.jsp?config=viewer_caracoli'><i class='fa fa-map-marker-alt'></i> <span class='nav-label'>Visor Geográfico Caracolí</span></a>
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

                                    <li>
                                        <div class="m-r-sm " id="qrcode"></div>
                                        <span class="m-r-sm text-muted welcome-message">
                                            <%  if (session.getAttribute("user") != null) {
                                                    out.print(((Map<String, Object>) session.getAttribute("info")).get("codigo"));
                                                }
                                            %>   
                                        </span>
                                    </li>

                                    <li class="divider"></li>
                                    <li>
                                        <a href="logout.jsp">
                                            <i class="fa fa-sign-out"></i> Cerrar sesión
                                        </a>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </nav>

                </div>
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-lg-9">
                        <h2>Proceso de Caracolí</h2>
                        <ol class="breadcrumb">
                            <li>                                
                                <a href="index.jsp">Inicio 

                                </a>
                            </li>
                            <li class="active">
                                <strong>Caracolí</strong>
                            </li>
                        </ol>
                    </div>



                </div>

                <div class="wrapper wrapper-content animated fadeInRight">
                    <div class="row">

                        <div class="col-lg-12" id="buscador">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <div>
                                        <form role="form" class="form-horizontal" onsubmit="return false;">
                                            <div class="form-group">
                                                <div class="col-sm-6"><input id="txt_buscar_identificadores" type="text" placeholder="Buscar" class="form-control" autofocus><small>Tipo de busqueda: por número de acta, número SDH, nombres, telefono ó dirección</small></div>
                                                <div class="col-sm-2"><a class="btn btn-white" id="buscar">Buscar</a></div>
                                                <div class="col-sm-2"><a class="btn btn-success" id="add_acta" data-toggle="tooltip" data-placement="bottom" title="Adicionar Acta"><i class="fas fa-plus"></i> Adicionar proceso</a></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

        </div>



        <!-- Mainly scripts -->
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
        <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

        <!-- Custom and plugin javascript -->
        <script src="js/inspinia.js"></script>
        <script src="js/plugins/pace/pace.min.js"></script>
        <!-- Validacion de fechas -->
        <script src="js/vendors/moment/moment.js" ></script>       
        <!-- dotdotdot -->
        <script src="js/plugins/dotdotdot/jquery.dotdotdot.min.js"></script>
        <script src="js/reas/namespaceReas.js"></script>
        <script src="js/reas/beneficiarios/modalUp.js"></script>
        <script src="js/reas/beneficiarios/consultaBeneficiarios.js"></script>
        <!--librerias para los pasos-->
        <link href="js/vendors/SmartWizard-master/dist/css/smart_wizard.css" rel="stylesheet" type="text/css" />
        <link href="js/vendors/SmartWizard-master/dist/css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/SmartWizard-master/dist/js/jquery.smartWizard.min.js"></script>

        <link href="js/vendors/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.es.min.js"></script>

        <!--librerias del repositorio-->
        <link type="text/css" href="js/vendors/kartik-v-bootstrap-fileinput/css/fileinput.min.css" rel="stylesheet" />
        <script src="js/vendors/kartik-v-bootstrap-fileinput/js/fileinput.min.js"></script>
        <script src="js/vendors/kartik-v-bootstrap-fileinput/js/locales/es.js"></script>
        <!--librerias para checkbox-->
        <!--<link rel="stylesheet" href="js/vendors/awesome-bootstrap-checkbox-1.0.0-alpha.2/bower_components/Font-Awesome/css/font-awesome.css"/>-->
        <link rel="stylesheet" href="js/vendors/awesome-bootstrap-checkbox-1.0.0-alpha.2/demo/build.css"/>
        <!-- Libreria para mensajes laterales al usuario-->
        <link rel="stylesheet" href="js/vendors/alertifyjs/css/alertify.rtl.css"/>
        <link rel="stylesheet" href="js/vendors/alertifyjs/css/themes/default.rtl.css"/>
        <script type="text/javascript" src="js/vendors/alertifyjs/alertify.js"></script>
        <!-- Libreria para la fecha inputmask-->
        <script type="text/javascript" src="js/vendors/Inputmask/dist/jquery.inputmask.bundle.js" charset="utf-8"></script>
        <script>
                                            $("#mensaje").click(function () {
                                                $("#con_mensajes").toggle();
                                            });
        </script>    
        <%
            Random rand = new Random();
            int n = rand.nextInt(900000000) + 100000000;
            System.out.println(n);

            if ((session.getAttribute("user") != null)) {
                if (((ArrayList) ((Map< String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                    out.print("<script src='js/reas/beneficiarios/proceso.js?ind=" + n + "'></script>");
                }
            }
        %>
        <script src="js/plugins/qrcodejs/qrcode.min.js "></script>
        <!-- js para la generación de la dirección en la ficha técnica -->
        <script src="js/reas/tecnica/direccion.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/caracoli/buscar_caracoli.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/caracoli/creacion_proceso.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/caracoli/caracoli.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/caracoli/caracoli_fotos.js", "js")%>

        <!--Sistema de notificaciones del sistema, para cada tarea-->
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/envio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/correo/correo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/devolucion_act.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/re_asignacion_tarea.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/est_documentos.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/step.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/lista_chequeo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_estudio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_ficha_tecnica.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Aprobacion_SIG/aprobacion_sig.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Aprobacion_SIG/ver_ficha_tecnica.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_ficha_social.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Resolucion/resolucion_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/acta_entrega_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/aprobacion_acta_entrega.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Financiera/financiera_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/notificaciones.js", "js")%>

        <!--Árchivo js donde se programa la inserción de los datos de cada pestaña de la ficha técnica-->
        <script  language="JavaScript" src="js/reas/tecnica/fotos.js?v=<?php echo(rand()); ?>"></script>

        <!-- Impresion de la resolución-->
        
        <script src='pdf/pdfmake.min.js'></script>
        <script src='pdf/pdfmake.js'></script>
        <script src='pdf/vfs_fonts.js'></script>

        <!-- Reporte Generado en Excel para las fichas de vereditas, la de Gavilanes y reporte REAS-->
        <script src='js/reas/util/reportes.js?v=<?php echo(rand()); ?>'></script>
        <script src='reportes/reportes_reas.js'></script>


        <script src="alerta/actividad.js"></script>

        <!-- librerias para el select con la opción de busqueda.-->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>


        <script type="text/javascript">
                                            $(document).ready(function () {
                                                $.fn.modal.Constructor.prototype.enforceFocus = function () { };

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

                                            $("#UPZ").select2();
                                            $("#localidad").select2();


                                            $('#add_acta').click(function () {
                                                caracoli_creacion_proceso();
                                                logica_caracoli_creacion_proceso();

                                            });

                                            $("#txt_buscar_identificadores").on('keyup', function (e) {
                                                if (e.which === 13) {
                                                    texto = $('#txt_buscar_identificadores').val().trim().replace(/\s+/g, " ");
                                                    buscar_caracoli(texto);
                                                }
                                            });

                                            $('#buscar').click(function () {
                                                var texto = $('#txt_buscar_identificadores').val().trim().replace(/\s+/g, " ");
                                                buscar_caracoli(texto);

                                            });







                                            $(document).on('show.bs.modal', '.modal', function () {
                                                var zIndex = 1040 + (10 * $('.modal:visible').length);
                                                $(this).css('z-index', zIndex);
                                                setTimeout(function () {
                                                    $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
                                                }, 0);
                                            });
                                            $(document).on('hidden.bs.modal', '.modal', function () {
                                                $('.modal:visible').length && $(document.body).addClass('modal-open');
                                            });

        </script>



        <div class="modal fade" id="modal_act">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="act">
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" data-focus-on="input:first" style="display: none;" id="modal_form">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="form">

                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" data-focus-on="input:first" style="display: none;" id="modal">
            <div class="modal-dialog modal-lg" style="width:80%">
                <div class="modal-content" id="form1">
                </div>
            </div>
        </div>



    </body>





</html>
