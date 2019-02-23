$('#identificador').val(identificador);
$('#identificador').attr('disabled', true);
$.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: {
        op: "informacion_ficha_social",
        identificador: identificador
    },
    dataType: "json",
    async: true,
    success: function (response) {//                       
        if (response.length > 0) {
            if (response[0]['estado_ficha'] === 3) {
                creaCaracterizacion();
                $("#soc_ficha").find("input, select, textarea").attr('disabled', 'disabled');
                $('#observaciones_revision').attr('disabled', 'disabled');
                $('#aprobar_social').hide();
                $('#enviar_x_aprobacion').hide();
                $('.nextBtn').hide();
                $('#mensaje_estado').append('<div class="alert alert-success"><strong>Ficha de Caracterización Aprobada!</strong>\n\
                                                            <br> Indica que esta ficha social fue aprobada por el lider social.<br>\n\
                                                            usuario: ' + response[0]['usuario_revision'] + '<br>\n\
                                                            fecha de revisión: ' + response[0]['fecha_revision'] + ' </div>');
            }
            if (response[0]['estado_ficha'] === 4) {
                creaCaracterizacion();
                $('#aprobar_social').hide();
                $('#devolver_social').hide();
                $('#mensaje_estado').append('<div class="alert alert-warning"><strong>Devolución!</strong> La ficha fue devuelta por el lider social, revise los comentarios y haga los cambios necesarios</div>');
            }
            if (response[0]['estado_ficha'] === 2) {
                creaCaracterizacion();
                $("#soc_ficha").find("input, select, textarea").attr('disabled', 'disabled');
                $('#observaciones_revision').prop('disabled', false);
                $('#enviar_x_aprobacion').hide();
                $('.nextBtn').hide();
                $('#mensaje_estado').append('<div class="alert .alert-info"><strong>Revisión!</strong> indica que la ficha fue terminada por el profesional social y esta en revisión pr parte del lider social</div>');
            }
            $('#observaciones_revision').val(response[0]['comentarios_ficha'] ? response[0]['comentarios_ficha'] : '');
            $('#direccion').val(response[0]['Dirección']);
            $('#direccion').val(response[0]['Dirección']);
            $('#concepto').val(response[0]['Concepto de Ingreso']);
            $('#manzana').val(response[0]['MZ']);
            $('#barrrio').val(response[0]['Barrio']);
            $('#lote').val(response[0]['LT']);
            $('#localidad').val(response[0]['Localidad']);
            datos();
            $('#tipovivienda').val(response[0]['tipo_vivienda']);
            $('#tipotenencia').val(response[0]['documento_tenencia']);
            $('#cual_tipovivienda').val(response[0]['otro_tipo_vivienda']);
            $('#doctenencia').val(response[0]['otro_doc_tenencia']);
            $('#pisos').val(response[0]['num_pisos_par']);
            $('#banos').val(response[0]['num_banos_par']);
            $('#cocinas').val(response[0]['num_cocinas_par']);
            $('#cuartos').val(response[0]['num_habitaciones_par']);
            $('#afectacion').val(response[0]['afectacion_patrimonio_familiar']);
            $('#acueducto').attr('checked', response[0]['servicio_acueducto']);
            $('#energia').attr('checked', response[0]['servicio_energia']);
            $('#gas').attr('checked', response[0]['servicio_gas']);
            $('#gustoUbicacion').val(response[0]['gusto_ubicacion_par'] ? 'si' : 'no');
            $('#gustoVivienda').val(response[0]['gusto_vivienda'] ? 'si' : 'no');
            $('#gustoVecindario').val(response[0]['gusto_vecindario_par'] ? 'si' : 'no');
            $('#salida').val(response[0]['salida_par']);
            $('#porque_salida').val(response[0]['porque_salida_par']);
            $('#importancia_zona').val(response[0]['importancia_zona_proyecto_vida']);
            $('#porque_importancia').val(response[0]['porque_importancia_proyecto_vida']);
            $('#tiempo_zona').val(response[0]['tiempo_zona_par']);
            $('#tipo_tiempo').val(response[0]['tipo_tiempo_zona_par']);
            $('#boolMascota').val(response[0]['mascota'] ? 'si' : 'no');
            $('#mascotas').val(response[0]['cuantos_tipo']);
            $('#observaciones').val(response[0]['observaciones']);
            $('#tipofamilia').val(response[0]['tipo_familia']);
            $("#ingreso").val(response[0]['ingreso_promedio']);
            $("#egreso").val(response[0]['egreso_promedio']);
            if (response[0]['bl_trabajo'] !== undefined)
                $("#blTrabajo").val(response[0]['bl_trabajo'] + '');
            $("#trabajo").val(response[0]['cual_trabajo']);
            if (response[0]['bl_experiencia'] !== undefined)
                $("#blExperiencia").val((response[0]['bl_experiencia'] + ''));
            $("#Experiencia").val(response[0]['experiencia']);
            if (response[0]['bl_moto'] !== undefined)
                $("#blMotocicleta").val((response[0]['bl_moto'] + ''));
            $("#motocicletas").val(response[0]['num_motos']);
            if (response[0]['bl_carro'] !== undefined)
                $("#blCarro").val((response[0]['bl_carro'] + ''));
            $("#carros").val(response[0]['num_carros']);
            if (response[0]['bl_bici'] !== undefined)
                $("#blBici").val((response[0]['bl_bici'] + ''));
            $("#bicicletas").val(response[0]['num_bicicletas']);
            if (response[0]['tiene_desktop'] !== undefined)
                $('#blDesktop').val((response[0]['tiene_desktop'] + ''));
            $('#num_pc').val(response[0]['cantidad_desktop']);
            $('#uso_pc').val(response[0]['uso_desktop']);
            if (response[0]['tiene_portatil'] !== undefined)
                $('#blPortatil').val((response[0]['tiene_portatil'] + ''));
            $('#num_port').val(response[0]['catidad_portatiles']);
            $('#uso_port').val(response[0]['uso_portatiles']);
            if (response[0]['tiene_tablet'] !== undefined)
                $('#blTablet').val((response[0]['tiene_tablet'] + ''));
            $('#num_tab').val(response[0]['cantidad_tablet']);
            $('#uso_tab').val(response[0]['uso_tablet']);
            $('#usoFrecuencia').val(response[0]['frecuencia_uso_computador']);
            $('#Frecuencia_internet').val(response[0]['frecuencia_uso_internet']);
            $('#acreditaTenencia').val(response[0]['tenencia_predio']);
            $('#consumoacueducto').val(response[0]['consumo_acueducto']);
            $('#consumoenergia').val(response[0]['consumo_energia']);
            $('#consumogas').val(response[0]['consumo_gas']);
            $('#conciencia_riesgo').val(response[0]['conciencia_riesgo']);


            var uso_comp = response[0]['principal_uso_computador'];
            $('.imp_pc').each(function (index, valor) {
                $(valor).val(uso_comp.valores[index]);
            });
            $('#otro_comp').val(uso_comp.otro);

            var sitio_comp = response[0]['sitio_uso_computador'];
            $('.sitio_comp').each(function (index, valor) {
                $(valor).attr('checked', sitio_comp.valores[index]);
            });
            $('#otro_sitio_comp').val(sitio_comp.otro);
            var act_int = response[0]['objetivo_uso_internet'];
            $('.act_internet').each(function (index, valor) {
                $(valor).attr('checked', act_int.valores[index]);
            });
            $('#otro_act_internet').val(act_int.otro);
            var disp_int = response[0]['dispositivo_acceso_internet'];
            $('.disopsi_internet').each(function (index, valor) {
                $(valor).attr('checked', disp_int.valores[index]);
            });
            $('#otro_dispositivo').val(disp_int.otro);
            var paredes = response[0]['material_paredes'];
            $('#comenParedes').val(paredes.comentario);
            $('#blParedes').val(paredes.bool + '');
            var pisos = response[0]['material_pisos'];
            $('#comenPisos').val(pisos.comentario);
            $('#blPisos').val(pisos.bool + '');
            var imp_paredes = response[0]['impacto_materia_paredes'];
            $('#comenImpact').val(imp_paredes.comentario);
            $('#blMateriales').val(imp_paredes.bool + '');
            var razon_no_pertenencia = response[0]['razon_no_pertenencia'];
            $('#noPertenencia').val(razon_no_pertenencia.razon[0] ? razon_no_pertenencia.razon[0] : 0);
            if (response[0]['reuniones_organizacion'] !== undefined)
                $('#blParticiapacion').val((response[0]['reuniones_organizacion'] + ''));
            var caracter = response[0]['caracter_organizacion'];
            $('#caracOrganizacion').val(caracter.caracter[0]);
            var miembros = response[0]['miembros_organizacion'];
            $('#numPersonas').val(miembros.personas[0]);
            var prob_economicos = response[0]['acudiente_problemas_economicos'];
            $('#problemEconomicos').val(prob_economicos.bool);
            $('#otroEconomico').val(prob_economicos.otro);
            var prob_personales = response[0]['acudiente_problemas_personales'];
            $('#problemPersonales').val(prob_personales.bool);
            var organizaciones = response[0]['pertenencia_organizaciones'];
            $('#organizaciones').val(organizaciones.organizaciones);
            var lugares_cerca = response[0]['lugares_cercanos_vivienda'];
            $('.cerca').each(function (index, valor) {
                $(valor).attr('checked', lugares_cerca.lugares[index]);
            });
            var problemas_vivienda = response[0]['problemas_sector_vivienda'];
            $('.problemas').each(function (index, valor) {
                $(valor).attr('checked', problemas_vivienda.problemas[index]);
            });
            var min_consumo = response[0]['practica_consumo_servicios'];
            $('.reduct-consumo').each(function (index, valor) {
                $(valor).attr('checked', min_consumo.consumo[index]);
            });
            var clasif_basuras = response[0]['clasificacion_basuras'];
            $('.basuras').each(function (index, valor) {
                $(valor).attr('checked', clasif_basuras.basuras[index]);
            });


        }

    }
});
$.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: {
        op: "informacion_ficha_social_mimebros_dos",
        identificador: identificador
    },
    dataType: "json",
    async: false,
    success: function (response) {
        if (response.length > 0) {
            max = response.length;
            for (var i = 0; i < max - 1; i++) {
                $miembro = '<div  class="persona miembro" ><div class="row"><div class="col-md-3"><label class="control-label ">2.2.Parentesco</label><select class="form-control parentesco" name="parentesco1" id="parentesco1"><option value="0" selected >Seleccione el Tipo de Parentesco</option><option value="1"> Jefe de familia </option><option value="2"> Esposo(a)/Compañero(a) </option><option value="3"> Hijo(a) </option><option value="4"> Hermano(a) </option><option value="5"> Padre o Madre </option><option value="6"> Abuelo(a) </option><option value="7"> Nuera/Yerno </option><option value="8"> Nieto(a) </option><option value="9"> Suegro(a) </option><option value="10"> Otro pariente </option><option value="11"> Otro no pariente </option></select></div></div><div class="row"><div class="col-md-3 form-group"><label class="control-label ">2.3.Primer Nombre</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$" required="required" class="form-control nombre" name="nombre" id="nombre" placeholder="Primer Nombre"/></div><div class="col-md-3 form-group"><label class="control-label">2.4.Segundo Nombre</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"  class="form-control segundo" name="segundo" id="segundo" placeholder="Segundo Nombre"/></div><div class="col-md-3 form-group"><label class="control-label">2.5.Primer Apellido</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$" required="required" class="form-control apellido"  name="apellido" id="apellido" placeholder="Primer Apellido"/></div><div class="col-md-3 form-group"><label class="control-label">2.6.Segundo Apellido</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$" class="form-control segundap"  name="segundap" id="segundap" placeholder="Segundo Apellido"/></div></div><div class="row"><div class="col-md-3  form-group"><label class="control-label ">2.7.Fecha de Nacimiento</label><input type="date" required="required" class="form-control datepicker nacimiento" name="nacimiento" id="nacimiento" data-date-format="mm/dd/yyyy" /></div><div class="col-md-3 form-group"><label class="control-label">2.8.Ciudad de Nacimiento</label><select data-live-search="true" class="form-control ciudad" name="ciudad" id="ciudad"></select> </div> <div class="col-md-3 form-group"><label class="control-label ">2.9.Tipo</label><select class="form-control tipodoc" name="tipodoc" id="tipodoc" data-live-search="true"><option value="0"  selected>Seleccione el Tipo de Identificación</option><option value="1"> CC: Cedula de Ciudadania </option><option value="2"> C.E: Cedula de Extranjería </option><option value="3"> T.I: Tarjeta de Identidad </option><option value="4"> R.C: Registro Civil </option><option value="5"> P.A: Pasaporte </option><option value="6"> NUIP: Número </option><option value="7"> T.E: Tarjeta de Extranjería </option><option value="0"> S.I: Sin Información </option></select></div><div class="col-md-3 form-group"><label class="control-label">2.10.Fecha de expedición</label><input type="date" required="required" class="form-control datepicker expedoc" name="expedoc" id="expedoc" data-date-format="mm/dd/yyyy"/></div></div><div class="row"><div class="col-md-3 form-group"><label class="control-label">2.11.Nº de Documento</label><input type="number" pattern="^[1-9][0-9]*$" class="form-control numdoc" name="numdoc" id="numdoc" placeholder="Número de Identificación"/></div><div class="col-md-3 form-group"><label class="control-label grupo_etario" id="grupo_etareo" >2.12 Grupo Etario: </label></div><div class="col-md-3  form-group"><label class="control-label">2.13.Estado Civil</label><select class="form-control civil" name="civil" id="civil"><option value="0"  selected>Seleccione el Estado Civíl</option><option value="1">Soltero </option><option value="2">Casado </option><option value="3">Unión marital de hecho </option><option value="4">Sin sociedad conyugal o comunidad de bienes </option><option value="5">Viudo </option></select>  </div><div class="col-md-3 form-group"><label class="control-label ">2.14.Sexo</label><select class="form-control sexo" name="sexo" id="sexo"><option value="0"  selected>Seleccione el Sexo</option><option value="1"> Mujer </option><option value="2"> Hombre </option><option value="3"> Intersexual </option></select></div></div></div>';
                $('#miembros').append($miembro);
            }
            $nombres = $('.nombre');
            $segundos_nombres = $('.segundo');
            $apellidos = $('.apellido');
            $segundos_apellidos = $('.segundap');
            $fechas_nacimiento = $('.nacimiento');
            $ciudades_nacimiento = $('.ciudad');
            $tipos_documento = $('.tipodoc');
            $expediciones_documento = $('.expedoc');
            $numeros_documento = $('.numdoc');
            $grupos_etareos = $('.etareo');
            $estados_civiles = $('.civil');
            $sexos = $('.sexo');
            $parentescos = $('.parentesco');
            //                          

            $('.miembro').css('display', 'none');
            $.each(response, function (index, value) {

                $('#familia_table').append(
                        '<tr><td>' + value['primer_nombre'] + ' ' + value['B01_Primer_Apellido'] +
                        '</td><td>' + value['B05_Parentesco'] + '</td><td><a href="#" class="btn btn-primary a-btn-slide-text" onclick="mostrarMiembro(' + index + ')"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> <span></span></a></td></tr>'
                        );

                $nombre = $nombres[index];
                $miembros_ids[index] = value['id_miembro'];
                $($nombre).val(value['primer_nombre']);
                $segundo = $segundos_nombres[index];
                $($segundo).val(value['segundo_nombre']);
                $apellido = $apellidos[index];
                $($apellido).val(value['B01_Primer_Apellido']);
                $apellido_dos = $segundos_apellidos[index];
                $($apellido_dos).val(value['B02_Segundo_Apellido']);
                $nacimiento = $fechas_nacimiento [index];
                $($nacimiento).val(DateFormat(value['B08_Fec_Nacimiento']));
                calGrupo($nacimiento);
                itemsCiudad();
                $ciudad = $ciudades_nacimiento [index];
                $($ciudad).val(value['ciudad_nacimiento']);
                $tipo_doc = $tipos_documento[index];
                $($tipo_doc).val(value['B04_Tipo_Identificacion']);
                $expedicion = $expediciones_documento[index];
                $($expedicion).val(DateFormat(value['B04_Fec_Exp_Doc_Identificacion']));
                $num_doc = $numeros_documento [index];
                $($num_doc).val(value['B04_Identificacion']);
                $grupo_etareo = $grupos_etareos[index];
                $($grupo_etareo).val(value['primer_nombre']);
                $est_civil = $estados_civiles[index];
                $($est_civil).val(value['B07_Estado_Civil']);
                $sexo = $sexos[index];
                $($sexo).val(value['B06_Genero']);
                $parentesco = $parentescos[index];
                $($parentesco).val(value['B05_Parentesco']);
            });
            $('.nacimiento').on('change', function () {
                calGrupo($(this));
            });

        }
    }
});

