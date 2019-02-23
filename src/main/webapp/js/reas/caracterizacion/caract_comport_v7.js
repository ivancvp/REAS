var id_v7 = getURLParams('identificador');
if (typeof usr_ref !== 'undefined') {
    setUser(usr_ref);
}
if (typeof usuario_identificador !== 'undefined') {
    setUser(usuario_identificador);
}
setIdentificador(id_v7);
getInfoFicha();
mostrarInformacion();
function getURLParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
        p[k] = v;
    });
    return k ? p[k] : p;
}


//restricciones de estado ficha
if (info_ficha.estado === 3) {
    caracterizacionMiembros();
    agregarTablas();
    $('#mensaje').append('<div class="alert alert-success">  <strong>Aprobada!</strong>Esta Ficha no se puede modificar ya que fue aprobada.</div>');
    $('li').removeClass('disabled');
    $('#btn_aprobar').hide();
    $('#form_social_v7 input,#form_social_v7 select,#form_social_v7 textarea').attr('disabled', 'disabled');
    $('#form_social_v7 a').on('click', function (ind, tab) {
        switch ($(this).attr('href')) {
            case '#step-2':
                $('#form_social_v7 input,#form_social_v7 select,#form_social_v7 textarea').attr('disabled', 'disabled');
                $('#comentarios').prop('disabled', false);
                nombreFormularios();
                mostrarPersonasInfo();
                break;
            case '#step-3':
                traerPersonasCarac();
                break;
            case '#step-4':
                traerPersonasServicios();
                break;
            case '#step-5':
                traerPersonasEconomia();
                break;
            case '#step-7':
                MatricesSociocultural();
                break;
            case '#step-9':
                MatricesTecnologia();
                break;
        }
    });

} else if (info_ficha.estado === 4) {
    caracterizacionMiembros()
    agregarTablas();
    $('#btn_aprobar').hide();
    $('#mensaje').append('<div class="alert alert-danger">  <strong>Devuelta!</strong> Indica que la ficha debe ser modificada, por favor revise el comentario respectivo</div>');
} else if (info_ficha.estado === 2) {
    caracterizacionMiembros()
    agregarTablas();
    $('li').removeClass('disabled');
    $('#mensaje').append('<div class="alert alert-info">  <strong>Revisión!</strong> No se puede modificar esta ficha mientras se encuentra en revisión</div>');
    $('li').removeClass('disabled');
    $('#btn_aprobar').hide();
    $('#form_social_v7 input,#form_social_v7 select,#form_social_v7 textarea').attr('disabled', 'disabled');
    $('#form_social_v7 a').on('click', function (ind, tab) {
        switch ($(this).attr('href')) {
            case '#step-2':
                $('#form_social_v7 input,#form_social_v7 select,#form_social_v7 textarea').attr('disabled', 'disabled');
                $('#comentarios').prop('disabled', false);
                nombreFormularios();
                mostrarPersonasInfo();
                comportamientoInfoBasica();
                break;
            case '#step-3':
                traerPersonasCarac();
                break;
            case '#step-4':
                traerPersonasServicios();
                break;
            case '#step-5':
                traerPersonasEconomia();
                break;
            case '#step-7':
                MatricesSociocultural();
                break;
            case '#step-9':
                MatricesTecnologia();
                break;
        }
    });
}

//logica de guardado
$('.btn_siguiente').on('click', function () {
    var actual = $('ul.setup-panel li.active');
    var target_actual = $(actual).find('a').attr('href');

    switch (target_actual) {
        case '#step-1':
            caracterizacionMiembros();
            salvarIdentificacion();
            crearFicha();
            siguienteTab();
            mostrarPersonasInfo();
            comportamientoInfoBasica();
            break;
        case '#step-2':
            $("input[type=text]").val(function (i, val) {
                return val.toUpperCase();
            });
            verficarMiembros();
            if (!validar('step-2')) {
//           
                break;
            }
            setPersonasInfo();
            $.each(info_ficha.miembros, function (ind, miembro) {
                salvarMiembroIdentificacion(miembro.orden);
            });
            salvarUsuario();
            siguienteTab();
            traerPersonasCarac();
            nombreFormularios();
            break;
        case '#step-3':
            agregarTablas();
            setPersonasCarac();
            $.each(info_ficha.miembros, function (ind, miembro) {
                salvarMiembroCaracterizacion(miembro.orden);
            });
            salvarUsuario();
            traerPersonasServicios();
            eventosServicios();
            siguienteTab();
            break;
        case '#step-4':

            salvarUsuario();
            setPersonasServicios();
            $.each(info_ficha.miembros, function (ind, miembro) {
                salvarMiembroEducacion(miembro.orden);
                salvarMiembroSalud(miembro.orden);
                salvarMiembroServicios(miembro.orden);
            });
            traerPersonasEconomia();
            eventosEconomia();
            siguienteTab();
            break;
        case '#step-5':
            setPersonasEconomia();
            salvarUsuario();
            salvarEconomia();
            $.each(info_ficha.miembros, function (ind, miembro) {
                salvarMiembroEconomia(miembro.orden);
            });
            siguienteTab();
            break;
        case '#step-6':
            salvarUsuario();
            salvarCaracterizacion();
            $('#step-7').find('td').on('click', function () {
                if ($(this).is(':empty')) {
                    $(this).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                } else {
                    $(this).empty();
                }
            });
            MatricesSociocultural();
            eventosSociocultural();
            siguienteTab();
            break;
        case '#step-7':
            setMatricesSocicultural();
            salvarSociocultural();
            $.each(info_ficha.miembros, function (ind, miembro) {
                salvarMiembroSociocultural(miembro.orden);
            });
            salvarUsuario();
            siguienteTab();

            break;
        case '#step-8':
            salvarUsuario();
            salvarAmbiental();
            $('#step-9').find('td').on('click', function () {
                if ($(this).is(':empty')) {
                    $(this).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                } else {
                    $(this).empty();
                }
            });
            MatricesTecnologia();
            eventosTecnologias();
            siguienteTab();
            break;
        case '#step-9':
            setMatricesTecnologia();
            salvarUsuario();
            salvarTecnologia();
            $.each(info_ficha.miembros, function (ind, miembro) {
                salvarMiembroTecnologia(miembro.orden)
            });
            siguienteTab();
            break;
        case '#step-10':
            salvarUsuario();
            salvarArraigo();
            siguienteTab();
            window.top.location.reload();
            break;
    }

});
//funcion para mostrar u ocultar info basica de una persona
function mostrarMiembro(index) {
    var miembros = $('.miembro');
    if ($(miembros[index]).css('display') === 'block') {
        $(miembros[index]).css('display', 'none');
    } else {
        $(miembros[index]).css('display', 'block');
    }
    //console.log(index);
}

