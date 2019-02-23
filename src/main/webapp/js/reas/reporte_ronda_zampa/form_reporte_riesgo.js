var formulario = $('<div></div>').load("concepto_riesgo.html #form_riesgo_hidrico");

(function ($) {
    $.fn.riesgoHidrico = function (options) {
        var opts = $.extend({}, $.fn.riesgoHidrico.defaults, options);
        var informacion = {
            direccion: '',
            consecutivo: '',
            chip: '',
            manzana: '',
            lote: '',
            sector: '',
            reporte: false,
            usuario: '',
            afectacion: 0,
            quebrada: '0'
        };
        informacionRelacionada();

        function ordenFuncionamiento() {
            if (opts.modal) {
                if ($('body').has('#form_hidrico').length === 0) {
                    modal_boostrap = creaModal();
                    $('body').append(modal_boostrap);
                    $('#contenedor_hidrico').append(formulario);
                    agregarQuebradas();
                }
                if (!jQuery.isEmptyObject(opts.informacion)) {
                    $('#dir_catastral').val(opts.informacion.direccion_catastral ? opts.informacion.direccion_catastral : opts.informacion.dir_cat);
                    if ($('#dir_catastral').val() !== '')
                        $('#dir_catastral').attr('disabled', 'disabled');
                    $('#mz_catastral').val(opts.informacion.man_cat ? opts.informacion.man_cat : '');
                    if ($('#mz_catastral').val() !== '')
                        $('#mz_catastral').attr('disabled', 'disabled');
                    $('#chip_catastral').val(opts.informacion.chip ? opts.informacion.chip : '');
                    if ($('#chip_catastral').val() !== '')
                        $('#chip_catastral').attr('disabled', 'disabled');
                    $('#lt_catastral').val(opts.informacion.lot_cat ? opts.informacion.lot_cat : '');
                    if ($('#lt_catastral').val() !== '')
                        $('#lt_catastral').attr('disabled', 'disabled');
                    $('#tipo_afectacion').val(opts.informacion.afectacion !== 0 ? opts.informacion.afectacion : '0');
                    $('#sector_catastral').val(opts.informacion.sector !== '' ? opts.informacion.afectacion : '');

                }

                if (opts.informacion.consecutivo > 0) {
                    /*$('#imprimir_reporte').removeAttr('disabled');*/
                }
                $('.modal').modal('hide');
                $('#form_hidrico').modal('show');


                eventosFormulario();
            } else {
                $('#contenedor_hidrico').append(formulario);
                eventosFormulario();
            }
        }

        function eventosFormulario() {
            if (informacion.direccion !== '') {
                $('#dir_catastral').attr('disabled', 'disabled');
                $('#dir_catastral').val(informacion.direccion);
            }
            $('#imprimir_reporte').on('click', imprimirReporte);
            $("#img_visor").fileinput({
                theme: 'fa',
                language: 'es',
                initialPreview: ['ObtenerArchivo?ID=' + opts.informacion.img_visor],
                initialPreviewFileType: 'image',
                initialPreviewConfig: [
                    {caption: "fotográfia", size: 100, key: 1, id: 1, downloadUrl: 'ObtenerArchivo?ID=' + opts.informacion.img_visor}
                ],

                uploadExtraData: function (previewId, index) {  // callback example        
                    var out = {
                        numFolios: 1,
                        descripcion: 'imgen concepto visor',
                        identificador: opts.identificador,
                        tipo_documento: '7',
                        thumbnail: ''
                    };
                    return out;
                },
                deleteExtraData: function (previewId, index) {

                    var out = {
                        op: 'delete_img_visor',
                        identificador: opts.identificador,
                        descripcion: 'imgen concepto visor'
                    };
                    return out;
                },
                uploadUrl: 'FileUploader',
                deleteUrl: 'GestionDML',
                allowedFileExtensions: ["jpg", "png", "gif"],
                initialPreviewAsData: true,
                showUpload: true,
                overwriteInitial: true,
                browseOnZoneClick: true
            });
            $("#img_cobertura").fileinput({
                theme: 'fa',
                language: 'es',
                initialPreview: ['ObtenerArchivo?ID=' + opts.informacion.img_cobertura],
                initialPreviewFileType: 'image',
                initialPreviewConfig: [
                    {caption: "fotográfia", size: 100, key: 1, id: 1, downloadUrl: 'ObtenerArchivo?ID=' + +opts.informacion.img_cobertura}
                ],
                uploadExtraData: function (previewId, index) {  // callback example        
                    var out = {
                        numFolios: 1,
                        descripcion: 'imagen covertura SDA',
                        identificador: opts.identificador,
                        tipo_documento: '8',
                        thumbnail: ''
                    };
                    return out;
                },
                deleteExtraData: function (previewId, index) {
                    var out = {
                        op: 'delete_img_covertura',
                        identificador: opts.identificador,
                        descripcion: 'imagen covertura SDA'
                    };
                    return out;
                },
                uploadUrl: 'FileUploader',
                deleteUrl: 'GestionDML',
                allowedFileExtensions: ["jpg", "png", "gif"],
                initialPreviewAsData: true,
                showUpload: true,
                overwriteInitial: true,
                browseOnZoneClick: true
            });

        }

        function informacionRelacionada() {
            $datos = {
                op: 'info_reporte_hidrico',
                identificador: opts.identificador
            };
            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: $datos,
                dataType: "json",
                async: false,
                success: function (response) {
                    opts.informacion = response[0];
                    ordenFuncionamiento();
                },
                error: function () {
                    contenido = '';
                }
            });
        }

        function agregarQuebradas() {
            $datos = {
                op: 'traer_quebradas'
            };
            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: $datos,
                dataType: "json",
                success: function (response) {
                    $('#quebrada').append('<option value="0" selected disabled > Seleccione...</option>');
                    $.each(response, function (indice, obj) {
                        $('#quebrada').append('<option value="' + obj.cod_quebrada + '">' + obj.nombre_quebrada + '</option>');
                    });
                    $('#quebrada').val(opts.informacion.quebrada);
                },
                error: function () {
                    contenido = '';
                }
            });
        }

