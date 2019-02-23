var info_ficha = {
    usr_insert: 0,
    usr_upd: 0,
    identificador: '',
    tipo_famlia: 0,
    version: 7,
    estado: 1,

    identificacion_predio: {
        concepto: '',
        fecha_concepto: "null",
        direccion_par: '',
        manzana: '',
        lote: '',
        barrio: '',
        localidad: ''
    },
    info_economica: {
        ingreso: 0,
        egreso: 0,
        moto: 'null',
        num_motos: 0,
        carro: 'null',
        num_carros: 0,
        bicicletas: 'null',
        num_bici: 0,
        destinacion: 0,
        actividad: '',
        razon_social: '',
        otros_propietarios: '',
        ubicacion_clientes: 0,
        formalizada: 'NULL',
        valor_desarrollo: 0,
        produccion: 0,
        valor_herramientas: 0,
        empleados: 0,
        area_actividad: 0
    },
    carac_vivienda: {
        tipo_vivienda: 0,
        otro_tipo: '',
        calidad_tenencia: 0,
        documento_tenencia: 0,
        otro_doc: '',
        acueducto: 'null',
        consumo_agua: 0,
        energia: 'null',
        consumo_energia: 0,
        gas: 'null',
        consumo_gas: 0,
        num_pisos: 0,
        num_banos: 0,
        num_cuartos: 0,
        num_cocinas: 0,
        material_paredes: 'null',
        material_pisos: 'null',
        impacto_paredes: 'null',
        desc_impacto: '',
        num_unidades: 1,
        conciencia_riesgo: ''
    },
    viv_sociocultural: {
        animales: 'null',
        cuantos: 0,
        tipo_animal: 0,
        mascotas_json: {}
    },
    capital_ambiental: {
        cerca_viv: {viv: true},
        problemas_sector: {viv: true},
        basuras: {bas: true},
        practicas_consumo: {cons: true}
    },
    viv_tecnologia: {
        tiene_pc: 'null',
        cuantos_pc: 0,
        uso_pc: 0,
        tiene_laptop: 'null',
        cuantos_laptop: 0,
        uso_laptop: 0,
        tiene_tablet: 'null',
        cuantas_tablet: 0,
        uso_tablet: 0
    },
    arraigo: {
        tiempo_zona: 0,
        gusto_ubicacion: 'null',
        gusto_vivienda: 'null',
        gusto_vecindario: 'null',
        salida_predio: 0,
        porque_salida: '',
        importancia_zona: 0,
        porque_importancia: '',
        comentarios: '',
        observaciones: ''
    },
    miembros: {}
};

