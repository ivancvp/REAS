/* global URL, PDFJS, DevExpress */

if (typeof PDFJS === 'undefined') {

    $('<script>')
            .attr({
                'type': 'text/javascript'
                , 'src': 'js/vendors/pdf.js/pdf.js'
            })
            .appendTo('head');

    $('<script>')
            .attr({
                'type': 'text/javascript'
                , 'src': 'js/vendors/pdf.js/pdf.worker.js'
            })
            .appendTo('head');

    PDFJS.workerSrc = 'js/vendors/pdf.js/pdf.worker.js';
}

if (!$().slick) {
    $('<script>')
            .attr({
                'type': 'text/javascript'
                , 'src': 'js/vendors/slick/slick.min.js'
            })
            .appendTo('head');
    $('<link>')
            .attr({
                type: 'text/css',
                rel: 'stylesheet',
                href: 'js/vendors/slick/slick.css'
            })
            .appendTo('head');
    $('<link>')
            .attr({
                type: 'text/css',
                rel: 'stylesheet',
                href: 'js/vendors/slick/slick-theme.css'
            })
            .appendTo('head');
}


if (!$().ionRangeSlider) {
    $('<script>')
            .attr({
                'type': 'text/javascript'
                , 'src': 'js/vendors/ion.rangeSlider/js/ion.rangeSlider.js'
            })
            .appendTo('head');
    $('<link>')
            .attr({
                type: 'text/css',
                rel: 'stylesheet',
                href: 'js/vendors/ion.rangeSlider/css/ion.rangeSlider.css'
            })
            .appendTo('head');
    $('<link>')
            .attr({
                type: 'text/css',
                rel: 'stylesheet',
                href: 'js/vendors/ion.rangeSlider/css/ion.rangeSlider.skinModern.css'
            })
            .appendTo('head');
}



