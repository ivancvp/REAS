<%-- 
    Document   : index
    Created on : 17/05/2017, 07:42:26 PM
    Author     : Fabian
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.Random"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Map"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Reasentamientos | Reportes</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/fontawesome-all.css" rel="stylesheet">

        <!-- Text spinners style -->
        <link href="css/plugins/textSpinners/spinners.css" rel="stylesheet">

        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <!-- Js para el cambio de foto de usuario -->
        <script src="js/img_upload.js"></script>       

        <script src="js/reas/util/idleRedirect.js" type="text/javascript"></script>
        
        <!-- Llamado del plugin del rango de calendario -->
        <link rel="stylesheet" href="js/vendors/Easy-Date-Range-Picker/dist/css/PAcalendar.min.css">
	
        
        
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
            <%  if (session.getAttribute("user") != null) {
                    out.print("var usuario_usuario = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_usuario") + "';");
                    out.print("var usuario_nombre = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre") + "';");
                    out.print("var usuario_identificador = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';");
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
                        <li >
                            <a href="index.jsp"><i class="fa fa-users"></i> <span class="nav-label">Consulta de Beneficiarios</span></a>
                        </li>
                        <li class="active">
                            <a href="reportes.jsp"><i class="fa fa-chart-area"></i><span class="nav-label">Reportes</span> 
                                <span class="fa arrow"></span>
                            </a>
                            <ul class="nav nav-second-level">
                                <li><a href="tablero_indicadores.jsp">Tablero de indicadores</a></li>
                                <li class="active"><a href="reportes.jsp">Reportes Avanzados</a></li>
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
                        <h2>Reportes | Reasentamientos</h2>
                        <ol class="breadcrumb">
                            <li>                                
                                <a href="index.jsp">Inicio 

                                </a>
                            </li>
                            <li class="active">
                                <strong>Reportes</strong>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="wrapper wrapper-content animated fadeInRight">
                    <div class="row" id="container_reportes">
                        <div class="panel-group" id="accordion">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Reporte completo</a>
                                    </h4>
                                </div>
                                <div id="collapse1" class="panel-collapse collapse in">
                                    <div class="panel-body">
                                        <div id="gridContainer"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Reporte Avanzado</a>
                                    </h4>
                                </div>
                                <div id="collapse2" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <div id="chartReporteAvanzado"></div>
                                        <div id="gridReporteAvanzado"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Reporte Usuarios</a>
                                    </h4>
                                </div>
                                <div id="collapse3" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <div id="chartReporteUsuarios"></div>
                                        <div id="gridReporteUsuarios"></div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Reportes individuales</a>
                                    </h4>
                                </div>
                                <div id="collapse4" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        
                                        <div class="row">
                                            <div id="demo" class=" form-group col-sm-3" >
                                            </div>
                                            
                                            <div class="form-group col-sm-9 ">
                                                    <label for="from">Desde</label>
                                                    <input type="text" id="from" value="" class="fecha">
                                                </div>
                                                
                                                <div class="form-group col-sm-9">
                                                    <label for="to">Hasta</label>
                                                    <input type="text" id="to" value="" class="fecha">
                                                </div>
                                                <div id="dvjson"></div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-success" id="reporteFUS">Estudios de documentos</button>
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-success" id="reporteActaEntrega">Actas de Entrega PAR</button>
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-success" id="reporteActaEntregaAlternativa">Actas de Entrega Alternativa Habitacional</button>
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-success" id="reporteVerificacionTraslado">Verificación de Traslado</button>
                                                </div>
                                        </div>

                                            
                                                
                                     
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
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
        <script src="js/plugins/qrcodejs/qrcode.min.js "></script>
        <!-- reas -->
        <script src="js/reas/namespaceReas.js"></script>

        <!-- dx-plugins -->
        <link href="js/vendors/devextreme/css/dx.common.css" rel="stylesheet" type="text/css"/>
        <link href="js/vendors/devextreme/css/dx.light.css" rel="stylesheet" type="text/css"/>
        <script src="js/vendors/jszip/dist/jszip.min.js" type="text/javascript"></script>
        <script src="js/vendors/devextreme/js/dx.all.js" type="text/javascript"></script>
        <script src="js/vendors/devextreme/js/localization/dx.messages.es.js" type="text/javascript"></script>
        <!-- Tour de ayuda -->
        <link href="js/vendors/bootstrapTour/bootstrap-tour.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/vendors/bootstrapTour/bootstrap-tour.min.js" type="text/javascript"></script>
        <!-- Validacion de fechas -->        
        <script src="js/vendors/moment/moment.js" ></script>  
        <script src="js/vendors/moment/locale/es.js" ></script> 
        <!--Plugin de rango de fecha-->
        <script src="js/vendors/Easy-Date-Range-Picker/dist/js/PAcalendar.min.js"></script>
        
         <!-- Reporte Generado en Excel para las fichas de vereditas, la de Gavilanes y reporte REAS-->
        <script src='js/reas/util/reportes.js'></script>
        <script src='reportes/reportes_reas.js'></script>
        <!--Plugin para descargar excel-->
        <script src='js/vendors/export-excel/excelexportjs.js'></script>
        <!--Plugin de alertas-->
        <link href='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.css' rel='stylesheet' type='text/css' />
        <script src='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.js' type='text/javascript'></script>
        <!-- Libreria para la fecha inputmask-->
        <script type="text/javascript" src="js/vendors/Inputmask/dist/jquery.inputmask.bundle.js" charset="utf-8"></script>
        <script>
            var id_user = '<%
                if ((session.getAttribute("user") != null)) {
                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_id"));
                }
            %>';


            <%  if (session.getAttribute("user") != null) {
                    out.print("var qr = '" + ((Map<String, Object>) session.getAttribute("info")).get("codigo") + "';");
                }
            %>
        </script>
        <script>

            $(document).ready(function () {
                $.fn.modal.Constructor.prototype.enforceFocus = function () { };
                iniciarRepositorio();

                $('#collapse2').on('shown.bs.collapse', function () {
                    iniciarReporteAvanzado();
                });
                
                $('#collapse3').on('shown.bs.collapse', function () {
                    iniciarReporteUsuarios();
                });
                $('#collapse4').on('shown.bs.collapse', function () {
                    
$(".fecha").inputmask("datetime",{ alias: "datetime", inputFormat: "yyyy-mm-dd",clearIncomplete: true });


                    $('#demo').PACalendar({

                      from: {
                        element: $('#from')                                         
                      }, 

                      to: {
                        element: $('#to'),
                        locale: moment.locale(),       
                        limit_to:moment.locale()
                      }, 
                      mode: 'range',
                      prevArrow:   '&lt;',
                      nextArrow:   '&gt;'
                    });
                    
                    function traer_info(datos){
                        
                            var data;
                            $.ajax({
                                type: "POST",
                                url: "GestionConsultas",
                                data: $datos,
                                dataType: "json",
                                async: false,
                                success: function (response) {
                                    console.log(response);
                                    data=response;
                                },
                                error: function (response) {
                                    alert("Ocurrió un error al almacenar la información");
                                }
                            });
                        return data;
                    }
                    function verificar_fechas(desde,hasta){
                        
                        var seguir=true;
                        if(desde===''){
                            $.alert({
                                title: 'Mensaje.',
                                icon: 'fa fa-warning',
                                content: 'Debe ingresar una fecha de inicio del reporte',
                                typeAnimated: true
                            });
                           seguir=false;
                        }else{
                            if(hasta===''){
                                $.alert({
                                title: 'Mensaje.',
                                icon: 'fa fa-warning',
                                content: 'Debe ingresar una fecha de terminacion del reporte',
                                typeAnimated: true
                                });
                                seguir=false;
                            }else{

                            }
                        }
                        return seguir;
                    }
                    
                    $('#reporteFUS').click(function(){
                        
                        var desde=$('#from').val();
                        var hasta=$('#to').val();

                        if(verificar_fechas(desde,hasta)){
                            $datos = {
                            op: 'reporte_fus',
                            desde:desde,
                            hasta:hasta
                        };	

                          var data= traer_info($datos); 
                          
                            $("#dvjson").excelexportjs({
                                containerid: "dvjson"
                                   , datatype: 'json'
                                   , dataset: data
                                   , columns: getColumns(data)     
                            });
                        }
   
                      
                    });
                    $('#reporteActaEntrega').click(function(){

                        var desde=$('#from').val();
                        var hasta=$('#to').val();

                        if(verificar_fechas(desde,hasta)){
                          $datos = {
                            op: 'reporte_actas_entrega',
                            desde:desde,
                            hasta:hasta
                        };	

                          var data= traer_info($datos); 
                          
                            $("#dvjson").excelexportjs({
                                containerid: "dvjson"
                                   , datatype: 'json'
                                   , dataset: data
                                   , columns: getColumns(data)     
                            });
                         }                             

                        
                    });
                    $('#reporteActaEntregaAlternativa').click(function(){

                        var desde=$('#from').val();
                        var hasta=$('#to').val();
                        
                        if(verificar_fechas(desde,hasta)){
                        $datos = {
                            op: 'reporteActaEntregaAlternativa',
                            desde:desde,
                            hasta:hasta
                        };	

                          var data= traer_info($datos); 
                          
                            $("#dvjson").excelexportjs({
                                containerid: "dvjson"
                                   , datatype: 'json'
                                   , dataset: data
                                   , columns: getColumns(data)     
                            });                            
                        }
                        

                        
                        
                    });
                    $('#reporteVerificacionTraslado').click(function(){

                        var desde=$('#from').val();
                        var hasta=$('#to').val();
                        
                        if(verificar_fechas(desde,hasta)){
                        $datos = {
                            op: 'reporte_verificacionTraslado',
                            desde:desde,
                            hasta:hasta
                        };	

                          var data= traer_info($datos); 
                          
                            $("#dvjson").excelexportjs({
                                containerid: "dvjson"
                                   , datatype: 'json'
                                   , dataset: data
                                   , columns: getColumns(data)     
                            });
                        }
 
                    });
                    
                });
            });

            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: qr,
                width: 256,
                height: 256,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });

            function mostrarAyuda() {
                var tour = new Tour({
                    template: "<div class='popover tour'>" +
                            "	<div class='arrow'></div>" +
                            "	<h3 class='popover-title'></h3>" +
                            "	<div class='popover-content'></div>" +
                            "	<div class='popover-navigation'>" +
                            "       <div class='btn-group'>" +
                            "		<button class='btn btn-default' data-role='prev'>« Ant.</button>" +
                            "		<button class='btn btn-default' data-role='next'>Sig. »</button>" +
                            "           <button class='btn btn-default' data-role='end'>Fin</button>" +
                            "       </div>" +
                            "	</div>" +
                            "</div>",
                    steps: [
                        {
                            element: "#gridContainer",
                            title: "Tabla de datos",
                            content: "Aquí encontrará el listado de datos, existen muchas opciones para Filtrar, Ordenar, Agrupar y Exportar los datos",
                            placement: "top",
                            backdrop: true,
                            backdropContainer: 'body',
                            onShown: function (tour) {
                                $('body').addClass('tour-open');
                            },
                            onHidden: function (tour) {
                                $('body').removeClass('tour-close');
                            }
                        }
                        //#gridContainer > .dx-datagrid > .dx-datagrid-headers > .dx-datagrid-content > table > tbody > .dx-header-row > td:first-child
                    ]});
                tour.init();
                tour.restart();
            }

            function iniciarRepositorio() {
                DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
                var dataSource = new DevExpress.data.DataSource("GestionConsultas?op=reporte_datos_completos");
                //dataSource.filter([["Identificador", "=", "2007-19-9704"],"or",["Identificador", "=", "2013-Q09-00155"]]);

                var dataGrid = $("#gridContainer").dxDataGrid({
                    //dataSource: "GestionConsultas?op=reporte_datos_completos",
                    dataSource: dataSource,
                    allowColumnResizing: true,
                    allowColumnReordering: true,
                    columnResizingMode: "widget",
                    columnMinWidth: 50,
                    columnAutoWidth: true,
                    sorting: {
                        mode: "multiple"
                    },
                    columnChooser: {
                        enabled: true
                    },
                    columnFixing: {
                        enabled: true
                    },
                    filterRow: {
                        visible: true,
                        applyFilter: "auto"
                    },
                    searchPanel: {
                        visible: true,
                        width: 240,
                        placeholder: "Buscar..."
                    },
                    headerFilter: {
                        visible: true
                    },
                    groupPanel: {
                        visible: true
                    },
                    paging: {
                        pageSize: 20
                    },
                    pager: {
                        showPageSizeSelector: true,
                        allowedPageSizes: [20, 50, 100, 500],
                        showInfo: true
                    },
                    "export": {
                        enabled: true,
                        fileName: "REAS"
                    },
                    columns: [
                        {
                            dataField: "Identificador",
                            visible: true
                        },
                        {
                            dataField: "Localidad",
                            visible: true
                        },
                        {
                            dataField: "UPZ",
                            visible: false
                        },
                        {
                            dataField: "Sector",
                            visible: true
                        },
                        {
                            dataField: "Barrio",
                            visible: true
                        },
                        {
                            dataField: "Dirección",
                            visible: true
                        },
                        {
                            dataField: "Manzana",
                            visible: false
                        },
                        {
                            dataField: "Lote",
                            visible: false
                        },
                        {
                            dataField: "Nombre 1",
                            visible: true
                        },
                        {
                            dataField: "Cedula 1",
                            visible: true
                        },
                        {
                            dataField: "Nombre 2",
                            visible: true
                        },
                        {
                            dataField: "Cedula 2",
                            visible: true
                        },
                        {
                            dataField: "FechaIngresoAlProceso",
                            visible: false
                        },
                        {
                            dataField: "ConceptoDeIngreso",
                            visible: false
                        },
                        {
                            dataField: "CedulaCatastral",
                            visible: false
                        },
                        {
                            dataField: "CHIP",
                            visible: false
                        },
                        {
                            dataField: "CuentaCODENSA",
                            visible: false
                        },
                        {
                            dataField: "EstadoCODENSA",
                            visible: false
                        },
                        {
                            dataField: "FechaSolicitudCodensa",
                            visible: false
                        },
                        {
                            dataField: "FechaPazYSalvoCodensa",
                            visible: false
                        },
                        {
                            dataField: "CuentaAcueducto",
                            visible: false
                        },
                        {
                            dataField: "EstadoAcueducto",
                            visible: false
                        },
                        {
                            dataField: "FechaSolicitudAcueducto",
                            visible: false
                        },
                        {
                            dataField: "FechaPazYSalvoAcueducto",
                            visible: false
                        },
                        {
                            dataField: "CuentaGas",
                            visible: false
                        },
                        {
                            dataField: "EstadoGas",
                            visible: false
                        },
                        {
                            dataField: "FechaSolicitudGas",
                            visible: false
                        },
                        {
                            dataField: "FechaPazYSalvoGas",
                            visible: false
                        },
                        {
                            dataField: "Fecha acta de entrega alternativa habitacional",
                            visible: false
                        },
                        {
                            dataField: "Fecha de Verificación de Traslado",
                            visible: true
                        },
                        {
                            dataField: "Año de Reporte",
                            visible: false
                        },
                        {
                            dataField: "Fecha Acta de entrega predio en riesgo a CVP",
                            visible: true
                        },
                        {
                            dataField: "Solicitud Adecuación del Predio a DPAE",
                            visible: false
                        },
                        {
                            dataField: "Notificación Adecuación Predio en Alto riesgo",
                            visible: false
                        },
                        {
                            dataField: "Fecha Entrega predio en riesgo al DADEP",
                            visible: false
                        },
                        {
                            dataField: "Observaciones",
                            visible: false
                        },
                        {
                            dataField: "Predio demolido",
                            visible: false
                        },
                        {
                            dataField: "Fecha ficha predial",
                            visible: false
                        },
                        {
                            dataField: "FechaTrasladoInicial",
                            visible: false
                        },
                        {
                            dataField: "FechaNotificacionAlcaldiaVigilanciaPAR,",
                            visible: false
                        },
                        {
                            dataField: "EstadoProceso",
                            visible: true
                        },
                        {
                            dataField: "SubEstadoProceso",
                            visible: true
                        },
                        {
                            dataField: "IdentificadorIDIGER",
                            visible: true
                        },
                        {
                            dataField: "FichaSocial",
                            visible: true
                        },
                        {
                            dataField: "FichaTecnica",
                            visible: true
                        }
                    ],
                    onInitialized: function () {
                        $('#btn-ayuda').collapse('show');
                    }
                }).dxDataGrid("instance");
            }


            function iniciarReporteAvanzado() {
                DevExpress.localization.locale(navigator.language || navigator.browserLanguage);

                $.ajax({
                    type: "POST",
                    url: "GestionConsultas",
                    data: {
                        op: "reporte_pivote_estados"
                    },
                    dataType: "json",
                    async: true,
                    success: function (response) {
                        if (response) {

                            var pivotGridChart = $("#chartReporteAvanzado").dxChart({
                                commonSeriesSettings: {
                                    type: "bar"
                                },
                                tooltip: {
                                    enabled: true,
                                    customizeTooltip: function (args) {
                                        return {
                                            html: args.seriesName + " | Total " + args.valueText + ""
                                        };
                                    }
                                },
                                size: {
                                    height: 500
                                },
                                adaptiveLayout: {
                                    width: 450
                                }
                            }).dxChart("instance");

                            var pivotGrid = $("#gridReporteAvanzado").dxPivotGrid({
                                dataSource: {
                                    fields: [{
                                            caption: "Localidad",
                                            width: 120,
                                            dataField: "Localidad",
                                            area: "row",
                                            sortBySummaryField: "Total"
                                        }, {
                                            caption: "Sector",
                                            dataField: "Sector",
                                            area: "row",
                                            width: 150
                                        }, {
                                            dataField: "FechaEntregaPAR",
                                            dataType: "date"
                                        }, {
                                            dataField: "EstadoProceso"
                                        }, {
                                            dataField: "SubEstadoProceso"
                                        }, {
                                            caption: "Total",
                                            dataField: "count",
                                            dataType: "number",
                                            summaryType: "sum",
                                            area: "data"
                                        }],
                                    store: response
                                },
                                allowSortingBySummary: true,
                                allowSorting: true,
                                allowFiltering: true,
                                showBorders: true,
                                showColumnGrandTotals: true,
                                showRowGrandTotals: true,
                                showRowTotals: false,
                                showColumnTotals: false,
                                export: {
                                    enabled: true,
                                    fileName: "Estados"
                                },
                                fieldChooser: {
                                    enabled: true,
                                    allowSearch: true
                                },
                                fieldPanel: {
                                    showColumnFields: true,
                                    showDataFields: true,
                                    showFilterFields: true,
                                    showRowFields: true,
                                    allowFieldDragging: true,
                                    visible: true
                                }
                            }).dxPivotGrid("instance");

                            pivotGrid.bindChart(pivotGridChart, {
                                dataFieldsDisplayMode: "splitPanes",
                                alternateDataFields: false
                            });
                        }
                    }, error: function (a) {
                        alert("No fué posible obtener las alternativas");
                    }
                });


            }
            
            
            
            function iniciarReporteUsuarios() {
                DevExpress.localization.locale(navigator.language || navigator.browserLanguage);

                $.ajax({
                    type: "POST",
                    url: "GestionConsultas",
                    data: {
                        op: "reporte_pivote_usuarios"
                    },
                    dataType: "json",
                    async: true,
                    success: function (response) {
                        if (response) {

                            var pivotGridChart = $("#chartReporteUsuarios").dxChart({
                                commonSeriesSettings: {
                                    type: "bar"
                                },
                                tooltip: {
                                    enabled: true,
                                    customizeTooltip: function (args) {
                                        return {
                                            html: args.seriesName + " | Total " + args.valueText + ""
                                        };
                                    }
                                },
                                size: {
                                    height: 500
                                },
                                adaptiveLayout: {
                                    width: 450
                                }
                            }).dxChart("instance");

                            var pivotGrid = $("#gridReporteUsuarios").dxPivotGrid({
                                dataSource: {
                                    fields: [
                                        {
                                            caption: "Tipo de usuario",
                                            width: 120,
                                            dataField: "tius_desc",
                                            area: "row",
                                            sortBySummaryField: "Total"
                                        }, {
                                            caption: "Usuario",
                                            width: 120,
                                            dataField: "usuario_nombre",
                                            area: "row",
                                            sortBySummaryField: "Total"
                                        }, {
                                            dataField: "date",
                                            dataType: "date",
                                            area: "column"
                                        }, {
                                            caption: "Total",
                                            dataField: "count",
                                            dataType: "number",
                                            summaryType: "sum",
                                            area: "data"
                                        }],
                                    store: response
                                },
                                allowSortingBySummary: true,
                                allowSorting: true,
                                allowFiltering: true,
                                showBorders: true,
                                showColumnGrandTotals: true,
                                showRowGrandTotals: true,
                                showRowTotals: false,
                                showColumnTotals: false,
                                export: {
                                    enabled: true,
                                    fileName: "Estados"
                                },
                                fieldChooser: {
                                    enabled: true,
                                    allowSearch: true
                                },
                                fieldPanel: {
                                    showColumnFields: true,
                                    showDataFields: true,
                                    showFilterFields: true,
                                    showRowFields: true,
                                    allowFieldDragging: true,
                                    visible: true
                                }
                            }).dxPivotGrid("instance");

                            pivotGrid.bindChart(pivotGridChart, {
                                dataFieldsDisplayMode: "splitPanes",
                                alternateDataFields: false
                            });
                        }
                    }, error: function (a) {
                        alert("No fué posible obtener las alternativas");
                    }
                });


            }
        </script>

    </body>
</html>
