
$(window).bind('load', function () {
    $datos = {
        op: 'info_pasivo_exigible',
        identificador: $('#identificador').text()
    };
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            var info = response[0];
            if (response.length > 0) {
                $('#container_detalles_beneficiario').prepend('<div class="alert alert-warning" role="alert">' +
                        '<h3> <i class="fas fa-exclamation-triangle"></i> Este identificador se encuentra con un proceso de pasivo exigible</h3> <br> Por favor remitir al beneficiario con el encargado de este pronceso. <br> El encargado para este proceso es:  <b>' +
                        info.profesional_reque + '</b><br>Area responsble: <b>' + info.area_respo +                      
                        '</div>');
            }
        },
        error: function () {
            contenido = '';
        }
    });
});