function calGrupo(fecha) {
    var contenedor_miembro = $(fecha).parent().parent().parent();
    var nacimiento = $(contenedor_miembro).find('#nacimiento').val();
    var edad = getAge(nacimiento);

    if (0 <= (edad * 1) && (edad * 1) <= 5) {
        $(contenedor_miembro).find('#grupo_etareo').text('2.12 Grupo etareo: Primera Infancia 0-5 años');
    }
    if (5 < (edad * 1) && (edad * 1) <= 12) {
        $(contenedor_miembro).find('#grupo_etareo').text('2.12 Grupo etareo: Infancia 6-12 años');
    }
    if (12 < (edad * 1) && (edad * 1) <= 17) {
        $(contenedor_miembro).find('#grupo_etareo').text('2.12 Grupo etareo: Adolescencia 13-17 años');
    }
    if (17 < (edad * 1) && (edad * 1) <= 26) {
        $(contenedor_miembro).find('#grupo_etareo').text('2.12 Grupo etareo: Jovenes 18-26 años');
    }
    if (27 < (edad * 1) && (edad * 1) <= 59) {
        $(contenedor_miembro).find('#grupo_etareo').text('2.12 Grupo etareo: Adultos 27-59 años');
    }
    if (60 < (edad * 1)) {
        $(contenedor_miembro).find('#grupo_etareo').text('2.12 Grupo etareo: Adultos Mayores 60 años en adelante');
    }
}