function abrirFormularioCaracoli(id) {
    
    if(user_soc){
        caracoli_generar_formulario(id);
        logica_caracoli_generar_formulario(id);
    }else{
         alertify.error("Su perfil no es de usuario social");
    }

}
function abrirFormularioFotos(id) {
    if(user_tec){
        caracoli_fotos(id);
        logica_caracoli_fotos(id);
    }else{
        alertify.error("Su perfil no es de usuario técnico");
    }

}

function buscar_caracoli(texto) {

    function contenido(identificador, nombre, cedula, direccion, telefono) {
        var contenido =
                '                     <div class="col-lg-4 consulta" >' +
                '                            <div class="contact-box" >' +
                '                                    <a class="caracoli editar_caracoli" >' +
                '                                            <div class="col-sm-4">' +
                '                                            <div class="text-center">                                           ' +
                '                                                            <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a0.jpg">' +
                '                                                            <div class="m-t-xs font-bold">' + identificador + '</div>' +
                '                                                            <div class="m-t-xs text-navy">Caracolí</div>' +
                '                                                    </div>' +
                '                                            </div>' +
                '                                            <div class="col-sm-8">' +
                '                                                    <h3><strong class="text-success">' + nombre + '</strong></h3>' +
                '                                                    <p><i class="fa fa-address-card-o">' + cedula + '</i> </p>' +
                '                                                    <p><i class="fa fa-map-marker"></i>' + direccion + '</p>' +
                '                                                    <address>                                            ' +
                '                                                            <abbr title="Teléfono"><i class="fa fa-phone"></i>: ' + telefono + '</abbr>' +
                '                                                    </address>' +
                '<a href="#" class="btn btn-sm btn-primary outline" onclick="abrirFormularioFotos(\'' + identificador + '\')"><i class="fas fa-camera"></i> Fotos</a>'+
                '<a  class="btn btn-sm btn-primary outline" onclick="abrirFormularioCaracoli(\'' + identificador + '\')"><i class="fas fa-file-alt"></i> Acta</a>'+
                '                                            </div>' +
                '                                            <div class="clearfix"></div>' +
                '                                    </a>' +
                '                            </div>' +
                '                        </div>';

        return contenido;


    }
    if (texto === "") {
        $('.consulta').remove();
    } else {
        $datos = {
            op: 'buscar_caracoli',
            texto: texto.toUpperCase()
        };

        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {

                if (response.length > 0) {
                    $('.consulta').remove();
                    for (var i = 0, l = response.length; i < l; i++) {
                        var data = response[i];

                        var identificador = (data["num_sdh"] ? data["num_sdh"] : '');
                        var nombre = (data["nombre"] ? data["nombre"] : '');
                        var cedula = (data["cedula"] ? data["cedula"] : '');
                        var direccion = (data["direccion"] ? data["direccion"] : '');
                        var telefono = (data["tel1"] ? data["tel1"] : '');

                        var gen_con = contenido(identificador, nombre, cedula, direccion, telefono);


                        $('#buscador').append(gen_con);
//
//                        $('#buscador').find('.editar_caracoli').on("click", function (event) {
//                            var id = $(this).attr('id');
//
//                        });

                    }


                } else {

                    var gen_con = '<div class="h4 text-center m-t-xs text-navy consulta">No se encontraron resultados</div>';

                    $('.consulta').remove();
                    $('#buscador').append(gen_con);


                }


            }, error: function (a) {

            }
        });
    }







}

 