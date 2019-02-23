
var $miembros_ids = [];
$(document).ready(function () {
    $num_miembros = 1;
    $dimensiones = false;
//    itemsCiudad();
    $('#boolMascota').on('change', function (event) {
        $(event.target).val() !== "si" ? $('#mascotas').attr({'disabled': true, 'value': ' '}) : $('#mascotas').attr('disabled', false);
    });


    $('#add_miembro').on('click', function () {
        if ($('.persona:last').find('.numdoc:last').val() !== '') {
            if ($('.persona:last').css('display') === 'block') {
                $('#familia_table').append('<tr><td>' + $('.nombre:last').val() + ' ' + $('.apellido:last').val() + '</td><td>' + (!$('.parentesco:last').val() ? 'Cabeza de familia' : $('.parentesco:last').find('option:selected').text()) + '</td><<td><a href="#" class="btn btn-primary a-btn-slide-text" onclick="mostrarMiembro(' + ($('.miembro:last').index() - 3) + ')"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> <span></span></a></td>/tr>');
            }
            $('.persona').css('display', 'none');
            $miembro = '<div  class="persona miembro" ><div class="row"><div class="col-md-3"><label class="control-label ">2.2.Parentesco</label><select class="form-control parentesco" name="parentesco1" id="parentesco1"><option value="0" selected >Seleccione el Tipo de Parentesco</option><option value="1"> Jefe de familia </option><option value="2"> Esposo(a)/Compañero(a) </option><option value="3"> Hijo(a) </option><option value="4"> Hermano(a) </option><option value="5"> Padre o Madre </option><option value="6"> Abuelo(a) </option><option value="7"> Nuera/Yerno </option><option value="8"> Nieto(a) </option><option value="9"> Suegro(a) </option><option value="10"> Otro pariente </option><option value="11"> Otro no pariente </option></select></div></div><div class="row"><div class="col-md-3 form-group"><label class="control-label ">2.3.Primer Nombre</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$" required="required" class="form-control nombre" name="nombre" id="nombre" placeholder="Primer Nombre"/></div><div class="col-md-3 form-group"><label class="control-label">2.4.Segundo Nombre</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"  class="form-control segundo" name="segundo" id="segundo" placeholder="Segundo Nombre"/></div><div class="col-md-3 form-group"><label class="control-label">2.5.Primer Apellido</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$" required="required" class="form-control apellido"  name="apellido" id="apellido" placeholder="Primer Apellido"/></div><div class="col-md-3 form-group"><label class="control-label">2.6.Segundo Apellido</label><input type="text" pattern="^([a-zA-ZñÑáéíóúÁÉÍÓÚ ])+[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$" class="form-control segundap"  name="segundap" id="segundap" placeholder="Segundo Apellido"/></div></div><div class="row"><div class="col-md-3  form-group"><label class="control-label ">2.7.Fecha de Nacimiento</label><input type="date" required="required" class="form-control datepicker nacimiento" name="nacimiento" id="nacimiento" data-date-format="mm/dd/yyyy" /></div><div class="col-md-3 form-group"><label class="control-label">2.8.Ciudad de Nacimiento</label><select data-live-search="true" class="form-control ciudad" name="ciudad" id="ciudad"></select> </div> <div class="col-md-3 form-group"><label class="control-label ">2.9.Tipo</label><select class="form-control tipodoc" name="tipodoc" id="tipodoc" data-live-search="true"><option value="0"  selected>Seleccione el Tipo de Identificación</option><option value="1"> CC: Cedula de Ciudadania </option><option value="2"> C.E: Cedula de Extranjería </option><option value="3"> T.I: Tarjeta de Identidad </option><option value="4"> R.C: Registro Civil </option><option value="5"> P.A: Pasaporte </option><option value="6"> NUIP: Número </option><option value="7"> T.E: Tarjeta de Extranjería </option><option value="0"> S.I: Sin Información </option></select></div><div class="col-md-3 form-group"><label class="control-label">2.10.Fecha de expedición</label><input type="date" required="required" class="form-control datepicker expedoc" name="expedoc" id="expedoc" data-date-format="mm/dd/yyyy"/></div></div><div class="row"><div class="col-md-3 form-group"><label class="control-label">2.11.Nº de Documento</label><input type="number" pattern="^[1-9][0-9]*$" class="form-control numdoc" name="numdoc" id="numdoc" placeholder="Número de Identificación"/></div><div class="col-md-3 form-group"><label class="control-label grupo_etario" id="grupo_etareo" >2.12 Grupo Etario: Se calcula en el sistema</label></div><div class="col-md-3  form-group"><label class="control-label">2.13.Estado Civil</label><select class="form-control civil" name="civil" id="civil"><option value="0"  selected>Seleccione el Estado Civíl</option><option value="1">Soltero </option><option value="2">Casado </option><option value="3">Unión marital de hecho </option><option value="4">Sin sociedad conyugal o comunidad de bienes </option><option value="5">Viudo </option></select>  </div><div class="col-md-3 form-group"><label class="control-label ">2.14.Sexo</label><select class="form-control sexo" name="sexo" id="sexo"><option value="0"  selected>Seleccione el Sexo</option><option value="1"> Mujer </option><option value="2"> Hombre </option><option value="3"> Intersexual </option></select></div></div></div>';
            $('#miembros').append($miembro);
            itemsCiudad();
            $('#next2').on('click', salvarPasoDos);
            $dimensiones = false;
        }
        $('.nacimiento').on('change', function () {
            var contenedor_miembro = $(this).parent().parent().parent();
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
        });
    });
    $('#editar_familia').on('click', function () {
        $('.persona').show();
    });

    $('#eliminar').on('click', function () {

    });



    $datos = {
        op: 'informacion_ficha_social',
        identificador: $('#identificador').val()
    };
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                $('#next1').on('click', salvarPasoUno);
                $('#next2').on('click', salvarPasoDos);
                $('#next3').on('click', salvarPasoTres);
                $('#next4').on('click', salvarPasoCuatro);
                $('#next5').on('click', salvarPasoCinco);
                $('#next6').on('click', salvarTecnologia);
                $('#next7').on('click', salvarPasoSeis);
                $('#next8').on('click', salvarPasoSiete);
            }
        }
    });
    if (aprob_ficha === "true") {
        $('.nextBtn').hide();
        $('#enviar_x_aprobacion').hide();
        $("#soc_ficha").find("input, select, textarea").attr('disabled', 'disabled');
        $('#observaciones_revision').prop('disabled', false);

    }
    if (aprob_ficha === "false") {
        $('#observaciones_revision').attr('disabled', 'disabled');
        $('#aprobar_social').hide();
        $('#devolver_social').hide();
    }

    $('#aprobar_social').on('click', function () {
        if (aprob_ficha === "true")
            aprobarFicha();
    });
    $('#devolver_social').on('click', function () {
        if (aprob_ficha === "true")
            devolverFicha();
    });
    $('#enviar_x_aprobacion').on('click', function () {
        enviarFicha();
    });

});

function getAge(date) {
    var now = new Date();
    var fecha = new Date(date);
    var age = now.getFullYear() - fecha.getFullYear();
    return age;
}
function aprobarFicha() {
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
                alert('se aprobó la ficha');
                window.top.location.reload();
            }
        }
    });
    alert('se aprobó la ficha');
    window.top.location.reload();
}

//Eventos para controlar valores condicionales 
function eventosControl() {

    $('.victima').each(function (ind, obj) {
        var padre = $(obj).parent().parent();
        if ($(obj).val() === 'true') {
            $(padre).find('.ruv').removeAttr('disabled');
            $(padre).find('.desplazado').removeAttr('disabled');
        } else {
            $(padre).find('.ruv').attr('disabled', 'disabled');

            $(padre).find('.desplazado').attr('disabled', 'disabled');

            $(padre).find('.retorno').attr('disabled', 'disabled');

        }
    });
//    caracterizacion paso 3
    $('.victima').on('change', function () {
        var bl_vic = $(this).val();
        var padre = $(this).parent().parent();
        switch (bl_vic) {
            case 'null':
                $(padre).find('.ruv').attr('disabled', 'disabled');
                $(padre).find('.ruv').val('null');
                $(padre).find('.desplazado').attr('disabled', 'disabled');
                $(padre).find('.desplazado').val('null');
                $(padre).find('.retorno').attr('disabled', 'disabled');
                $(padre).find('.retorno').val('null');
                break;
            case 'false':
                $(padre).find('.ruv').attr('disabled', 'disabled');
                $(padre).find('.ruv').val('null');
                $(padre).find('.desplazado').attr('disabled', 'disabled');
                $(padre).find('.desplazado').val('null');
                $(padre).find('.retorno').attr('disabled', 'disabled');
                $(padre).find('.retorno').val('null');
                break;
            case 'true':
                $(padre).find('.ruv').removeAttr('disabled');
                $(padre).find('.desplazado').removeAttr('disabled');
                break;
        }
    });
    $('.desplazado').each(function (ind, obj) {
        var padre = $(obj).parent().parent();
        if ($(obj).val() === 'true') {
            $(padre).find('.retorno').removeAttr('disabled');
        } else {
            $(padre).find('.retorno').attr('disabled', 'disabled');

        }
    });
    $('.desplazado').on('change', function () {
        var bl_vic = $(this).val();
        var padre = $(this).parent().parent();

        switch (bl_vic) {
            case 'null':
                $(padre).find('.retorno').attr('disabled', 'disabled');
                $(padre).find('.retorno').val('null');
                break;
            case 'false':
                $(padre).find('.retorno').attr('disabled', 'disabled');
                $(padre).find('.retorno').val('null');
                break;
            case 'true':
                $(padre).find('.retorno').removeAttr('disabled');
                break;
        }
    });

//  controles para el paso de servicios sociales, salud  y educación
    $('.ayuda').each(function (ind, obj) {
        var padre = $(obj).parent().parent();
        if ($(obj).val() === '6') {
            $(padre).find('.ayuda-cual').removeAttr('disabled');
        } else {
            $(padre).find('.ayuda-cual').attr('disabled', 'disabled');

        }
    });
    $('.ayuda').on('change', function () {
        var bl_ayu = $(this).val();
        var padre = $(this).parent().parent();
        if (bl_ayu === '6') {
            $(padre).find('.ayuda-cual').removeAttr('disabled');
        } else {
            $(padre).find('.ayuda-cual').attr('disabled', 'disabled');
            $(padre).find('.ayuda-cual').val('');
        }
    });
    $('.estudio').each(function (ind, obj) {
        var padre = $(obj).parent().parent();
        if ($(obj).val() === '2') {
            $(padre).find('.razones').removeAttr('disabled');
        } else {
            $(padre).find('.razones').attr('disabled', 'disabled');

        }
    });
    $('.estudio').on('change', function () {
        var bl_ayu = $(this).val();
        var padre = $(this).parent().parent().parent();
        if (bl_ayu === '2') {
            $(padre).find('.razones').removeAttr('disabled');
        } else {
            $(padre).find('.razones').attr('disabled', 'disabled');
            $(padre).find('.razones').val('0');
        }
    });
    $('.razones').each(function (ind, obj) {
        var padre = $(obj).parent().parent();
        if ($(obj).val() === '14') {
            $(padre).find('.cual-razon').removeAttr('disabled');
        } else {
            $(padre).find('.cual-razon').attr('disabled', 'disabled');
        }
    });
    $('.razones').on('change', function () {
        var bl_ayu = $(this).val();
        var padre = $(this).parent().parent();
        if (bl_ayu === '14') {
            $(padre).find('.cual-razon').removeAttr('disabled');
        } else {
            $(padre).find('.cual-razon').attr('disabled', 'disabled');
            $(padre).find('.cual-razon').val('');
        }
    });
    $('.razones').each(function (ind, obj) {
        var padre = $(obj).parent().parent();
        if ($(obj).val() === 'true') {
            $(padre).find('.enfermedad').removeAttr('disabled');
            $(padre).find('.diagnostico').removeAttr('disabled');
        } else {
            $(padre).find('.enfermedad').attr('disabled', 'disabled');
            $(padre).find('.diagnostico').attr('disabled', 'disabled');
        }
    });
    $('.bool-enfermedad').on('change', function () {
        var bl_enfer = $(this).val();
        var padre = $(this).parent().parent();
        switch (bl_enfer) {
            case 'null':
                $(padre).find('.enfermedad').attr('disabled', 'disabled');
                $(padre).find('.diagnostico').attr('disabled', 'disabled');
                $(padre).find('.enfermedad').val('');
                $(padre).find('.diagnostico').val('null');
                break;
            case 'false':
                $(padre).find('.enfermedad').attr('disabled', 'disabled');
                $(padre).find('.diagnostico').attr('disabled', 'disabled');
                $(padre).find('.enfermedad').val('');
                $(padre).find('.diagnostico').val('null');
                break;
            case 'true':
                $(padre).find('.enfermedad').removeAttr('disabled');
                $(padre).find('.diagnostico').removeAttr('disabled');
                break;
        }
    });

//    controles paso 5 dimensión economica
    if ($('#blTrabajo').val() === 'true') {
        $('#trabajo').removeAttr('disabled');
    } else {
        $('#trabajo').attr('disabled', 'disabled');
    }

    $('#blTrabajo').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#trabajo').attr('disabled', 'disabled');
                $('#trabajo').val('');
                break;
            case 'false':
                $('#trabajo').attr('disabled', 'disabled');
                $('#trabajo').val('');
                break;
            case 'true':
                $('#trabajo').removeAttr('disabled');
                break;
        }
    });

    if ($('#blExperiencia').val() === 'true') {
        $('#Experiencia').removeAttr('disabled');
    } else {
        $('#Experiencia').attr('disabled', 'disabled');
    }
    $('#blExperiencia').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#Experiencia').attr('disabled', 'disabled');
                $('#Experiencia').val('0');
                break;
            case 'false':
                $('#Experiencia').attr('disabled', 'disabled');
                $('#Experiencia').val('0');
                break;
            case 'true':
                $('#Experiencia').removeAttr('disabled');
                break;
        }
    });

    if ($('#blMotocicleta').val() === 'true') {
        $('#motocicletas').removeAttr('disabled');
    } else {
        $('#motocicletas').attr('disabled', 'disabled');
    }
    $('#blMotocicleta').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#motocicletas').attr('disabled', 'disabled');
                $('#motocicletas').val('0');
                break;
            case 'false':
                $('#motocicletas').attr('disabled', 'disabled');
                $('#motocicletas').val('0');
                break;
            case 'true':
                $('#motocicletas').removeAttr('disabled');
                break;
        }
    });

    if ($('#blCarro').val() === 'true') {
        $('#carros').removeAttr('disabled');
    } else {
        $('#carros').attr('disabled', 'disabled');
    }
    $('#blCarro').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#carros').attr('disabled', 'disabled');
                $('#carros').val('0');
                break;
            case 'false':
                $('#carros').attr('disabled', 'disabled');
                $('#carros').val('0');
                break;
            case 'true':
                $('#carros').removeAttr('disabled');
                break;
        }
    });

    if ($('#blBici').val() === 'true') {
        $('#bicicletas').removeAttr('disabled');
    } else {
        $('#bicicletas').attr('disabled', 'disabled');
    }
    $('#blBici').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#bicicletas').attr('disabled', 'disabled');
                $('#bicicletas').val('0');
                break;
            case 'false':
                $('#bicicletas').attr('disabled', 'disabled');
                $('#bicicletas').val('0');
                break;
            case 'true':
                $('#bicicletas').removeAttr('disabled');
                break;
        }
    });

