<%-- 
    Document   : profile
    Created on : 03-ago-2017, 16:22:09
    Author     : frmejia
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="json.JSONObject"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page import="com.trelta.commons.web.CacheBuster"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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

        <!-- Latest compiled JavaScript -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>


        <!-- Js para el cambio de foto de usuario -->
        <script src="js/img_upload.js"></script>

        <!-- Temporal -->

        <script  type='text/javascript'>
            <%
                if ((session.getAttribute("user") != null)) {

                    out.print("var usr_ref=" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + ";\n");

                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                        out.print("var user_tec=true;\n");
                    } else {
                        out.print("var user_tec=false;\n");
                    }

                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("72")) {
                        out.print("var apro_ficha=true;\n");
                    } else {
                        out.print("var apro_ficha=false;\n");
                    }

                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("50")) {
                        out.print("var user_soc=true;\n");
                    } else {
                        out.print("var user_soc=false;\n");
                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("50")) {
                        out.print("var sol_uni=true;\n");
                    } else {
                        out.print("var sol_uni=false;\n");
                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("50")) {
                        out.print("var user_jur=true;\n");
                    } else {
                        out.print("var user_jur=false;\n");
                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("3")) {
                        out.print("var editar_ficha_social=true;\n");
                    } else {
                        out.print("var editar_ficha_social=false;\n");

                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                        out.print("var editar_ficha_tecnica=true;\n");
                    } else {
                        out.print("var editar_ficha_tecnica=false;\n");
                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("8")) {
                        out.print("var editar_servicios=true;\n");
                    } else {
                        out.print("var editar_servicios=false;\n");
                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("9")) {
                        out.print("var editar_fec_tras=true;\n");
                    } else {
                        out.print("var editar_fec_tras=false;\n");
                    }
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("10")) {
                        out.print("var editar_fec_ent=true;\n");
                    } else {
                        out.print("var editar_fec_ent=false;\n");
                    }

                }

                if (session.getAttribute("user") != null) {
                    out.print("var usuario_usuario = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_usuario") + "';\n");
                    out.print("var usuario_nombre = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre") + "';\n");
                    out.print("var usuario_cargo = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_cargo") + "';\n");
                    out.print("var usuario_identificador = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';\n");
                    out.print("var usr_funct= '" + ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades") + "';\n");
                }


            %>

        </script>

    </head>

    <body class="skin-1">

        <div id="wrapper">

            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">


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
                                        <a href="logout.jsp">
                                            <i class="fa fa-sign-out"></i> Cerrar sesión
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i class="fa fa-file-excel-o"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-alerts" style="width:250px;">


                                    <li>
                                        <span class="m-r-sm text-muted welcome-message" id="user_code">
                                            Reportes Ficha Técnica y Social
                                        </span>
                                    </li>                                                                       
                                    <li class="divider"></li>
                                    <li>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Gavilanes</span>

                                                <button type="button" class="btn btn-primary btn-xs " onclick="descargarReporte('reporte_fichas_gavilanes')" data-toggle="tooltip" data-placement="bottom" title="Generar csv">
                                                    <i class="fa fa-file-excel-o"></i>
                                                </button>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Vereditas</span>

                                                <button type="button" class="btn btn-primary btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_fichas_vereditas')" data-placement="bottom" title="Generar csv">
                                                    <i class="fa fa-file-excel-o"></i>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Verificación SIG</span>

                                                <button type="button" class="btn btn-success btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_aprobacion_sig')" data-placement="bottom" title="Generar csv">
                                                    <i class="fa fa-file-excel-o"></i>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Lista de Chequeo</span>

                                                <button type="button" class="btn btn-info btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_lista_chequeo')" data-placement="bottom" title="Generar csv">
                                                    <i class="fa fa-file-excel-o"></i>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Reporte REAS</span>

                                                <button type="button" class="btn btn-danger btn-xs" onclick="reporte_reasentamientos()" data-toggle="tooltip" data-placement="bottom" title="ir al modulo">
                                                    <i class="fa fa-share"></i>
                                                </button>

                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>

                </div>


                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-lg-10">

                    </div>
                    <div class="col-lg-2">

                    </div>
                </div>
                <div class="wrapper wrapper-content animated fadeInRight">
                    <div id="container_detalles_beneficiario"></div>

                    <div class="tabs-container">
                        <ul class="nav nav-tabs">

                            <li class="active"><a data-toggle="tab" href="#tab-repo">Repositorio documental</a></li>

                        </ul>
                        <div class="tab-content">


                            <div id="tab-repo" class="tab-pane active">
                                <div class="panel-body" id="container-panel-repositorio">


                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-12">
                    </div>
                    <div class="clearfix"></div> 
                </div>
                <div class="footer">
                    <div class="pull-right">

                    </div>
                    <div>

                    </div>
                </div>

            </div>

        </div>

        <!--         Popper JS 
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>-->


        <!-- Mainly scripts -->
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
        <script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>


        <!-- Custom and plugin javascript -->
        <script src="js/inspinia.js"></script>
        <script src="js/plugins/pace/pace.min.js"></script>
        <script src="js/reas/namespaceReas.js"></script>

        <!--Redirect to login on idle session-->
        <script src="js/reas/util/idleRedirect.js" type="text/javascript"></script>

        <!-- dx-plugins -->
        <link href="js/vendors/devextreme/css/dx.common.css" rel="stylesheet" type="text/css"/>
        <link href="js/vendors/devextreme/css/dx.light.css" rel="stylesheet" type="text/css"/>
        <script src="js/vendors/devextreme/js/dx.all.js" type="text/javascript"></script>
        <script src="js/reas/beneficiarios/modalUp.js"></script>

        <!-- alpaca JS -->
        <script src="js/vendors/alpaca/dist/lib/handlebars/handlebars.min.js" type="text/javascript"></script>
        <link href="js/vendors/alpaca/dist/alpaca/bootstrap/alpaca.min.css" rel="stylesheet" type="text/css"/>
        <!--<script src="js/vendors/alpaca/dist/alpaca/bootstrap/alpaca.min.js" type="text/javascript"></script>-->
        <script src="js/vendors/alpaca/dist/alpaca/bootstrap/alpaca.js" type="text/javascript"></script>
        <script src="js/vendors/alpaca/dist/lib/moment/min/moment-with-locales.min.js" type="text/javascript"></script>
        <!--Selector de fecha en alpaca-->
        <script src="js/vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
        <link href="js/vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
        <!--Datatables para alpaca-->
        <script src="js/vendors/alpaca/dist/lib/datatables.net/js/jquery.dataTables.min.js" type="text/javascript"></script>
        <script src="js/vendors/alpaca/dist/lib/datatables.net-bs/js/dataTables.bootstrap.min.js" type="text/javascript"></script>
        <script src="js/vendors/alpaca/dist/lib/datatables.net-rowreorder/js/dataTables.rowReorder.min.js" type="text/javascript"></script>
        <link href="js/vendors/alpaca/dist/lib/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet" type="text/css"/>


        <script src="js/reas/beneficiarios/unidad_habitacional.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/detallesBeneficiario.js", "js")%>
        <script src="js/reas/beneficiarios/ficha_caracterizacion.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/tecnica/visita_fallida.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/ficha_reconociomiento.js", "js")%>
        <script src="js/reas/beneficiarios/estudio_titulos.js"></script>
        <script src="js/reas/beneficiarios/reloca_post.js"></script>
        <!--librerias del repositorio-->
        <link type="text/css" href="js/vendors/kartik-v-bootstrap-fileinput/css/fileinput.min.css" rel="stylesheet" />
        <script src="js/vendors/kartik-v-bootstrap-fileinput/js/fileinput.min.js"></script>
        <script src="js/vendors/kartik-v-bootstrap-fileinput/js/locales/es.js"></script>
        <script src="js/vendors/html2canvas/html2canvas.min.js"></script>
        <!--librerias para los pasos-->
        <link href="js/vendors/SmartWizard-master/dist/css/smart_wizard.css" rel="stylesheet" type="text/css" />
        <link href="js/vendors/SmartWizard-master/dist/css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/SmartWizard-master/dist/js/jquery.smartWizard.min.js"></script>
        <!--librerias para checkbox-->
        <link rel="stylesheet" href="js/vendors/awesome-bootstrap-checkbox-1.0.0-alpha.2/bower_components/Font-Awesome/css/font-awesome.css"/>
        <link rel="stylesheet" href="js/vendors/awesome-bootstrap-checkbox-1.0.0-alpha.2/demo/build.css"/>
        <!-- Libreria para mensajes laterales al usuario-->
        <link rel="stylesheet" href="js/vendors/alertifyjs/css/alertify.rtl.css"/>
        <link rel="stylesheet" href="js/vendors/alertifyjs/css/themes/default.rtl.css"/>
        <script type="text/javascript" src="js/vendors/alertifyjs/alertify.js"></script>

        <%  if (session.getAttribute("user") != null) {
                if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("110")) {
                    out.print(CacheBuster.bust(application.getRealPath("/"), "js/reas/repositorio/repositorioDocumental.js", "js"));
                }
                if (session.getAttribute("type").toString().equals("1")) {
                    out.print(CacheBuster.bust(application.getRealPath("/"), "js/reas/repositorio/cargueMasivo.js", "js"));
                }
            }
        %>

        <!--Lista de chqueo-->
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/lista_chequeo/listaChequeo.js", "js")%>


        <!-- Tooltip, es el que muestra los mensajes de ayuda para los botones -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>
        <script src="js/img_upload.js"></script>

        <script>
                                                    var id_user = '<%
                if ((session.getAttribute("user") != null)) {
                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_id"));
                }
            %>';
        </script>
        <link rel="stylesheet" href="js/vendors/viewerjs-master/viewerjs-master/dist/viewer.css">
        <script src="js/vendors/viewerjs-master/viewerjs-master/dist/viewer.js"></script>
        <!--Sistema de notificaciones del sistema, por cada item-->
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/envio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/devolucion_act.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/re_asignacion_tarea.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/est_documentos.js", "js")%>
        <script src="alerta/step.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/lista_chequeo.js", "js")%>
        <script src="alerta/estado_estudio.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Aprobacion_SIG/aprobacion_sig.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Aprobacion_SIG/ver_ficha_tecnica.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/notificaciones.js", "js")%>

        <!--Acta de entrega del Predio PAR-->
        <script type="text/javascript" src="js/reas/tecnica/pasos.js"></script>
        <script src="js/reas/tecnica/direccion.js"></script>
        <link href="js/vendors/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.es.min.js"></script>

        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/acta_entrega.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/pdf_acta_entrega.js", "js")%>

        <!-- Libreria js para el procesamiento digital de imágenes, sirve para la ficha técnica -->
        <script src="js/vendors/jimp-master/browser/lib/jimp.min.js"></script>

        <!--Leaflet para el visor de gestión inmobiliaria-->

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
              integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
              crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
                integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
        crossorigin=""></script>

        <!--Formato de impresiones-->
        <script src="inmobiliaria/formatos.js"></script>
        <script src="inmobiliaria/form_proyecto_nuevo.js"></script>
        <!--Formato de impresiones-->
        <script src="inmobiliaria/visualizar_proyecto.js"></script>
        <script src="inmobiliaria/proy_propio.js"></script>
        <script src="inmobiliaria/loretta.js"></script>

        <!-- Impresiones, impresión de resolución-->
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_estudio.js", "js")%>
        <script src='pdf/pdfmake.min.js'></script>
        <script src='pdf/pdfmake.js'></script>
        <script src='pdf/vfs_fonts.js'></script>
        <script src='pdf/reporte.js'></script>
        <script src='pdf/reporte_social.js'></script>
        <script src='reportes/download.js'></script>


        <script src="alerta/actividad.js"></script>


        <!-- Reporte Generado en Excel para las fichas de vereditas, la de Gavilanes y reporte REAS-->
        <script src='js/reas/util/reportes.js'></script>
        <script src='reportes/reportes_reas.js'></script>

        <!-- librerias para el select con la opción de busqueda.
        
        -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>


        <!--Fabian Mejia: Prueba Ficha social V7 (en desarrollo)-->
        <%  if (session.getAttribute("user") != null) {
                if (session.getAttribute("type").toString().equals("1")) {
                    out.print("<script src='js/reas/ficha_social_v7/ficha_options.js' type='text/javascript'></script>");
                    out.print("<script src='js/reas/ficha_social_v7/ficha_social_v7.js' type='text/javascript'></script>");
                }

            }
        %>


        <script>
                                                    $(document).ready(function () {


                                                        if (usr_funct && usr_funct.indexOf(111) !== -1) {
                                                            $('#container-panel-repositorio').reas().RepositorioDocumental(getURLParams('identificador'));
                                                        }


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
        <script>
            function getURLParams(k) {
                var p = {};
                location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
                    p[k] = v;
                });
                return k ? p[k] : p;
            }


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
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="consultas" aria-hidden="true" id="modal_consultas">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="consultas">

                </div>
            </div>
        </div>

        <!--inicio modal ficha tecnica-->
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="consultas" aria-hidden="true" id="modal_tecnico">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="ficha_tecnica">

                </div>
            </div>
        </div>
        <!--final modal ficha tecnica-->
    </body>

    <style>
        .slick_demo_2 .ibox-content {
            margin: 0 10px;
        }
    </style>
</html>
