
$('#fcaracterizacion').on('click', function () {
    var identificador = $("#identificador").text();
    var operacion = 'ficha_caracterizacion_hogar';
    var tabla = '';
    function getAge(date) {
        var now = new Date();
        var fecha = new Date(date);
        var age = now.getFullYear() - fecha.getFullYear();
        return age;
    }
    ;
    var Parentesco = ["Sin información", "Jefe de familia", "Esposo(a)/Compañero(a)", "Hijo(a)", "Hermano(a)", "Padre o Madre", "Abuelo(a)", "Nuera o Yerno", "Nieto(a)", "Suegro(a)", "Otro Pariente", "Otro no pariente"];
    $.ajax({type: "GET",
        url: "GestionConsultas",
        data: {
            op: 'ficha_caracterizacion_miembros',
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {
            if (response)
            {
                if (response.length > 0) {
                    var filas = "";
                    for (var i = 0; i < response.length; i++) {
                        var resultado = response[i];
                        filas = filas + "<div class='col-sm-6' ><div class='profile-image'><img src='img/a0.jpg' alt='profile'>	</div><div class='card' style='background-color: #fff;    margin-bottom: 1px; border: 1px solid rgba(0,0,0,.125); border-radius: .25rem;'> <div class='card-block'>   <h4 class='card-title'>"
                                + resultado["B03_Nombres"] + " " + resultado["B01_Primer_Apellido"] + " " + resultado["B02_Segundo_Apellido" ]
//                                + "</h4>   <p class='card-text'>Documento: " + resultado["B04_Identificacion"] + " <br> Nacimiento:" + resultado["B08_Fec_Nacimiento"] + "</p> <a href='#' data-toggle='popover' title='Popover Header' data-content='Some content inside the popover'>Más Informacion ></a></div></div> </div>";
                                + "</h4>   <p class='card-text'>Documento: " + resultado["B04_Identificacion"] + " <br> Nacimiento: " + resultado["B08_Fec_Nacimiento"] + " <br> Edad: " + getAge(resultado["B08_Fec_Nacimiento"]) + " <br> Parentesco: " + Parentesco[resultado["B05_Parentesco"]] + "</p> </div></div> </div>";
                    }

                    tabla = " <h2>Miembros</h2><table class='table table-hover'>" +
                            "<div class='row'>" +
                            filas + " </div>";
//                    console.log(tabla);
                } else {
                    tabla = '<p>No hay miembros registrados</p>';
                }
            }
        }
    });
    $.ajax({type: "GET",
        url: "GestionConsultas",
        data: {
            op: operacion,
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {
            if (response)
            {
                $('#consultas').empty();
                if (response.length > 0) {
                    var resultado = response[0];
                    var hogar = "<div class='panel panel-default '>  <div class='panel-heading'>Información del Hogar</div><div class='panel-body'>" +
                            "<ul class='list-group col-md-6'>" +
                            (resultado['Fec_Aplicacion'] ? " <li class='list-group-item'><strong>Fecha de Aplicación:</strong> " + resultado['Fec_Aplicacion'] + "</li>" : " ") +
                            (resultado['A01_Nombres_Jefe_Hogar'] ? " <li class='list-group-item'> <strong>Jefe de Hogar:</strong>  " + resultado['A01_Nombres_Jefe_Hogar'] + " " + (resultado['A01_Primer_Apellido_Jefe_Hogar'] ? resultado['A01_Primer_Apellido_Jefe_Hogar'] : '') + " " + (resultado['A01_Segundo_Apellido_Jefe_Hogar'] ? resultado['A01_Segundo_Apellido_Jefe_Hogar'] : '') + "</li>" : " ") +
                            (resultado['A02_Tipo_Familia'] ? " <li class='list-group-item'><strong>Tipo de Familia:</strong> " + resultado['A02_Tipo_Familia'] + "</li>" : " ") +
                            (resultado['A02_Tipo_Familia_Otro'] ? " <li class='list-group-item'> <strong>Otro Tipo de Familia:</strong>  " + resultado['A02_Tipo_Familia_Otro'] + "</li>" : " ") +
                            (resultado['A03_Origen_Familia'] ? " <li class='list-group-item'> <strong>Origen de Familia</strong>  " + resultado['A03_Origen_Familia'] + "</li>" : " ") +
                            (resultado['A03_Cod_Departamento_Origen_Familia'] ? " <li class='list-group-item'> <strong>Departamento Origen:</strong>  " + resultado['A03_Cod_Departamento_Origen_Familia'] + "</li>" : " ") +
                            (resultado['A03_Cod_Municipio_Origen_Familia'] ? " <li class='list-group-item'> <strong>Mubicipio de Origen:</strong>  " + resultado['A03_Cod_Municipio_Origen_Familia'] + "</li>" : " ") +
                            (resultado['A04_Ubicacion_Actual'] ? " <li class='list-group-item'> <strong>Ubicación Actual:</strong>  " + resultado['A04_Ubicacion_Actual'] + "</li>" : " ") +
                            (resultado['A04_Otra_Ubicacion_Actual'] ? " <li class='list-group-item'> <strong>Otra Ubicación Actual:</strong>  " + resultado['A04_Otra_Ubicacion_Actual'] + "</li>" : " ") +
                            (resultado['A05_Condicion_Habita_PAR'] ? " <li class='list-group-item'> <strong>Tipo Tenencia:</strong>  " + resultado['A05_Condicion_Habita_PAR'] + "</li>" : " ") +
                            (resultado['A06_Direccion_Residencia'] ? " <li class='list-group-item'> <strong>Dirección de residencia:</strong>  " + resultado['A06_Direccion_Residencia'] + "</li>" : " ") +
                            (resultado['A07_Num_Telefonos_Residencia'] ? " <li class='list-group-item'> <strong>Teléfono de residencia:</strong>  " + resultado['A07_Num_Telefonos_Residencia'] + "</li>" : " ") +
                            (resultado['A08_Barrio_Residencia'] ? " <li class='list-group-item'> <strong>Barrio de Residencia:</strong>  " + resultado['A08_Barrio_Residencia'] + "</li>" : " ") +
                            (resultado['A09_Proyecto_Residencia'] ? " <li class='list-group-item'> <strong>Proyecto:</strong>  " + resultado['A09_Proyecto_Residencia'] + "</li>" : " ") +
                            (resultado['A10_Localidad_Residencia'] ? " <li class='list-group-item'> <strong>Localidad de Residencia:</strong>  " + resultado['A10_Localidad_Residencia'] + "</li>" : " ") +
                            (resultado['A10_UPZ_Residencia'] ? " <li class='list-group-item'> <strong>UPZ de la Residencia:</strong>  " + resultado['A10_UPZ_Residencia'] + "</li>" : " ") +
                            (resultado['A11_Cod_Departamento_Residencia'] ? " <li class='list-group-item'> <strong>Departamento de Residencia:</strong>  " + resultado['A11_Cod_Departamento_Residencia'] + "</li>" : " ") +
                            (resultado['A11_Cod_Municipio_Residencia'] ? " <li class='list-group-item'> <strong>Municipio de Residencia:</strong>  " + resultado['A11_Cod_Municipio_Residencia'] + "</li>" : " ") +
                            "</ul><ul class='list-group col-md-6'>" +
                            (resultado['A12_Direccion_PAR'] ? " <li class='list-group-item'> <strong>Dirección Predio PAR:</strong>  " + resultado['A12_Direccion_PAR'] + "</li>" : " ") +
                            (resultado['A13_Num_Telefonos_PAR'] ? " <li class='list-group-item'> <strong>Teléfono Predio PAR:</strong>  " + resultado['A13_Num_Telefonos_PAR'] + "</li>" : " ") +
                            (resultado['A14_Barrio_PAR'] ? " <li class='list-group-item'> <strong>Barrio Predio PAR:</strong>  " + resultado['A14_Barrio_PAR'] + "</li>" : " ") +
                            (resultado['A15_Proyecto_PAR'] ? " <li class='list-group-item'> <strong>Proyecto Predio PAR:</strong>" + resultado['A15_Proyecto_PAR'] + "</li>" : " ") +
                            (resultado['A16_Localidad_PAR'] ? " <li class='list-group-item'> <strong>Localidad Predio PAR:</strong>  " + resultado['A16_Localidad_PAR'] + "</li>" : " ") +
                            (resultado['A16_UPZ_PAR'] ? " <li class='list-group-item'> <strong>UPZ Predio PAR:</strong>  " + resultado['A16_UPZ_PAR'] + "</li>" : " ") +
                            (resultado['A17_Cod_Departamento_PAR'] ? " <li class='list-group-item'> <strong>Departamento Predio PAR:</strong>  " + resultado['A17_Cod_Departamento_PAR'] + "</li>" : " ") +
                            (resultado['A17_Cod_Municipio_PAR'] ? " <li class='list-group-item'> <strong>Municipio Predio PAR:</strong>  " + resultado['A17_Cod_Municipio_PAR'] + "</li>" : " ") +
                            (resultado['A18_Hace_Parte_Organizacion'] ? " <li class='list-group-item'> <strong>Vinculación en una Organización:</strong>  " + resultado['A18_Hace_Parte_Organizacion'] + "</li>" : " ") +
                            (resultado['A18_Hace_Parte_Cual_Organizacion'] ? " <li class='list-group-item'> <strong> Organización:</strong>  " + resultado['A18_Hace_Parte_Cual_Organizacion'] + "</li>" : " ") +
//                            (resultado['A19_Actualmente_Vinculado_Alguna']? " <li class='list-group-item'> <strong>Jefe de Hogar:</strong>  " + resultado['A19_Actualmente_Vinculado_Alguna'] + "</li>" : " ") +
//                            (resultado['A19_Actualmente_Vinculado_Cual']? " <li class='list-group-item'> <strong>Organización:</strong>  " + resultado['A19_Actualmente_Vinculado_Cual'] + "</li>" : " ") +
                            (resultado['A20_Encuentra_Situacion_Desplazamiento'] ? " <li class='list-group-item'> <strong>Situación de Desplazamiento:</strong>  " + resultado['A20_Encuentra_Situacion_Desplazamiento'] + "</li>" : " ") +
                            (resultado['Otros_Datos'] ? " <li class='list-group-item'> <strong>Otros Datos:</strong>  " + resultado['Otros_Datos'] + "</li>" : " ") +
                            (resultado['Observaciones_Generales'] ? " <li class='list-group-item'>  <strong>Observaciones:</strong>  " + resultado['Observaciones_Generales'] + "</li>" : " ") +
                            (resultado['Nombre_Entrevistado'] ? " <li class='list-group-item'> <strong>Entrevistado:</strong>  " + resultado['Nombre_Entrevistado'] + "</li>" : " ") +
                            (resultado['Cedula_Entrevistado'] ? " <li class='list-group-item'> <strong>Cedula Entrevistado:</strong>  " + resultado['Cedula_Entrevistado'] + "</li>" : " ") +
                            (resultado['Ind_Firma_Entrevistado'] ? " <li class='list-group-item'> <strong>Ficha Firmada:</strong>  " + (resultado['Ind_Firma_Entrevistado'] === 1 ? 'si' : 'no') + "</li>" : " ") +
                            (resultado['Fec_Grabacion'] ? " <li class='list-group-item'> <strong>Fecha en el Sistema:</strong>  " + resultado['Fec_Grabacion'] + "</li>" : " ") +
                            (resultado['version_ficha'] ? " <li class='list-group-item'> <strong>Versión :</strong>  " + resultado['version_ficha'] + "</li>" : " ") +
                            "</ul></div></div>";
                    var contenido = '<div class="modal-header">' +
                            '<h3 class="modal-title">Ficha de Caracterización </h3>' +
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                            '   <span aria-hidden="true">&times;</span>' +
                            '</button>' +
                            '</div>' +
                            '<div class="modal-body">' +
                            hogar +
                            tabla +
                            '</div>' +
                            '<div class="modal-footer">' +
                            '<label style="float: left;margin-right:  5px;"> Versión de la ficha: </label> <select class=" btn form-control" id="version" style="width:200px"><option value="0"> seleccione...</option><option value="1" ' + (resultado['version_ficha'] === 6 ? "  selected  " : " ") + '    ' + (resultado['version_ficha'] === 7 ? "  disbled  " : " ") + '> Ficha social version 6</option><option value="2"  ' + (resultado['version_ficha'] === 7 ? "  selected  " : " ") + ' > Ficha social version 7</option></select>' +
                            '   <button type="button" class="btn btn-primary" id="editar_social" data-dismiss="modal">Ver Ficha Social <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>' +
                            '   <button type="button" class="btn btn-success" id="imprimir_social"   data-dismiss="modal">Imprimir <span class="glyphicon glyphicon-print" aria-hidden="true"></span></button>' +
                            '   <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>' +
                            '</div>';
                    $('#consultas').append(contenido);
                    if (editar_ficha_social) {
                        $('#editar_social').on('click', function () {
                            if ($('#version').val() === "1") {
                                $('#consultas').empty();
                                $("#consultas").append('<div class="modal-header"><h3 class="modal-title">Ficha de Caracterización</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close">   <span aria-hidden="true">×</span></button></div><iframe style="width: 100%;height: 800px;" id="social_frame" src="caracterizacion_form.html?identificador=' + resultado['IDENTIFICADOR'] + '&ref=' + usr_ref + '&apro=' + apro_ficha + '"></iframe>');

                                $('.modal-lg').css('width', '95%');
                                $('#modal_consultas').modal({
                                    backdrop: 'static',
                                    keyboard: false  // to prevent closing with Esc button (if you want this too)
                                });
                            } else if ($('#version').val() === "2") {
                                $('#consultas').empty();
                                $('#consultas').append('<div class="modal-header"><h3 class="modal-title">Ficha de Caracterización</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">x</span></button></div><div id="ficha_v7"></div>');
                                $("#ficha_v7").load('caracterizacion_form_v7.html', {identificador: resultado['IDENTIFICADOR']});
                                $('.modal-lg').css('width', '95%');
                                $('#modal_consultas').modal({
                                    backdrop: 'static',
                                    keyboard: false  // to prevent closing with Esc button (if you want this too)
                                });
                            } else {
                                alert('¡seleccione una versión!');
                            }

                        });
                    } else {
                        $('#editar_social').hide();
                    }
                    $('#imprimir_social').on('click', function () {
                        pdf_social(resultado['IDENTIFICADOR']);
                    });


                }
                $('#modal_consultas').modal({
                    backdrop: 'static',
                    keyboard: false  // to prevent closing with Esc button (if you want this too)
                });
            }
        }
    });
});