// Private function for debugging.
        function debug(obj) {
            if (window.console && window.console.log) {
                window.console.log("hilight selection count: " + obj.length);
            }
        }
//       funcionamiento      


        function guardarReporte() {
            $datos = {
                op: 'guardar_concepto_afectacion',
                identificador: opts.identificador,
                direccion: $('#dir_catastral').val(),
                lote_cat: $('#dir_catastral').val(),
                lote_cat: $('#dir_catastral').val(),
                sector: $('#sector_catastral').val(),
                quebrada: $('#quebrada').val(),
                afectacion: $('#tipo_afectacion').val(),
                usuario: id_user,
                consecutivo: opts.informacion.consecutivo !== 0 ? opts.informacion.consecutivo + 1 : 1
            };
            $.ajax({
                type: "POST",
                url: "GestionDML",
                data: $datos,
                dataType: "json",
                async: false,
                success: function (response) {

                },
                error: function () {

                }
            });
        }


        function imprimirReporte() {
            imprimirConcepto(opts.informacion);
            $('.modal').modal('hide');
        }
        function creaModal() {
// Contenedores del modal(Modal Containers):
            var modal = $("<div />")
                    .attr(opts.modalSettings)
                    .css(opts.modalCSS);
            var dialog = $("<div />")
                    .attr(opts.dialogSettings)
                    .css(opts.dialogCSS)
                    .appendTo(modal);
            var modalContainer = $("<div />")
                    .attr(opts.containerSettings)
                    .css(opts.containerCSS)
                    .appendTo(dialog);
            var modalHeader = $("<div />")
                    .attr(opts.headerSettings)
                    .css(opts.headerCSS)
                    .appendTo(modalContainer);
            var modalBody = $("<div />")
                    .attr(opts.bodySettings)
                    .css(opts.bodyCSS)
                    .appendTo(modalContainer);
            var modalFooter = $("<div />")
                    .attr(opts.footerSettings)
                    .css(opts.footerCSS)
                    .appendTo(modalContainer);
//             Elementos del modal(Modal elements)
//      
//      Elementos de la cabecera(Header Elements)
            if (opts.closeHeader) {
                var closeHeaderButton = $("<button />")
                        .attr(opts.closeHeaderSettings)
                        .appendTo(modalHeader);
            }
            var titleHeader = $("<h3 />")
                    .text(opts.tittle)
                    .appendTo(modalHeader);
//      Elementos del pie de pagina(footer elements)
            if (opts.closeButton) {
                var closeFooterButton = $("<button />")
                        .attr(opts.closeButtonSettings)
                        .text(opts.closeButtonName)
                        .appendTo(modalFooter);
            }
            var call = function () {
                opts.callback(this);
            };
            if (opts.functionButton) {
                var functionFooterButton = $("<button />")
                        .attr(opts.functionButtonSettings)
                        .text(opts.functionButtonName)
                        .click(guardarReporte)
                        .appendTo(modalFooter);
            }
            return  modal;
        }



    };
//    Configuracion general 
    $.fn.riesgoHidrico.defaults = {
        modal: true,
        identificador: '',
        id: "modal_up",
        informacion: {},
        tittle: "Reporte Concepto de Riesgo",
        closeHeader: true,
        closeButton: true,
        closeButtonName: "Cerrar",
        functionButton: true,
        functionButtonName: "Guardar",
        body: "<h2>Hello world</h2>",
        callback: function () {
            alert('empty function');
        },
        modalSettings: {
            class: "modal fade",
            id: "form_hidrico"
        },
        dialogSettings: {
            class: "modal-dialog",
            role: "document"
        },
        headerSettings: {
            class: "modal-header"
        },
        containerSettings: {
            class: "modal-content"

        },
        footerSettings: {
            class: "modal-footer"
        },
        bodySettings: {
            class: "modal-body",
            id: 'contenedor_hidrico'
        },
        functionButtonSettings: {
            class: "btn btn-primary"
        },
        closeButtonSettings: {
            'data-dismiss': "modal",
            class: "btn btn-secondary"
        },
        closeHeaderSettings: {
            class: "close",
            'data-dismiss': "modal",
            'aria-label': "Close"
        },
        modalCSS: {
        },
        containerCSS: {
        },
        dialogCSS: {
        },
        headerCSS: {
        },
        footerCSS: {
        },
        bodyCSS: {
        },
        functions: {}
    };
}(jQuery));