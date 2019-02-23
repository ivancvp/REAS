function verFichaSocial(identificador) {
    var contenido = '';
    $datos = {
        op: 'tipo_ficha_impresion',
        identificador: identificador
    };
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            var version = response[0].version_ficha;
            if (version === 6) {
                contenido = '<iframe style="width: 100%;height: 800px;" id="social_frame" src="caracterizacion_form.html?identificador=' + identificador + '&ref=' + usuario_identificador + '&apro=' + apro_ficha + '"></iframe>';
            } else if (version === 7) {
                contenido = '<div id="ficha_v7"></div>';
            }
        },
        error: function () {
            contenido = '<div id="ficha_v7"> Hubo un error al cargar la información</div>';
        }
    });
    return contenido;

}

function aprobacionFichaSocialForm(identificador) {
//    formulario = 'try';
//    $.get("form_aprobacion_ficha.html", function (data) {
//        formulario = data;
//        return formulario;
//    });
    formulario = "<div id='form_apro_fichsoc'>  <h1>Aprobación de Ficha Social</h1><p>Si considera neceario realize un comentario adicional a la ficha social,</p> <hr><div class='form-group'>                <label>Observación Final</label>                <textarea class='form-control' id='coment_final'></textarea>            </div>            <hr>            <div class='row'>                <div class='col-lg-4'>                </div>                <div class='col-lg-4'>                </div>                <div class='col-lg-4'>                    <button class='btn btn-success' id='aprobar_ficha_social_btn'>Aprobar</button>                </div>            </div>        </div> ";
    return formulario;
}
function aprobacionFichaSocial(identificador, usuario) {
    $datos = {
        op: 'aprobar_ficha',
        identificador: identificador,
        usr: usuario,
        observaciones: $('#coment_final').val()
    };
    $.ajax({
        type: "GET",
        url: "GestionDML",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0)
            {
                alertify.success(' aprobó la ficha');
                window.top.location.reload();
            }
        },
        error: function (error) {
            $data = {
                op: 'notificacion_aprobacion_ficha_social',
                identificador: identificador,
                usr: usuario
            };
            $.ajax({
                type: "POST",
                url: "GestionDML",
                data: $data,
                dataType: "json",
                success: function (response) {

                }
            });
            alertify.success('se aprobó la ficha');
            window.top.location.reload();
        }
    });
//    enviarEmailNotificacion();

}

function notificacionRevision() {
    $datos = {
        op: 'revision_ficha',
        identificador: $('#identificador').val(),
        usr: usr_ref
    };
    $.ajax({
        type: "GET",
        url: "GestionDML",
        data: $datos,
        dataType: "json",
        success: function (response) {
            alert('se envio la ficha para aprobación');
            window.top.location.reload();

        },
        error: function (response) {
            alertify.success('se envio la ficha para aprobación');
            window.top.location.reload();
        }
    });
}

function notificacionAprobacion() {
    $datos = {
        op: 'aprobar_ficha',
        identificador: $('#identificador').val(),
        usr: usr_ref,
        observaciones: $('#observaciones_revision').val()
    };
    $.ajax({
        type: "GET",
        url: "GestionDML",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0)
            {
                alertify.success('se aprobó la ficha');
                window.top.location.reload();
            }
        }
    });
}

function notificacionDevolucion(id_proceso, observaciones) {
    $datos = {
        op: 'devolver_ficha_notificacion',
        id_proceso: id_proceso,
        usr: typeof usuario_identificador !== 'undefined' ? usuario_identificador : usr_ref,
        observaciones: observaciones
    };
    $.ajax({
        type: "GET",
        url: "GestionDML",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

        }
    });
}