var miembro_model = {
    id_miembro: 0,
    orden: 0,
    num_ben: 0,
    identificacion: {
        parentesco: 0,
        nombre_uno: "",
        nombre_dos: "",
        apellido_uno: "",
        apellido_dos: "",
        fecha_nacimiento: "null",
        ciudad_nacimiento: "Bogotá",
        tipo_documento: 0,
        fecha_expedicion: "null",
        num_identificacion: 0,
        estado_civil: 0,
        sexo: 0
    },
    caracterizacion: {
        etnia: 0,
        genero: 0,
        orientacion: 0,
        discapacidad: 'null',
        tipo_discapacidad: 0,
        cabeza_famlia: 'null',
        victima: 'null',
        registro_victimas: 'null',
        desplazado: 'null',
        retorno: 'null',
        desmovilizado: 'null'
    },
    serv_sociales: {
        servicio: 0,
        otro: ''
    },
    educacion: {
        lectoescritura: 'null',
        ultimo_grado: 0,
        otro_grado: '',
        estudia: 'null',
        razon_desescolaridad: 0,
        otra_razon: '',
        asiste_jardin: 'null'
    },
    salud: {
        sistema_salud: 'null',
        regimen: 0,
        enfermedad: 'null',
        cual_enfermedad: '',
        diagnostico: 'null'
    },
    economia: {
        ocupacion: 0,
        trabajo_remunerado: 'null',
        cual_trabajo: '',
        experiencia: 'null',
        tiempo_exp: '',
        destinacion_predio: 0,
        lugar_trabajo: 0
    },
    sociocultural: {
        relaciones_barrio: {"relaciones": [false, false, false, false]},
        problemas_econimicos: {"problemas": [false, false, false, false, false, false, false, false, false, false, false]},
        problemas_personales: {"problemas": [false, false, false, false, false, false, false, false, false, false]},
        organizaciones: {"organizaciones": [false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
        no_pertenencia: {"razones": [false, false, false, false, false, false, false, false, false]},
        participacion_org: false,
        caracter_org: {"caracter": [false, false, false, false]},
        miembros_org: {"miembros": [false, false, false, false, false, false]}
    },
    tecnologias: {
        frecuencia_computador: 0,
        sitio_computador: {"sitios": [false, false, false, false, false, false]},
        obj_uso_computador: {"objetivos": [0, 0, 0, 0]},
        frecuencia_internet: 0,
        dispositivo_internet: {"dispositivos": [false, false, false, false, false, false, false, false]},
        objetivo_internet: {"objetivos": [false, false, false, false, false, false, false, false, false, false]}
    }
};
var beneficiarios;

function setInfoFicha(info) {
    $.extend(true, info_ficha, info);
}
//funciones que modifican la informacion de la ficha
function setUser(id) {
    if (info_ficha.usr_insert === 0)
        info_ficha.usr_insert = id;
    else
        info_ficha.usr_upd = id;
}
function setIdentificador(identificador) {
    info_ficha.identificador = identificador;
}
function setTipoFamlia(tipo) {
    info_ficha.tipo_famlia = tipo;
}
function setIdentificacion(identificacion) {
    $.extend(true, info_ficha.identificacion_predio, identificacion);
}
function setEconomica(economia) {
    $.extend(true, info_ficha.info_economica, economia);
}
function setActividad(actividad) {
    $.extend(true, info_ficha.info_actividad_par, actividad);
}
function setCaracterizacion(caracterizacion) {
    $.extend(true, info_ficha.carac_vivienda, caracterizacion);
}
function setSociocultural(sociocultural) {
    $.extend(true, info_ficha.viv_sociocultural, sociocultural);
}
function setMascotasJSON(macotas) {
    $.extend(true, info_ficha.viv_sociocultural.mascotas_json, macotas);
}

function setAmbiental(ambiental) {
    $.extend(info_ficha.capital_ambiental, ambiental);
}
function setTecnologia(tecnologia) {
    $.extend(true, info_ficha.viv_tecnologia, tecnologia);
}
function setArraigo(arraigo) {
    $.extend(true, info_ficha.arraigo, arraigo);
}
function addMiembro(indice) {
    var miem = jQuery.extend(true, {}, miembro_model);
    info_ficha.miembros['miembro' + indice] = miem;
}
function delMiembro(indice) {
    if (info_ficha.miembros['miembro' + indice].id_miembro === 0)
        delete info_ficha.miembros['miembro' + indice];
}

//funciones que modifican un miembroespecifico
function setMiembroId(id, orden) {
    info_ficha.miembros['miembro' + orden].id_miembro = id;
}
function setMiembroOrden(orden, indice) {
    var o = 'miembro' + indice;
    info_ficha.miembros[o].orden = orden;
}
function setMiembroNumBen(num, indice) {
    var o = 'miembro' + indice;
    info_ficha.miembros[o].num_ben = num;
}
function setMiembroIdentificacion(orden, identificacion) {
    $.extend(true, info_ficha.miembros['miembro' + orden].identificacion, identificacion);
}
function setMiembroCaracterizacion(orden, caracterizacion) {
    $.extend(true, info_ficha.miembros['miembro' + orden].caracterizacion, caracterizacion);
}
function setMiembroServicios(orden, sociales) {
    $.extend(true, info_ficha.miembros['miembro' + orden].serv_sociales, sociales);
}
function setMiembroEducacion(orden, educacion) {
    $.extend(true, info_ficha.miembros['miembro' + orden].educacion, educacion);
}
function setMiembroSalud(orden, salud) {
    $.extend(true, info_ficha.miembros['miembro' + orden].salud, salud);
}
function setMiembroEconomia(orden, economia) {
    $.extend(true, info_ficha.miembros['miembro' + orden].economia, economia);
}
function setMiembroSociocultural(orden, sociocultural) {
    $.extend(true, info_ficha.miembros['miembro' + orden].sociocultural, sociocultural);
}
function setMiembroTecnologia(orden, tecnologias) {
    $.extend(true, info_ficha.miembros['miembro' + orden].tecnologias, tecnologias);
}

//funciones para salvar la informacion de la ficha
function crearFicha() {
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: {
            op: "insertar_ficha",
            identificador: info_ficha.identificador,
            usuario: info_ficha.usr_insert
        },
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log('ficha creada');
            }
        }
    });
}
function crearMiembro(indice) {
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: {
            op: "insertar_miembro",
            identificador: info_ficha.identificador,
            orden: indice
        },
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }

        }
    });
}
function salvarIdentificacion() {
    var dat = {
        op: "identificacion_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_upd
    };
    $.extend(true, dat, info_ficha.identificacion_predio);
//    console.log(dat);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {

            }
        }
    });
}
function salvarEconomia() {
    var dat = {
        op: "economia_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_upd
    };
    $.extend(true, dat, info_ficha.info_economica);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            console.log(response.total);

        }
    });
}

function salvarCaracterizacion() {
    var dat = {
        op: "caracterizacion_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_upd
    };
    $.extend(true, dat, info_ficha.carac_vivienda);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
            }
        }
    });
}
function salvarSociocultural() {
    var dat = {
        op: "sociocultural_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_insert
    };
    $.extend(true, dat, info_ficha.viv_sociocultural);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log('ficha creada');
            }
        }
    });
}

