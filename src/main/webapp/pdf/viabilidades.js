('#prueba').on('click', function () {
    console.log('prueba evento');
    pdfTecnico();
});

function pdfSocial(identificador) {
    var docDefinition = {
        pageSize: 'LETTER',
        pageOrientation: 'portrait',       
        content: [

        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            anotherStyle: {
                italic: true,
                alignment: 'right'
            }
        }
    };
    pdfMake.createPdf(docDefinition).download('optionalName.pdf');
}
function pdfTecnico(identificador) {
    var docDefinition = {        
        pageSize: 'LETTER',
        pageOrientation: 'portrait',       
        content: [

        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            anotherStyle: {
                italic: true,
                alignment: 'right'
            }
        }
    };
    pdfMake.createPdf(docDefinition).download('optionalName.pdf');
}