//    Control de paso 6 tecnologias
    if ($('#blDesktop').val() === 'true') {
        $('#num_pc').removeAttr('disabled');
        $('#uso_pc').removeAttr('disabled');
    } else {
        $('#num_pc').attr('disabled', 'disabled');

        $('#uso_pc').attr('disabled', 'disabled');
    }
    $('#blDesktop').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#num_pc').attr('disabled', 'disabled');
                $('#num_pc').val('0');
                $('#uso_pc').attr('disabled', 'disabled');
                $('#uso_pc').val('0');
                break;
            case 'false':
                $('#num_pc').attr('disabled', 'disabled');
                $('#num_pc').val('0');
                $('#uso_pc').attr('disabled', 'disabled');
                $('#uso_pc').val('0');
                break;
            case 'true':
                $('#num_pc').removeAttr('disabled');
                $('#uso_pc').removeAttr('disabled');
                break;
        }
    });

    if ($('#blPortatil').val() === 'true') {
        $('#num_port').removeAttr('disabled');
        $('#uso_port').removeAttr('disabled');
    } else {
        $('#num_port').attr('disabled', 'disabled');
        $('#uso_port').attr('disabled', 'disabled');
    }
    $('#blPortatil').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#num_port').attr('disabled', 'disabled');
                $('#num_port').val('0');
                $('#uso_port').attr('disabled', 'disabled');
                $('#uso_port').val('0');
                break;
            case 'false':
                $('#num_port').attr('disabled', 'disabled');
                $('#num_port').val('0');
                $('#uso_port').attr('disabled', 'disabled');
                $('#uso_port').val('0');
                break;
            case 'true':
                $('#num_port').removeAttr('disabled');
                $('#uso_port').removeAttr('disabled');
                break;
        }
    });

    if ($('#blTablet').val() === 'true') {
        $('#num_tab').removeAttr('disabled');
        $('#uso_tab').removeAttr('disabled');
    } else {
        $('#num_tab').attr('disabled', 'disabled');

        $('#uso_tab').attr('disabled', 'disabled');
    }
    $('#blTablet').on('change', function () {
        var bl_enfer = $(this).val();

        switch (bl_enfer) {
            case 'null':
                $('#num_tab').attr('disabled', 'disabled');
                $('#num_tab').val('0');
                $('#uso_tab').attr('disabled', 'disabled');
                $('#uso_tab').val('0');
                break;
            case 'false':
                $('#num_tab').attr('disabled', 'disabled');
                $('#num_tab').val('0');
                $('#uso_tab').attr('disabled', 'disabled');
                $('#uso_tab').val('0');
                break;
            case 'true':
                $('#num_tab').removeAttr('disabled');
                $('#uso_tab').removeAttr('disabled');
                break;
        }
    });

//    Controles paso 8 

    if ($('#blTablet').val() === '5') {
        $('#cual_tipovivienda').removeAttr('disabled');
    } else {
        $('#cual_tipovivienda').attr('disabled', 'disabled');
    }
    $('#blTablet').on('change', function () {
        var bl_tablet = $(this).val();

        if (bl_tablet === '5') {
            $('#cual_tipovivienda').removeAttr('disabled');
        } else {
            $('#cual_tipovivienda').attr('disabled', 'disabled');
            $('#cual_tipovivienda').val('');
        }
    });
    if ($('#tipotenencia').val() === '5') {
        $('#doctenencia').removeAttr('disabled');
    } else {
        $('#doctenencia').attr('disabled', 'disabled');
    }
    $('#tipotenencia').on('change', function () {
        var bl_tablet = $(this).val();

        if (bl_tablet === '4') {
            $('#doctenencia').removeAttr('disabled');
        } else {
            $('#doctenencia').attr('disabled', 'disabled');
            $('#doctenencia').val('');
        }
    });

}

function devolverFicha() {
    $datos = {
        op: 'devolver_ficha',
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
            alert('se devolvio la ficha, ahora el profesional podra hacer los cambios necesario');
            window.top.location.reload();

        }
    });
    alert('se devolvio la ficha, ahora el profesional podra hacer los cambios necesario');
    window.top.location.reload();

}
function enviarFicha() {
    salvarPasoSiete();
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

        complete: function (response) {
            $data = {
                op: 'notificacion_revision_ficha_social',
                identificador: $('#identificador').val(),
                usr: usr_ref
            };
            $.ajax({
                type: "POST",
                url: "GestionDML",
                data: $data,
                dataType: "json",
                complete: function (response) {
                    alert('se envio la ficha para aprobación');
                    window.top.location.reload();
                }
            });

        }
    });
}



function validar(id) {
    isValid = true;
    curInputs = $('#' + id).find("input[type='text'],input[type='url'],input[type='date'],input[type='number'],select");
    $(".form-group").removeClass("has-error");
    var paso2 = id === 'step-2' ? true : false;
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
            if (paso2)
                $(curInputs[i]).closest(".miembro").show();
        }
    }
    return isValid;
}
function salvarPasoUno() {

    $datos = {
        op: 'salvar_identificacion_caracterizacion',
        identificador: $('#identificador').val(),
        concepto: $('#concepto').val(),
        direccion: $('#direccion').val(),
        manzana: $('#manzana').val(),
        lote: $('#lote').val(),
        barrio: $('#barrrio').val(),
        localidad: $('#localidad').val()
    };
    $.ajax({
        type: "GET",
        url: "GestionDML",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response)
            {
            }
        }
    });

}
function actualizarIds() {
    $datos = {
        op: 'id_miembros',
        identificador: $('#identificador').val()
    };
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response)
            {
                $miembros_ids = [];
                $.each(response, function (ind, value) {
                    $miembros_ids.push(value.id_miembro);
                });

            }
        }
    });

}
function salvarPasoDos() {

    if ($('.numdoc:last').val() === '') {
        $('.persona:last').remove();
    }
    isValid = validar('step-2');
    if (isValid) {
        if (!$dimensiones) {
            enviarDatos();
            creaCaracterizacion();
            $dimensiones = true;
        }
        actualizarIds();
        siguiente(this);
    }

}
function salvarPasoTres() {
    isValid = validar('step-3');
    if (isValid) {
        $etnias = $('.etnia');
        $orientaciones = $('.orientacion');
        $discapacidades = $('.discapacidad');
        $cabezas_familia = $('.cabeza');
        $victimas = $('.victima');
        $desplazados = $('.desplazado');
        $desmovilizados = $('.desmovilizado');
        $registros_victimas = $('.ruv');
        $retornos = $('.retorno');
        $numeros_documento = $('.numdoc');
        for (var i = 0; i < $etnias.length; i++) {
            $documento = $numeros_documento[i];
            $etnia = $etnias[i];
            $orientacion = $orientaciones[i];
            $victima = $victimas[i];
            $registro_victima = $registros_victimas[i];
            $discapacidad = $discapacidades[i];
            $cabeza_familia = $cabezas_familia[i];
            $desplazado = $desplazados[i];
            $retorno = $retornos[i];
            $desmovilizado = $desmovilizados[i];
            $numero_documento = $numeros_documento[i];

            $datos = {
                op: 'salvar_poblacion_caracterizacion',
                identificador: $('#identificador').val(),
                id_miembro: $miembros_ids[i],
                documento: $($documento).val(),
                etnia: $($etnia).val(),
                orientacion: $($orientacion).val(),
                discapacidad: $($discapacidad).val(),
                cabeza: $($cabeza_familia).val(),
                victima: $($victima).val(),
                ruv: $($registro_victima).val(),
                retorno: $($retorno).val(),
                desplazado: $($desplazado).val(),
                desmovilizado: $($desmovilizado).val(),
                num_doc: $($numero_documento).val()


            };
            $.ajax({
                type: "GET",
                url: "GestionDML",
                data: $datos,
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response)
                    {
                        console.log(response);
                    }
                }
            });
        }
    }
}

function salvarPasoCuatro() {
    isValid = validar('step-4');
    if (isValid) {
        $numeros_documento = $('.numdoc');
        $ayudas = $('.ayuda');
        $otras_ayudas = $('.ayuda-cual');
        $grados = $('.grado');
        $jardines = $('.jardin');
//    $tiempos = $('.tiempollegar');
        $sistemas_salud = $('.sistema-salud');
        $regimenes_salud = $('.regimen');
        $enfermedades_bool = $('.bool-enfermedad');
        $enfermedades = $('.enfermedad');
        $lectoescrituras = $('.lectura');
        $studios_actuales = $('.estudio');
        //$lugares_estudio = $('.lugar-estudio');
        $razones = $('.razones');
        $otras_razones = $('.cual-razon');
        $diagnosticos = $('.diagnostico');
        for (var i = 0; i < $numeros_documento.length; i++) {
            $numero_documento = $numeros_documento[i];
            $ayuda = $ayudas[i];
            $otra_ayuda = $otras_ayudas[i];
            $grado = $grados[i];
            $jardin = $jardines[i];
            $sistema_salud = $sistemas_salud[i];
            $regimen_salud = $regimenes_salud[i];
            $enfermedad_bool = $enfermedades_bool[i];
            $enfermedad = $enfermedades[i];
            $lectoescritura = $lectoescrituras[i];
            $studio_actual = $studios_actuales[i];
            //$lugar_estudio = $lugares_estudio[i];
            $razon = $razones[i];
            $otra_razon = $otras_razones[i];
            $diagnostico = $diagnosticos[i];
            $datos = {
                op: 'salvar_servicios_sociales',
                identificador: $('#identificador').val(),
                id_miembro: $miembros_ids[i],
                orden: i + 1,
                num_doc: $($numero_documento).val(),
                ayuda: $($ayuda).val(),
                otra_ayuda: $($otra_ayuda).val() ? $($otra_ayuda).val() : '',
                lectoescritura: $($lectoescritura).val(),
                grado_aprobado: $($grado).val(),
                instituto_infantil: $($jardin).val(),
                tiempo_llegada: 0,
                enfermedad: $($enfermedad).val() ? $($enfermedad).val() : '',
                sistema_salud: $($sistema_salud).val(),
                regimen_salud: $($regimen_salud).val(),
                estudio_actual: $($studio_actual).val() === '1' ? true : false,
//            lugar_estudio: $($lugar_estudio).val(),
                lugar_estudio: 0,
                razon_noestudia: $($razon).val(),
                otra_razon: $($otra_razon).val(),
                diagnostico: $($diagnostico).val()



            };
            $.ajax({
                type: "GET",
                url: "GestionDML",
                data: $datos,
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response)
                    {
                        console.log(response);
                    }
                }
            });
        }
    }
}
function salvarPasoCinco() {
    isValid = validar('step-5');
    if (isValid) {
        $numeros_documento = $('.numdoc');
        $ingresos = $('.ingresos');
        $soportes = $('.soporte');
        $ocupaciones = $('.ocupacion');
        $lugares = $('.lugar');
        $destinaciones = $('.destinacion');
        $actividades = $('.actividad');
        $formalizaciones = $('.formalizacion');
        $razones_sociales = $('.razon-social');
        $propietarios = $('.propietarios');
        $ubicaciones_clientes = $('.ubicacion-clientes');
        $valores_desarrollo = $('.valdesarrollo');
        $valores_produccion = $('.valproduccion');
        $valores_herramientas = $('.valherramientas');



        for (var i = 0; i < $numeros_documento.length; i++) {
            $numero_documento = $numeros_documento[i];
            $ingreso = $ingresos[i];
            $soporte = $soportes[i];
            $ocupacion = $ocupaciones[i];
            $lugar = $lugares[i];
            $destinacion = $destinaciones[i];
            $actividad = $actividades[i];
            $formalizacion = $formalizaciones[i];
            $razones_social = $razones_sociales[i];
            $propietario = $propietarios[i];
            $ubicacion_clientes = $ubicaciones_clientes[i];
            $valor_desarrollo = $valores_desarrollo[i];
            $valor_produccion = $valores_produccion[i];
            $valor_herramientas = $valores_herramientas[i];

            $datos = {
                op: 'salvar_dimension_economica',
                identificador: $('#identificador').val(),
                num_doc: $($numero_documento).val(),
                id_miembro: $miembros_ids[i],
                ingreso_promedio: 0,
                soporte_ingresos: $($soporte).val(),
                ocupacion: $($ocupacion).val(),
                lugar_trabajo: $($lugar).val(),
                destinacion: $($destinacion).val(),
                actividad_par: $($actividad).val(),
                formalizada: $($formalizacion).prop('checked'),
                razon_social: $($razones_social).val(),
                propietarios: $($propietario).val(),
                clientes: $($ubicacion_clientes).val(),
                valor_desarrollo: $($valor_desarrollo).val(),
                valor_produccion: $($valor_produccion).val(),
                valor_herramientas: $($valor_herramientas).val()
            };
            $.ajax({
                type: "GET",
                url: "GestionDML",
                data: $datos,
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response)
                    {
                        console.log(response);
                    }
                }
            });
        }
