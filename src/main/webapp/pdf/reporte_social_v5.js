
function pdf_social(identificador) {
//    console.log(identificador);
    items_etnia = ["Sin informacion", "Afrocolombiano", "Indígena", "ROM o Gitano", "Raizal", "Ninguna de las anteriores"];
    items_genero = ["Sin informacion", "Femenino", "Masculino", "Transgénero"];
    items_orientacion = ["Sin información", "Homosexual", "Heterosexual", "Bisexual"];
    items_discapacidad = ["Sin información", "Física", "Mental", "Cognitiva", "Sensorial", "Múltiple", "No aplica"];
    items_ayuda = ["Sin información", "Adulto Mayor", "Madre Cabeza de familia", "Discapacidad", "Primera Infancia", "Madre Gestante/lactante", "Otro", "No"];
    items_grado = ["Sin información", "Pre-escolar", "Básica Primaria [1ro a 5to]", "Bachillerato Básico [6to a 9no]", "Bachillerato Completo", "Técnica Profesional", "Tecnológica", "Profesional", "Especialización", "Ninguno", "Otro"];
    items_tiempollegar = ["Sin información", "De 10 a 30 minutos", "De 31 a 60 minutos", "Más de 60 minutos", "No Aplica"];
    items_regimen = ["Sin información", "Contributivo", "Subsidiado", "Especial", "No afiliado", "No sabe/No responde"];
    items_ingresos = ["Sin información", "Menos de 1 SMMLV", "Entre 1 y 2 SMMLV", "De 2 a 3 SMMLV", "Más de 3 SMMLV", "No Genera ingresos"];
    items_soporte = ["Sin información", "Certificación laboral", "Declaración Juramentada", "Certificación de Ingresos", "Certificación bancaria", "Otro", "Ninguno"];
    items_ocupacion = ["Sin información", "Empleado", "Pensionado", "Estudiante", "Bachillerato CompletoTrabajador familiar sin remuneración [hogar]", "Trabajador independiente", "Patrón o empleador", "Trabajo Informal", "Desempleado", "Recuperador Ambiental", "Fuerzas Militares", "En Busca de Empleo"];
    items_lugar = ["Sin información", "En el domicilio", "En el barrio", "En la localidad", "En la ciudad", "Fuera de la ciudad", "No aplica"];
    items_destinacion = ["Sin información", "Residencial", "Comercio", "Industria", "Agrícola-Pecuario", "Arriendo", "Mixta [Residencial + Actividad Productiva]"];
    tipos_vivienda = ["Sin información", "Apartamento", "Casa-Lote", "Casa", "Casa Prefabricada", "otro"];
    tipos_tenencia = ["Sin información", "Escritura", "Certificador de libertad y tradicón", "Promesa de compraventa", "Otra"];
    ubicaciones = ["Sin información", "Local", "Regional", "Nacional", "Internacional"];
    salida_par = ["Sin información", "Ideal", "Positiva ", "Aceptable", "Negativa", "Traumática", "Indiferente"];
    tipo_doc = ["Sin información", "CC", "CE", "TI", "RC", "PA", "NUIP", "TE", "SI"];
    genero = ["Sin información", "Mujer", "Hombre", "Intersexual"];
    estado_civil = ["Sin información", "Soltero", "Casado", "Unión marital de hecho", "Sin sociedad conyugal o comunidad de bienes", "Viudo"];
    Parentezco = ["Sin información", "Soltero", "Casado", "Unión marital de hecho", "Sin sociedad conyugal o comunidad de bienes", "Viudo"];
    actividades = ["Sin información", "Religiosas", "Deportivas", "Espirituales"];
    relaciones = ["Sin información", "Amigables", "Indiferentes", "Conflictivas"];


    if (identificador) {
        $ficha = {};
        $personas = [];
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: "informacion_ficha_social",
                identificador: identificador
            },
            dataType: "json",
            async: false,
            success: function (response) {//                       
                if (response.length > 0) {
                    $ficha = response[0];
                }

            }
        });
