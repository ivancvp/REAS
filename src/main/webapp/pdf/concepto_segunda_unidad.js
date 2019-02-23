
function concepto_social(identificador) {
    if (identificador) {
        $ficha = {};

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
        var docDefinition = {
            pageSize: 'LETTER',
            pageOrientation: 'portrait',
            pageMargins: [10, 10, 10, 10],
            content: [],
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
function concepto_tecnico(identificador) {
    if (identificador) {
        $ficha = {};

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
        var docDefinition = {
            pageSize: 'LETTER',
            pageOrientation: 'portrait',
            pageMargins: [10, 10, 10, 10],
            content: [],
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
function concepto_juridico(identificador) {
    if (identificador) {
        $ficha = {};

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
        var docDefinition = {
            pageSize: 'LETTER',
            pageOrientation: 'portrait',
            pageMargins: [10, 10, 10, 10],
            content: [],
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