$($.reas).on("RepositorioDocumental.loaded", function (event, target, identificador) {
    var instancia = target;
    var modal_id;
    var tiposDocumentosDataSource;
    var pdf_loaded_doc;
    var pdfTotalPages;
    var pdfCurrentPage;
    var tipoNumeracion = "folios";
    var pagesSliderValues = [];
    var stepValues;


    function iniciar() {
        var html = '<button class="btn btn-default btn-block collapse in" id="btn-cargar-masivo">Cargue masivo</button>';

        $(html).insertAfter($(instancia).find("#btn-cargar-archivos"));

        $(instancia).find("#form-cargar-documento").on("hide.bs.collapse", function () {
            $(instancia).find("#btn-cargar-masivo").collapse("show");
        });
        $(instancia).find("#form-cargar-documento").on("show.bs.collapse", function () {
            $(instancia).find("#btn-cargar-masivo").collapse("hide");
        });

        $(instancia).find("#btn-cargar-masivo").on("click", function () {
            abrirModal();
        });

        buscarTiposDocumentos();
    }

    function buscarTiposDocumentos() {
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

                        tiposDocumentosDataSource = new DevExpress.data.DataSource({
                            store: response,
                            key: "id",
                            group: "grudoc_desc"
                        });
                    }
                }
            }, error: function (a) {
                alert("No fué posible obtener los tipos de documentos");
            }
        });
    }

    function abrirModal() {
        modal_id = Math.random().toString(36).substring(7);

        var titulo = "Cargue masivo de documentos";
        var html =
                '<div id="modalCargueMasivo-' + modal_id + '" style="width: 98%;" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">' +
                '   <div class="modal-dialog modal-lg" style="width: 98%;">' +
                '       <div class="modal-content">' +
                '           <div class="modal-header">' +
                '               <a class="close" data-dismiss="modal">×</a>' +
                '               <h4>' + titulo + '</h4>' +
                '           </div>' + // header
                '           <div class="modal-body ibox-content">' +
                '                   <div class="sk-spinner sk-spinner-double-bounce">' +
                '                       <div class="sk-double-bounce1"></div>' +
                '                       <div class="sk-double-bounce2"></div>' +
                '                   </div>' +
                '               <div id="form_cargue_masivo">' +
                '                   <form class="form" role="form" data-toggle="validator" id="form-cargar-documento">' +
                '                       <div class="form-group">' +
                '                           <label for="documento">Tipo de Numeración: </label>' +
                '                           <div id="tipo_numeracion" style="z-index:0;" class="btn-group btn-group-toggle" data-toggle="buttons">' +
                '                               <label class="btn btn-default active">' +
                '                                   <input type="radio" name="options" id="escaneo_folios" value="folios" autocomplete="off" checked> Folios' +
                '                               </label>' +
                '                               <label class="btn btn-default">' +
                '                                   <input type="radio" name="options" id="escaneo_paginas" value="paginas" autocomplete="off"> Páginas' +
                '                               </label>' +
                '                           </div>' +
                '			</div>' +
                '                       <div class="form-group">' +
                '                           <label for="documento">Archivo:</label>' +
                '                           <input id="documento" type="file" class="file" data-preview-file-type="image" accept="application/pdf" >' +
                '			</div>' +
                '                   </form>' +
                '               </div>' +
                '		<div class="row collapse" style=" " id="steps_container">' +
                '                   <div class="col-lg-10 col-lg-offset-1">' +
                '                       <h4 class="text-center m">' +
                //'                           title' +
                '                       </h4>' +
                '                       <div id="steps_carrousel"></div>' +
                /*'                       <div>' +
                 '                           <span id="btn_add" class="btn btn-default" >añadir</span>' +
                 '                       </div>' +*/
                '                   </div>' +
                '		</div>' +
                '           </div>' +
                '           <div class="modal-footer">' +
                '               <span id="btn-guardar" class="btn btn-success" >Guardar</span>' +
                '               <span id="btn-cerrar" class="btn btn-default" >Cerrar</span>' +
                '           </div>' + // footer
                '       </div>' + // content
                '   </div>' + // dialog
                '</div>'; // modalWindow
        $('body').append(html);

        var modal = $("#modalCargueMasivo-" + modal_id).modal();
        modal.modal('show');
        modal.on('hidden.bs.modal', function (e) {
            $(this).remove();
        });
        modal.find("#btn-cerrar").on('click', function () {
            modal.modal('hide');
        });

        modal.find("#tipo_numeracion.btn-group-toggle input:radio").on('change', function () {
            tipoNumeracion = $(this).val();
            calculatePagesSliderValues();
        });

        var fileInput = modal.find("#form-cargar-documento").find("#documento").fileinput({
            language: 'es',
            uploadUrl: 'SplitPDFFileUpload',
            showUpload: false,
            browseOnZoneClick: true,
            layoutTemplates: {actionUpload: ''},
            showPreview: false,
            showUploadedThumbs: false,
            showClose: false,
            allowedFileExtensions: ['pdf'],
            allowedPreviewTypes: [],
            uploadExtraData: function () {  // callback example
                var steps = [];
                for (var i = 0; i < stepValues.length; i++) {
                    steps.push({
                        from: stepValues[i].from,
                        to: stepValues[i].to,
                        selected_tidoc_id: stepValues[i].selected_tidoc_id,
                        descripcion: stepValues[i].descripcion
                    });
                }
                var out = {
                    steps: JSON.stringify(steps),
                    identificador: identificador
                };
                return out;
            }
        });

        modal.find("#form-cargar-documento").find("#documento").on('change', function () {

            modal.find('#steps_carrousel').slick('unslick');
            modal.find('#steps_carrousel').empty();


            modal.find('.modal-body.ibox-content').addClass('sk-loading');

            // Send the object url of the pdf
            readPDF(URL.createObjectURL(modal.find("#form-cargar-documento").find("#documento").get(0).files[0]), function () {
                modal.find('.modal-body.ibox-content').removeClass('sk-loading');
                modal.find('#steps_carrousel').slick({
                    dots: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    adaptiveHeight: true,
                    draggable: false,
                    swipe: false
                });

                modal.find("#steps_container").collapse('show');
                addStep(modal, 1, 0);
                modal.find('#steps_carrousel').slick('refresh');
            });
        });

        //reset values
        modal.find("#form-cargar-documento").find("#documento").on('fileclear', function () {
            modal.find('#steps_carrousel').slick('unslick');
            modal.find('#steps_carrousel').empty();
            stepValues = [];
            pdf_loaded_doc = null;
            pdfTotalPages = null;
            calculatePagesSliderValues();
        });


        modal.find('#steps_carrousel').slick();
        modal.find('#steps_carrousel').slick('slickAdd', '<div></div>');
        modal.find('#steps_carrousel').slick('slickAdd', '<div></div>');

        modal.find("#btn-guardar").on('click', function () {
            saveFiles(fileInput);
        });
    }

    function readPDF(pdf_url, callback) {
        PDFJS.getDocument({url: pdf_url}).then(function (pdf_doc) {
            stepValues = [];
            pdf_loaded_doc = pdf_doc;
            pdfTotalPages = pdf_loaded_doc.numPages;
            calculatePagesSliderValues();
            callback.call(pdf_loaded_doc, pdfTotalPages);
        }).catch(function (error) {
            // If error re-show the upload button
            /*$("#pdf-loader").hide();
             $("#upload-button").show();
             */
            callback.call();
            alert(error.message);
        });
    }

    function calculatePagesSliderValues() {
        pagesSliderValues = [];
        if (pdfTotalPages > 0) {
            switch (tipoNumeracion) {
                case 'folios':
                    for (var i = 1; i <= pdfTotalPages; i++) {
                        if (i % 2 === 0) {
                            pagesSliderValues.push(((i / 2)) + " b");
                        } else {
                            pagesSliderValues.push(((i + 1) / 2));
                        }
                    }
                    break;
                case 'paginas':
                    for (var i = 1; i <= pdfTotalPages; i++) {
                        pagesSliderValues.push(i);
                    }
                    break;
            }
        }
    }

    function addStep(container, start, stepNumber) {
        var lastSlider = "from";

        var html =
                '<div class="col-md-6" id="container_step_' + stepNumber + '">' +
                '   <div class="contact-box center-version">' +
                (stepNumber > 0 ?
                        '   <div class="ibox-title ibox-tools">' +
                        '       <div class="pull-right">' +
                        '           <a class="btn btn-white btn-bitbucket" title="Eliminar" id="btn_eliminar_' + stepNumber + '">' +
                        '               <i class="fa fa-trash"></i>' +
                        '           </a>' +
                        '       </div>' +
                        '   </div>'
                        : ''
                        ) +
                '       <div class="row text-center ">' +
                '           <div id="container-canvas_pre_' + stepNumber + '" class="canvas-pdf-preview pre col-md-4">' +
                '               <h4>Página anterior</h4>' +
                '               <canvas id="pdf-canvas_pre_' + stepNumber + '" height="250" class=""> </canvas>' +
                '           </div>' +
                '           <div id="container-canvas_' + stepNumber + '" class="canvas-pdf-preview col-md-4">' +
                '               <canvas id="pdf-canvas_' + stepNumber + '" height="300" > </canvas>' +
                '           </div>' +
                '           <div id="container-canvas_next_' + stepNumber + '" class="canvas-pdf-preview next col-md-4">' +
                '               <h4>Página Siguiente</h4>' +
                '               <canvas id="pdf-canvas_next_' + stepNumber + '" height="250" class=""> </canvas>' +
                '           </div>' +
                '       </div>' +
                '       <div class="clearfix"></div>' +
                '   ' +
                '       <div class="contact-box-footer">' +
                '           <form role="form" class="form-horizontal">' +
                '               <div class="form-group">' +
                '                   <label for="tidoc_id_' + stepNumber + '" class="col-lg-2 control-label">Tipo de documento</label>' +
                '                   <div class="col-lg-10">' +
                '                       <div id="tidoc_id_' + stepNumber + '"></div>' +
                '                   </div>' +
                '               </div>' +
                '               <div class="form-group">' +
                '                   <label class="col-lg-2 control-label">Folios <small>(desde - hasta)</small></label>' +
                '                   <div class="col-lg-10">' +
                '                       <div id="slider_folios_' + stepNumber + '"></div>' +
                '                   </div>' +
                '               </div>' +
                /*'               <div class="form-group">' +
                 '                   <label class="col-lg-2 control-label">Opciones</label>' +
                 '                   <div class="col-lg-10">' +
                 '                       <label class=""> <input id="chk_doble_cara_' + stepNumber + '" type="checkbox" value=""> <i></i> Doble cara </label>' +
                 '                   </div>' +
                 '               </div>' +*/
                '               <div class="form-group">' +
                '                   <label class="col-lg-2 control-label">Descripción</label>' +
                '                   <div class="col-lg-10 text-left">' +
                '                       <input type="text" class="form-control" id="doc_descripcion_' + stepNumber + '" required value="" >' +
                '                   </div>' +
                '               </div>' +
                '               <div class="form-group">' +
                '                   <a class="btn btn-primary btn-circle btn-lg disabled" id="btn_adicionar_' + stepNumber + '"><i class="fa fa-plus"></i></a>' +
                '               </div>' +
                '               <div class="crearfix"></div>' +
                '           </form>' +
                '       <div>' +
                '   </div>' +
                '</div>';

        container.find('#steps_carrousel').slick('slickAdd', html);


        stepValues.push({
            step: stepNumber,
            container: container.find('#container_step_' + stepNumber),
            from: pagesSliderValues.indexOf(start) + 1,
            to: pagesSliderValues.length
        });

        //add a new step
        container.find('#btn_adicionar_' + stepNumber).on('click', function () {
            var descripcion = container.find('#doc_descripcion_' + stepNumber).val();
            stepValues[stepNumber].descripcion = descripcion;
            
            var validator = $(tidoc_id_validator).dxValidator("instance").validate();
            if (validator.isValid) {
                var value = container.find('#slider_folios_' + stepNumber).prop("value").split(";");
                if (parseInt(value[1]) !== pdfTotalPages) {

                    container.find('#container_step_' + stepNumber).addClass('disabled-div');
                    addStep(container, parseInt(value[1]) + 1, stepNumber + 1);
                }
            }
        });

        //move to next image
        container.find('#container_step_' + stepNumber).find('.canvas-pdf-preview.next').on('click', function () {
            var slider = container.find('#slider_folios_' + stepNumber).data("ionRangeSlider");
            var update = {};
            if (lastSlider === "from") {
                update = {from: pdfCurrentPage};
            } else {
                update = {to: pdfCurrentPage};
            }
            slider.update(update);

        });

        //move to previous image
        container.find('#container_step_' + stepNumber).find('.canvas-pdf-preview.pre').on('click', function () {
            var slider = container.find('#slider_folios_' + stepNumber).data("ionRangeSlider");
            var update = {};
            if (lastSlider === "from") {
                update = {from: pdfCurrentPage - 2};
            } else {
                update = {to: pdfCurrentPage - 2};
            }
            slider.update(update);
        });

        //start file-type selector
        var tidoc_id_validator = container.find('#tidoc_id_' + stepNumber).dxSelectBox({
            dataSource: tiposDocumentosDataSource,
            valueExpr: "tidoc_id",
            placeholder: "Seleccione...",
            searchEnabled: true,
            grouped: true,
            displayExpr: "tidocdesc",
            onContentReady: function (e) {

            },
            onSelectionChanged: function (e) {
                if (e.selectedItem) {
                    selected_tidoc_id = e.selectedItem.tidoc_id;
                } else {
                    selected_tidoc_id = null;
                }

                stepValues[stepNumber].selected_tidoc_id = selected_tidoc_id;
            }
        }).dxValidator({
            validationRules: [{
                    type: "required",
                    message: "Debe seleccionar el tipo de documento"
                }]
        });

        //start page range selector
        container.find('#slider_folios_' + stepNumber).ionRangeSlider({
            from_min: pagesSliderValues.indexOf(start),
            //from_max: start,
            from_value: pagesSliderValues.indexOf(start),
            type: 'double',
            step: 1,
            grid: true,
            keyboard: true,
            keyboard_step: 1,
            values: pagesSliderValues,
            onStart: function (data) {
                $(data.slider).find('.irs-slider.from').addClass('type_last');
                $(data.slider).find('.irs-slider.to').removeClass('type_last');
            },
            onFinish: function (data) {
                var page;
                if ($(data.slider).find('.irs-slider.from').hasClass('type_last')) {
                    lastSlider = "from";
                    page = data.from;
                } else {
                    lastSlider = "to";
                    page = data.to;
                }
                showPDFPage(page + 1, container, stepNumber);

                var nextStep = true;
                if (tipoNumeracion === "folios") {
                    if (typeof (data.to_value) === "string") {
                        nextStep = (data.to + 1) < pdfTotalPages;
                    } else {
                        nextStep = (data.to + 2) < pdfTotalPages;
                    }
                } else {
                    nextStep = (data.to + 1) < pdfTotalPages;
                }
                container.find('#btn_adicionar_' + stepNumber).toggleClass('disabled', !nextStep);

                $("#modalCargueMasivo-" + modal_id).find('#steps_carrousel').slick('refresh');

                stepValues[stepNumber].from = data.from + 1;
                stepValues[stepNumber].to = data.to + 1;
            },
            onUpdate: function (data) {
                var page;
                if (lastSlider === "from") {
                    $(data.slider).find('.irs-slider.to').removeClass('type_last');
                    $(data.slider).find('.irs-slider.from').addClass('type_last');
                    page = data.from;
                } else {
                    $(data.slider).find('.irs-slider.from').removeClass('type_last');
                    $(data.slider).find('.irs-slider.to').addClass('type_last');
                    page = data.to;
                }
                showPDFPage(page + 1, container, stepNumber);

                //can add more steps
                var nextStep = true;
                if (tipoNumeracion === "folios") {
                    if (typeof (data.to_value) === "string") {
                        nextStep = (data.to + 1) < pdfTotalPages;
                    } else {
                        nextStep = (data.to + 2) < pdfTotalPages;
                    }
                } else {
                    nextStep = (data.to + 1) < pdfTotalPages;
                }
                container.find('#btn_adicionar_' + stepNumber).toggleClass('disabled', !nextStep);

                //refresh slider size
                $("#modalCargueMasivo-" + modal_id).find('#steps_carrousel').slick('refresh');

                stepValues[stepNumber].from = data.from + 1;
                stepValues[stepNumber].to = data.to + 1;
            }
        });

        container.find('#btn_eliminar_' + stepNumber).on('click', function () {
            removeStep(container, stepNumber);
        });

        //go to new step
        container.find('#steps_carrousel').slick('slickGoTo', stepNumber);

        //shows first page on the range
        showPDFPage(pagesSliderValues.indexOf(start) + 1, container, stepNumber);

        setTimeout(function () {
            $("#modalCargueMasivo-" + modal_id).find('#steps_carrousel').slick('refresh');
        }, 300);
    }

    function showPDFPage(page_no, container, stepNumber) {
        var canvas = container.find("#pdf-canvas_" + stepNumber).get(0);
        pdfCurrentPage = page_no;

        drawPDFPage(canvas, page_no, 0);

        var canvas_pre = container.find("#pdf-canvas_pre_" + stepNumber).get(0);
        if (page_no > 1) {
            container.find("#pdf-canvas_pre_" + stepNumber).show();
            drawPDFPage(canvas_pre, page_no - 1, 0.7);
        } else {
            var canvas_context_pre = canvas_pre.getContext('2d');
            container.find("#pdf-canvas_pre_" + stepNumber).hide();
            canvas_context_pre.clearRect(0, 0, canvas_pre.width, canvas_pre.height);
        }

        var canvas_next = container.find("#pdf-canvas_next_" + stepNumber).get(0);
        if (page_no < pdfTotalPages) {
            container.find("#pdf-canvas_next_" + stepNumber).show();
            drawPDFPage(canvas_next, page_no + 1, 0.7);
        } else {
            var canvas_context_next = canvas_next.getContext('2d');
            container.find("#pdf-canvas_next_" + stepNumber).hide();
            canvas_context_next.clearRect(0, 0, canvas_next.width, canvas_next.height);
        }

    }

    function drawPDFPage(canvas, page, alpha) {
        var canvas_context = canvas.getContext('2d');
        pdf_loaded_doc.getPage(page).then(function (page) {

            var vprt = page.getViewport(1);
            var scale_required;
            var viewport;

            if (vprt.width > vprt.height) {
                var maxWidth = $(canvas).parent().width() - 35;
                scale_required = maxWidth / vprt.width;

                viewport = page.getViewport(scale_required);
                canvas.width = maxWidth;

            } else {
                scale_required = canvas.height / vprt.height;
                viewport = page.getViewport(scale_required);
                canvas.width = viewport.width;
            }

            var renderContext = {
                canvasContext: canvas_context,
                viewport: viewport
            };
            page.render(renderContext).then(function () {
                canvas_context.globalAlpha = alpha;
                canvas_context.fillStyle = "#FEFEFE";
                canvas_context.fillRect(0, 0, canvas.width, canvas.height);
                canvas_context.globalAlpha = 1;
            });
        });

    }

    function removeStep(container, stepNumber) {
        container.find('#container_step_' + (stepNumber - 1)).removeClass('disabled-div');
        container.find('#steps_carrousel').slick('slickGoTo', stepNumber - 1);
        container.find('#steps_carrousel').slick('slickRemove', stepNumber);
        stepValues.splice(stepNumber, 1);
    }

    function saveFiles(fileInput) {
        /*
         fileInput.fileinput().uploadExtra = {
         steps: stepValues
         };  */

        fileInput.fileinput('upload');
    }

    iniciar();
});