//        Para salvar info economica del hogar
        $dato2 = {
            op: 'salvar_dimension_economica_hogar',
            identificador: $('#identificador').val(),
            ingreso: $("#ingreso").val(),
            gasto_promedio: $("#egreso").val(),
            obtener_trabajo: $("#blTrabajo").val(),
            cual_trabajo: $("#trabajo").val(),
            experiencia: $("#blExperiencia").val(),
            exp_meses: $("#Experiencia").val(),
            motocicletas: $("#blMotocicleta").val(),
            cuantas_motos: $("#motocicletas").val(),
            carros: $("#blCarro").val(),
            cuantos_carros: $("#carros").val(),
            bicicletas: $("#blBici").val(),
            cuantas_bicis: $("#bicicletas").val()
        };
        $.ajax({
            type: "GET",
            url: "GestionDML",
            data: $dato2,
            dataType: "json",
            async: true,
            success: function (response) {
                if (response)
                {
                    console.log(response);
                }
            }
        });


    }
}

function salvarTecnologia() {
    isValid = validar('step-6');
    if (isValid) {

        var vals_imp = [];
        $('.imp_pc').each(function (index, campo) {
            vals_imp.push(campo.value);
        });
        var vals_sitio = [];
        $('.sitio_comp').each(function (index, campo) {
            vals_sitio.push(campo.checked);
        });
        var vals_internet = [];
        $('.act_internet').each(function (index, campo) {
            vals_internet.push(campo.checked);
        });
        var vals_disp = [];
        $('.disopsi_internet').each(function (index, campo) {
            vals_disp.push(campo.checked);
        });
        $datos = {
            op: 'salvar_tecnologia',
            identificador: $('#identificador').val(),
            bl_desktop: $('#blDesktop').val(),
            num_desktop: $('#num_pc').val(),
            uso_desktop: $('#uso_pc').val(),
            bl_portatil: $('#blPortatil').val(),
            num_portatil: $('#num_port').val(),
            uso_portatil: $('#uso_port').val(),
            bl_tablet: $('#blTablet').val(),
            num_tablet: $('#num_tab').val(),
            uso_tablet: $('#uso_tab').val(),
            frec_desktop: $('#usoFrecuencia').val(),
            frec_internet: $('#Frecuencia_internet').val(),
            orden_importancia: '\'{"valores":[' + vals_imp + '],"otro":"' + $('#otro_comp').val() + '"}\'',
            sitio_orden: '\'{"valores":[' + vals_sitio + '],"otro":"' + $('#otro_sitio_comp').val() + '"}\'',
            orden_actividad: '\'{"valores":[' + vals_internet + '],"otro":"' + $('#otro_act_internet').val() + '"}\'',
            orden_dispositivo: '\'{"valores":[' + vals_disp + '],"otro":"' + $('#otro_dispositivo').val() + '"}\''
        };
        $.ajax({
            type: "GET",
            url: "GestionDML",
            data: $datos,
            dataType: "json",
            async: true,
            success: function (response) {
                if (response)
                {
                    console.log(response);
                }
            }
        });
    }
}
function salvarPasoSeis() {
    isValid = validar('step-7');
    if (isValid) {
        $datos = {
            op: 'salvar_caracterizacion_vivienda',
            identificador: $('#identificador').val(),
            tipo_vivienda: $('#tipovivienda').val(),
            otro_tipo_vivienda: $('#cual_tipovivienda').val(),
            doc_tenencia: $('#tipotenencia').val(),
            otro_doc_tenencia: $('#doctenencia').val(),
            calidad_tenencia: $('#acreditaTenencia').val(),
            pisos: $('#pisos').val() ? $('#pisos').val() : 0,
            habitaciones: $('input[name="cuartos"]').val() ? $('input[name="cuartos"]').val() : 0,
            banos: $('input[name="baños"]').val() ? $('input[name="baños"]').val() : 0,
            cocinas: $('input[name="cocinas"]').val() ? $('input[name="cocinas"]').val() : 0,
            acueducto: ($('input[name="acueducto"]').prop('checked') ? 'TRUE' : 'FALSE'),
            energia: ($('input[name="energia"]').prop('checked') ? 'TRUE' : 'FALSE'),
            gas: ($('input[name="gas"]').prop('checked') ? 'TRUE' : 'FALSE'),
            consumo_acueducto: $('#consumoacueducto').val() ? $('#consumoacueducto').val() : 0,
            consumo_energia: $('#consumoenergia').val() ? $('#consumoenergia').val() : 0,
            consumo_gas: $('#consumogas').val() ? $('#consumogas').val() : 0,
            afectacion: $('#afectacion').val(),
            tipo_familia: $('#tipofamilia').val() ? $('#tipofamilia').val() : 0,
            meterial_paredes: '\'{"bool":' + ($('#blParedes').val()) + ',"comentario":"' + $('#comenParedes').val() + '"}\'',
            materia_pisos: '\'{"bool":' + ($('#blPisos').val()) + ',"comentario":"' + $('#comenPisos').val() + '"}\'',
            impact_paredes: '\'{"bool":' + ($('#blMateriales').val()) + ',"comentario":"' + $('#comenImpact').val() + '"}\'',
            conciencia_riesgo: $('#conciencia_riesgo').val(),
            ref: usr_ref
        };
        $.ajax({
            type: "GET",
            url: "GestionDML",
            data: $datos,
            dataType: "json",
            async: true,
            success: function (response) {
                if (response)
                {
                    console.log(response);
                }
            }
        });
    }
}
function salvarPasoSiete() {
    isValid = validar('step-8');
//    if (isValid) {
    $numeros_documento = $('.numdoc');
    //$actividades_barrio = $('.actividad-barrio');
    // $relaciones_barrio = $('.relaciones');
    $organizaciones_zona = $('.organi-zona');
    $persona_siete = false;
    ficha_terminada = false;
    for (var i = 0; i < $numeros_documento.length; i++) {
        $numero_documento = $numeros_documento[i];
        //$actividad_barrio = $actividades_barrio[i];
        // $relacion_barrio = $relaciones_barrio[i];
        $organizacion_zona = $organizaciones_zona[i];

        $datos = {
            op: 'salvar_riesgo_arraigo_persona',
            id_miembro: $miembros_ids[i],
            identificador: $('#identificador').val(),
            num_doc: $($numero_documento).val(),
            actividad_barrio: $('#actividad-barrio').val(),
            relaciones_barrio: $('#relaciones').val(),
            organizacion_zona: $($organizacion_zona).val()

        };

        $.ajax({
            type: "GET",
            url: "GestionDML",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {
                if (response)
                {
                    $persona_siete = true;
                }
            }
        });
    }
    sector = $('#sector').val();

    var lugares_cerca = [];
    $('.cerca').each(function (index, campo) {
        lugares_cerca.push(campo.checked);
    });
    var problemas = [];
    $('.problemas').each(function (index, campo) {
        problemas.push(campo.checked);
    });
    var basuras = [];
    $('.basuras').each(function (index, campo) {
        basuras.push(campo.checked);
    });
    var consumo = [];
    $('.reduct-consumo').each(function (index, campo) {
        consumo.push(campo.checked);
    });
    $datos = {
        op: 'salvar_riesgo_arraigo',
        identificador: $('#identificador').val(),
        gusto_ubicacion: $('select[name="gustoUbicacion"]').val() === 'si' ? 'true' : 'false',
        gusto_vivienda: ($('select[name="gustoVivienda"]').val() === 'si') ? 'true' : 'false',
        gusto_vecindario: $('select[name="gustoVecindario"]').val() === 'si' ? 'true' : 'false',
        tiempo_zona: $('#tiempo_zona').val(),
        tipo_tiempo_zona: $('#tipo_tiempo').val(),
        salida: $('#salida').val(),
        porque_salida: $('#porque_salida').val(),
        importancia_proyecto: $('#importancia_zona').val(),
        porque_proyecto: $('#porque_importancia').val(),
        mascota: $('#boolMascota').val() === 'si',
        cuantos: $('#mascotas').val(),
        problem_personal: '\'{"bool":[' + $('#problemPersonales').val() + ']}\'',
        problem_economicos: '\'{"bool":[' + $('#problemEconomicos').val() + '],"otro":"' + $('#otroEconomico').val() + '"}\'',
        organizaciones: '\'{"organizaciones":[' + $('#organizaciones').val() + ']}\'',
        no_pertenencia: '\'{"razon":[' + $('#noPertenencia').val() + ']}\'',
        reuniones_org: $('#blParticiapacion').val(),
        caracter_org: '\'{"caracter":[' + $('#caracOrganizacion').val() + ']}\'',
        personas_org: '\'{"personas":[' + $('#numPersonas').val() + ']}\'',
        lugar_cercano: '\'{"lugares":[' + lugares_cerca + ']}\'',
        problemas: '\'{"problemas":[' + problemas + ']}\'',
        basuras: '\'{"basuras":[' + basuras + ']}\'',
        consumo: '\'{"consumo":[' + consumo + ']}\'',
        boservaciones: $('#observaciones').val(),
        usuario_id: usr_ref
    };
    $.ajax({
        type: "GET",
        url: "GestionDML",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response && $persona_siete)
            {
                alert('Se ha guardado correctamente la ficha de caracterización');
//                window.top.location.reload();
            }
        }
    });