//añade formulario de caracterizacion, economia, salud, educación y servicios estatales 
function caracterizacionMiembros() {
    $.each(info_ficha.miembros, function (indice, persona) {
        if (!$('#form_social_v7').find('.' + persona.orden).length) {
            $("<div></div>").addClass(persona.orden + '').appendTo("#caract_miembro").load("secciones_ficha_social.html #seccion_caracterizacion");
            $("<div></div>").addClass(persona.orden + '').appendTo("#servi_miembro").load("secciones_ficha_social.html #seccion_servicios_sociales");
            $("<div></div>").addClass(persona.orden + '').appendTo("#economi_miembro").load("secciones_ficha_social.html #seccion_economica");
        }
    });
}

function DateFormat(fecha) {
    if (typeof (fecha) !== 'undefined' && fecha !== "null") {
        var d = (new Date(fecha)).toISOString().split("T")[0];
        return d;
    } else {
        return '';
    }
}

//Muestra  la informacion en la base de datos de la versión 7
function mostrarInformacion() {
    if (info_ficha.identificador !== '') {
        $('#ident_predio').find('input,select').each(function (indice, elemento) {
            if ($(elemento).attr('type') === "date") {
                $(elemento).val(info_ficha.identificacion_predio[$(elemento).attr('id')] === 'null' ? '' : info_ficha.identificacion_predio[$(elemento).attr('id')]);
            } else {
                $(elemento).val(info_ficha.identificacion_predio[$(elemento).attr('id')]);
            }
        });
        $.each(info_ficha.info_economica, function (id, valor) {
            $('#' + id).val(valor + '');
        });
        $.each(info_ficha.carac_vivienda, function (id, valor) {
            if ($('#' + id).is(':checkbox'))
                $('#' + id).attr('checked', valor);
            else
                $('#' + id).val(valor + '');
        });
        $.each(info_ficha.viv_tecnologia, function (id, valor) {
            $('#' + id).val(valor + '');
        });
        $.each(info_ficha.viv_sociocultural, function (id, valor) {
            $('#' + id).val(valor + '');
        });
        $.each(info_ficha.arraigo, function (id, valor) {
            $('#' + id).val(valor + '');
        });
        $('#ident_predio').find('#identificador').val(info_ficha.identificador);
        $('#tipo_famlia').val(info_ficha.tipo_famlia);
        $('#comentarios').val(info_ficha.arraigo.comentarios);

        var lugares_cerca = info_ficha.capital_ambiental.cerca_viv.lugares ? info_ficha.capital_ambiental.cerca_viv.lugares : [];
        var che = $('.cerca');
        if ($(lugares_cerca).length)
            $.each(che, function (index, valor) {
                $(valor).attr('checked', lugares_cerca[$(valor).val()]);
            });
        var problemas_vivienda = info_ficha.capital_ambiental.problemas_sector.problemas ? info_ficha.capital_ambiental.problemas_sector.problemas : [];
        var check2 = $('.problemas');
        if ($(problemas_vivienda).length)
            $.each(check2, function (index, valor) {
                $(valor).attr('checked', problemas_vivienda[$(valor).val()]);
            });
        var min_consumo = info_ficha.capital_ambiental.practicas_consumo.consumo ? info_ficha.capital_ambiental.practicas_consumo.consumo : [];
        var checons = $('.reduct-consumo');
        if ($(min_consumo).length)
            $.each(checons, function (index, valor) {
                $(valor).attr('checked', min_consumo[$(valor).val()]);
            });
        var clasif_basuras = info_ficha.capital_ambiental.basuras.basuras ? info_ficha.capital_ambiental.basuras.basuras : [];
        var chebas = $('.basuras');
        if ($(clasif_basuras).length)
            $.each(chebas, function (index, valor) {
                $(valor).attr('checked', clasif_basuras[$(valor).val()]);
            });

        var cont = 0;
        $.each(info_ficha.miembros, function (indice, persona) {
            $('#familia_tabla_v7').append('<tr><td>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.apellido_uno + '</td><td>' + persona.identificacion.parentesco + '</td><<td><a href="#" class="btn btn-primary a-btn-slide-text" onclick="mostrarMiembro(' + cont + ')"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> <span></span></a></td>/tr>');
            $("<div></div>").addClass('miembro').appendTo("#miembros_v7").load("secciones_ficha_social.html #seccion_identificacion");
            cont++;
        });
        $('.miembro').hide();
//        }
        comportamientoInfoBasica();
        if (info_ficha.estado === 3 || info_ficha.estado === 2) {
            $('.btn_siguiente').hide();
        }


    }
}
function  nombreFormularios() {
    var cont = 0;
    $.each(info_ficha.miembros, function (indice, persona) {
        $('.' + persona.orden).find('.nombre').text(persona.identificacion.nombre_uno + ' ' + persona.identificacion.apellido_uno);
        cont++;
    });
}
function  comportamientoInfoBasica() {
    $('.nacimiento').on('change', function () {
        var contenedor_miembro = $(this).parent().parent().parent();
        var nacimiento = $(contenedor_miembro).find('#fecha_nacimiento').val();
        var edad = getAge(nacimiento);

        if (0 <= (edad * 1) && (edad * 1) <= 5) {
            $(contenedor_miembro).find('#grupo_etareo').text('Primera Infancia 0-5 años');
        }
        if (5 < (edad * 1) && (edad * 1) <= 12) {
            $(contenedor_miembro).find('#grupo_etareo').text('Infancia 6-12 años');
        }
        if (12 < (edad * 1) && (edad * 1) <= 17) {
            $(contenedor_miembro).find('#grupo_etareo').text('Adolescencia 13-17 años');
        }
        if (17 < (edad * 1) && (edad * 1) <= 26) {
            $(contenedor_miembro).find('#grupo_etareo').text('Jovenes 18-26 años');
        }
        if (27 < (edad * 1) && (edad * 1) <= 59) {
            $(contenedor_miembro).find('#grupo_etareo').text('Adultos 27-59 años');
        }
        if (60 < (edad * 1)) {
            $(contenedor_miembro).find('#grupo_etareo').text('Adultos Mayores 60 años en adelante');
        }
    });
    $('.num_beneficiario').on('change', function () {
        setMiembroNumBen($(this).val() * 1, $(this).index() + 1);
        $('.num_beneficiario option[value="' + $(this).val() + '"]:not(:selected)').hide();
        if ($(this).val() === 0) {
            $('.num_beneficiario option').show();
        }
    });

}
function  verficarMiembros() {
    if ($('.numdoc:last').val() === '' || $('.numdoc:last').val() === '0' || $('.numdoc:last').val() === 0) {
        var num = ($('.miembro:last').index() + 1);
        //console.log(num);
        delMiembro(num);
        $('.miembro').last().remove();
        $('.' + num).remove();
    }
    var miembro = $('.miembro').last();
    if (miembro.find('#num_identificacion').val() !== '' && $('.miembro:last').css('display') === 'block')
        $('#familia_tabla_v7').append('<tr><td>' + $('.nombre:last').val() + ' ' + $('.apellido:last').val() + '</td><td>' + (!$('.parentesco:last').val() ? 'Cabeza de familia' : $('.parentesco:last').find('option:selected').text()) + '</td><<td><a href="#" class="btn btn-primary a-btn-slide-text" onclick="mostrarMiembro(' + ($('.miembro:last').index()) + ')"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> <span></span></a></td>/tr>');
    $('.miembro').hide();
}


function mostrarPersonasInfo() {
    var cont = 0;
    var nombres = $('.miembro .nombre');
    var segundo = $('.miembro .segundo');
    var apellido = $('.miembro .apellido');
    var apelli_dos = $('.miembro .segundap');
    var nacimiento = $('.miembro .nacimiento');
    var ciudad = $('.miembro .ciudad');
    var tipo_doc = $('.miembro .tipodoc');
    var fecha_exp = $('.miembro .expedoc');
    var num_doc = $('.miembro .numdoc');
    var civil = $('.miembro .civil');
    var sexo = $('.miembro .sexo');
    var parentesco = $('.miembro .parentesco');
    var num_bfs = $('.miembro .num_beneficiario');
    $.each(info_ficha.miembros, function (indice, persona) {
        $(nombres[cont]).val(persona.identificacion.nombre_uno);
        $(segundo[cont]).val(persona.identificacion.nombre_dos);
        $(apellido[cont]).val(persona.identificacion.apellido_uno);
        $(apelli_dos[cont]).val(persona.identificacion.apellido_dos);
        $(nacimiento[cont]).val(DateFormat(persona.identificacion.fecha_nacimiento));
        $(ciudad[cont]).val(persona.identificacion.ciudad_nacimiento);
        $(tipo_doc[cont]).val(persona.identificacion.tipo_documento);
        $(fecha_exp[cont]).val(DateFormat(persona.identificacion.fecha_expedicion));
        $(num_doc[cont]).val(persona.identificacion.num_identificacion);
        $(civil[cont]).val(persona.identificacion.estado_civil);
        $(sexo[cont]).val(persona.identificacion.sexo);
        $(parentesco[cont]).val(persona.identificacion.parentesco);
        $(num_bfs[cont]).val(persona.num_ben);
        calGrupo(nacimiento[cont]);
        cont++;
    });

}
function setPersonasInfo() {
    var cont = 0;
    var nombres = $('.miembro .nombre');
    var segundo = $('.miembro .segundo');
    var apellido = $('.miembro .apellido');
    var apelli_dos = $('.miembro .segundap');
    var nacimiento = $('.miembro .nacimiento');
    var ciudad = $('.miembro .ciudad');
    var tipo_doc = $('.miembro .tipodoc');
    var fecha_exp = $('.miembro .expedoc');
    var num_doc = $('.miembro .numdoc');
    var civil = $('.miembro .civil');
    var sexo = $('.miembro .sexo');
    var parentesco = $('.miembro .parentesco');
    $.each(info_ficha.miembros, function (indice, persona) {
        if ($(nombres[cont]).val() !== '' && $(apellido[cont]).val() !== '') {
            persona.identificacion.nombre_uno = $(nombres[cont]).val();
            persona.identificacion.nombre_dos = $(segundo[cont]).val();
            persona.identificacion.apellido_uno = $(apellido[cont]).val();
            persona.identificacion.apellido_dos = $(apelli_dos[cont]).val();
            persona.identificacion.fecha_nacimiento = $(nacimiento[cont]).val() !== '' ? "'" + DateFormat($(nacimiento[cont]).val()) + "'" : 'null';
            persona.identificacion.ciudad_nacimiento = $(ciudad[cont]).val();
            persona.identificacion.tipo_documento = $(tipo_doc[cont]).val();
            persona.identificacion.fecha_expedicion = $(fecha_exp[cont]).val() !== '' ? "'" + DateFormat($(fecha_exp[cont]).val()) + "'" : 'null';
            persona.identificacion.num_identificacion = $(num_doc[cont]).val();
            persona.identificacion.estado_civil = $(civil[cont]).val();
            persona.identificacion.sexo = $(sexo[cont]).val();
            persona.identificacion.parentesco = $(parentesco[cont]).val();
        } else {

            delMiembro(cont);
            eliminarFormCaract();
        }
        cont++;
    });
}
function calGrupo(fecha) {
    var contenedor_miembro = $(fecha).parent().parent().parent();
    var nacimiento = $(contenedor_miembro).find('#fecha_nacimiento').val();
    var edad = getAge(nacimiento);

    if (0 <= (edad * 1) && (edad * 1) <= 5) {
        $(contenedor_miembro).find('#grupo_etareo').text('Primera Infancia 0-5 años');
    }
    if (5 < (edad * 1) && (edad * 1) <= 12) {
        $(contenedor_miembro).find('#grupo_etareo').text('Infancia 6-12 años');
    }
    if (12 < (edad * 1) && (edad * 1) <= 17) {
        $(contenedor_miembro).find('#grupo_etareo').text('Adolescencia 13-17 años');
    }
    if (17 < (edad * 1) && (edad * 1) <= 26) {
        $(contenedor_miembro).find('#grupo_etareo').text('Jovenes 18-26 años');
    }
    if (27 < (edad * 1) && (edad * 1) <= 59) {
        $(contenedor_miembro).find('#grupo_etareo').text('Adultos 27-59 años');
    }
    if (60 < (edad * 1)) {
        $(contenedor_miembro).find('#grupo_etareo').text('Adultos Mayores 60 años en adelante');
    }
}
function eliminarFormCaract() {
    $('.seccion_servicios_sociales').last().remove();
    $('.seccion_caracterizacion').last().remove();
    $('.seccion_economica').last().remove();
}

function setPersonasCarac() {
    var cont = 0;
    var etnia = $('.etnia');
    var genero = $('.genero');
    var orientacion = $('.orientacion');
    var tipo_discapacidad = $('.tipo_discapacidad');
    var cabeza_famlia = $('.cabeza_famlia');
    var victima = $('.victima');
    var registro_victimas = $('.registro_victimas');
    var desplazado = $('.desplazado');
    var retorno = $('.retorno');
    var desmovilizado = $('.desmovilizado');
    $.each(info_ficha.miembros, function (indice, persona) {
        persona.caracterizacion.etnia = $(etnia[cont]).val();
        persona.caracterizacion.genero = $(genero[cont]).val();
        persona.caracterizacion.orientacion = $(orientacion[cont]).val();
        persona.caracterizacion.discapacidad = $(tipo_discapacidad[cont]).val();
        persona.caracterizacion.tipo_discapacidad = $(tipo_discapacidad[cont]).val();
        persona.caracterizacion.cabeza_famlia = $(cabeza_famlia[cont]).val();
        persona.caracterizacion.victima = $(victima[cont]).val();
        persona.caracterizacion.registro_victimas = $(registro_victimas[cont]).val();
        persona.caracterizacion.desplazado = $(desplazado[cont]).val();
        persona.caracterizacion.retorno = $(retorno[cont]).val();
        persona.caracterizacion.desmovilizado = $(desmovilizado[cont]).val();
        cont++;
    });
}
function traerPersonasCarac() {

    var cont = 0;
    var etnia = $('.etnia');
    var genero = $('.genero');
    var orientacion = $('.orientacion');
    var tipo_discapacidad = $('.tipo_discapacidad');
    var cabeza_famlia = $('.cabeza_famlia');
    var victima = $('.victima');
    var registro_victimas = $('.registro_victimas');
    var desplazado = $('.desplazado');
    var retorno = $('.retorno');
    var desmovilizado = $('.desmovilizado');
    $.each(info_ficha.miembros, function (indice, persona) {
        $(etnia[cont]).val(persona.caracterizacion.etnia);
        $(genero[cont]).val(persona.caracterizacion.genero);
        $(orientacion[cont]).val(persona.caracterizacion.orientacion);
        $(tipo_discapacidad[cont]).val(persona.caracterizacion.tipo_discapacidad);
        $(cabeza_famlia[cont]).val(persona.caracterizacion.cabeza_famlia + '');
        $(victima[cont]).val(persona.caracterizacion.victima + '');
        $(registro_victimas[cont]).val(persona.caracterizacion.registro_victimas + '');
        $(desplazado[cont]).val(persona.caracterizacion.desplazado + '');
        $(retorno[cont]).val(persona.caracterizacion.retorno + '');
        $(desmovilizado[cont]).val(persona.caracterizacion.desmovilizado + '');
        cont++;
    });
}
function setPersonasServicios() {
    var cont = 0;
    var serv = $('.servicio_so');
    var otro_ser = $('.otro');
    var ult_grado = $('.ultimo_grado');
    var lectoescritura = $('.lectoescritura');
    var estudia = $('.estudia');
    var razon_desescolaridad = $('.razon_desescolaridad');
    var otra_razon = $('.cual-razon');
    var asiste_jardin = $('.asiste_jardin');
    var regimen = $('.regimen');
    var enfermedad = $('.enfermedad');
    var cual_enfermedad = $('.cual_enfermedad');
    var diagnostico = $('.diagnostico');
    var sistema_salud = $('.sistema_salud');
    $.each(info_ficha.miembros, function (indice, persona) {
        persona.serv_sociales.servicio = $(serv[cont]).val();
        persona.serv_sociales.otro = $(otro_ser[cont]).val();
        persona.educacion.lectoescritura = $(lectoescritura[cont]).val();
        persona.educacion.ultimo_grado = $(ult_grado[cont]).val();
        persona.educacion.estudia = $(estudia[cont]).val();
        persona.educacion.razon_desescolaridad = $(razon_desescolaridad[cont]).val();
        persona.educacion.otra_razon = $(otra_razon[cont]).val();
        persona.educacion.asiste_jardin = $(asiste_jardin[cont]).val();
        persona.salud.sistema_salud = $(sistema_salud[cont]).val();
        persona.salud.regimen = $(regimen[cont]).val();
        persona.salud.enfermedad = $(enfermedad[cont]).val();
        persona.salud.cual_enfermedad = $(cual_enfermedad[cont]).val();
        persona.salud.diagnostico = $(diagnostico[cont]).val();
        cont++;
    });
}
function traerPersonasServicios() {
    var cont = 0;
    var serv = $('.servicio_so');
    var otro_ser = $('.otro');
    var ult_grado = $('.ultimo_grado');
    var lectoescritura = $('.lectoescritura');
    var estudia = $('.estudia');
    var razon_desescolaridad = $('.razon_desescolaridad');
    var otra_razon = $('.cual-razon');
    var asiste_jardin = $('.asiste_jardin');
    var regimen = $('.regimen');
    var enfermedad = $('.enfermedad');
    var cual_enfermedad = $('.cual_enfermedad');
    var diagnostico = $('.diagnostico');
    var sistema_salud = $('.sistema_salud');
    $.each(info_ficha.miembros, function (indice, persona) {
        $(serv[cont]).val(persona.serv_sociales.servicio + '');
        $(otro_ser[cont]).val(persona.serv_sociales.otro + '');
        $(ult_grado[cont]).val(persona.educacion.ultimo_grado + '');
        $(estudia[cont]).val(persona.educacion.estudia + '');
        $(razon_desescolaridad[cont]).val(persona.educacion.razon_desescolaridad + '');
        $(otra_razon[cont]).val(persona.educacion.otra_razon + '');
        $(asiste_jardin[cont]).val(persona.educacion.asiste_jardin + '');
        $(sistema_salud[cont]).val(persona.salud.sistema_salud + '');
        $(regimen[cont]).val(persona.salud.regimen + '');
        $(enfermedad[cont]).val(persona.salud.enfermedad + '');
        $(cual_enfermedad[cont]).val(persona.salud.cual_enfermedad + '');
        $(diagnostico[cont]).val(persona.salud.diagnostico + '');
        $(lectoescritura[cont]).val(persona.educacion.lectoescritura + '');
        cont++;
    });
}
function setPersonasEconomia() {
    var cont = 0;
    var ocupacion = $('.ocupacion');
    var lugar = $('.lugar');
    var destinacion = $('.destinacion_predio');

    var experiencia = $('.experiencia');
    var tiempo_exp = $('.tiempo_exp');
    var trabajo_remunerado = $('.trabajo_remunerado');
    var cual_trabajo = $('.cual_trabajo');
    $.each(info_ficha.miembros, function (indice, persona) {
        persona.economia.ocupacion = $(ocupacion[cont]).val();
        persona.economia.trabajo_remunerado = $(trabajo_remunerado[cont]).val();
        persona.economia.cual_trabajo = $(cual_trabajo[cont]).val();
        persona.economia.experiencia = $(experiencia[cont]).val();
        persona.economia.tiempo_exp = $(tiempo_exp[cont]).val();
        persona.economia.destinacion_predio = $(destinacion[cont]).val();
        persona.economia.lugar_trabajo = $(lugar[cont]).val();
        cont++;
    });
}
function traerPersonasEconomia() {
    var cont = 0;
    var ocupacion = $('.ocupacion');
    var lugar = $('.lugar');
    var destinacion = $('.destinacion_predio');
    var destinacion_padre = $('.destinacion_predio_padre');
    var experiencia = $('.experiencia');
    var tiempo_exp = $('.tiempo_exp');
    var trabajo_remunerado = $('.trabajo_remunerado');
    var cual_trabajo = $('.cual_trabajo');
    var no_residencial = false;
    $.each(info_ficha.miembros, function (indice, persona) {
        $(ocupacion[cont]).val(persona.economia.ocupacion + '');
        $(trabajo_remunerado[cont]).val(persona.economia.trabajo_remunerado + '');
        $(cual_trabajo[cont]).val(persona.economia.cual_trabajo + '');
        $(experiencia[cont]).val(persona.economia.experiencia + '');
        $(tiempo_exp[cont]).val(persona.economia.tiempo_exp + '');
        $(destinacion[cont]).val(persona.economia.destinacion_predio + '');
        $(destinacion_padre).val(persona.economia.destinacion_predio + '');
        $(lugar[cont]).val(persona.economia.lugar_trabajo + '');
        no_residencial = persona.economia.destinacion_predio === 6 ? true : false;
        cont++;
    });
    if (no_residencial) {
        $('#destinacion_inmueble').show();
    }

}
function agregarTablas() {
    $('#relaciones_table ,#tbdoy_probecono,#tbdoy_organiza,#tbdoy_probecono,#tbdoy_probeperso,#tbdoy_nopertenencia,#tbdoy_participacion,#tbdoy_caracter_org,#tbdoy_miembros_org,#tbdoy_organiza').empty();
    $('#tbdoy_frecuencia_pc,#tbdoy_sitio_pc,#tbdoy_uso_pc,#tbdoy_dispositivo_int,#tbdoy_frecuencia,#tbdoy_obejtivo_int').empty();
    $.each(info_ficha.miembros, function (indice, persona) {
        if (persona.identificacion.apellido_uno !== '' && persona.identificacion.nombre_uno !== '') {
            $('#relaciones_table').append('<tr class="sociocultural_relaciones ficha_test" id="sociocultural_relaciones"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_probecono').append('<tr class="sociocultural_prob_economicos ficha_test"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_probeperso').append('<tr class="sociocultural_prob_personales ficha_test"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_organiza').append('<tr class="sociocultural_org ficha_test"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_nopertenencia').append('<tr class="sociocultural_nopertenencia ficha_test"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td>      <td></td><td></td></tr>');
            $('#tbdoy_participacion').append('<tr class="sociocultural_partici_org" ><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td></tr> ');
            $('#tbdoy_caracter_org').append('<tr class="sociocultural_caracter_org ficha_test" ><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_miembros_org').append('<tr class="sociocultural_personas_org ficha_test" ><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
//       tecnologia
            $('#tbdoy_frecuencia_pc').append('<tr class="tec_frecuencia "><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_sitio_pc').append('<tr class="tec_sitio ficha_test"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_uso_pc').append('<tr class="tec_uso ficha_test"><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_dispositivo_int').append('<tr class="tec_disp" ><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> ');
            $('#tbdoy_obejtivo_int').append('<tr class="tec_obj_int ficha_test" ><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            $('#tbdoy_frecuencia').append('<tr class="tec_frecu ficha_test" ><th>' + persona.identificacion.nombre_uno + ' ' + persona.identificacion.nombre_dos + '</th><td></td><td></td><td></td><td></td><td></td></tr>');
        }

        $('.destinancion').on('change', function () {
            //console.log('destinacion change')
            if ($(this).val() === '0') {
                $(this).parent().parent().find('#cual_trabajo').attr('disabled', 'disabled');
            } else if ($(this).val() === '1') {
                $(this).parent().parent().find('#cual_trabajo').removeAttr('disabled');
            }

        });
    });
}

//matrices dimension sociocultural
//paso 7 sociocltural
var matriz_relaciones = [];
var problemas_economicos = [];
var problemas_personales = [];
var organizaciones = [];
var no_pertenencia = [];
var participacion = [];
var caracter_org = [];
var persona_org = [];
//paso 9 tecnologia
var contador_orden = 1;
var frecuencia_pc = [];
var uso_computador = [];
var objetivo_pc = [];
var frecuencia_internet = [];
var disp_acceso = [];
var actividades_int = [];

function MatricesSociocultural() {
//    paso 7
    var relaciones = [false, false, false, false];
    var prob_economicos = [false, false, false, false, false, false, false, false, false, false, false];
    var prob_personales = [false, false, false, false, false, false, false, false, false, false];
    var org_per = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  
    var no_pert = [false, false, false, false, false, false, false, false, false];
    var carac_persona = [false, false, false, false];
    var num_per = [false, false, false, false, false, false];
    var cont = 0;
    $.each(info_ficha.miembros, function (indice, persona) {
        if (persona.sociocultural.relaciones_barrio.relaciones)
            matriz_relaciones[cont] = persona.sociocultural.relaciones_barrio.relaciones;
        else
            matriz_relaciones[cont] = relaciones;

        if (persona.sociocultural.problemas_econimicos.problemas)
            problemas_economicos[cont] = persona.sociocultural.problemas_econimicos.problemas;
        else
            problemas_economicos[cont] = prob_economicos;

        if (persona.sociocultural.problemas_personales.problemas)
            problemas_personales[cont] = persona.sociocultural.problemas_personales.problemas;
        else
            problemas_personales[cont] = prob_personales;

        if (persona.sociocultural.organizaciones.organizaciones)
            organizaciones[cont] = persona.sociocultural.organizaciones.organizaciones;
        else
            organizaciones[cont] = org_per;

        if (persona.sociocultural.no_pertenencia.razones)
            no_pertenencia[cont] = persona.sociocultural.no_pertenencia.razones;
        else
            no_pertenencia[cont] = no_pert;

        participacion[cont] = persona.sociocultural.participacion_org ? [true, false] : [false, true];

        if (persona.sociocultural.caracter_org.caracter)
            caracter_org[cont] = persona.sociocultural.caracter_org.caracter;
        else
            caracter_org[cont] = carac_persona;

        if (persona.sociocultural.miembros_org.miembros)
            persona_org[cont] = persona.sociocultural.miembros_org.miembros;
        else
            persona_org[cont] = num_per;
        cont++;
    });
    if (matriz_relaciones.length > 0) {
        var mat_relaciones_grafica = $('#relaciones_table').find('tr');
        $.each(mat_relaciones_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                //console.log(columna);
                //console.log(ind);
                if (matriz_relaciones[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (problemas_economicos.length > 0) {
        var mat_poreco_grafica = $('#tbdoy_probecono').find('tr');
        $.each(mat_poreco_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (problemas_economicos[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (problemas_personales.length > 0) {
        var mat_probper_grafica = $('#tbdoy_probeperso').find('tr');
        $.each(mat_probper_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (problemas_personales[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (organizaciones.length > 0) {
        var mat_org_grafica = $('#tbdoy_organiza').find('tr');
        $.each(mat_org_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (organizaciones[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (no_pertenencia.length > 0) {
        var mat_nopert_grafica = $('#tbdoy_nopertenencia').find('tr');
        $.each(mat_nopert_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (no_pertenencia[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (caracter_org.length > 0) {
        var mat_nopert_grafica = $('#tbdoy_caracter_org').find('tr');
        $.each(mat_nopert_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (caracter_org[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (participacion.length > 0) {
        var mat_part_grafica = $('#tbdoy_participacion').find('tr');
        $.each(mat_part_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (participacion[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (persona_org.length > 0) {
        var mat_numper_grafica = $('#tbdoy_miembros_org').find('tr');
        $.each(mat_numper_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (persona_org[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
}
function MatricesTecnologia() {
//paso 9
    var cont = 0;
    var frec_pc = [false, false, false, false, false];
    var uso_pc = [false, false, false, false, false, false];
    var obj_pc = [0, 0, 0, 0];
    var frec_int = [false, false, false, false, false];
    var dis_acc = [false, false, false, false, false, false, false, false];
    var act_int = [false, false, false, false, false, false, false, false, false, false];

    $.each(info_ficha.miembros, function (ind, miembro) {

        if (!miembro.tecnologias.obj_uso_computador.objetivos)
            objetivo_pc[cont] = obj_pc;
        if (!miembro.tecnologias.frecuencia_internet !== 0)
            frecuencia_internet[cont] = frec_int;

    });
    $.each(info_ficha.miembros, function (indice, persona) {
        if (persona.tecnologias.frecuencia_computador !== 0 && persona.tecnologias.frecuencia_computador > 0) {
            var arre = [false, false, false, false, false];
            arre[persona.tecnologias.frecuencia_computador - 1] = true;
            frecuencia_pc[cont] = arre;
        } else {
            frecuencia_pc[cont] = frec_pc;
        }

        if (persona.tecnologias.sitio_computador.sitios)
            uso_computador[cont] = persona.tecnologias.sitio_computador.sitios;
        else
            uso_computador[cont] = uso_pc;


        if (persona.tecnologias.obj_uso_computador.objetivos)
            objetivo_pc[cont] = persona.tecnologias.obj_uso_computador.objetivos;
        else
            objetivo_pc[cont] = obj_pc;


        if (persona.tecnologias.frecuencia_internet > 0 && persona.tecnologias.frecuencia_internet !== 0) {
            var arr = [false, false, false, false, false];
            arr[persona.tecnologias.frecuencia_internet - 1] = true;
            frecuencia_internet[cont] = arr;
        } else {
            frecuencia_internet[cont] = frec_int;
        }

        if (persona.tecnologias.dispositivo_internet.dispositivos)
            disp_acceso[cont] = persona.tecnologias.dispositivo_internet.dispositivos;
        else
            disp_acceso[cont] = dis_acc;

        if (persona.tecnologias.objetivo_internet.objetivos)
            actividades_int[cont] = persona.tecnologias.objetivo_internet.objetivos;
        else
            actividades_int[cont] = act_int;
        cont++;
    });
    if (frecuencia_pc.length > 0) {
        var mat_frecpc_grafica = $('#tbdoy_frecuencia_pc').find('tr');
        $.each(mat_frecpc_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (frecuencia_pc[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (uso_computador.length > 0) {
        var mat_usopc_grafica = $('#tbdoy_sitio_pc').find('tr');
        $.each(mat_usopc_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (uso_computador[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (objetivo_pc.length > 0) {
        var mat_objpc_grafica = $('#tbdoy_uso_pc').find('tr');
        $.each(mat_objpc_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (objetivo_pc[llave][ind]) {
                    $(columna).empty();
                    $(columna).append(objetivo_pc[llave][ind] + '');
                }
            });
        });
    }
    if (frecuencia_internet.length > 0) {
        var mat_freint_grafica = $('#tbdoy_frecuencia').find('tr');
        $.each(mat_freint_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (frecuencia_internet[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (disp_acceso.length > 0) {
        var mat_accint_grafica = $('#tbdoy_dispositivo_int').find('tr');
        $.each(mat_accint_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (disp_acceso[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
    if (actividades_int.length > 0) {
        var mat_actint_grafica = $('#tbdoy_obejtivo_int').find('tr');
        $.each(mat_actint_grafica, function (llave, fila) {
            var cols_graficas = $(fila).find('td');
            $.each(cols_graficas, function (ind, columna) {
                if (actividades_int[llave][ind]) {
                    $(columna).empty();
                    $(columna).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
                }
            });
        });
    }
}

function setMatricesSocicultural() {
    var cont = 0;
    $.each(info_ficha.miembros, function (ind, persona) {

        persona.sociocultural.relaciones_barrio.relaciones = matriz_relaciones[cont];
        persona.sociocultural.problemas_econimicos.problemas = problemas_economicos[cont];
        persona.sociocultural.problemas_personales.problemas = problemas_personales[cont];
        persona.sociocultural.organizaciones.organizaciones = organizaciones[cont];
        persona.sociocultural.no_pertenencia.razones = no_pertenencia[cont];
        persona.sociocultural.participacion_org = participacion [cont][0]?true:false;
        persona.sociocultural.caracter_org.caracter = caracter_org[cont];
        persona.sociocultural.miembros_org.miembros = persona_org[cont];
        cont++;
    });
}
function setMatricesTecnologia() {
    var cont = 0;
    $.each(info_ficha.miembros, function (ind, persona) {
        persona.tecnologias.frecuencia_computador = jQuery.inArray(true, frecuencia_pc [cont]) >= 0 ? jQuery.inArray(true, frecuencia_pc [cont]) + 1 : 'null';
        persona.tecnologias.sitio_computador.sitios = uso_computador[cont];
        persona.tecnologias.obj_uso_computador.objetivos = objetivo_pc[cont];
        persona.tecnologias.frecuencia_internet = jQuery.inArray(true, frecuencia_internet[cont]) >= 0 ? jQuery.inArray(true, frecuencia_internet[cont]) + 1 : 'null';
        persona.tecnologias.dispositivo_internet.dispositivos = disp_acceso[cont];
        persona.tecnologias.objetivo_internet.objetivos = actividades_int[cont];
        cont++;
    });
}

function eventosSociocultural() {
    $('#relaciones_table').find('td').addClass('rel_td');
    $('.rel_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        matriz_relaciones[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(matriz_relaciones);
    });
//problemas economicos
    $('#tbdoy_probecono').find('td').addClass('pb_td');
    $('.pb_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        problemas_economicos[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(problemas_economicos);
    });
//problemas personles
    $('#tbdoy_probeperso').find('td').addClass('pp_td');
    $('.pp_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        problemas_personales[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(problemas_personales);
    });
//organizaciones a las pertenece
    $('#tbdoy_organiza').find('td').addClass('org_td');
    $('.org_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        organizaciones[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(organizaciones);
    });
//razon no pertenencia a organizaciones
    $('#tbdoy_nopertenencia').find('td').addClass('np_td');
    $('.np_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        no_pertenencia[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(no_pertenencia);
    });
// ultimo año participacion
    $('#tbdoy_participacion').find('td').addClass('parti_td');
    $('.parti_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        participacion[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(participacion);
    });
// caracter organizaciones
    $('#tbdoy_caracter_org').find('td').addClass('cr_td');
    $('.cr_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        caracter_org[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(caracter_org);
    });
// miembro de la organización
    $('#tbdoy_miembros_org').find('td').addClass('mi_td');
    $('.mi_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        persona_org[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(persona_org);
    });
}

function eventosTecnologias() {
// eventos td paso 9

//     frecuencia utiliza computador 
    $('#tbdoy_frecuencia_pc').find('td').addClass('fupc_td');
    $('.fupc_td').on('click', function () {
        $(this).siblings('td').empty();
        var fila = $(this).parent().index();
        var columna = $(this).index();
        $.each(frecuencia_pc[fila], function (ind) {
            frecuencia_pc[fila][ind] = false;
        });
        frecuencia_pc[fila][columna - 1] = (!$(this).is(':empty'));

    });
    $('.sociocultural_partici_org').on('click', function () {
        $(this).siblings('td').empty();
        var fila = $(this).parent().index();
        var columna = $(this).index();
        $.each(frecuencia_pc[fila], function (ind) {
            frecuencia_pc[fila][ind] = false;
        });
        frecuencia_pc[fila][columna - 1] = (!$(this).is(':empty'));
    });
//sitios usa computador
    $('#tbdoy_sitio_pc').find('td').addClass('spc_td');
    $('.spc_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        uso_computador[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(uso_computador);
    });
//para qué utiliza principalmente computador (orden)
    $('#tbdoy_uso_pc').find('td').addClass('pupc_td');
    $('.pupc_td').on('click', function () {
        if (contador_orden > 4)
            contador_orden = 0;
        var fila = $(this).parent().index();
        var columna = $(this).index();
        objetivo_pc[fila][columna - 1] = contador_orden;
        $(this).text('' + contador_orden);
        contador_orden++;
    });
//ué frecuencia utiliza internet 
    $('#tbdoy_frecuencia').find('td').addClass('fui_td');
    $('.fui_td').on('click', function () {
        $(this).siblings('td').empty();
        var fila = $(this).parent().index();
        var columna = $(this).index();
        $.each(frecuencia_pc[fila], function (ind) {
            frecuencia_internet[fila][ind] = false;
        });
        frecuencia_internet[fila][columna - 1] = (!$(this).is(':empty'));

    });
//dispositivos utiliza para acceder a Internet
    $('#tbdoy_dispositivo_int').find('td').addClass('dui_td');
    $('.dui_td').on('click', function () {

        var fila = $(this).parent().index();
        var columna = $(this).index();

        disp_acceso[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(disp_acceso);
    });
// ervicios o actividades utiliza interne
    $('#tbdoy_obejtivo_int').find('td').addClass('aui_td');
    $('.aui_td').on('click', function () {
        var fila = $(this).parent().index();
        var columna = $(this).index();
        actividades_int[fila][columna - 1] = (!$(this).is(':empty'));
        //console.log(actividades_int);
    });
}


function eventosServicios() {
    $('.servicio_so').on('change', function () {
        if ($(this).val() === '6') {
            $(this).closest('.row').find('#otro').removeAttr('disabled');
        } else {
            $(this).closest('.row').find('#otro').val('');
            $(this).closest('.row').find('#otro').attr('disabled', 'disabled');
        }
    });
    $('.estudia').on('change', function () {
        if ($(this).val() === 'false') {
            $(this).closest('.row').find('#razon_desescolaridad').removeAttr('disabled');
        } else {
            $(this).closest('.row').find('#razon_desescolaridad').val(0);
            $(this).closest('.row').find('#razon_desescolaridad').attr('disabled', 'disabled');
        }
    });
    $('.razon_desescolaridad').on('change', function () {
        if ($(this).val() === '14') {
            $(this).closest('.panel-body').find('.cual-razon').removeAttr('disabled');
        } else {
            $(this).closest('.panel-body').find('.cual-razon').attr('disabled', 'disabled');
            $(this).closest('.panel-body').find('.cual-razon').val('');
        }
    });
    $('.enfermedad').on('change', function () {
        if ($(this).val() === 'true') {
            $(this).closest('.row').find('.cual_enfermedad').removeAttr('disabled');
            $(this).closest('.panel-body').find('.diagnostico').removeAttr('disabled');
        } else {
            $(this).closest('.row').find('.cual_enfermedad').attr('disabled', 'disabled');
            $(this).closest('.panel-body').find('.diagnostico').attr('disabled', 'disabled');
            $(this).closest('.row').find('.cual_enfermedad').val('');
        }
    });
}
function eventosEconomia() {
    $('.destinacion_predio_padre').on('change', function () {
        $('.destinacion_predio').val($(this).val());
        if ($(this).val() === '6') {
            $('#destinacion_inmueble').show();
        } else {
            $('#destinacion_inmueble').hide();
        }
    });
}

function aprobarFicha() {
    $datos = {
        op: 'aprobar_ficha',
        identificador: info_ficha.identificador,
        usr: usr_ref,
        observaciones: info_ficha.arraigo.comentarios
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
function devolverFicha() {
    $datos = {
        op: 'devolver_ficha',
        identificador: info_ficha.identificador,
        usr: usr_ref,
        observaciones: info_ficha.arraigo.comentarios
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
    $datos = {
        op: 'revision_ficha',
        identificador: info_ficha.identificador,
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
                identificador: info_ficha.identificador,
                usr: usr_ref
            };
            $.ajax({
                type: "POST",
                url: "GestionDML",
                data: $data,
                dataType: "json",
                success: function (response) {

                }
            });
            alert('se envio la ficha para aprobación');
            window.top.location.reload();
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

        if (curInputs[i].type === 'date') {
            var hoy = new Date();
            var minimo = new Date('1900-01-01');
            var valor = new Date(curInputs[i].value);
            if (hoy < valor) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
                $(curInputs[i]).closest(".miembro").show();
            }
            if (valor < minimo) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
                $(curInputs[i]).closest(".miembro").show();
            }
        }
    }

    return isValid;
}

//eventos general
$('#destinacion_inmueble').hide();
//$('#destinacion_inmueble input,#destinacion_inmueble select,#destinacion_inmueble textarea').attr('disabled', 'disabled');

$('#add_miembro_v7').on('click', function () {
    var miembro = $('.miembro').last();
    if (miembro.find('#num_identificacion').val() !== '') {
        if ($('.miembro:last').css('display') === 'block')
            $('#familia_tabla_v7').append('<tr><td>' + $('.nombre:last').val() + ' ' + $('.apellido:last').val() + '</td><td>' + (!$('.parentesco:last').val() ? 'Cabeza de familia' : $('.parentesco:last').find('option:selected').text()) + '</td><<td><a href="#" class="btn btn-primary a-btn-slide-text" onclick="mostrarMiembro(' + ($('.miembro:last').index()) + ')"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> <span></span></a></td>/tr>');
        $('.miembro').hide();
        $("<div></div>").addClass('miembro').appendTo("#miembros_v7").load("secciones_ficha_social.html #seccion_identificacion");
        comportamientoInfoBasica();
        addMiembro((($('.miembro').last().index()) + 1));
        setMiembroOrden(($('.miembro').last().index()) + 1, ($('.miembro').last().index()) + 1);
        $("<div></div>").addClass((($('.miembro').last().index()) + 1) + '').appendTo("#caract_miembro").load("secciones_ficha_social.html #seccion_caracterizacion");
        $("<div></div>").addClass((($('.miembro').last().index()) + 1) + '').appendTo("#servi_miembro").load("secciones_ficha_social.html #seccion_servicios_sociales");
        $("<div></div>").addClass((($('.miembro').last().index()) + 1) + '').appendTo("#economi_miembro").load("secciones_ficha_social.html #seccion_economica");
    }
    comportamientoInfoBasica();

});
$('#aprobar_social').on('click', function () {
    if (apro_ficha)
        aprobarFicha();
});
$('#devolver_social').on('click', function () {
    if (apro_ficha)
        devolverFicha();
});
$('#btn_enviar').on('click', function () {
    enviarFicha();
});
if (apro_ficha) {
    $('.btn_enviar').hide();
    $('.btn_siguiente').hide();
    $('#comentarios').prop('disabled', false);
} else {
    $('#aprobar_social').hide();
    $('#devolver_social').hide();
    $('#comentarios').attr('disabled', 'disabled');

}
$('.mascotas input, .mascotas select').on('change', function () {
    var etiqueta = $(this).attr('id');
    var actual = {};
    actual[etiqueta] = $(this).val();
    setSociocultural(actual);
});
$('#tipo_famlia').on('change', function () {
    setTipoFamlia($(this).val());
});
if (!apro_ficha) {
    $('#btn_aprobar').hide();
} else {
    $('#btn_enviar').hide();
}
$('.num_beneficiario').on('change', function () {
    console.log($(this).val());
    console.log($(this).index() + 1);
    setMiembroNumBen($(this).val(), $(this).index() + 1);
});
$('#step-7').find('td').on('click', function () {
    if ($(this).is(':empty')) {
        $(this).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
    } else {
        $(this).empty();
    }
});
$('#step-9').find('td').on('click', function () {
    if ($(this).is(':empty')) {
        $(this).append('<span class="glyphicon glyphicon-ok-circle text-success" aria-hidden="true"></span>');
    } else {
        $(this).empty();
    }
});
$('#step-10 input,#step-10 select,#step-10 textarea').on('change', function () {
    var etiqueta = $(this).attr('id');
    var actual = {};
    actual[etiqueta] = $(this).val();
    setArraigo(actual);
});
$('#step-9 input,#step-9 select,#step-9 textarea').on('change', function () {
    var etiqueta = $(this).attr('id');
    var actual = {};
    actual[etiqueta] = $(this).val();
    setTecnologia(actual);
});
$('#step-8 .cerca').on('change', function () {
    var etiqueta = $(this).attr('class');
    var actual = {};
    var cerca_vivienda = {};
    var lugares = {};
    $.each($('.cerca'), function (ind, elemento) {
        var llave = $(elemento).val();
        var valor = $(elemento).prop('checked');
        lugares[llave] = valor;
    });
    cerca_vivienda['lugares'] = lugares;
    actual['cerca_viv'] = cerca_vivienda;
//    console.log(actual);
    setAmbiental(actual);
});
$('#step-8 .problemas').on('change', function () {
    var actual = {};
    var cerca_vivienda = {};
    var lugares = {};
    $.each($('.problemas'), function (ind, elemento) {
        var llave = $(elemento).val();
        var valor = $(elemento).prop('checked');
        lugares[llave] = valor;
    });
    cerca_vivienda['problemas'] = lugares;
    actual['problemas_sector'] = cerca_vivienda;
//    console.log(actual);
    setAmbiental(actual);
});
$('#step-8 .basuras').on('change', function () {
    var actual = {};
    var cerca_vivienda = {};
    var lugares = {};
    $.each($('.basuras'), function (ind, elemento) {
        var llave = $(elemento).val();
        var valor = $(elemento).prop('checked');
        lugares[llave] = valor;
    });
    cerca_vivienda['basuras'] = lugares;
    actual['basuras'] = cerca_vivienda;
//    console.log(actual);
    setAmbiental(actual);
});
$('#step-8 .reduct-consumo').on('change', function () {
    var actual = {};
    var cerca_vivienda = {};
    var lugares = {};
    $.each($('.reduct-consumo'), function (ind, elemento) {
        var llave = $(elemento).val();
        var valor = $(elemento).prop('checked');
        lugares[llave] = valor;
    });
    cerca_vivienda['consumo'] = lugares;
    actual['practicas_consumo'] = cerca_vivienda;
//    console.log(actual);
    setAmbiental(actual);
});
$('#step-6 input,#step-6 select,#step-6 textarea').on('change', function () {

    var etiqueta = $(this).attr('id');
    var actual = {};
    actual[etiqueta] = $(this).is(':checkbox') ? $(this).prop('checked') : $(this).val();
    setCaracterizacion(actual);
});
$('#step-5 input,#step-5 select').on('change', function () {
    var etiqueta = $(this).attr('id');
    var actual = {};
    actual[etiqueta] = $(this).is(':checkbox') ? $(this).prop('checked') : $(this).val();
    setEconomica(actual);
});
$('#step-5 input,#step-5 select').on('change', function () {
    var etiqueta = $(this).attr('id');
    var actual = {};
    actual[etiqueta] = $(this).is(':checkbox') ? $(this).prop('checked') : $(this).val();
    setEconomica(actual);
});
$('#step-6 .destinacion_predio').on('change', function () {
    if ($(this).val() !== '1') {
        $('#destinacion_inmueble').show();
    } else {
        $('#destinacion_inmueble').hide();
    }
}
);
$('#add_mascota').on('click', function () {
    $('#mascotas_pull').append('<div class="row masc masc-sec"><div class="col-lg-3">10.2. ¿Cuántos?</div><div class="col-lg-3"><input class="form-control masc-cuantos" value="0" type="number"   min="0"  id="cuantos"></div><div class="col-lg-3">10.2. ¿Qué tipo?</div><div class="col-lg-3"><select class="form-control tipo-masc" id="tipo_animal"> <option value="0"   >Seleccione..</option> <option value="1"  >Canino</option> <option value="2"  >Felino</option> <option value="3"  >Ave</option> <option value="4"  >Roedor</option> <option value="5"  >Aracnido</option>   <option value="6"  >Pez</option>  </select></div></div>');
    $('.masc-cuantos').on('change', function () {
        var valor = $(this).val();
        var js = {};
        js[$(this).parent().parent().find('.tipo-masc').val() + ''] = valor;
        setMascotasJSON(js);
    });
    $('.tipo-masc').on('change', function () {
        var llave = $(this).val() + '';
        var js = {};
        console.log(llave);
        js[llave + ''] = $(this).parent().parent().find('.masc-cuantos').val();
        setMascotasJSON(js);
    });
});
$('#rm_mascota').on('click', function () {
    $('.masc-sec').last().remove();
    var llave = $('.masc-sec').last().find('.tipo-masc').val() + '';
    delete info_ficha.viv_sociocultural.mascotas_json[llave];
});
$('.masc-cuantos').on('change', function () {
    var valor = $(this).val();
    var js = {};
    if ($(this).parent().parent().find('.tipo-masc').val() !== 0) {
        js[$(this).parent().parent().find('.tipo-masc').val() + ''] = valor;
        setMascotasJSON(js);

    }
});
$('.tipo-masc').on('change', function () {
    var llave = $(this).val() + '';
    $(".tipo-masc").find("option:contains('Value " + ($(this).val()) + "')").attr("disabled", "disabled");
    var js = {};
    console.log(llave);
    js[llave + ''] = $(this).parent().parent().find('.masc-cuantos').val();
    setMascotasJSON(js);
});



