(function ($) {
    var unidad = 2;
    var valores = {};
    $.fn.Unidades = function (opciones) {
        var hijos = new Object();
        var num_unidades_posibles = new Object();
        var solicitudes = new Object();
        var cuerpo = '';
        var defaults = {
            id: "unidades",
            tittle: "Hello Modal",
            tipo: 1,
            closeHeader: true,
            closeButton: true,
            closeButtonName: "Close",
            functionButton: true,
            functionButtonName: "Do something",
            body: "<ul class='list-group'> </ul> ",
            callback: function () {

            },
            modalSettings: {
                class: "modal fade",
                id: "modalup"
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
                class: "modal-body"
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

        var settings = $.extend({}, defaults, opciones);
        valores = settings;
        var posicion = $(this).position();

        // Contenedores del modal(Modal Containers):
        var modal = $("<div />")
                .attr(settings.modalSettings)
                .css(settings.modalCSS);

        var dialog = $("<div />")
                .attr(settings.dialogSettings)
                .css(settings.dialogCSS)
                .appendTo(modal);
        var modalContainer = $("<div />")
                .attr(settings.containerSettings)
                .css(settings.containerCSS)
                .appendTo(dialog);

        var modalHeader = $("<div />")
                .attr(settings.headerSettings)
                .css(settings.headerCSS)
                .appendTo(modalContainer);

        var modalBody = $("<div />")
                .attr(settings.bodySettings)
                .css(settings.bodyCSS)
                .appendTo(modalContainer);
        var modalFooter = $("<div />")
                .attr(settings.footerSettings)
                .css(settings.footerCSS)
                .appendTo(modalContainer);

//      Elementos del modal(Modal elements)
//      
//      Elementos de la cabecera(Header Elements)
        if (settings.closeHeader) {
            var closeHeaderButton = $("<button />")
                    .attr(settings.closeHeaderSettings)
                    .appendTo(modalHeader);
        }
        var titleHeader = $("<h3 />")
                .text(settings.tittle)
                .appendTo(modalHeader);


//      Elementos del pie de pagina(footer elements)
        if (settings.closeButton) {
            var closeFooterButton = $("<button />")
                    .attr(settings.closeButtonSettings)
                    .text(settings.closeButtonName)
                    .appendTo(modalFooter);

        }
        var call = function () {
            settings.callback(this);
        };
        if (settings.functionButton) {
            var functionFooterButton = $("<button />")
                    .attr(settings.functionButtonSettings)
                    .text(settings.functionButtonName)
                    .click(call)
                    .appendTo(modalFooter);
        }



        function traertHijos() {

            $.ajax({
                type: "GET",
                url: "GestionConsultas",
                data: {
                    op: "consulta_unidades_hijos",
                    identificador: settings.id
                },
                dataType: "json",
                async: false,
                success: function (response) {
                    hijos = response;

                }
            });

        }

        function traeNumUnidades() {

            $.ajax({
                type: "GET",
                url: "GestionConsultas",
                data: {
                    op: "consulta_unidades_tabla",
                    identificador: settings.id
                },
                dataType: "json",
                async: false,
                success: function (response) {
                    num_unidades_posibles = response;
                }
            });

        }

        function traerSolicitudes() {

            $.ajax({
                type: "GET",
                url: "GestionConsultas",
                data: {
                    op: "consulta_solicitudes",
                    identificador: settings.id
                },
                dataType: "json",
                async: false,
                success: function (response) {
                    solicitudes = response;

                }
            });

        }
        function showSolicitud() {

        }
        traertHijos();
        traeNumUnidades();
        traerSolicitudes();
        var listaCuerpo = $("<ul/>")
                .attr({class: "list-group"});
        if (num_unidades_posibles[0].Num_Und_Habitacional > 1 && typeof (num_unidades_posibles[0].Num_Und_Habitacional) !== 'undefined') {
            for (var i = 0; i < num_unidades_posibles[0].Num_Und_Habitacional; i++) {
                var hijo = hijos[i];
                if (typeof (hijo) !== 'undefined') {
                    $("<li/>").attr({class: "list-group-item justify-content-between", id: (i + 2)}).append("<b>Unidad " + (i + 2) + ":</b>. Existe con el identificador <a href='" + location.protocol + '//' + location.host + "/Reas/profile.jsp?identificador=" + hijo.identificador + "'>" + hijo.identificador + "<a/>")
                            .appendTo(listaCuerpo);
                } else if ((i + 2) <= num_unidades_posibles[0].Num_Und_Habitacional) {
                    var num_solicitud = false;
                    if (solicitudes.length > 0) {
                        var num = 0;
                        $.each(solicitudes, function (index, solicitud) {
                            if (solicitud.unidad_habitacional === (i + 2)) {
                                num_solicitud = true;
                                num = index;
                            }
                        });
                        if (num_solicitud) {
                            var item = $("<li/>").attr({class: "list-group-item justify-content-between", id: (i + 2)})
                                    .click(showSolicitud).appendTo(listaCuerpo);
                            $("<a/>").text("Existe una solicitud para la unidad " + (i + 2) + " (haga click para verla)").appendTo(item);
                            $("<div/>").text("").appendTo(item);
                        } else {
                            var item = $("<li/>").attr({class: "list-group-item justify-content-between", id: (i + 2)})
                                    .click(solicitarUnidad)
                                    .appendTo(listaCuerpo);
                            $("<a/>").text("Unidad habitacional " + (i + 2)).appendTo(item);
                        }
                    } else {
                        var item = $("<li/>").attr({class: "list-group-item justify-content-between", id: (i + 2)})
                                .click(solicitarUnidad)
                                .appendTo(listaCuerpo);
                        $("<a/>").text("Unidad habitacional " + (i + 2)).appendTo(item);
                    }
                }
            }
        } else {
            if (num_unidades_posibles[0].Num_Und_Habitacional === 1 && typeof (num_unidades_posibles[0].Num_Und_Habitacional) !== 'undefined') {
                var item = $("<li/>").attr({class: "list-group-item justify-content-between", id: (2)})
                        .click(solicitarUnidad)
                        .appendTo(listaCuerpo);
                $("<a/>").text("Solicitud Unidad habitacional ").appendTo(item);
            }
            if ( typeof (num_unidades_posibles[0].Num_Und_Habitacional) === 'undefined') {
                var item = $("<li/>").attr({class: "list-group-item justify-content-between", id: 2})
                        .click(solicitarUnidad)
                        .appendTo(listaCuerpo);
                $("<a/>").text("Solicitud Unidad habitacional ").appendTo(item);
            }

        }

        $(listaCuerpo).appendTo(modalBody);
///        Elementos del cuerpo del modal (Body elements)
        $(this).parent('body').append(modal);
        $(modal).modal('show');


    };
    var guardarViabilidadTecnica = function () {
        var via_tecnica = $('#via_tecnica').val();
        var justi_tecnica = $('#justitecnica').val();
        $.ajax({type: "GET",
            url: "GestionDML",
//                url: "GestionConsultas",
            data: {
                op: "crear_solicitud_unidad_habitacional_tecnico",
                identificador: valores.id,
                via_tecnica: via_tecnica,
                justificacion: justi_tecnica,
                ref: usr_ref
            },
            dataType: "Text",
            success: function (response) {
                var res = eval('(' + response + ')');
                if (res.data.length > 0) {
                    if (res.data[0]['aprobacion_social'] && res.data[0]['aprobacion_tecnico'] && res.data[0]['aprobacion_juridica']) {
                        alert('El concepto tecnico, juridico y social son favorables, por tanto se creará el nuevo identificador');
                        crearUnidad(res.data[0]);
                    } else {
                        alert('Se creó su solicitud y se hará el proceso debido para la creación de esta unidad habitacional. Verá el resultado de su solicitud una vez se complete el proceso');
                        aprobacionJuridica(res.data[0]);
                        aprobacionSocial(res.data[0]);
                    }
                    $('.modal').modal('hide');
                }
            }
        });

    };
    var guardarViabilidadSocial = function () {
        console.log('entral al click');
        var via_social = $('#via_social').val();
        var justificacion_social = $('#justi_social').val();
        $.ajax({type: "GET",
            url: "GestionDML",
            data: {
                op: "crear_solicitud_unidad_habitacional_social",
                identificador: valores.id,
                via_social: via_social,
                justificacion: justificacion_social,
                unidad: unidad,
                ref: usr_ref

            },
            dataType: "text",
            success: function (response) {
                var res = eval('(' + response + ')');
                if (res.data.length > 0) {
                    alert('Se guardó correctamente la viabilidad, se notificó al respectivo lider técnico para que se siga el respectivo proceso');
                    $('.modal').modal('hide');
                }
            }, error: function () {

            }
        });

    };
    var guardarViabilidadJuridica = function () {

    };
    function solicitarUnidad() {
        var body = '';

        $.ajax({type: "GET",
            url: "GestionConsultas",
            data: {
                op: "info_solicitud",
                identificador: valores.id
            },
            dataType: "json",
            success: function (response) {

            }
        });
        if (user_tec) {
            var id = $(this).attr('id');

            $.get("form_viabilidad_tecnica.html", function (data) {
                body = data;
                var conf = {body: body, dialogCSS: {"width": "900px!important"}, id: 'mod_tecnico', tittle: ' Viabilidad Técnica ' + id + '  ', callback: guardarViabilidadTecnica, closeButtonName: "Cerrar", functionButtonName: 'Guardar', functionButton: true};
                $('body').modalup(conf);
            });

        }
        if (user_soc) {
            var id = $(this).attr('id');
            $.get("form_viabilidad_social.html", function (data) {
                body = data;
                var conf = {body: body, dialogCSS: {"width": "900px!important"}, id: 'mod_social', tittle: 'Viabilidad Social ' + id + '  ', callback: guardarViabilidadSocial, closeButtonName: "Cerrar", functionButtonName: 'Guardar', functionButton: true};
                $('body').modalup(conf);
            });
        }
        if (user_jur) {
            var id = $(this).attr('id');
            $.get("form_viabilidad_juridica.html", function (data) {
                body = data;
                var conf = {body: body, dialogCSS: {"width": "900px!important"}, id: 'mod_social', tittle: 'Viabilidad Juridica ' + id + '  ', callback: guardarViabilidadSocial, closeButtonName: "Cerrar", functionButtonName: 'Guardar', functionButton: true};
                $('body').modalup(conf);
            });
        }
    }
    ;

}(jQuery));