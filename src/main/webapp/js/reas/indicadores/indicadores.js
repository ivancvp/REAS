/* global DevExpress, XLSX */

DevExpress.ui.dxOverlay.baseZIndex(3000);

$.reas('reas', {
    Indicadores: function (config) {
        var instance = this;
        var dataSource;
        var arrayDataSource;
        var gridInstance;
        var dragMarkupTimeout = null;
        var dragMarkup = null;
        var workbook;

        function start() {
            DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
            $(instance).empty();
            $(instance).append('<div id="dragMarkup" class="drag-markup text-center collapse in background-blink" style="    border: 5px dashed silver;    height: 98%;    cursor: pointer;    width: 100%;    left: 12px;    position: absolute;    z-index: 9999999;    background-color: rgba(255,255,255,0.8);">' +
                    '    <h3 class="drag-markup-text" style="height: 100px;    line-height: 143px;    position: relative;    color: rgba(0,0,0,0.4);    width: 100%;    white-space: normal !important;    word-wrap: break-word;">Arrastre el archivo aquí</h3>' +
                    '</div>');
            dragMarkup = $(instance).find("#dragMarkup");
            dragMarkup.hide();
            configureCharts();
        }


        function configureCharts() {
            if (config.charts) {
                $(instance).append('<div class="row collapse in" id="container_charts"></div>');
                var chartContainer = $(instance).find("#container_charts");
                chartContainer.collapse("hide");

                for (var i = 0; i < config.charts.length; i++) {
                    let chart = config.charts[i];
                    if (chart.type === "chart") {
                        chartContainer.append(
                                '<div class="' + chart.class + ' chart" id="panel_char_' + i + '"> ' +
                                '    <div class="widget-head-color-box p-lg text-center"> ' +
                                '        <div id="chart_' + i + '"></div> ' +
                                '    </div> ' +
                                '</div> '
                                );
                        config.charts[i].instance = chartContainer.find('#chart_' + i).dxChart(chart.chartOptions);
                        config.charts[i].dxInstance = chartContainer.find('#chart_' + i).dxChart("instance");
                    } else if (chart.type === "pie") {
                        chartContainer.append(
                                '<div class="' + chart.class + ' chart" id="panel_char_' + i + '"> ' +
                                '    <div class="widget-head-color-box p-lg text-center"> ' +
                                '        <div id="chart_' + i + '"></div> ' +
                                '    </div> ' +
                                '</div> '
                                );
                        config.charts[i].instance = chartContainer.find('#chart_' + i).dxPieChart(chart.chartOptions);
                        config.charts[i].dxInstance = chartContainer.find('#chart_' + i).dxPieChart("instance");
                    } else if (chart.type === "funnel") {
                        chartContainer.append(
                                '<div class="' + chart.class + ' chart" id="panel_char_' + i + '"> ' +
                                '    <div class="widget-head-color-box p-lg text-center"> ' +
                                '        <div id="chart_' + i + '"></div> ' +
                                '    </div> ' +
                                '</div> '
                                );
                        config.charts[i].instance = chartContainer.find('#chart_' + i).dxFunnel(chart.chartOptions);
                        config.charts[i].dxInstance = chartContainer.find('#chart_' + i).dxFunnel("instance");
                    } else {
                        //TODO:
                    }

                    if (config.charts[i].dxInstance) {
                        config.charts[i].dxInstance.option("configChartDefinition", chart);

                        config.charts[i].dxInstance.option({
                            onPointClick: function (e) {
                                var point = e.target;
                                toggleSeriesVisibility(point);
                            },
                            onLegendClick: function (e) {
                                var arg = e.target;
                                toggleSeriesVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
                            },
                            onArgumentAxisClick: function (e) {
                                //TODO:
                            },
                            onItemClick: function (e) {
                                //e.item.select(!e.item.isSelected());
                                //TODO:
                            }
                        });
                    }
                }
            }

            configureGrid();
        }

        function configureGrid() {
            if (config.grid) {
                var grid = config.grid;
                if (grid.container.type === "collapsible") {
                    $(instance).append(
                            '<div class="row ' + grid.container.class + '" id="container_accordion_grid">' +
                            '   <div class="panel-group" id="accordion">' +
                            '       <div class="panel panel-default">' +
                            '           <div class="panel-heading">' +
                            '               <h4 class="panel-title">' +
                            '                   <a data-toggle="collapse" data-parent="#accordion" href="#collapsible-panel-grid">' + grid.container.text + '</a>' +
                            '              </h4>' +
                            '           </div>' +
                            '           <div id="collapsible-panel-grid" class="panel-collapse collapse in">' +
                            '               <div class="panel-body">' +
                            '                   <div id="container-grid"></div>' +
                            '              </div>' +
                            '           </div>' +
                            '      </div>' +
                            '   </div>' +
                            '</div>');
                    var gridElement = $(instance).find("#container-grid").dxDataGrid(grid.config);
                    gridInstance = gridElement.dxDataGrid("instance");
                } else {
                    //TODO:
                }


                if (config.datasourceURL) {
                    initDatasurce(config.datasourceURL);

                    //setting DnD handler
                    window.addEventListener("dragover", dragOver);
                    window.addEventListener("drop", drop);
                } else {
                    alert("Error en la configuración, datasourceURL es obligatorio");
                    return;
                }
            } else {
                console.error("Grid not configured");
            }
        }


        function initDatasurce(datasourceURL) {
            dataSource = new DevExpress.data.DataSource(datasourceURL).on("changed", function () {
                applyFilter();
            });

            var ds = new DevExpress.data.DataSource(dataSource.store());
            ds.load().done(function (result) {
                arrayDataSource = result;
            });

            gridInstance.option("dataSource", dataSource);
        }

        function applyFilter() {
            var filter = gridInstance.getCombinedFilter(true);
            var sqlFilter = "";
            var processedArray;

            if (filter !== undefined && filter !== null) {
                processedArray = DevExpress.data.query(arrayDataSource)
                        .filter(filter)
                        .toArray();


                if (filter.columnIndex !== undefined && filter.columnIndex !== null) {
                    var filterColumn = gridInstance.columnOption(filter.columnIndex);
                    if (Array.isArray(filter[0])) {

                        sqlFilter = buildSqlFilter(filterColumn, filter[0][1], null);
                        sqlFilter += " " + filter[1] + " ";
                        sqlFilter += buildSqlFilter(filterColumn, filter[0][1], '');
                    } else {
                        sqlFilter = buildSqlFilter(filterColumn, filter[1], filter[2]);
                    }
                } else if (filter.length > 0) {
                    for (var i = 0; i < filter.length; i++) {
                        if (filter[i].length > 0 && filter[i].columnIndex !== undefined && filter[i].columnIndex !== null) {
                            var filterColumn = gridInstance.columnOption(filter[i].columnIndex);
                            if (Array.isArray(filter[i][0])) {
                                sqlFilter += buildSqlFilter(filterColumn, filter[i][0][1], null);
                                sqlFilter += " " + filter[1] + " ";
                                sqlFilter += buildSqlFilter(filterColumn, filter[i][0][1], '');
                            } else {
                                sqlFilter += buildSqlFilter(filterColumn, filter[i][1], filter[i][2]);
                            }


                            //sqlFilter += buildSqlFilter(filterColumn, filter[i][1], filter[i][2]);
                        } else if (filter[i] === "and" || filter[i] === "or") {
                            sqlFilter += " " + filter[i] + " ";
                        }
                    }
                }
                console.log(sqlFilter);
            } else {
                processedArray = DevExpress.data.query(arrayDataSource)
                        .toArray();
                sqlFilter = "1=1";
            }

            for (var i = 0; i < config.charts.length; i++) {
                let chart = config.charts[i];
                if (chart.groupField) {
                    pivotFilteredArray(chart, processedArray);
                } else if (chart.externalDataSource) {
                    filterExternalDataSources(chart, sqlFilter);
                }

                $(instance).find("#container_charts").collapse("show");
                //$(instance).find("#container_charts").find(".chart.collapse").collapse("show");
            }
        }

        function pivotFilteredArray(chart, filteredArray) {

            var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                store: filteredArray,
                fields: [{
                        area: "row",
                        dataField: chart.groupField
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
                switch (chart.type) {
                    case 'chart':
                        chart.instance.dxChart("option", "dataSource", pivotArrayDatasource);
                        break;
                    case 'pie':
                        chart.instance.dxPieChart("option", "dataSource", pivotArrayDatasource);
                        break;
                    case 'polar':
                        chart.instance.dxPolarChart("option", "dataSource", pivotArrayDatasource);
                        break;
                }
            });
        }


        function buildSqlFilter(filterColumn, operation, value) {
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

        function filterExternalDataSources(chart, sqlFilter) {
            var options = chart.externalDataSourceOptions;
            $.extend(true, options, {filtro: sqlFilter});
            $.ajax({
                type: "POST",
                url: chart.externalDataSourceURL,
                data: options,
                dataType: "json",
                async: true,
                context: chart.dxInstance,
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


        function toggleSeriesVisibility(item) {
            if (item.isVisible()) {
                item.hide();
            } else {
                item.show();
            }
        }



        function setShowDragMarkup(show) {
            if (show) {
                dragMarkup.show();
                //$(instance).css("background-color", "red");
            } else {
                dragMarkup.hide();
                //$(instance).css("background-color", '');
            }
        }

        function hideMarkup(e) {
            dragMarkup.hide();
            //$(instance).css("background-color", '');
        }

        function dragOver(e) {
            e = e || event;
            e.preventDefault();
            if (e.dataTransfer && e.dataTransfer.types && e.dataTransfer.types.indexOf("Files") !== -1) {

                if (dragMarkupTimeout !== null)
                    clearTimeout(dragMarkupTimeout);
                dragMarkupTimeout = setTimeout(hideMarkup.bind(this), 2000);

                setShowDragMarkup(true);
            }
        }

        function drop(e) {
            e = e || event;
            e.stopPropagation();
            e.preventDefault();
            setShowDragMarkup(false);
            let files = [];
            if (e.dataTransfer && e.dataTransfer.types && e.dataTransfer.types.indexOf("Files") !== -1) {
                files = e.dataTransfer.files;
            } else if (e.target && e.target.files) {
                files = e.target.files;
            }
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var rABS = true;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    if (!rABS)
                        data = new Uint8Array(data);
                    workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
                    var sheet_name_list = workbook.SheetNames;
                    if (sheet_name_list) {
                        openSheetSelector(sheet_name_list);
                    }
                };
                if (rABS)
                    reader.readAsBinaryString(file);
                else
                    reader.readAsArrayBuffer(file);
            }
        }

        function openSheetSelector(sheet_name_list) {
            modal_id = Math.random().toString(36).substring(7);

            var titulo = "Hoja a filtrar";
            var html =
                    '<div id="modalSheetSelector-' + modal_id + '" style="" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">' +
                    '   <div class="modal-dialog modal-md" style="">' +
                    '       <div class="modal-content">' +
                    '           <div class="modal-header">' +
                    '               <a class="close" data-dismiss="modal">×</a>' +
                    '               <h4>' + titulo + '</h4>' +
                    '           </div>' + // header
                    '           <div class="modal-body ibox-content" >' +
                    '               <form role="form" class="form-horizontal">' +
                    '                   <div class="form-group">' +
                    '                       <label class="col-lg-3 control-label">Columna a filtrar</label>' +
                    '                      <div class="col-lg-9">' +
                    '                           <div id="filter_column_selector"></div>' +
                    '                       </div>' +
                    '                   </div>' +
                    '                   <div class="form-group">' +
                    '                       <label class="col-lg-3 control-label">Coincidir con</label>' +
                    '                       <div class="col-lg-9">' +
                    '                           <div class="panel-group" id="sheetListContainer">' +
                    '                           </div>' +
                    '                       </div>' +
                    '                   </div>' +
                    '               </form>' +
                    '           </div>' +
                    '           <div class="modal-footer">' +
                    '               <span id="btn-aplicar" class="btn btn-success" disabled>Filtrar</span>' +
                    '               <span id="btn-cerrar" class="btn btn-default" >Cerrar</span>' +
                    '           </div>' + // footer
                    '       </div>' + // content
                    '   </div>' + // dialog
                    '</div>'; // modalWindow
            $('body').append(html);

            var modal = $("#modalSheetSelector-" + modal_id).modal();
            modal.modal('show');
            modal.on('hidden.bs.modal', function (e) {
                $(this).remove();
            });
            modal.find("#btn-cerrar").on('click', function () {
                modal.modal('hide');
            });
            modal.find("#btn-aplicar").on('click', function () {
                if (!$(this).attr("disabled")) {

                    var gridColumn = modal.find('#filter_column_selector').dxSelectBox('instance').option('value');
                    var selectedFileSheet = modal.find("input:radio[name ='a']:checked").data("sheet");
                    var selectedFileColumn = modal.find("input:radio[name ='a']:checked").data("column");

                    buildXLSFilter(gridColumn, workbook.Sheets[sheet_name_list[selectedFileSheet]], selectedFileColumn, modal);
                }
            });

            //List all available column on gridInstance
            var columns = [];
            for (var i = 0; i < gridInstance.columnCount(); i++) {
                var col = gridInstance.columnOption(i);
                columns.push({id: i, caption: col.caption});
            }

            var filter_column_selector_validator = modal.find('#filter_column_selector').dxSelectBox({
                dataSource: columns,
                valueExpr: "id",
                displayExpr: "caption",
                placeholder: "Seleccione...",
                searchEnabled: true,
                onContentReady: function (e) {
                },
                onSelectionChanged: function (e) {
                    validateFilter();
                }
            }).dxValidator({
                validationRules: [{
                        type: "required",
                        message: "Debe seleccionar una columna"
                    }]
            });
            $(filter_column_selector_validator).dxValidator("instance").validate();


            for (var i = 0; i < sheet_name_list.length; i++) {
                var headers = get_header_row(workbook.Sheets[sheet_name_list[i]]);
                modal.find("#sheetListContainer").append(
                        '<div class="panel panel-default">' +
                        '    <div class="panel-heading">' +
                        '        <h5 class="panel-title">' +
                        '            <a data-toggle="collapse" data-parent="#sheetListContainer" href="#sheet-' + i + '">Hoja: \"' + sheet_name_list[i] + '\"</a>' +
                        '        </h5>' +
                        '    </div>' +
                        '    <div id="sheet-' + i + '" class="panel-collapse collapse ' + (sheet_name_list.length === 1 ? 'in' : '') + '">' +
                        '        <div class="panel-body" id="container-columns-sheet-' + i + '">' +
                        '        </div>' +
                        '    </div>' +
                        '</div>'
                        );
                for (var j = 0; j < headers.length; j++) {
                    modal.find("#sheetListContainer").find("#container-columns-sheet-" + i).append('<div class="i-checks"><label> <input type="radio" value="' + headers[j] + '" name="a" data-sheet="' + i + '" data-column="' + headers[j] + '"> <i></i>' + headers[j] + '</label></div>');
                }
            }
            modal.find("input:radio[name='a']").change(function () {
                validateFilter();
            });

            function validateFilter() {
                if (modal.find('#filter_column_selector').dxSelectBox('instance').option('value') !== null &&
                        modal.find("input:radio[name ='a']:checked").val() !== undefined) {
                    modal.find("#btn-aplicar").removeAttr("disabled");
                } else {
                    modal.find("#btn-aplicar").attr("disabled", "true");
                }
            }
        }

        function get_header_row(sheet) {
            var headers = [];
            var range = XLSX.utils.decode_range(sheet['!ref']);
            var C, R = range.s.r; /* start in the first row */
            /* walk every column in the range */
            for (C = range.s.c; C <= range.e.c; ++C) {
                var cell = sheet[XLSX.utils.encode_cell({c: C, r: R})]; /* find the cell in the first row */

                var hdr = ("UNKNOWN " + C); // <-- replace with your desired default 
                if (cell && cell.t)
                    hdr = XLSX.utils.format_cell(cell);

                headers.push(hdr);
            }
            return headers;
        }


        function buildXLSFilter(gridColumn, sheet, fileColumn, modal) {
            var sheetJson = XLSX.utils.sheet_to_json(sheet);
            var filterValues = [];
            if (sheetJson && sheetJson.length) {
                for (var i = 0; i < sheetJson.length; i++) {
                    if (filterValues.indexOf(sheetJson[i][fileColumn]) === -1) {
                        filterValues.push(sheetJson[i][fileColumn]);
                    }
                }
            }

            var filterColumn = gridInstance.columnOption(gridColumn).dataField;
            var filter = [];
            for (var i = 0; i < filterValues.length; i++) {
                if (i !== 0) {
                    filter.push("or");
                }
                filter.push([filterColumn, "=", filterValues[i] ]);
            }
            gridInstance.filter(filter);
            modal.modal('hide');

        }

        start();
    }
});
