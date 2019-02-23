var is_indatabase = false;
var conceptos_tecnicos = Array();

$('#crear_proceso').on('click', function () {
    isValid = true;
    curInputs = $('#creacion_form').find("input[type='text'],input[type='url'],input[type='date'],input[type='number'],select");
    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
    }
    if ($('#centro').val() === 'Q00' && $('#tipo_ingreso').val() === '2' && $('#riesgo_val').val() !== 'Estructural' && $('#riesgo_val').val() !== 'Remoción en masa' && $('#riesgo_val').val() !== 'Remoción y Estructura') {
        isValid = false;
        $('#centro').closest(".form-group").addClass("has-error");
    }
    if (conceptos_tecnicos.length < 1) {
        isValid = false;
        $('#tipo_concepto').parent().addClass('has-error');
        $('#concepto').parent().addClass('has-error');
        $('#fecha_concepto').parent().addClass('has-error');
    }
    var d1 = new Date();
    var d2 = new Date($('#fecha').val());
    if (d1 < d2 || (d1.getMonth() - d2.getMonth() > 2 && d1 > d2)) {
        $('#fecha').parent().addClass('has-error');
        isValid = false;
    }

    if ($('#nh').val() === null && $('#tipo_ingreso').val() === '3') {
        $('#nh').parent().addClass('has-error');
        isValid = false;
    }

    if (isValid) {

        centro = '';
        if ($('#tipo_ingreso').val() === '2' && $('#identificador1').val() !== '') {
            operacion = is_indatabase ? 'activar_identificador_surr' : 'crear_identificador_surr';
        } else if ($('#tipo_ingreso').val() === '1') {
            if ($('#sector').val().toUpperCase().indexOf('VEREDITAS') > -1) {
                operacion = "crear_proceso_identificador_vereditas";
            } else {
                operacion = "crear_identificador_temporal";
            }
        } else if ($('#tipo_ingreso').val() === '2' && $('#identificador1').val() === '') {
            if ($('#riesgo_val').val() !== 'Estructural' && $('#riesgo_val').val() !== 'Remoción en masa' && $('#riesgo_val').val() !== 'Remoción y Estructura') {
                centro = $('#centro').val();
                operacion = "crear_identificador_temporal_quebrada";
            } else {
                operacion = 'crear_identificador_temporal_surr';
            }
        } else if ($('#tipo_ingreso').val() === '3') {
            centro = 'CP19';
            operacion = "crear_proceso_caracoli_paimes";

        }

        $.ajax({
            type: "POST",
            url: "GestionDML",
            data: {
                op: operacion,
                identificador_idiger: $.trim($('#identificador1').val()),
                identificador2: $.trim($('#identificador2').val()),
                concepto: '',
                riesgo: $('#riesgo_val').val(),
                fecha_concepto: 'NULL',
                tecnica_idiger: $('#id_tecnico').val(),
                social_idiger: $('#id_social').val(),
                chip: $('#chip').val() !== 'AAA' ? "'" + $('#chip').val().toUpperCase() + "'" : 'null',
                upz: $('#UPZ').val(),
                fecha_ingreso: $('#fecha').val(),
                barrio: $.trim($('#barrio').val().toUpperCase()),
                direccion: $('#direccion').val(),
                sector: $.trim($('#sector').val().toUpperCase()),
                centro: centro,
                manzana: $('#manzana').val().toUpperCase() + ' ' + $('#manzanal').val().toUpperCase(),
                lote: $('#lote').val().toUpperCase() + ' ' + $('#lote2').val().toUpperCase(),
                localidad: $('#localidad').val(),
                unidades: $('#unidades').val(),
                usuario: usuario_usuario,
                usuario_id: usuario_identificador,
                nombre1: '',
                nombre2: '',
                apellido: '',
                apillido2: '',
                documento: ''
            },
            dataType: "Text",
            success: function (response) {
                var res = eval('(' + response + ')');
                var iden = res.data[0];
                console.log(iden);
                $.each(conceptos_tecnicos, function (index, concepto) {
                    $.ajax({
                        type: "POST",
                        url: "GestionDML",
                        data: {
                            op: 'insertar_concepto',
                            identificador: iden.IDENTIFICADOR,
                            consecutivo: index + 1,
                            concepto: concepto.tipo + '-' + concepto.numero,
                            fecha: concepto.fecha
                        },
                        dataType: "Text",
                        success: function (response) {
                        },
                        error: function (error) {

                        }
                    });
                });
                if (res.data.length > 0) {
                    alert('Se creó correctamente el nuevo identificador');
                    window.location.replace('profile.jsp?identificador=' + res.data[0]['IDENTIFICADOR']);
                }

            }
        });
    }
});

