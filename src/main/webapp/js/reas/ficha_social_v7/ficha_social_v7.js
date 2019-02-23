/* global ficha_social_v7_options */

if (!$().alpaca) {
    $('<script>')
            .attr({
                'type': 'text/javascript'
                , 'src': 'js/vendors/alpaca/dist/lib/handlebars/handlebars.min.js'
            })
            .appendTo('head');
    $('<script>')
            .attr({
                'type': 'text/javascript'
                , 'src': 'js/vendors/alpaca/dist/alpaca/bootstrap/alpaca.min.js'
            })
            .appendTo('head');
    $('<link>')
            .attr({
                type: 'text/css',
                rel: 'stylesheet',
                href: 'js/vendors/alpaca/dist/alpaca/bootstrap/alpaca.min.css'
            })
            .appendTo('head');
}

$.reas('reas', {
    FichaSocial_V7: function (identificador) {
        var instancia = this;
        function iniciar() {

            var titulo = "Ficha Caracterización de la Población - V7";
            var modal_id = Math.random().toString(36).substring(7);
            var html =
                    '<div id="dynamicModal-' + modal_id + '" style="width: 98%;"  data-backdrop="static" data-keyboard="false" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">' +
                    '   <div class="modal-dialog modal-lg" style="width: 98%;">' +
                    '       <div class="modal-content">' +
                    '           <div class="modal-header">' +
                    //'               <a class="close" data-dismiss="modal">×</a>' +
                    '               <h4>' + titulo + '</h4>' +
                    '           </div>' + // header
                    '           <div class="modal-body">' +
                    '               <div id="form_ficha_social"></div>' +
                    /*'               <div id="exTab1" class="">	' +
                     '                   <ul class="nav nav-tabs">' +
                     '                       <li class="active"><a  href="#paso1" data-toggle="tab">Paso 1</a></li>' +
                     '                       <li class=""><a  href="#paso2" data-toggle="tab">Paso 2</a></li>' +
                     '                       <li class=""><a  href="#paso3" data-toggle="tab">Paso 3</a></li>' +
                     '                   </ul>' +
                     '                   <div class="tab-content clearfix">' +
                     '                       <div class="tab-pane active" id="paso1">' +
                     '                           <div id="form_ficha_social"></div>' +
                     '                       </div>' +
                     '                       <div class="tab-pane active" id="paso2">' +
                     '                       </div>' +
                     '                   </div">' +
                     '               </div>' +*/
                    '           </div>' +
                    '           <div class="modal-footer">' +
                    '               <span id="btn-cerrar" class="btn btn-default" >Cerrar</span>' +
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
            $("#dynamicModal-" + modal_id).find("#btn-cerrar").on('click', function () {
                $("#dynamicModal-" + modal_id).modal('hide');
            });

            buscarDatos(modal_id);
        }

        function buscarDatos(modal_id) {
            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: {
                    op: "ficha_social_v7_consulta_datos_almacenados",
                    identificador: identificador
                },
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response)
                    {
                        if (response.length > 0) {
                            iniciarFormulario(response[0], modal_id);
                        } else {
                            iniciarFormulario(null, modal_id);
                        }
                    }
                }, error: function (a) {
                    alert("No fué posible obtener los datos de la ficha");
                }
            });

        }

        function iniciarFormulario(datos, modal_id) {
            $("#dynamicModal-" + modal_id).find("#form_ficha_social").alpaca({
                "schemaSource": "./js/reas/ficha_social_v7/ficha_schema.json",
                "optionsSource": ficha_social_v7_options,
                "data": datos,
                "view": {
                    "locale": "es_ES",
                    "parent": "bootstrap-edit-horizontal",
                    "wizard": {
                        "title": "Welcome to the Wizard",
                        "description": "Please fill things in as you wish",
                        "bindings": {
                            "identificador": 1,
                            "numero_concepto": 1,
                            "fecha_concepto": 1,
                            "direccion_par": 1,
                            "manzana": 1,
                            "lote": 1,
                            "barrio": 1,
                            "localidad": 1,
                            "tipo_familia": 2,
                            "miembros": 2
                        },
                        "steps": [{
                                "title": "Información institucional",
                                "description": "e Identificación del Predio"
                            }, {
                                "title": "Identificación de la familia",
                                "description": "&nbsp;"
                            }, {
                                "title": "Preferences",
                                "description": "Customize your Profile"
                            }]
                    }
                }
            });
        }

        iniciar();
    }
});
