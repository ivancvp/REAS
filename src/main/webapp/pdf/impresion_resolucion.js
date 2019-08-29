 function imp_resolucion(identificador, elaboro, aprobo) {

    $datos = {
        op: 'datos_resolucion',
        identificador: identificador
    };

    var resultado;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

            resultado = response[0];

        }
    });

    var valor_vur = (resultado["val_res"] ? resultado["val_res"] : '');

    var concepto_de_ingreso = (resultado["Concepto de Ingreso"] ? resultado["Concepto de Ingreso"] : '');
    var fecha_concepto_ingreso = (resultado["fecha_concepto_ingreso"] ? resultado["fecha_concepto_ingreso"] : '');

    fecha_concepto_ingreso = moment(fecha_concepto_ingreso).format("D") + ' de ' + moment(fecha_concepto_ingreso).format("MMMM") + ' de ' + moment(fecha_concepto_ingreso).format("YYYY");

    var direccion = (resultado["Dirección"] ? resultado["Dirección"] : '');
    var manzana = (resultado["MZ"] ? resultado["MZ"] : '');
    var lote = (resultado["LT"] ? resultado["LT"] : '');

    var texto_direccion = direccion + ' MZ ' + manzana + ' LT ' + lote;

    var barrio = (resultado["Barrio"] ? resultado["Barrio"] : '');

    var localidad = (resultado["Localidad"] ? resultado["Localidad"] : '');

    var nombre1 = (resultado["Nombre 1"] ? resultado["Nombre 1"] : '');
    var nombre2 = (resultado["Nombre 2"] ? resultado["Nombre 2"] : '');

    var cedula1 = (resultado["Cedula 1"] ? resultado["Cedula 1"] : '');

    var folio_concepto_tecnico = (resultado["folio_concepto_tecnico"] ? resultado["folio_concepto_tecnico"] : '');
    var folio_est_documentos = (resultado["folio_est_documentos"] ? resultado["folio_est_documentos"] : '');

    var fecha_est = (resultado["fecha_est"] ? resultado["fecha_est"] : '');

    if (fecha_est !== '') {
        fecha_est = moment(fecha_est).format("D") + ' de ' + moment(fecha_est).format("MMMM") + ' de ' + moment(fecha_est).format("YYYY");
    }

    var texto_juridico = (resultado["texto_juridico"] ? resultado["texto_juridico"] : '');

    var cdp_res = (resultado["cdp_res"] ? resultado["cdp_res"] : '');

    var fecha_cdp = (resultado["fecha_cdp"] ? resultado["fecha_cdp"] : '');
    fecha_cdp = moment(fecha_cdp).format("D") + ' de ' + moment(fecha_cdp).format("MMMM") + ' de ' + moment(fecha_cdp).format("YYYY");


    var marca_agua = "Documento preliminar - NO OFICIAL";

    if (resultado["concepto"] ? resultado["concepto"] : true) {
        marca_agua = "";
    }


    var valor_letras = numeroALetras(Number(valor_vur), {
        plural: '',
        singular: '',
        centPlural: '',
        centSingular: ''
    });


    valor_vur = (new Intl.NumberFormat("es-ES").format(valor_vur));
    cedula1 = (new Intl.NumberFormat("es-ES").format(cedula1));




    pdfMake.fonts = {
        // Default font should still be available
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Bold.ttf',
            italics: 'Roboto-MediumItalic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
        },
        // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
        Arial: {
            normal: 'Arial.ttf',
            bold: 'Arial-Bold.ttf',
            italics: 'Arial-Italic.ttf',
            bolditalics: 'Arial-BoldItalic.ttf'
        }
    };


    var docDefinition = {
        pageMargins: [60, 150, 60, 90],



        header:


            function (currentPage, pageCount) {
                return {

                    margin: [60, 25],
                    columns: [
                        {
                            table: {
                                widths: [60, '*', 60],
                                body: [
                                    [{
                                        rowSpan: 3, colSpan: 3,
                                        image: 'data:image/jpeg;base64,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',
                                        width: 65, alignment: 'center'
                                    }, '', ''],
                                    ['', '', ''],
                                    ['', '', ''],
                                    [{ text: 'RESOLUCIÓN No', colSpan: 3, alignment: 'center', bold: true, fonSize: 11, color: '#424949' }, '', ''],
                                    ['', '', { text: 'Página. ' + currentPage.toString() + ' de ' + pageCount, fontSize: 8, alignment: 'center', color: '#626567' }],
                                    [{ text: '"Por medio de la cual se Asigna un Valor Único de Reconocimiento-VUR-”', colSpan: 3, alignment: 'center', color: '#626567', fontSize: 11 }, '', ''],
                                ]
                            }, layout: 'noBorders'
                        },
                    ],
                };
            },

        footer: {
            margin: [100, 0, 50, 20],
            columns: [
                {
                    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACZA6ADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKADoK+Gf+C4P/BXKH/glJ+z5p2oaTY6b4g+InjO6ey8PaTeylYEVF3TXcyr8xijUqMBl3NIv+1X3Melfzs/8Fov+Can7Y3/BRf8A4Kp+JrrT/hnqV54OsXg0bwlqsl5BFo9rpqqrea0rPuVmkeV3Xbu3Nt2/KtZzlpoaU7X94+rv+CEv/Bwx4+/4KMftGXPwn+I3gfR4dW/sqfVrXXtASWK2iSHbvS5hkLbN28Krq33vl21+usbb4w3tXyB/wSD/AOCSvgz/AIJZ/ABdH0trfXPHmvIk3ijxIYtr30yjiGH+JLaPJ2L/ABffb5mr7AjXYgWqje2oqlr+6OoooqiAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoryP9pX9uL4R/sc29i3xM8e6B4Rk1Td9itruVmuroL95khQNIyj+8F2ivJf+H6X7J/8A0WPR/wDwXX//AMYoA+tqK+Sf+H6f7KH/AEWTR/8AwW3/AP8AI9H/AA/T/ZQ/6LJo/wD4Lb//AOR6APraivk/R/8Agt9+yrrep29pH8ZvDcMt04ije8hurODLdMyyxLGo92avqTT9Sg1eyhuLeaO4t7hFkiljYOkiMMhlI6qRQBcooooAKKKKACiiigAoorifjZ+0N4H/AGbvBUniL4geLdB8G6HG/lfbdXvUtYmc9EXcfmb2HNAHbUV8v/8AD6b9lP8A6Lv8Pf8AwYf/AFqX/h9L+yp/0Xf4ef8Agx/+tQB9P0V8wf8AD6X9lT/ou/w8/wDBj/8AWpP+H0n7KYIX/hfXw5H11ML/AEoA+oKKw/AfxB0P4peFLLXvDmsabr2h6nH5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',
                    width: 400,
                    height: 60
                }
            ],

        },
        watermark: { text: marca_agua, color: 'gray', opacity: 0.3, bold: true, italics: false },
        content: [

            { text: '\n EL DIRECTOR TÉCNICO DE REASENTAMIENTOS DE LA CAJA DE LA VIVIENDA POPULAR', style: 'textobold', fontSize: 12, alignment: 'center' },
            {
                text: '\n En uso de sus facultades legales y en especial las conferidas por los Acuerdos No. 20 de 1942 y 15 de 1959 del Concejo de Bogotá, el Decreto ' +
                    'Ley 1421 de 1993, el Acuerdo No. 003 de 2008, Acuerdo No 004 de 2008 emanados del Consejo Directivo, la Resolución No. 4400 de 26 de agosto de 2016, y', style: 'texto'
            },
            { text: '\n CONSIDERANDO:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    {
                        text: '\n Que el artículo 301 del Decreto Distrital 190 de 2004 compilatorio del Plan de Ordenamiento Territorial, al señalar los objetivos del Subprograma' +
                            'de reasentamiento por alto riesgo no mitigable y por obra pública, indica que:  ', style: 'texto'
                    },
                    {
                        text: '“El programa de Reasentamiento consiste en el conjunto de acciones y actividades necesarias para lograr el traslado de las familias de estratos 1 y 2 ' +
                            'que se encuentran asentadas en zonas declaradas de alto riesgo no mitigable por deslizamiento o inundación, las zonas objeto de intervención por obra' +
                            'pública o la que se requiera para cualquier intervención de reordenamiento territorial (...)”. \n', italics: true, style: 'texto'
                    },

                ]
            },
            {
                text: '\n Que el literal a), numeral 2, artículo 302 del Decreto ibídem, estableció como acción estratégica del Subprograma de Reasentamiento por Alto Riesgo: estudiar,' +
                    ' proponer y evaluar la determinación de un Valor Único de Reconocimiento -VUR- de los inmuebles ubicados en zonas de Alto Riesgo no mitigable, que permita' +
                    ' a la Administración Distrital incluirlos en los programas de vivienda. ', style: 'texto'
            },
            {
                text: '\n Que en desarrollo de lo señalado en el Plan de Ordenamiento Distrital anteriormente referido dentro del Plan de Desarrollo Económico, Social, Ambiental y de Obras' +
                    ' Públicas para Bogotá D.C. 2016-2020 – “Bogotá Mejor para Todos”, adoptado mediante el Acuerdo Distrital 645 de 2016, se contempla como meta del Programa de' +
                    ' Reasentamiento la atención de 4.286 familias localizadas en zonas de alto riesgo no mitigable, proceso que estará a cargo del Instituto Distrital de Gestión' +
                    ' del Riesgo y Cambio Climático –IDIGER- y la Caja de la Vivienda Popular –CVP-', style: 'texto'
            },
            {
                text: [
                    { text: '\n Que el Decreto Distrital 255 de 2013 en su artículo 6 definió el ', style: 'texto' },
                    { text: 'Valor Único de Reconocimiento –VUR- ', style: 'texto', bold: true },
                    { text: 'y dispuso: ', style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\n“ARTÍCULO 6º.- Valor Único de Reconocimiento –VUR-. ', style: 'texto', italics: true, bold: true, fontSize: 11 },
                    {
                        text: 'Es el instrumento financiero mediante el cual se facilitará a las familias ubicadas en alto riesgo no mitigable por remoción en masa, inundación,' +
                            ' desbordamiento, crecientes súbitas o avenidas torrenciales, en estratos 1 y 2 o su equivalente jurídico, el acceso a una solución de vivienda' +
                            ' de reposición en el territorio nacional y que de manera general y uniforme representa los derechos reales de dominio o de posesión que recaigan' +
                            ' sobre las viviendas.', style: 'texto', italics: true, fontSize: 11
                    }

                ], margin: [40, 0, 0, 0]
            },
            {
                text: [
                    { text: '\nPARÁGRAFO 1.- ', style: 'texto', italics: true, bold: true, fontSize: 11 },
                    {
                        text: 'El VUR equivale a 50 Salarios Mínimos Legales Mensuales Vigentes al momento de su reconocimiento, el cual será asignado por la Caja de la Vivienda' +
                            ' Popular.', style: 'texto', italics: true, fontSize: 11
                    }
                ], margin: [40, 0, 0, 0]
            },
            {
                text: [
                    { text: '\nPARÁGRAFO 2.- ', style: 'texto', italics: true, bold: true, fontSize: 11 },
                    {
                        text: 'Si el valor de la vivienda en condición de alto riesgo no mitigable es superior al VUR, la familia podrá solicitar el pago del reconocimiento' +
                            ' del valor del avalúo comercial, de conformidad con las disposiciones establecidas en la Ley 9 de 1989, modificada por la Ley 388 de 1997, ' +
                            'y demás disposiciones concordantes.”', style: 'texto', italics: true, fontSize: 11
                    }
                ], margin: [40, 0, 0, 0]
            },
            {
                text: [
                    { text: '\nQue conforme a lo anteriormente referido para la vigencia 2018, el valor del VUR corresponde a la suma de', style: 'texto' },
                    { text: '' + valor_letras + ' ($' + valor_vur + ') MONEDA LEGAL', bold: true, style: 'texto' },
                    { text: ' el cual solo será reajustable cuando el valor del avalúo comercial sea superior. ', style: 'texto' }

                ]
            },
            {
                text: '\nQue el Fondo de Prevención y Atención de Emergencias –FOPAE- hoy Instituto Distrital de Gestión de Riesgos y Cambio Climático –IDIGER- ' +
                    'emitió Concepto Técnico ' + concepto_de_ingreso + ' del ' + fecha_concepto_ingreso + ', recomendando incluir en el programa de Reasentamientos el predio ubicado en la ' +
                    ' ' + texto_direccion + ' (IDIGER/UAECD), Barrio ' + barrio + ', Localidad ' + localidad + ' de la Ciudad de Bogotá D.C., por encontrarse ubicado ' +
                    ' en zona de alto riesgo de inundación por avenidas torrenciales, situación que genera vulnerabilidad para la vida y la integridad del(a) señor(a) ' +
                    '' + nombre1 + ', identificado(a) con la cédula de ciudadanía No. ' + cedula1 + ' y su núcleo familiar, de conformidad con lo dispuesto en el ' +
                    'Decreto Distrital 255 de 2013. (Folio(s): ' + folio_concepto_tecnico + ')', style: 'texto'
            },
            {
                text: [
                    {
                        text: '\nQue de acuerdo a lo anterior, mediante estudio de documentos de fecha ' + fecha_est + ', la Dirección de Reasentamiento recomendó a la ' +
                            'Caja de la Vivienda Popular', style: 'texto'
                    },
                    { text: texto_juridico, style: 'texto', italics: true },
                    { text: '(Folio(s): ' + folio_est_documentos + ')', style: 'texto' }
                ]
            },
            {
                text: [
                    {
                        text: '\nQue verificados los requisitos establecidos en el Decreto Distrital 255 de 2013 por la Dirección de Reasentamientos, se encuentra que la ' +
                            'familia en cabeza del(a) señor(a) ', style: 'texto'
                    },
                    { text: nombre1, style: 'texto', bold: true },
                    {
                        text: ', identificado(a) con la cédula de ciudadanía No. 65.811.89, se incluye en el Programa de Reasentamientos y en consecuencia es viable asignar el' +
                            ' valor Único de Reconocimiento – VUR-.', style: 'texto'
                    }
                ]
            },
            {
                text: '\nQue corresponde a las familias propender por la búsqueda y selección de la alternativa habitacional, frente a lo cual la Caja de la Vivienda Popular' +
                    ' realizará el acompañamiento integral hasta que accedan a una solución de vivienda definitiva, de conformidad con lo dispuesto en el parágrafo ' +
                    'del artículo 5 del Decreto Distrital 255 de 2013. ', style: 'texto'
            },
            {
                text: '\nQue una vez en firme el acto administrativo que asigna el VUR, se cumple con el requisito para realizar los desembolsos en la cuenta de ahorro ' +
                    'programado que para tal efecto aperturen los beneficiarios o para que se constituya como un deposito a favor de terceros.', style: 'texto'
            },
            {
                text: [
                    {
                        text: '\nQue para atender los compromisos asumidos en el presente acto administrativo, la Caja de la Vivienda Popular cuenta con el Certificado ' +
                            'de Disponibilidad Presupuestal No. ', style: 'texto'
                    },
                    { text: '' + cdp_res + ' del ' + fecha_cdp + ',', style: 'texto', bold: true },
                    { text: ' emitido por el responsable del presupuesto de la entidad.', style: 'texto' }
                ]
            },
            { text: '\nEn mérito de lo expuesto, ', style: 'texto' },
            { text: '\n RESUELVE:', style: 'textobold', fontSize: 12, alignment: 'center' },
            {
                text: [
                    { text: '\nARTÍCULO PRIMERO: ', style: 'texto', bold: true },
                    { text: 'Asignar el Valor Único de Reconocimiento –VUR- por la suma de', style: 'texto' },
                    { text: '' + valor_letras + ' ($' + valor_vur + ') MONEDA LEGAL,', style: 'texto', bold: true },
                    { text: ' destinado a facilitar el acceso a una solución de vivienda de reposición en el territorio nacional a favor del(a) señor(a) ', style: 'texto' },
                    { text: nombre1, style: 'texto', bold: true },
                    { text: ' identificado(a) con la cédula de ciudadanía No. ' + cedula1 + '.', style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nARTÍCULO SEGUNDO: ', style: 'texto', bold: true },
                    {
                        text: 'Ordenar a la Subdirección Financiera realizar el registro presupuestal del presente acto administrativo con observancia del procedimiento' +
                            ' establecido según fuente de financiación.', style: 'texto'
                    }
                ]
            },
            {
                text: [
                    { text: '\nARTÍCULO TERCERO: ', style: 'texto', bold: true },
                    { text: 'Ordenar a la Subdirección Financiera el giro del Valor Único de Reconocimiento asignado al(a) señor(a) ', style: 'texto' },
                    { text: nombre1, style: 'texto', bold: true },
                    {
                        text: ' identificado(a) con la cédula de ciudadanía No. 65.811.89, previa viabilidad de la Dirección de Reasentamientos a la cuenta de ahorro' +
                            ' programado de la cual es titular la beneficiaria del VUR o sin situación de fondos y constituir el depósito a favor de terceros, ' +
                            'con el fin de realizar los pagos de conformidad con lo pactado en la promesa de compraventa, opción de compra y/o contrato de vinculación' +
                            ' como beneficiarios de área en el Fideicomiso, previa autorización de la entidad.', style: 'texto'
                    }
                ]
            },
            {
                text: [
                    { text: '\nARTÍCULO CUARTO:  ', style: 'texto', bold: true },
                    { text: 'El(La) beneficiario(a) del VUR, señor(a) ', style: 'texto' },
                    { text: nombre1, style: 'texto', bold: true },
                    {
                        text: ' identificado(a) con la cédula de ciudadanía No. ' + cedula1 + ', realizará mediante acta la entrega material del predio en alto riesgo a la ' +
                            ' Caja de la Vivienda Popular, debidamente saneado por todo concepto, junto con la presentación de los paz y salvos definitivos de los ' +
                            ' servicios públicos domiciliarios con constancia de taponamiento o certificación de no existencia de cuenta de servicios públicos, en ' +
                            'un plazo no superior a treinta (30) días calendario, contados a partir de la ejecutoria del presente acto administrativo, con el fin de ' +
                            'que la Caja de la Vivienda Popular pueda iniciar las acciones necesarias para la asignación de la ayuda de relocalización transitoria. ' +
                            'En caso de que la beneficiaria se niegue a entregar el predio en alto riesgo, se solicitará a la Alcaldía Local dar aplicación a lo ' +
                            'contemplado en el artículo 1 del Decreto 038 de 2007, tendiente a ordenar la desocupación y demolición de las edificaciones ubicadas ' +
                            'en zonas de alto riesgo, dentro de la jurisdicción de sus respectivas localidades, de conformidad con el inciso 3 del artículo ' +
                            '56 de la Ley 9ª de 1989. ', style: 'texto'
                    }
                ]
            },
            {
                text: [
                    { text: '\nARTÍCULO QUINTO:  ', style: 'texto', bold: true },
                    {
                        text: 'Notificar el contenido de la presente resolución a la beneficiaria del Valor Único de Reconocimiento – VUR, de conformidad con el artículo' +
                            ' 66 y siguientes de la Ley 1437 de 2011 ', style: 'texto'
                    },
                    { text: '“Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo”.', style: 'texto', italics: true }
                ]
            },
            {
                text: [
                    { text: '\nARTÍCULO SEXTO:  ', style: 'texto', bold: true },
                    {
                        text: 'Contra el presente acto administrativo procede el recurso de reposición, de conformidad con lo dispuesto en el artículo 76 del Código' +
                            ' de Procedimiento Administrativo y de lo Contencioso Administrativo, dentro de los diez (10) días hábiles siguientes a la notificación personal,' +
                            ' o a la notificación por aviso, según sea el caso.', style: 'texto'
                    }
                ]
            },
            {
                text: [
                    { text: '\nARTÍCULO SÉPTIMO:  ', style: 'texto', bold: true },
                    { text: 'El presente acto administrativo rige a partir de la fecha de su ejecutoria.', style: 'texto' }
                ]
            },
            { text: '\n COMUNÍQUESE, NOTIFÍQUESE Y CÚMPLASE', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\n Dada en Bogotá D.C.,  el día ', style: 'texto' },
            { text: '\n\n\n\n Miller Antonio Castillo Castillo', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: 'Director Técnico de Reasentamientos \n\n\n\n', style: 'texto', fontSize: 12, alignment: 'center' },
            {
                table: {
                    widths: [50, '*'],
                    body: [
                        [{ text: 'Proyectó:', fontSize: 6 }, { text: 'Adelina Gómez – Profesional Universitario ', fontSize: 6 }],
                        [{ text: 'Revisó:', fontSize: 6 }, { text: 'Ana Penagos López – Profesional Universitario', fontSize: 6 }],
                        [{ text: 'Vo.Bo:', fontSize: 6 }, { text: 'Profesional Dirección Jurídica', fontSize: 6 }],
                        [{ text: 'Vo.Bo:', fontSize: 6 }, { text: 'Juan Pablo Cardona Acevedo - Director Jurídico.', fontSize: 6 }],
                        [{ text: 'Archivado en:', fontSize: 6 }, { text: 'Serie Resoluciones-Dirección General ', fontSize: 6 }],

                    ]
                },
                layout: 'noBorders'
            }

        ],

        styles: {
            sub1: {
                bold: true
            },
            superMargin: {
                margin: [20, 0, 0, 0],
                fontSize: 11,
                alignment: 'justify'
            },
            texto: {
                fontSize: 12,
                alignment: 'justify'
            },
            texto1: {
                fontSize: 10,
                alignment: 'justify'
            },
            textobold: {
                fontSize: 10,
                alignment: 'justify',
                bold: true
            },
            subtitulo: {
                fontSize: 10,
                alignment: 'center',
                background: 'black',
                color: 'white',
                bold: true
            },
            titulo: {
                fontSize: 11.5,
                alignment: 'center',
                bold: true
            }
        }, defaultStyle: {
            font: 'Arial'
        }

    };
    return docDefinition;



}