function getCuerpoEmail(tipo) {
    switch (tipo) {
        case 1:
            return cuerpo =
                    '<html>' +
                    '<head>' +
                    '<meta charset="UTF-8">' +
                    '</head>' +
                    '<body>' +
                    '<h1 style="color:#20A1EB">Notificación Nueva Sistema GIS REAS</h1>' +
                    '<br>' +
                    '<p><strong>Mensaje enviado por:</strong> ' + nombre + '</p>' +
                    msg +
                    '<p><strong>Asunto: </strong> ' + asunto + ' </p>' +
                    '<p><strong>Ingreso al sistema SIG REAS:</strong> <a href="http://sig-reas/Reas/">Sistema SIG REAS</a></p>' +
                    '<p style="color:#20A1EB"><strong>Id proceso: </strong> ' + idProceso + ' </p>' +
                    '<br>' +
                    '<br>' +
                    '<img src="https://docs.google.com/uc?id=1no91ERErYBuog7taHyedNaba1toDIYqP" alt="Logo CVP" >' +
                    '<p>Equipo GIS REAS</p>' +
                    '<p>Caja de la Vivienda Popular</p>' +
                    '<p style="color:#04BC76">Antes de imprimir este mensaje, compruebe que es necesario hacerlo. Una tonelada de papel implica la tala de 15 árboles y el consumo de 250.000 litros de agua. El medio ambiente es compromiso de TODOS.</p>' +
                    '</body>' +
                    '</html>';
            break;
        case 2:
            return cuerpo =
                    '<html>' +
                    '<head>' +
                    '<meta charset="UTF-8">' +
                    '</head>' +
                    '<body>' +
                    '<h1 style="color:#20A1EB">Notificación Nueva Sistema GIS REAS</h1>' +
                    '<br>' +
                    '<p><strong>Mensaje enviado por:</strong> ' + nombre + '</p>' +
                    msg +
                    '<p><strong>Asunto: </strong> ' + asunto + ' </p>' +
                    '<p><strong>Ingreso al sistema SIG REAS:</strong> <a href="http://sig-reas/Reas/">Sistema SIG REAS</a></p>' +
                    '<p style="color:#20A1EB"><strong>Id proceso: </strong> ' + idProceso + ' </p>' +
                    '<br>' +
                    '<br>' +
                    '<img src="https://docs.google.com/uc?id=1no91ERErYBuog7taHyedNaba1toDIYqP" alt="Logo CVP" >' +
                    '<p>Equipo GIS REAS</p>' +
                    '<p>Caja de la Vivienda Popular</p>' +
                    '<p style="color:#04BC76">Antes de imprimir este mensaje, compruebe que es necesario hacerlo. Una tonelada de papel implica la tala de 15 árboles y el consumo de 250.000 litros de agua. El medio ambiente es compromiso de TODOS.</p>' +
                    '</body>' +
                    '</html>';
            break;
        case 3:
            return cuerpo = '<html>' +
                    '<head>' +
                    '<meta charset="UTF-8">' +
                    '</head>' +
                    '<body>' +
                    '<h1 style="color:#20A1EB">Notificación Nueva Sistema GIS REAS</h1>' +
                    '<br>' +
                    '<p><strong>Mensaje enviado por:</strong> ' + nombre + '</p>' +
                    msg +
                    '<p><strong>Asunto: </strong> ' + asunto + ' </p>' +
                    '<p><strong>Ingreso al sistema SIG REAS:</strong> <a href="http://sig-reas/Reas/">Sistema SIG REAS</a></p>' +
                    '<p style="color:#20A1EB"><strong>Id proceso: </strong> ' + idProceso + ' </p>' +
                    '<br>' +
                    '<br>' +
                    '<img src="https://docs.google.com/uc?id=1no91ERErYBuog7taHyedNaba1toDIYqP" alt="Logo CVP" >' +
                    '<p>Equipo GIS REAS</p>' +
                    '<p>Caja de la Vivienda Popular</p>' +
                    '<p style="color:#04BC76">Antes de imprimir este mensaje, compruebe que es necesario hacerlo. Una tonelada de papel implica la tala de 15 árboles y el consumo de 250.000 litros de agua. El medio ambiente es compromiso de TODOS.</p>' +
                    '</body>' +
                    '</html>';
            break;

    }
}

function enviarEmailNotificacion(asunto, contenido, correos) {
    var datos = {
        mensaje: contenido,
        asunto: asunto,
        correos: correos
    };
    $.ajax({
        type: "POST",
        url: "Correos",
        dataType: "json",
        data: datos,
        complete: function (response) {
            alertify.success('correo enviado');
        }

    });
}
function obtenerDatosCoreeo(id) {
    var datos = {
        mensaje: contenido,
        asunto: asunto,
        correos: correos
    };
    $.ajax({
        type: "POST",
        url: "Correos",
        dataType: "json",
        data: datos,
        complete: function (response) {
            alertify.success('correo enviado');
        }

    });
}