//        console.log($ficha);
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: "informacion_ficha_social_mimebros",
                identificador: identificador
            },
            dataType: "json",
            async: false,
            success: function (response) {
//                        
                if (response.length > 0) {
                    $personas = response;
                    if (response.length === 0) {

                        $.ajax({
                            type: "GET",
                            url: "GestionConsultas",
                            data: {
                                op: "informacion_ficha_social_mimebros_dos",
                                identificador: identificador
                            },
                            dataType: "json",
                            async: true,
                            success: function (response) {
                                if (response.length > 0) {
                                    $personas = response;
                                }
                            }
                        });
                    }
                }

            }
        });
//        console.log($personas);

        doc_tenencia = ['', '', '', '', $ficha['afectacion_patrimonio_familiar']];
        doc_tenencia[$ficha['documento_tenencia']] = 'X';
        tipo_vivienda = ['\n', '', '', '', '', '', '', '', '', ''];
        tipo_vivienda[$ficha['tipo_vivienda']] = 'X';
        identificacion = [
            [{text: '', border: [false, false, false, false]}, '2.2 Parentesco', '2.3 Primer Nombre', '2.4 Segundo Nombre', '2.3 Primer Apellido', '2.5 Segundo Apellido', '2.7 Fecha de Nacimiento', '2.8 Lugar de nacimiento', '2.9', '2.10 Fecha de Expedición', '2.11 No. de Identificación', '2.12 ', '2.13 ', '2.14 ']
        ];
        caracterizacion = [
            [{text: '', border: [false, false, false, false]}, {text: '3. Caracterización de la Población', style: 'subtitulo1', colSpan: 10}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {text: '4. Acceso a Servicios Sociales o Distritales', style: 'subtitulo1', colSpan: 2}, {}, {text: '5. Educación', style: 'subtitulo1', colSpan: 4}, {}, {}, {}, {text: '6. Salud', style: 'subtitulo1', colSpan: 4}, {}, {}, {}, {text: '7. Dimensión Económica', style: 'subtitulo1', colSpan: 5}, {}, {}, {}, {}],
            [{text: '', border: [false, false, false, false]}, '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', '3.10', '4.1', '4.2', '5.1', '5.2', '5.3', '5.4', '6.1', '6.2', '6.3', '6.4', '7.1', '7.2', '7.3', '7.4', '7.5']

        ];
        sociocultural = [
            [{text: '10.1 ¿Convive con animales? Si/No', colSpan: 2}, {}, $ficha['mascota'] ? 'Si' : 'No', '10.2 ¿Cuántos y de qué Tipo?', $ficha['cuantos_tipo']?$ficha['cuantos_tipo']:''],
            [{text: '', border: [false, false, false, false]}, {text: '10.1 ¿Asiste a practicas religiosas / espirituales \n deportivas en la zona donde vive? ', colSpan: 2}, {}, '10.4 En su barrio as relaciones son: de solidaridad, amigables, indiferentes, conflictivas', '10.5 ¿Pertenece a alguna organización en la zona donde vive? ¿De que tipo?']
        ];
        $.each($personas, function (index, persona) {
            identificacion.push([index + 1, persona['B05_Parentesco'], persona['primer_nombre'], persona['segundo_nombre'], persona['B01_Primer_Apellido'], persona['B02_Segundo_Apellido'], DateFormat(persona['B08_Fec_Nacimiento']), persona['ciudad_nacimiento'], tipo_doc[persona['B04_Tipo_Identificacion']], DateFormat(persona['B04_Fec_Exp_Doc_Identificacion']), persona['B04_Identificacion'], DateFormat(persona['B08_Fec_Nacimiento']),persona['B07_Estado_Civil'], genero[persona['B06_Genero']]]);
            caracterizacion.push([index + 1, persona['etnia'], persona['B06_Genero'], persona['orientacion_sexual'], persona['discapacidad'], persona['cabeza_familia'] ? 'Si' : 'No', persona['victima_conflicto'] ? 'Si' : 'No', persona['desplazado'] ? 'Si' : 'No', persona['ruv_victimas'] ? 'Si' : 'No', persona['retorno_desplazado'] ? 'Si' : 'No', persona['desmoviilzado'] ? 'Si' : 'No', persona['ayuda_estatal'], persona['otra_ayuda_estatal'], persona['lectoescritura'] ? 'Si' : 'No', persona['ultimo_grado_aprobado'], persona['asistenacia_institucion_infantil'] ? 'Si' : 'No', persona['tiempo_llegada'], persona['sistema_salud'] ? 'Si' : 'No', '', '', '', '', '', '', '', '']);
            sociocultural.push([index + 1, {text: actividades[persona['actividades_zona']], colSpan: 2}, {}, relaciones[persona['relacion_barrio']], (persona['pretenencia_organizacion_zona'] ? persona['pretenencia_organizacion_zona'] : '')]);
        });
        for (var i = ($personas.length + 1), max = 10; i <= max; i++) {
            identificacion.push([i, '', '', '', '', '', '', '', '', '', '', '', '', '']);
            caracterizacion.push([i, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
            sociocultural.push([i, {text: '', colSpan: 2}, {}, '', '']);
        }
        caracterizacion.push(
                [{text: 'Si el inmueble tiene una destinación distinta al uso residencial diligencie los siguiente campos', style: 'subtitulo1', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {text: '7.5.1 Actividad Realizada', colSpan: 4}, {}, {}, {}, {text: '', colSpan: 3}, {}, {}, {text: '7.5.2 Formalizada Si/No', colSpan: 3}, {}, {}, {text: '', colSpan: 3}, {}, {}],
                [{text: '7.5.3 Razón Social (Si es formal)', colSpan: 5}, {}, {}, {}, {}, {text: '', colSpan: 8}, {}, {}, {}, {}, {}, {}, {}, {text: '7.5.4 Nombre de los propietarios', colSpan: 4}, {}, {}, {}, {text: '', colSpan: 9}, {}, {}, {}, {}, {}, {}, {}, {}],
                [{text: '7.5.5 Clientes o usuarios tiene ubicación local, zonal, regional, nacional o internacional', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {text: '', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                [{text: '7.5.6 Valor mensual de gastos para desarrollar la actividad (Aprox.)', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {text: '', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                [{text: '7.5.7 Valor de producción mensual / canon mensual', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {text: '', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
                [{text: '7.5.8 Valor maquinaria y/o herramientas (Aprox.)', colSpan: 13}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {text: 'Número de empleados formales', colSpan: 4}, {}, {}, {}, {text: 'Area de la vivienda para realizar la ctividad (en metros)', colSpan: 4}, {}, {}, {}, {text: '', colSpan: 5}, {}, {}, {}, {}]);

        console.log(sociocultural);

        var docDefinition = {
            pageSize: 'FOLIO',
            pageOrientation: 'landscape',
            pageMargins: [10, 10, 10, 10],

            content: [
                {
                    style: 'titulo',
                    table: {
                        widths: ['10.0%', '80.0%', '5.0%', '5.0%'],
                        body: [
                            [{rowSpan: 3, border: [false, false, false, false],
                                    image: 'data:image/jpeg;base64,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',
                                    width: 50,
                                    height: 50
                                }, {text: 'Formato de \n Caracterización de la Población', rowSpan: 3, border: [false, false, false, false]}, {text: 'Código: ', colSpan: 2, style: 'subtitulo1'}, {}],
                            ['', '', {text: 'Versión:', style: 'tableExample'}, {text: 'Pág: 1 de 3', style: 'tableExample'}],
                            ['', '', {text: 'Vigente desde: 11-08-2017 ', colSpan: 2, style: 'tableExample'}, {}]

                        ]
                    }

                },
                {
                    style: 'subtitulo',

                    table: {
                        widths: ['100.0%'],
                        body: [
                            ['1. Información Institucional e Identificación del Predio']
                        ]
                    }
                },
                {
                    style: 'tableExample',

                    table: {
                        widths: ['10.0%', '15.0%', '22.0%', '20.0%', '18.0%', '15.0%'],
                        body: [
//                            ['1.1 Identificador REAS', '', '1.2 Número y fehca de concepto de ingreso (REAS)','', '1.3 Dirección del Predio en Alto Riesgo', ''],
                            ['1.1 Identificador REAS', $ficha['identificador'], '1.2 Número y fehca de concepto de ingreso (REAS)', $ficha['Concepto de Ingreso'], '1.3 Dirección del Predio en Alto Riesgo', $ficha['Dirección']],
                        ]
                    }
                },
                {
                    style: 'tableExample',

                    table: {
                        widths: ['8.0%', '10.0%', '7.0%', '8.0%', '8.0%', '26.0%', '18.0%', '15.0%'],
                        body: [
//                            ['1.4 Manzana', '', '1.5 Lote No.', '', '1.6 Barrio', '', '1.7 Localidad', ''],
                            ['1.4 Manzana', ($ficha['MZ'] ? $ficha['MZ'] : ''), '1.5 Lote No.', ($ficha['LT'] ? $ficha['LT'] : ''), '1.6 Barrio', ($ficha['Barrio'] ? $ficha['Barrio'] : ''), '1.7 Localidad', ($ficha['Localidad'] ? $ficha['Localidad'] : '')],
                        ]
                    }
                }
                ,
                '\n',
                {
                    style: 'subtitulo',

                    table: {
                        widths: ['100.0%'],
                        body: [
                            ['2. Identificación de la familia']
                        ]
                    }
                },
                {
                    style: 'tableExample',

                    table: {
                        widths: ['10.0%', '90.0%', ],
                        body: [
                            ['2.1 Tipo de familia', ''],
                        ]
                    }
                },
                {
                    style: 'tableExample',

                    table: {
                        widths: ['*', '6.0%', '10.0%', '10.0%', '10.0%', '10.0%', '10.0%', '10.0%', '3.0%', '10.0%', '6.0%', '6.0%', '3.0%', '4.0%'],
                        body: identificacion
                    }
                },
                '\n',
                {
                    style: 'tableExample',

                    table: {
                        widths: ['*', '2.0%', '2.0%', '2.0%', '2.0%', '2.0%', '2.0%', '2.0%', '2.0%', '2.0%', '*', '*', '15.0%', '*', '4.0%', '*', '15.0%', '*', '*', '15.0%', '5.0%', '*', '*', '*', '*', '*'],
                        body: caracterizacion
                    }
                },
                '\n',
                '\n',
                {
                    style: 'titulo',
                    table: {
                        widths: ['10.0%', '80.0%', '5.0%', '5.0%'],
                        body: [
                            [{rowSpan: 3, border: [false, false, false, false],
                                    image: 'data:image/jpeg;base64,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',
                                    width: 50,
                                    height: 50
                                }, {text: 'Formato de \n Caracterización de la Población', rowSpan: 3, border: [false, false, false, false]}, {text: 'Código: ', colSpan: 2, style: 'subtitulo1'}, {}],
                            ['', '', {text: 'Versión:', style: 'tableExample'}, {text: 'Pág: 1 de 3', style: 'tableExample'}],
                            ['', '', {text: 'Vigente desde: 11-08-2017 ', colSpan: 2, style: 'tableExample'}, {}]

                        ]
                    }

                },
                {
                    columns: [
                        [

                            {
                                style: 'subtitulo',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        ['8. Caracterización de la Vivienda']
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['*', '7.0%', '6.0%', '*', '*', '*', '*', '9.0%', '8.0%', '*'],
                                    body: [[{text: '8.1 Tipo de Vivienda (Marque con una X)', colSpan: 5, style: 'subtitulo3'}, {}, {}, {}, {}, {text: '8.2 Calidad en la que acredita la tenencia del predio', colSpan: 5, style: 'subtitulo3'}, {}, {}, {}, {}],
                                        ['Apartemento', 'Casa - Lote', 'Casa', 'Casa Prefabricada', 'Otro ¿Cuál?', 'Arrendatario', 'Usufructuario', 'Poseedor', 'Tenedor', 'Propietario'],
                                        tipo_vivienda,
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        [{text: '8.3 Documentos que acreditan la tenencia', style: 'subtitulo2'}],
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['7.0%', '*', '*', '8.0%', '50.0%'],
                                    body: [
                                        ['Escritura', 'Certificado de \n Libertad y Tradición', 'Promesa de \n Compraventa', 'Otra \n ¿Cuál?', 'Tiene algún tipo de afectación \n (afectación de vivienda familiar/patrimonio de familia?) '],
                                        doc_tenencia,
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['20.0%', '20.0%', '20.0%', '10.0%', '10.0%', '10%', '10.0%'],
                                    body: [
                                        [{text: '8.4 Servicios Públicos', style: 'subtitulo2', colSpan: 3}, {}, {}, {text: '8.5 Características Físicas', style: 'subtitulo2', colSpan: 4}, {}, {}, {}],
                                        ['¿Cuenta con servicio público \n de Acueducto y Alcantarillado?', '¿Cuenta con servicio \n público de Energía?', '¿Cuenta con servicio de \n Gas domiciliario', 'No. Pisos', 'No. Cuartos', 'No. Baños', 'No. Cocinas'],
                                        [$ficha['servicio_acueducto'] ? 'Si' : 'No', $ficha['servicio_energia'] ? 'Si' : 'No', $ficha['servicio_gas'] ? 'Si' : 'No', $ficha['num_pisos_par'], $ficha['num_habitaciones_par'], $ficha['num_banos_par'], $ficha['num_cocinas_par']]
                                    ]
                                }
                            },
//                            {
//                                style: 'tableExample',
//                                margin: [0, 0, 5, 0],
//                                table: {
//                                    widths: ['100.0%'],
//                                    body: [
//                                        [{text: '8.7 Materiales de los que dispone la construcción. Responda Si/No (Observación + discurso)', style: 'subtitulo2'}],
//                                    ]
//                                }
//                            },
//                            {
//                                style: 'tableExample',
//                                margin: [0, 0, 5, 0],
//                                table: {
//                                    widths: ['50.0%', '50.0%'],
//                                    body: [
//                                        ['8.7.1 Las paredes son mayoritariamente de bloque, ladrillo, piedra,\n madera pulida, concreto vaciado y/o material prefabricado', ''],
//                                        ['8.7.2 La vivienda tiene mayoritariamente pisos en tierra?', ''],
//                                        ['8.7.3 Las paredes son mayoritariamente de materiales de bajo \n impacto ambiental o ecológico (origen vegetal o biocompatible)? \n Describa ', '']
//
//                                    ]
//                                }
//                            },
//                            {
//                                style: 'subtitulo',
//                                margin: [0, 0, 5, 0],
//                                table: {
//                                    widths: ['100.0%'],
//                                    body: [
//                                        ['9. Consciencia del Riesgo (Responde el entrevistado)']
//                                    ]
//                                }
//                            },
//                            {
//                                style: 'tableExample',
//                                margin: [0, 0, 5, 0],
//                                table: {
//                                    widths: ['100.0%'],
//                                    body: [
//                                        [{text: 'Cual de estos eventos ha aafectado su barrio o vivienda en los ultimos 2 años: Inundaciones, deslizamientos, hundimientos de tierra, grietas', style: 'subtitulo3'}],
//                                        ['\n \n \n']
//                                    ]
//                                }
//                            },
                            '\n',
                            {
                                style: 'subtitulo',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        ['10. Dimensión Sociocultural']
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [0, 0, 5, 0],
                                table: {
                                    widths: ['2.0%', '24.0%', '10.0%', '32.0%', '32.0%'],
                                    body: sociocultural,
                                }
                            }


                        ],
                        [
                            {
                                style: 'subtitulo',
                                margin: [5, 0, 0, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        ['11. Arraigo (Responde el Entrevistado)']
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [5, 0, 0, 0],
                                table: {
                                    widths: ['30.0%', '10.0%', '40.0%', '20.0%'],
                                    body: [
                                        ['11.1 ¿Hace cuánto vive en la zona?', $ficha['tiempo_zona_par'] + ($ficha['tipo_tiempo_zona_par'] === 1 ? ' Años' : ' Meses'), '11.2 ¿Se siente a gusto con la ubicación de la vivienda?', $ficha['gusto_ubicacion_par'] ? 'Si' : 'No'],
                                        ['11.3 ¿Se siente a gusto con su vivienda?', $ficha['gusto_vivienda'] ? 'Si' : 'No', '11.4 ¿Se siente a gusto con su vecindario?', $ficha['gusto_vecindario_par'] ? 'Si' : 'No'],
                                        [{text: 'La idea de salir de su predio en alto riesgo le parece: Ideal, positiva, aceptable, negativa, trumática, Indiferente. ¿Por qué?', colSpan: 4}, {}, {}, {}],
                                        [{text: salida_par[$ficha['salida_par']] + ': \n \n ' + $ficha['porque_salida_par'], colSpan: 4}, {}, {}, {}],
                                        [{text: '11.5 Señale el nivel de importancia de la zona en donde vive para su proyecto de vida (Alto, medio y bajo) ¿Por qué?', colSpan: 4}, {}, {}, {}],
                                        [{text: salida_par[$ficha['importancia_zona_proyecto_vida']] + ': \n \n' + $ficha['porque_importancia_proyecto_vida'], colSpan: 4}, {}, {}, {}]
                                    ]
                                }
                            },
                            '\n',
                            {
                                style: 'subtitulo',
                                margin: [5, 0, 0, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        ['12. Observaciones (Si identifica situaciones de atención prioritaria describalas y reportelas en este campo)']
                                    ]
                                }
                            },
                            {
                                style: 'tableExample',
                                margin: [5, 0, 0, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        [{text: '\n ' + $ficha['observaciones'] + ' \n'}]
                                    ]
                                }
                            },
                            '\n',
                            {
                                style: 'subtitulo',
                                margin: [5, 0, 0, 0],
                                table: {
                                    widths: ['100.0%'],
                                    body: [
                                        ['13. Autorización y Firmas']
                                    ]
                                }
                            },
                            {

                                style: 'tableExample',
                                margin: [5, 0, 0, 0],
                                table: {
                                    widths: ['30.0%', '25.0%', '10.0%', '10.0%', '25.0%'],
                                    body: [
                                        [{text: 'De conformidad con el articulo 9 de la ley 1581 de 2012, con la presente manifiesto que ________ autorizo, de forma previa, expresa e informada, que mi inforación personal y la de mi núcleo familiar se recolecte, ingrese a bases de datos, se actualice, rectifique o surprima, según sea pertinente, y sea transferida a las entidades distritales o nacionales competentes.', rowSpan: 5}, 'JEFE DEL HOGAR Y/O ENTREVISTADO', {text: 'ENTREVISTADOR', colSpan: 3}, {}, {}],
                                        ['', 'Nombre', 'Fecha \n dd/mm/aaaa', 'No. Contrato', 'Nombre'],
                                        ['', '\n \n ', '', '', ''],
                                        ['', 'Firma', {text: 'Firma', colSpan: 3}, {}, {}],
                                        ['', '\n \n \n \n \n', {text: '', colSpan: 3}, {}, {}]
                                    ]
                                }
                            }




                        ]


                    ]

                }
            ],
            styles: {
                tableExample: {
                    fontSize: 7
                },
                tableHeader: {
                    fontSize: 8,
                    bold: true
                },
                tableHeader1: {
                    fontSize: 7,
                    bold: true,
                    alignment: 'center'
                },
                titulo: {
                    fontSize: 15,
                    alignment: 'center',
                    bold: true
                },
                intro: {
                    fontSize: 10,
                    bold: true
                },
                subtitulo: {
                    fontSize: 11,
                    alignment: 'center',
                    bold: true,
                    fillColor: '#00000',
                    color: '#FFFFFF'
                }, subtitulo1: {
                    fontSize: 9,
                    bold: true,
                    fillColor: '#00000',
                    color: '#FFFFFF'
                },
                subtitulo2: {
                    fontSize: 9,
                    alignment: 'center',
                    bold: true,
                    fillColor: '#00000',
                    color: '#FFFFFF'
                },
                subtitulo3: {
                    fontSize: 7,
                    alignment: 'center',
                    bold: true,
                    fillColor: '#00000',
                    color: '#FFFFFF'
                },
                imgCen: {
                    alignment: 'center'
                }
            }
        };

        pdfMake.createPdf(docDefinition).open();

    }

}
function DateFormat(date) {
    var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    var date = new Date();
    date.toLocaleDateString();

    return [year, month, day].join('-');
}