$('#tipo_ingreso').on('change', function () {

    if ($(this).val() === '1') {
        $('.form-control').attr('disabled', false);
        $('.dir').attr('disabled', false);
        $('.manzana').attr('disabled', false);
        $('.lote').attr('disabled', false);
        $('#id_provisional').removeClass('hidden');
        $('#identificador2').removeClass('hidden');
        $('#id_idiger').addClass('hidden');
        $('#id_tecnica').addClass('hidden');
        $('#id_social').addClass('hidden');
        $('#riesgo').addClass('hidden');
        $('#nh').addClass('hidden');
        $("input[type='text'],input[type='url'],input[type='date'],input[type='number']").val('');
    }

    if ($(this).val() === '2') {
        $('.form-control').attr('disabled', false);
        $('.dir').attr('disabled', false);
        $('.manzana').attr('disabled', false);
        $('.lote').attr('disabled', false);
        $('#identificador2').removeClass('hidden');
        $('#id_provisional').addClass('hidden');
        $('#nh').addClass('hidden');
        $('#id_idiger').removeClass('hidden');
        $('#id_idiger').removeClass('hidden');
        $('#id_tecnica').removeClass('hidden');
        $('#id_social').removeClass('hidden');
        $('#riesgo').removeClass('hidden');
        $("input[type='text'],input[type='url'],input[type='date'],input[type='number']").val('');
    }
    if ($(this).val() === '3') {
        $('.form-control').attr('disabled', false);
        $('.dir').attr('disabled', false);
        $('.manzana').attr('disabled', false);
        $('.lote').attr('disabled', false);
        $('#id_provisional').removeClass('hidden');
        $('#nh').show('hidden');
        $('#id_idiger').addClass('hidden');
        $('#identificador2').addClass('hidden');
        $('#id_tecnica').addClass('hidden');
        $('#id_social').addClass('hidden');
        $('#id_social').addClass('hidden');
        $("input[type='text'],input[type='url'],input[type='date'],input[type='number']").val('');
        $('#localidad').val('19 Ciudad Bolívar');
        $('#UPZ').val('19-69 Ismael Perdomo');
        $('#barrio').val('Caracolí');
        $('#sector').val('Caracolí Paimis');
        $('#localidad,#tipo_concepto,#concepto,#fecha_concepto,#UPZ,#barrio,#sector').attr('disabled', 'disabled');
        $('#localidad').trigger('change');
        $('#localidad').val('19 Ciudad Bolívar');
        $('#localidad').attr('disabled', 'disabled');
        conceptos_tecnicos[0] = {tipo: "Decreto", numero: "227", fecha: "2015-06-12"};
        $('#tabla_concepto').append('<tr><td>1</td><td>Decreto-227 del 2015-06-12</td><td> Predeterminado</td></tr>');
        conceptos_tecnicos[1] = {tipo: "Resolución", numero: "740", fecha: "2018-09-07"};
        $('#tabla_concepto').append('<tr><td>2</td><td>Resolución-740 del 2018-09-07</td><td> Predeterminado</td></tr>');
    }

    $('#dir5').attr('disabled', true);
});
$('#identificador1').on('change', function () {
    var body = '';

    if ($('#identificador1').val() !== '') {
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: 'verificar_identificador',
                identificador_idiger: $.trim($('#identificador1').val())
            },
            dataType: "json",
            success: function (response) {
                if (response.length > 0) {
                    var identificador = response[0];
                    if (identificador.Cod_Estado_Proceso === 0 && identificador.Cod_Estado_Subproceso === 0) {
                        body = "<div class='alert alert-warning'><strong>Atención!</strong> Este proceso no se puede activar, porque es un predio de adquisición del IDIGER</div>";
                        var conf = {body: body, tittle: 'My new modalUp', closeButtonName: "Cerrar", functionButton: false};
                        $('body').modalup(conf);
                    } else if (identificador.Cod_Estado_Proceso === 0 && identificador.Cod_Estado_Subproceso === 1) {
                        body = "<div class='alert alert-warning'> <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Atención!</strong> Este identificador ya existe en la base de datos y se procedera a hacer la activación.<br> Continue llenando los datos para su actualización.</div>";
                        $('#alerta').append(body);
                        is_indatabase = true;
                    } else if (identificador.Cod_Estado_Proceso >= 1 && identificador.Cod_Estado_Subproceso > 1) {
                        body = "<div class='alert alert-warning'><strong>Atención!</strong> Este identificador esta activo en la base de datos, por favor consulte el identificador.</div>";
                        var conf = {body: body, tittle: 'My new modalUp', closeButtonName: "Cerrar", functionButton: false};
                        $('body').modalup(conf);

                    }
                }

            }
        });

    }
});
$('#nh').on('change', function () {
    $('#identificador2').val($(this).val());
});
$('#identificador2').on('change', function () {
    var body = '';

    if ($('#identificador2').val() !== '') {
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: 'verificar_identificador_anterior',
                identificador_anterior: $.trim($('#identificador2').val())

            },
            dataType: "json",
            success: function (response) {
                if (response.length > 0) {
                    var identificador = response[0].IDENTIFICADOR;
                    body = "<div class='alert alert-danger'> <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Atención! </strong> Este identificador temporal ya existe para el identificador <strong>" + identificador + "</strong>, por favor revise antes de seguir </div>";
                    $('#alerta').append(body);
                }

            }
        });

    }
});