//    }
}
function generarDimensiones() {
    $('#caracterizacion').empty();
    $('#servicios').empty();
    $('#economica').empty();
    $('#sociocultural').empty();
    var apell = $('.apellido');

    $('.nombre').each(function (index) {
        $caracterizacion = '<div class="panel-default" ><div class="panel-heading" >' +
                $(this).val() + ' ' + $(apell[index]).val() + '</div><div class="panel-body" ><div class="row" id="caracterizacion0"><div class="col-md-4"> 3.1 Etnia<select class="form-control etnia" name="etnia" id="etnia">   </select></div><div class="col-md-4">3.3 Orientación Sexual<select class="form-control orientacion" name="orientacion" id="orientacion"></select></div><div class="col-md-4">3.4 Discapacidad<select  class="form-control discapacidad" name="discapacidad" id="discapacidad"></select></div></div><div class="row" ><div class="col-md-4 center-orientation">3.5 Madre/Padre Cabeza de familia<select class="form-control cabeza" name="cabeza"><option value=null >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4">3.6 victima del Conflicto <select class="form-control victima" name="victima"><option value=null >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4">3.7 ¿Registro Unico de victimas?<select class="form-control ruv" name="ruv" disabled="disabled"><option value=null >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4 ">3.8 Desplazado por Violencia <select class="form-control desplazado" name="desplazado" disabled="disabled"><option value=null  >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4 ">3.9 ¿Quisiera retornar?<select class="form-control retorno" name="retorno" disabled="disabled"><option value=null selected >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4">3.10 Desmovilizado<select class="form-control desmovilizado" name="desmovilizado"><option value=null  >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div></div></div></div>';
        $('#caracterizacion').append($caracterizacion);
        $servicios = '<div class="panel-default" id="servicios' +
                index + '"><div class="panel-heading">' +
                $(this).val() + ' ' + $(apell[index]).val() + '</div> <div class="panel-body"><div class="row"><div class="col-md-3">4.1 ¿Recibe Algun tipo de ayuda estatal?</div><div class="col-md-3"><select class="form-control ayuda" name="ayuda" id="ayuda"> </select></div><div class="col-md-3">4.2 Si es otro tipo de ayuda diga ¿Cúal?</div><div class="col-md-3"> <input type="text" class="form-control ayuda-cual" placeholder="otro" name="otraAyuda"></div></div><hr><div class="row"><div class="col-md-3"> 5.1 ¿Sabe leer y escribir?   </div><div class="col-md-3"><select class="form-control lectura" name="lectura" required="required" > <option value="null">Slecciona...</option><option value="false">No</option><option value="true">Si</option></select></div><div class="col-md-3">5.2   Ultimo grado aprobado:</div><div class="col-md-3"><select class="form-control grado" name="grado" id="grado"></select></div><div class="col-md-10">5.4 ¿Asiste a Hogar ICBF, jardin infantil, casa vecinal SDIS?</div> <div class="col-md-2">  <select class="form-control jardin" name="enfermedad"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div> <br><br>   </div>   <div class="row"><div class="col-md-3">5.3 ¿Estudia actualmente? </div><div class="col-md-3"><select class="form-control estudio" name="estudio" id="estudio" required="required"><option >Seleccione...</option><option value="1">Si</option><option value="2">No</option></select></div></div><div class="row"><div class="col-md-3"> 5.4 ¿cuál es la razon por la cuál no estudia? </div><div class="col-md-3"><select class="form-control razones" name="rason_no_estudio" id="rason_no_estudio"><option value="0">Seleccione...</option><option value="1">Considera que no está en edad de estudiar.</option><option value="2">Considera que ya terminó</option><option value="3">Costos educativos elevados</option><option value="4">Falta de dinero</option><option value="5">Debe encargarse de las labores domésticas y/o del cuidado de niño(a)s y otras personas del hogar</option><option value="6">Necesita trabajar o buscar trabajo</option><option value="7">No le gusta o no le interesa el estudio</option><option value="8">Se casó o formó pareja</option><option value="9">Falta de cupos</option><option value="10">No existe centro educativo cercano ó el establecimiento asignado es muy lejano</option><option value="11">Necesita Educación Especial</option><option value="12">Por embarazo</option><option value="13">Por enfermedad</option><option value="14">Otra razón</option></select></div><div class="col-md-3"> Si seleccionó otro diga ¿Cuál?: </div><div class="col-md-3"><input type="text" class="form-control cual-razon" placeholder="otra razón" name="otraRazon"></div></div><hr> <div class="row"><div class="col-md-3">6.1  ¿Se encuentra  afiliado al Sistema General de Seguridad en Salud(SGSSS)?</div> <div class="col-md-3">  <select class="form-control sistema-salud" name="enfermedad"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div> <div class="col-md-3"> 6.2 Regimen de afiliación </div> <div class="col-md-3"> <select class="form-control regimen" name="regime" id="regimen"> </select> </div><div class="col-md-10"> 6.3 ¿Presenta alguna enfermedad crónica, transmitible permanente o transitoria?</div><div class="col-md-2"><select class="form-control bool-enfermedad" name="enfermedad"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select> </div><div class="col-md-3"> ¿cuál Enfremedad? </div><div class="col-md-3"><input type="text" class="form-control enfermedad" placeholder="¿Cúal enfermedad?" name="nombreEnfermedad"></div><div class="col-md-3">6.4 ¿Tiene Diagnostico que lo acredite?</div><div class="col-md-3"><select class="form-control diagnostico" name="diagnostico"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div></div></div>';
        $('#servicios').append($servicios);
        $economica = '<div class="panel-default" id="economica' +
                index + '"><div class="panel-heading"><h4>' +
                $(this).val() + ' ' + $(apell[index]).val() + '</h4></div><div class="row"><div class="col-md-2">7.2 Soporte de Ingresos</div><div class="col-md-2"><select class="form-control soporte" id="soporte" name="soporte"></select></div><div class="col-md-2">7.3 Ocupación</div><div class="col-md-2"><select class="form-control ocupacion" id="ocupacion" name="ocupacion"></select></div><div class="col-md-2">7.4 Lugar de Trabajo</div><div class="col-md-2"><select class="form-control lugar" id="lugar" name="lugar"></select></div></div><div class="row"><div class="col-md-5">7.10 Seleccione la destinación que tiene el predio en alto riesgo (PAR)</div><div class="col-md-2"><select class="form-control destinacion" id="destinacion" name="destinacion"></select></div></div><div class="actividad-inmueble"><hr><div class="row "><div class="col-md-1">7.10.1 Actividad Realizada</div><div class="col-md-2"><input type="text" class="form-control actividad" name="actividad" placeholder="Actividad"/></div><div class="col-md-2"><input type="checkbox" class="formalizacion" name="formalizacion"/>7.10.2 ¿Esta formalizada su actividad?</div>   <div class="col-md-1">7.10.3 Razon Social</div><div class="col-md-2"><input type="text" class="form-control razon-social" name="actividad" placeholder="Actividad"/></div><div class="col-md-1">7.10.4 Propietarios</div><div class="col-md-3"><textarea class="form-control propietarios" name="propietarios" placeholder="Ponga el nombre de los propietarios separado por coma"></textarea></div></div><div class="row "><div class="col-md-1">7.10.5 Ubicación de Clientes</div><div class="col-md-2"><select class="form-control ubicacion-clientes" id="ubiclientes" name="ubiclientes"></select></div><div class="col-md-3">7.10.6 Valor aproximado para el desarrollo de la actividad</div><div class="col-md-2"><input type="number"  value=0 class="form-control valdesarrollo" name="valdesarrollo" placeholder="valor"/></div><div class="col-md-1">7.10.7 Producción Mensual</div><div class="col-md-3"><input type="number" class="form-control valproduccion" name="valproduccion" value=0 placeholder="valor de la producción"/></div></div><div class="row"><div class="col-md-1">7.10.8 Valor herramientas</div><div class="col-md-2"><input type="number" value=0 class="form-control valherramientas" name="valherramientas" placeholder="valor de las herramientas y/o maquinaria"/></div>  </div></div></div>';
        $('#economica').append($economica);
//        $sociocultural = '<div class="row" id="sociocultura' +
//                index + '"><div class="col-md-2">' +
//                $(this).val() + ' ' + $(apell[index]).val() + '</div><div class="col-md-3"><select class="form-control actividad-barrio" name="actividad"><option value="0" selected >seleccione...</option><option value="1"  >Religiosas</option><option value="2"  >Deportivas</option><option value="3"  >Espirituales</option></select></div><div class="col-md-3"><select class="form-control relaciones" name="relaciones"><option value="0" selected >seleccione...</option><option value="1"  >solidarias</option><option value="2"  >Amigables</option><option value="3"  >Indiferentes</option><option value="4"  >Conflictivas</option></select></div><div class="col-md-1 checkit hidden"><input type="checkbox" class="organiZona" name="" /></div><div class="col-md-3 hidden"><input type="text" class="form-control organi-zona" name="organiZona" placeholder="Ejemplo: Junta de acción comunal "/></div></div>';
//        $('#sociocultural').append($sociocultural);

    });

}
function generarDimensionesMiembro() {
    var apell = $('.apellido');
    $('.nombre').each(function (index) {
        $caracterizacion = '<div class="panel-default" ><div class="panel-heading" >' +
                $(this).val() + ' ' + $(apell[index]).val() + '</div><div class="panel-body" ><div class="row" id="caracterizacion0"><div class="col-md-4"> 3.1 Etnia<select class="form-control etnia" name="etnia" id="etnia">   </select></div><div class="col-md-4">3.3 Orientación Sexual<select class="form-control orientacion" name="orientacion" id="orientacion"></select></div><div class="col-md-4">3.4 Discapacidad<select  class="form-control discapacidad" name="discapacidad" id="discapacidad"></select></div></div><div class="row" ><div class="col-md-4 center-orientation">3.5 Madre/Padre Cabeza de familia<select class="form-control cabeza" name="cabeza"><option value=null >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4">3.6 victima del Conflicto <select class="form-control victima" name="victima"><option value=null >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4">3.7 ¿Registro Unico de victimas?<select class="form-control ruv" name="ruv" disabled="disabled"><option value=null >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4 ">3.8 Desplazado por Violencia <select class="form-control desplazado" name="desplazado" disabled="disabled"><option value=null  >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4 ">3.9 ¿Quisiera retornar?<select class="form-control retorno" name="retorno" disabled="disabled"><option value=null selected >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div><div class="col-md-4">3.10 Desmovilizado<select class="form-control desmovilizado" name="desmovilizado"><option value=null  >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div></div></div></div>';
        $('#caracterizacion').append($caracterizacion);
        $servicios = '<div class="panel-default" id="servicios' +
                index + '"><div class="panel-heading">' +
                $(this).val() + ' ' + $(apell[index]).val() + '</div> <div class="panel-body"><div class="row"><div class="col-md-3">4.1 ¿Recibe Algun tipo de ayuda estatal?</div><div class="col-md-3"><select class="form-control ayuda" name="ayuda" id="ayuda"> </select></div><div class="col-md-3">4.2 Si es otro tipo de ayuda diga ¿Cúal?</div><div class="col-md-3"> <input type="text" class="form-control ayuda-cual" placeholder="otro" name="otraAyuda"></div></div><hr><div class="row"><div class="col-md-3"> 5.1 ¿Sabe leer y escribir?   </div><div class="col-md-3"><select class="form-control lectura" name="lectura" required="required" > <option value="null">Slecciona...</option><option value="false">No</option><option value="true">Si</option></select></div><div class="col-md-3">5.2   Ultimo grado aprobado:</div><div class="col-md-3"><select class="form-control grado" name="grado" id="grado"></select></div><div class="col-md-10">5.4 ¿Asiste a Hogar ICBF, jardin infantil, casa vecinal SDIS?</div> <div class="col-md-2">  <select class="form-control jardin" name="enfermedad"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div> <br><br>   </div>   <div class="row"><div class="col-md-3">5.3 ¿Estudia actualmente? </div><div class="col-md-3"><select class="form-control estudio" name="estudio" id="estudio" required="required"><option >Seleccione...</option><option value="1">Si</option><option value="2">No</option></select></div></div><div class="row"><div class="col-md-3"> 5.4 ¿cuál es la razon por la cuál no estudia? </div><div class="col-md-3"><select class="form-control razones" name="rason_no_estudio" id="rason_no_estudio"><option value="0">Seleccione...</option><option value="1">Considera que no está en edad de estudiar.</option><option value="2">Considera que ya terminó</option><option value="3">Costos educativos elevados</option><option value="4">Falta de dinero</option><option value="5">Debe encargarse de las labores domésticas y/o del cuidado de niño(a)s y otras personas del hogar</option><option value="6">Necesita trabajar o buscar trabajo</option><option value="7">No le gusta o no le interesa el estudio</option><option value="8">Se casó o formó pareja</option><option value="9">Falta de cupos</option><option value="10">No existe centro educativo cercano ó el establecimiento asignado es muy lejano</option><option value="11">Necesita Educación Especial</option><option value="12">Por embarazo</option><option value="13">Por enfermedad</option><option value="14">Otra razón</option></select></div><div class="col-md-3"> Si seleccionó otro diga ¿Cuál?: </div><div class="col-md-3"><input type="text" class="form-control cual-razon" placeholder="otra razón" name="otraRazon"></div></div><hr> <div class="row"><div class="col-md-3">6.1  ¿Se encuentra  afiliado al Sistema General de Seguridad en Salud(SGSSS)?</div> <div class="col-md-3">  <select class="form-control sistema-salud" name="enfermedad"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div> <div class="col-md-3"> 6.2 Regimen de afiliación </div> <div class="col-md-3"> <select class="form-control regimen" name="regime" id="regimen"> </select> </div><div class="col-md-10"> 6.3 ¿Presenta alguna enfermedad crónica, transmitible permanente o transitoria?</div><div class="col-md-2"><select class="form-control bool-enfermedad" name="enfermedad"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select> </div><div class="col-md-3"> ¿cuál Enfremedad? </div><div class="col-md-3"><input type="text" class="form-control enfermedad" placeholder="¿Cúal enfermedad?" name="nombreEnfermedad"></div><div class="col-md-3">6.4 ¿Tiene Diagnostico que lo acredite?</div><div class="col-md-3"><select class="form-control diagnostico" name="diagnostico"><option value="null" >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div></div></div>';
        $('#servicios').append($servicios);
        $economica = '<div class="panel-default" id="economica' +
                index + '"><div class="panel-heading"><h4>' +
                $(this).val() + ' ' + $(apell[index]).val() + '</div><div class="panel-body"><div class="row"><div class="col-md-3">4.1 ¿Recibe Algun tipo de ayuda estatal?</div><div class="col-md-3"><select class="form-control ayuda" name="ayuda" id="ayuda"></select></div><div class="col-md-3">4.2 Si es otro tipo de ayuda diga ¿Cúal?</div><div class="col-md-3"> <input type="text"  class="form-control ayuda-cual" placeholder="otro" name="otraAyuda" disabled="disabled" /></div></div><hr><div class="row"><div class="col-md-3"><input class=" lectura" type="checkbox" name="lectura"/> 5.1 ¿Sabe leer y escribir?   </div><div class="col-md-3">5.2   Ultimo grado aprobado:</div><div class="col-md-3"><select class="form-control grado" name="grado" id="grado"></select> </div><div class="col-md-3"> <input class=" jardin" type="checkbox" name="jardin">5.4 ¿Asiste a Hogar ICBF, jardin infantil, casa vecinal SDIS?</div>                            </div>                            <div class="row"><div class="col-md-3">5.3 ¿Estudia actualmente? </div><div class="col-md-3"><select class="form-control si-no estudio" name="estudio" id="estudio"></select> </div></div><div class="row"><div class="col-md-3"> 5.4 ¿cuál es la razon por la cuál no estudia? </div><div class="col-md-3"><select class="form-control razones" name="rason_no_estudio" id="rason_no_estudio" disabled="disabled"></select> </div><div class="col-md-3"> Si seleccionó otro diga ¿Cuál?: </div><div class="col-md-3"><input type="text"  class="form-control cual-razon" placeholder="otra razón" name="otraRazon" disabled="disabled" /></div></div><hr> <div class="row"><div class="col-md-6"><input class="sistema-salud" type="checkbox" name="sisalud"/>6.1  ¿Se encuentra  afiliado al Sistema General de Seguridad en Salud(SGSSS)?</div> <div class="col-md-3"> 6.2 Regimen de afiliación </div> <div class="col-md-3">   <select class="form-control regimen" name="regime" id="regimen" ></select> </div><div class="col-md-8"> 6.3 ¿Presenta alguna enfermedad crónica, transmitible permanente o transitoria?</div><div class="col-md-3"><select class="form-control bool-enfermedad" name="enfermedad"><option value="null" selected="">Seleccione...</option><option value="true">Si</option><option value="false">No</option></select> </div> <div class="col-md-3"> ¿cuál Enfremedad? </div> <div class="col-md-3"><input type="text"  class="form-control enfermedad" placeholder="¿Cúal enfermedad?" name="nombreEnfermedad" disabled="disabled" /></div> <div class="col-md-3">6.4 ¿Tiene Diagnostico que lo acredite?</div><div class="col-md-3"><select class="form-control diagnostico" name="diagnostico" disabled="disabled"><option value=null selected >Seleccione...</option><option value="true">Si</option><option value="false">No</option></select></div></div></div></div>';
        $('#economica').append($economica);
//        $sociocultural = '<div class="row" id="sociocultura' +
//                index + '"><div class="col-md-2">' +
//                $(this).val() + ' ' + $(apell[index]).val() + '</div><div class="col-md-3"><select class="form-control actividad-barrio" name="actividad"><option value="0" selected disabled>seleccione...</option><option value="1"  >Religiosas</option><option value="2"  >Deportivas</option><option value="3"  >Espirituales</option></select></div><div class="col-md-3"><select class="form-control relaciones" name="relaciones"><option value="0" selected disabled>seleccione...</option><option value="1"  >Amigables</option><option value="2"  >Indiferentes</option><option value="3"  >Conflictivas</option></select></div><div class="col-md-1 checkit hidden"><input type="checkbox" class="organiZona" name="" /></div><div class="col-md-3 hidden"><input type="text" class="form-control organi-zona" name="organiZona" placeholder="Ejemplo: Junta de acción comunal "/></div></div>';
//        $('#sociocultural').append($sociocultural);

    });

}