function imp_resolucion_caracoli(identificador, elaboro, aprobo) {

    $datos = {
        op: 'datos_resolucion',
        identificador: identificador
    };

    var resultado;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

            resultado = response[0];
        }
    });

    var ocupacion = (resultado["IDENTIFICA_ANTERIOR"] ? resultado["IDENTIFICA_ANTERIOR"] : '');

    var identificador = (resultado["IDENTIFICADOR"] ? resultado["IDENTIFICADOR"] : '');

    var concepto_de_ingreso = (resultado["Concepto de Ingreso"] ? resultado["Concepto de Ingreso"] : '');
    var fecha_concepto_ingreso = (resultado["fecha_concepto_ingreso"] ? resultado["fecha_concepto_ingreso"] : '');

    fecha_concepto_ingreso = moment(fecha_concepto_ingreso).format("D") + ' de ' + moment(fecha_concepto_ingreso).format("MMMM") + ' de ' + moment(fecha_concepto_ingreso).format("YYYY");

    var direccion = (resultado["Dirección"] ? resultado["Dirección"] : '');
    var manzana = (resultado["MZ"] ? resultado["MZ"] : '');
    var lote = (resultado["LT"] ? resultado["LT"] : '');

    var texto_direccion = direccion + ' MZ ' + manzana + ' LT ' + lote;

    var barrio = (resultado["Barrio"] ? resultado["Barrio"] : '');

    var localidad = (resultado["Localidad"] ? resultado["Localidad"] : '');

    var nombre1 = (resultado["Nombre 1"] ? resultado["Nombre 1"] : '');
    var nombre2 = (resultado["Nombre 2"] ? resultado["Nombre 2"] : '');

    var cedula1 = (resultado["Cedula 1"] ? resultado["Cedula 1"] : '');

    var folio_concepto_tecnico = (resultado["folio_concepto_tecnico"] ? resultado["folio_concepto_tecnico"] : '');
    var folio_est_documentos = (resultado["folio_est_documentos"] ? resultado["folio_est_documentos"] : '');

    var fecha_est = (resultado["fecha_est"] ? resultado["fecha_est"] : '');

    if (fecha_est !== '') {
        fecha_est = moment(fecha_est).format("D") + ' de ' + moment(fecha_est).format("MMMM") + ' de ' + moment(fecha_est).format("YYYY");
    }
    var texto_juridico = (resultado["texto_juridico"] ? resultado["texto_juridico"] : '');

    var cdp_res = (resultado["cdp_res"] ? resultado["cdp_res"] : '');

    var fecha_cdp = (resultado["fecha_cdp"] ? resultado["fecha_cdp"] : '');


    var fecha_cdp_dia = moment(fecha_cdp).format("D");
    var fecha_cdp_mes = moment(fecha_cdp).format("MMMM");
    var fecha_cdp_ano = moment(fecha_cdp).format("YYYY");



    var no_cdp = (resultado["no_cdp"] ? resultado["no_cdp"] : '');

    var zona = $('#zona').val();
    var folio_est_documentos = $('#folio_est_documentos').val();

    var marca_agua = "Documento preliminar - NO OFICIAL";

    if (resultado["concepto"] ? resultado["concepto"] : false) {
        marca_agua = "";
    }

    var elaboro = (resultado["elaboro"] ? resultado["elaboro"] : '');
    var aprobo = (resultado["aprobo"] ? resultado["aprobo"] : '');
    var aprob_juridica = (resultado["aprob_juridica"] ? resultado["aprob_juridica"] : '');

    var valor_resol = (resultado["valor_resol"] ? resultado["valor_resol"] : '');

    var valor_letras = numeroALetras(Number(valor_resol), {
        plural: '',
        singular: '',
        centPlural: '',
        centSingular: ''
    });



    valor_resol = (new Intl.NumberFormat("es-ES").format(valor_resol));


    cedula1 = (new Intl.NumberFormat("es-ES").format(cedula1));




    pdfMake.fonts = {
        // Default font should still be available
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Bold.ttf',
            italics: 'Roboto-MediumItalic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
        },
        // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
        Arial: {
            normal: 'Arial.ttf',
            bold: 'Arial-Bold.ttf',
            italics: 'Arial-Italic.ttf',
            bolditalics: 'Arial-BoldItalic.ttf'
        }
    };


    var docDefinition = {
        pageMargins: [60, 150, 60, 90],
        pageSize: 'FOLIO',


        header:


            function (currentPage, pageCount) {
                return {

                    margin: [60, 25],
                    columns: [
                        {
                            table: {
                                widths: [60, '*', 60],
                                body: [
                                    [{
                                        rowSpan: 3, colSpan: 3,
                                        image: 'data:image/jpeg;base64,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',
                                        width: 65, alignment: 'center'
                                    }, '', ''],
                                    ['', '', ''],
                                    ['', '', ''],
                                    [{ text: 'RESOLUCIÓN No', colSpan: 3, alignment: 'center', bold: true, fonSize: 11, color: '#424949' }, '', ''],
                                    ['', '', { text: 'Hoja ' + currentPage.toString() + ' de ' + pageCount, fontSize: 8, alignment: 'center', color: '#626567' }],
                                    [{ text: '"Por medio de la cual se asigna y se ordena el pago de un instrumento financiero para la mitigación de las acciones derivadas de la recuperación del predio denominado CARACOLI, Polígono de monitoreo 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, en el marco del Decreto Distrital 227 del 12 de junio 2015”  ', colSpan: 3, alignment: 'center', color: '#626567', fontSize: 9 }, '', ''],
                                ]
                            }, layout: 'noBorders'
                        },
                    ],
                };
            },

        footer: {
            margin: [100, 0, 50, 20],
            columns: [
                {
                    image: 'data:image/png;base64,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',
                    width: 350,
                    height: 60
                }
            ],

        },
        watermark: { text: marca_agua, color: 'gray', opacity: 0.3, bold: true, italics: false },
        content: [

            { text: '\n EL DIRECTOR TECNICO DE REASENTAMIENTOS HUMANOS DE LA CAJA DE LA VIVIENDA POPULAR,', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\n En uso de sus facultades legales y en especial las conferidas por los Acuerdos No. 20 de 1942 y 15 de 1959 del Concejo de Bogotá y el Decreto Ley 1421 de 1993; el Acuerdo No. 003 de 2008, Acuerdo No 004 de 2008 emanados del Consejo Directivo, Resolución No. 4400 de 26 de agosto de 2016.', style: 'texto' },
            { text: '\n CONSIDERANDO:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nQue el artículo 301 del Decreto Distrital 190 de 2004 compilatorio del Plan de Ordenamiento Territorial, al señalar los objetivos del Subprograma de reasentamiento por alto riesgo no mitigable y por obra pública, indica que ', style: 'texto' },
                    { text: '“El programa de Reasentamiento consiste en el conjunto de acciones y actividades necesarias para lograr el traslado de las familias de estratos 1 y 2 que se encuentran asentadas en zonas declaradas de alto riesgo no mitigable por deslizamiento o inundación, las zonas objeto de intervención por obra pública ', italics: true, style: 'texto' },
                    { text: 'o la que se requiera para cualquier intervención de reordenamiento territorial”.', decoration: 'underline', bold: true, italics: true, style: 'texto' },
                    { text: ' (Negrilla y Subrayado Fuera de texto).', style: 'texto' }
                ]
            },
            { text: '\nQue el mismo Decreto Distrital 190 de 2004 compilatorio del Plan de Ordenamiento Territorial de Bogotá, en su literal a), numeral 2, del artículo 302, estableció como acción estratégica del Subprograma de reasentamiento por Alto Riesgo: estudiar, proponer y evaluar la determinación de un Valor Único de Reconocimiento (VUR) de los inmuebles ubicados en zonas de Alto Riesgo no mitigable, que permita a la Administración Distrital incluirlos en los programas de vivienda. ', style: 'texto' },

            {
                text: [
                    { text: '\nQue el Consejo Directivo de la Caja de la Vivienda Popular mediante el Acuerdo 04 de 2008 modificó la estructura organizacional de la entidad, creó la Dirección de Reasentamientos y asignó, entre otras funciones, la de', style: 'texto' },
                    { text: '“Gestionar los recursos financieros de los programas y proyectos que se adelantan en la dependencia referidos a la oferta y demanda de vivienda”.', style: 'texto', italics: true }

                ]
            },
            { text: '\nQue a la Caja de la Vivienda Popular le corresponde, entre otras funciones, el reasentar a las familias que se encuentren en Alto Riesgo no mitigable en concordancia con la política de Hábitat del Distrito y la priorización de beneficiarios establecida por el Instituto Distrital de Gestión del Riesgo y Cambio Climático - IDIGER - de acuerdo a lo preceptuado en las Leyes 9 de 1989 y 388 de 1997 y el Decreto Distrital 255 del 12 junio de 2013, entre otros.', style: 'texto' },

            { text: '\nQue bajo el anterior panorama, se observa que las anteriores disposiciones normativas vigentes en el Distrito Capital, no prevén el reasentamiento de familias distintas a aquellas que se encuentran en alto riesgo no mitigable, en particular, en lo que se refiere a la ocupación ilegal de bienes fiscales, y que con el inicio de acciones tendientes a su recuperación se pueden ver  eventualmente  vulnerados  derechos fundamentales como la vida y la vivienda digna, razón por la cual, el Distrito Capital implementó un programa de mitigación del impacto social derivado de este tipo de acciones, el cual se adoptó mediante el Decreto 227 de 2015, que en su parte considerativa indicó:', style: 'texto' },

            {
                text: [
                    { text: '\n“(…) Que conforme a las atribuciones que le otorga el Decreto 1421 de 1993 al Alcalde Mayor en los artículos 38,39,40, y 53, el artículo 9 de la Ley 489 de 1998, en concordancia con los artículos 110 del Decreto Nacional 111 de 1996 y 87 del Decreto Distrital 714 de 1996, ', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'se asigna a la Caja de la Vivienda Popular para que adelante las acciones que considere pertinentes, para realizar el acompañamiento integral a la población que pueda ser objeto de acciones de restitución de inmuebles de carácter público. ', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue para ese mismo efecto, se hace necesario establecer una política pública distrital de acompañamiento para mitigar el Impacto Social derivado de las Acciones Judiciales o administrativas de Restitución de Bienes Inmuebles de Carácter Público, que dejan en situación de vulnerabilidad a los grupos familiares directamente afectados con la medida, que implica acompañamiento mediante acciones sociales y habitacionales, con el fin de insertar a las familias al tejido social de la ciudad de manera sostenible y contribuir al mejoramiento de su calidad de vida. (…)” ', italics: true, style: 'texto' },
                    { text: '(Subrayado fuera de texto).', style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            {
                text: [
                    { text: '\nQue el Alcalde Mayor del Distrito Capital, expidió el Decreto 227 del 12 de junio de 2015, ', style: 'texto' },
                    { text: '“Por medio del cual se adopta el programa de Acompañamiento Integral para Mitigación del Impacto Social Derivado de las acciones  de recuperación  de bienes fiscales, uso público, espacio público u objeto de recuperación ecológica o preservación ambiental y se dictan otras disposiciones”, ', italics: true, style: 'texto' },
                    { text: 'acto administrativo en el cual se determinó la creación de la Subcomisión del programa, con su presidencia y secretaría técnica y los organismos encargados de gestionar la asignación de recursos económicos, y definieron la autoridad competente para el reasentamiento, entre otros.', style: 'texto' }
                ]
            },




            {
                text: [
                    { text: '\nQue la Secretaría Técnica de la subcomisión intersectorial para la Mitigación del Impacto Social derivado de acciones de recuperación de Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, presentó a la subcomisión mencionada el caso de la ocupación Caracolí, Polígono de monitoreo número 123, UPZ 69-Ismael Perdomo, barrio Caracolí de la localidad 19 de Ciudad Bolívar, con el fin de decidir su ingreso al ', style: 'texto' },
                    { text: '“Programa de Acompañamiento Integral para la Mitigación del Impacto Social derivado de las acciones de recuperación de bienes fiscales, uso público, espacio público, u objeto de recuperación ecológica o preservación ambiental”. ', italics: true, style: 'texto' }
                ]
            },

            { text: '\nQue en consecuencia, la Secretaria Distrital de Gobierno  profirió la Resolución número 0740 del 7 de septiembre de 2018, la cual aprueba el caso ocupación Caracolí y de conformidad con el numeral 6º del parágrafo 4º del artículo 34 del Decreto Distrital  546 de 2007, numeral y parágrafo que fueron incluidos con ocasión de la modificación de este artículo por virtud del artículo 5º del Decreto Distrital 227 de 2015, mediante la cual se ordenó la inclusión del grupo poblacional asociado a las ocupaciones en el predio ya descrito, y designó a las entidades Alcaldía Local de Ciudad Bolívar; la Caja de la Vivienda Popular, para que adelantaran las acciones correspondientes a la recuperación de los bienes fiscales ocupados.', style: 'texto' },

            {
                text: [
                    { text: '\nQue en el considerando tercero de la Resolución 0740 del 7 de septiembre de 2018, se indica que ', style: 'texto' },
                    { text: '“En sesión ordinaria del 4 de julio de 2018, según consta en el Acta respectiva, se realizó la presentación preliminar por parte de la Alcaldía Local de Ciudad Bolívar y de acuerdo con el orden del día, solicitó la postulación para el Programa de Acompañamiento Integral para Mitigación  del Impacto Social Derivado de las Acciones de Recuperación de Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, del área  denominada “Caracolí” ubicada en la UPZ 69-Ismael Perdomo, resaltando que  la situación de asentamiento y malas condiciones físicas de las ocupaciones ilegales, podrían representar un riesgo de trasmisión de enfermedades de alto impacto que ponen en peligro la  vida de los ocupantes del área  denominada  Caracolí”.', italics: true, style: 'texto' }
                ]
            },

            { text: '\nQue el parágrafo único del artículo 6° del  Decreto 227 del 12 de junio 2015, dejó a cargo de la Subcomisión Intersectorial (artículo 5° Ibídem), cuantificar dentro del marco técnico los recursos presupuestales para determinar el monto del instrumento financiero para acceder a la solución habitacional en los casos de reasentamientos, fijándose en la suma de hasta setenta (70) salarios mínimos legales mensuales vigentes, al momento de su reconocimiento y correspondiente al valor de una vivienda de interés prioritario, según el Título 1.3 – Lineamientos Financieros-Presupuestales, numeral 1.3.3- Instrumento Financiero para Soluciones Habitacionales del mencionado marco técnico, que establece:', style: 'texto' },

            {
                text: [
                    { text: '\n“Para atender a las familias del PAIMIS recomendadas al programa de reasentamientos se establece un instrumento financiero para el acceso a una solución habitacional, el cual equivaldrá hasta setenta (70) Salarios Mínimos Legales Mensuales Vigentes al momento de su reconocimiento, y este será asignado por la Caja de la Vivienda Popular; si el valor de la vivienda es superior, el núcleo familiar podrá optar por el avalúo comercial del predio, de conformidad con lo establecido en la Ley 9 de 1989, modificada por la ley (sic) 388 de 1997 y demás normas concordantes”', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue de conformidad con la orden impartida mediante el parágrafo 1 del Artículo 3° de la Resolución número 0740 de 2018, y según comunicación de la Alcaldía Local de Ciudad Bolívar con radicado 20186930275381 del 21 de noviembre de 2018 se determinó la inclusión de el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1, bold: true, style: 'texto' },
                    { text: ' y su núcleo familiar quien habitaba en la ', style: 'texto' },
                    { text: 'zona No. ' + zona + ', ocupación No. ' + ocupacion, bold: true, style: 'texto' },
                    { text: ' del citado predio, tal como se evidencia en el Acta de notificación y evacuación por invasión ilegal del 8 de octubre de 2018.', style: 'texto' }
                ]
            },

            { text: '\nQue los beneficiarios ingresaron al Programa de Reasentamientos de la Caja de la Vivienda Popular, inicialmente en la modalidad de Relocalización Transitoria de conformidad con el artículo 5 de la Resolución No. 0740 del 7 de septiembre de 2018, que indica:', style: 'texto' },

            {
                text: [
                    { text: '\n“ARTÍCULO 5°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular garantizara la relocalización transitoria de las personas identificadas por la Alcaldía Local de Ciudad Bolívar, de acuerdo con lo establecido en la Resolución 740 de 2015 expedida por la Caja de la Vivienda Popular, adicionada por el Artículo 1° de la Resolución 2947 del 2015, hasta tanto se establezca si cumple o no con los requisitos señalados en el Decreto Distrital 227 de 2015 para continuar con su proceso de reasentamiento”', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ',', bold: true, style: 'texto' },
                    { text: ' realizará entrega de la ', style: 'texto' },
                    { text: 'ocupación No. ' + ocupacion + ' ubicada en la zona ' + zona, bold: true, style: 'texto' },
                    { text: ' de la Ocupación Caracolí, Polígono de monitoreo número 123, de la UPZ  69 Ismael Perdomo, mediante acta en la cual habitaba con su grupo familiar, como requisito previo al desembolso del instrumento económico.', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\nQue de conformidad con el estudio jurídico documental de fecha ', style: 'texto' },
                    { text: fecha_est + ', ', bold: true, style: 'texto' },
                    { text: 'obrante a folio ', style: 'texto' },
                    { text: '(' + folio_est_documentos + ') ', bold: true, style: 'texto' },
                    { text: 'elaborado por la Dirección Técnica de Reasentamientos de la Caja de la Vivienda Popular, se determinó que el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'cumple con los requisitos para ser beneficiario del Programa de Reasentamiento, por lo que es viable asignar los recursos financieros para el acceso a una solución habitacional, de conformidad con lo establecido en el Decreto Distrital 227 de 2015 y la Resolución 0740 del 7 de septiembre de 2018. Ya que de la documentación  que  hace parte de la  actuación administrativa se infiere que el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'ha demostrado la ocupación del predio ubicado en la zona ' + zona + ', ocupación ' + ocupacion + ' del barrio Caracolí, de forma quieta, pacifica, e ininterrumpida, conforme se indica en las correspondientes afirmaciones administrativas  ante la  Caja de  la Vivienda Popular,  suscritas bajo la gravedad de juramento por testigos, así mismo  se encuentra registrado en la comunicación de la Alcaldía Local de Ciudad Bolívar, con radicado 20186930275381 del 21 de noviembre de 2018. ', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue para atender las obligaciones en relación con la aplicación del Decreto Distrital 227 de 2015, la Caja de la Vivienda Popular cuenta con el Certificado de Disponibilidad Presupuestal ', style: 'texto' },
                    { text: 'No. ', bold: true, style: 'texto' },
                    { text: no_cdp, bold: true, style: 'texto' },
                    { text: ' del ', bold: true, style: 'texto' },
                    { text: fecha_cdp_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_cdp_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_cdp_ano, bold: true, style: 'texto' },
                    { text: ' emitido por el responsable del presupuesto de la Entidad.', style: 'texto' }
                ]
            },

            { text: '\nEn mérito de lo expuesto, ', style: 'texto' },

            { text: '\nRESUELVE:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nARTÍCULO PRIMERO:', bold: true, style: 'texto' },
                    { text: 'Asignar el Instrumento Financiero de que trata el Decreto Distrital 227 de 2015, equivalente a setenta (70) salarios mínimos legales mensuales vigentes al momento de su reconocimiento, suma que asciende en esta vigencia a ', style: 'texto' },
                    { text: valor_letras + '($' + valor_resol + ') MONEDA LEGAL, ', bold: true, style: 'texto' },
                    { text: 'para la mitigación de las acciones derivadas de la recuperación del predio denominado ', style: 'texto' },
                    { text: 'CARACOLI,', bold: true, style: 'texto' },
                    { text: ' en la localidad de Ciudad Bolívar a favor de el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'destinado a facilitar el acceso a una solución de habitacional de reposición en el territorio nacional.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nPARÁGRAFO: ', bold: true, style: 'texto' },
                    { text: 'Para efectos de transferir el valor de los recursos financieros asignados para el acceso a una solución habitacional, una vez surtida la notificación personal, el (la) beneficiario(a) deberá presentar contrato de apertura de cuenta de ahorro programado y la autorización de desembolso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO SEGUNDO:  ', bold: true, style: 'texto' },
                    { text: 'Ordenar a la Subdirección Financiera realizar el registro presupuestal del presente acto administrativo con observancia del procedimiento establecido según fuente de financiación y girar los recursos financieros asignados, una vez se presente por el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'la Certificación bancaria de la cuenta de ahorro programado de la cual es titular previa firmeza del acto administrativo, ó girar sin situación de fondos y constituir el depósito a favor de terceros, con el fin de realizar los giros de conformidad con lo pactado en la promesa de compraventa, opción de compra y/o contrato de vinculación como beneficiario de área en el Fideicomiso, previa viabilidad de la entidad. El desembolso de la asignación del instrumento financiero estará condicionado a la suscripción del acta de entrega de los inmuebles objeto del PAIMIS, con la entrega real y material de los mismos.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO TERCERO: ', bold: true, style: 'texto' },
                    { text: 'Para el desembolso de los recursos que se encuentran en depósito a favor de terceros y/o en la cuenta de ahorro programado, una vez los beneficiarios hayan seleccionado vivienda de reposición y, la Entidad la haya viabilizado, el Director de Reasentamientos previa autorización de los beneficiarios, solicitará a la Subdirección Financiera y/o a la entidad financiera el giro ó la movilización de los recursos, de conformidad con lo estipulado en la forma de pago de la promesa de compraventa, opción de compra de la vivienda de reposición y/o contrato de vinculación como beneficiario de área en el fideicomiso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO CUARTO:  ', bold: true, style: 'texto' },
                    { text: 'Notificar el contenido de la presente resolución a el(la) beneficiario(a) del valor de los recursos financieros, de conformidad con el artículo 66 y siguientes de la Ley 1437 de 2011', style: 'texto' },
                    { text: '“Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo”.  ', italics: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO QUINTO: ', bold: true, style: 'texto' },
                    { text: 'Contra el presente acto administrativo procede el recurso de reposición, de conformidad con lo dispuesto en el artículo 76 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo, dentro de los diez (10) días hábiles siguientes a la notificación personal, o a la notificación por aviso, según sea el caso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO SEXTO: ', bold: true, style: 'texto' },
                    { text: 'El presente acto administrativo rige a partir de la fecha de su ejecutoria.', style: 'texto' }
                ]
            },


            { text: '\nCOMUNÍQUESE, NOTIFÍQUESE Y CÚMPLASE', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\nDada en Bogotá D.C.,  el día ', style: 'texto' },
            { text: '\n\n\n\nMILLER ANTONIO CASTILLO CASTILLO', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: 'Director Técnico de Reasentamientos \n\n\n\n', style: 'texto', fontSize: 12, alignment: 'center' },
            {
                table: {
                    widths: [50, '*'],
                    body: [
                        [{ text: 'Proyectó:', fontSize: 6 }, { text: elaboro + ' – Dirección de Reasentamientos.', fontSize: 6 }],
                        [{ text: 'Revisó:', fontSize: 6 }, { text: aprobo + ' – Dirección de Reasentamientos.', fontSize: 6 }],
                        [{ text: 'Revisó:', fontSize: 6 }, { text: 'Yamile Patricia Castiblanco Venegas - Profesional – Dirección Jurídica.', fontSize: 6 }],
                        [{ text: 'Revisó:', fontSize: 6 }, { text: 'Nelson Villarraga Quijano - Profesional Dirección Jurídica.', fontSize: 6 }],
                        [{ text: 'Revisó:', fontSize: 6 }, { text: aprob_juridica + ' – Dirección Jurídica.', fontSize: 6 }],
                        [{ text: 'Vo.Bo:', fontSize: 6 }, { text: 'Karoll Mclane Garcia Vargas - Directora Jurídica(E)', fontSize: 6 }],
                        [{ text: 'Aprobó:', fontSize: 6 }, { text: 'Miller Antonio Castillo Castillo - Director Técnico de Reasentamientos.', fontSize: 6 }],
                        [{ text: '\n\nArchivado en:', fontSize: 6 }, { text: '\n\nSerie Resoluciones-Dirección General ', fontSize: 6 }],

                    ]
                },
                layout: 'noBorders'
            },
            { text: 'ID. ' + identificador, bold: true, style: 'texto', fontSize: 12, alignment: 'right' }
        ],

        styles: {
            sub1: {
                bold: true
            },
            superMargin: {
                margin: [20, 0, 0, 0],
                fontSize: 11,
                alignment: 'justify'
            },
            texto: {
                fontSize: 10,
                alignment: 'justify'
            },
            texto1: {
                fontSize: 10,
                alignment: 'justify'
            },
            textobold: {
                fontSize: 10,
                alignment: 'justify',
                bold: true
            },
            subtitulo: {
                fontSize: 10,
                alignment: 'center',
                background: 'black',
                color: 'white',
                bold: true
            },
            titulo: {
                fontSize: 11.5,
                alignment: 'center',
                bold: true
            }
        }, defaultStyle: {
            font: 'Arial'
        }

    };
    return docDefinition;



}




function imp_resolucion_caracoli_version_2(identificador, elaboro, aprobo) {

    $datos = {
        op: 'datos_resolucion',
        identificador: identificador
    };

    var resultado;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

            resultado = response[0];
        }
    });

    var ocupacion = (resultado["IDENTIFICA_ANTERIOR"] ? resultado["IDENTIFICA_ANTERIOR"] : '');

    var identificador = (resultado["IDENTIFICADOR"] ? resultado["IDENTIFICADOR"] : '');

    var concepto_de_ingreso = (resultado["Concepto de Ingreso"] ? resultado["Concepto de Ingreso"] : '');
    var fecha_concepto_ingreso = (resultado["fecha_concepto_ingreso"] ? resultado["fecha_concepto_ingreso"] : '');

    fecha_concepto_ingreso = moment(fecha_concepto_ingreso).format("D") + ' de ' + moment(fecha_concepto_ingreso).format("MMMM") + ' de ' + moment(fecha_concepto_ingreso).format("YYYY");

    var direccion = (resultado["Dirección"] ? resultado["Dirección"] : '');
    var manzana = (resultado["MZ"] ? resultado["MZ"] : '');
    var lote = (resultado["LT"] ? resultado["LT"] : '');

    var texto_direccion = direccion + ' MZ ' + manzana + ' LT ' + lote;

    var barrio = (resultado["Barrio"] ? resultado["Barrio"] : '');

    var localidad = (resultado["Localidad"] ? resultado["Localidad"] : '');

    var nombre1 = (resultado["Nombre 1"] ? resultado["Nombre 1"] : '');
    var nombre2 = (resultado["Nombre 2"] ? resultado["Nombre 2"] : '');

    var cedula1 = (resultado["Cedula 1"] ? resultado["Cedula 1"] : '');

    var folio_concepto_tecnico = (resultado["folio_concepto_tecnico"] ? resultado["folio_concepto_tecnico"] : '');
    var folio_est_documentos = (resultado["folio_est_documentos"] ? resultado["folio_est_documentos"] : '');

    var fecha_est = (resultado["fecha_est"] ? resultado["fecha_est"] : '');

    if (fecha_est !== '') {
        fecha_est = moment(fecha_est).format("D") + ' de ' + moment(fecha_est).format("MMMM") + ' de ' + moment(fecha_est).format("YYYY");
    }
    var texto_juridico = (resultado["texto_juridico"] ? resultado["texto_juridico"] : '');

    var cdp_res = (resultado["cdp_res"] ? resultado["cdp_res"] : '');



    var no_radicado = (resultado["no_radicado"] ? resultado["no_radicado"] : '');

    var fecha_cdp = (resultado["fecha_cdp"] ? resultado["fecha_cdp"] : '');
    var fecha_cdp_dia = moment(fecha_cdp).format("D");
    var fecha_cdp_mes = moment(fecha_cdp).format("MMMM");
    var fecha_cdp_ano = moment(fecha_cdp).format("YYYY");


    var fecha_radicado = (resultado["fecha_radicado"] ? resultado["fecha_radicado"] : '');
    var fecha_radicado_dia = moment(fecha_radicado).format("D");
    var fecha_radicado_mes = moment(fecha_radicado).format("MMMM");
    var fecha_radicado_ano = moment(fecha_radicado).format("YYYY");



    var no_cdp = (resultado["no_cdp"] ? resultado["no_cdp"] : '');

    var zona = $('#zona').val();
    var folio_est_documentos = $('#folio_est_documentos').val();

    var marca_agua = "Documento preliminar - NO OFICIAL";

    if (resultado["concepto"] ? resultado["concepto"] : false) {
        marca_agua = "";
    }

    var elaboro = (resultado["elaboro"] ? resultado["elaboro"] : '');
    var aprobo = (resultado["aprobo"] ? resultado["aprobo"] : '');
    var aprob_juridica = (resultado["aprob_juridica"] ? resultado["aprob_juridica"] : '');

    var valor_resol = (resultado["valor_resol"] ? resultado["valor_resol"] : '');

    var valor_letras = numeroALetras(Number(valor_resol), {
        plural: '',
        singular: '',
        centPlural: '',
        centSingular: ''
    });



    valor_resol = (new Intl.NumberFormat("es-ES").format(valor_resol));


    cedula1 = (new Intl.NumberFormat("es-ES").format(cedula1));



    var tipo_notificacion = $('#tipo_notificacion').val();
    var texto_tipo_notificacion = '';

    var fecha_acta = '';

    if (tipo_notificacion === 'Acta de Notificacion') {
        texto_tipo_notificacion = "el acta de notificación para las familias ocupantes, caso Caracoli, de fecha ";
        fecha_acta = (resultado["fecha_acta"] ? resultado["fecha_acta"] : '');

    } else if (tipo_notificacion === 'Afirmacion') {
        texto_tipo_notificacion = "la afirmación hecha ante la alcaldía local de Ciudad Bolívar Sector Caracoli, de fecha ";
        fecha_acta = (resultado["fecha_afirmacion"] ? resultado["fecha_afirmacion"] : '');

    }

    var fecha_acta_dia = moment(fecha_acta).format("D");
    var fecha_acta_mes = moment(fecha_acta).format("MMMM");
    var fecha_acta_ano = moment(fecha_acta).format("YYYY");





    pdfMake.fonts = {
        // Default font should still be available
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Bold.ttf',
            italics: 'Roboto-MediumItalic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
        },
        // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
        Arial: {
            normal: 'Arial.ttf',
            bold: 'Arial-Bold.ttf',
            italics: 'Arial-Italic.ttf',
            bolditalics: 'Arial-BoldItalic.ttf'
        }
    };


    var docDefinition = {
        pageMargins: [60, 150, 60, 90],
        pageSize: 'FOLIO',


        header:


            function (currentPage, pageCount) {
                return {

                    margin: [60, 25],
                    columns: [
                        {
                            table: {
                                widths: [60, '*', 60],
                                body: [
                                    [{
                                        rowSpan: 3, colSpan: 3,
                                        image: 'data:image/jpeg;base64,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',
                                        width: 65, alignment: 'center'
                                    }, '', ''],
                                    ['', '', ''],
                                    ['', '', ''],
                                    [{ text: 'RESOLUCIÓN No', colSpan: 3, alignment: 'center', bold: true, fonSize: 11, color: '#424949' }, '', ''],
                                    ['', '', { text: 'Hoja ' + currentPage.toString() + ' de ' + pageCount, fontSize: 8, alignment: 'center', color: '#626567' }],
                                    [{ text: '"Por medio de la cual se asigna y se ordena el pago de un instrumento financiero para la mitigación de las acciones derivadas de la recuperación del predio denominado CARACOLÍ, Polígono de monitoreo 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, en el marco del Decreto Distrital 227 del 12 de junio 2015”', colSpan: 3, alignment: 'center', color: '#626567', fontSize: 9 }, '', ''],
                                ]
                            }, layout: 'noBorders'
                        },
                    ],
                };
            },

        footer: {
            margin: [100, 0, 50, 20],
            columns: [
                {
                    image: 'data:image/png;base64,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',
                    width: 350,
                    height: 60
                }
            ],

        },
        watermark: { text: marca_agua, color: 'gray', opacity: 0.3, bold: true, italics: false },
        content: [

            { text: '\n EL (LA) DIRECTOR (A) TÉCNICO (A) DE REASENTAMIENTOS HUMANOS DE LA CAJA DE LA VIVIENDA POPULAR,', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\n   En uso de sus facultades legales y en especial las conferidas por los Acuerdos No. 20 de 1942 y 15 de 1959 del Concejo de Bogotá y el Decreto Ley 1421 de 1993; el Acuerdo No. 003 de 2008, Acuerdo No 004 de 2008 emanados del Consejo Directivo de la Caja de la Vivienda Popular y la Resolución No. 4400 de 26 de agosto de 2016, y demás normas concordantes y complementarias, y,', style: 'texto' },
            { text: '\n CONSIDERANDO:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nQue el inciso 2° del artículo 2° de la Constitución Política prescribe que: ', style: 'texto' },
                    { text: '“Las autoridades de la República están instituidas para proteger a todas las personas residentes en Colombia, en su vida, honra, bienes, creencias y demás derechos y libertades, y para asegurar el cumplimiento de los deberes sociales del Estado y de los particulares”', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el inciso 2° del artículo 113 de la Constitución Política, establece ', style: 'texto' },
                    { text: '“Los diferentes órganos del Estado tienen funciones separadas, pero colaboran armónicamente para la realización de sus fines”.', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el artículo 209 de la Constitución Política, estipula que ', style: 'texto' },
                    { text: '“La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad, mediante la descentralización, la delegación y la desconcentración de funciones. Las autoridades administrativas deben coordinar sus actuaciones para el adecuado cumplimiento de los fines del Estado”.', italics: true, style: 'texto' }
                ]
            },
            { text: '\nQue así mismo, el artículo 288 de la Constitución Política de Colombia prevé que uno de los aspectos que componen el núcleo esencial del principio de autonomía territorial, esto es la distribución de competencias entre el nivel nacional y las autoridades del nivel territorial, deberá hacerse con base en los principios de coordinación, concurrencia y subsidiariedad, de manera que la regulación y ejecución de las mismas sean llevadas a cabo de manera armónica. ', style: 'texto' },
            {
                text: [
                    { text: '\nQue, al respecto, la jurisprudencia ha reiterado que ', style: 'texto' },
                    { text: '“los principios de coordinación, concurrencia y subsidiariedad, previstos por el artículo 288 C.P., operan como fórmulas de articulación para el ejercicio de las competencias adscritas al poder centralizado y a las autoridades territoriales. Así, como lo ha señalado la Corte, el principio de coordinación parte de la existencia de competencias concurrentes entre distintas autoridades del Estado, lo cual impone que su ejercicio se haga de manera armónica, de modo que la acción de los distintos órganos resulte complementaria y conducente al logro de los fines de la acción estatal. (…) El principio de concurrencia se explica a partir de considerar que, en determinadas materias, la actividad del Estado debe cumplirse con la participación de los distintos niveles de la Administración. Ello implica, en primer lugar, un criterio de distribución de competencias conforme al cual las mismas deben atribuirse a distintos órganos, de manera que se garantice el objeto propio de la acción estatal, sin que sea posible la exclusión de entidades que, en razón de la materia estén llamadas a participar” 1 ', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue, por su parte, el artículo 6° de la Ley 489 de 1998, señala el principio de coordinación y colaboración entre las autoridades administrativas, con el fin de lograr los fines y cometidos estatales, así mismo, el artículo 95 de la citada norma indica que', style: 'texto' },
                    { text: '“Las entidades públicas podrán asociarse con el fin de cooperar en el cumplimiento de funciones administrativas o de prestar conjuntamente servicios que se hallen a su cargo, mediante la celebración de convenios interadministrativos (…)”', italics: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue el artículo 301 del Decreto Distrital 190 de 2004 compilatorio del Plan de Ordenamiento Territorial, al señalar los objetivos del Subprograma de reasentamiento por alto riesgo no mitigable y por obra pública, indica que ', style: 'texto' },
                    { text: '“El programa de Reasentamiento consiste en el conjunto de acciones y actividades necesarias para lograr el traslado de las familias de estratos 1 y 2 que se encuentran asentadas en zonas declaradas de alto riesgo no mitigable por deslizamiento o inundación, las zonas objeto de intervención por obra pública ', italics: true, style: 'texto' },
                    { text: 'o la que se requiera para cualquier intervención de reordenamiento territorial”. ', decoration: 'underline', bold: true, italics: true, style: 'texto' },
                    { text: ' (Negrilla y Subrayado Fuera de texto).\n\n\n', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\n1 ', style: 'texto' },
                    { text: 'Sentencia 2007-01598/0283-2012 de agosto 17 de 2017, Consejo de Estado, Sala de lo Contencioso Administrativo, Sección Segunda, Subsección B. M. P.: Dr. Cesar Palomino Cortés.', fontSize: 8, style: 'texto' }
                ]
            },





            {
                text: [
                    { text: '\nQue el literal a), numeral 2, del artículo 302 ibídem, estableció como acción estratégica del Subprograma de reasentamiento por Alto Riesgo: ', style: 'texto' },
                    { text: 'estudiar, proponer y evaluar la determinación de un valor único de reconocimiento (VUR) de los inmuebles ubicados en zonas de alto riesgo no mitigable, que permita a la Administración Distrital incluirlos en los programas de vivienda. ', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el Consejo Directivo de la Caja de la Vivienda Popular mediante el Acuerdo 04 de 2008 modificó la estructura organizacional de la Entidad, creando la Dirección de Reasentamientos y asignó, entre otras funciones, la de ', style: 'texto' },
                    { text: '“Gestionar los recursos financieros de los programas y proyectos que se adelantan en la dependencia referidos a la oferta y demanda de vivienda”.', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue en cumplimiento de la aplicación de los principios de la función administrativa, previstos en el artículo 3 de la Ley 1437 de 2011, ', style: 'texto' },
                    { text: '“ (…) Las actuaciones administrativas se desarrollarán, especialmente, con arreglo a los principios del debido proceso, igualdad, imparcialidad, buena fe, moralidad, participación, responsabilidad, transparencia, publicidad, coordinación, eficacia, economía y celeridad (…)”, especialmente lo establecido en el numeral 11 de dicho artículo: “En virtud del principio de eficacia, las autoridades buscarán que los procedimientos logren su finalidad y, para el efecto, removerán de oficio los obstáculos puramente formales, evitarán decisiones inhibitorias, dilaciones o retardos y sanearán, de acuerdo con este Código las irregularidades procedimentales que se presenten, en procura de la efectividad del derecho material objeto de la actuación administrativa”.', italics: true, style: 'texto' }
                ]
            },
            { text: '\nQue a la Caja de la Vivienda Popular le corresponde entre otras funciones, el reasentar a las familias que se encuentren en alto riesgo no mitigable en concordancia con la política que el Distrito estructura a través de la Secretaria de Hábitat, priorizando los beneficiarios recomendados por el Instituto Distrital de Gestión del Riesgo y Cambio Climático - IDIGER - de acuerdo a lo preceptuado en las Leyes 9ª de 1989 y 388 de 1997 y el Decreto Distrital 255 del 12 junio de 2013, entre otros.', style: 'texto' },

            { text: '\nQue bajo el anterior panorama, se observa que las anteriores disposiciones normativas vigentes en el Distrito Capital, no prevén el reasentamiento de familias distintas a aquellas que se encuentran en zonas de alto riesgo no mitigable, en particular, en lo que se refiere a la ocupación ilegal de bienes fiscales, y que con el inicio de acciones tendientes a su recuperación se pueden ver eventualmente  vulnerados  derechos fundamentales como la vida y la vivienda digna, razón por la cual, el Distrito Capital implementó un programa de mitigación del impacto social derivado de este tipo de acciones, por lo cual se adoptó el Decreto Distrital 227 del 12 de junio de 2015, derogando el Decreto 466 del 20 noviembre de 2006 y determinó los organismos encargados de gestionar la asignación de recursos económicos, definir la autoridad competente para el reasentamiento y los casos priorizados para ser atendidos, en los siguientes términos:', style: 'texto' },


            {
                text: [
                    { text: '\n“(…) Que conforme a las atribuciones que le otorga el Decreto 1421 de 1993 al Alcalde Mayor en los artículos 38,39,40, y 53, el artículo 9 de la Ley 489 de 1998, en concordancia con los artículos 110 del Decreto Nacional 111 de 1996 y 87 del Decreto Distrital 714 de 1996,', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'se asigna a la Caja de la Vivienda Popular para que adelante las acciones que considere pertinentes, para realizar el acompañamiento integral a la población que pueda ser objeto de acciones de restitución de inmuebles de carácter público.', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue para ese mismo efecto, se hace necesario establecer una política pública distrital de acompañamiento para mitigar el Impacto Social derivado de las Acciones Judiciales o administrativas de Restitución de Bienes Inmuebles de Carácter Público, que dejan en situación de vulnerabilidad a los grupos familiares directamente afectados con la medida, que implica acompañamiento mediante acciones sociales y habitacionales, con el fin de insertar a las familias al tejido social de la ciudad de manera sostenible y contribuir al mejoramiento de su calidad de vida. (…)” ', italics: true, style: 'texto' },
                    { text: '(Subrayado fuera de texto).', style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            { text: '\nQue el artículo 6° del Decreto Distrital 227 del 12 de junio de 2015, estableció los recursos presupuestales para la ejecución del programa en el siguiente sentido:', style: 'texto' },

            {
                text: [
                    { text: '\n“Los recursos económicos del programa, deberán ser gestionados por los organismos y entidades distritales responsables de la ejecución de las actividades definidas en el plan de acción que se adopte en cada caso. Para esto, las entidades adoptarán las medidas necesarias para obtener los recursos ante la Secretaria Distrital de Hacienda ', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'y para el caso del proceso de reasentamiento se incluirán los gastos asociados a la capacidad de gestión administrativa para la ejecución del Decreto por parte de la Caja de la Vivienda Popular.', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nParágrafo.', italics: true, bold: true, style: 'texto' },
                    { text: 'La cuantificación del instrumento financiero que permita acceso a la vivienda para los eventos de reasentamiento se determinará en el Marco Técnico”', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue dando aplicación a la norma en cita, y de acuerdo a lo descrito en el ', style: 'texto' },
                    { text: '“concepto diagnóstico de condiciones socio ambientales polígono Caracolí, localidad Ciudad Bolívar”,', italics: true, style: 'texto' },
                    { text: 'elaborado por la Dirección de Epidemiología, Análisis y Gestión de Política de Salud Colectiva de la Secretaría Distrital de Salud, con radicado 2018EE69589, el cual concluyó', style: 'texto' },
                    { text: '“(...) En el polígono hay una conjunción de necesidades básicas insatisfechas principalmente al acceso a servicios públicos legales y a medidas sanitarias lo Cual representa una alta predisposición a la ocurrencia de eventos patológicas que pueden derivar en mortalidad (...)” ', italics: true, style: 'texto' },
                    { text: 'e igualmente, ', style: 'texto' },
                    { text: '“(…) Por las condiciones de saneamiento básico del entorno y de las viviendas, se puede inferir que el polígono intervenido se encuentra en condiciones de riesgo, situación que puede llegar a afectar Ia salud humana y colectiva de los habitantes del sector”, ', italics: true, style: 'texto' },
                    { text: 'la Alcaldía Local de Ciudad Bolívar, postuló ante la subcomisión intersectorial para la Mitigación del Impacto Social derivado de acciones de recuperación de Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, el caso de la ocupación denominada “Caracolí”, ubicada en el Polígono de monitoreo número 123, UPZ 69-Ismael Perdomo de la localidad 19 de Ciudad Bolívar, con el fin de decidir su ingreso al ', style: 'texto' },
                    { text: '“Programa de Acompañamiento Integral para la Mitigación del Impacto Social derivado de las acciones de recuperación de bienes fiscales, uso público, espacio público, u objeto de recuperación ecológica o preservación ambiental”. ', italics: true, style: 'texto' }

                ]
            },
            { text: '\nQue, en este sentido, el 12 de julio de 2018, se sometió para votación ante la citada subcomisión, el caso descrito, para ser atendido dentro del programa Distrital para la Mitigación del Impacto Social Derivado de Acciones de Recuperación de: Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, en virtud del Decreto Distrital 227 de 2015 y su Marco Técnico; siendo aprobado por unanimidad. ', style: 'texto' },

            {
                text: [
                    { text: '\nQue, en consecuencia, la Secretaría Distrital de Gobierno expidió la Resolución 0740 del 7 de septiembre de 2018 ', style: 'texto' },
                    { text: '“Por la cual se aprueba el caso ocupación Caracolí, Polígono de monitoreo número 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, para ser atendido en el marco del Decreto Distrital 227 de 2015”, ', italics: true, style: 'texto' },
                    { text: '”, a partir de la cual, se incluyó en el citado programa la ocupación ilegal denominada “Caracolí”.', style: 'texto' }
                ]
            },

            { text: '\nQue, frente a las funciones de la Caja de la Vivienda Popular, de conformidad con lo expuesto en el artículo 4º y 5º de la Resolución 0740 del 7 de septiembre de 2018, tiene, entre otras, las siguientes:', style: 'texto' },

            {
                text: [
                    { text: '\n“ARTÍCULO 4°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular adelantará el estudio de documentación aportada y determinará el cumplimiento de los requisitos para la continuidad o no, en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, y establecerá las que serán excluidas en virtud de lo señalado en el artículo 3 del Decreto Distrital 227 de 2015.', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\n“ARTÍCULO 5°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular garantizará la relocalización transitoria de las personas identificadas por la Alcaldía Local de Ciudad Bolívar, de acuerdo con lo establecido en la Resolución 0740 de 2015, expedida por la Caja de la Vivienda Popular, adicionada por el artículo 1 de la Resolución 2947 de 2015, hasta tanto se establezca si cumplen o no con los requisitos señalados en el Decreto Distrital 227 de 2015 para continuar con su proceso de reasentamiento.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue, a su vez, la Secretaría Distrital de Gobierno de la Alcaldía Mayor de Bogotá expidió la Resolución 0269 del 29 de abril de 2019 ', style: 'texto' },
                    { text: '“Por la cual se aclara y se adiciona el artículo 4° de la Resolución 740 de 2018 “por la cual se aprueba el caso ocupación Caracolí, Polígono de monitoreo número 123, Localidad de Ciudad Bolívar; UPZ 69-Ismael Perdomo, para ser atendido en el marco del Decreto Distrital 227 de 2015”, ', italics: true, style: 'texto' },
                    { text: 'la cual prescribe, entre otros, que:', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\n“(…) ARTICULO 1°. Aclarar y adicionar el artículo 4° de la Resolución 740 de 2018, el cual quedará así: ', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\n“Artículo 4° La Caja de la Vivienda Popular adelantará el estudio de la documentación aportada y determinará el cumplimiento de los requisitos para la continuidad o no, en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, y establecerá las que serán excluidas en virtud de lo señalado en el artículo 3 del Decreto Distrital 227 de 2015.', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nParágrafo: El estudio que realiza la Caja de la Vivienda Popular de la documentación aportada, que determinará el cumplimiento de los requisitos para la continuidad o no en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, se deberá aplicar la exclusión señalada en el numeral 1° del artículo 3° del Decreto Distrital 227 de 2015, de acuerdo con el criterio 2 del Marco normativo del referido Decreto Distrital”.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            {
                text: [
                    { text: '\nQue de conformidad con la orden impartida mediante el parágrafo 1° del artículo 3° de la Resolución previamente citada y según comunicación de la Alcaldía Local de Ciudad Bolívar con radicado ', style: 'texto' },
                    { text: 'No. ', bold: true, style: 'texto' },
                    { text: no_radicado, bold: true, style: 'texto' },
                    { text: ' del ', bold: true, style: 'texto' },
                    { text: fecha_radicado_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_ano, bold: true, style: 'texto' },
                    { text: ' se determinó la inclusión del (de la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1, bold: true, style: 'texto' },
                    { text: ' y su núcleo familiar quien habitaba en la ', style: 'texto' },
                    { text: 'zona No. ' + zona + ', ocupación No. ' + ocupacion, bold: true, style: 'texto' },
                    { text: ' del citado predio, tal como se evidencia en ' + texto_tipo_notificacion, style: 'texto' },
                    { text: fecha_acta_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_acta_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_acta_ano + ' .', bold: true, style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\nQue de acuerdo a lo anterior, mediante estudio jurídico documental de fecha ', style: 'texto' },
                    { text: fecha_est + ', ', bold: true, style: 'texto' },
                    { text: 'obrante a folio ', style: 'texto' },
                    { text: '(' + folio_est_documentos + ') ', bold: true, style: 'texto' },
                    { text: 'elaborado por la Dirección Técnica de Reasentamientos de la Caja de la Vivienda Popular, se determinó que el(la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'cumple con los requisitos para ser beneficiario del Programa de Reasentamiento, por lo que es viable asignar los recursos financieros para el acceso a una solución habitacional, de conformidad con lo establecido en el Decreto Distrital 227 de 2015 y la Resolución 0740 del 7 de septiembre de 2018.', style: 'texto' }

                ]
            },

            {
                text: [
                    { text: '\nQue es preciso señalar, que el señor (a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ',', bold: true, style: 'texto' },
                    { text: ' deberá realizar la entrega real y material de la ocupación ', style: 'texto' },
                    { text: ocupacion + ' ubicada en la zona ' + zona, bold: true, style: 'texto' },
                    { text: ' del sector Caracolí, Polígono de monitoreo 123, de la UPZ 69 Ismael Perdomo, mediante acta en la cual habitaba con su grupo familiar, como requisito previo al desembolso del instrumento financiero.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue para atender las obligaciones en relación con la aplicación del Decreto Distrital 227 de 2015, la Caja de la Vivienda Popular cuenta con el Certificado de Disponibilidad Presupuestal ', style: 'texto' },
                    { text: 'No. ', bold: true, style: 'texto' },
                    { text: no_cdp, bold: true, style: 'texto' },
                    { text: ' del ', bold: true, style: 'texto' },
                    { text: fecha_cdp_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_cdp_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_cdp_ano, bold: true, style: 'texto' },
                    { text: ' emitido por el responsable del presupuesto de la Entidad.', style: 'texto' }
                ]
            },


            { text: '\nEn mérito de lo expuesto, ', style: 'texto' },

            { text: '\nRESUELVE:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nARTÍCULO PRIMERO:  ', bold: true, style: 'texto' },
                    { text: 'Asignar el Instrumento Financiero para la mitigación de las acciones derivadas de la recuperación del predio denominado CARACOLI, en la localidad de Ciudad Bolívar de que trata el Decreto Distrital 227 de 2015, a favor del (la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'equivalente hasta setenta (70) salarios mínimos legales mensuales vigentes al momento de su reconocimiento, suma que asciende en esta vigencia a ', style: 'texto' },
                    { text: 'CINCUENTA Y SIETE MILLONES NOVECIENTOS SESENTA Y OCHO MIL CIENTO VEINTE PESOS ($57.968.120) MONEDA LEGAL,', bold: true, style: 'texto' },
                    { text: 'destinado a facilitar el acceso a una solución de habitacional de reposición en el territorio nacional.', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\nARTÍCULO SEGUNDO:  ', bold: true, style: 'texto' },
                    { text: 'Ordenar a la Subdirección Financiera realizar el registro presupuestal del presente acto administrativo con observancia del procedimiento establecido según fuente de financiación.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO TERCERO:  ', bold: true, style: 'texto' },
                    { text: 'Notificar el   contenido de la presente Resolución a él (la) beneficiario (a) del valor del instrumento financiero, de conformidad con el   artículo 66 y siguientes de la Ley 1437 de 2011 ', style: 'texto' },
                    { text: '“Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo”.  ', italics: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO CUARTO: ENTREGA DE LA OCUPACIÓN, ', bold: true, style: 'texto' },
                    { text: 'una vez notificado el presente acto administrativo, el hogar tendrá como obligación la entrega real y material de la ocupación en un término no superior a quince (15) días calendario.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nPARÁGRAFO.  ', bold: true, style: 'texto' },
                    { text: 'En caso de no adelantarse la citada entrega, el hogar estará sujeto a las actuaciones judiciales que, en el marco de la recuperación de los predios fiscales, adelante la entidad competente.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO QUINTO: ', bold: true, style: 'texto' },
                    { text: 'Ordenar a la Subdirección Financiera girar los recursos asignados, a la cuenta de ahorro programado de la cual es titular el (la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: ' ó girar sin situación de fondos y constituir el depósito a favor de terceros, con el fin de realizar los giros de conformidad con lo pactado en la promesa de compraventa, opción de compra y/o contrato de vinculación como beneficiario de área en el Fideicomiso, previa verificación de la entrega real y material de la ocupación a la Caja de la Vivienda Popular. ', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nPARÁGRAFO.  ', bold: true, style: 'texto' },
                    { text: 'Para el desembolso de los recursos que se encuentran en depósito a favor de terceros o en la cuenta de ahorro programado, una vez los beneficiarios hayan seleccionado vivienda de reposición y, la Entidad la haya viabilizado, la Directora Técnica de Reasentamientos previa autorización de los beneficiarios, solicitará a la Subdirección Financiera y/o a la entidad financiera el giro ó la movilización de los recursos, de conformidad con lo estipulado en la forma de pago de la promesa de compraventa, opción de compra de la vivienda de reposición y/o contrato de vinculación como beneficiario de área en el fideicomiso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO SEXTO: ', bold: true, style: 'texto' },
                    { text: 'Contra el presente acto administrativo procede el recurso de reposición, de conformidad con lo dispuesto en el artículo 76 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo, dentro de los diez (10) días siguientes a la notificación personal, o a la notificación por aviso, según sea el caso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nARTÍCULO SÉPTIMO: ', bold: true, style: 'texto' },
                    { text: 'El presente acto administrativo rige a partir de la fecha de ejecutoria.', style: 'texto' }
                ]
            },


            { text: '\nCOMUNÍQUESE, NOTIFÍQUESE Y CÚMPLASE', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\nDada en Bogotá D.C.,  el día ', style: 'texto' },
            { text: '\n\n ISIS PAOLA DÍAZ MUÑIZ', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: 'Directora Técnica de Reasentamientos \n\n\n\n', style: 'texto', fontSize: 12, alignment: 'center' },
            {
                table: {
                    widths: [50, '*'],
                    body: [
                        [{ text: 'Proyectó:', fontSize: 7 }, { text: elaboro + ' – Dirección de Reasentamientos.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: aprobo + ' – Dirección de Reasentamientos.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Yamile Patricia Castiblanco Venegas - Profesional – Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Nelson Villarraga Quijano - Contrato No. 146 de 2019 - Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: aprob_juridica + ' – Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Martha Patricia Ortiz - Contrato No. 288 de 2019 - Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Aprobó C.L.:', fontSize: 7 }, { text: 'Oscar Eduardo Pinilla Pinilla - Director Jurídico', fontSize: 7 }],
                        [{ text: '\nArchivado en:', fontSize: 7 }, { text: '\nSubserie Resolución Administrativa - Dirección General.', fontSize: 7 }]
                    ]
                },
                layout: 'noBorders'
            },
            { text: 'ID. ' + identificador, style: 'texto', fontSize: 7, alignment: 'right' }



        ],

        styles: {
            sub1: {
                bold: true
            },
            superMargin: {
                margin: [20, 0, 0, 0],
                fontSize: 11,
                alignment: 'justify'
            },
            texto: {
                fontSize: 10,
                alignment: 'justify'
            },
            texto1: {
                fontSize: 10,
                alignment: 'justify'
            },
            textobold: {
                fontSize: 10,
                alignment: 'justify',
                bold: true
            },
            subtitulo: {
                fontSize: 10,
                alignment: 'center',
                background: 'black',
                color: 'white',
                bold: true
            },
            titulo: {
                fontSize: 11.5,
                alignment: 'center',
                bold: true
            }
        }, defaultStyle: {
            font: 'Arial'
        }

    };
    return docDefinition;



}












function imp_resolucion_caracoli_version_3(identificador, elaboro, aprobo) {

    $datos = {
        op: 'datos_resolucion',
        identificador: identificador
    };

    var resultado;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

            resultado = response[0];
        }
    });

    var ocupacion = (resultado["IDENTIFICA_ANTERIOR"] ? resultado["IDENTIFICA_ANTERIOR"] : '');

    var identificador = (resultado["IDENTIFICADOR"] ? resultado["IDENTIFICADOR"] : '');

    var concepto_de_ingreso = (resultado["Concepto de Ingreso"] ? resultado["Concepto de Ingreso"] : '');
    var fecha_concepto_ingreso = (resultado["fecha_concepto_ingreso"] ? resultado["fecha_concepto_ingreso"] : '');

    fecha_concepto_ingreso = moment(fecha_concepto_ingreso).format("D") + ' de ' + moment(fecha_concepto_ingreso).format("MMMM") + ' de ' + moment(fecha_concepto_ingreso).format("YYYY");

    var direccion = (resultado["Dirección"] ? resultado["Dirección"] : '');
    var manzana = (resultado["MZ"] ? resultado["MZ"] : '');
    var lote = (resultado["LT"] ? resultado["LT"] : '');

    var texto_direccion = direccion + ' MZ ' + manzana + ' LT ' + lote;

    var barrio = (resultado["Barrio"] ? resultado["Barrio"] : '');

    var localidad = (resultado["Localidad"] ? resultado["Localidad"] : '');

    var nombre1 = (resultado["Nombre 1"] ? resultado["Nombre 1"] : '');
    var nombre2 = (resultado["Nombre 2"] ? resultado["Nombre 2"] : '');

    var cedula1 = (resultado["Cedula 1"] ? resultado["Cedula 1"] : '');

    var folio_concepto_tecnico = (resultado["folio_concepto_tecnico"] ? resultado["folio_concepto_tecnico"] : '');
    var folio_est_documentos = (resultado["folio_est_documentos"] ? resultado["folio_est_documentos"] : '');

    var fecha_est = (resultado["fecha_est"] ? resultado["fecha_est"] : '');

    if (fecha_est !== '') {
        fecha_est = moment(fecha_est).format("D") + ' de ' + moment(fecha_est).format("MMMM") + ' de ' + moment(fecha_est).format("YYYY");
    }
    var texto_juridico = (resultado["texto_juridico"] ? resultado["texto_juridico"] : '');

    var cdp_res = (resultado["cdp_res"] ? resultado["cdp_res"] : '');



    var no_radicado = (resultado["no_radicado"] ? resultado["no_radicado"] : '');

    var fecha_cdp = (resultado["fecha_cdp"] ? resultado["fecha_cdp"] : '');
    var fecha_cdp_dia = moment(fecha_cdp).format("D");
    var fecha_cdp_mes = moment(fecha_cdp).format("MMMM");
    var fecha_cdp_ano = moment(fecha_cdp).format("YYYY");


    var fecha_radicado = (resultado["fecha_radicado"] ? resultado["fecha_radicado"] : '');
    var fecha_radicado_dia = moment(fecha_radicado).format("D");
    var fecha_radicado_mes = moment(fecha_radicado).format("MMMM");
    var fecha_radicado_ano = moment(fecha_radicado).format("YYYY");



    var fecha_seleccion = (resultado["fecha_seleccion"] ? resultado["fecha_seleccion"] : '');
    var fecha_seleccion_dia = moment(fecha_seleccion).format("D");
    var fecha_seleccion_mes = moment(fecha_seleccion).format("MMMM");
    var fecha_seleccion_ano = moment(fecha_seleccion).format("YYYY");

    var nombre_beneficiario_resolucion = $('#beneficiario_resolucion_especie').val();


    var no_cdp = (resultado["no_cdp"] ? resultado["no_cdp"] : '');

    var zona = $('#zona').val();
    var folio_est_documentos = $('#folio_est_documentos').val();

    var marca_agua = "Documento preliminar - NO OFICIAL";

    if (resultado["concepto"] ? resultado["concepto"] : false) {
        marca_agua = "";
    }

    var elaboro = (resultado["elaboro"] ? resultado["elaboro"] : '');
    var aprobo = (resultado["aprobo"] ? resultado["aprobo"] : '');
    var aprob_juridica = (resultado["aprob_juridica"] ? resultado["aprob_juridica"] : '');

    var valor_resol = (resultado["valor_resol"] ? resultado["valor_resol"] : '');

    var valor_letras = numeroALetras(Number(valor_resol), {
        plural: '',
        singular: '',
        centPlural: '',
        centSingular: ''
    });



    valor_resol = (new Intl.NumberFormat("es-ES").format(valor_resol));


    cedula1 = (new Intl.NumberFormat("es-ES").format(cedula1));







    var tipo_notificacion = $('#tipo_notificacion').val();
    var texto_tipo_notificacion = '';

    var fecha_acta = '';

    if (tipo_notificacion === 'Acta de Notificacion') {
        texto_tipo_notificacion = "el acta de notificación para las familias ocupantes, caso Caracoli, de fecha ";
        fecha_acta = (resultado["fecha_acta"] ? resultado["fecha_acta"] : '');

    } else if (tipo_notificacion === 'Afirmacion') {
        texto_tipo_notificacion = "la afirmación hecha ante la alcaldía local de Ciudad Bolívar Sector Caracoli, de fecha ";
        fecha_acta = (resultado["fecha_afirmacion"] ? resultado["fecha_afirmacion"] : '');

    }

    var fecha_acta_dia = moment(fecha_acta).format("D");
    var fecha_acta_mes = moment(fecha_acta).format("MMMM");
    var fecha_acta_ano = moment(fecha_acta).format("YYYY");



    pdfMake.fonts = {
        // Default font should still be available
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Bold.ttf',
            italics: 'Roboto-MediumItalic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
        },
        // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
        Arial: {
            normal: 'Arial.ttf',
            bold: 'Arial-Bold.ttf',
            italics: 'Arial-Italic.ttf',
            bolditalics: 'Arial-BoldItalic.ttf'
        }
    };


    var docDefinition = {
        pageMargins: [60, 150, 60, 90],
        pageSize: 'FOLIO',


        header:


            function (currentPage, pageCount) {
                return {

                    margin: [60, 25],
                    columns: [
                        {
                            table: {
                                widths: [60, '*', 60],
                                body: [
                                    [{
                                        rowSpan: 3, colSpan: 3,
                                        image: 'data:image/jpeg;base64,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',
                                        width: 65, alignment: 'center'
                                    }, '', ''],
                                    ['', '', ''],
                                    ['', '', ''],
                                    [{ text: 'RESOLUCIÓN No', colSpan: 3, alignment: 'center', bold: true, fonSize: 11, color: '#424949' }, '', ''],
                                    ['', '', { text: 'Hoja ' + currentPage.toString() + ' de ' + pageCount, fontSize: 8, alignment: 'center', color: '#626567' }],
                                    [{ text: '"Por medio de la cual se asigna un instrumento financiero en especie para la mitigación de las acciones derivadas de la recuperación del predio denominado CARACOLÍ, Polígono de monitoreo 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, en el marco del Decreto Distrital 227 del 12 de junio 2015”', colSpan: 3, alignment: 'center', color: '#626567', fontSize: 9 }, '', ''],
                                ]
                            }, layout: 'noBorders'
                        },
                    ],
                };
            },

        footer: {
            margin: [100, 0, 50, 20],
            columns: [
                {
                    image: 'data:image/png;base64,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',
                    width: 350,
                    height: 60
                }
            ],

        },
        watermark: { text: marca_agua, color: 'gray', opacity: 0.3, bold: true, italics: false },
        content: [

            { text: '\n EL (LA) DIRECTOR (A) TÉCNICO (A) DE REASENTAMIENTOS HUMANOS DE LA CAJA DE LA VIVIENDA POPULAR,', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\n   En uso de sus facultades legales y en especial las conferidas por los Acuerdos No. 20 de 1942 y 15 de 1959 del Concejo de Bogotá y el Decreto Ley 1421 de 1993; el Acuerdo No. 003 de 2008, Acuerdo No 004 de 2008 emanados del Consejo Directivo de la Caja de la Vivienda Popular y la Resolución No. 4400 de 26 de agosto de 2016, y demás normas concordantes y complementarias, y,', style: 'texto' },
            { text: '\n CONSIDERANDO:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nQue el inciso 2° del artículo 2° de la Constitución Política prescribe que: ', style: 'texto' },
                    { text: '“Las autoridades de la República están instituidas para proteger a todas las personas residentes en Colombia, en su vida, honra, bienes, creencias y demás derechos y libertades, y para asegurar el cumplimiento de los deberes sociales del Estado y de los particulares”', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el inciso 2° del artículo 113 de la Constitución Política, establece ', style: 'texto' },
                    { text: '“Los diferentes órganos del Estado tienen funciones separadas, pero colaboran armónicamente para la realización de sus fines”.', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el artículo 209 de la Constitución Política, estipula que ', style: 'texto' },
                    { text: '“La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad, mediante la descentralización, la delegación y la desconcentración de funciones. Las autoridades administrativas deben coordinar sus actuaciones para el adecuado cumplimiento de los fines del Estado”.', italics: true, style: 'texto' }
                ]
            },
            { text: '\nQue así mismo, el artículo 288 de la Constitución Política de Colombia prevé que uno de los aspectos que componen el núcleo esencial del principio de autonomía territorial, esto es la distribución de competencias entre el nivel nacional y las autoridades del nivel territorial, deberá hacerse con base en los principios de coordinación, concurrencia y subsidiariedad, de manera que la regulación y ejecución de las mismas sean llevadas a cabo de manera armónica. ', style: 'texto' },
            {
                text: [
                    { text: '\nQue al respecto, la jurisprudencia ha reiterado que ', style: 'texto' },
                    { text: '“los principios de coordinación, concurrencia y subsidiariedad, previstos por el artículo 288 C.P., operan como fórmulas de articulación para el ejercicio de las competencias adscritas al poder centralizado y a las autoridades territoriales. Así, como lo ha señalado la Corte, el principio de coordinación parte de la existencia de competencias concurrentes entre distintas autoridades del Estado, lo cual impone que su ejercicio se haga de manera armónica, de modo que la acción de los distintos órganos resulte complementaria y conducente al logro de los fines de la acción estatal. (…) El principio de concurrencia se explica a partir de considerar que, en determinadas materias, la actividad del Estado debe cumplirse con la participación de los distintos niveles de la Administración. Ello implica, en primer lugar, un criterio de distribución de competencias conforme al cual las mismas deben atribuirse a distintos órganos, de manera que se garantice el objeto propio de la acción estatal, sin que sea posible la exclusión de entidades que, en razón de la materia estén llamadas a participar” 1 ', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue por su parte, el artículo 6° de la Ley 489 de 1998, señala el principio de coordinación y colaboración entre las autoridades administrativas, con el fin de lograr los fines y cometidos estatales, así mismo, el artículo 95 de la citada norma indica que', style: 'texto' },
                    { text: '“Las entidades públicas podrán asociarse con el fin de cooperar en el cumplimiento de funciones administrativas o de prestar conjuntamente servicios que se hallen a su cargo, mediante la celebración de convenios interadministrativos (…)”', italics: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue el artículo 301 del Decreto Distrital 190 de 2004 compilatorio del Plan de Ordenamiento Territorial, al señalar los objetivos del Subprograma de reasentamiento por alto riesgo no mitigable y por obra pública, indica que ', style: 'texto' },
                    { text: '“El programa de Reasentamiento consiste en el conjunto de acciones y actividades necesarias para lograr el traslado de las familias de estratos 1 y 2 que se encuentran asentadas en zonas declaradas de alto riesgo no mitigable por deslizamiento o inundación, las zonas objeto de intervención por obra pública ', italics: true, style: 'texto' },
                    { text: 'o la que se requiera para cualquier intervención de reordenamiento territorial”. ', decoration: 'underline', bold: true, italics: true, style: 'texto' },
                    { text: ' (Negrilla y Subrayado Fuera de texto).\n\n\n', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\n1 ', style: 'texto' },
                    { text: 'Sentencia 2007-01598/0283-2012 de agosto 17 de 2017, Consejo de Estado, Sala de lo Contencioso Administrativo, Sección Segunda, Subsección B. M. P.: Dr. Cesar Palomino Cortés.', fontSize: 8, style: 'texto' }
                ]
            },





            {
                text: [
                    { text: '\nQue el literal a), numeral 2, del artículo 302 ibídem, estableció como acción estratégica del Subprograma de reasentamiento por Alto Riesgo: ', style: 'texto' },
                    { text: 'estudiar, proponer y evaluar la determinación de un valor único de reconocimiento (VUR) de los inmuebles ubicados en zonas de alto riesgo no mitigable, que permita a la Administración Distrital incluirlos en los programas de vivienda. ', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el Consejo Directivo de la Caja de la Vivienda Popular mediante el Acuerdo 04 de 2008 modificó la estructura organizacional de la Entidad, creando la Dirección de Reasentamientos y asignó, entre otras funciones, la de ', style: 'texto' },
                    { text: '“Gestionar los recursos financieros de los programas y proyectos que se adelantan en la dependencia referidos a la oferta y demanda de vivienda”.', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue en cumplimiento de la aplicación de los principios de la función administrativa, previstos en el artículo 3 de la Ley 1437 de 2011, ', style: 'texto' },
                    { text: '“ (…) Las actuaciones administrativas se desarrollarán, especialmente, con arreglo a los principios del debido proceso, igualdad, imparcialidad, buena fe, moralidad, participación, responsabilidad, transparencia, publicidad, coordinación, eficacia, economía y celeridad (…)”, especialmente lo establecido en el numeral 11 de dicho artículo: “En virtud del principio de eficacia, las autoridades buscarán que los procedimientos logren su finalidad y, para el efecto, removerán de oficio los obstáculos puramente formales, evitarán decisiones inhibitorias, dilaciones o retardos y sanearán, de acuerdo con este Código las irregularidades procedimentales que se presenten, en procura de la efectividad del derecho material objeto de la actuación administrativa”.', italics: true, style: 'texto' }
                ]
            },
            { text: '\nQue a la Caja de la Vivienda Popular le corresponde entre otras funciones, el reasentar a las familias que se encuentren en alto riesgo no mitigable en concordancia con la política que el Distrito estructura a través de la Secretaria de Hábitat, priorizando los beneficiarios recomendados por el Instituto Distrital de Gestión del Riesgo y Cambio Climático - IDIGER - de acuerdo a lo preceptuado en las Leyes 9ª de 1989 y 388 de 1997 y el Decreto Distrital 255 del 12 junio de 2013, entre otros.', style: 'texto' },

            { text: '\nQue bajo el anterior panorama, se observa que las anteriores disposiciones normativas vigentes en el Distrito Capital, no prevén el reasentamiento de familias distintas a aquellas que se encuentran en zonas de alto riesgo no mitigable, en particular, en lo que se refiere a la ocupación ilegal de bienes fiscales, y que con el inicio de acciones tendientes a su recuperación se pueden ver eventualmente  vulnerados  derechos fundamentales como la vida y la vivienda digna, razón por la cual, el Distrito Capital implementó un programa de mitigación del impacto social derivado de este tipo de acciones, por lo cual se adoptó el Decreto Distrital 227 del 12 de junio de 2015, derogando el Decreto 466 del 20 noviembre de 2006 y determinó los organismos encargados de gestionar la asignación de recursos económicos, definir la autoridad competente para el reasentamiento y los casos priorizados para ser atendidos, en los siguientes términos:', style: 'texto' },


            {
                text: [
                    { text: '\n“(…) Que conforme a las atribuciones que le otorga el Decreto 1421 de 1993 al Alcalde Mayor en los artículos 38,39,40, y 53, el artículo 9 de la Ley 489 de 1998, en concordancia con los artículos 110 del Decreto Nacional 111 de 1996 y 87 del Decreto Distrital 714 de 1996,', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'se asigna a la Caja de la Vivienda Popular para que adelante las acciones que considere pertinentes, para realizar el acompañamiento integral a la población que pueda ser objeto de acciones de restitución de inmuebles de carácter público.', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue para ese mismo efecto, se hace necesario establecer una política pública distrital de acompañamiento para mitigar el Impacto Social derivado de las Acciones Judiciales o administrativas de Restitución de Bienes Inmuebles de Carácter Público, que dejan en situación de vulnerabilidad a los grupos familiares directamente afectados con la medida, que implica acompañamiento mediante acciones sociales y habitacionales, con el fin de insertar a las familias al tejido social de la ciudad de manera sostenible y contribuir al mejoramiento de su calidad de vida. (…)” ', italics: true, style: 'texto' },
                    { text: '(Subrayado fuera de texto).', style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            { text: '\nQue el artículo 6° del Decreto Distrital 227 del 12 de junio de 2015, estableció los recursos presupuestales para la ejecución del programa en el siguiente sentido:', style: 'texto' },

            {
                text: [
                    { text: '\n“Los recursos económicos del programa, deberán ser gestionados por los organismos y entidades distritales responsables de la ejecución de las actividades definidas en el plan de acción que se adopte en cada caso. Para esto, las entidades adoptarán las medidas necesarias para obtener los recursos ante la Secretaria Distrital de Hacienda ', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'y para el caso del proceso de reasentamiento se incluirán los gastos asociados a la capacidad de gestión administrativa para la ejecución del Decreto por parte de la Caja de la Vivienda Popular.', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nParágrafo.', italics: true, bold: true, style: 'texto' },
                    { text: 'La cuantificación del instrumento financiero que permita acceso a la vivienda para los eventos de reasentamiento se determinará en el Marco Técnico”', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue dando aplicación a la norma en cita, y de acuerdo a lo descrito en el ', style: 'texto' },
                    { text: '“concepto diagnóstico de condiciones socio ambientales polígono Caracolí, localidad Ciudad Bolívar”,', italics: true, style: 'texto' },
                    { text: 'elaborado por la Dirección de Epidemiología, Análisis y Gestión de Política de Salud Colectiva de la Secretaría Distrital de Salud, con radicado 2018EE69589, el cual concluyó', style: 'texto' },
                    { text: '“(...) En el polígono hay una conjunción de necesidades básicas insatisfechas principalmente al acceso a servicios públicos legales y a medidas sanitarias lo Cual representa una alta predisposición a la ocurrencia de eventos patológicas que pueden derivar en mortalidad (...)” ', italics: true, style: 'texto' },
                    { text: 'e igualmente, ', style: 'texto' },
                    { text: '“(…) Por las condiciones de saneamiento básico del entorno y de las viviendas, se puede inferir que el polígono intervenido se encuentra en condiciones de riesgo, situación que puede llegar a afectar Ia salud humana y colectiva de los habitantes del sector”, ', italics: true, style: 'texto' },
                    { text: 'la Alcaldía Local de Ciudad Bolívar, postuló ante la subcomisión intersectorial para la Mitigación del Impacto Social derivado de acciones de recuperación de Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, el caso de la ocupación denominada “Caracolí”, ubicada en el Polígono de monitoreo número 123, UPZ 69-Ismael Perdomo de la localidad 19 de Ciudad Bolívar, con el fin de decidir su ingreso al ', style: 'texto' },
                    { text: '“Programa de Acompañamiento Integral para la Mitigación del Impacto Social derivado de las acciones de recuperación de bienes fiscales, uso público, espacio público, u objeto de recuperación ecológica o preservación ambiental”. ', italics: true, style: 'texto' }

                ]
            },
            { text: '\nQue en este sentido, el 12 de julio de 2018, se sometió para votación ante la citada subcomisión, el caso descrito, para ser atendido dentro del programa Distrital para la Mitigación del Impacto Social Derivado de Acciones de Recuperación de: Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, en virtud del Decreto Distrital 227 de 2015 y su Marco Técnico; siendo aprobado por unanimidad. ', style: 'texto' },

            {
                text: [
                    { text: '\nQue en consecuencia, la Secretaría Distrital de Gobierno expidió la Resolución 0740 del 7 de septiembre de 2018 ', style: 'texto' },
                    { text: '“Por la cual se aprueba el caso ocupación Caracolí, Polígono de monitoreo número 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, para ser atendido en el marco del Decreto Distrital 227 de 2015”, ', italics: true, style: 'texto' },
                    { text: '”, a partir de la cual, se incluyó en el citado programa la ocupación ilegal denominada “Caracolí”.', style: 'texto' }
                ]
            },

            { text: '\nQue frente a las funciones de la Caja de la Vivienda Popular, de conformidad con lo expuesto en el artículo 4º y 5º de la Resolución 0740 del 7 de septiembre de 2018, tiene, entre otras, las siguientes:', style: 'texto' },

            {
                text: [
                    { text: '\n“ARTÍCULO 4°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular adelantará el estudio de documentación aportada y determinará el cumplimiento de los requisitos para la continuidad o no, en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, y establecerá las que serán excluidas en virtud de lo señalado en el artículo 3 del Decreto Distrital 227 de 2015.', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\n“ARTÍCULO 5°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular garantizará la relocalización transitoria de las personas identificadas por la Alcaldía Local de Ciudad Bolívar, de acuerdo con lo establecido en la Resolución 0740 de 2015, expedida por la Caja de la Vivienda Popular, adicionada por el artículo 1 de la Resolución 2947 de 2015, hasta tanto se establezca si cumplen o no con los requisitos señalados en el Decreto Distrital 227 de 2015 para continuar con su proceso de reasentamiento.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue a su vez, la Secretaría Distrital de Gobierno de la Alcaldía Mayor de Bogotá expidió la Resolución 0269 del 29 de abril de 2019 ', style: 'texto' },
                    { text: '“Por la cual se aclara y se adiciona el artículo 4° de la Resolución 740 de 2018 “por la cual se aprueba el caso ocupación Caracolí, Polígono de monitoreo número 123, Localidad de Ciudad Bolívar; UPZ 69-Ismael Perdomo, para ser atendido en el marco del Decreto Distrital 227 de 2015”, ', italics: true, style: 'texto' },
                    { text: 'la cual prescribe, entre otros, que:', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\n“(…) ARTICULO 1°. Aclarar y adicionar el artículo 4° de la Resolución 740 de 2018, el cual quedará así: ', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\n“Artículo 4° La Caja de la Vivienda Popular adelantará el estudio de la documentación aportada y determinará el cumplimiento de los requisitos para la continuidad o no, en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, y establecerá las que serán excluidas en virtud de lo señalado en el artículo 3 del Decreto Distrital 227 de 2015.', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nParágrafo: El estudio que realiza la Caja de la Vivienda Popular de la documentación aportada, que determinará el cumplimiento de los requisitos para la continuidad o no en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, se deberá aplicar la exclusión señalada en el numeral 1° del artículo 3° del Decreto Distrital 227 de 2015, de acuerdo con el criterio 2 del Marco normativo del referido Decreto Distrital”.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            {
                text: [
                    { text: '\nQue de conformidad con la orden impartida mediante el parágrafo 1° del artículo 3° de la Resolución previamente citada y según comunicación de la Alcaldía Local de Ciudad Bolívar con radicado ', style: 'texto' },
                    { text: 'No. ', bold: true, style: 'texto' },
                    { text: no_radicado, bold: true, style: 'texto' },
                    { text: ' del ', bold: true, style: 'texto' },
                    { text: fecha_radicado_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_ano, bold: true, style: 'texto' },
                    { text: ' se determinó la inclusión del (de la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1, bold: true, style: 'texto' },
                    { text: ' y su núcleo familiar quien habitaba en la ', style: 'texto' },
                    { text: 'zona No. ' + zona + ', ocupación No. ' + ocupacion, bold: true, style: 'texto' },
                    { text: ' del citado predio, tal como se evidencia en ' + texto_tipo_notificacion, style: 'texto' },
                    { text: fecha_acta_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_acta_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_acta_ano + ' .', bold: true, style: 'texto' }
                ]
            },

            { text: '\nQue el (la, los) beneficiario (a, s) ingresó (aron) al Programa de Reasentamientos de la Caja de la Vivienda Popular, inicialmente en la modalidad de Relocalización Transitoria, de conformidad con las funciones atribuidas a esta entidad, en aras de brindar una ayuda temporal en el proceso de materialización de su solución de vivienda definitiva.', style: 'texto' },

            { text: '\nQue así las cosas, la Caja de la Vivienda Popular puso a disposición los proyectos propios de la misma, para que el hogar seleccionara la unidad habitacional de su preferencia, con el fin de ser beneficiario de la asignación en especie del instrumento financiero previsto para el caso en particular de los habitantes de la ocupación ilegal denominada “Caracolí”.', style: 'texto' },
            { text: '\nQue con el fin de realizar con cargo al patrimonio autónomo todas las actividades inherentes a la dirección, coordinación, ejecución, supervisión y control de los procesos relacionados con la administración de los recursos afectos a la construcción de soluciones de vivienda de interés prioritario destinadas a los beneficiarios de la CAJA DE LA VIVIENDA POPULAR, entre ellos reasentamientos, victimas y demás población vulnerable, mediante documento privado el 14 de noviembre de 2012, se suscribió el contrato de Fiducia Mercantil irrevocable de administración y pago de recursos entre la Caja de la Vivienda Popular y la Fiduciaria Bogotá S.A. No. 3-1-30589.', style: 'texto' },


            {
                text: [
                    { text: '\nQue con ocasión a la celebración del referido contrato de Fiducia Mercantil, se comprometieron recursos que fueron transferidos a la Fiduciaria en mención, de conformidad con los Certificados de Disponibilidad Presupuestal número, 1181 de 2013, 1188 de 2013, 838 de 2014, 945 de 2014, 1011 de 2016 y 1102 de 2016 y el posterior registro presupuestal según número de certificados 2992, 3365, 1687, 1914, 1006 y 4098 respectivamente. Los mencionados recursos son producto del desarrollo del Proyecto de inversión 3075 denominado ', style: 'texto' },
                    { text: '“Reasentamiento de hogares localizados en zonas de alto riesgo no mitigable”, así mismo, de la ejecución del proyecto de inversión 691 denominado “Desarrollo de Vivienda de Interés Prioritario”.  ', italics: true, style: 'texto' }

                ]
            },

            {
                text: [
                    { text: '\nQue los proyectos de esta entidad, se desarrollaron con recursos provenientes del Programa de Reasentamientos, complementados con el Subsidio Distrital de Vivienda en Especie, de acuerdo al Convenio Interadministrativo 234 del 30 de septiembre de 2014, suscrito entre la Secretaría Distrital del Hábitat y la Caja de la Vivienda Popular, cuyo objeto es ', style: 'texto' },
                    { text: '“Aunar esfuerzos administrativos, técnicos y financieros con el fin de adelantar el desarrollo y construcción de unidades de vivienda de interés social prioritario en el marco del Plan de Desarrollo Distrital “Bogotá Humana”,', italics: true, style: 'texto' },
                    { text: 'valor que no podrá superar los 70 SMMLV.', style: 'texto' },
                ]
            },


            { text: '\nQue posteriormente, el 24 de agosto de 2015 se suscribió Contrato de Obra Civil N° CPS-PCVN-3-1-30589-045 de 2015, entre Fiduciaria Bogotá S.A, Vocera del Patrimonio Autónomo FIDUBOGOTÄ S.A. Proyecto Construcción de Vivienda Nueva y ODICCO LTDA, con el objeto de realizar a precio global, fijo sin formula de reajuste, las actividades necesarias para la realización de los estudios, diseños, construcción, escrituración, registro de la ejecución del programa de vivienda de interés prioritario – VIP, del proyecto a desarrollar en el predio denominado la Arboleda Santa Teresita  en la Localidad de San Cristóbal, de la Ciudad de Bogotá D.C.', style: 'texto' },



            {
                text: [
                    { text: '\nQue de acuerdo a lo anterior, el (la) señor (a) ', style: 'texto' },
                    { text: nombre_beneficiario_resolucion, bold: true, style: 'texto' },
                    { text: ' suscribio el  ', style: 'texto' },
                    { text: fecha_seleccion_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_seleccion_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_seleccion_ano, bold: true, style: 'texto' },
                    { text: ' “Formato para Selección de Vivienda Nueva”, ', style: 'texto' },
                    { text: 'en el cual se deja constancia de su manifestación expresa, libre y voluntaria de seleccionar la alternativa habitacional en el Proyecto denominado ', style: 'texto' },
                    { text: '“ARBOLEDA SANTA TERESITA”,', bold: true, style: 'texto' },
                    { text: ' ubicado en la Localidad de San Cristóbal.', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\nQue conviene precisar que mediante memorando  2019IE7599 de fecha 24 de mayo de 2019, la Dirección de Urbanización y Titulación de la Caja de la Vivienda Popular informó frente a las fuentes de financiación del proyecto denominado', style: 'texto' },
                    { text: '“ARBOLEDA SANTA TERESITA”, ', bold: true, style: 'texto' },
                    { text: 'que por concepto del Subsidio Distrital de Vivienda en Especie la asignación es de 26 SMLMV; por su parte, la Caja de la Vivienda Popular asigna el equivalente a 44 SMLMV para cada unidad inmobiliaria, logrando el cierre financiero de las soluciones habitacionales definitivas por valor de hasta 70 SMMLV.', style: 'texto' }
                ]
            },


            { text: '\nQue aunado a lo anterior, la Dirección de Urbanización y Titulación de la Caja de la Vivienda Popular informó: ', style: 'texto' },


            {
                text: [
                    { text: '\n“(…) que la dirección de Reasentamientos puede disponer de 391 viviendas para reubicar familias sin ninguna limitación, siempre y cuando cumplan con los requisitos para ser beneficiarios del Subsidio Distrital de Vivienda y debe destinar 641 viviendas para familias que cumpliendo con los requisitos del Subsidio Distrital de Vivienda, cumplan con las condiciones establecidas en el artículo 111 de la ley 99 de 1993, fuente de donde provienen estos recursos.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            {
                text: [
                    { text: '\nUna vez se realice el traslado de recursos de la indexación para reubicar familias de la Secretaría de Hábitat, el panorama cambia, pasando de 391 a 416 viviendas para reubicar familias sin ninguna limitación y disminuye de 641 a 616 las familias a reubicar por el tema de “quebradas”. ', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            {
                text: [
                    { text: '\nQue, como requisito previo a la entrega de su solución habitacional definitiva como asignación del instrumento financiero en especie, el (la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ',', bold: true, style: 'texto' },
                    { text: ' mediante acta realizará entrega real y material de la ocupación ', style: 'texto' },
                    { text: ocupacion + ' ubicada en la zona ' + zona, bold: true, style: 'texto' },
                    { text: ' del Sector Caracolí, Polígono de monitoreo número 123, de la UPZ 69 Ismael Perdomo.', style: 'texto' }
                ]
            },


            { text: '\nQue, lo anterior se adelanta en consideración al cumplimiento por parte del hogar frente a lo previsto en el Decreto Distrital 227 de 2015, la Resolución 0740 de 2018 modificada parcialmente por la Resolución N° 0269 del 29 de abril de 2019 expedidas por la Secretaría Distrital de Gobierno y demás normatividad aplicable para la situación particular de la ocupación denominada “Caracolí”, de lo cual derivó la emisión del Estudio de Documentos Positivo.', style: 'texto' },

            {
                text: [
                    { text: '\nQue a su vez, debe precisarse que para ser objeto de la asignación de los recursos destinados por la Secretaría Distrital del Hábitat por concepto de Subsidio Distrital de Vivienda en Especie, debe ceñirse a lo dispuesto en el Reglamento Operativo adoptado mediante Resolución N° 174 de 2019 ', style: 'texto' },
                    { text: '“Por medio de la cual se aclaran y modifican las resoluciones 844 de 2014 y 182 de 2018, en el marco del régimen de transición establecido en el artículo 37 del Decreto Distrital 623 de 2016”,', italics: true, style: 'texto' },
                    { text: ' expedidas por la citada entidad.', style: 'texto' }
                ]
            },

            { text: '\nQue así las cosas, en caso de que el hogar objeto de asignación mediante el presente acto administrativo se encuentre incurso en causal de inhabilidad de acuerdo a lo previsto en la Resolución 844 de 2014 y sus modificatorias, expedidas por la Secretaría Distrital del Hábitat, y como quiera que corresponde al beneficiario el atender los parámetros del subsidio, se entenderá que estamos frente al desistimiento tácito de la presente asignación del instrumento financiero en especie, generándose la imposibilidad de ser objeto de vinculación al proyecto seleccionado.', style: 'texto' },


            { text: '\nEn mérito de lo expuesto, ', style: 'texto' },

            { text: '\nRESUELVE:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nPRIMERO: ASIGNAR  ', bold: true, style: 'texto' },
                    { text: 'en especie el Instrumento Financiero de que trata el Decreto Distrital 227 de 2015, representado en una Vivienda de Interés Prioritario - VIP, al (a la) señor (a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'en el marco del programa de reasentamientos, en el proyecto de Vivienda Nueva denominado ', style: 'texto' },
                    { text: '“ARBOLEDA SANTA TERESITA”,', bold: true, style: 'texto' },
                    { text: 'ubicado en la Localidad de San Cristóbal.', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\nPARÁGRAFO.  ', bold: true, style: 'texto' },
                    { text: 'El proyecto de Vivienda Nueva denominado ', style: 'texto' },
                    { text: '“ARBOLEDA SANTA TERESITA”, ', bold: true, style: 'texto' },
                    { text: 'se encuentra financiado con el Subsidio Distrital de Vivienda en Especie, el cual será asignado por la Secretaría Distrital de Hábitat, siempre y cuando la familia cumpla con los parámetros establecidos para dicha asignación y con recursos de la Caja de la Vivienda Popular.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nSEGUNDO:  ', bold: true, style: 'texto' },
                    { text: 'En caso de que la familia beneficiaria del proceso de reasentamientos, no cumpla con lo estipulado en el reglamento operativo de la Secretaría Distrital del Hábitat – SDHT y sea inhabilitado en la asignación del Subsidio Distrital de Vivienda en Especie, se entenderá el desistimiento tácito frente a la asignación realizada mediante el presente acto administrativo y la Caja de la Vivienda Popular procederá a su declaratoria.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nTERCERO: COMUNICAR  ', bold: true, style: 'texto' },
                    { text: 'el presente acto administrativa la Dirección de Urbanizaciones y Titulación de la Caja de la Vivienda Popular, para el trámite realizar el trámite respectivo de Escrituración y Registro Inmobiliario de conformidad con sus competencias.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nCUARTO: ENTREGA DE LA OCUPACIÓN,  ', bold: true, style: 'texto' },
                    { text: 'una vez notificado el presente acto administrativo, el hogar tendrá como obligación la entrega real y material de la ocupación en un término no superior a quince (15) días calendario.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nPARÁGRAFO.  ', bold: true, style: 'texto' },
                    { text: 'En caso de no adelantarse la citada entrega, el hogar estará sujeto a las actuaciones judiciales que, en el marco de la recuperación de los predios fiscales, adelante la entidad competente.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQUINTO: NOTIFICAR  ', bold: true, style: 'texto' },
                    { text: 'el contenido del presente acto administrativo al (a la, a los) señor (a, es) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'de conformidad con el artículo 66 y siguientes de la Ley 1437 de 2011 ', style: 'texto' },
                    { text: '“Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo.', italics: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nSEXTO:  ', bold: true, style: 'texto' },
                    { text: 'Convocar al (a la, a los) señor (a, es) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'para que dentro de los cinco (5) días siguientes a la ejecutoria del presente acto administrativo, participen en el sorteo de adjudicación de la solución habitacional definitiva de conformidad al procedimiento establecido por la Dirección Técnica de Reasentamientos de la Caja de la Vivienda Popular y suscriban la carta de aceptación respectiva. ', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nSÉPTIMO:  ', bold: true, style: 'texto' },
                    { text: 'Contra el presente acto administrativo procede el recurso de reposición al tenor de lo dispuesto en el artículo 76 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo, dentro de los diez (10) días hábiles siguientes a la notificación personal, o a la notificación por aviso, según sea el caso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nOCTAVO:  ', bold: true, style: 'texto' },
                    { text: 'La presente resolución rige a partir de la fecha de su ejecutoria.', style: 'texto' }
                ]
            },


            { text: '\nCOMUNÍQUESE, NOTIFÍQUESE Y CÚMPLASE', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\nDada en Bogotá D.C.,  el día ', style: 'texto' },
            { text: '\n\n ISIS PAOLA DÍAZ MUÑIZ', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: 'Directora Técnica de Reasentamientos \n\n\n\n', style: 'texto', fontSize: 12, alignment: 'center' },
            {
                table: {
                    widths: [50, '*'],
                    body: [
                        [{ text: 'Proyectó:', fontSize: 7 }, { text: elaboro + ' – Dirección de Reasentamientos.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: aprobo + ' – Dirección de Reasentamientos.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Yamile Patricia Castiblanco Venegas - Profesional – Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Nelson Villarraga Quijano - Contrato No. 146 de 2019 - Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: aprob_juridica + ' – Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Martha Patricia Ortiz - Contrato No. 288 de 2019 - Dirección Jurídica.', fontSize: 7 }],

                        [{ text: 'Aprobó C.L.:', fontSize: 7 }, { text: 'Oscar Eduardo Pinilla Pinilla - Director Jurídico', fontSize: 7 }],
                        [{ text: '\nArchivado en:', fontSize: 7 }, { text: '\nSubserie Resolución Administrativa - Dirección General.', fontSize: 7 }]
                    ]
                },
                layout: 'noBorders'
            },
            { text: 'ID. ' + identificador, style: 'texto', fontSize: 7, alignment: 'right' }



        ],

        styles: {
            sub1: {
                bold: true
            },
            superMargin: {
                margin: [20, 0, 0, 0],
                fontSize: 11,
                alignment: 'justify'
            },
            texto: {
                fontSize: 10,
                alignment: 'justify'
            },
            texto1: {
                fontSize: 10,
                alignment: 'justify'
            },
            textobold: {
                fontSize: 10,
                alignment: 'justify',
                bold: true
            },
            subtitulo: {
                fontSize: 10,
                alignment: 'center',
                background: 'black',
                color: 'white',
                bold: true
            },
            titulo: {
                fontSize: 11.5,
                alignment: 'center',
                bold: true
            }
        }, defaultStyle: {
            font: 'Arial'
        }

    };
    return docDefinition;



} 




function imp_resolucion_caracoli_version_4(identificador, elaboro, aprobo) {

    $datos = {
        op: 'datos_resolucion',
        identificador: identificador
    };

    var resultado;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

            resultado = response[0];
        }
    });

    var ocupacion = (resultado["IDENTIFICA_ANTERIOR"] ? resultado["IDENTIFICA_ANTERIOR"] : '');

    var identificador = (resultado["IDENTIFICADOR"] ? resultado["IDENTIFICADOR"] : '');

    var concepto_de_ingreso = (resultado["Concepto de Ingreso"] ? resultado["Concepto de Ingreso"] : '');
    var fecha_concepto_ingreso = (resultado["fecha_concepto_ingreso"] ? resultado["fecha_concepto_ingreso"] : '');

    fecha_concepto_ingreso = moment(fecha_concepto_ingreso).format("D") + ' de ' + moment(fecha_concepto_ingreso).format("MMMM") + ' de ' + moment(fecha_concepto_ingreso).format("YYYY");

    var direccion = (resultado["Dirección"] ? resultado["Dirección"] : '');
    var manzana = (resultado["MZ"] ? resultado["MZ"] : '');
    var lote = (resultado["LT"] ? resultado["LT"] : '');

    var texto_direccion = direccion + ' MZ ' + manzana + ' LT ' + lote;

    var barrio = (resultado["Barrio"] ? resultado["Barrio"] : '');

    var localidad = (resultado["Localidad"] ? resultado["Localidad"] : '');
    var upz = (resultado["UPZ"] ? resultado["UPZ"] : '');

    var nombre1 = (resultado["Nombre 1"] ? resultado["Nombre 1"] : '');
    var nombre2 = (resultado["Nombre 2"] ? resultado["Nombre 2"] : '');

    var cedula1 = (resultado["Cedula 1"] ? resultado["Cedula 1"] : '');

    var folio_concepto_tecnico = (resultado["folio_concepto_tecnico"] ? resultado["folio_concepto_tecnico"] : '');
    var folio_est_documentos = (resultado["folio_est_documentos"] ? resultado["folio_est_documentos"] : '');

    var fecha_est = (resultado["fecha_est"] ? resultado["fecha_est"] : '');

    if (fecha_est !== '') {
        fecha_est = moment(fecha_est).format("D") + ' de ' + moment(fecha_est).format("MMMM") + ' de ' + moment(fecha_est).format("YYYY");
    }
    var texto_juridico = (resultado["texto_juridico"] ? resultado["texto_juridico"] : '');

    var cdp_res = (resultado["no_cdp"] ? resultado["no_cdp"] : '');



    var no_radicado = (resultado["no_radicado"] ? resultado["no_radicado"] : '');

    var fecha_cdp = (resultado["fecha_cdp"] ? resultado["fecha_cdp"] : '');
    fecha_cdp = moment(fecha_cdp).format("D") + ' de ' + moment(fecha_cdp).format("MMMM") + ' de ' + moment(fecha_cdp).format("YYYY");


    var fecha_radicado = (resultado["fecha_radicado"] ? resultado["fecha_radicado"] : '');
    var fecha_radicado_dia = moment(fecha_radicado).format("D");
    var fecha_radicado_mes = moment(fecha_radicado).format("MMMM");
    var fecha_radicado_ano = moment(fecha_radicado).format("YYYY");



    var fecha_seleccion = (resultado["fecha_seleccion"] ? resultado["fecha_seleccion"] : '');
    var fecha_seleccion_dia = moment(fecha_seleccion).format("D");
    var fecha_seleccion_mes = moment(fecha_seleccion).format("MMMM");
    var fecha_seleccion_ano = moment(fecha_seleccion).format("YYYY");

    var nombre_beneficiario_resolucion = $('#beneficiario_resolucion_especie').val();


    var zona = $('#zona').val();
    var folio_est_documentos = $('#folio_est_documentos').val();

    var folio_plenario=$('#folio_plenario').val();


    var fecha_plenario = (resultado["fecha_plenario"] ? resultado["fecha_plenario"] : '');
    var fecha_plenario_dia = moment(fecha_plenario).format("D");
    var fecha_plenario_mes = moment(fecha_plenario).format("MMMM");
    var fecha_plenario_ano = moment(fecha_plenario).format("YYYY");


    var rad_contructora=(resultado["rad_contructora"] ? resultado["rad_contructora"] : '');


    var subsidio=$('#subsidio').val();


    var marca_agua = "Documento preliminar - NO OFICIAL";

    if (resultado["concepto"] ? resultado["concepto"] : false) {
        marca_agua = "";
    }

    var elaboro = (resultado["elaboro"] ? resultado["elaboro"] : '');
    var aprobo = (resultado["aprobo"] ? resultado["aprobo"] : '');
    var aprob_juridica = (resultado["aprob_juridica"] ? resultado["aprob_juridica"] : '');

    var valor_resol = (resultado["valor_resol"] ? resultado["valor_resol"] : '');

    var valor_letras = numeroALetras(Number(valor_resol), {
        plural: '',
        singular: '',
        centPlural: '',
        centSingular: ''
    });



    valor_resol = (new Intl.NumberFormat("es-ES").format(valor_resol));


    var valor_resol_resta = Number((resultado["valor_resol"] ? resultado["valor_resol"] : 0))-1400000;

 

    var valor_letras_resta = numeroALetras(Number(valor_resol_resta), {
        plural: '',
        singular: '',
        centPlural: '',
        centSingular: ''
    });

    valor_resol_resta = (new Intl.NumberFormat("es-ES").format(valor_resol_resta));



    cedula1 = (new Intl.NumberFormat("es-ES").format(cedula1));




    var tipo_notificacion = $('#tipo_notificacion').val();
    var texto_tipo_notificacion = '';

    var fecha_acta = '';

    if (tipo_notificacion === 'Acta de Notificacion') {
        texto_tipo_notificacion = "el acta de notificación y evacuación por ocupación ilegal ";
        fecha_acta = (resultado["fecha_acta"] ? resultado["fecha_acta"] : '');

    } else if (tipo_notificacion === 'Afirmacion') {
        texto_tipo_notificacion = "la afirmación hecha ante la Alcaldía Local de Ciudad Bolívar Sector CARCOLÍ ";
        fecha_acta = (resultado["fecha_afirmacion"] ? resultado["fecha_afirmacion"] : '');
    }

    var fecha_acta_dia = moment(fecha_acta).format("D");
    var fecha_acta_mes = moment(fecha_acta).format("MMMM");
    var fecha_acta_ano = moment(fecha_acta).format("YYYY");



    pdfMake.fonts = {
        // Default font should still be available
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Bold.ttf',
            italics: 'Roboto-MediumItalic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
        },
        // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
        Arial: {
            normal: 'Arial.ttf',
            bold: 'Arial-Bold.ttf',
            italics: 'Arial-Italic.ttf',
            bolditalics: 'Arial-BoldItalic.ttf'
        }
    };


    var docDefinition = {
        pageMargins: [60, 150, 60, 90],
        pageSize: 'FOLIO',


        header:


            function (currentPage, pageCount) {
                return {

                    margin: [60, 25],
                    columns: [
                        {
                            table: {
                                widths: [60, '*', 60],
                                body: [
                                    [{
                                        rowSpan: 3, colSpan: 3,
                                        image: 'data:image/jpeg;base64,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',
                                        width: 65, alignment: 'center'
                                    }, '', ''],
                                    ['', '', ''],
                                    ['', '', ''],
                                    [{ text: 'RESOLUCIÓN No', colSpan: 3, alignment: 'center', bold: true, fonSize: 11, color: '#424949' }, '', ''],
                                    ['', '', { text: 'Hoja ' + currentPage.toString() + ' de ' + pageCount, fontSize: 8, alignment: 'center', color: '#626567' }],
                                    [{ text: '"Por medio de la cual se asigna y se ordena el pago de un instrumento financiero para la mitigación de las acciones derivadas de la recuperación del predio denominado CARACOLÍ, Polígono de monitoreo 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, en el marco del Decreto Distrital 227 del 12 de junio 2015”', colSpan: 3, alignment: 'center', color: '#626567', fontSize: 9 }, '', ''],
                                ]
                            }, layout: 'noBorders'
                        },
                    ],
                };
            },

        footer: {
            margin: [100, 0, 50, 20],
            columns: [
                {
                    image: 'data:image/png;base64,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',
                    width: 350,
                    height: 60
                }
            ],

        },
        watermark: { text: marca_agua, color: 'gray', opacity: 0.3, bold: true, italics: false },
        content: [

            { text: '\n EL (LA) DIRECTOR (A) TÉCNICO (A) DE REASENTAMIENTOS HUMANOS DE LA CAJA DE LA VIVIENDA POPULAR,', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\n   En uso de sus facultades legales y en especial las conferidas por los Acuerdos No. 20 de 1942 y 15 de 1959 del Concejo de Bogotá y el Decreto Ley 1421 de 1993; el Acuerdo No. 003 de 2008, Acuerdo No 004 de 2008 emanados del Consejo Directivo de la Caja de la Vivienda Popular y la Resolución No. 4400 de 26 de agosto de 2016, demás normas concordantes y complementarias, y,', style: 'texto' },
            { text: '\n CONSIDERANDO:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\nQue el inciso 2° del artículo 2° de la Constitución Política prescribe que: ', style: 'texto' },
                    { text: '“Las autoridades de la República están instituidas para proteger a todas las personas residentes en Colombia, en su vida, honra, bienes, creencias y demás derechos y libertades, y para asegurar el cumplimiento de los deberes sociales del Estado y de los particulares”', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el inciso 2° del artículo 113 de la Constitución Política, establece ', style: 'texto' },
                    { text: '“Los diferentes órganos del Estado tienen funciones separadas, pero colaboran armónicamente para la realización de sus fines”.', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el artículo 209 de la Constitución Política, estipula que ', style: 'texto' },
                    { text: '“La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad, mediante la descentralización, la delegación y la desconcentración de funciones. Las autoridades administrativas deben coordinar sus actuaciones para el adecuado cumplimiento de los fines del Estado”.', italics: true, style: 'texto' }
                ]
            },
            { text: '\nQue así mismo, el artículo 288 de la Constitución Política de Colombia prevé que uno de los aspectos que componen el núcleo esencial del principio de autonomía territorial, esto es la distribución de competencias entre el nivel nacional y las autoridades del nivel territorial, deberá hacerse con base en los principios de coordinación, concurrencia y subsidiariedad, de manera que la regulación y ejecución de las mismas sean llevadas a cabo de manera armónica. ', style: 'texto' },
            {
                text: [
                    { text: '\nQue, al respecto, la jurisprudencia ha reiterado que ', style: 'texto' },
                    { text: '“los principios de coordinación, concurrencia y subsidiariedad, previstos por el artículo 288 C.P., operan como fórmulas de articulación para el ejercicio de las competencias adscritas al poder centralizado y a las autoridades territoriales. Así, como lo ha señalado la Corte, el principio de coordinación parte de la existencia de competencias concurrentes entre distintas autoridades del Estado, lo cual impone que su ejercicio se haga de manera armónica, de modo que la acción de los distintos órganos resulte complementaria y conducente al logro de los fines de la acción estatal. (…) El principio de concurrencia se explica a partir de considerar que, en determinadas materias, la actividad del Estado debe cumplirse con la participación de los distintos niveles de la Administración. Ello implica, en primer lugar, un criterio de distribución de competencias conforme al cual las mismas deben atribuirse a distintos órganos, de manera que se garantice el objeto propio de la acción estatal, sin que sea posible la exclusión de entidades que, en razón de la materia estén llamadas a participar” 1 ', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue, por su parte, el artículo 6° de la Ley 489 de 1998, señala el principio de coordinación y colaboración entre las autoridades administrativas, con el fin de lograr los fines y cometidos estatales, así mismo, el artículo 95 de la citada norma indica que', style: 'texto' },
                    { text: '“Las entidades públicas podrán asociarse con el fin de cooperar en el cumplimiento de funciones administrativas o de prestar conjuntamente servicios que se hallen a su cargo, mediante la celebración de convenios interadministrativos (…)”', italics: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue el artículo 301 del Decreto Distrital 190 de 2004 compilatorio del Plan de Ordenamiento Territorial, al señalar los objetivos del Subprograma de reasentamiento por alto riesgo no mitigable y por obra pública, indica que ', style: 'texto' },
                    { text: '“El programa de Reasentamiento consiste en el conjunto de acciones y actividades necesarias para lograr el traslado de las familias de estratos 1 y 2 que se encuentran asentadas en zonas declaradas de alto riesgo no mitigable por deslizamiento o inundación, las zonas objeto de intervención por obra pública ', italics: true, style: 'texto' },
                    { text: 'o la que se requiera para cualquier intervención de reordenamiento territorial”. ', decoration: 'underline', bold: true, italics: true, style: 'texto' },
                    { text: ' (Negrilla y Subrayado Fuera de texto).\n\n\n', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\n1 ', style: 'texto' },
                    { text: 'Sentencia 2007-01598/0283-2012 de agosto 17 de 2017, Consejo de Estado, Sala de lo Contencioso Administrativo, Sección Segunda, Subsección B. M. P.: Dr. Cesar Palomino Cortés.', fontSize: 8, style: 'texto' }
                ]
            },




            {
                text: [
                    { text: '\nQue el literal a), numeral 2, del artículo 302 ibídem, estableció como acción estratégica del Subprograma de reasentamiento por Alto Riesgo: ', style: 'texto' },
                    { text: 'estudiar, proponer y evaluar la determinación de un valor único de reconocimiento (VUR) de los inmuebles ubicados en zonas de alto riesgo no mitigable, que permita a la Administración Distrital incluirlos en los programas de vivienda. ', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue el Consejo Directivo de la Caja de la Vivienda Popular mediante el Acuerdo 04 de 2008 modificó la estructura organizacional de la Entidad, creando la Dirección de Reasentamientos y asignó, entre otras funciones, la de ', style: 'texto' },
                    { text: '“Gestionar los recursos financieros de los programas y proyectos que se adelantan en la dependencia referidos a la oferta y demanda de vivienda”.', italics: true, style: 'texto' }
                ]
            },
            {
                text: [
                    { text: '\nQue en cumplimiento de la aplicación de los principios de la función administrativa, previstos en el artículo 3 de la Ley 1437 de 2011, ', style: 'texto' },
                    { text: '“ (…) Las actuaciones administrativas se desarrollarán, especialmente, con arreglo a los principios del debido proceso, igualdad, imparcialidad, buena fe, moralidad, participación, responsabilidad, transparencia, publicidad, coordinación, eficacia, economía y celeridad (…)”, especialmente lo establecido en el numeral 11 de dicho artículo: “En virtud del principio de eficacia, las autoridades buscarán que los procedimientos logren su finalidad y, para el efecto, removerán de oficio los obstáculos puramente formales, evitarán decisiones inhibitorias, dilaciones o retardos y sanearán, de acuerdo con este Código las irregularidades procedimentales que se presenten, en procura de la efectividad del derecho material objeto de la actuación administrativa”.', italics: true, style: 'texto' }
                ]
            },
            
            { text: '\nQue a la Caja de la Vivienda Popular le corresponde entre otras funciones, el reasentar a las familias que se encuentren en alto riesgo no mitigable en concordancia con la política que el Distrito estructura a través de la Secretaria de Hábitat, priorizando los beneficiarios recomendados por el Instituto Distrital de Gestión del Riesgo y Cambio Climático - IDIGER - de acuerdo a lo preceptuado en las Leyes 9ª de 1989 y 388 de 1997 y el Decreto Distrital 255 del 12 junio de 2013, entre otros.', style: 'texto' },

            { text: '\nQue bajo el anterior panorama, se observa que las anteriores disposiciones normativas vigentes en el Distrito Capital, no prevén el reasentamiento de familias distintas a aquellas que se encuentran en zonas de alto riesgo no mitigable, en particular, en lo que se refiere a la ocupación ilegal de bienes fiscales, y que con el inicio de acciones tendientes a su recuperación se pueden ver eventualmente  vulnerados  derechos fundamentales como la vida y la vivienda digna, razón por la cual, el Distrito Capital implementó un programa de mitigación del impacto social derivado de este tipo de acciones, por lo cual se adoptó el Decreto Distrital 227 del 12 de junio de 2015, derogando el Decreto 466 del 20 noviembre de 2006 y determinó los organismos encargados de gestionar la asignación de recursos económicos, definir la autoridad competente para el reasentamiento y los casos priorizados para ser atendidos, en los siguientes términos:', style: 'texto' },


            {
                text: [
                    { text: '\n“(…) Que conforme a las atribuciones que le otorga el Decreto 1421 de 1993 al Alcalde Mayor en los artículos 38,39,40, y 53, el artículo 9 de la Ley 489 de 1998, en concordancia con los artículos 110 del Decreto Nacional 111 de 1996 y 87 del Decreto Distrital 714 de 1996,', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'se asigna a la Caja de la Vivienda Popular para que adelante las acciones que considere pertinentes, para realizar el acompañamiento integral a la población que pueda ser objeto de acciones de restitución de inmuebles de carácter público.', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue para ese mismo efecto, se hace necesario establecer una política pública distrital de acompañamiento para mitigar el Impacto Social derivado de las Acciones Judiciales o administrativas de Restitución de Bienes Inmuebles de Carácter Público, que dejan en situación de vulnerabilidad a los grupos familiares directamente afectados con la medida, que implica acompañamiento mediante acciones sociales y habitacionales, con el fin de insertar a las familias al tejido social de la ciudad de manera sostenible y contribuir al mejoramiento de su calidad de vida. (…)” ', italics: true, style: 'texto' },
                    { text: '(Subrayado fuera de texto).', style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            { text: '\nQue el artículo 6° del Decreto Distrital 227 del 12 de junio de 2015, estableció los recursos presupuestales para la ejecución del programa en el siguiente sentido:', style: 'texto' },

            {
                text: [
                    { text: '\n“Los recursos económicos del programa, deberán ser gestionados por los organismos y entidades distritales responsables de la ejecución de las actividades definidas en el plan de acción que se adopte en cada caso. Para esto, las entidades adoptarán las medidas necesarias para obtener los recursos ante la Secretaria Distrital de Hacienda ', style: 'texto', italics: true, fontSize: 11 },
                    { text: 'y para el caso del proceso de reasentamiento se incluirán los gastos asociados a la capacidad de gestión administrativa para la ejecución del Decreto por parte de la Caja de la Vivienda Popular.', style: 'texto', italics: true, fontSize: 11, decoration: 'underline' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nParágrafo.', italics: true, bold: true, style: 'texto' },
                    { text: 'La cuantificación del instrumento financiero que permita acceso a la vivienda para los eventos de reasentamiento se determinará en el Marco Técnico”', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue dando aplicación a la norma en cita, y de acuerdo a lo descrito en el ', style: 'texto' },
                    { text: '“concepto diagnóstico de condiciones socio ambientales polígono Caracolí, localidad Ciudad Bolívar”,', italics: true, style: 'texto' },
                    { text: 'elaborado por la Dirección de Epidemiología, Análisis y Gestión de Política de Salud Colectiva de la Secretaría Distrital de Salud, con radicado 2018EE69589, el cual concluyó', style: 'texto' },
                    { text: '“(...) En el polígono hay una conjunción de necesidades básicas insatisfechas principalmente al acceso a servicios públicos legales y a medidas sanitarias lo Cual representa una alta predisposición a la ocurrencia de eventos patológicas que pueden derivar en mortalidad (...)” ', italics: true, style: 'texto' },
                    { text: 'e igualmente, ', style: 'texto' },
                    { text: '“(…) Por las condiciones de saneamiento básico del entorno y de las viviendas, se puede inferir que el polígono intervenido se encuentra en condiciones de riesgo, situación que puede llegar a afectar Ia salud humana y colectiva de los habitantes del sector”, ', italics: true, style: 'texto' },
                    { text: 'la Alcaldía Local de Ciudad Bolívar, postuló ante la subcomisión intersectorial para la Mitigación del Impacto Social derivado de acciones de recuperación de Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, el caso de la ocupación denominada “Caracolí”, ubicada en el Polígono de monitoreo número 123, UPZ 69-Ismael Perdomo de la localidad 19 de Ciudad Bolívar, con el fin de decidir su ingreso al ', style: 'texto' },
                    { text: '“Programa de Acompañamiento Integral para la Mitigación del Impacto Social derivado de las acciones de recuperación de bienes fiscales, uso público, espacio público, u objeto de recuperación ecológica o preservación ambiental”. ', italics: true, style: 'texto' }

                ]
            },
            { text: '\nQue, en este sentido, el 12 de julio de 2018, se sometió para votación ante la citada subcomisión, el caso descrito, para ser atendido dentro del programa Distrital para la Mitigación del Impacto Social Derivado de Acciones de Recuperación de: Bienes Fiscales, Uso Público, Espacio Público u Objeto de Recuperación Ecológica o Preservación Ambiental, en virtud del Decreto Distrital 227 de 2015 y su Marco Técnico; siendo aprobado por unanimidad. ', style: 'texto' },

            {
                text: [
                    { text: '\nQue, en consecuencia, la Secretaría Distrital de Gobierno expidió la Resolución 0740 del 7 de septiembre de 2018 ', style: 'texto' },
                    { text: '“Por la cual se aprueba el caso ocupación Caracolí, Polígono de monitoreo número 123, Localidad de Ciudad Bolívar, UPZ 69-Ismael Perdomo, para ser atendido en el marco del Decreto Distrital 227 de 2015”, ', italics: true, style: 'texto' },
                    { text: '”, a partir de la cual, se incluyó en el citado programa la ocupación ilegal denominada “Caracolí”.', style: 'texto' }
                ]
            },

            { text: '\nQue, frente a las funciones de la Caja de la Vivienda Popular, de conformidad con lo expuesto en el artículo 4º y 5º de la Resolución 0740 del 7 de septiembre de 2018, tiene, entre otras, las siguientes:', style: 'texto' },

            {
                text: [
                    { text: '\n“ARTÍCULO 4°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular adelantará el estudio de documentación aportada y determinará el cumplimiento de los requisitos para la continuidad o no, en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, y establecerá las que serán excluidas en virtud de lo señalado en el artículo 3 del Decreto Distrital 227 de 2015.', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\n“ARTÍCULO 5°. ', bold: true, italics: true, style: 'texto' },
                    { text: 'La Caja de la Vivienda Popular garantizará la relocalización transitoria de las personas identificadas por la Alcaldía Local de Ciudad Bolívar, de acuerdo con lo establecido en la Resolución 0740 de 2015, expedida por la Caja de la Vivienda Popular, adicionada por el artículo 1 de la Resolución 2947 de 2015, hasta tanto se establezca si cumplen o no con los requisitos señalados en el Decreto Distrital 227 de 2015 para continuar con su proceso de reasentamiento.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nQue, a su vez, la Secretaría Distrital de Gobierno de la Alcaldía Mayor de Bogotá expidió la Resolución 0269 del 29 de abril de 2019 ', style: 'texto' },
                    { text: '“Por la cual se aclara y se adiciona el artículo 4° de la Resolución 740 de 2018 “por la cual se aprueba el caso ocupación Caracolí, Polígono de monitoreo número 123, Localidad de Ciudad Bolívar; UPZ 69-Ismael Perdomo, para ser atendido en el marco del Decreto Distrital 227 de 2015”, ', italics: true, style: 'texto' },
                    { text: 'la cual prescribe, entre otros, que:', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\n“(…) ARTICULO 1°. Aclarar y adicionar el artículo 4° de la Resolución 740 de 2018, el cual quedará así: ', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\n“Artículo 4° La Caja de la Vivienda Popular adelantará el estudio de la documentación aportada y determinará el cumplimiento de los requisitos para la continuidad o no, en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, y establecerá las que serán excluidas en virtud de lo señalado en el artículo 3 del Decreto Distrital 227 de 2015.', italics: true, style: 'texto', underline: 'true' }
                ], margin: [40, 0, 0, 0]
            },

            {
                text: [
                    { text: '\nParágrafo: El estudio que realiza la Caja de la Vivienda Popular de la documentación aportada, que determinará el cumplimiento de los requisitos para la continuidad o no en el programa de reasentamiento de cada una de las familias reportadas por la Alcaldía Local de Ciudad Bolívar, se deberá aplicar la exclusión señalada en el numeral 1° del artículo 3° del Decreto Distrital 227 de 2015, de acuerdo con el criterio 2 del Marco normativo del referido Decreto Distrital”.', italics: true, style: 'texto' }
                ], margin: [40, 0, 0, 0]
            },


            {
                text: [
                    { text: '\nQue de conformidad con la orden impartida mediante el parágrafo 1° del artículo 3° de la Resolución previamente citada y según comunicación de la Alcaldía Local de Ciudad Bolívar con radicado ', style: 'texto' },
                    { text: 'No. ', bold: true, style: 'texto' },
                    { text: no_radicado, bold: true, style: 'texto' },
                    { text: ' del ', bold: true, style: 'texto' },
                    { text: fecha_radicado_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_ano, bold: true, style: 'texto' },
                    { text: ' se determinó la inclusión del (de la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1, bold: true, style: 'texto' },
                    { text: ' y su núcleo familiar quien habitaba en la ', style: 'texto' },
                    { text: 'zona No. ' + zona + ', ocupación No. ' + ocupacion, bold: true, style: 'texto' },
                    { text: ' del citado predio, tal como se evidencia en ' + texto_tipo_notificacion, style: 'texto' },
                    { text: ' Polígono de Monitoreo 123, UPZ', style: 'texto' },
                    { text: upz, bold: true, style: 'texto' },
                    { text: ' de fecha ', style: 'texto' },
                    { text: fecha_acta_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_acta_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_acta_ano + '.', bold: true, style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue de la documentación  que  hace parte de la  actuación administrativa se infiere que el(la) señor(a) ', style: 'texto' },
                    { text: nombre1, bold: true, style: 'texto' },
                    { text: ', ha demostrado ejercer la ocupación del predio ubicado en la ', style: 'texto' },
                    { text: 'zona No. ' + zona + ', ocupación No. ' + ocupacion, bold: true, style: 'texto' },
                    { text: ' del barrio Caracolí, de forma quieta, pacifica, e ininterrumpida, conforme se indica en las correspondientes afirmaciones administrativas ante la Caja de la Vivienda Popular,  suscritas bajo la gravedad de juramento por testigos, así mismo se encuentra registrado en la comunicación de la Alcaldía Local de Ciudad Bolívar, con radicado ', style: 'texto' },
                    { text: 'No. ', bold: true, style: 'texto' },
                    { text: no_radicado, bold: true, style: 'texto' },
                    { text: ' del ', bold: true, style: 'texto' },
                    { text: fecha_radicado_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_radicado_ano+'.', bold: true, style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\nQue en vista de lo anterior, el ', style: 'texto' },
                    { text: fecha_est, bold: true, style: 'texto' },
                    { text: ' obrante a folio ', style: 'texto' },
                    { text: '('+folio_est_documentos+')', bold: true, style: 'texto' },
                    { text: ' la Dirección Técnica de Reasentamientos de la Caja de la Vivienda Popular, emitió estudio jurídico documental, mediante el cual se determinó que el(la) señor(a) ', style: 'texto' },
                    { text: nombre1, bold: true, style: 'texto' },
                    { text: ', identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1, bold: true, style: 'texto' },
                    { text: ', cumple con los requisitos para ser beneficiario (a) del Programa de Reasentamientos, por lo que es viable asignar los recursos financieros para el acceso a una solución habitacional, de conformidad con lo establecido en el Decreto Distrital 227 de 2015 y la Resolución 0740 del 7 de septiembre de 2018, modificada por la Resolución N° 0269 del 29 de abril de 2019. ', style: 'texto' }
                ]
            },

            { text: '\nQue el Marco Técnico (Decreto 227 de 2015) de fecha 20 de enero de 2016, establece en su numeral 1.3.3.- Instrumento Financiero para Soluciones Habitacionales, que para atender a las familias del PAIMIS recomendadas al programa de reasentamiento se establece un instrumento financiero para el acceso a una solución habitacional, el cual equivaldrá hasta setenta (70) Salarios Mínimos Legales Mensuales Vigentes al momento de su reconocimiento, y este será asignado por la Caja de la Vivienda Popular.', style: 'texto' },



            {
                text: [
                    { text: '\nQue del (de la, de los) señor (a, es) ', style: 'texto' },
                    { text: nombre1, bold: true, style: 'texto' },
                    { text: ' ya identificado (a), y su núcleo familiar será complementado con el Subsidio Familiar de Vivienda-SFV, del Programa de Vivienda de Interés Prioritario para Ahorradores VIPA, que asigne el Ministerio de Vivienda, Ciudad y Territorio Fondo Nacional de Vivienda, para lograr el reasentamiento de familias, de conformidad con lo establecido en el artículo 7º del Decreto Distrital 255 de 2013. ', style: 'texto' }
                ]
            },


            { text: '\nQue el Programa de Vivienda de Interés Prioritario para Ahorradores – VIPA, está reglamentado por el artículo 2.1.1.3.1 del Decreto 1077 de 2015, estableciendo en Subsección 5, Sección 1, Capitulo 3, Titulo 1, Parte 1, Libro 2 el procedimiento para la asignación del Subsidio Familiar de Vivienda, otorgado en el marco del programa que se desarrolle a través del patrimonio autónomo.', style: 'texto' },


            { text: '\nQue el Programa de Vivienda de Interés Prioritario para Ahorradores (en adelante “Programa VIPA”), tiene por objeto facilitar el acceso a la vivienda a los hogares que tienen ingresos mensuales de hasta dos (2) salarios mínimos legales mensuales vigentes y que cuenten con un ahorro conforme el artículo 2.1.1.3.1.3.4 ibidem. ', style: 'texto' },


            { text: '\nQue según prescribe el artículo 2.1.1.3.1.2.1 de la norma anteriormente citada, los hogares que resulten beneficiarios del programa de Vivienda de Interés Prioritario para Ahorradores – VIPA, recibirán un Subsidio Familiar de Vivienda así: a. Si tienen ingresos de hasta 1.6 SMLMV podrá asignarse un subsidio hasta por el monto equivalente a 30 SMLMV, y si tienen ingresos de más de 1.6 y hasta 2 SMLMV, podrá asignarse un subsidio hasta por el monto equivalente a 25 SMLMV.', style: 'texto' },


            { text: '\nQue los hogares que resulten seleccionados en los listados presentados por el oferente, deberán aplicar el Subsidio Familiar de Vivienda y los demás beneficios a que se refiere el artículo 2.1.1.3.1.5.7 del Decreto 1077 de 2015 solamente en el proyecto seleccionado.', style: 'texto' },

            {
                text: [
                    { text: '\nQue una vez tramitado el correspondiente estudio documental, la Dirección de Reasentamientos de la Caja de la Vivienda Popular, dio a conocer a (la, el) señor (a) ', style: 'texto' },
                    { text: nombre1, bold: true, style: 'texto' },
                    { text: ', los proyectos de Vivienda de Interés Prioritario disponibles, los cuales no hacen parte de los proyectos de vivienda propios de la Caja de la Vivienda Popular, para que el hogar seleccionara la unidad habitacional de su preferencia, con el fin de ser beneficiario de la asignación del instrumento financiero previsto para el caso en particular de los habitantes de la ocupación ilegal denominada “Caracolí”.', style: 'texto' }
                ]
            },



            {
                text: [
                    { text: '\nQue a folio ', style: 'texto' },
                    { text: folio_plenario, bold: true, style: 'texto' },
                    { text: ' del plenario, obra Contrato De Opción De Compra por parte del hogar, suscrita por el (la) señor (a) ', style: 'texto' },
                    { text: nombre1, bold: true, style: 'texto' },
                    { text: ' de fecha ', style: 'texto' },
                    { text: fecha_plenario_dia, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_plenario_mes, bold: true, style: 'texto' },
                    { text: ' de ', bold: true, style: 'texto' },
                    { text: fecha_plenario_ano, bold: true, style: 'texto' },
                    { text: ', y avalado por el oferente CG Construcciones SAS, se dejó constancia de su manifestación expresa, libre y voluntaria de seleccionar la alternativa habitacional en el Proyecto denominado “CIUDADELA EL PORVENIR MZ 52 ETAPA VII A”, ubicado en la Ciudad de Bogotá D.C.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nQue el oferente CG Construcciones SAS, presentó escrito a la Caja de la Vivienda Popular con radicado No. ', style: 'texto' },
                    { text: rad_contructora, bold: true, style: 'texto' },
                    { text: ' en el cual señala, que la familia es objeto de subsidio equivalente a ', style: 'texto' },
                    { text: subsidio, bold: true, style: 'texto' },
                    { text: ' SMMLV, de conformidad con la información sobre ingresos suministrada por el beneficiario.', style: 'texto' }
                ]
            },



            {
                text: [
                    { text: '\nQue con la finalidad de realizar el cierre financiero de la vivienda de reposición, la Caja de la Vivienda Popular asignará el instrumento financiera equivalente a ', style: 'texto' },
                    { text: valor_letras + '($' + valor_resol + ') MONEDA LEGAL, ', bold: true, style: 'texto' },
                    { text: 'de los cuales se destinará el valor de ', style: 'texto' },
                    { text: 'UN MILLÓN CUATROCIENTOS MIL PESOS ($1.400.000) MONEDA LEGAL,', bold: true, style: 'texto' },
                    { text: ' para gastos de escrituración y registro de la solución habitacional seleccionada.', style: 'texto' }
                ]
            },

            { text: '\nQue, en consecuencia, los indicados recursos del Instrumento Financiero asignados por la Caja de la Vivienda Popular se constituyeron en un activo financiero del patrimonio de la familia(s) beneficiaria(s) que se acreditaron como ahorro, destinado de manera exclusiva y definitiva a la adquisición por parte del (los) beneficiario (s) de una solución habitacional (Vivienda De Interés Prioritario - VIP).', style: 'texto' },


            { text: '\nQue es preciso señalar que para ser objeto de la asignación de los recursos destinados por el Ministerio de Vivienda, Ciudad y Territorio Fondo Nacional de Vivienda, el hogar debe ceñirse a lo dispuesto en el Decreto 1077 de 2015 “Por medio del cual se expide el Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio” y demás normas complementarias.', style: 'texto' },

            { text: '\nQue, así las cosas, en caso de que el núcleo familiar objeto de asignación mediante el presente acto administrativo se encuentre incurso en causal de inhabilidad y como quiera que corresponde al mismo el atender los parámetros del subsidio, se entenderá que estamos frente al desistimiento tácito de la presente asignación del instrumento financiero, generándose la imposibilidad de ser objeto de vinculación al proyecto seleccionado.', style: 'texto' },


            {
                text: [
                    { text: '\nQue, como requisito previo a la entrega de su solución habitacional definitiva como asignación del instrumento financiero, el (la) señor(a) ', style: 'texto' },
                    { text: nombre1, bold: true, style: 'texto' },
                    { text: ', identificado(a) con la C.C. No.', style: 'texto' },
                    { text: cedula1, bold: true, style: 'texto' },
                    { text: ' mediante acta realizará entrega real y material de la ', style: 'texto' },
                    { text: 'ocupación No. ' + ocupacion,bold: true, style: 'texto' },
                    { text: ' ubicada en la ', style: 'texto' },
                    { text: 'zona No. ' + zona,bold: true, style: 'texto' },
                    { text: ' del Sector Caracolí, Polígono de monitoreo número 123, de la UPZ 69 Ismael Perdomo.', style: 'texto' },
                ]
            },


            { text: '\nQue lo anterior se adelanta en consideración al cumplimiento por parte del hogar frente a lo previsto en el Decreto Distrital 227 de 2015, la Resolución 0740 de 2018 modificada parcialmente por la Resolución N° 0269 del 29 de abril de 2019 expedidas por la Secretaría Distrital de Gobierno y demás normatividad aplicable para la situación particular de la ocupación denominada “Caracolí”.', style: 'texto' },



            {
                text: [
                    {
                        text: '\nQue para atender los compromisos asumidos en el presente acto administrativo, la Caja de la Vivienda Popular cuenta con el Certificado ' +
                            'de Disponibilidad Presupuestal No. ', style: 'texto'
                    },
                    { text: '' + cdp_res + ' del ' + fecha_cdp + ',', style: 'texto', bold: true },
                    { text: ' emitido por el responsable del presupuesto de la entidad.', style: 'texto' }
                ]
            },



            { text: '\nEn mérito de lo expuesto, ', style: 'texto' },

            { text: '\nRESUELVE:', style: 'textobold', fontSize: 12, alignment: 'center' },

            {
                text: [
                    { text: '\n\nARTÍCULO PRIMERO:  ', bold: true, style: 'texto' },
                    { text: 'Asignar el Instrumento Financiero para la mitigación de las acciones derivadas de la recuperación del predio denominado ', style: 'texto' },
                    { text: 'CARACOLI' + ', ', bold: true, style: 'texto' },
                    { text: ' en la localidad de Ciudad Bolívar de que trata el Decreto Distrital 227 de 2015, a favor del (la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'por valor de  ', style: 'texto' },
                    { text: valor_letras + '($' + valor_resol + ') MONEDA LEGAL, ', bold: true, style: 'texto' },
                    { text: 'de los cuales se destinará el valor de ', style: 'texto' },
                    { text: 'UN MILLÓN CUATROCIENTOS MIL PESOS ($1.400.000) MONEDA LEGAL' + ', ', bold: true, style: 'texto' },
                    { text: 'para gastos de escrituración y registro de la solución habitacional y el valor de', style: 'texto' },
                    { text: valor_letras_resta + '($' + valor_resol_resta + ') MONEDA LEGAL, ', bold: true, style: 'texto' },
                    { text: 'para cubrir el pago de la vivienda de reposición seleccionada por la familia en el marco del programa de reasentamientos Proyecto denominado ', style: 'texto' },
                    { text: '“CIUDADELA EL PORVENIR MZ 52 ETAPA VII A”,',bold:true,italics:true, style: 'texto' },
                    { text: ' ubicado en la Ciudad de Bogotá D.C., y cuyo oferente es CG Construcciones SAS.', style: 'texto' }

                ]
            },


            {
                text: [
                    { text: '\nPARÁGRAFO.  ', bold: true, style: 'texto' },
                    { text: 'El cierre financiero de la solución habitacional en el proyecto ', style: 'texto' },
                    { text: '“CIUDADELA EL PORVENIR MZ 52 ETAPA VII A”, ',italics:true, bold: true, style: 'texto' },
                    { text: 'ubicado en la Ciudad de Bogotá D.C., seleccionado por el (la, los) señor (a, es) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'ya identificado (a,os) será financiado con el Subsidio Familiar de Vivienda-SFV, del Programa de Vivienda de Interés Prioritario para Ahorradores VIPA, que asigne el Ministerio de Vivienda, Ciudad y Territorio Fondo Nacional de Vivienda, siempre y cuando la familia cumpla con los parámetros establecidos para dicha asignación y con recursos de la Caja de la Vivienda Popular.', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\n\nARTÍCULO SEGUNDO: ', bold: true, style: 'texto' },
                    { text: 'En caso de que la familia beneficiaria del proceso de reasentamientos, no cumpla con lo estipulado en el Decreto 1077 de 2015 y sea inhabilitado en la asignación del Subsidio Familiar de Vivienda-SFV, del Programa de Vivienda de Interés Prioritario para Ahorradores VIPA, se entenderá el desistimiento tácito frente a la asignación realizada mediante el presente acto administrativo y la Caja de la Vivienda Popular procederá a su declaratoria.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\n\nARTÍCULO TERCERO: ', bold: true, style: 'texto' },
                    { text: 'Ordenar a la Subdirección Financiera realizar el registro presupuestal del presente acto administrativo con observancia del procedimiento establecido según fuente de financiación y girar la suma asignada a la cuenta de ahorro programado de la cual es titular el (la) señor(a) ', style: 'texto' },
                    { text: nombre1 + ', ', bold: true, style: 'texto' },
                    { text: 'identificado(a) con la C.C. No. ', style: 'texto' },
                    { text: cedula1 + ', ', bold: true, style: 'texto' },
                    { text: 'ó girar sin situación de fondos y constituir el depósito a favor de terceros, con el fin de realizar los giros de conformidad con lo pactado en la promesa de compraventa, opción de compra y/o contrato de vinculación como beneficiario de área en el Fideicomiso, previa verificación de la entrega real y material de la ocupación a la Caja de la Vivienda Popular.', style: 'texto' }

                ]
            },

            {
                text: [
                    { text: '\nPARAGRAFO PRIMERO:  ', bold: true, style: 'texto' },
                    { text: 'Para el desembolso de los recursos que se encuentran en depósito a favor de terceros o en la cuenta de ahorro programado, una vez los beneficiarios hayan seleccionado vivienda de reposición y, la Entidad la haya viabilizado, la Directora Técnica de Reasentamientos previa autorización de los beneficiarios, solicitará a la Subdirección Financiera y/o a la entidad financiera el giro ó la movilización de los recursos, de conformidad con lo estipulado en la forma de pago de la promesa de compraventa, opción de compra de la vivienda de reposición y/o contrato de vinculación como beneficiario de área en el fideicomiso.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nPARAGRAFO SEGUNDO: ', bold: true, style: 'texto' },
                    { text: 'Para el desembolso de los recursos destinados para gastos de escrituración e impuesto de registro y beneficencia de la alternativa habitacional seleccionada en el Proyecto denominado ', style: 'texto' },
                    { text: '“CIUDADELA EL PORVENIR MZ 52 ETAPA VII A”, ',italics:true, bold: true, style: 'texto' },
                    { text: 'ubicado en la Ciudad de Bogotá D.C., por valor de ', style: 'texto' },
                    { text: 'UN MILLÓN CUATROCIENTOS MIL PESOS ($1.400.000) MONEDA LEGAL,', bold: true, style: 'texto' },
                    { text: ' los mismos serán reembolsados a la constructora CG Construcciones SAS, identificada con el NIT No. 800.051.984-2, a la cuenta que para tal efecto se aporte, contra presentación ante la Caja de la Vivienda Popular de la escritura pública de compraventa debidamente registrada a nombre del hogar y acta de entrega de la solución habitacional.', style: 'texto' }

                ]
            },

            {
                text: [
                    { text: '\n\nARTÍCULO CUARTO: ', bold: true, style: 'texto' },
                    { text: 'Notificar el contenido de la presente Resolución a él (la) beneficiario (a) del valor del instrumento financiero, de conformidad con el   artículo 66 y siguientes de la Ley 1437 de 2011 ', style: 'texto' },
                    { text: '“Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo”. ', italics:true, style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\n\nARTÍCULO QUINTO: ENTREGA DE LA OCUPACIÓN, ', bold: true, style: 'texto' },
                    { text: 'una vez notificado el presente acto administrativo, el hogar tendrá como obligación la entrega real y material de la ocupación en un término no superior a quince (15) días calendario.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\nPARÁGRAFO.  ', bold: true, style: 'texto' },
                    { text: 'En caso de no adelantarse la citada entrega, el hogar estará sujeto a las actuaciones judiciales que, en el marco de la recuperación de los predios fiscales, adelante la entidad competente.', style: 'texto' }
                ]
            },

            {
                text: [
                    { text: '\n\nARTÍCULO SEXTO: ', bold: true, style: 'texto' },
                    { text: 'Contra el presente acto administrativo procede el recurso de reposición, de conformidad con lo dispuesto en el artículo 76 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo, dentro de los diez (10) días siguientes a la notificación personal, o a la notificación por aviso, según sea el caso.', style: 'texto' }
                ]
            },


            {
                text: [
                    { text: '\n\nARTÍCULO SÉPTIMO: ', bold: true, style: 'texto' },
                    { text: 'El presente acto administrativo rige a partir de la fecha de ejecutoria.', style: 'texto' }
                ]
            },

            { text: '\n\nCOMUNÍQUESE, NOTIFÍQUESE Y CÚMPLASE', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: '\nDada en Bogotá D.C.,  el día ', style: 'texto' },
            { text: '\n\n ISIS PAOLA DÍAZ MUÑIZ', style: 'textobold', fontSize: 12, alignment: 'center' },
            { text: 'Directora Técnica de Reasentamientos \n\n\n\n', style: 'texto', fontSize: 12, alignment: 'center' },
            {
                table: {
                    widths: [50, '*'],
                    body: [
                        [{ text: 'Proyectó:', fontSize: 7 }, { text: elaboro + ' – Dirección de Reasentamientos.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: aprobo + ' – Dirección de Reasentamientos.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Yamile Patricia Castiblanco Venegas - Profesional – Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Nelson Villarraga Quijano - Contrato No. 146 de 2019 - Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: aprob_juridica + ' – Dirección Jurídica.', fontSize: 7 }],
                        [{ text: 'Revisó:', fontSize: 7 }, { text: 'Martha Patricia Ortiz - Contrato No. 288 de 2019 - Dirección Jurídica.', fontSize: 7 }],

                        [{ text: 'Aprobó C.L.:', fontSize: 7 }, { text: 'Oscar Eduardo Pinilla Pinilla - Director Jurídico', fontSize: 7 }],
                        [{ text: '\nArchivado en:', fontSize: 7 }, { text: '\nSubserie Resolución Administrativa - Dirección General.', fontSize: 7 }]
                    ]
                },
                layout: 'noBorders'
            },
            { text: 'ID. ' + identificador, style: 'texto', fontSize: 7, alignment: 'right' }



        ],

        styles: {
            sub1: {
                bold: true
            },
            superMargin: {
                margin: [20, 0, 0, 0],
                fontSize: 11,
                alignment: 'justify'
            },
            texto: {
                fontSize: 10,
                alignment: 'justify'
            },
            texto1: {
                fontSize: 10,
                alignment: 'justify'
            },
            textobold: {
                fontSize: 10,
                alignment: 'justify',
                bold: true
            },
            subtitulo: {
                fontSize: 10,
                alignment: 'center',
                background: 'black',
                color: 'white',
                bold: true
            },
            titulo: {
                fontSize: 11.5,
                alignment: 'center',
                bold: true
            }
        }, defaultStyle: {
            font: 'Arial'
        }

    };
    return docDefinition;



}










var numeroALetras = (function () {

    // Código basado en https://gist.github.com/alfchee/e563340276f89b22042a
    function Unidades(num) {

        switch (num) {
            case 1: return 'UN';
            case 2: return 'DOS';
            case 3: return 'TRES';
            case 4: return 'CUATRO';
            case 5: return 'CINCO';
            case 6: return 'SEIS';
            case 7: return 'SIETE';
            case 8: return 'OCHO';
            case 9: return 'NUEVE';
        }

        return '';
    }//Unidades()

    function Decenas(num) {

        let decena = Math.floor(num / 10);
        let unidad = num - (decena * 10);

        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0: return 'DIEZ';
                    case 1: return 'ONCE';
                    case 2: return 'DOCE';
                    case 3: return 'TRECE';
                    case 4: return 'CATORCE';
                    case 5: return 'QUINCE';
                    default: return 'DIECI' + Unidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0: return 'VEINTE';
                    default: return 'VEINTI' + Unidades(unidad);
                }
            case 3: return DecenasY('TREINTA', unidad);
            case 4: return DecenasY('CUARENTA', unidad);
            case 5: return DecenasY('CINCUENTA', unidad);
            case 6: return DecenasY('SESENTA', unidad);
            case 7: return DecenasY('SETENTA', unidad);
            case 8: return DecenasY('OCHENTA', unidad);
            case 9: return DecenasY('NOVENTA', unidad);
            case 0: return Unidades(unidad);
        }
    }//Unidades()

    function DecenasY(strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + ' Y ' + Unidades(numUnidades)

        return strSin;
    }//DecenasY()

    function Centenas(num) {
        let centenas = Math.floor(num / 100);
        let decenas = num - (centenas * 100);

        switch (centenas) {
            case 1:
                if (decenas > 0)
                    return 'CIENTO ' + Decenas(decenas);
                return 'CIEN';
            case 2: return 'DOSCIENTOS ' + Decenas(decenas);
            case 3: return 'TRESCIENTOS ' + Decenas(decenas);
            case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
            case 5: return 'QUINIENTOS ' + Decenas(decenas);
            case 6: return 'SEISCIENTOS ' + Decenas(decenas);
            case 7: return 'SETECIENTOS ' + Decenas(decenas);
            case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
            case 9: return 'NOVECIENTOS ' + Decenas(decenas);
        }

        return Decenas(decenas);
    }//Centenas()

    function Seccion(num, divisor, strSingular, strPlural) {
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let letras = '';

        if (cientos > 0)
            if (cientos > 1)
                letras = Centenas(cientos) + ' ' + strPlural;
            else
                letras = strSingular;

        if (resto > 0)
            letras += '';

        return letras;
    }//Seccion()

    function Miles(num) {
        let divisor = 1000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
        let strCentenas = Centenas(resto);

        if (strMiles == '')
            return strCentenas;

        return strMiles + ' ' + strCentenas;
    }//Miles()

    function Millones(num) {
        let divisor = 1000000;
        let cientos = Math.floor(num / divisor)
        let resto = num - (cientos * divisor)

        let strMillones = Seccion(num, divisor, millon(num, true), millon(num, false));
        let strMiles = Miles(resto);

        if (strMillones == '')
            return strMiles;

        return strMillones + ' ' + strMiles;
    }//Millones()

    function millon(num, singular) {
        var letraMillon = '';
        if (singular == true)
            letraMillon = 'UN MILLON';
        else
            letraMillon = 'MILLONES'
        if (num % 1000000 == 0)
            letraMillon = letraMillon + ' DE'
        return letraMillon;
    }

    return function NumeroALetras(num, currency) {
        currency = currency || {};
        let data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || 'PESOS',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
            letrasMonedaSingular: currency.singular || 'PESO', //'PESO', 'Dólar', 'Bolivar', 'etc'
            letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS',
            letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO'
        };

        if (data.centavos > 0) {
            data.letrasCentavos = 'CON ' + (function () {
                if (data.centavos == 1)
                    return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
                else
                    return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
            })();
        };

        if (data.enteros == 0)
            return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        if (data.enteros == 1)
            return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
        else
            return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    };

})();

