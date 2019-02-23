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

        <title>Caracolí | Decreto 227 | Reportes</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/fontawesome-all.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <!-- Js para el cambio de foto de usuario -->
        <script src="js/img_upload.js"></script>       

        <script src="js/reas/util/idleRedirect.js" type="text/javascript"></script>
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
                            <a href="reportes_caracoli.jsp"><i class="fa fa-chart-area"></i> <span class="nav-label">Reportes Caracolí</span></a>
                        </li>
                        <li>
                            <a href='visor.jsp?config=viewer_caracoli&token=WEedKec2r377qkLsJZPqYpsnxwdr2Svnns-voXnG75Nclxouf66SEJo8IHHal6-3p02XchOiENN2o_4VcR46WaLcq-lxufFSaT7e6Yv0g6E.'><i class='fa fa-map-marker-alt'></i> <span class='nav-label'>Visor Geográfico Caracolí</span></a>
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
                        <h2>Reportes | Caracolí | Decreto 227</h2>
                        <ol class="breadcrumb">
                            <li>                                
                                <a href="index.jsp">Inicio 

                                </a>
                            </li>
                            <li class="active">
                                <strong>Reportes Caracolí</strong>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="wrapper wrapper-content animated fadeInRight">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="widget blue-bg p-lg text-center">
                                <div class="m-b-md">
                                    <i class="fa fa-home fa-4x"></i>
                                    <h1 class="m-xs text-primary texto-sumatoria" data-op="reporte_caracoli_total_ocupaciones"></h1>
                                    <h3 class="font-bold no-margins">
                                        Ocupaciones
                                    </h3>
                                    <small>encuestadas</small>
                                </div>
                            </div>
                            <div class="widget blue-bg p-lg text-center">
                                <div class="m-b-md">
                                    <i class="fa fa-backward fa-4x"></i>
                                    <h1 class="m-xs text-primary texto-sumatoria" data-op="reporte_caracoli_total_desea_retornar"></h1>
                                    <h3 class="font-bold no-margins">
                                        Quisieran retornar
                                    </h3>
                                    <small>al lugar de origen</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="widget blue-bg p-lg text-center">
                                <div class="m-b-md">
                                    <i class="fa fa-user-friends fa-4x"></i>
                                    <h1 class="m-xs text-primary texto-sumatoria" data-op="reporte_caracoli_total_personas"></h1>
                                    <h3 class="font-bold no-margins">
                                        Personas
                                    </h3>
                                    <small>Censadas</small>
                                </div>
                            </div>
                            <div class="widget blue-bg p-lg text-center">
                                <div class="m-b-md">
                                    <i class="fa fa-female fa-4x"></i>
                                    <h1 class="m-xs text-primary texto-sumatoria" data-op="reporte_caracoli_hay_embarzadas"></h1>
                                    <h3 class="font-bold no-margins">
                                        Ocupaciones con Mujeres gestantes
                                    </h3>
                                    <small>&nbsp;</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="widget-head-color-box p-lg text-center">
                                <div id="chart_calidad_habita"></div>
                            </div>
                        </div>


                        <div class="col-lg-6">
                            <div class="widget p-lg text-center">
                                <div class="m-b-md">
                                    <div id="chart_uso"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="widget blue-bg p-lg text-center">
                                <div class="m-b-md">
                                    <i class="fa fa-ambulance fa-4x"></i>
                                    <h1 class="m-xs text-primary texto-sumatoria" data-op="reporte_caracoli_enferm_respiratorias"></h1>
                                    <h3 class="font-bold no-margins">
                                        Familias con sintomas de efermedad respiratoria
                                    </h3>
                                    <!--<small>En el último mes</small>-->
                                </div>
                            </div>
                            <div class="widget blue-bg p-lg text-center">
                                <div class="m-b-md">
                                    <i class="fa fa-paw fa-4x"></i>
                                    <h1 class="m-xs text-primary texto-sumatoria" data-op="reporte_caracoli_animales"></h1>
                                    <h3 class="font-bold no-margins">
                                        Animales de compañia
                                    </h3>
                                    <small>Familias con animales</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">

                            <div class="widget p-lg text-center">
                                <div class="m-b-lg">
                                    Prámide poblacional
                                </div>
                                <div class="m-b-md">
                                    <div id="chart_piramide"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <div id="chart_procedencias"></div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

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
                buscarSumatorias();
                instanciarCharts();
            });
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: qr,
                width: 256,
                height: 256,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            var dataSource;
            var arrayDataSource;
            var dataGrid;
            var chartCalidadHabita;
            var chartUsoOcupacion;
            var chartPiramidePoblacional;


            function buscarSumatorias(filtro) {
                if (!filtro || filtro === "") {
                    filtro = "1=1";
                }

                $(".texto-sumatoria").each(function (id) {
                    var container = $(this);
                    $.ajax({
                        type: "POST",
                        url: "GestionConsultas",
                        data: {
                            op: $(this).data("op"),
                            filtro: filtro
                        },
                        dataType: "json",
                        async: true,
                        success: function (response) {

                            if (response)
                            {
                                if (response.length > 0) {
                                    container.text(response[0].total);
                                } else {

                                }
                            }
                        }, error: function (a) {
                            alert("No fué posible obtener las alternativas");
                        }
                    });
                });
            }


            function buscarOtros(filtro) {
                if (!filtro || filtro === "") {
                    filtro = "1=1";
                }

                var otros = [
                    {
                        chart: chartPiramidePoblacional,
                        op: 'reporte_caracoli_piramide',
                        type: 'funnel'
                    }
                ];

                for (var i = 0; i < otros.length; i++) {

                    var instance;

                    if (otros[i].type === 'funnel') {

                        instance = $(otros[i].chart).dxFunnel("instance");
                    }
                    $.ajax({
                        type: "POST",
                        url: "GestionConsultas",
                        data: {
                            op: otros[i].op,
                            filtro: filtro
                        },
                        dataType: "json",
                        async: true,
                        context: instance,
                        success: function (response) {

                            if (response)
                            {
                                var ds = new DevExpress.data.DataSource(response);

                                this.option({dataSource: ds});
                            }
                        }, error: function (a) {
                            alert("No fué posible obtener las alternativas");
                        }
                    });
                }


            }

            function aplicarFiltro() {
                var datagridFilter = dataGrid.getCombinedFilter(true);
                var filtro = "";
                if (datagridFilter) {
                    //se trata de un solo filtro
                    if (datagridFilter.columnIndex !== undefined && datagridFilter.columnIndex !== null) {
                        var filterColumn = dataGrid.columnOption(datagridFilter.columnIndex);
                        if (Array.isArray(datagridFilter[0])) {
                            filtro = construirFiltro(filterColumn, datagridFilter[0][1], null);
                            filtro += " " + datagridFilter[1] + " ";
                            filtro += construirFiltro(filterColumn, datagridFilter[0][1], '');
                        } else {
                            filtro = construirFiltro(filterColumn, datagridFilter[1], datagridFilter[2]);
                        }
                    } else if (datagridFilter.length > 0) {
                        for (var i = 0; i < datagridFilter.length; i++) {
                            if (datagridFilter[i].length > 0 && datagridFilter[i].columnIndex !== undefined && datagridFilter[i].columnIndex !== null) {
                                var filterColumn = dataGrid.columnOption(datagridFilter[i].columnIndex);
                                if (Array.isArray(datagridFilter[i][0])) {
                                    filtro += construirFiltro(filterColumn, datagridFilter[i][0][1], null);
                                    filtro += " " + datagridFilter[1] + " ";
                                    filtro += construirFiltro(filterColumn, datagridFilter[i][0][1], '');
                                } else {
                                    filtro += construirFiltro(filterColumn, datagridFilter[i][1], datagridFilter[i][2]);
                                }


                                //filtro += construirFiltro(filterColumn, datagridFilter[i][1], datagridFilter[i][2]);
                            } else if (datagridFilter[i] === "and" || datagridFilter[i] === "or") {
                                filtro += " " + datagridFilter[i] + " ";
                            }
                        }
                    }

                }
                buscarSumatorias(filtro);
                buscarOtros(filtro);
            }

            function construirFiltro(filterColumn, operation, value) {
                var dataType = filterColumn.dataType;
                var s;
                switch (dataType) {
                    case "Number":
                        s = "";
                    case "String":
                    case "Date":
                    case "DateTime":
                    case "Boolean":
                    default:
                        s = "'";
                }


                var prefix_a = "";
                var prefix_b = "";
                var sufix_a = "";
                var sufix_b = "";
                switch (operation) {
                    case "contains":
                        operation = "ilike";
                        prefix_a = "(";
                        prefix_b = "%";
                        sufix_a = "%";
                        sufix_b = ")";
                        break;
                    case "startswith":
                        operation = "ilike";
                        prefix_a = "(";
                        sufix_a = "%";
                        sufix_b = ")";
                        break;
                    case "endswith":
                        operation = "ilike";
                        prefix_a = "(";
                        prefix_b = "%";
                        sufix_a = ")";
                        break;
                    case "notcontains":
                        operation = "not ilike";
                        prefix_a = "(";
                        prefix_b = "%";
                        sufix_a = "%";
                        sufix_b = ")";
                        break;
                }

                if (value === null && (operation === '=' || operation === "<>")) {
                    operation = operation === '=' ? 'is ' : 'is not ';
                    return '"' + filterColumn.dataField + '" ' + operation + prefix_a + prefix_b + value + sufix_a + sufix_b;
                }

                return '"' + filterColumn.dataField + '" ' + operation + prefix_a + s + prefix_b + value + sufix_a + s + sufix_b;
            }

            function filtrarDataSet() {
                var filter = dataGrid.getCombinedFilter(true);
                var processedArray;
                if (filter !== undefined && filter !== null) {
                    processedArray = DevExpress.data.query(arrayDataSource)
                            .filter(filter)
                            .toArray();

                } else {
                    processedArray = DevExpress.data.query(arrayDataSource)
                            .toArray();
                }

                var groupsList = [
                    {
                        chart: chartCalidadHabita,
                        groupField: "calidad_habita"
                    },
                    {
                        chart: chartUsoOcupacion,
                        groupField: "uso"
                    }
                ];

                for (var i = 0; i < groupsList.length; i++) {
                    construirPivots(groupsList[i], processedArray);
                }
            }

            function construirPivots(indicator, filteredArray) {

                var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                    store: filteredArray,
                    fields: [{
                            area: "row",
                            dataField: indicator.groupField
                        }, {
                            area: "data",
                            summaryType: "count"
                        }]
                });
                pivotGridDataSource.load().done(function (data) {
                    var pivotArrayDatasource = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        let row = data.rows[i];
                        pivotArrayDatasource.push({"label": row.text, "total": data.values[ row.index ][0][0]});
                    }
                    indicator.chart.dxPieChart("option", "dataSource", pivotArrayDatasource);
                });

            }

            function instanciarCharts() {
                chartCalidadHabita = $("#chart_calidad_habita").dxPieChart({
                    type: "doughnut",
                    palette: "Soft Pastel",
                    title: "Calidad en la que habita la ocupación",
                    legend: {
                        verticalAlignment: "bottom",
                        horizontalAlignment: "center"
                    },
                    export: {
                        enabled: true
                    },
                    tooltip: {
                        enabled: true,
                        location: "edge",
                        customizeTooltip: function (arg) {
                            return {
                                text: arg.argument + ":" + arg.valueText
                            };
                        }
                    },
                    series: [{
                            argumentField: "label",
                            valueField: "total",
                            label: {
                                visible: true,
                                connector: {
                                    visible: true
                                }
                            }
                        }]
                });

                chartUsoOcupacion = $("#chart_uso").dxPieChart({
                    size: {
                        height: 360
                    },
                    palette: "bright",
                    title: "Uso de la ocupación",
                    tooltip: {
                        enabled: true,
                        location: "edge",
                        customizeTooltip: function (arg) {
                            return {
                                text: arg.argument + ":" + arg.valueText
                            };
                        }
                    },
                    series: [
                        {
                            argumentField: "label",
                            valueField: "total",
                            label: {
                                visible: true,
                                connector: {
                                    visible: true,
                                    width: 1
                                }
                            }
                        }
                    ],
                    onPointClick: function (e) {
                        var point = e.target;

                        toggleVisibility(point);
                    },
                    onLegendClick: function (e) {
                        var arg = e.target;

                        toggleVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
                    }
                });

                function toggleVisibility(item) {
                    if (item.isVisible()) {
                        item.hide();
                    } else {
                        item.show();
                    }
                }


                chartPiramidePoblacional = $("#chart_piramide").dxFunnel({
                    //dataSource: "GestionConsultas?op=reporte_caracoli_piramide",
                    valueField: "total",
                    argumentField: "rango",
                    tooltip: {
                        enabled: true
                    },
                    inverted: true,
                    algorithm: "dynamicHeight",
                    item: {
                        border: {
                            visible: true
                        }
                    },
                    legend: {
                        visible: false
                    },
                    label: {
                        visible: true,
                        backgroundColor: "none",
                        horizontalAlignment: "left",
                        font: {
                            size: 16
                        }
                    },
                    palette: "bright",
                    sortData: false,
                    size: {
                        height: 340
                    }
                });

                iniciarDatasurce();
            }

            function iniciarDatasurce() {
                DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
                dataSource = new DevExpress.data.DataSource("GestionConsultas?op=reporte_pivote_caracoli").on("changed", function () {
                    aplicarFiltro();
                    if (arrayDataSource) {
                        filtrarDataSet();
                    }
                });

                var ds = new DevExpress.data.DataSource(dataSource.store());
                ds.load().done(function (result) {
                    arrayDataSource = result;
                    filtrarDataSet();
                });

                //dataSource.filter([["Identificador", "=", "2007-19-9704"],"or",["Identificador", "=", "2013-Q09-00155"]]);

                dataGrid = $("#gridContainer").dxDataGrid({
                    //dataSource: "GestionConsultas?op=reporte_datos_completos",
                    dataSource: dataSource,
                    allowColumnResizing: true,
                    allowColumnReordering: true,
                    columnResizingMode: "widget",
                    columnMinWidth: 50,
                    columnAutoWidth: true,
                    filterSyncEnabled: true,
                    sorting: {
                        mode: "multiple"
                    },
                    columnChooser: {
                        enabled: true,
                        mode: "select"
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
                    columns: [
                        {
                            dataField: "num_sdh",
                            caption: "Número de ocupación SDH",
                            visible: true
                        },
                        {
                            dataField: "fecha_acta",
                            caption: "Fecha de acta",
                            visible: true
                        },
                        {
                            dataField: "num_acta",
                            caption: "Número del acta",
                            visible: true
                        },
                        {
                            dataField: "direccion",
                            caption: "Dirección provisional",
                            visible: true
                        },
                        {
                            dataField: "nom1",
                            caption: "Notificado Nombre 1",
                            visible: true
                        },
                        {
                            dataField: "nom2",
                            caption: "Notificado Nombre 2",
                            visible: true
                        },
                        {
                            dataField: "ape1",
                            caption: "Notificado Apellido 1",
                            visible: true
                        },
                        {
                            dataField: "ape2",
                            caption: "Notificado Apellido 2",
                            visible: true
                        },
                        {
                            dataField: "cedula",
                            caption: "Notificado Cédula",
                            visible: true
                        },
                        {
                            dataField: "tel1",
                            caption: "Teléfono 1",
                            visible: true
                        },
                        {
                            dataField: "tel2",
                            caption: "Teléfono 2",
                            visible: true
                        },
                        {
                            dataField: "calidad_habita",
                            caption: "Calidad en la que habita la ocupación",
                            visible: true
                        },
                        {
                            dataField: "calidadhabitaotro",
                            caption: "Otra Calidad",
                            visible: true
                        },
                        {
                            dataField: "residia_antes",
                            caption: "Antes de llegar al sector donde residía",
                            visible: true
                        },
                        {
                            dataField: "residiaantesdonde",
                            caption: "Residia fuera de Bogotá Donde",
                            visible: false
                        },
                        {
                            dataField: "residiaanteszona",
                            caption: "Zona donde residía",
                            visible: false
                        },
                        {
                            dataField: "desea_retornar",
                            caption: "¿Le gustaría retornar a su lugar de origen?",
                            visible: true
                        },
                        {
                            dataField: "desearetornarpq",
                            caption: "Retornar ¿Por qué?",
                            visible: false
                        },
                        {
                            dataField: "hay_embarazadas",
                            caption: "¿Hay en el núcleo familiar mujeres gestantes?",
                            visible: false
                        },
                        {
                            dataField: "enf_respiratoria",
                            caption: "¿En el último mes algún miembro de la familia ha presentado síntomas de enfermedad respiratoria?",
                            visible: true
                        },
                        {
                            dataField: "ocuhabitada",
                            caption: "La ocupación ¿Se encuentra habitada?",
                            visible: false
                        },
                        {
                            dataField: "ocuconsolidado",
                            caption: "¿Consolidado? (bloque ladrillo o material rígido)",
                            visible: false
                        },
                        {
                            dataField: "ocuprovisional",
                            caption: "¿Provisional? (Madera/ latas/material de reciclaje)",
                            visible: false
                        },
                        {
                            dataField: "usocomercial",
                            caption: "Uso Comercial",
                            visible: true
                        },
                        {
                            dataField: "usoresidencial",
                            caption: "Uso Residencial",
                            visible: true
                        },
                        {
                            dataField: "mas_viv",
                            caption: "¿Se identifica más de una unidad de vivienda?",
                            visible: false
                        },
                        {
                            dataField: "masvivnum",
                            caption: "Numero de unidades de vivienda",
                            visible: false
                        },
                        {
                            dataField: "num_pisos",
                            caption: "Número de pisos de la construcción",
                            visible: false
                        },
                        {
                            dataField: "hay_ani",
                            caption: "¿Hay animales de compañía?",
                            visible: false
                        },
                        {
                            dataField: "tip_ani",
                            caption: "Tipo de animales",
                            visible: false
                        },
                        {
                            dataField: "tipaniotro",
                            caption: "Otros tipos de animales",
                            visible: false
                        },
                        {
                            dataField: "can_peligro",
                            caption: "Canino ¿Es de raza potencialmente peligrosas?",
                            visible: false
                        },
                        {
                            dataField: "canpeligroraza",
                            caption: "Raza",
                            visible: false
                        },
                        {
                            dataField: "hay_esp_prod",
                            caption: "¿Hay presencia de especies de producción?",
                            visible: false
                        },
                        {
                            dataField: "hayespprodcual",
                            caption: "Cual especie de producción",
                            visible: false
                        },
                        {
                            dataField: "observaciones",
                            caption: "Observaciones",
                            visible: true
                        }

                    ],
                    masterDetail: {
                        enabled: true,
                        template: function (container, options) {
                            var currentId = options.data;
                            $("<div>")
                                    .addClass("master-detail-caption")
                                    .text("Grupo Familiar:")
                                    .appendTo(container);
                            $("<div>")
                                    .dxDataGrid({
                                        columnAutoWidth: true,
                                        showBorders: true,
                                        columns: [
                                            /*"Subject", {
                                             dataField: "StartDate",
                                             dataType: "date"
                                             }, {
                                             dataField: "DueDate",
                                             dataType: "date"
                                             }, "Priority", {
                                             caption: "Completed",
                                             dataType: "boolean",
                                             calculateCellValue: function (rowData) {
                                             return rowData.Status == "Completed";
                                             }
                                             }*/
                                            {
                                                dataField: "nom1f",
                                                visible: true,
                                                caption: "Nombre Prin."
                                            },
                                            {
                                                dataField: "nom2f",
                                                visible: true,
                                                caption: "Nombre Sec."
                                            },
                                            {
                                                dataField: "ape1f",
                                                visible: true,
                                                caption: "Apellido Prin."
                                            },
                                            {
                                                dataField: "ape2f",
                                                visible: true,
                                                caption: "Apellido Sec."
                                            },
                                            {
                                                dataField: "tip_doc",
                                                visible: true,
                                                caption: "Tipo Documento"
                                            },
                                            {
                                                dataField: "doc_ide",
                                                visible: true,
                                                caption: "Documento número"
                                            },
                                            {
                                                dataField: "fec_nac",
                                                visible: true,
                                                dataType: "date",
                                                caption: "Fecha de nacimiento"
                                            },
                                            {
                                                dataField: "rel_jef",
                                                visible: true,
                                                caption: "Parentesco"
                                            },
                                            {
                                                dataField: "uni_soc",
                                                visible: true,
                                                caption: "Unidad Social"
                                            },
                                            {
                                                dataField: "tie_dis",
                                                visible: true,
                                                caption: "Tiene discapacidad"
                                            },
                                            {
                                                dataField: "tip_dis",
                                                visible: true,
                                                caption: "Tipo de discapacidad"
                                            },
                                            {
                                                dataField: "pre_dia",
                                                visible: true,
                                                caption: "Ha presentado enferemedad diarreica?"
                                            }
                                        ],
                                        dataSource: currentId.miembros
                                    }).appendTo(container);
                        }
                    },
                    export: {
                        enabled: true,
                        fileName: "Caracolí"
                    },
                    onInitialized: function () {
                        $('#btn-ayuda').collapse('show');
                    }
                }).dxDataGrid("instance");


                /****Chart procedencias***/
                //var dataSourceProcedencias = new DevExpress.data.DataSource("GestionConsultas?op=reporte_caracoli_listado_procedencias");
                $("#chart_procedencias").dxChart({
                    dataSource: "GestionConsultas?op=reporte_caracoli_listado_procedencias",
                    size: {
                        height: 560
                    },
                    series: {
                        argumentField: "procedencia",
                        valueField: "total",
                        name: "Procedencia de la familia",
                        type: "bar"
                    },
                    legend: {
                        verticalAlignment: "bottom",
                        horizontalAlignment: "center"
                    },
                    export: {
                        enabled: true
                    },
                    tooltip: {
                        enabled: true,
                        location: "edge",
                        customizeTooltip: function (arg) {
                            return {
                                text: arg.argument + ":" + arg.valueText
                            };
                        }
                    },
                    title: "Procedencia de la familia",
                    scrollBar: {
                        visible: false
                    },
                    scrollingMode: "all",
                    zoomingMode: "all"
                });
            }

        </script>

    </body>
</html>