$('#nodireccion').on('change', function () {
    if ($('#nodireccion').prop('checked') === true) {

        $('#direccion').val('SIN DIRECCIÓN');
        $('.dir').attr('disabled', true);
        $('#dir_generada').text('SIN DIRECCIÓN');
    } else {
        $('#direccion').val('');
        $('.dir').attr('disabled', false);
        direccion();
    }
});
$('#nomanzana').on('change', function () {
    if ($('#nomanzana').prop('checked') === true) {
        $('#manzana').val('');
        $('#manzanal').val('');
        $('.manzana').attr('disabled', true);
    } else {
        $('.manzana').attr('disabled', false);
        direccion();
    }
});
$('#nolote').on('change', function () {
    if ($('#nolote').prop('checked') === true) {
        $('#lote').val('');
        $('#lote2').val('');
        $('.lote').attr('disabled', true);
    } else {
        $('.lote').attr('disabled', false);
        direccion();
    }
});


$('#agregar_concepto').on('click', function () {
    var rowCount = $('#tabla_concepto tr').length;
    if ($('#tipo_concepto').val() === '') {
        $('#tipo_concepto').addClass('error');
    }
    if ($('#concepto').val() === '') {
        $('#concepto').addClass('error');
    }
    if ($('#fecha_concepto').val() === '') {
        $('#fecha_concepto').addClass('error');
    }
    if ($('#tipo_concepto').val() !== '') {
        $('#tipo_concepto').removeClass('error');
    }
    if ($('#concepto').val() !== '') {
        $('#concepto').removeClass('error');
    }
    if ($('#fecha_concepto').val() !== '') {
        $('#fecha_concepto').removeClass('error');
    }
    if ($('#tipo_concepto').val() !== '' && $('#concepto').val() !== '' && $('#fecha_concepto').val() !== '') {
        $('#tabla_concepto').append('<tr><td>' + (rowCount + 1) + '</td><td>' + $('#tipo_concepto').val() + '-' + $('#concepto').val() + ' del ' + $('#fecha_concepto').val() + '</td><td> <button class="btn btn-danger" id="eliminar_concepto" onclick="eliminarConcepto(' + rowCount + ')" ><i class="fas fa-trash"></i></button></td></tr>');
        conceptos_tecnicos[rowCount] = {tipo: $('#tipo_concepto').val(), numero: $('#concepto').val(), fecha: $('#fecha_concepto').val()};
        $('#tipo_concepto').val('');
        $('#tipo_concepto').removeClass('error');
        $('#concepto').val('');
        $('#concepto').removeClass('error');
        $('#fecha_concepto').val('');
        $('#fecha_concepto').removeClass('error');
    }

});

$('.chips').on('change', function () {
    var chip = ['AAA', '', ''];
    chip[1] = $('#chip1').val().toUpperCase();
    chip[2] = $('#chip2').val().toUpperCase();
    $('#chip').val(chip.join(''));
    $('#chip_generado').text(chip.join(''));

});
$(".solonumerico").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
                    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                    // Allow: home, end, left, right, down, up
                            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
$('.sololetras').keydown(function (e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    }
});
function eliminarConcepto(numero) {
    $('#tabla_concepto').empty();
    conceptos_tecnicos.splice(numero, 1);
    $.each(conceptos_tecnicos, function (index, obj) {
        $('#tabla_concepto').append('<tr><td>' + (index + 1) + '</td><td>' + obj.tipo + '-' + obj.numero + ' del ' + obj.fecha + '</td><td> <button class="btn btn-danger" id="eliminar_concepto" onclick="eliminarConcepto(' + index + ')" ><i class="fas fa-trash"></i></button></td></tr>');
    });
}


