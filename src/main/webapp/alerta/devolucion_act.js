
function regreso(id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo) {

    var dat1 = '';
    var dat2 = '';
    var nombre_creador = '';
    if (modo === 2 || modo === 3) {
        dat1 = consulta(usuario_identificador);
        nombre_creador = dat1[0]["usuario_nombre"];
        dat2 = consulta(asignado_a);
    } else {
        dat1 = consulta(asignado_a);
        nombre_creador = dat1[0]["usuario_nombre"];
        dat2 = consulta(usuario_identificador);
    }

    var elaboro = dat2[0]["usuario_nombre"] + " - " + dat2[0]["usuario_contrato"];

    function consulta(id) {
        $datos = {op: 'get_datos_regreso', id: id};
        $.ajax({
            type: "GET",
            url: "GestionConsultas",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {
                resultado = response;
            },
            error: function (response) {

            }
        });
        return resultado;
    }

    var contenido =
            '<h1>Devolución de Solicitud</h1>' +
            '<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>' +
            '<hr /> ' +
            '<p>Solicitud devuelta a:</p>' +
            '<div class="form-group">' +
            '<input type="text" class="form-control" id="nom_crea" value="' + String(nombre_creador) + '" disabled>' +
            '</div>' +
            '<div class="form-group ">' +
            '<label >Fecha de devolución:</label>' +
            '<input type="date" class="form-control" id="fech_reg" disabled>' +
            '</div>' +
            '<div class="form-group ">' +
            '<label >Observaciones:</label>' +
            '</div>' +
            '<div class="form-group">' +
            ' <textarea class="form-control upd_rea" rows="5" id="obs_regreso" >' + observacion + '</textarea>' +
            '</div> ' +
            '<div class="row">' +
            '<div class="form-group col-sm-6">' +
            '<label >Elaboró</label>' +
            '<input type="text" class="form-control" id="elaboro_reg" value="' + elaboro + '" disabled>' +
            '</div>' +
            '</div>' +
            '<hr />' +
            '<button class="btn btn-success rem_btn" id="regreso_sol">Enviar</button>' +
            '<br>' +
            '<br>' +
            '<br>' +
            '<br>';

    var contenido =
            '<h1>Devolución de Solicitud</h1>' +
            '<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>' +
            '<hr /> ' +
            '<p>Solicitud devuelta a:</p>' +
            '<div class="form-group">' +
            '<input type="text" class="form-control" id="nom_crea" value="' + String(nombre_creador) + '" disabled>' +
            '</div>' +
            '<div class="form-group ">' +
            '<label >Fecha de devolución:</label>' +
            '<input type="date" class="form-control" id="fech_reg" disabled>' +
            '</div>' +
            '<div class="form-group ">' +
            '<label >Observaciones:</label>' +
            '</div>' +
            '<div class="form-group">' +
            ' <textarea class="form-control upd_rea" rows="5" id="obs_regreso" >' + observacion + '</textarea>' +
            '</div> ' +
            '<div class="row">' +
            '<div class="form-group col-sm-6">' +
            '<label >Elaboró</label>' +
            '<input type="text" class="form-control" value="' + elaboro + '" disabled>' +
            '</div>' +
            '</div>' +
            '<hr />' +
            '<button class="btn btn-success rem_btn" id="regreso_sol">Enviar</button>' +
            '<br>' +
            '<br>' +
            '<br>' +
            '<br>';

    return contenido;
}

function logica_regreso(datos, modo) {

    $("input:disabled").css({"backgroundColor": "white"});
    if (modo === 2 || modo === 3) {
        $('.upd_rea').attr('disabled', 'disabled');
        $(".upd_rea").css({"backgroundColor": "white"});
        $('.rem_btn').remove();
    }
    document.getElementById("fech_reg").valueAsDate = new Date();


    document.getElementById("fech_reg").valueAsDate = new Date();
    $('#regreso_sol').click(function () {
        var tipo_actividad = datos["id_tipo_actividad"];
        var actividad_padre = datos["actividad_padre"];
        var id_actividad = datos["id_actividad"];
        var tipo_proceso = datos["id_proceso"];
        var asignado_a = datos["creado_por"];
        var identificador = datos["identificador"];
        var creador = usuario_identificador;
        var observacion_final = '';

        if (tipo_actividad === 5 && actividad_padre === 1 && creador !== datos["creado_por"]) {
            actividad_padre = 2;
        }
        if (tipo_actividad === 5 && actividad_padre === 17) {
            notificacionDevolucion(tipo_proceso, $('#obs_regreso').val());
        }

        devolucion_tarea(id_actividad, tipo_proceso, tipo_actividad, actividad_padre, creador, asignado_a, $('#obs_regreso').val(), observacion_final);

        var msg = '<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> ' + identificador + ' </strong> </p><p><strong>Observaciones: </strong>' + $('#obs_regreso').val() + '</p>';

        correo(creador, asignado_a, "Devolución de Tarea por: " + $('#elaboro_reg').val(), msg, tipo_proceso);

        $("#not_update").remove();
        $.getScript("alerta/notificaciones.js", function () {
        });
        $('#modal_form').modal('toggle');
    });

}


