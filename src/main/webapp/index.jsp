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
        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
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
                if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("200")) {
                    response.sendRedirect("caracoli.jsp" + urlParams);
                } else {
                    response.sendRedirect("index.jsp" + urlParams);
                }

            }


        %>
        <script  type='text/javascript'>
            <%             if (session.getAttribute("user") != null) {
                    out.print("var usuario_usuario = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_usuario") + "';");
                    out.print("var usuario_nombre = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre") + "';");
                    out.print("var usuario_identificador = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';");
                    out.print("var usuario_cargo = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_cargo") + "';\n");
                    out.print("var usuario_tius = '" + ((Map<String, Object>) session.getAttribute("info")).get("tius_id") + "';\n");
                    out.print("var usr_funct= '" + ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades") + "';\n");
                    if (((ArrayList) ((Map< String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("201")) {
                        out.print("var paimes=true;");
                    } else {
                        out.print("var paimes=false;");
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
                                <a href="index.jsp">
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
                            <a href="index.jsp"><i class="fa fa-users"></i> <span class="nav-label">Consulta de Beneficiarios</span></a>
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
                        <li>
                            <%  if (session.getAttribute("user") != null) {
                                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("90")) {
                                        out.print("<a href='visor.jsp?config=viewer'><i class='fa fa-map-marker-alt'></i> <span class='nav-label'>Visor Geográfico</span></a>");
                                    } else {
                                        out.print("<a href='visor.jsp?config=viewer_consulta'><i class='fa fa-map-marker-alt'></i> <span class='nav-label'>Visor Geográfico</span></a>");
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
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" id="nom_usuario" href="#">
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
                                    <!--                                    <li>
                                                                            <a href="#" id="cerrar_se" style="font-size: 15px;text-align: center;">
                                                                                <i class="fas fa-sign-out-alt fa-2x"></i> Cerrar sesión
                                                                            </a>
                                                                        </li>-->
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="cerrar_se" style="font-size: 12px;text-align: center;">
                                    <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                                </a>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i class="fa fa-file-excel"></i>
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
                    <div class="col-lg-9">
                        <h2>Consulta de beneficiarios | Reasentamientos</h2>
                        <ol class="breadcrumb">
                            <li>                                
                                <strong><a href="index.jsp">Inicio</a></strong>
                            </li>
                            <li>
                                <a href="caracoli.jsp">Caracolí</a>
                            </li>
                        </ol>
                    </div>


                    <%  if (session.getAttribute("user") != null) {
                            if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("4")) {
                                out.print("<div class='col-lg-2'><a class='btn btn-primary' data-toggle='modal' data-target='#creacion_form'  style=' margin-top: 20px; margin-bottom: 10px;' href='#' >Crear Nuevo proceso</a> </div>");
                            }
                        }

                    %>



                    <%  if (session.getAttribute("user") != null) {
                            if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("70")) {

                                out.print("<div class='col-lg-2'><a class='btn btn-primary' style=' margin-top: 20px; margin-bottom: 10px;' href='/Reas/cuentas.jsp' >Archivo Cuentas Ahorro</a> </div>");
                            }
                        }
                    %>  


                </div>
                <!--
                <input type="file" id="myFile" multiple="multiple">   
                <button type="button" class="btn btn-danger btn-xs" id="imp_masiva">Impresión masiva </button>
                <button type="button" class="btn btn-danger" id="correo_masivo">Correo Masivo </button>-->


                <div class="wrapper wrapper-content animated fadeInRight">
                    <div class="row" id="container_busqueda_beneficiarios">

                    </div>
                </div>


            </div>

        </div>

        <!--        <div id="contenedor_hidrico">
                </div>-->
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="consultas" aria-hidden="true" id="creacion_form">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" >
                    <div class="container"> 
                        <div class="row"> 
                            <div class="col-md-12" >
                                <h3> Información Básica</h3>
                                <div  id="alerta">

                                </div>                        
                                <div class="form-group">
                                    <label class="control-label">Tipo de Ingreso</label>
                                    <select class="form-control" id="tipo_ingreso">
                                        <option value="0" selected disabled>Seleccione...</option>                                        
                                        <option value="1">Sentencia o decreto</option>                                        
                                        <option value="2">IDIGER</option>                                        
                                        <option value="3">Caracoli Paimis </option>                                        
                                    </select>
                                </div>                        
                                <div class="form-group hidden" id="id_provisional">
                                    <label class="control-label">Identificador Provisional o Referencia</label>
                                    <input  maxlength="100" type="text"  class="form-control" id="identificador2" placeholder="Identificador provisional"  />
                                    <select class="form-control"  disabled style='display:none' id="nh"  >
                                        <option disabled selected >Seleccione el NH..</option>
                                    </select>
                                </div>                        
                                <div class="form-group hidden" id="id_idiger">
                                    <label class="control-label">Identificador SURR</label>
                                    <input  maxlength="100" type="text" class="form-control"  id="identificador1" placeholder="Identificador SURR"  />
                                </div>                        
                                <div class="form-group hidden" id="id_tecnica">
                                    <label class="control-label">Nº ficha técnica</label>
                                    <input  maxlength="100" type="text"  class="form-control" name="identificador" id="id_tecnico"  placeholder="ficha técnica"  />
                                </div>                        
                                <div class="form-group hidden" id="id_social">
                                    <label class="control-label">Nº ficha social</label>
                                    <input  maxlength="100" type="text"  class="form-control" name="identificador" id="id_social" placeholder="ficha social"  />
                                </div>                        
                                <div class="form-group hidden" id="riesgo">
                                    <label class="control-label">Riesgo</label>
                                    <select class="form-control" id="riesgo_val" required="required" >
                                        <option value="0" selected  disabled>Seleccione</option>                                        
                                        <option >Avenidas Torrenciales</option>                                        
                                        <option >Avenidas Torrenciales e inundación</option>                                         
                                        <option >Avenidaas Torrenciales, inundacion y Remoción</option>                                         
                                        <option >Estructural</option>                                                                        
                                        <option >Inundación y Estructura</option>                                         
                                        <option >Inundación y frm</option>                                         
                                        <option >Remoción en masa</option>                                         
                                        <option >Remoción e Inundación</option>                                         
                                        <option >Remoción y Estructura</option>                                         
                                    </select>
                                </div>
                                <div class="alert alert-info" role="alert">
                                    <b>Información importante!!</b>
                                    El concepto o conceptos de ingreso que se guardarán, son los que sean agregados y visibles en la tabla de conceptos.
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tipo de Concepto</label>
                                    <select class="form-control " id="tipo_concepto" disabled>
                                        <option value=""  selected>seleccione..</option>
                                        <option value="RO">Respuesta Oficial DPAE</option>
                                        <option value="CR">Carta informativa o remisoria</option>
                                        <option value="CT">Concepto técnico </option>
                                        <option value="DI">Diagnóstico o Informe de Visita (Diagnóstico de emergencia) </option>
                                        <option value="Decreto">Decreto </option>
                                        <option value="Resolución">Resolución</option>
                                        <option value="Acción popular">Acción popular</option>
                                        <option value="Acción judicial">Acción judicial</option>
                                        <option value="Acción de tutela">Acción de tutela</option>

                                    </select>
                                    <label class="control-label">Numero de Concepto de ingreso</label>
                                    <input maxlength="100" type="text"  class="form-control"  id="concepto" name="concepto" placeholder="Concepto" disabled />
                                    <label class="control-label">Fecha de Concepto de ingreso</label>
                                    <input maxlength="100" type="date"  class="form-control"  id="fecha_concepto" name="fecha_concepto" disabled />
                                    <button class="btn btn-info "  style="margin: 15px" id="agregar_concepto" type="button"    ><i class="fas fa-plus-square"></i> Agregar concepto</button>
                                </div>
                                <div>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Concepto</th>                                               
                                                <th scope="col">Opciones</th>                                               
                                            </tr>
                                        </thead>
                                        <tbody id="tabla_concepto">

                                        </tbody>
                                    </table>
                                </div>


                                <div class="form-group">
                                    <label class="control-label">Direccion del PAR</label><br>
                                    <label class="control-label" id="dir_generada"> </label>
                                    <input required="required"  class="form-control hidden"   type="text"   id="direccion"   /> 
                                </div>
                                <div class="form-group">
                                    <select class="dir" id="dir1" disabled>
                                        <option value="">...</option>
                                        <option value="CL">Cll</option>
                                        <option value="KR" >Cr</option>
                                        <option value="DG">Dg</option>
                                        <option value="TV">Tr</option>
                                        <option value="AC">Av Cll.</option>
                                        <option value="AK">Av Cr.</option>
                                    </select>
                                    <input  id="dir2" class="dir" type="number"  max="999" min="0"  minlength="1" maxlength="3"    disabled /> 
                                    <select class="dir" id="dir3" disabled>                                        
                                        <option value="" >...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="G">G</option>
                                        <option value="H">H</option>
                                        <option value="I">I</option>
                                        <option value="J">J</option>
                                        <option value="K">K</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="N">N</option>
                                        <option value="O">O</option>
                                        <option value="P">P</option>
                                        <option value="Q">Q</option>
                                        <option value="R">R</option>
                                        <option value="S">S</option>
                                        <option value="T">T</option>
                                        <option value="U">U</option>
                                        <option value="V">V</option>
                                        <option value="W">W</option>
                                        <option value="X">X</option>
                                        <option value="Y">Y</option>
                                        <option value="Z">Z</option>
                                    </select>
                                    |BIS
                                    <input  type="checkbox" class="dir"  value="BIS" id="dir4" disabled /> 
                                    <select class="dir" id="dir5" disabled>
                                        <option value="" >...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="G">G</option>
                                        <option value="H">H</option>
                                        <option value="I">I</option>
                                        <option value="J">J</option>
                                        <option value="K">K</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="N">N</option>
                                        <option value="O">O</option>
                                        <option value="P">P</option>
                                        <option value="Q">Q</option>
                                        <option value="R">R</option>
                                        <option value="S">S</option>
                                        <option value="T">T</option>
                                        <option value="U">U</option>
                                        <option value="V">V</option>
                                        <option value="W">W</option>
                                        <option value="X">X</option>
                                        <option value="Y">Y</option>
                                        <option value="Z">Z</option>                                        
                                    </select>
                                    |E
                                    <input class="dir" type="checkbox" value="ESTE"    id="dir6"  disabled /> 
                                    |S
                                    <input  class="dir" type="checkbox"   value="SUR"  id="dir7"  disabled /> 
                                    Nº
                                    <input r min="0" max="999" maxlength="3"  class="dir" type="number"   id="dir8"  disabled /> 
                                    <select class="dir" id="dir9" disabled> 
                                        <option value="">...</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="G">G</option>
                                        <option value="H">H</option>
                                        <option value="I">I</option>
                                        <option value="J">J</option>
                                        <option value="K">K</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="N">N</option>
                                        <option value="O">O</option>
                                        <option value="P">P</option>
                                        <option value="Q">Q</option>
                                        <option value="R">R</option>
                                        <option value="S">S</option>
                                        <option value="T">T</option>
                                        <option value="U">U</option>
                                        <option value="V">V</option>
                                        <option value="W">W</option>
                                        <option value="X">X</option>
                                        <option value="Y">Y</option>
                                        <option value="Z">Z</option>
                                    </select>
                                    -
                                    <input min="0" maxlength="3"  max="999" class="dir" type="number"  id="dir10"  disabled /> 
                                    |E
                                    <input   class="dir" value="ESTE" type="checkbox"   id="dir11"  disabled /> 
                                    |S
                                    <input  class="dir"  value="SUR" type="checkbox"   id="dir12"  disabled /> 
                                    <br>
                                    <label class="control-label">Complemento</label>
                                    <input  type="text" class="form-control dir"  style='text-transform:uppercase'    id="dir13"  placeholder="complemento de dirección" disabled /> 

                                </div>
                                <div class="form-group">
                                    Sin dirección <input  type="checkbox"  id="nodireccion"   /> 
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-4">
                                        <label class="control-label" style="width: 100%">Nº Manzana</label>
                                        <input type='number' min='1' maxlength="4" maX='999' required="required" class="solonumerico manzana" style="width: 48%" name="manzana" id="manzana" disabled   /> 
                                        <input type='text'  maxlength="2"  style="width: 48%" class="manzana sololetras" name="manzana" id="manzanal"  disabled   />                                         
                                        Sin Manzana <input  type="checkbox"  id="nomanzana"   /> 
                                    </div>
                                    <div class="col-lg-4">
                                        <label class="control-label" style="width: 100%"> Lote Nº</label>
                                        <input type='number' max="999"  maxlength="4"  min="1"  required="required"  style="width: 48%" class="lote solonumerico" name="lote"  id="lote" disabled />     
                                        <input type='text' maxlength="2"    style="width: 48%" class="lote sololetras" name="lote"  id="lote2"  disabled />     
                                        Sin Lote <input  type="checkbox"  id="nolote"   /> 
                                    </div>
                                    <div class="col-lg-4">
                                    </div>
                                </div>                                                           
                                <div class="form-group ">
                                    <label class="control-label">Chip</label>
                                    <h4 id="chip_generado">AAA</h4>
                                    <input minlength="11" max="9999" maxlength="11" type="text" class="form-control hidden" name="chip" style='text-transform:uppercase'    id="chip" placeholder="Chip Catastral" disabled />                                       
                                </div>
                                <div class="form-group row">                                   
                                    <div class="col-lg-1">
                                        <p style="font-size:25px">AAA-</p>                                                                              
                                    </div>
                                    <div class="col-lg-2">
                                        <input minlength="4" maxlength="4" type="text" class="form-control chips solonumerico" style='text-transform:uppercase'    id="chip1" placeholder="1579" disabled />                                         
                                    </div>
                                    <div class="col-lg-2">
                                        <input minlength="4" maxlength="4" type="text" class="form-control chips sololetras" style='text-transform:uppercase'    id="chip2" placeholder="ASDD" disabled />                                         
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Sector</label>
                                    <input maxlength="100" type="text" class="form-control"  style='text-transform:uppercase' id="sector" name="sector" placeholder="Sector"  disabled />                       
                                    <select class="form-control" style='display:none' id="centro" name="centro"  >
                                        <option value="Q00"  selected >Seleccione la quebrada ..</option>
                                    </select>

                                </div>
                                <div class="form-group">
                                    <label class="control-label">Localidad</label>
                                    <select class="form-control" required="required"  id="localidad" disabled >
                                        <option value="" disabled selected>Seleccione la Localidad</option>
                                        <option >01 Usaquén</option>
                                        <option>02 Chapinero</option>
                                        <option>03 Santa Fe</option>
                                        <option>04 San Cristóbal</option>
                                        <option>05 Usme</option>
                                        <option>06 Tunjuelito</option>
                                        <option>07 Bosa</option>
                                        <option>08 Kennedy</option>
                                        <option>09 Fontibón</option>
                                        <option>10 Engativá</option>
                                        <option>11 Suba</option>
                                        <option>12 Barrios Unidos</option>
                                        <option>13 Teusaquillo</option>
                                        <option>14 Los Mártires</option>
                                        <option>15 Antonio Nariño</option>
                                        <option>16 Puente Aranda</option>
                                        <option>17 La Candelaria</option>
                                        <option>18 Rafael Uribe Uribe</option>
                                        <option>19 Ciudad Bolívar</option>
                                        <option>20 Sumapaz</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">UPZ</label>
                                    <select class="form-control"  id="UPZ" style="width:100%"  disabled >
                                        <option value="0" disabled selected>Seleccione la UPZ ..</option>
                                    </select>
                                </div>                               
                                <div class="form-group">
                                    <label class="control-label">Barrio</label>
                                    <input required="required" class="form-control" name="barrio" style='text-transform:uppercase'  id="barrio" placeholder="Barrio" disabled />                                                                                                 
                                </div>
                                <div class="form-group">
                                    Sin barrio <input  type="checkbox"  id="nobarrio"   /> 
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Fecha de ingreso (Fecha de la visita)</label>
                                    <input required="required"  type="date"   class="form-control" name="fecha" id="fecha"  disabled />                                                                                                 
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nº de Unidades Habitacional (Incluye la unidad principal)</label>
                                    <input required="required"  type="number"   class="form-control" name="unidades" value="1" id="unidades"  disabled />                                                                                                 
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-success nextBtn pull-right"  style="margin: 15px" id="crear_proceso" type="button"    >Guardar </button>
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
        <script src="js/reas/main.js"></script>

        <!-- Tooltip, es el que muestra el mensaje de los botones del sistema de notificaciones como ayuda -->
        <script src="https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js"></script>


        <script src="js/reas/util/idleRedirect.js" type="text/javascript"></script>

        <!-- Custom and plugin javascript -->
        <script src="js/inspinia.js"></script>
        <script src="js/plugins/pace/pace.min.js"></script>
        <!-- Validacion de fechas -->         
        <script src="js/vendors/moment/moment.js" ></script> 
        <script src="js/vendors/moment/locale/es.js" ></script>      
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

        <!-- Js para el cambio de foto de usuario -->
        <script src="js/img_upload.js"></script>        

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
        <!-- Libreria para botones-->
        <link rel="stylesheet" href="js/vendors/press-css-master/css/press.css" />
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
        <script>

                                                    $('#container_busqueda_beneficiarios').reas().FormularioConsultaBeneficiarios();

                                                    var id_user = '<%
                                                        if ((session.getAttribute("user") != null)) {
                                                            out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_id"));
                                                        }
            %>';

            <%
                if ((session.getAttribute("user") != null)) {
                    if (((ArrayList) ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades")).contains("72")) {
                        out.print("var apro_ficha=true;\n");
                    } else {
                        out.print("var apro_ficha=false;\n");
                    }
                }

            %>
        </script>

        <!--Sistema de notificaciones del sistema, para cada tarea-->
        <script type="text/javascript" src="js/vendors/Inputmask/dist/jquery.inputmask.bundle.js" charset="utf-8"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/envio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/correo/correo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/devolucion_act.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/re_asignacion_tarea.js", "js")%>
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
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Resolucion/resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/acta_entrega_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Acta_Entrega_PAR/aprobacion_acta_entrega.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Financiera/financiera_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/Financiera/aprobacion_financiera.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/estudio_documentos/acta_cierre_est_negativo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/estudio_documentos/aprobacion_acta_cierre_est_negativo.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/estudio_documentos/adenda.js", "js")%>


        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/notificaciones.js", "js")%>
        
        
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/util/cambioClave.js", "js")%>

        <!--Árchivo js donde se programa la inserción de los datos de cada pestaña de la ficha técnica-->
        <script  language="JavaScript" src="js/reas/tecnica/fotos.js?v=<?php echo(rand()); ?>"></script>

        <!-- Impresiones-->
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_estudio.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_resolucion.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_resolucion_vereditas.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/formato_ficha_caracoli.js", "js")%>
        <%= CacheBuster.bust(application.getRealPath("/"), "pdf/impresion_adenda.js", "js")%>
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
                                                        
                                                        
                                                    $('').reas().CambioClave();    

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
                                                    $("#nh").select2();
                                                    $('#cerrar_se').click(function () {
                                                        var x = screen.width / 2 - 700 / 2;
                                                        var y = screen.height / 2 - 450 / 2;
                                                        window.open("prelogout.html", "contestrules", "menubar=150,resizable=0,width=500,height=250 ,left=" + x + ",top=" + y + ",location=no, scrollbars=no");

                                                    });

        </script>
        <div class="modal fade" id="modal_act" >
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


        <script>
            /*  
             $('#imp_masiva').click(function(){
             
             
             
             
             var array = [
             '2012-19-14079',
             '2011-19-12875'
             ];
             
             
             
             
             
             
             for (var i in array) {
             
             var id=array[i];
             console.log(id)
             var data_est=get_datos_estudio(id,'255');
             
             var doc = imp_estudio(data_est);
             
             pdfMake.createPdf(doc).download(id);
             
             }
             
             
             
             
             
             
             */

            /* para ejecutar este escript, por favor modificar el servlet ObtenerArchivo, dejando como parametros mimetype = "application/pdf"; y 
             * response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\""); y añadir 
             * String identificador=resultSet.getString("identificador");
             
             
             var array = [
             '2013-2-14621',
             '2013-2-14622',
             '2013-2-14623',
             '2018-11-15248'
             ];
             
             
             
             
             
             
             for (var i in array) {
             
             console.log(array[i])
             var identificador=array[i];
             var datos = {};
             var url_preview='';
             
             $.ajax({
             type: "POST",
             url: "GestionConsultas",
             data: {
             op: "consulta_pdf_visita_fallida",
             identificador: identificador
             },
             dataType: "json",
             async: false,
             success: function (response) {
             
             if (response)
             {
             if (response.length > 0) {
             
             for (var i = 0; i < response.length; i++) {
             
             var resultado = response[i];
             datos["1"] = (resultado["id"] ? resultado["id"] : '');
             url_preview='ObtenerArchivo?ID='+datos["1"];
             
             window.open(url_preview, '_blank');
             }
             
             }
             }
             }, error: function (a) {
             alert("No fué posible obtener las alternativas");
             }
             
             
             });
             
             }
             
             
             
             
             
             
             
             });  
             
             
             
             $('#correo_masivo').click(function(){
             correo_masivo('2028-11-5263','icarrillod',['bpenac','frmejiao'],'Asunto','Mensaje');
             });
             */
            
            //modulo para el cargue masivo de datos
            
            /*
            $('#imp_masiva').click(function(){
                
                
               var fi = document.getElementById('myFile');
               if (fi.files.length > 0) {


                    // RUN A LOOP TO CHECK EACH SELECTED FILE.
                    for (var i = 0; i <= fi.files.length - 1; i++) {

                        var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
                        var fsize = fi.files.item(i).size;      // THE SIZE OF THE FILE.
                        

                            var fd = new FormData();
                            
                            fd.append('numFolios', 1);
                            fd.append('descripcion', 'Ficha social');
                            fd.append('identificador',fname.replace(".PDF", ""));
                            fd.append('tipo_documento', '1301');
                            fd.append('thumbnail', '');                        
                            fd.append("myFile", document.getElementById("myFile").files[i]);                
                
                            var xhr = new XMLHttpRequest();
                                xhr.open("POST", "FileUploader");
                                xhr.send(fd);
                        
                            
                            
                        
                    }
                }
                else { 
                    alert('Please select a file.') 
                }
                
                
                
            });
            */
            
            
        </script>
        
        <link href='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.css' rel='stylesheet' type='text/css' />
        <script src='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.js' type='text/javascript'></script>

    </body>





</html>