function direccion() {
    if ($('#dir1').val() === 'CL' || $('#dir1').val() === 'DG' || $('#dir1').val() === 'AC') {
        $('#dir12').attr('disabled', true);
        $('#dir6').attr('disabled', true);
        $('#dir12').prop('checked', false);
        $('#dir6').prop('checked', false);
        $('#dir11').attr('disabled', false);
        $('#dir7').attr('disabled', false);


    }
    if ($('#dir2').val() < 0) {
        $('#dir2').val(0);
    }
    if ($('#dir8').val() < 0) {
        $('#dir8').val(0);
    }
    if ($('#dir10').val() < 0) {
        $('#dir10').val(0);
    }
    if ($('#dir1').val() === 'KR' || $('#dir1').val() === 'TV' || $('#dir1').val() === 'AK') {
        $('#dir11').attr('disabled', true);
        $('#dir7').attr('disabled', true);
        $('#dir11').prop('checked', false);
        $('#dir7').prop('checked', false);

        $('#dir12').attr('disabled', false);
        $('#dir6').attr('disabled', false);


    }
    if ($('#dir4').prop('checked') === true) {
        $('#dir5').attr('disabled', false);
    }
    if ($('#dir4').prop('checked') === false) {
        $('#dir5').attr('disabled', true);
        $('#dir5').val('');
    }

    var $direccion = [];
    $direccion[0] = $('#dir1').val();
    $direccion[1] = $('#dir2').val();
    $direccion[2] = $('#dir3').val();
    $direccion[3] = $('#dir4').prop('checked') === true ? $('#dir4').val() : '';
    $direccion[4] = $('#dir4').prop('checked') === true ? $('#dir5').val() : '';
    $direccion[5] = $('#dir6').prop('checked') === true ? $('#dir6').val() : '';
    $direccion[6] = $('#dir7').prop('checked') === true ? $('#dir7').val() : '';
    $direccion[7] = $('#dir8').val();
    $direccion[8] = $('#dir9').val();
    $direccion[9] = $('#dir10').val();
    $direccion[10] = $('#dir11').prop('checked') === true ? $('#dir11').val() : '';
    $direccion[11] = $('#dir12').prop('checked') === true ? $('#dir12').val() : '';
    $direccion[12] = $('#dir13').val().toUpperCase();
    var removeItem = '';
    $direccion = jQuery.grep($direccion, function (value) {
        return value !== removeItem;
    });
    $('#dir_generada').text($direccion.join(' '));
    $('#direccion').val($direccion.join(' '));
}

$('.dir').on('change', direccion);

$('#riesgo_val').on('change', function () {
    if ($('#riesgo_val').val() !== 'Estructural' && $('#riesgo_val').val() !== 'Remoción en masa' && $('#riesgo_val').val() !== 'Remoción y Estructura') {
        $('#sector').css('display', 'none');
        $('#centro').css('display', 'block');
        $('#centro').attr('required', true);
    } else {
        $('#sector').css('display', 'block');
        $('#centro').css('display', 'none');
        $('#centro').attr('required', false);
    }
});

$('#centro').on('change', function () {
    $('#sector').val($('#centro option:selected').text());
});
$('#localidad').on('change', function () {
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "obtener_upz",
            id_loca: $('#localidad').find('option:selected').index() > 9 ? $('#localidad').find('option:selected').index() : ('0' + $('#localidad').find('option:selected').index())
        },
        dataType: "json",
        async: false,
        success: function (response) {//                       
            if (response.length > 0) {
                $('#UPZ').empty();
                $.each(response, function (i, item) {
                    $('#UPZ').append($('<option>', {
                        value: item.upz_desc,
                        text: item.localidad_id + '-' + item.upz_desc
                    }));
                });

            }

        }
    });
});
if (paimes) {
    $('#tipo_ingreso').val('3').change();
    $('#tipo_ingreso').attr('disabled', 'disabled');
}
$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "obtener_quebradas"
        },
        dataType: "json",
        async: false,
        success: function (response) {//                       
            if (response.length > 0) {
                $.each(response, function (i, item) {
                    $('#centro').append($('<option>', {
                        value: item.cod_quebrada,
                        text: item.nombre_quebrada
                    }));
                });

            }

        }
    });
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "obtener_caracoli_id"
        },
        dataType: "json",
        async: false,
        success: function (response) {//                       
            if (response.length > 0) {
                $.each(response, function (i, item) {
                    $('#nh').append($('<option>', {
                        value: item.num_sdh,
                        text: item.num_sdh + ' - Encuesta asiganada a: ' + (item.nom1 !== undefined ? item.nom1 : 'Sin Información') + ' ' + (item.nom2 !== undefined ? item.nom2 : '') + ' ' + (item.ape1 !== undefined ? item.ape1 : '') + ' ' + (item.ape2 !== undefined ? item.ape2 : '')
                    }));
                });

            }

        }
    });

});