function salvarAmbiental() {
    var dat = {
        op: "ambiental_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_insert
    };
    $.extend(dat, info_ficha.capital_ambiental);
    $.each(dat, function (llave, valor) {
        if ($.type(valor) === 'object') {
            //console.log(JSON.stringify(valor));
            dat[llave] = JSON.stringify(valor);
        }

    });

//    //console.log(dat);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarTecnologia() {
    var dat = {
        op: "tecnologia_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_insert
    };
    $.extend(true, dat, info_ficha.viv_tecnologia);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarArraigo() {
    var dat = {
        op: "arraigo_vivienda",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_insert
    };
    $.extend(true, dat, info_ficha.arraigo);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarUsuario() {

    var dat = {
        op: "upd_usuario_ficha",
        identificador: info_ficha.identificador,
        usuario: info_ficha.usr_upd === 0 ? info_ficha.usr_insert : info_ficha.usr_upd,
        version: info_ficha.version,
        familia: info_ficha.tipo_famlia
    };
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}

//funciones que salvan la informacion de una de las dimensiones del miembro
function salvarMiembroIdentificacion(indice) {
    var dat = {
        op: "identificacion_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].identificacion);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
    if (info_ficha.miembros['miembro' + indice].num_ben === 1) {
        salvarBeneficiarioDefinitivaUno(indice);
    }
    if (info_ficha.miembros['miembro' + indice].num_ben === 2) {
        salvarBeneficiarioDefinitivaDos(indice);
    }
}
function salvarBeneficiarioDefinitivaUno(indice) {
    var dat = {
        op: "salvar_beneficiario_uno",
        identificador: info_ficha.identificador
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].identificacion);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarBeneficiarioDefinitivaDos(indice) {
    var dat = {
        op: "salvar_beneficiario_dos",
        identificador: info_ficha.identificador
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].identificacion);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarMiembroCaracterizacion(indice) {
    var dat = {
        op: "caracterizacion_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].caracterizacion);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarMiembroServicios(indice) {
    var dat = {
        op: "serv_sociales_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].serv_sociales);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarMiembroEducacion(indice) {
    var dat = {
        op: "educacion_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].educacion);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarMiembroSalud(indice) {
    var dat = {
        op: "salud_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].salud);
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarMiembroEconomia(indice) {
    var dat = {
        op: "economia_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].economia);
    if (dat.tiempo_exp === '') {
        dat.tiempo_exp = 0;
    }
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function salvarMiembroSociocultural(indice) {
    var dat = {
        op: "sociocultural_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].sociocultural);
    $.each(dat, function (llave, valor) {
        if ($.type(valor) === 'object') {
            dat[llave] = JSON.stringify(valor);
        }

    });
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}

function salvarMiembroTecnologia(indice) {
    var dat = {
        op: "tecnologias_miembro",
        identificador: info_ficha.identificador,
        id_miembro: info_ficha.miembros['miembro' + indice].id_miembro,
        orden: info_ficha.miembros['miembro' + indice].orden
    };
    $.extend(true, dat, info_ficha.miembros['miembro' + indice].tecnologias);
    $.each(dat, function (llave, valor) {
        if ($.type(valor) === 'object') {
            dat[llave] = JSON.stringify(valor);
        }

    });
    $.ajax({
        type: "POST",
        url: "GestionDML",
        data: dat,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0) {
                //console.log(response);
            }
        }
    });
}
function getInfoBeneficiarios() {
    var dat = {
        op: "beneficiarios_principales",
        identificador: info_ficha.identificador
    };

    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: dat,
        async: false,
        success: function (response) {
//            console.log(response);
            beneficiarios = response;
        }
    });
}

function getInfoFicha() {
   
    if (info_ficha.identificador !== '') {
        getInfoBeneficiarios();
        var dat = {
            op: "info_ficha_social_v7",
            identificador: info_ficha.identificador
        };
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: dat,
            dataType: "json",
            async: false,
            success: function (response) {
                if (response.length > 0) {
                    
                    var info = response[0];
//                    identificacion del predio 
                    if (info['id_profesional'] !== 0 && info['id_profesional'] !== undefined)
                        setUser(info['id_profesional']);
                    if (info['tipo_familia'] !== 0 && info['tipo_familia'] !== undefined)
                        setTipoFamlia(info['tipo_familia']);
                    if (info['estado_ficha'] !== 0 && info['estado_ficha'] !== undefined)
                        info_ficha.estado = info['estado_ficha'];

                    var identificacion_predio = {};
                    if (info['Concepto de Ingreso'] !== "" && info['Concepto de Ingreso'] !== undefined)
                        identificacion_predio.concepto = info['Concepto de Ingreso'];
                    if (info['fecha_concepto_ingreso'] !== undefined)
                        identificacion_predio.fecha_concepto = info['fecha_concepto_ingreso'];
                    if (info['Dirección'] !== "" && info['id_profesional'] !== undefined)
                        identificacion_predio.direccion_par = info['Dirección'];
                    if (info['MZ'] !== "" && info['MZ'] !== undefined)
                        identificacion_predio.manzana = info['MZ'];
                    if (info['LT'] !== "" && info['LT'] !== undefined)
                        identificacion_predio.manzana = info['LT'];
                    if (info['Barrio'] !== "" && info['Barrio'] !== undefined)
                        identificacion_predio.barrio = info['Barrio'];
                    if (info['Localidad'] !== "" && info['Localidad'] !== undefined)
                        identificacion_predio.localidad = info['Localidad'];
                    setIdentificacion(identificacion_predio);
//                    iformacion economica
                    var info_economica = {};
                    if (info['ingreso_promedio'] !== 0 && info['ingreso_promedio'] !== undefined)
                        info_economica.ingreso = info['ingreso_promedio'];
                    if (info['egreso_promedio'] !== 0 && info['egreso_promedio'] !== undefined)
                        info_economica.egreso = info['egreso_promedio'];
                    if (info['bl_moto'] !== undefined)
                        info_economica.moto = info['bl_moto'];
                    if (info['num_motos'] !== 0 && info['num_motos'] !== undefined)
                        info_economica.num_motos = info['num_motos'];
                    if (info['bl_carro'] !== undefined)
                        info_economica.carro = info['bl_carro'];
                    if (info['num_carros'] !== 0 && info['num_carros'] !== undefined)
                        info_economica.num_carros = info['num_carros'];
                    if (info['bl_bici'] !== undefined)
                        info_economica.bicicletas = info['bl_bici'];
                    if (info['num_bicicletas'] !== 0 && info['num_bicicletas'] !== undefined)
                        info_economica.num_bici = info['num_bicicletas'];
                    setEconomica(info_economica);
//                    iformacion actividad del par

                    var info_actividad_par = {};
                    if (info['actividad_par'] !== '' && info['actividad_par'] !== undefined)
                        info_actividad_par.actividad = info['actividad_par'];

                    if (info['actividad_formalizada'] !== undefined)
                        info_actividad_par.formalizada = info['actividad_formalizada'];
                    if (info['razon_social'] !== '' && info['razon_social'] !== undefined)
                        info_actividad_par.razon_social = info['razon_social'];

                    if (info['otros_propietarios'] !== '' && info['otros_propietarios'] !== undefined)
                        info_actividad_par.otros_propietarios = info['otros_propietarios'];
                    if (info['ubicacion_clientes'] !== 0 && info['ubicacion_clientes'] !== undefined)
                        info_actividad_par.ubicacion_clientes = info['ubicacion_clientes'];
                    if (info['valor_desarrollo_actividad'] !== 0 && info['valor_desarrollo_actividad'] !== undefined)
                        info_actividad_par.valor_desarrollo = info['valor_desarrollo_actividad'];
                    if (info['produccion_mensual'] !== 0 && info['produccion_mensual'] !== undefined)
                        info_actividad_par.produccion = info['produccion_mensual'];
                    if (info['valor_herramientas'] !== 0 && info['valor_herramientas'] !== undefined)
                        info_actividad_par.valor_herramientas = info['valor_herramientas'];
                    if (info['num_empleados'] !== 0 && info['num_empleados'] !== undefined)
                        info_actividad_par.empleados = info['num_empleados'];
                    info_actividad_par.area_actividad = info['area_actividad'];


                    setEconomica(info_actividad_par);


//                    iformacion caracterizacion de la vivienda
                    var carac_vivienda = {};
                    if (info['tipo_vivienda'] !== 0 && info['tipo_vivienda'] !== undefined)
                        carac_vivienda.tipo_vivienda = info['tipo_vivienda'];
                    if (info['otro_tipo_vivienda'] && info['otro_tipo_vivienda'] !== undefined)
                        carac_vivienda.otro_tipo = info['otro_tipo_vivienda'];
                    if (info['documento_tenencia'] !== 0 && info['documento_tenencia'] !== undefined)
                        carac_vivienda.documento_tenencia = info['documento_tenencia'];
                    if (info['otro_doc_tenencia'] !== '' && info['otro_doc_tenencia'] !== undefined)
                        carac_vivienda.otro_doc = info['otro_doc_tenencia'];
                    if (info['tenencia_predio'] !== 0 && info['tenencia_predio'] !== undefined)
                        carac_vivienda.calidad_tenencia = info['tenencia_predio'];
                    if (info['servicio_acueducto'] !== undefined)
                        carac_vivienda.acueducto = info['servicio_acueducto'];
                    if (info['servicio_energia'] !== undefined)
                        carac_vivienda.energia = info['servicio_energia'];
                    if (info['servicio_gas'] !== undefined)
                        carac_vivienda.gas = info['servicio_gas'];
                    if (info['consumo_acueducto'] !== 0 && info['consumo_acueducto'] !== undefined)
                        carac_vivienda.consumo_agua = info['consumo_acueducto'];
                    if (info['consumo_energia'] !== 0 && info['consumo_energia'] !== undefined)
                        carac_vivienda.consumo_energia = info['consumo_energia'];
                    if (info['consumo_gas'] !== 0 && info['consumo_gas'] !== undefined)
                        carac_vivienda.consumo_gas = info['consumo_gas'];
                    if (info['num_pisos_par'] !== 0 && info['num_pisos_par'] !== undefined)
                        carac_vivienda.num_pisos = info['num_pisos_par'];
                    if (info['num_banos_par'] !== 0 && info['num_banos_par'] !== undefined)
                        carac_vivienda.num_banos = info['num_banos_par'];
                    if (info['num_habitaciones_par'] !== 0 && info['num_habitaciones_par'] !== undefined)
                        carac_vivienda.num_cuartos = info['num_habitaciones_par'];
                    if (info['num_cocinas_par'] !== 0 && info['num_cocinas_par'] !== undefined)
                        carac_vivienda.num_cocinas = info['num_cocinas_par'];

                    if (info['material_paredes'] !== 0 && info['material_paredes'] !== undefined) {
                        var bool = info['material_paredes'];
//                        var bool = jQuery.parseJSON(info['material_paredes']);
                        carac_vivienda.material_paredes = bool.bool;
                    }
                    if (info['material_pisos'] !== 0 && info['material_pisos'] !== undefined) {
                        var bool = info['material_pisos'];
//                        var bool = jQuery.parseJSON(info['material_pisos']);
                        carac_vivienda.material_pisos = bool.bool;
                    }
                    if (info['impacto_materia_paredes'] !== 0 && info['impacto_materia_paredes'] !== undefined) {
                        var bool = info['impacto_materia_paredes'];
                        carac_vivienda.impacto_paredes = bool.bool;
                    }
                    if (info['impacto_materia_paredes'] !== 0 && info['impacto_materia_paredes'] !== undefined) {
                        var bool = info['impacto_materia_paredes'];
                        carac_vivienda.desc_impacto = bool.comentario;
                    }
                    if (info['unidades_identificadas'] !== 0 && info['unidades_identificadas'] !== undefined)
                        carac_vivienda.num_unidades = info['unidades_identificadas'];
                    if (info['conciencia_riesgo'] !== '' && info['conciencia_riesgo'] !== undefined)
                        carac_vivienda.conciencia_riesgo = info['conciencia_riesgo'];
                    setCaracterizacion(carac_vivienda);

//                    informacion sociocultural del hogar
                    h_sociocultural = {};
                    if (info['mascota'] !== undefined)
                        h_sociocultural.animales = info['mascota'];
                    if (info['cuantos_tipo'] !== '' && info['cuantos_tipo'] !== undefined)
                        h_sociocultural.cuantos = info['cuantos_tipo'];
                    if (info['tipo_mascota'] !== 0 && info['tipo_mascota'] !== undefined)
                        h_sociocultural.tipo_animal = info['tipo_mascota'];
                    setSociocultural(h_sociocultural);

//                    informacion capital ambiental
                    h_ambiental = {};
                    if (info['lugares_cercanos_vivienda'] !== undefined) {
                        var lugares = info['lugares_cercanos_vivienda'];
                        h_ambiental.cerca_viv = lugares;
                    }
                    if (info['problemas_sector_vivienda'] !== undefined) {
                        var sector = info['problemas_sector_vivienda'];
                        h_ambiental.problemas_sector = sector;
                    }

                    if (info['clasificacion_basuras'] !== undefined) {
                        var basuras = info['clasificacion_basuras'];
                        h_ambiental.basuras = basuras;
                    }
                    if (info['practica_consumo_servicios'] !== undefined) {
                        var practicas = info['practica_consumo_servicios'];
                        h_ambiental.practicas_consumo = practicas;
                    }
                    setAmbiental(h_ambiental);

//                    información de tecnologia del  hogar
                    h_tenologia = {};
                    if (info['tiene_desktop'] !== undefined)
                        h_tenologia.tiene_pc = info['tiene_desktop'];
                    if (info['cantidad_desktop'] !== 0 && info['cantidad_desktop'] !== undefined)
                        h_tenologia.cuantos_pc = info['cantidad_desktop'];
                    if (info['uso_desktop'] !== 0 && info['uso_desktop'] !== undefined)
                        h_tenologia.uso_pc = info['uso_desktop'];
                    if (info['tiene_portatil'] !== undefined)
                        h_tenologia.tiene_laptop = info['tiene_portatil'];
                    if (info['catidad_portatiles'] !== 0 && info['catidad_portatiles'] !== undefined)
                        h_tenologia.cuantos_laptop = info['catidad_portatiles'];
                    if (info['uso_portatiles'] !== 0 && info['uso_portatiles'] !== undefined)
                        h_tenologia.uso_laptop = info['uso_portatiles'];
                    if (info['tiene_tablet'] !== undefined)
                        h_tenologia.tiene_tablet = info['tiene_tablet'];
                    if (info['cantidad_tablet'] !== 0 && info['cantidad_tablet'] !== undefined)
                        h_tenologia.cuantas_tablet = info['cantidad_tablet'];
                    if (info['uso_tablet'] !== 0 && info['uso_tablet'] !== undefined)
                        h_tenologia.uso_tablet = info['uso_tablet'];
                    setTecnologia(h_tenologia);

//                    informacion de arraigo del hogar
                    h_arraigo = {};
                    if (info['tiempo_zona_par'] !== 0 && info['tiempo_zona_par'] !== undefined)
                        h_arraigo.tiempo_zona = info['tiempo_zona_par'];
                    if (info['gusto_ubicacion_par'] !== undefined)
                        h_arraigo.gusto_ubicacion = info['gusto_ubicacion_par'];
                    if (info['gusto_vivienda'] !== undefined)
                        h_arraigo.gusto_vivienda = info['gusto_vivienda'];
                    if (info['gusto_vecindario_par'] !== undefined)
                        h_arraigo.gusto_vecindario = info['gusto_vecindario_par'];
                    if (info['salida_par'] !== 0 && info['salida_par'] !== undefined)
                        h_arraigo.salida_predio = info['salida_par'];
                    if (info['porque_salida_par'] !== '' && info['porque_salida_par'] !== undefined)
                        h_arraigo.porque_salida = info['porque_salida_par'];
                    if (info['importancia_zona_proyecto_vida'] !== 0 && info['importancia_zona_proyecto_vida'] !== undefined)
                        h_arraigo.importancia_zona = info['importancia_zona_proyecto_vida'];
                    if (info['porque_importancia_proyecto_vida'] !== '' && info['porque_importancia_proyecto_vida'] !== undefined)
                        h_arraigo.porque_importancia = info['porque_importancia_proyecto_vida'];
                    if (info['observaciones'] !== '' && info['observaciones'] !== undefined)
                        h_arraigo.observaciones = info['observaciones'];
                    if (info['comentarios_ficha'] !== '' && info['comentarios_ficha'] !== undefined)
                        h_arraigo.comentarios = info['comentarios_ficha'];
                    setArraigo(h_arraigo);
//                    información de miembros del hogar
                    var inf_miembro = info['miembros'];
                    //console.log(inf_miembro);
                    var familia = inf_miembro.basica;
                    var caracterizacion = inf_miembro.caracterizacion;
                    var benf = beneficiarios[0];
                    $.each(familia, function (indice, persona) {
                        addMiembro(persona.Orden);
                        setMiembroId(persona.id_miembro, persona.Orden);
                        setMiembroOrden(persona.Orden, persona.Orden);

                        var m_identificacion = {};
                        if (persona['B05_Parentesco'] !== 0 && persona['B05_Parentesco'] !== undefined)
                            m_identificacion.parentesco = persona['B05_Parentesco'];
                        if (persona['primer_nombre'] !== '' && persona['primer_nombre'] !== undefined)
                            m_identificacion.nombre_uno = persona['primer_nombre'];
                        if (persona['segundo_nombre'] !== '' && persona['segundo_nombre'] !== undefined)
                            m_identificacion.nombre_dos = persona['segundo_nombre'];
                        if (persona['B01_Primer_Apellido'] !== '' && persona['B01_Primer_Apellido'] !== undefined)
                            m_identificacion.apellido_uno = persona['B01_Primer_Apellido'];
                        if (persona['B02_Segundo_Apellido'] !== '' && persona['B02_Segundo_Apellido'] !== undefined)
                            m_identificacion.apellido_dos = persona['B02_Segundo_Apellido'];
                        if (persona['ciudad_nacimiento'] !== '' && persona['ciudad_nacimiento'] !== undefined)
                            m_identificacion.ciudad_nacimiento = persona['ciudad_nacimiento'];
                        if (persona['B08_Fec_Nacimiento'] !== null && persona['B08_Fec_Nacimiento'] !== undefined)
                            m_identificacion.fecha_nacimiento = persona['B08_Fec_Nacimiento'].substring(0, 10);
                        if (persona['B04_Tipo_Identificacion'] !== '' && persona['B04_Tipo_Identificacion'] !== undefined)
                            m_identificacion.tipo_documento = persona['B04_Tipo_Identificacion'];
                        if (persona['B04_Identificacion'] !== '' && persona['B04_Identificacion'] !== undefined)
                            m_identificacion.num_identificacion = persona['B04_Identificacion'];
                        if (persona['B04_Fec_Exp_Doc_Identificacion'] !== null && persona['B04_Fec_Exp_Doc_Identificacion'] !== undefined)
                            m_identificacion.fecha_expedicion = persona['B04_Fec_Exp_Doc_Identificacion'].substring(0, 10);
                        if (persona['B07_Estado_Civil'] !== '' && persona['B07_Estado_Civil'] !== undefined)
                            m_identificacion.estado_civil = persona['B07_Estado_Civil'];
                        if (persona['B06_Genero'] !== 0 && persona['B06_Genero'] !== undefined)
                            m_identificacion.sexo = persona['B06_Genero'];
                        if (m_identificacion.num_identificacion === benf['Cedula 1']) {
                            setMiembroNumBen(persona.Orden, 1);
                        }
                        if (m_identificacion.num_identificacion === benf['Cedula 2']) {
                            setMiembroNumBen(persona.Orden, 2);
                        }
                        setMiembroIdentificacion(persona.Orden, m_identificacion);




                        var carcteriza_m = caracterizacion[indice];
                        if (carcteriza_m !== null) {
                            var m_caract = {};
                            if (persona['B06_Genero'] !== null && persona['B06_Genero'] !== 0 && persona['B06_Genero'] !== undefined)
                                
                            var gen=0;
                                if(persona['B06_Genero']===1){
                                   gen=2; 
                                }
                                if(persona['B06_Genero']===2){
                                   gen=1; 
                                }
                                m_caract.genero = gen;
                            if (carcteriza_m['etnia'] !== 0 && carcteriza_m['etnia'] !== undefined)
                                m_caract.etnia = carcteriza_m['etnia'];
                            if (carcteriza_m['orientacion_sexual'] !== 0 && carcteriza_m['orientacion_sexual'] !== undefined)
                                m_caract.orientacion = carcteriza_m['orientacion_sexual'];
                            if (carcteriza_m['discapacidad'] !== 0 && carcteriza_m['discapacidad'] !== undefined)
                                m_caract.discapacidad = carcteriza_m['discapacidad'];
                            if (carcteriza_m['discapacidad'] !== 0 && carcteriza_m['discapacidad'] !== undefined)
                                m_caract.tipo_discapacidad = carcteriza_m['discapacidad'];
                            if (carcteriza_m['cabeza_familia'] !== undefined)
                                m_caract.cabeza_famlia = carcteriza_m['cabeza_familia'];
                            if (carcteriza_m['victima_conflicto'] !== undefined)
                                m_caract.victima = carcteriza_m['victima_conflicto'];
                            if (carcteriza_m['ruv_victimas'] !== undefined)
                                m_caract.registro_victimas = carcteriza_m['ruv_victimas'];
                            if (carcteriza_m['desplazado'] !== undefined)
                                m_caract.desplazado = carcteriza_m['desplazado'];
                            if (carcteriza_m['retorno_desplazado'] !== undefined)
                                m_caract.retorno = carcteriza_m['retorno_desplazado'];
                            if (carcteriza_m['desmoviilzado'] !== undefined)
                                m_caract.desmovilizado = carcteriza_m['desmoviilzado'];
                            setMiembroCaracterizacion(persona.Orden, m_caract);


                            var m_economia = {};
                            if (carcteriza_m['ocupacion_persona'] !== 0 && carcteriza_m['ocupacion_persona'] !== undefined)
                                m_economia.ocupacion = carcteriza_m['ocupacion_persona'];
                            if (carcteriza_m['bl_trabajo'] !== undefined)
                                m_economia.trabajo_remunerado = carcteriza_m['bl_trabajo'];
                            if (carcteriza_m['cual_trabajo'] !== 0 && carcteriza_m['cual_trabajo'] !== undefined)
                                m_economia.cual_trabajo = carcteriza_m['cual_trabajo'];
                            if (carcteriza_m['bl_experiencia'] !== undefined)
                                m_economia.experiencia = carcteriza_m['bl_experiencia'];
                            if (carcteriza_m['experiencia'] !== 0 && carcteriza_m['experiencia'] !== undefined)
                                m_economia.tiempo_exp = carcteriza_m['experiencia'];
                            if (carcteriza_m['destinacion_par'] !== 0 && carcteriza_m['destinacion_par'] !== undefined)
                                m_economia.destinacion_predio = carcteriza_m['destinacion_par'];
                            if (carcteriza_m['lugar_trabajo'] !== 0 && carcteriza_m['lugar_trabajo'] !== undefined)
                                m_economia.lugar_trabajo = carcteriza_m['lugar_trabajo'];
                            setMiembroEconomia(persona.Orden, m_economia);

                            m_educacion = {};
                            if (carcteriza_m['lectoescritura'] !== undefined)
                                m_educacion.lectoescritura = carcteriza_m['lectoescritura'];
                            if (carcteriza_m['ultimo_grado_aprobado'] !== 0 && carcteriza_m['ultimo_grado_aprobado'] !== undefined)
                                m_educacion.ultimo_grado = carcteriza_m['ultimo_grado_aprobado'];
                            if (carcteriza_m['ultimo_grado_aprobado'] === 7 && carcteriza_m['ultimo_grado_aprobado'] !== undefined)
                                m_educacion.otro_grado = carcteriza_m['ultimo_grado_aprobado'];
                            if (carcteriza_m['estudia_actualmente'] !== undefined)
                                m_educacion.estudia = carcteriza_m['estudia_actualmente'];
                            if (carcteriza_m['razon_no_estudio'] !== 0 && carcteriza_m['razon_no_estudio'] !== undefined)
                                m_educacion.razon_desescolaridad = carcteriza_m['razon_no_estudio'];
                            if (carcteriza_m['cual_razon'] !== '' && carcteriza_m['cual_razon'] !== undefined)
                                m_educacion.otra_razon = carcteriza_m['cual_razon'];
                            if (carcteriza_m['asistenacia_institucion_infantil'] !== undefined)
                                m_educacion.asiste_jardin = carcteriza_m['asistenacia_institucion_infantil'];
                            setMiembroEducacion(persona.Orden, m_educacion);

                            m_salud = {};
                            if (carcteriza_m['sistema_salud'] !== undefined)
                                m_salud.sistema_salud = carcteriza_m['sistema_salud'];
                            if (carcteriza_m['regimen_salud'] !== 0 && carcteriza_m['regimen_salud'] !== undefined)
                                m_salud.regimen = carcteriza_m['regimen_salud'];
                            if (carcteriza_m['enfermedad_cronica'] !== '' && carcteriza_m['enfermedad_cronica'] !== undefined)
                                m_salud.enfermedad = true;
                            else
                                m_salud.enfermedad = false;
                            if (carcteriza_m['enfermedad_cronica'] !== '' && carcteriza_m['enfermedad_cronica'] !== undefined)
                                m_salud.cual_enfermedad = carcteriza_m['enfermedad_cronica'];
                            if (carcteriza_m['doc_diagnostico'] !== undefined)
                                m_salud.diagnostico = carcteriza_m['doc_diagnostico'];
                            setMiembroSalud(persona.Orden, m_salud);

                            m_servicios = {};
                            if (carcteriza_m['ayuda_estatal'] !== 0 && carcteriza_m['ayuda_estatal'] !== undefined && carcteriza_m['ayuda_estatal'] !== null)
                                m_servicios.servicio = carcteriza_m['ayuda_estatal'];
                            if (carcteriza_m['otra_ayuda_estatal'] !== '' && carcteriza_m['otra_ayuda_estatal'] !== undefined)
                                m_servicios.otro = carcteriza_m['otra_ayuda_estatal'];
                            setMiembroServicios(persona.Orden, m_servicios);

                            m_sociocultural = {};
                            if (carcteriza_m['relaciones_barrio_om'] !== undefined && carcteriza_m['relaciones_barrio_om'] !== null) {
//                            var inf_so  = jQuery.type(carcteriza_m['relaciones_barrio_om'])==='Object'?carcteriza_m['relaciones_barrio_om']:jQuery.parseJSON(carcteriza_m['relaciones_barrio_om']);
                                var inf_so = carcteriza_m['relaciones_barrio_om'];
                                m_sociocultural.relaciones_barrio = inf_so;
                            }
                            if (carcteriza_m['acudiente_problemas_economicos'] !== undefined && carcteriza_m['acudiente_problemas_economicos'] !== null) {
//                            var inf_pro = jQuery.type(carcteriza_m['acudiente_problemas_economicos']) === 'Object' ? carcteriza_m['acudiente_problemas_economicos'] : jQuery.parseJSON(carcteriza_m['acudiente_problemas_economicos']);
                                var inf_pro = carcteriza_m['acudiente_problemas_economicos'];
                                m_sociocultural.problemas_econimicos = inf_pro;
                            }
                            if (carcteriza_m['acudiente_problemas_personales'] !== undefined && carcteriza_m['acudiente_problemas_personales'] !== null) {
                                var inf_pro_per = carcteriza_m['acudiente_problemas_personales'];
//                            var inf_pro_per = jQuery.parseJSON(carcteriza_m['acudiente_problemas_personales']);
                                m_sociocultural.problemas_personales = inf_pro_per;
                            }
                            if (carcteriza_m['pertenencia_organizaciones'] !== undefined && carcteriza_m['pertenencia_organizaciones'] !== null) {
                                var inf_org = carcteriza_m['pertenencia_organizaciones'];
//                            var inf_org = jQuery.parseJSON(carcteriza_m['pertenencia_organizaciones']);
                                m_sociocultural.organizaciones = inf_org;
                            }
                            if (carcteriza_m['razon_no_pertenencia'] !== undefined && carcteriza_m['razon_no_pertenencia'] !== null) {
//                            var inf_pert = jQuery.parseJSON(carcteriza_m['razon_no_pertenencia']);
                                var inf_pert = carcteriza_m['razon_no_pertenencia'];
                                m_sociocultural.no_pertenencia = inf_pert;
                            }

                            if (carcteriza_m['reuniones_organizacion'] !== undefined)
                                m_sociocultural.participacion_org = carcteriza_m['reuniones_organizacion'];

                            if (carcteriza_m['caracter_organizacion'] !== undefined && carcteriza_m['caracter_organizacion'] !== null) {
                                var inf_caracter = carcteriza_m['caracter_organizacion'];
//                            var inf_caracter = jQuery.parseJSON(carcteriza_m['caracter_organizacion']);
                                m_sociocultural.caracter_org = inf_caracter;
                            }
                            if (carcteriza_m['miembros_organizacion'] !== undefined && carcteriza_m['miembros_organizacion'] !== null) {
//                            var inf_miembros = jQuery.parseJSON(carcteriza_m['miembros_organizacion']);
                                var inf_miembros = carcteriza_m['miembros_organizacion'];
                                m_sociocultural.miembros_org = inf_miembros;
                            }

                            setMiembroSociocultural(persona.Orden, m_sociocultural);

                            m_tecno = {};
                            if (carcteriza_m['frecuencia_uso_computador'] !== 0 && carcteriza_m['frecuencia_uso_computador'] !== undefined && carcteriza_m['frecuencia_uso_computador'] !== null)
                                m_tecno.frecuencia_computador = carcteriza_m['frecuencia_uso_computador'];
                            if (carcteriza_m['sitio_uso_computador'] !== undefined && carcteriza_m['sitio_uso_computador'] !== null) {
                                var sitios = carcteriza_m['sitio_uso_computador'];
//                            var sitios = jQuery.parseJSON(carcteriza_m['sitio_uso_computador']);
                                m_tecno.sitio_computador = sitios;
                            }
                            if (carcteriza_m['objetivo_uso_computador'] !== undefined && carcteriza_m['objetivo_uso_computador'] !== null) {
                                var uso_pc = carcteriza_m['objetivo_uso_computador'];
//                            var uso_pc = jQuery.parseJSON(carcteriza_m['objetivo_uso_computador']);
                                m_tecno.obj_uso_computador = uso_pc;
                            }
                            if (carcteriza_m['frecuencia_uso_internet'] !== 0 && carcteriza_m['frecuencia_uso_internet'] !== undefined)
                                m_tecno.frecuencia_internet = carcteriza_m['frecuencia_uso_internet'];
                            if (carcteriza_m['dispositivo_acceso_internet'] !== undefined && carcteriza_m['dispositivo_acceso_internet'] !== null) {
                                var dispositivos = carcteriza_m['dispositivo_acceso_internet'];
//                            var dispositivos = jQuery.parseJSON(carcteriza_m['dispositivo_acceso_internet']);
                                m_tecno.dispositivo_internet = dispositivos;
                            }
                            if (carcteriza_m['objetivo_uso_internet'] !== undefined && carcteriza_m['objetivo_uso_internet'] !== null && carcteriza_m['objetivo_uso_internet'] !== 0) {
//                            var objetivos = jQuery.parseJSON(carcteriza_m['objetivo_uso_internet']);
                                var objetivos = carcteriza_m['objetivo_uso_internet'];
                                m_tecno.objetivo_internet = objetivos;
                            }
                            setMiembroTecnologia(persona.Orden, m_tecno);

                        }

                    });
                    if (familia === null) {
                        if (benf['Nombre 1'] !== undefined && benf['Cedula 1'] !== 0) {
                            addMiembro(1);
                            info_ficha.miembros.miembro1.identificacion.nombre_uno = benf['1er_Nombre_Ben1'];
                            info_ficha.miembros.miembro1.identificacion.nombre_dos = benf['2do_Nombre_Ben1'];
                            info_ficha.miembros.miembro1.identificacion.apellido_uno = benf['1er_Apellido_Ben1'];
                            info_ficha.miembros.miembro1.identificacion.apellido_dos = benf['2do_Apellido_Ben1'];
                            info_ficha.miembros.miembro1.identificacion.num_identificacion = benf['Cedula 1'];
                            info_ficha.miembros.miembro1.identificacion.parentesco = 1;
                            info_ficha.miembros.miembro1.num_ben = 1;
                            info_ficha.miembros.miembro1.orden = 1;
                        }
                        if (benf['Nombre 2'] !== undefined && benf['Cedula 2'] !== 0) {
                            addMiembro(2);
                            info_ficha.miembros.miembro2.identificacion.nombre_uno = benf['1er_Nombre_Ben2'];
                            info_ficha.miembros.miembro2.identificacion.nombre_dos = benf['2do_Nombre_Ben2'];
                            info_ficha.miembros.miembro2.identificacion.apellido_uno = benf['1er_Apellido_Ben2'];
                            info_ficha.miembros.miembro2.identificacion.apellido_dos = benf['2do_Apellido_Ben2'];
                            info_ficha.miembros.miembro2.identificacion.num_identificacion = benf['Cedula 2'];
                            info_ficha.miembros.miembro2.identificacion.parentesco = 2;
                            info_ficha.miembros.miembro2.num_ben = 2;
                            info_ficha.miembros.miembro2.orden = 2;
                        }
                    }



                }
            }
        });

    }
}


