<%-- 
    Document   : profile
    Created on : 03-ago-2017, 16:22:09
    Author     : frmejia
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.HashMap"%>
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
        <link href="font-awesome/css/fontawesome-all.css" rel="stylesheet">
        <!-- Text spinners style -->
        <link href="css/plugins/textSpinners/spinners.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <!-- Latest compiled JavaScript -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>

        <!-- Js para el cambio de foto de usuario -->
        <script src="js/img_upload.js"></script>



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
                            <a href="index.jsp"><i class="fa fa-users fa-lg"></i> <span class="nav-label">Consulta de Beneficiarios</span></a>
                        </li>
                        <li>
                            <a href="reportes.jsp"><i class="fa fa-chart-area"></i><span class="nav-label">Reportes</span> 
                                <span class="fa arrow"></span>
                            </a>
                            <ul class="nav nav-second-level">
                                <li><a href="tablero_indicadores.jsp">Tablero de indicadores</a></li>
                                <li><a href="reportes.jsp">Reportes Avanzados</a></li>
                            </ul>
                        </li>    
                        <!--    <li>
                                 <a href=""><i class="fa fa-file-o"></i> <span class="nav-label">Repositorio documental</span></a>
                                </li>-->
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
                                <a class="dropdown-toggle count-info" id="nom_usuario" data-toggle="dropdown" href="#">

                                    <%  if (session.getAttribute("user") != null) {
                                            out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre"));
                                        }
                                    %>
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
                            <li>
                                <a href="#" id="cerrar_se" style="font-size: 12px;text-align: center;">
                                    <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                                </a>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i class="fa fa-file-excel "></i>
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

                                                <button type="button" class="btn btn-link btn-xs " onclick="descargarReporte('reporte_fichas_gavilanes')" data-toggle="tooltip" data-placement="bottom" title="Generar csv">
                                                    <div style="font-size:1.8em; color:#229954">
                                                        <i class="far fa-file-excel"></i>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Vereditas</span>

                                                <button type="button" class="btn btn-link btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_fichas_vereditas')" data-placement="bottom" title="Generar csv">
                                                    <div style="font-size:1.8em; color:#229954">
                                                        <i class="far fa-file-excel"></i>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Verificación SIG</span>

                                                <button type="button" class="btn btn-link btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_aprobacion_sig')" data-placement="bottom" title="Generar csv">
                                                    <div style="font-size:1.8em; color:#229954">
                                                        <i class="far fa-file-excel"></i>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Identificadores en estudio de documentos</span>

                                                <button type="button" class="btn btn-link btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_estudios_en_elaboracion')" data-placement="bottom" title="Generar csv">
                                                    <div style="font-size:1.8em; color:#229954">
                                                        <i class="far fa-file-excel"></i>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Lista de Chequeo</span>

                                                <button type="button" class="btn btn-link btn-xs" data-toggle="tooltip" onclick="descargarReporte('reporte_lista_chequeo')" data-placement="bottom" title="Generar csv">
                                                    <div style="font-size:1.8em; color:#3498DB">
                                                        <i class="far fa-file-excel"></i>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group">
                                                <span class="col-sm-8 m-r-sm text-muted welcome-message">Reporte REAS</span>

                                                <button type="button" class="btn btn-link btn-xs" onclick="reporte_reasentamientos()" data-toggle="tooltip" data-placement="bottom" title="ir al modulo">
                                                    <div style="font-size:1.5em; color:#E74C3C">
                                                        <i class="fas fa-arrow-right"></i>
                                                    </div>
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
                        <h2>Consulta de beneficiarios | Reasentamientos</h2>
                        <ol class="breadcrumb">
                            <li>
                                <a href="index.jsp">Inicio</a>
                            </li>
                            <li class="active">
                                <strong>Beneficiarios</strong>
                            </li>

                        </ol>
                    </div>
                    <div class="col-lg-2">

                    </div>
                </div>
                 
                                            
               <!-- Modal del historio de notificaciones 
                <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">
                  <i class="far fa-comment-alt"></i> Ver Histórico
                </button>

                
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Histórico de notificaciones</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
           
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>                             
                                            
               -->                           
                                            
                                            
                             
                <div class="wrapper wrapper-content animated fadeInRight">
                    <div id="container_detalles_beneficiario"></div>
                    
                    <div class="row">
                        <div class="tabs-container col-lg-8">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#tab-1">Proceso</a></li>
                                <li class=""><a data-toggle="tab" href="#tab-repo">Repositorio documental</a></li>
                                    <%  if (session.getAttribute("user") != null) {
                                            if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("115")) {
                                                out.print("<li class=''><a data-toggle='tab' href='#tab-lista-chequeo'>Lista de chequeo <small>(en desarrollo)</small></a></li>");
                                            }
                                        }
                                    %>
                            </ul>
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane active">
                                    <div class="panel-body">
                                        <div class="ibox float-e-margins">
                                            <div class="ibox-content" id="ibox-content">
                                                <div id="vertical-timeline" class="vertical-container dark-timeline center-orientation">
                                                    <div class="vertical-timeline-block">
                                                        <div class="vertical-timeline-icon navy-bg">
                                                            <i class="far fa-id-card"></i>
                                                        </div>

                                                        <div class="vertical-timeline-content">
                                                            <h2>Identificación de la familia</h2>
                                                            <p>Identificación del núcleo familiar, las características físicas del Predio en Alto Riesgo (PAR) y unidades habitacionales.</p>
                                                            <p id="txt_social"></p>

                                                            <%  if (session.getAttribute("user") != null) {
                                                                    if (((Map<String, Object>) session.getAttribute("info")).get("usuario_id").toString().equals("1")) {

                                                                        out.print("<button type='button' class='btn btn-sm btn-primary' onclick='$().reas().FichaSocial_V7(getURLParams(\"identificador\"));'>Prueba Ficha social (en desarrollo)</button><div class='clearfix'></div>");
                                                                    }
                                                                }
                                                            %> 
                                                            <a href="#" class="btn btn-sm btn-primary" id="freconocimiento">1. <i class="fas fa-file-alt"></i> Ficha de reconocimiento</a>

                                                            <br><br>
                                                            <a href="#" class="btn btn-sm btn-primary" id="fcaracterizacion" >2.  <i class="fas fa-users"></i>  Ficha de caracterización</a>
                                                            <br><br>


                                                            <%  if (session.getAttribute("user") != null) {
                                                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("50")) {
                                                                        out.print("<button type='button' id='lista_chequeo_btn'  class='btn btn-sm btn-success' onclick='hola({formulario:1,index:getURLParams(\"identificador\"),modo:3})'>3. <i class='fas fa-list-ol'></i> Lista de Chequeo</button>");
                                                                    }
                                                                }
                                                            %><%  if (session.getAttribute("user") != null) {
                                                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("24")) {
                                                                        out.print("<button type='button' id='lista_chequeo_btn'  class='btn btn-sm btn-success' onclick='hola({formulario:1,index:getURLParams(\"identificador\"),modo:3})'>3. <i class='fas fa-list-ol'></i> Lista de Chequeo</button>");
                                                                    }
                                                                }
                                                            %>
                                                            <br><br>

                                                            <%  if (session.getAttribute("user") != null) {
                                                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                                                                        out.print("<button type='button' id='acta_entrega_btn' class='btn btn-sm btn-success' onclick='gen_acta_entrega(getURLParams(\"identificador\"))'>Acta de Entrega PAR</button>");
                                                                    }
                                                                }
                                                            %>
                                                            <br><br>
                                                            <%  if (session.getAttribute("user") != null) {
                                                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                                                                        out.print("<button type='button' class='btn btn-sm btn-success' onclick='hola({formulario:8,index:getURLParams(\"identificador\"),modo:3})'> <i class='fas fa-home'></i> Acta de Entrega Vereditas</button>");
                                                                    }
                                                                }
                                                            %>
                                                            <br><br>
                                                            <%  if (session.getAttribute("user") != null) {
                                                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("116")) {
                                                                        out.print("<button type='button' class='btn btn-sm btn-success' id='concepto_hidrico' > <i class='fas fa-map'></i> Concepto de ronda hídrica</button>");
                                                                    }
                                                                }
                                                            %>
                                                            <br><br>
                                                            <span class="vertical-date">P-1 <br/><small></small>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="vertical-timeline-block">
                                                        <div class="vertical-timeline-icon blue-bg">
                                                            <i class="far fa-file-alt"></i>
                                                        </div>

                                                        <div class="vertical-timeline-content">
                                                            <h2>Estudio de Documentos</h2>
                                                            <p>Encuentra aquí estudio de documentos, estudios de títulos, y concepto de viabilidad.  </p>
                                                            <ul id="estudio_documentos">

                                                            </ul>
                                                            <a  class="btn btn-sm btn-primary" id="etitulos"><i class="far fa-file-alt"></i> Ver Estudios </a>
                                                            
                                                            <span class="vertical-date">P-2 <br/><small></small></span>
                                                            <br><br>
                                                            <a  class="btn btn-sm btn-success" id="ver_resolucion_vereditas" onclick="hola({formulario: 3, index: getURLParams('identificador'), modo: 3})" style="display:none"><span class="glyphicon glyphicon-search"></span> Ver Resolución </a>
                                                            <!--
                                                            <%  if (session.getAttribute("user") != null) {

                                                                    out.print("<button type='button' class='btn btn-sm btn-success' onclick='hola({formulario:3,index:getURLParams(\"identificador\"),modo:3})'><i class='fa fa-pencil-square-o'></i> Elaborar est. documentos</button>");

                                                                }
                                                            %> 
                                                            -->

                                                        </div>
                                                    </div>
                                                    <div class="vertical-timeline-block">
                                                        <div class="vertical-timeline-icon blue-bg">
                                                            <i class="far fa-file-alt"></i>
                                                        </div>

                                                        <div class="vertical-timeline-content">
                                                            <h2>Financiera</h2>
                                                            <p>Encuentra aquí lo relacionado a la información financiera del proceso. </p>
                                                            <a href="#" class="btn btn-sm btn-primary" id="inf_financiera" onclick="hola({formulario: 10, index: getURLParams('identificador'), modo: 3})"><i class="fas fa-dollar-sign"></i> Financiera Vereditas</a>

                                                        </div>
                                                    </div>                                                        


                                                    <div class="vertical-timeline-block">
                                                        <div class="vertical-timeline-icon lazur-bg">
                                                            <i class="fas fa-home"></i>
                                                        </div>

                                                        <div class="vertical-timeline-content">
                                                            <h2>Relocalización Transitoria</h2>
                                                            <p>Información de relocalización. </p>
                                                            <p id="relocatext" > </p>
                                                            <button  class="btn btn-sm btn-info" onclick="enviarReloca()" id="reloca" >Ir a Reloca</button>
                                                            <span class="vertical-date">P-3<br/><small id="fecha_pago"></small></span>
                                                        </div>
                                                    </div>

                                                    <div class="vertical-timeline-block">
                                                        <div class="vertical-timeline-icon yellow-bg">
                                                            <i class="far fa-building"></i>
                                                        </div>                                                      
                                                        
                                                        <div class="vertical-timeline-content">    
                                                            
                                                            <div class="row">
                                                                <h2>Solución de vivienda</h2>
                                                                <p >Gestión inmobiliaria, vivienda nueva y vivienda usada.</p>                                                          
                                                                <!--<button  class="btn btn-sm yellow-bg" onclick="general_gestion_inmobiliaria()" ><i class="fas fa-home"></i> Gestión inmobiliaria</button>-->
                                                                <button  class="btn btn-sm yellow-bg" onclick="gestion_inmobiliaria_escrituras(getURLParams('identificador'))" ><i class="fas fa-newspaper"></i> Escrituras</button>
                                                            </div>
                                                                <!--
                                                            <div  class="row ">
                                                                <label class="control-label col-sm-6">Portafolio de proyectos:</label>
                                                                <button type='button' class='btn btn-sm btn-success' onclick="ver_modal()">Ver</button>
                                                            </div>
                                                            <div  class="row ">
                                                                <label class="control-label col-sm-6">Formatos:</label>
                                                                <button type='button' class='btn btn-sm btn-primary' onclick="modal_formato()">Ver</button>
                                                            </div>
                                                            -->
                                                            <div class="row">
                                                            <p id="vivienda"></p>
                                                            <span class="vertical-date">P-4 <br/><small></small></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="vertical-timeline-block">
                                                        <div class="vertical-timeline-icon lazur-bg">
                                                            <i class="fa fa-check-square"></i>
                                                        </div>

                                                        <div class="vertical-timeline-content">
                                                            <h2>Cierre del proceso</h2>
                                                            <p>Cierre administrativo </p>
                                                            <span class="vertical-date">P-5<br/><small></small></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-repo" class="tab-pane">
                                    <div class="panel-body" id="container-panel-repositorio">


                                    </div>
                                </div>

                                <div id="tab-lista-chequeo" class="tab-pane" style="min-height: 620px;">
                                    <div class="panel-body" id="container-panel-lista-chequeo" style="min-height: 620px;">


                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" id="container-comentarios">
                        </div>
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

        <!-- Libreria para la fecha inputmask-->
        <script type="text/javascript" src="js/vendors/Inputmask/dist/jquery.inputmask.bundle.js" charset="utf-8"></script>
        
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/unidad_habitacional.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/detallesBeneficiario.js", "js")%>
        
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/ficha_caracterizacion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/tecnica/visita_fallida.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/ficha_reconociomiento.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/beneficiarios/estudio_titulos.js", "js")%>
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
        
        <!-- Libreria para botones-->
        <link rel="stylesheet" href="js/vendors/press-css-master/css/press.css" />
        
        
        
        <%  if (session.getAttribute("user") != null) {
                if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("110")) {
                    out.print(CacheBuster.bust(application.getRealPath("/"), "js/reas/repositorio/repositorioDocumental.js", "js"));
                }
                if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("113")) {
                //if (session.getAttribute("type").toString().equals("1")) {
                    out.print(CacheBuster.bust(application.getRealPath("/"), "js/reas/repositorio/cargueMasivo.js", "js"));
                }
            }
        %>

        <!--Lista de chqueo-->
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/lista_chequeo/listaChequeo.js", "js")%>


        <!-- Tooltip, es el que muestra los mensajes de ayuda para los botones -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>
        <script src="js/img_upload.js"></script>

        <!-- Validacion de fechas -->        
        <script src="js/vendors/moment/moment.js" ></script>  
        <script src="js/vendors/moment/locale/es.js" ></script> 
        <!-- Plugin para linea del tiempo -->
        <link rel="stylesheet" href="js/vendors/timeline/src/jquery.timeline.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
        <script src="js/vendors/timeline/src/jquery.timeline.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/LineaTiempo/timeline.js", "js")%>
        <script>
                                                                    var id_user = '<%
                if ((session.getAttribute("user") != null)) {
                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_id"));
                }
            %>';
        </script>
        <link rel="stylesheet" href="js/vendors/viewerjs-master/viewerjs-master/dist/viewer.css">
        <script src="js/vendors/viewerjs-master/viewerjs-master/dist/viewer.js"></script>
        <!-- js para la generación de la dirección en la ficha técnica -->
        <script src="js/reas/tecnica/direccion.js"></script>
        <!--Edicion de servicios publicos-->
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Edicion_Servicios_Publicos/edicion_servicios_publicos.js", "js")%>        
        <!--Sistema de notificaciones del sistema, por cada item-->
        <script type="text/javascript" src="js/vendors/Inputmask/dist/jquery.inputmask.bundle.js" charset="utf-8"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/envio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/correo/correo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/devolucion_act.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/re_asignacion_tarea.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/est_documentos.js", "js")%>
        <script src="alerta/step.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/lista_chequeo.js", "js")%>
        <script src="alerta/estado_estudio.js"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_estudio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Aprobacion_SIG/aprobacion_sig.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Aprobacion_SIG/ver_ficha_tecnica.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/aprobacion_ficha_social.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Resolucion/resolucion_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Resolucion/resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Resolucion/solicitud_vur.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/acta_entrega.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/pdf_acta_entrega.js", "js")%>        
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/acta_entrega_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/aprobacion_acta_entrega.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Financiera/financiera_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Financiera/aprobacion_financiera.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/estudio_documentos/acta_cierre_est_negativo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/estudio_documentos/aprobacion_acta_cierre_est_negativo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/estudio_documentos/adenda.js", "js")%>
       
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/mensajes.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/notificaciones.js", "js")%>

        <!--Acta de entrega del Predio PAR-->
        <script type="text/javascript" src="js/reas/tecnica/pasos.js"></script>
        <script src="js/reas/tecnica/direccion.js"></script>
        <link href="js/vendors/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.es.min.js"></script>



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
        <!--Esquema de gestión inmobiliaria-->
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/gestion_inmobiliaria/creacion_proyecto.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/gestion_inmobiliaria/gestion_inmobiliaria.js", "js")%>
         <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/gestion_inmobiliaria/escrituras.js", "js")%>
        
        
        <!-- Impresiones-->
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_estudio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_adenda.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_concepto_zona_hidrica.js", "js")%>
        
        <script src='pdf/pdfmake.min.js'></script>
        <script src='pdf/pdfmake.js'></script>
        <script src='pdf/vfs_fonts.js'></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/reporte.js", "js")%>
        <script src='pdf/reporte_social.js'></script>
        <script src='reportes/download.js'></script>


        <script src="alerta/actividad.js"></script>


        <!-- Reporte Generado en Excel para las fichas de vereditas, la de Gavilanes y reporte REAS-->
        <script src='js/reas/util/reportes.js'></script>
        <script src='reportes/reportes_reas.js'></script>
        <!--Plugin para descargar excel-->
        <script src='js/vendors/export-excel/excelexportjs.js'></script>
        
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

        <!--Fabian Mejia: comentarios (en desarrollo)-->
        <script src='js/vendors/tribute/dist/tribute.js' type='text/javascript'></script>
        <link href='js/vendors/tribute/dist/tribute.css' rel='stylesheet' type='text/css' />
        <script src='js/reas/comentarios/comentarios.js' type='text/javascript'></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/alerta_pasivos_exigibles/alerta.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/reporte_ronda_zampa/form_reporte_riesgo.js", "js")%>

        <script>
        $(document).ready(function () {
            $('#container_detalles_beneficiario').reas().DetallesBeneficiario(getURLParams('identificador'));
            $('#ifreame_visor').attr('src', "visor.html?identificador=" + getURLParams('identificador'));

            if (usr_funct && usr_funct.indexOf(111) !== -1) {
                $('#container-panel-repositorio').reas().RepositorioDocumental(getURLParams('identificador'));
            }
            if (usr_funct && usr_funct.indexOf(115) !== -1) {
                $('#container-panel-lista-chequeo').reas().ListaChequeo(getURLParams('identificador'));
            }

            $('#container-comentarios').reas().Comentarios(getURLParams('identificador'));


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
        $('#cerrar_se').click(function () {
            var x = screen.width / 2 - 700 / 2;
            var y = screen.height / 2 - 450 / 2;
            window.open("prelogout.html", "contestrules", "menubar=150,resizable=0,width=500,height=250 ,left=" + x + ",top=" + y + ",location=no, scrollbars=no");

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

        <link href='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.css' rel='stylesheet' type='text/css' />
        <script src='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.js' type='text/javascript'></script>
        
    <style>
        .slick_demo_2 .ibox-content {
            margin: 0 10px;
        }
    </style>
</html>
