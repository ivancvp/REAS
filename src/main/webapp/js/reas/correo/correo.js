/* global alertify */

function correo(IdUserFrom, IdUserTo, asunto, msg, idProceso) {

    var nombre = "";
    var correo = "";

    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "get_datos_correo",
            from: IdUserFrom,
            to: IdUserTo
        },
        dataType: "json",
        async: false,
        success: function (response) {
            var data = response[0];
            nombre = data["nombre"];
            correo = (data["correo"] ? data["correo"] : 'icarrillod@cajaviviendapopular.gov.co');

            var contenido =
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
                    '<p style="color:#CB4335">Este correo es informativo, favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes</p>' +
                    '<p style="color:#04BC76">Antes de imprimir este mensaje, compruebe que es necesario hacerlo. Una tonelada de papel implica la tala de 15 árboles y el consumo de 250.000 litros de agua. El medio ambiente es compromiso de TODOS.</p>' +
                    '</body>' +
                    '</html>';


            var datos = {
                mensaje: contenido,
                asunto: asunto,
                correos: correo
            };
            $.ajax({
                type: "POST",
                url: "Correos",
                dataType: "json",
                data: datos,
                complete: function (response) {
                    alertify.success("Correo Enviado");
                }

            });

        }

    });

}


function correo_masivo(identificador, UserFrom, UsersTo, asunto, msg, commentId) {

    var link = 'http://sig-reas/Reas/profile.jsp?identificador=' + identificador + (commentId ? '#comment-' + commentId : '');

    for (var i in UsersTo) {

        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: "get_datos_correo_masivo",
                UserFrom: UserFrom,
                UsersTo: UsersTo[i]
            },
            dataType: "json",
            async: false,
            success: function (response) {

                var nombre = response[0]["nombre"];
                var correo = (response[0]["correo"] ? response[0]["correo"] : 'icarrillod@cajaviviendapopular.gov.co');
                var nombre1 = response[0]["nombre1"];


                var contenido =
                        '<html>' +
                        '<head>' +
                        '<meta charset="UTF-8">' +
                        '</head>' +
                        '<body>' +
                        '<h3 style="color:#20A1EB">Nuevo comentario en el sistema GIS REAS para el identificador <a href=' + link + '>' + identificador + '</a></h3>' +
                        '<br>' +
                        '<p><strong>Asunto: </strong> ' + asunto + ' </p>' +
                        '<p><strong>Mensaje enviado por:</strong> ' + nombre + '</p>' +
                        '<p><strong>Mesaje:</strong> ' + msg + '</p>' +
                        '<p><strong>Ver en el sistema -> :</strong> <a href=' + link + '>Click aquí</a></p>' +
                        '<br>' +
                        '<br>' +
                        '<img src="https://docs.google.com/uc?id=1no91ERErYBuog7taHyedNaba1toDIYqP" alt="Logo CVP" >' +
                        '<p>Equipo GIS REAS</p>' +
                        '<p>Caja de la Vivienda Popular</p>' +
                        '<p style="color:#CB4335">Este correo es informativo, favor no responder a esta dirección de correo, ya que no se encuentra habilitada para recibir mensajes</p>' +
                        '<p style="color:#04BC76">Antes de imprimir este mensaje, compruebe que es necesario hacerlo. Una tonelada de papel implica la tala de 15 árboles y el consumo de 250.000 litros de agua. El medio ambiente es compromiso de TODOS.</p>' +
                        '</body>' +
                        '</html>';


                var datos = {
                    mensaje: contenido,
                    asunto: asunto,
                    correos: correo
                };

                $.ajax({
                    type: "POST",
                    url: "Correos",
                    dataType: "json",
                    data: datos,
                    complete: function (response) {
                        alertify.success(nombre1 + ' ha sido notificado(a) por correo.');
                    }

                });
            }

        });
    }







}

