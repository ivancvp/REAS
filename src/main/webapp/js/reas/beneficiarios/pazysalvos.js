$('#etitulos').on('click', function () {
    var identificador = document.getElementById("identificador").innerHTML;
    var estudio_titulos;
    $('#consultas').empty();
    $.ajax({type: "GET",
        url: "GestionConsultas",
        data: {
            op: 'paz_salvos',
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {
            if (response)
            {

                if (response.length > 0) {
                    estudio_titulos = response[0];
                }

            }
        }
    });
});