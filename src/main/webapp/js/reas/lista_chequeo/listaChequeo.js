/* global html2canvas */

$.reas('reas', {
    ListaChequeo: function (id) {
        var instancia = this;
        var identificador = id;
        var grupoTipoDocumentos = [];
        var filtros = [];
        function iniciar() {
            $(instancia).empty();
            $("<div />").dxTreeList({
                //dataSource: employees,
                dataSource: {
                    load: function (options) {
                        return $.ajax({
                            url: "GestionConsultas",
                            data: {op: 'consulta_lista_chequeo'}
                        });
                    }
                },
                keyExpr: "id",
                parentIdExpr: "parent",
                height: 560,
                scrolling: {
                    mode: "standard" // or "virtual"
                },
                showRowLines: true,
                columnAutoWidth: true,
                columns: [
                    {
                        dataField: "text",
                        caption: "Estado",
                        calculateSortValue: "id",
                        allowSorting: false,
                        sortOrder: "asc"
                    },
                    {
                        dataField: "progress",
                        caption: "",
                        width: 350,
                        allowSorting: false,
                        cellTemplate: function (container, options) {
                            container.addClass("chart-cell");
                            $("<div />").dxLinearGauge({
                                size: {
                                    height: 50
                                },
                                scale: {
                                    startValue: 0, endValue: 100,
                                    tickInterval: 50,
                                    label: {
                                        customizeText: function (arg) {
                                            return arg.valueText + ' %';
                                        }
                                    },
                                    tick: {
                                        visible: false
                                    },
                                    customTicks: [0, 100]
                                },
                                value: options.data.progress,
                                tooltip: {
                                    enabled: true,
                                    customizeTooltip: function (arg) {
                                        return {text: arg.valueText + ' %'};
                                    }
                                },
                                valueIndicator: {
                                    type: 'rangebar',
                                    color: '#483D8B'
                                },
                                rangeContainer: {
                                    ranges: [
                                        {startValue: 0, endValue: 20, color: "#92000A"},
                                        {startValue: 20, endValue: 50, color: "#E6E200"},
                                        {startValue: 50, endValue: 100, color: "#77DD77"}
                                    ]
                                }
                            }).appendTo(container);
                        }

                    }
                ]
            }).appendTo(instancia);
        }

        function actualizarListadoDocumentos() {
            buscarDocumentos();
            buscarGruposDocumentos();
        }

        function buscarDocumentos() {
            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: {
                    op: "consulta_documentos_identificador",
                    identificador: identificador
                },
                dataType: "json",
                async: true,
                success: function (response) {

                    if (response)
                    {
                        if (response.length > 0) {
                            $(instancia).find("#contenedor-archivos").empty();
                            for (var i = 0; i < response.length; i++) {

                                var resultado = response[i];
                                var ruta = resultado.nombre || '';
                                var icono = icono_archivo(ruta);
                                $(instancia).find("#contenedor-archivos").append(
                                        '<div class="file-box collapse in" data-grupo-documento="' + resultado.grudoc_id + '">' +
                                        '	<div class="file">' +
                                        '		<a href="ObtenerArchivo?ID=' + resultado.id + '">' +
                                        '			<span class="corner"></span>' +
                                        (
                                                resultado.thumbnail ?
                                                '                       <div class="image">' +
                                                '                           <img alt="image" class="img-responsive" src="' + resultado.thumbnail + '">' +
                                                '			</div>'
                                                :
                                                '			<div class="icon">' +
                                                '				<i class="fa ' + icono + '"></i>' +
                                                '			</div>'
                                                ) +
                                        '			<div class="file-name">' +
                                        '				' + resultado.tipo_documento + ' - ' + resultado.grupo_documento +
                                        '				<br/>' +
                                        '				<small>' + resultado.descripcion + '</small>' +
                                        '				<br/>' +
                                        '				<small>' + resultado.usuario + ': ' + resultado.fecha + '</small>' +
                                        '			</div>' +
                                        '		</a>' +
                                        '	</div>' +
                                        '</div>'
                                        );
                            }
                        } else {

                        }
                    }
                }, error: function (a) {
                    alert("No fué posible obtener las alternativas");
                }
            });
        }

        function buscarGruposDocumentos() {
            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: {
                    //op: "consulta_grupos_tipo_documento"
                    op: "consulta_resumen_grupos_tipo_documento_por_id",
                    identificador: identificador
                },
                dataType: "json",
                async: true,
                success: function (response) {
                    var contenedorGrupos = $(instancia).find("#contenedor-grupos");
                    contenedorGrupos.empty();
                    grupoTipoDocumentos = [];
                    if (response)
                    {
                        if (response.length > 0) {
                            for (var i = 0; i < response.length; i++) {
                                var grupo = eval("(" + response[i].grupos + ")");
                                grupoTipoDocumentos.push(grupo);
                                contenedorGrupos.append('<li><span class="grupo " title="' + (grupo.count ? 'Filtrar documentos' : 'No se han cargado documentos de este tipo') + '" data-toggle="collapse" style="outline: none !important; box-shadow: none;" data-target="#grupo_' + grupo.grudoc_id + '" data-filtro-grupo="' + grupo.grudoc_id + '"><i class="fa fa-folder"></i> ' + grupo.grudoc_desc + '</span>' + (grupo.count ? ' <span class="badge bg-green" style="margin-bottom:2px;">' + grupo.count + '</span>' : '') + '</li>');
                                if (grupo.sub_grupos) {
                                    contenedorGrupos.append(
                                            '<li class="collapse" id="grupo_' + grupo.grudoc_id + '">' +
                                            '	<ul class="" style="padding: 5px 0 10px 10px;" id="subgrupo_' + grupo.grudoc_id + '">' +
                                            '	</ul>' +
                                            '</li>'
                                            );
                                    var contenedorSubGrupos = $(contenedorGrupos).find('#subgrupo_' + grupo.grudoc_id);
                                    for (var j = 0; j < grupo.sub_grupos.length; j++) {
                                        var sub = grupo.sub_grupos[j];
                                        contenedorSubGrupos.append('<li><small><span class="subgrupo " title="' + (sub.count ? 'Filtrar documentos' : 'No se han cargado documentos de este tipo') + '" style="display: inline-block; outline: none !important; box-shadow: none;" data-item-count="' + sub.count + '" data-filtro-grupo="' + sub.grudoc_id + '"><i class="fa fa-folder"></i> ' + sub.grudoc_desc + '</span>' + (sub.count ? ' <span class="badge" style="margin-bottom:2px;">' + sub.count + '</span>' : '') + '</small></li>');
                                    }
                                }
                            }

                            contenedorGrupos.find('.subgrupo').on('click', function () {
                                if ($(this).data('item-count') > 0) {
                                    adicionarFiltro($(this).data('filtro-grupo'));
                                }
                            });
                        } else {

                        }
                    }
                }, error: function (a) {
                    alert("No fué posible obtener las alternativas");
                }
            });
        }

        function abrirMenuCargarArchivos() {
            var modal_id = Math.random().toString(36).substring(7);
            var thumbnail = null;
            var html =
                    '<div id="dynamicModal-' + modal_id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">' +
                    '   <div class="modal-dialog modal-lg" >' +
                    '       <div class="modal-content">' +
                    '           <div class="modal-header">' +
                    '               <a class="close" data-dismiss="modal">×</a>' +
                    '               <h4>Añadir archivos</h4>' +
                    '           </div>' + // header
                    '           <div class="modal-body">' +
                    '               <form class="form" role="form" data-toggle="validator">' +
                    '                   <div class="form-group">' +
                    '                       <label for="documento">Archivo:</label>' +
                    '                       <input id="documento" type="file" class="file" data-preview-file-type="any" >' +
                    '                   </div>' +
                    '                   <div class="form-group">' +
                    '                       <label for="doc_descripcion">Tipo de archivo:</label>' +
                    '                       <select class="form-control" id="tidoc_id" required></select>' +
                    '                   </div>' +
                    '                   <div class="form-group">' +
                    '                       <label for="doc_descripcion">Descripción:</label>' +
                    '                       <input type="text" class="form-control" id="doc_descripcion" required value="" >' +
                    '                   </div>' +
                    '                   <div class="form-group">' +
                    '                       <label for="doc_numfolios">Número de folios:</label>' +
                    '                       <input type="number" class="form-control" id="doc_numfolios" required value="" >' +
                    '                   </div>' +
                    '               </form>' +
                    '           </div>' +
                    '           <div class="modal-footer">' +
                    '                 <span id="btn-guardar" class="btn btn-success">Guardar</span>' +
                    '                 <span class="btn btn-default" data-dismiss="modal">Cerrar</span>' +
                    '           </div>' + // footer
                    '       </div>' + // content
                    '   </div>' + // dialog
                    '</div>'; // modalWindow
            $('body').append(html);
            $("#dynamicModal-" + modal_id).modal();
            $("#dynamicModal-" + modal_id).modal('show');
            $("#dynamicModal-" + modal_id).on('hidden.bs.modal', function (e) {
                $(this).remove();
            });
            $("#dynamicModal-" + modal_id).find("#btn-guardar").on('click', function () {

                var alertas = [];
                var modal_alertas_id = Math.random().toString(36).substring(7);
                if (!$("#dynamicModal-" + modal_id).find("#tidoc_id").val()) {
                    alertas.push('Seleccione el tipo de archivo');
                }
                if (!$("#dynamicModal-" + modal_id).find("#doc_descripcion").val()) {
                    alertas.push('Debe proporcionar una descripción');
                }
                if (!$("#dynamicModal-" + modal_id).find("#doc_numfolios").val()) {
                    alertas.push('El número de folios es obligatorio');
                }
                if (fileInput.fileinput('getFilesCount') <= 0) {
                    alertas.push('Seleccione el archivo a cargar');
                }


                if (alertas.length > 0) {
                    var html = '<div id="dynamicModal-error-' + modal_alertas_id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
                    html += '<div class="modal-dialog">';
                    html += '<div class="modal-content panel-warning">';
                    html += '<div class="modal-header panel-heading">';
                    html += '<a class="close" data-dismiss="modal">×</a>';
                    html += '<h4>Error</h4>';
                    html += '</div>';
                    html += '<div class="modal-body">';
                    html += '<p>';
                    for (var i = 0; i < alertas.length; i++) {
                        html += '  <h5>' + alertas[i] + '</h5>';
                        html += '  <hr class="separator">';
                    }
                    html += '<div class="modal-footer">';
                    html += '<span class="btn btn-default" data-dismiss="modal">Cerrar</span>';
                    html += '</div>'; // content
                    html += '</div>'; // dialog
                    html += '</div>'; // footer
                    html += '</div>'; // modalWindow
                    $('body').append(html);
                    $("#dynamicModal-error-" + modal_alertas_id).modal();
                    $("#dynamicModal-error-" + modal_alertas_id).modal('show');
                    $("#dynamicModal-error-" + modal_alertas_id).on('hidden.bs.modal', function (e) {
                        $(this).remove();
                    });
                    return;
                } else {
                    fileInput.fileinput().uploadExtra = {
                        numFolios: $("#dynamicModal-" + modal_id).find("#doc_numfolios").val(),
                        descripcion: $("#dynamicModal-" + modal_id).find("#doc_descripcion").val(),
                        identificador: identificador,
                        tipo_documento: $("#dynamicModal-" + modal_id).find("#tidoc_id").val(),
                        thumbnail: thumbnail
                    };
                    fileInput.fileinput('upload');
                }
            });
            var fileInput = $("#dynamicModal-" + modal_id).find("#documento").fileinput({
                language: 'es',
                uploadUrl: 'FileUploader',
                showUpload: false,
                browseOnZoneClick: true,
                layoutTemplates: {actionUpload: ''},
                uploadExtraData: function () {  // callback example
                    var out = {
                        numFolios: $("#dynamicModal-" + modal_id).find("#doc_numfolios").val(),
                        descripcion: $("#dynamicModal-" + modal_id).find("#doc_descripcion").val(),
                        identificador: identificador,
                        tipo_documento: $("#dynamicModal-" + modal_id).find("#tidoc_id").val(),
                        thumbnail: thumbnail
                    };
                    return out;
                }
            });
            fileInput.on('fileimageloaded', function (event, previewId) {
                html2canvas($("#" + previewId)[0]).then(function (canvas) {
                    thumbnail = canvas.toDataURL();
                });
            });
            fileInput.on('fileuploaded', function (event, data, previewId, index) {
                var form = data.form, files = data.files, extra = data.extra,
                        response = data.response, reader = data.reader;
                var modal_info_id = Math.random().toString(36).substring(7);
                var html = '<div id="dynamicModal-info-' + modal_info_id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
                html += '<div class="modal-dialog">';
                html += '<div class="modal-content panel-success">';
                html += '<div class="modal-header panel-heading">';
                html += '<a class="close" data-dismiss="modal">×</a>';
                html += '<h4>Error</h4>';
                html += '</div>';
                html += '<div class="modal-body">';
                html += '<p>';
                html += '  <h5>' + (response.success ? response.success : 'Archivo Cargado') + '</h5>';
                html += '<div class="modal-footer">';
                html += '<span class="btn btn-default" data-dismiss="modal">Cerrar</span>';
                html += '</div>'; // content
                html += '</div>'; // dialog
                html += '</div>'; // footer
                html += '</div>'; // modalWindow
                $('body').append(html);
                $("#dynamicModal-info-" + modal_info_id).modal();
                $("#dynamicModal-info-" + modal_info_id).modal('show');
                $("#dynamicModal-info-" + modal_info_id).on('hidden.bs.modal', function (e) {

                    actualizarListadoDocumentos();
                    $(this).remove();
                    $("#dynamicModal-" + modal_id).modal('hide');
                });
            });
            buscarTiposDocumentos($("#dynamicModal-" + modal_id).find("#tidoc_id"));
        }

        function buscarTiposDocumentos(select) {
            $(select).empty();
            $(select).append('<option selected disabled>Seleccione...</option>');
            for (var i = 0; i < grupoTipoDocumentos.length; i++) {
                var grupo = grupoTipoDocumentos[i];
                $(select).append('<optgroup id="grupo-tipo-doc-' + grupo.grudoc_id + '" label="' + grupo.grudoc_desc + '" ></optgroup>');
                if (grupo.sub_grupos) {
//orden inverso al utilizar insertAfter
                    for (var j = grupo.sub_grupos.length - 1; j >= 0; j--) {
                        var subgrupo = grupo.sub_grupos[j];
                        $('<optgroup id="grupo-tipo-doc-' + subgrupo.grudoc_id + '" class="nivel-2" label="&nbsp;&nbsp;' + subgrupo.grudoc_desc + '" ></optgroup>').insertAfter($(select).find('#grupo-tipo-doc-' + grupo.grudoc_id));
                    }
                }
            }


            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: {
                    op: "consulta_tipos_documento",
                    identificador: identificador
                },
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response)
                    {
                        if (response.length > 0) {
                            for (var i = 0; i < response.length; i++) {
                                $(select).find('#grupo-tipo-doc-' + response[i].grudoc_id).append('<option value="' + response[i].tidoc_id + '" >' + response[i].tidocdesc + '</option>');
                            }
                        } else {

                        }
                    }
                }, error: function (a) {
                    alert("No fué posible obtener los tipos de documentos");
                }
            });
        }


        function icono_archivo(archivo) {
            var icono = '';
            switch (archivo.toString().toLocaleLowerCase().split('.').pop()) {
                case 'jpg':
                case 'png':
                case 'png':
                case 'tif':
                case 'gif':
                case 'bmp':
                    icono = "fa-file-image-o";
                    break;
                case 'xls':
                case 'xlsx':
                    icono = "fa-file-excel-o";
                    break;
                case 'pdf':
                    icono = "fa-file-pdf-o";
                    break;
                case 'doc':
                case 'docx':
                    icono = "fa-file-word-o";
                    break;
                default:
                    icono = "fa-file";
            }
            return icono;
        }


        function adicionarFiltro(id) {
            if (filtros.indexOf(id) === -1) {
                LoopFiltros:
                        for (var i = 0; i < grupoTipoDocumentos.length; i++) {
                    var grupo = grupoTipoDocumentos[i];
                    if (grupo.grudoc_id === id) {
                        filtros.push(id);
                        $(instancia).find("#lista-filtros").append('<li><a id="filtro-' + id + '" class="filtro" data-filtro-id="' + id + '">' + grupo.grudoc_desc + ' <i class="fa fa-close"></i></a></li>');
                        break;
                    } else {
                        if (grupo.sub_grupos) {
                            for (var j = 0; j < grupo.sub_grupos.length; j++) {
                                var subgrupo = grupo.sub_grupos[j];
                                if (subgrupo.grudoc_id === id) {
                                    filtros.push(id);
                                    $(instancia).find("#lista-filtros").append('<li><a id="filtro-' + id + '" class="filtro" data-filtro-id="' + id + '">' + subgrupo.grudoc_desc + ' <i class="fa fa-close"></i></a></li>');
                                    break LoopFiltros;
                                }
                            }
                        }
                    }
                }
                $(instancia).find("#lista-filtros").find("#filtro-" + id).on('click', function () {
                    eliminarFiltro(id);
                });
                actualizarDocumentosFiltrados();
            }
        }

        function eliminarFiltro(id) {
            $(instancia).find("#lista-filtros").find("#filtro-" + id).remove();
            if (filtros.indexOf(id) !== -1) {
                filtros.splice(filtros.indexOf(id), 1);
            }
            actualizarDocumentosFiltrados();
        }

        function actualizarDocumentosFiltrados() {
            if (filtros.length > 0) {
                $(instancia).find("#contenedor-archivos").find('div.file-box').each(function (index, obj) {
                    $(obj).collapse((filtros.indexOf($(obj).data('grupo-documento')) !== -1 ? 'show' : 'hide'));
                });
            } else {
                $(instancia).find("#contenedor-archivos").find('div.file-box').collapse('show');
            }

        }

        iniciar();
    }
});