function datos() {
    items_etnia = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Afrocolombiano"}, option2: {value: 2, text: "Indígena"}, option3: {value: 3, text: "ROM o Gitano"}, option4: {value: 4, text: "Raizal"}, option5: {value: 5, text: "Ninguna de las anteriores"}};

    $.each(items_etnia, function (i, item) {
        $('.etnia').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });


    items_genero = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Masculino"}, option2: {value: 2, text: "Femenino"}, option3: {value: 3, text: "Transgénero"}};

    $.each(items_genero, function (i, item) {
        $('.genero').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_orientacion = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Homosexual"}, option2: {value: 2, text: "Heterosexual"}, option3: {value: 3, text: "Bisexual"}};

    $.each(items_orientacion, function (i, item) {
        $('.orientacion').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_discapacidad = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Física"}, option2: {value: 2, text: "Mental"}, option3: {value: 3, text: "Cognitiva"}, option4: {value: 4, text: "Sensorial"}, option5: {value: 5, text: "Múltiple"}, option6: {value: 6, text: "No aplica"}};

    $.each(items_discapacidad, function (i, item) {
        $('.discapacidad').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_ayuda = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Adulto Mayor"}, option2: {value: 2, text: "Madre Cabeza de familia"}, option3: {value: 3, text: "Discapacidad"}, option4: {value: 4, text: "Primera Infancia"}, option5: {value: 5, text: "Madre Gestante/lactante"}, option6: {value: 6, text: "Otro"}, option7: {value: 7, text: "No"}};
    $.each(items_ayuda, function (i, item) {
        $('.ayuda').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });


    items_grado = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Pre-escolar"}, option2: {value: 2, text: "Básica Primaria (1ro a 5to)"}, option3: {value: 3, text: "Bachillerato Básico (6to a 9no)"}, option4: {value: 4, text: "Bachillerato Completo"}, option5: {value: 5, text: "Técnica Profesional"}, option6: {value: 6, text: "Tecnológica"}, option7: {value: 7, text: "Profesional"}, option8: {value: 8, text: "Especialización"}, option9: {value: 9, text: "Ninguno"}, option10: {value: 10, text: "Otro ¿Cúal?"}};
    $.each(items_grado, function (i, item) {
        $('.grado').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_tiempollegar = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "De 10 a 30 minutos"}, option2: {value: 2, text: "De 31 a 60 minutos"}, option3: {value: 3, text: "Más de 60 minutos"}, option4: {value: 4, text: "No Aplica"}};
    $.each(items_tiempollegar, function (i, item) {
        $('.tiempollegar').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_regimen = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Contributivo"}, option2: {value: 2, text: "Subsidiado"}, option3: {value: 3, text: "Especial"}, option4: {value: 4, text: "No afiliado"}, option5: {value: 5, text: "No sabe/No responde"}};
    $.each(items_regimen, function (i, item) {
        $('.regimen').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_ingresos = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Menos de 1 SMMLV"}, option2: {value: 2, text: "Entre 1 y 2 SMMLV"}, option3: {value: 3, text: "De 2 a 3 SMMLV"}, option4: {value: 4, text: "Más de 3 SMMLV"}, option5: {value: 5, text: "No Genera ingresos"}};
    $.each(items_ingresos, function (i, item) {
        $('.ingresos').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_soporte = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Certificación laboral"}, option2: {value: 2, text: "Declaración Juramentada"}, option3: {value: 3, text: "Certificación de Ingresos"}, option4: {value: 4, text: "Certificación bancaria"}, option5: {value: 5, text: "Otro"}, option6: {value: 6, text: "Ninguno"}};
    $.each(items_soporte, function (i, item) {
        $('.soporte').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_ocupacion = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Empleado"}, option2: {value: 2, text: "Pensionado"}, option3: {value: 3, text: "Estudiante"}, option4: {value: 4, text: "Trabajador familiar sin remuneración (hogar)"}, option5: {value: 5, text: "Trabajador independiente"}, option6: {value: 6, text: "Patrón o empleador"}, option7: {value: 7, text: "Trabajo Informal"}, option8: {value: 8, text: "Desempleado"}, option9: {value: 9, text: "Recuperador Ambiental"}, option10: {value: 10, text: "Fuerzas Militares"}, option11: {value: 11, text: "En Busca de Empleo"}};
    $.each(items_ocupacion, function (i, item) {
        $('.ocupacion').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_lugar = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "En el domicilio"}, option2: {value: 2, text: "En el barrio"}, option3: {value: 3, text: "En la localidad"}, option4: {value: 4, text: "En la ciudad"}, option5: {value: 5, text: "Fuera de la ciudad"}, option6: {value: 6, text: "No aplica"}};
    $.each(items_lugar, function (i, item) {
        $('.lugar').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    items_destinacion = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Residencial"}, option2: {value: 2, text: "Comercio"}, option3: {value: 3, text: "Industria"}, option4: {value: 4, text: "Agrícola-Pecuario"}, option5: {value: 5, text: "Arriendo"}, option6: {value: 6, text: "Mixta (Residencial + Actividad Productiva)"}};
    $.each(items_destinacion, function (i, item) {
        $('.destinacion').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    op_sino = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Si"}, option2: {value: 2, text: "No"}};
    $.each(op_sino, function (i, item) {
        $('.si-no').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });
    lugar_estudio = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Preescolar"}, option2: {value: 2, text: "Colegio"}, option3: {value: 3, text: "Universidad"}};
    $.each(lugar_estudio, function (i, item) {
        $('.lugar-estudio').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });
    razones = {
        option: {value: 0, text: "Seleccione..."},
        option1: {value: 1, text: "Considera que no está en edad de estudiar."},
        option2: {value: 2, text: "Considera que ya terminó"},
        option3: {value: 3, text: "Costos educativos elevados"},
        option4: {value: 4, text: "Falta de dinero"},
        option5: {value: 5, text: "Debe encargarse de las labores domésticas y/o del cuidado de niño(a)s y otras personas del hogar"},
        option6: {value: 6, text: "Necesita trabajar o buscar trabajo"},
        option7: {value: 7, text: "No le gusta o no le interesa el estudio"},
        option8: {value: 8, text: "Se casó o formó pareja"},
        option9: {value: 9, text: "Falta de cupos"},
        option10: {value: 10, text: "No existe centro educativo cercano ó el establecimiento asignado es muy lejano"},
        option11: {value: 11, text: "Necesita Educación Especial"},
        option12: {value: 12, text: "Por embarazo"},
        option13: {value: 13, text: "Por enfermedad"},
        option14: {value: 14, text: "Otra razón"}
    };
    $.each(razones, function (i, item) {
        $('.razones').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });
    ubicaciones = {option: {value: 0, text: "Seleccione..."}, option1: {value: 1, text: "Local"}, option2: {value: 2, text: "Regional"}, option3: {value: 3, text: "Nacional"}, option4: {value: 4, text: "Internacional"}};
    $.each(ubicaciones, function (i, item) {
        $('.ubicacion-clientes').append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });
    itemsCiudad();
}

function mostrarMiembro(index) {
    var miembros = $('.miembro');
    if ($(miembros[index]).css('display') === 'block') {
        $(miembros[index]).css('display', 'none');

    } else {
        $(miembros[index]).css('display', 'block');

    }
    //console.log(index);
}


function siguiente(boton) {
    var curStep = $(boton).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }
    if (isValid)
        nextStepWizard.removeAttr('disabled').trigger('click');
}
function comportamientos() {
    $('.destinacion').on('change', function (event) {
        $(event.target).val() !== "1" && $(event.target).val() !== "0" ? $(event.target).parent().parent().parent().children('.actividad-inmueble').show() : $(event.target).parent().parent().parent().children('.actividad-inmueble').hide();
    });
    $('.ayuda').on('change', function (event) {
        $(event.target).val() === "6" ? $(event.target).parent().parent().parent().children('.ayuda-cual').attr('disabled', false) : $(event.target).parent().parent().parent().children('.ayuda-cual').attr('disabled', false);
    });
    $('select[name="victima"]').on('change', function (event) {
        $(event.target).val() === "si" ? $(event.target).parent().parent().parent().find('select[name="ruv"]').attr('disabled', false) : $(event.target).parent().parent().parent().find('select[name="ruv"]').attr('disabled', false);
        $(event.target).val() === "si" ? $(event.target).parent().parent().parent().find('select[name="ruv"]').attr('disabled', false) : $(event.target).parent().parent().parent().find('select[name="ruv"]').attr('disabled', false);
    });
    $('select[name="desplazado"]').on('change', function (event) {
        $(event.target).val() === "si" ? $(event.target).parent().parent().parent().find('select[name="retorno"]').attr('disabled', false) : $(event.target).parent().parent().parent().find('select[name="retorno"]').attr('disabled', false);
        $(event.target).val() === "si" ? console.log($(event.target).parent().parent().parent().find('select[name="retorno"]')) : console.log("falso");
    });

}
function enviarDatos() {
    $identificador = $('#identificador').val();
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

    for (var i = 0; i < $nombres.length; i++) {
        $nombre = $nombres[i];
        $segundo = $segundos_nombres[i];
        $apellido = $apellidos[i];
        $apellido_dos = $segundos_apellidos[i];
        $nacimiento = $fechas_nacimiento [i];
        $ciudad = $ciudades_nacimiento [i];
        $tipo_doc = $tipos_documento[i];
        $expedicion = $expediciones_documento[i];
        $num_doc = $numeros_documento [i];
        $grupo_etareo = $grupos_etareos[i];
        $est_civil = $estados_civiles[i];
        $sexo = $sexos[i];
        $parentesco = $parentescos[i];
        $datos = {
            op: 'salvar_miembro_caracterizacion',
            orden: i + 1,
            identificador: $identificador,
            tipofamilia: $('#tipofamilia').val(),
            nombre: $($nombre).val(),
            segundo_nombre: $($segundo).val(),
            apellido: $($apellido).val(),
            segundo_apellido: $($apellido_dos).val(),
            nacimiento: $($nacimiento).val() !== '' ? "'" + $($nacimiento).val() + "'" : 'NULL',
            ciudad: $($ciudad).val(),
            tipo_doc: $($tipo_doc).val(),
            expedicion: $($expedicion).val() !== '' ? "'" + $($expedicion).val() + "'" : 'NULL',
            num_doc: $($num_doc).val(),
            grupo_etareo: $($grupo_etareo).val(),
            est_civil: $($est_civil).val(),
            parentesco: $($parentesco).val(),
            sexo: $($sexo).val()

        };
        $.ajax({
            type: "GET",
            url: "GestionDML",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {
                if (response)
                {
                    if ($.inArray(response[0].id_miembro, $miembros_ids) === -1) {
                        $miembros_ids.push(response[0].id_miembro);
                    }
                }
            }
        });
    }
}
function creaCaracterizacion() {

//    
    //console.log('entra');
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: {
            op: "informacion_ficha_social_mimebros",
            identificador: $('#identificador').val()
        },
        timeout: 1000,
        dataType: "json",
        async: false,
        success: function (response) {
            generarDimensiones();
            datos();
            comportamientos();
            $etnias = $('.etnia');
            $orientaciones = $('.orientacion');
            $discapacidades = $('.discapacidad');
            $cabezas_familia = $('.cabeza');
            $victimas = $('.victima');
            $desplazados = $('.desplazado');
            $desmovilizados = $('.desmovilizado');
            $registros_victimas = $('.ruv');
            $retornos = $('.retorno');
            $ayudas = $('.ayuda');
            $otras_ayudas = $('.ayuda-cual');
            $grados = $('.grado');
            $jardines = $('.jardin');
            $tiempos = $('.tiempollegar');
            $sistemas_salud = $('.sistema-salud');
            $regimenes_salud = $('.regimen');
            $enfermedades_bool = $('.bool-enfermedad');
            $enfermedades = $('.enfermedad');
            $diagnosticos = $('.diagnostico');
            $lectoescrituras = $('.lectura');
            $ingresos = $('.ingresos');
            $soportes = $('.soporte');
            $ocupaciones = $('.ocupacion');
            $lugares = $('.lugar');
            $destinaciones = $('.destinacion');
            $actividades = $('.actividad');
            $formalizaciones = $('.formalizacion');
            $razones_sociales = $('.razon-social');
            $propietarios = $('.propietarios');
            $ubicaciones_clientes = $('.ubicacion-clientes');
            $valores_desarrollo = $('.valdesarrollo');
            $valores_produccion = $('.valproduccion');
            $valores_herramientas = $('.valherramientas');
//            $actividades_barrio = $('.actividad-barrio');
//            $relaciones_barrio = $('.relaciones');
            $organizaciones_zona = $('.organi-zona');
            $bool_zonaz = $('.organiZona');
            $studios_actuales = $('.estudio');
            $lugares_estudio = $('.lugar-estudio');
            $razones = $('.razones');
            $otras_razones = $('.cual-razon');
            $actividades_in = $('.actividad-inmueble');
            if (response.length > 0) {
                $.each(response, function (index, value) {
                    $etnia = $etnias[index];
                    $($etnia).val(value['etnia']);
                    $orientacion = $orientaciones[index];
                    $($orientacion).val(value['orientacion_sexual']);
                    $victima = $victimas[index];

                    if (value['victima_conflicto'] !== undefined)
                        $($victima).val(value['victima_conflicto'] + '');
                    $registro_victima = $registros_victimas[index];
                    if (value['ruv_victimas'] !== undefined)
                        $($registro_victima).val(value['ruv_victimas'] + '');
                    $discapacidad = $discapacidades[index];
                    $($discapacidad).val(value['discapacidad']);
                    $cabeza_familia = $cabezas_familia[index];
                    if (value['cabeza_familia'] !== undefined)
                        $($cabeza_familia).val(value['cabeza_familia'] + '');
                    $desplazado = $desplazados[index]
                    if (value['desplazado'] !== undefined)
                        $($desplazado).val(value['desplazado'] + '');
                    $retorno = $retornos[index];
                    if (value['retorno_desplazado'] !== undefined)
                        $($retorno).val(value['retorno_desplazado'] + '');
                    $desmovilizado = $desmovilizados[index];
                    if (value['desmoviilzado'] !== undefined)
                        $($desmovilizado).val(value['desmoviilzado'] + '');
                    $ayuda = $ayudas[index];
                    $($ayuda).val(value['ayuda_estatal']);
                    $otra_ayuda = $otras_ayudas[index];
                    $($otra_ayuda).val(value['otra_ayuda_estatal']);
                    if (value['otra_ayuda_estatal'] === "")
                        $($otra_ayuda).attr("disabled", true);
                    $grado = $grados[index];
                    $($grado).val(value['ultimo_grado_aprobado']);
                    $jardin = $jardines[index];
                    if (value['asistenacia_institucion_infantil'] !== undefined)
                        $($jardin).val(value['asistenacia_institucion_infantil'] + '');
                    $tiempo = $tiempos[index];
                    $($tiempo).val(value['tiempo_llegada']);
                    $sistema_salud = $sistemas_salud[index];
                    if (value['sistema_salud'] !== undefined)
                        $($sistema_salud).val(value['sistema_salud'] + '');
                    $regimen_salud = $regimenes_salud[index];
                    $($regimen_salud).val(value['regimen_salud']);
                    $enfermedad_bool = $enfermedades_bool[index];
                    if (value['enfermedad_cronica'] !== undefined && value['enfermedad_cronica'] !== '')
                        $($enfermedad_bool).val('true');
                    $enfermedad = $enfermedades[index];
                    $($enfermedad).val(value['enfermedad_cronica']);
                    $diagnostico = $diagnosticos[index];
                    if (value['doc_diagnostico'] !== undefined)
                        $($diagnostico).val(value['doc_diagnostico'] + '');
                    $lectoescritura = $lectoescrituras[index];
                    if (value['lectoescritura'] !== undefined)
                        $($lectoescritura).val(value['lectoescritura'] + '');
                    $ingreso = $ingresos[index];
                    $($ingreso).val(value['ingreso_promedio']);
                    $soporte = $soportes[index];
                    $($soporte).val(value['soporte_ingresos']);
                    $ocupacion = $ocupaciones[index];
                    $($ocupacion).val(value['ocupacion_persona']);
                    $lugar = $lugares[index];
                    $($lugar).val(value['lugar_trabajo']);
                    $destinacion = $destinaciones[index];
                    $($destinacion).val(value['destinacion_par']);
                    $actividad = $actividades[index];
                    $($actividad).val(value['actividad_par']);
                    $formalizacion = $formalizaciones[index];
                    $($formalizacion).attr('checked', value['actividad_formalizada']);
                    $razon_social = $razones_sociales[index];
                    $($razon_social).val(value['razon_social']);
                    $propietario = $propietarios[index];
                    $($propietario).val(value['otros_propietarios']);
                    $ubicacion_clientes = $ubicaciones_clientes[index];
                    $($ubicacion_clientes).val(value['ubicacion_clientes']);
                    $valor_desarrollo = $valores_desarrollo[index];
                    $($valor_desarrollo).val(value['valor_desarrollo_actividad']);
                    $valor_produccion = $valores_produccion[index];
                    $($valor_produccion).val(value['produccion_mensual']);
                    $valor_herramientas = $valores_herramientas[index];
                    $($valor_herramientas).val(value['valor_herramientas']);
//                    $actividad_barrio = $actividades_barrio[index];
                    $('#actividad-barrio').val(value['actividades_zona']);
//                    $relacion_barrio = $relaciones_barrio[index];
                    $('#relaciones').val(value['relacion_barrio']);
                    $organizacion_zona = $organizaciones_zona[index];
                    $($organizacion_zona).val(value['pretenencia_organizacion_zona']);
                    $bool_zona = $bool_zonaz[index];
                    $($bool_zona).attr('checked', value['pretenencia_organizacion_zona'] === "" ? false : true);
                    $studio_actual = $studios_actuales[index];
                    $lugar_estudio = $lugares_estudio[index];
                    $razon = $razones[index];
                    $otra_razon = $otras_razones[index];
                    $($studio_actual).val((value['estudia_actualmente'] ? 1 : 2));
                    $($lugar_estudio).val(value['lugar_estudio']);
                    $($razon).val(value['razon_no_estudio']);
                    $($otra_razon).val(value['cual_razon']);
                    $act = $actividades_in[index];
                    if (value['destinacion_par'] !== 1 && value['destinacion_par'] !== 0) {
                        $($act).show();
                    }
                });

//                            
//
//

            }
            eventosControl();
        }
    });
}
function itemsCiudad() {
    items_ciudad = [
        {
            "id": 0,
            "departamento": "sin informacion",
            "ciudades": [
                "Sin informacion"
            ]
        },
        {
            "id": 0,
            "departamento": "Amazonas",
            "ciudades": [
                "Leticia",
                "Puerto Nari\u00f1o"
            ]
        },
        {
            "id": 1,
            "departamento": "Antioquia",
            "ciudades": [
                "Abejorral",
                "Abriaqu\u00ed",
                "Alejandr\u00eda",
                "Amag\u00e1",
                "Amalfi",
                "Andes",
                "Angel\u00f3polis",
                "Angostura",
                "Anor\u00ed",
                "Anz\u00e1",
                "Apartad\u00f3",
                "Arboletes",
                "Argelia",
                "Armenia",
                "Barbosa",
                "Bello",
                "Belmira",
                "Betania",
                "Betulia",
                "Brice\u00f1o",
                "Buritic\u00e1",
                "C\u00e1ceres",
                "Caicedo",
                "Caldas",
                "Campamento",
                "Ca\u00f1asgordas",
                "Caracol\u00ed",
                "Caramanta",
                "Carepa",
                "Carolina del Pr\u00edncipe",
                "Caucasia",
                "Chigorod\u00f3",
                "Cisneros",
                "Ciudad Bol\u00edvar",
                "Cocorn\u00e1",
                "Concepci\u00f3n",
                "Concordia",
                "Copacabana",
                "Dabeiba",
                "Donmat\u00edas",
                "Eb\u00e9jico",
                "El Bagre",
                "El Carmen de Viboral",
                "El Pe\u00f1ol",
                "El Retiro",
                "El Santuario",
                "Entrerr\u00edos",
                "Envigado",
                "Fredonia",
                "Frontino",
                "Giraldo",
                "Girardota",
                "G\u00f3mez Plata",
                "Granada",
                "Guadalupe",
                "Guarne",
                "Guatap\u00e9",
                "Heliconia",
                "Hispania",
                "Itag\u00fc\u00ed",
                "Ituango",
                "Jard\u00edn",
                "Jeric\u00f3",
                "La Ceja",
                "La Estrella",
                "La Pintada",
                "La Uni\u00f3n",
                "Liborina",
                "Maceo",
                "Marinilla",
                "Medell\u00edn",
                "Montebello",
                "Murind\u00f3",
                "Mutat\u00e1",
                "Nari\u00f1o",
                "Nech\u00ed",
                "Necocl\u00ed",
                "Olaya",
                "Peque",
                "Pueblorrico",
                "Puerto Berr\u00edo",
                "Puerto Nare",
                "Puerto Triunfo",
                "Remedios",
                "Rionegro",
                "Sabanalarga",
                "Sabaneta",
                "Salgar",
                "San Andr\u00e9s de Cuerquia",
                "San Carlos",
                "San Francisco",
                "San Jer\u00f3nimo",
                "San Jos\u00e9 de la Monta\u00f1a",
                "San Juan de Urab\u00e1",
                "San Luis",
                "San Pedro de Urab\u00e1",
                "San Pedro de los Milagros",
                "San Rafael",
                "San Roque",
                "San Vicente",
                "Santa B\u00e1rbara",
                "Santa Fe de Antioquia",
                "Santa Rosa de Osos",
                "Santo Domingo",
                "Segovia",
                "Sons\u00f3n",
                "Sopetr\u00e1n",
                "T\u00e1mesis",
                "Taraz\u00e1",
                "Tarso",
                "Titirib\u00ed",
                "Toledo",
                "Turbo",
                "Uramita",
                "Urrao",
                "Valdivia",
                "Valpara\u00edso",
                "Vegach\u00ed",
                "Venecia",
                "Vig\u00eda del Fuerte",
                "Yal\u00ed",
                "Yarumal",
                "Yolomb\u00f3",
                "Yond\u00f3",
                "Zaragoza"
            ]
        },
        {
            "id": 2,
            "departamento": "Arauca",
            "ciudades": [
                "Arauca",
                "Arauquita",
                "Cravo Norte",
                "Fortul",
                "Puerto Rond\u00f3n",
                "Saravena",
                "Tame"
            ]
        },
        {
            "id": 3,
            "departamento": "Atl\u00e1ntico",
            "ciudades": [
                "Baranoa",
                "Barranquilla",
                "Campo de la Cruz",
                "Candelaria",
                "Galapa",
                "Juan de Acosta",
                "Luruaco",
                "Malambo",
                "Manat\u00ed",
                "Palmar de Varela",
                "Pioj\u00f3",
                "Polonuevo",
                "Ponedera",
                "Puerto Colombia",
                "Repel\u00f3n",
                "Sabanagrande",
                "Sabanalarga",
                "Santa Luc\u00eda",
                "Santo Tom\u00e1s",
                "Soledad",
                "Su\u00e1n",
                "Tubar\u00e1",
                "Usiacur\u00ed"
            ]
        },
        {
            "id": 4,
            "departamento": "Bol\u00edvar",
            "ciudades": [
                "Ach\u00ed",
                "Altos del Rosario",
                "Arenal",
                "Arjona",
                "Arroyohondo",
                "Barranco de Loba",
                "Brazuelo de Papayal",
                "Calamar",
                "Cantagallo",
                "Cartagena de Indias",
                "Cicuco",
                "Clemencia",
                "C\u00f3rdoba",
                "El Carmen de Bol\u00edvar",
                "El Guamo",
                "El Pe\u00f1\u00f3n",
                "Hatillo de Loba",
                "Magangu\u00e9",
                "Mahates",
                "Margarita",
                "Mar\u00eda la Baja",
                "Momp\u00f3s",
                "Montecristo",
                "Morales",
                "Noros\u00ed",
                "Pinillos",
                "Regidor",
                "R\u00edo Viejo",
                "San Crist\u00f3bal",
                "San Estanislao",
                "San Fernando",
                "San Jacinto del Cauca",
                "San Jacinto",
                "San Juan Nepomuceno",
                "San Mart\u00edn de Loba",
                "San Pablo",
                "Santa Catalina",
                "Santa Rosa",
                "Santa Rosa del Sur",
                "Simit\u00ed",
                "Soplaviento",
                "Talaigua Nuevo",
                "Tiquisio",
                "Turbaco",
                "Turban\u00e1",
                "Villanueva",
                "Zambrano"
            ]
        },
        {
            "id": 5,
            "departamento": "Boyac\u00e1",
            "ciudades": [
                "Almeida",
                "Aquitania",
                "Arcabuco",
                "Bel\u00e9n",
                "Berbeo",
                "Bet\u00e9itiva",
                "Boavita",
                "Boyac\u00e1",
                "Brice\u00f1o",
                "Buenavista",
                "Busbanz\u00e1",
                "Caldas",
                "Campohermoso",
                "Cerinza",
                "Chinavita",
                "Chiquinquir\u00e1",
                "Ch\u00edquiza",
                "Chiscas",
                "Chita",
                "Chitaraque",
                "Chivat\u00e1",
                "Chivor",
                "Ci\u00e9nega",
                "C\u00f3mbita",
                "Coper",
                "Corrales",
                "Covarach\u00eda",
                "Cubar\u00e1",
                "Cucaita",
                "Cu\u00edtiva",
                "Duitama",
                "El Cocuy",
                "El Espino",
                "Firavitoba",
                "Floresta",
                "Gachantiv\u00e1",
                "G\u00e1meza",
                "Garagoa",
                "Guacamayas",
                "Guateque",
                "Guayat\u00e1",
                "G\u00fcic\u00e1n",
                "Iza",
                "Jenesano",
                "Jeric\u00f3",
                "La Capilla",
                "La Uvita",
                "La Victoria",
                "Labranzagrande",
                "Macanal",
                "Marip\u00ed",
                "Miraflores",
                "Mongua",
                "Mongu\u00ed",
                "Moniquir\u00e1",
                "Motavita",
                "Muzo",
                "Nobsa",
                "Nuevo Col\u00f3n",
                "Oicat\u00e1",
                "Otanche",
                "Pachavita",
                "P\u00e1ez",
                "Paipa",
                "Pajarito",
                "Panqueba",
                "Pauna",
                "Paya",
                "Paz del R\u00edo",
                "Pesca",
                "Pisba",
                "Puerto Boyac\u00e1",
                "Qu\u00edpama",
                "Ramiriqu\u00ed",
                "R\u00e1quira",
                "Rond\u00f3n",
                "Saboy\u00e1",
                "S\u00e1chica",
                "Samac\u00e1",
                "San Eduardo",
                "San Jos\u00e9 de Pare",
                "San Luis de Gaceno",
                "San Mateo",
                "San Miguel de Sema",
                "San Pablo de Borbur",
                "Santa Mar\u00eda",
                "Santa Rosa de Viterbo",
                "Santa Sof\u00eda",
                "Santana",
                "Sativanorte",
                "Sativasur",
                "Siachoque",
                "Soat\u00e1",
                "Socha",
                "Socot\u00e1",
                "Sogamoso",
                "Somondoco",
                "Sora",
                "Sorac\u00e1",
                "Sotaquir\u00e1",
                "Susac\u00f3n",
                "Sutamarch\u00e1n",
                "Sutatenza",
                "Tasco",
                "Tenza",
                "Tiban\u00e1",
                "Tibasosa",
                "Tinjac\u00e1",
                "Tipacoque",
                "Toca",
                "Tog\u00fc\u00ed",
                "T\u00f3paga",
                "Tota",
                "Tunja",
                "Tunungu\u00e1",
                "Turmequ\u00e9",
                "Tuta",
                "Tutaz\u00e1",
                "\u00dambita",
                "Ventaquemada",
                "Villa de Leyva",
                "Viracach\u00e1",
                "Zetaquira"
            ]
        },
        {
            "id": 6,
            "departamento": "Caldas",
            "ciudades": [
                "Aguadas",
                "Anserma",
                "Aranzazu",
                "Belalc\u00e1zar",
                "Chinchin\u00e1",
                "Filadelfia",
                "La Dorada",
                "La Merced",
                "Manizales",
                "Manzanares",
                "Marmato",
                "Marquetalia",
                "Marulanda",
                "Neira",
                "Norcasia",
                "P\u00e1cora",
                "Palestina",
                "Pensilvania",
                "Riosucio",
                "Risaralda",
                "Salamina",
                "Saman\u00e1",
                "San Jos\u00e9",
                "Sup\u00eda",
                "Victoria",
                "Villamar\u00eda",
                "Viterbo"
            ]
        },
        {
            "id": 7,
            "departamento": "Caquet\u00e1",
            "ciudades": [
                "Albania",
                "Bel\u00e9n de los Andaqu\u00edes",
                "Cartagena del Chair\u00e1",
                "Curillo",
                "El Doncello",
                "El Paujil",
                "Florencia",
                "La Monta\u00f1ita",
                "Mil\u00e1n",
                "Morelia",
                "Puerto Rico",
                "San Jos\u00e9 del Fragua",
                "San Vicente del Cagu\u00e1n",
                "Solano",
                "Solita",
                "Valpara\u00edso"
            ]
        },
        {
            "id": 8,
            "departamento": "Casanare",
            "ciudades": [
                "Aguazul",
                "Ch\u00e1meza",
                "Hato Corozal",
                "La Salina",
                "Man\u00ed",
                "Monterrey",
                "Nunch\u00eda",
                "Orocu\u00e9",
                "Paz de Ariporo",
                "Pore",
                "Recetor",
                "Sabanalarga",
                "S\u00e1cama",
                "San Luis de Palenque",
                "T\u00e1mara",
                "Tauramena",
                "Trinidad",
                "Villanueva",
                "Yopal"
            ]
        },
        {
            "id": 9,
            "departamento": "Cauca",
            "ciudades": [
                "Almaguer",
                "Argelia",
                "Balboa",
                "Bol\u00edvar",
                "Buenos Aires",
                "Cajib\u00edo",
                "Caldono",
                "Caloto",
                "Corinto",
                "El Tambo",
                "Florencia",
                "Guachen\u00e9",
                "Guap\u00ed",
                "Inz\u00e1",
                "Jambal\u00f3",
                "La Sierra",
                "La Vega",
                "L\u00f3pez de Micay",
                "Mercaderes",
                "Miranda",
                "Morales",
                "Padilla",
                "P\u00e1ez",
                "Pat\u00eda",
                "Piamonte",
                "Piendam\u00f3",
                "Popay\u00e1n",
                "Puerto Tejada",
                "Purac\u00e9",
                "Rosas",
                "San Sebasti\u00e1n",
                "Santa Rosa",
                "Santander de Quilichao",
                "Silvia",
                "Sotar\u00e1",
                "Su\u00e1rez",
                "Sucre",
                "Timb\u00edo",
                "Timbiqu\u00ed",
                "Torib\u00edo",
                "Totor\u00f3",
                "Villa Rica"
            ]
        },
        {
            "id": 10,
            "departamento": "Cesar",
            "ciudades": [
                "Aguachica",
                "Agust\u00edn Codazzi",
                "Astrea",
                "Becerril",
                "Bosconia",
                "Chimichagua",
                "Chiriguan\u00e1",
                "Curuman\u00ed",
                "El Copey",
                "El Paso",
                "Gamarra",
                "Gonz\u00e1lez",
                "La Gloria (Cesar)",
                "La Jagua de Ibirico",
                "La Paz",
                "Manaure Balc\u00f3n del Cesar",
                "Pailitas",
                "Pelaya",
                "Pueblo Bello",
                "R\u00edo de Oro",
                "San Alberto",
                "San Diego",
                "San Mart\u00edn",
                "Tamalameque",
                "Valledupar"
            ]
        },
        {
            "id": 11,
            "departamento": "Choc\u00f3",
            "ciudades": [
                "Acand\u00ed",
                "Alto Baud\u00f3",
                "Bagad\u00f3",
                "Bah\u00eda Solano",
                "Bajo Baud\u00f3",
                "Bojay\u00e1",
                "Cant\u00f3n de San Pablo",
                "C\u00e9rtegui",
                "Condoto",
                "El Atrato",
                "El Carmen de Atrato",
                "El Carmen del Dari\u00e9n",
                "Istmina",
                "Jurad\u00f3",
                "Litoral de San Juan",
                "Llor\u00f3",
                "Medio Atrato",
                "Medio Baud\u00f3",
                "Medio San Juan",
                "N\u00f3vita",
                "Nuqu\u00ed",
                "Quibd\u00f3",
                "R\u00edo Ir\u00f3",
                "R\u00edo Quito",
                "Riosucio",
                "San Jos\u00e9 del Palmar",
                "Sip\u00ed",
                "Tad\u00f3",
                "Uni\u00f3n Panamericana",
                "Ungu\u00eda"
            ]
        },
        {
            "id": 12,
            "departamento": "Cundinamarca",
            "ciudades": [
                "Agua de Dios",
                "Alb\u00e1n",
                "Anapoima",
                "Anolaima",
                "Apulo",
                "Arbel\u00e1ez",
                "Beltr\u00e1n",
                "Bituima",
                "Bogot\u00e1",
                "Bojac\u00e1",
                "Cabrera",
                "Cachipay",
                "Cajic\u00e1",
                "Caparrap\u00ed",
                "C\u00e1queza",
                "Carmen de Carupa",
                "Chaguan\u00ed",
                "Ch\u00eda",
                "Chipaque",
                "Choach\u00ed",
                "Chocont\u00e1",
                "Cogua",
                "Cota",
                "Cucunub\u00e1",
                "El Colegio",
                "El Pe\u00f1\u00f3n",
                "El Rosal",
                "Facatativ\u00e1",
                "F\u00f3meque",
                "Fosca",
                "Funza",
                "F\u00faquene",
                "Fusagasug\u00e1",
                "Gachal\u00e1",
                "Gachancip\u00e1",
                "Gachet\u00e1",
                "Gama",
                "Girardot",
                "Granada",
                "Guachet\u00e1",
                "Guaduas",
                "Guasca",
                "Guataqu\u00ed",
                "Guatavita",
                "Guayabal de S\u00edquima",
                "Guayabetal",
                "Guti\u00e9rrez",
                "Jerusal\u00e9n",
                "Jun\u00edn",
                "La Calera",
                "La Mesa",
                "La Palma",
                "La Pe\u00f1a",
                "La Vega",
                "Lenguazaque",
                "Machet\u00e1",
                "Madrid",
                "Manta",
                "Medina",
                "Mosquera",
                "Nari\u00f1o",
                "Nemoc\u00f3n",
                "Nilo",
                "Nimaima",
                "Nocaima",
                "Pacho",
                "Paime",
                "Pandi",
                "Paratebueno",
                "Pasca",
                "Puerto Salgar",
                "Pul\u00ed",
                "Quebradanegra",
                "Quetame",
                "Quipile",
                "Ricaurte",
                "San Antonio del Tequendama",
                "San Bernardo",
                "San Cayetano",
                "San Francisco",
                "San Juan de Rioseco",
                "Sasaima",
                "Sesquil\u00e9",
                "Sibat\u00e9",
                "Silvania",
                "Simijaca",
                "Soacha",
                "Sop\u00f3",
                "Subachoque",
                "Suesca",
                "Supat\u00e1",
                "Susa",
                "Sutatausa",
                "Tabio",
                "Tausa",
                "Tena",
                "Tenjo",
                "Tibacuy",
                "Tibirita",
                "Tocaima",
                "Tocancip\u00e1",
                "Topaip\u00ed",
                "Ubal\u00e1",
                "Ubaque",
                "Ubat\u00e9",
                "Une",
                "\u00datica",
                "Venecia",
                "Vergara",
                "Vian\u00ed",
                "Villag\u00f3mez",
                "Villapinz\u00f3n",
                "Villeta",
                "Viot\u00e1",
                "Yacop\u00ed",
                "Zipac\u00f3n",
                "Zipaquir\u00e1"
            ]
        },
        {
            "id": 13,
            "departamento": "C\u00f3rdoba",
            "ciudades": [
                "Ayapel",
                "Buenavista",
                "Canalete",
                "Ceret\u00e9",
                "Chim\u00e1",
                "Chin\u00fa",
                "Ci\u00e9naga de Oro",
                "Cotorra",
                "La Apartada",
                "Lorica",
                "Los C\u00f3rdobas",
                "Momil",
                "Montel\u00edbano",
                "Monter\u00eda",
                "Mo\u00f1itos",
                "Planeta Rica",
                "Pueblo Nuevo",
                "Puerto Escondido",
                "Puerto Libertador",
                "Pur\u00edsima",
                "Sahag\u00fan",
                "San Andr\u00e9s de Sotavento",
                "San Antero",
                "San Bernardo del Viento",
                "San Carlos",
                "San Jos\u00e9 de Ur\u00e9",
                "San Pelayo",
                "Tierralta",
                "Tuch\u00edn",
                "Valencia"
            ]
        },
        {
            "id": 14,
            "departamento": "Guain\u00eda",
            "ciudades": [
                "In\u00edrida"
            ]
        },
        {
            "id": 15,
            "departamento": "Guaviare",
            "ciudades": [
                "Calamar",
                "El Retorno",
                "Miraflores",
                "San Jos\u00e9 del Guaviare"
            ]
        },
        {
            "id": 16,
            "departamento": "Huila",
            "ciudades": [
                "Acevedo",
                "Agrado",
                "Aipe",
                "Algeciras",
                "Altamira",
                "Baraya",
                "Campoalegre",
                "Colombia",
                "El Pital",
                "El\u00edas",
                "Garz\u00f3n",
                "Gigante",
                "Guadalupe",
                "Hobo",
                "\u00cdquira",
                "Isnos",
                "La Argentina",
                "La Plata",
                "N\u00e1taga",
                "Neiva",
                "Oporapa",
                "Paicol",
                "Palermo",
                "Palestina",
                "Pitalito",
                "Rivera",
                "Saladoblanco",
                "San Agust\u00edn",
                "Santa Mar\u00eda",
                "Suaza",
                "Tarqui",
                "Tello",
                "Teruel",
                "Tesalia",
                "Timan\u00e1",
                "Villavieja",
                "Yaguar\u00e1"
            ]
        },
        {
            "id": 17,
            "departamento": "La Guajira",
            "ciudades": [
                "Albania",
                "Barrancas",
                "Dibulla",
                "Distracci\u00f3n",
                "El Molino",
                "Fonseca",
                "Hatonuevo",
                "La Jagua del Pilar",
                "Maicao",
                "Manaure",
                "Riohacha",
                "San Juan del Cesar",
                "Uribia",
                "Urumita",
                "Villanueva"
            ]
        },
        {
            "id": 18,
            "departamento": "Magdalena",
            "ciudades": [
                "Algarrobo",
                "Aracataca",
                "Ariguan\u00ed",
                "Cerro de San Antonio",
                "Chibolo",
                "Chibolo",
                "Ci\u00e9naga",
                "Concordia",
                "El Banco",
                "El Pi\u00f1\u00f3n",
                "El Ret\u00e9n",
                "Fundaci\u00f3n",
                "Guamal",
                "Nueva Granada",
                "Pedraza",
                "Piji\u00f1o del Carmen",
                "Pivijay",
                "Plato",
                "Pueblo Viejo",
                "Remolino",
                "Sabanas de San \u00c1ngel",
                "Salamina",
                "San Sebasti\u00e1n de Buenavista",
                "San Zen\u00f3n",
                "Santa Ana",
                "Santa B\u00e1rbara de Pinto",
                "Santa Marta",
                "Sitionuevo",
                "Tenerife",
                "Zapay\u00e1n",
                "Zona Bananera"
            ]
        },
        {
            "id": 19,
            "departamento": "Meta",
            "ciudades": [
                "Acac\u00edas",
                "Barranca de Up\u00eda",
                "Cabuyaro",
                "Castilla la Nueva",
                "Cubarral",
                "Cumaral",
                "El Calvario",
                "El Castillo",
                "El Dorado",
                "Fuente de Oro",
                "Granada",
                "Guamal",
                "La Macarena",
                "La Uribe",
                "Lejan\u00edas",
                "Mapirip\u00e1n",
                "Mesetas",
                "Puerto Concordia",
                "Puerto Gait\u00e1n",
                "Puerto Lleras",
                "Puerto L\u00f3pez",
                "Puerto Rico",
                "Restrepo",
                "San Carlos de Guaroa",
                "San Juan de Arama",
                "San Juanito",
                "San Mart\u00edn",
                "Villavicencio",
                "Vista Hermosa"
            ]
        },
        {
            "id": 20,
            "departamento": "Nari\u00f1o",
            "ciudades": [
                "Aldana",
                "Ancuy\u00e1",
                "Arboleda",
                "Barbacoas",
                "Bel\u00e9n",
                "Buesaco",
                "Chachag\u00fc\u00ed",
                "Col\u00f3n",
                "Consac\u00e1",
                "Contadero",
                "C\u00f3rdoba",
                "Cuaspud",
                "Cumbal",
                "Cumbitara",
                "El Charco",
                "El Pe\u00f1ol",
                "El Rosario",
                "El Tabl\u00f3n",
                "El Tambo",
                "Francisco Pizarro",
                "Funes",
                "Guachucal",
                "Guaitarilla",
                "Gualmat\u00e1n",
                "Iles",
                "Imu\u00e9s",
                "Ipiales",
                "La Cruz",
                "La Florida",
                "La Llanada",
                "La Tola",
                "La Uni\u00f3n",
                "Leiva",
                "Linares",
                "Los Andes",
                "Mag\u00fc\u00ed Pay\u00e1n",
                "Mallama",
                "Mosquera",
                "Nari\u00f1o",
                "Olaya Herrera",
                "Ospina",
                "Pasto",
                "Policarpa",
                "Potos\u00ed",
                "Providencia",
                "Puerres",
                "Pupiales",
                "Ricaurte",
                "Roberto Pay\u00e1n",
                "Samaniego",
                "San Bernardo",
                "San Jos\u00e9 de Alb\u00e1n",
                "San Lorenzo",
                "San Pablo",
                "San Pedro de Cartago",
                "Sandon\u00e1",
                "Santa B\u00e1rbara",
                "Santacruz",
                "Sapuyes",
                "Taminango",
                "Tangua",
                "Tumaco",
                "T\u00faquerres",
                "Yacuanquer"
            ]
        },
        {
            "id": 21,
            "departamento": "Norte de Santander",
            "ciudades": [
                "\u00c1brego",
                "Arboledas",
                "Bochalema",
                "Bucarasica",
                "C\u00e1chira",
                "C\u00e1cota",
                "Chin\u00e1cota",
                "Chitag\u00e1",
                "Convenci\u00f3n",
                "C\u00facuta",
                "Cucutilla",
                "Duran\u00eda",
                "El Carmen",
                "El Tarra",
                "El Zulia",
                "Gramalote",
                "Hacar\u00ed",
                "Herr\u00e1n",
                "La Esperanza",
                "La Playa de Bel\u00e9n",
                "Labateca",
                "Los Patios",
                "Lourdes",
                "Mutiscua",
                "Oca\u00f1a",
                "Pamplona",
                "Pamplonita",
                "Puerto Santander",
                "Ragonvalia",
                "Salazar de Las Palmas",
                "San Calixto",
                "San Cayetano",
                "Santiago",
                "Santo Domingo de Silos",
                "Sardinata",
                "Teorama",
                "Tib\u00fa",
                "Toledo",
                "Villa Caro",
                "Villa del Rosario"
            ]
        },
        {
            "id": 22,
            "departamento": "Putumayo",
            "ciudades": [
                "Col\u00f3n",
                "Mocoa",
                "Orito",
                "Puerto As\u00eds",
                "Puerto Caicedo",
                "Puerto Guzm\u00e1n",
                "Puerto Legu\u00edzamo",
                "San Francisco",
                "San Miguel",
                "Santiago",
                "Sibundoy",
                "Valle del Guamuez",
                "Villagarz\u00f3n"
            ]
        },
        {
            "id": 23,
            "departamento": "Quind\u00edo",
            "ciudades": [
                "Armenia",
                "Buenavista",
                "Calarc\u00e1",
                "Circasia",
                "C\u00f3rdoba",
                "Filandia",
                "G\u00e9nova",
                "La Tebaida",
                "Montenegro",
                "Pijao",
                "Quimbaya",
                "Salento"
            ]
        },
        {
            "id": 24,
            "departamento": "Risaralda",
            "ciudades": [
                "Ap\u00eda",
                "Balboa",
                "Bel\u00e9n de Umbr\u00eda",
                "Dosquebradas",
                "Gu\u00e1tica",
                "La Celia",
                "La Virginia",
                "Marsella",
                "Mistrat\u00f3",
                "Pereira",
                "Pueblo Rico",
                "Quinch\u00eda",
                "Santa Rosa de Cabal",
                "Santuario"
            ]
        },
        {
            "id": 25,
            "departamento": "San Andr\u00e9s y Providencia",
            "ciudades": [
                "Providencia y Santa Catalina Islas",
                "San Andr\u00e9s"
            ]
        },
        {
            "id": 26,
            "departamento": "Santander",
            "ciudades": [
                "Aguada",
                "Albania",
                "Aratoca",
                "Barbosa",
                "Barichara",
                "Barrancabermeja",
                "Betulia",
                "Bol\u00edvar",
                "Bucaramanga",
                "Cabrera",
                "California",
                "Capitanejo",
                "Carcas\u00ed",
                "Cepit\u00e1",
                "Cerrito",
                "Charal\u00e1",
                "Charta",
                "Chima",
                "Chipat\u00e1",
                "Cimitarra",
                "Concepci\u00f3n",
                "Confines",
                "Contrataci\u00f3n",
                "Coromoro",
                "Curit\u00ed",
                "El Carmen de Chucur\u00ed",
                "El Guacamayo",
                "El Pe\u00f1\u00f3n",
                "El Play\u00f3n",
                "El Socorro",
                "Encino",
                "Enciso",
                "Flori\u00e1n",
                "Floridablanca",
                "Gal\u00e1n",
                "G\u00e1mbita",
                "Gir\u00f3n",
                "Guaca",
                "Guadalupe",
                "Guapot\u00e1",
                "Guavat\u00e1",
                "G\u00fcepsa",
                "Hato",
                "Jes\u00fas Mar\u00eda",
                "Jord\u00e1n",
                "La Belleza",
                "La Paz",
                "Land\u00e1zuri",
                "Lebrija",
                "Los Santos",
                "Macaravita",
                "M\u00e1laga",
                "Matanza",
                "Mogotes",
                "Molagavita",
                "Ocamonte",
                "Oiba",
                "Onzaga",
                "Palmar",
                "Palmas del Socorro",
                "P\u00e1ramo",
                "Piedecuesta",
                "Pinchote",
                "Puente Nacional",
                "Puerto Parra",
                "Puerto Wilches",
                "Rionegro",
                "Sabana de Torres",
                "San Andr\u00e9s",
                "San Benito",
                "San Gil",
                "San Joaqu\u00edn",
                "San Jos\u00e9 de Miranda",
                "San Miguel",
                "San Vicente de Chucur\u00ed",
                "Santa B\u00e1rbara",
                "Santa Helena del Op\u00f3n",
                "Simacota",
                "Suaita",
                "Sucre",
                "Surat\u00e1",
                "Tona",
                "Valle de San Jos\u00e9",
                "V\u00e9lez",
                "Vetas",
                "Villanueva",
                "Zapatoca"
            ]
        },
        {
            "id": 27,
            "departamento": "Sucre",
            "ciudades": [
                "Buenavista",
                "Caimito",
                "Chal\u00e1n",
                "Colos\u00f3",
                "Corozal",
                "Cove\u00f1as",
                "El Roble",
                "Galeras",
                "Guaranda",
                "La Uni\u00f3n",
                "Los Palmitos",
                "Majagual",
                "Morroa",
                "Ovejas",
                "Sampu\u00e9s",
                "San Antonio de Palmito",
                "San Benito Abad",
                "San Juan de Betulia",
                "San Marcos",
                "San Onofre",
                "San Pedro",
                "Sinc\u00e9",
                "Sincelejo",
                "Sucre",
                "Tol\u00fa",
                "Tol\u00fa Viejo"
            ]
        },
        {
            "id": 28,
            "departamento": "Tolima",
            "ciudades": [
                "Alpujarra",
                "Alvarado",
                "Ambalema",
                "Anzo\u00e1tegui",
                "Armero",
                "Ataco",
                "Cajamarca",
                "Carmen de Apical\u00e1",
                "Casabianca",
                "Chaparral",
                "Coello",
                "Coyaima",
                "Cunday",
                "Dolores",
                "El Espinal",
                "Fal\u00e1n",
                "Flandes",
                "Fresno",
                "Guamo",
                "Herveo",
                "Honda",
                "Ibagu\u00e9",
                "Icononzo",
                "L\u00e9rida",
                "L\u00edbano",
                "Mariquita",
                "Melgar",
                "Murillo",
                "Natagaima",
                "Ortega",
                "Palocabildo",
                "Piedras",
                "Planadas",
                "Prado",
                "Purificaci\u00f3n",
                "Rioblanco",
                "Roncesvalles",
                "Rovira",
                "Salda\u00f1a",
                "San Antonio",
                "San Luis",
                "Santa Isabel",
                "Su\u00e1rez",
                "Valle de San Juan",
                "Venadillo",
                "Villahermosa",
                "Villarrica"
            ]
        },
        {
            "id": 29,
            "departamento": "Valle del Cauca",
            "ciudades": [
                "Alcal\u00e1",
                "Andaluc\u00eda",
                "Ansermanuevo",
                "Argelia",
                "Bol\u00edvar",
                "Buenaventura",
                "Buga",
                "Bugalagrande",
                "Caicedonia",
                "Cali",
                "Calima",
                "Candelaria",
                "Cartago",
                "Dagua",
                "El \u00c1guila",
                "El Cairo",
                "El Cerrito",
                "El Dovio",
                "Florida",
                "Ginebra",
                "Guacar\u00ed",
                "Jamund\u00ed",
                "La Cumbre",
                "La Uni\u00f3n",
                "La Victoria",
                "Obando",
                "Palmira",
                "Pradera",
                "Restrepo",
                "Riofr\u00edo",
                "Roldanillo",
                "San Pedro",
                "Sevilla",
                "Toro",
                "Trujillo",
                "Tulu\u00e1",
                "Ulloa",
                "Versalles",
                "Vijes",
                "Yotoco",
                "Yumbo",
                "Zarzal"
            ]
        },
        {
            "id": 30,
            "departamento": "Vaup\u00e9s",
            "ciudades": [
                "Carur\u00fa",
                "Mit\u00fa",
                "Taraira"
            ]
        },
        {
            "id": 31,
            "departamento": "Vichada",
            "ciudades": [
                "Cumaribo",
                "La Primavera",
                "Puerto Carre\u00f1o",
                "Santa Rosal\u00eda"
            ]
        }
    ];
//    $('.ciudad').empty();
    $.each(items_ciudad, function (i, item) {
        var optiong = $('<optgroup>')
                .attr({"label": item.departamento});

        $.each(item.ciudades, function (i, item2) {
            $(optiong).append($('<option>', {
                value: item2,
                text: item2,
                "data-tokens": item.departamento + " " + item2

            }));

        });
        $('.ciudad').append(optiong);
    });
}

