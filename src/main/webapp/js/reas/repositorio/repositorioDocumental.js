/* global html2canvas, DevExpress */

DevExpress.ui.dxOverlay.baseZIndex(3000);

$.reas('reas', {
    RepositorioDocumental: function (id) {
        var instancia = this;
        var identificador = id;
        var filtros = [];
        var selected_tidoc_id = null;

        function iniciar() {
            $(instancia).empty();
            $(instancia).append(
                    '<div class="row">' +
                    '	<div id="contenedor-panel-lateral" class="col-lg-3">' +
                    '		<div class="ibox float-e-margins">' +
                    '			<div class="ibox-content">' +
                    '				<div class="file-manager">' +
                    '					<button class="btn btn-primary btn-block" id="btn-cargar-archivos">Cargar Archivos</button>' +
                    '					<div class="hr-line-dashed"></div>' +
                    '					<form class="form collapse" role="form" data-toggle="validator" id="form-cargar-documento">' +
                    '						<div class="form-group">' +
                    '							<label for="documento">Archivo:</label>' +
                    '							<input id="documento" type="file" class="file" data-preview-file-type="any" >' +
                    '						</div>' +
                    '						<div class="form-group">' +
                    '							<label for="doc_descripcion">Tipo de archivo:</label>' +
                    '							<div id="tidoc_id"></div>' +
                    '						</div>' +
                    '						<div class="form-group">' +
                    '							<label for="doc_descripcion">Descripción:</label>' +
                    '							<input type="text" class="form-control" id="doc_descripcion" required value="" >' +
                    '						</div>' +
                    '						<div class="form-group">' +
                    '							<label for="doc_numfolios">Número de folios:</label>' +
                    '							<input type="number" class="form-control" id="doc_numfolios" required value="" >' +
                    '						</div>' +
                    '						<div class="form-group">' +
                    '							<span id="btn-guardar" class="btn btn-success">Guardar</span>' +
                    '							<span id="btn-cancelar" class="btn btn-default">Cancelar</span>' +
                    '						</div>' +
                    '					</form>' +
                    '					<div id="contenedor-filtros" class="collapse in">' +
                    '						<h5 class="tag-title">Filtros</h5>' +
                    '						<ul id="lista-filtros" class="tag-list" style="padding: 0"></ul>' +
                    '						<div class="clearfix"></div>' +
                    '						<div class="hr-line-dashed"></div>' +
                    '						<h5>Filtrar por tipo:</h5>' +
                    '						<div id="contenedor-tipos-documentos" style="height:100%;"></div>' +
                    '						<div class="clearfix"></div>' +
                    '					</div>' +
                    '				</div>' +
                    '			</div>' +
                    '		</div>' +
                    '	</div>' +
                    '	<div id="contenedor-panel-central" class="col-lg-9 animated fadeInRight">' +
                    '		<div class="row">' +
                    '			<div class="col-lg-12" id="contenedor-archivos">' +
                    '				<div class="x_content">' +
                    '					<h4>No se encontraron archivos, Haga click en <b>Cargar Archivos</b> para añadir documentos</h4>' +
                    '				</div>' +
                    '			</div>' +
                    '		</div>' +
                    '	</div>' +
                    '</div>'
                    );

            var thumbnail = null;

            //Se instancia el contenedor del documento
            var fileInput = $(instancia).find("#form-cargar-documento").find("#documento").fileinput({
                language: 'es',
                uploadUrl: 'FileUploader',
                showUpload: false,
                browseOnZoneClick: true,
                layoutTemplates: {actionUpload: ''},
                uploadExtraData: function () {  // callback example
                    var out = {
                        numFolios: $(instancia).find("#form-cargar-documento").find("#doc_numfolios").val(),
                        descripcion: $(instancia).find("#form-cargar-documento").find("#doc_descripcion").val(),
                        identificador: identificador,
                        tipo_documento: selected_tidoc_id,
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
                html += '<h4>Resultado</h4>';
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

                    $(instancia).find('#btn-cargar-archivos').prop("disabled", false);
                    $(instancia).find('#btn-cargar-archivos').removeClass('disabled');
                    $(instancia).find("#form-cargar-documento").collapse('hide');
                    $(instancia).find("#contenedor-filtros").collapse('show');

                    selected_tidoc_id = null;
                    $(instancia).find("#form-cargar-documento").find("#tidoc_id").dxSelectBox('reset');

                    //Cambiar el tamaño del contenedor para dar mas espacio al cargar documentos
                    $(instancia).find("#contenedor-panel-lateral").toggleClass('col-lg-3 col-lg-9');
                    $(instancia).find("#contenedor-panel-central").toggleClass('col-lg-3 col-lg-9');

                });
            });


            buscarTiposDocumentos($(instancia).find("#form-cargar-documento").find("#tidoc_id"));

            $(instancia).find('#btn-cargar-archivos').on('click', function () {
                //abrirMenuCargarArchivos();
                $(this).prop("disabled", true);
                $(this).addClass('disabled');
                $(instancia).find("#form-cargar-documento").collapse('show');
                $(instancia).find("#contenedor-filtros").collapse('hide');

                //Cambiar el tamaño del contenedor para dar mas espacio al cargar documentos
                $(instancia).find("#contenedor-panel-lateral").toggleClass('col-lg-3 col-lg-9');
                $(instancia).find("#contenedor-panel-central").toggleClass('col-lg-3 col-lg-9');
            });

            actualizarListadoDocumentos();


            $(instancia).find("#form-cargar-documento").find("#btn-cancelar").on('click', function () {
                $(instancia).find('#btn-cargar-archivos').prop("disabled", false);
                $(instancia).find('#btn-cargar-archivos').removeClass('disabled');
                $(instancia).find("#form-cargar-documento").collapse('hide');
                $(instancia).find("#contenedor-filtros").collapse('show');

                selected_tidoc_id = null;
                $(instancia).find("#form-cargar-documento").find("#tidoc_id").dxSelectBox('reset');

                //Restaurar el tamaño original
                $(instancia).find("#contenedor-panel-lateral").toggleClass('col-lg-3 col-lg-9');
                $(instancia).find("#contenedor-panel-central").toggleClass('col-lg-3 col-lg-9');
            });

            $(instancia).find("#form-cargar-documento").find("#btn-guardar").on('click', function () {

                var alertas = [];
                var modal_alertas_id = Math.random().toString(36).substring(7);

                if (!selected_tidoc_id) {
                    alertas.push('Seleccione el tipo de archivo');
                }
                if (!$(instancia).find("#form-cargar-documento").find("#doc_descripcion").val()) {
                    alertas.push('Debe proporcionar una descripción');
                }
                if (!$(instancia).find("#form-cargar-documento").find("#doc_numfolios").val()) {
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
                        numFolios: $(instancia).find("#form-cargar-documento").find("#doc_numfolios").val(),
                        descripcion: $(instancia).find("#form-cargar-documento").find("#doc_descripcion").val(),
                        identificador: identificador,
                        tipo_documento: $(instancia).find("#form-cargar-documento").find("#tidoc_id").val(),
                        thumbnail: thumbnail
                    };
                    fileInput.fileinput('upload');
                }
            });

            $($.reas).trigger("RepositorioDocumental.loaded", [instancia, identificador]);
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
                    //op: "consulta_resumen_grupos_tipo_documento_por_id",
                    op: "consulta_resumen_documentos_por_id",
                    identificador: identificador
                },
                dataType: "json",
                async: true,
                success: function (response) {
                    for (var i = 0; i < response.length; i++) {
                        response[i].disabled = response[i].count <= 0;
                    }

                    $(instancia).find("#contenedor-tipos-documentos").dxTreeView({
                        items: response,
                        dataStructure: "plain",
                        parentIdExpr: "parent",
                        keyExpr: "id",
                        showCheckBoxesMode: "normal",
                        disabledExpr: 'disabled',
                        onItemSelectionChanged: function (e) {
                            var item = e.node;
                            var selected = item.selected;
                            if (item.items.length > 0) {
                                $.each(item.items, function (index, sub_item) {
                                    if (selected && !sub_item.disabled) {
                                        adicionarFiltro(sub_item.itemData.id, sub_item.itemData.name);
                                    } else {
                                        eliminarFiltro(sub_item.itemData.id);
                                    }
                                });
                            } else {
                                if (item.selected) {
                                    adicionarFiltro(item.itemData.id, item.itemData.name);
                                } else {
                                    eliminarFiltro(item.itemData.id);
                                }
                            }
                            actualizarDocumentosFiltrados();
                        },
                        itemTemplate: function (data) {
                            return "<div>" + data.name +
                                    ((data.count > 0) ? ('<span class="badge bg-green" style="margin:0 0 3px 5px;">' + data.count + '</span>') : "") +
                                    "</div>";
                        }
                    });
                }, error: function (a) {
                    alert("No fué posible obtener los tipos de documentos");
                }
            });
        }

        function buscarTiposDocumentos(select) {
            $(select).empty();
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

                            var tipos = new DevExpress.data.DataSource({
                                store: response,
                                key: "id",
                                group: "grudoc_desc"
                            });

                            $(select).dxSelectBox({
                                dataSource: tipos,
                                valueExpr: "tidoc_id",
                                placeholder: "Seleccione...",
                                searchEnabled: true,
                                grouped: true,
                                displayExpr: "tidocdesc",
                                onSelectionChanged: function (e) {
                                    if (e.selectedItem) {
                                        selected_tidoc_id = e.selectedItem.tidoc_id;
                                    } else {
                                        selected_tidoc_id = null;
                                    }
                                }
                            });
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


        function adicionarFiltro(id, label) {
            if (filtros.indexOf(id) === -1) {
                filtros.push(id);

                $(instancia).find("#lista-filtros").append('<li><a id="filtro-' + id + '" class="filtro" data-filtro-id="' + id + '">' + label + ' <i class="fa fa-close"></i></a></li>');
                $(instancia).find("#lista-filtros").find("#filtro-" + id).on('click', function () {
                    eliminarFiltro(id);
                    actualizarDocumentosFiltrados();
                });

            }
        }

        function eliminarFiltro(id) {
            $(instancia).find("#lista-filtros").find("#filtro-" + id).remove();
            if (filtros.indexOf(id) !== -1) {
                filtros.splice(filtros.indexOf(id), 1);
            }

            $(instancia).find("#contenedor-tipos-documentos").dxTreeView('unselectItem', id);
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
