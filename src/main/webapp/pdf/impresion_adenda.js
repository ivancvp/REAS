function imp_adenda(elaboro,aprobo){

var imprimir="Documento preliminar - NO OFICIAL";

if(aprobo.length>0){
  imprimir="";  
}

var dat=get_datos_estudio($('#id_adenda').val(),'255');

var data=dat[0];

var procede='';

if($('#est_procede').val()==='NEGATIVO'){
    procede='No';
}
if($('#est_procede').val()==='POSITIVO'){
    procede='Si';
}


pdfMake.fonts = {
    // Default font should still be available
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Bold.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-Italic.ttf'
    },
    // Make sure you define all 4 components - normal, bold, italics, bolditalics - (even if they all point to the same font file)
    Sans: {
        normal: 'Sans-Medium.ttf',
        bold: 'Sans-Bold.ttf',
        italics: 'Sans-Medium.ttf',
        bolditalics: 'Sans-Medium.ttf'
    }
};


var docDefinition = {
pageMargins: [60, 90, 60, 60],



header: 


function(currentPage, pageCount) {
        return {
            
margin: [60, 25],
    columns: [
        {      
        table: {
             widths: [60,'*',60,60],
                body: [
                        [{rowSpan:3,
                    image:'data:image/jpeg;base64,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',
                    width: 55
                         },{text:'\n ADENDA AL ESTUDIO DE DOCUMENTOS APORTADOS \n ',rowSpan:3,alignment: 'center',bold:true},{text:'Código: 208-REAS-Ft-47',colSpan:2,fontSize: 8,alignment: 'center'},{}],
                     ['','',{text:'Versión: 2',fontSize: 8,alignment: 'center'},{text:'Pág. '+currentPage.toString() + ' de ' + pageCount,fontSize: 8,alignment: 'center'}],
                     ['','',{text:'Vigente desde: 05-07-2018',colSpan:2,fontSize: 8,alignment: 'center'},{}]

                        ]
                }
        },
    ],
        };
},

   watermark: {text: imprimir, color: 'gray', opacity: 0.3, bold: true, italics: false}, 
   content: [
    
       {      

        table: {
             widths: [200,'*'],
                body: [                     
                        [{text:'ESTUDIO DE DOCUMENTOS DE FECHA:',style:'textobold',fontSize: 10},{text:moment(data["fecha_est"]).format("DD/MM/YYYY"),fontSize: 10}],
                        [{text:'DOCUMENTACIÓN APORTADA POR:',style:'textobold',fontSize: 10},{text:(data["Nombre 1"]?data["Nombre 1"]:''),fontSize: 10}],
                        [{text:'IDENTIFICADOR',style:'textobold',fontSize: 10},{text:data.IDENTIFICADOR,fontSize: 10}]
                      ]
                }
        }, 
   
    { text: '\n IDENTIFICACIÓN DEL INMUEBLE \n ', fontSize: 11,alignment: 'center',style:'textobold'},
       {      

        table: {
             widths: ['*'],
                body: [                     
                        [{text:'Lote de terreno, ubicado en Bogotá, D.C. en la Localidad '+(data["Localidad"]?data["Localidad"]:'')+', Barrio '+(data["Barrio"]?data["Barrio"]:'')+', Dirección: '+(data["Dirección"]?data["Dirección"]:'')+', Manzana '+(data["MZ"]?data["MZ"]:'')+', Lote '+(data["LT"]?data["LT"]:'')+', Concepto '+
                                'Técnico '+(data["Concepto de Ingreso"]?data["Concepto de Ingreso"]:'')+' del Fondo de Prevención y atención de Emergencias - FOPAE anteriormente DPAE. De acuerdo'+
                                'a los documentos aportados se encuentra comprendido dentro de los siguientes linderos:',style:'texto1',fontSize: 10}]
                      ]
                }
        },
       
 
    { text: '\n LINDEROS PARTICULARES \n', fontSize: 11,style:'textobold'},
       {      

        table: {
             widths: [100,'*'],
                body: [                     
                        [{text:'NORTE:',fontSize: 10,bold:true},{text:(data["lin_nor_est"]?data["lin_nor_est"]:''),fontSize: 10}],
                        [{text:'SUR:',fontSize: 10,bold:true},{text:(data["lin_sur_est"]?data["lin_sur_est"]:''),fontSize: 10}],
                        [{text:'ORIENTE:',fontSize: 10,bold:true},{text:(data["lin_ori_est"]?data["lin_ori_est"]:''),fontSize: 10}],
                        [{text:'OCCIDENTE:',fontSize: 10,bold:true},{text:(data["lin_occ_est"]?data["lin_occ_est"]:''),fontSize: 10}]
                      ]
                }
        },
        { text: '\n '},
       {      

        table: {
             widths: ['*'],
                body: [                     
                        [{
                            text: [
                                    {text:'Los linderos fueron tomados de: ',bold:true,fontSize: 10},
                                    {text:$('#fuente_linderos').val(),alignment:'justify',fontSize: 10}
                            ]
                        }]
                      ]
                }
        },
    { text: '\n OBSERVACIONES Y RECOMENDACIONES JURÍDICAS \n ',alignment: 'center', fontSize: 11,style:'textobold'},
       {      

        table: {
             widths: ['*'],
                body: [                     
                        [{text:$('#motivos_adenda').val(),alignment:'justify',fontSize: 10}]
                      ]
                }
        },
    { text: '\n CONCLUSIONES \n ', fontSize: 11,alignment: 'center',style:'textobold'},
       {      

        table: {
             widths: ['*'],
                body: [                     
                        [{text:$('#conclusion_adenda').val(),alignment:'justify',fontSize: 10}]
                      ]
                }
        },
        { text: '\n '},
       {      

        table: {
             widths: [150,'*'], 
                body: [                     
                        [{text:'Adenda al Estudio de documentación:',fontSize: 10},{text:$('#est_procede').val(),fontSize: 10}],
                        [{text:'Procede:',fontSize: 10},{text:procede,fontSize: 10}],
                        [{text:'Abogado Responsable:',fontSize: 10},{text:elaboro,fontSize: 10}],
                        [{text:'Revisó:',fontSize: 10},{text:aprobo,fontSize: 10}],
                        [{text:'Identificador:',fontSize: 10},{text:data.IDENTIFICADOR,fontSize: 10}]
                      ]
                }
        },
        { text: '\n Fecha de la adenda: '+$('#fecha_adenda').val(), fontSize: 8,alignment: 'right'}
        
        
        
        

   ],

   	styles: {
		sub1: {
			bold:true
		},
		superMargin: {
			margin: [20, 0, 0, 0],
			fontSize: 11,
			alignment:'justify'
		},
                texto: {
			fontSize: 11,
			alignment:'justify'
		},
                texto1: {
			fontSize: 10,
			alignment:'justify'
		},
                textobold: {
			fontSize: 10,
			alignment:'justify',
                        bold:true
		},
                subtitulo: {
			fontSize: 10,
			alignment:'center',
                        background:'black',
                        color:'white',
                        bold:true
		},
                titulo:{
                        fontSize: 11.5,
                        alignment: 'center', 
                        bold:true
                }
	}, defaultStyle: {
    font: 'Sans'
  }

 };
return docDefinition;  
    
    
    
}
