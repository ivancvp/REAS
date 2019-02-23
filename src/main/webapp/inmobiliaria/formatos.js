function modal_formato(){
    
    var contenido= 
            '<div class="modal-header">'+
                '<h4 class="modal-title">Formatos</h4>'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
            '</div>'+
            '<div class="modal-body">'+ 
            ' <h1>Formatos de Selección de Vivienda</h1>'+
            ' <p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
            '  <hr /> '+
                ' <div class="row"> '+
                '    <div class="form-group col-sm-3">'+
                '     <label >Identificador</label>'+
                '    <input type="text" class="form-control" disabled value="'+$('#identificador').text()+'"> '+
                '   </div>'+
                '    <div class="form-group col-sm-3">'+
                '     <label >Fecha</label>'+
                '     <input type="date" class="form-control" id="fecha_formato_inm" >'+
                '   </div>'+
                '    <div class="form-group col-sm-4">'+
                '     <label >Correo</label>'+
                '     <input type="email" class="form-control" id="email_inm" >'+
                '   </div>'+
            ' </div>  '+
                '<div class="row">'+ 
                '    <div class="form-group col-sm-2">'+
                    '<button type="button" class="btn btn-primary" id="b_proy_nuevo" >Proyecto Propio</button>'+
            '   </div>'+              
            '    <div class="form-group col-sm-2">'+
                    '<button type="button" class="btn btn-primary" id="b_proy_usado" >Vivienda Usada</button>'+
            '   </div>'+              
            '    <div class="form-group col-sm-2">'+
                    '<button type="button" class="btn btn-primary" onclick="">Proyecto Privado</button>'+
               '   </div>'+           
                '</div>'+
             '<iframe id="pdfR" style="display:none; width:100%; height: 500px"  > </ iframe>'+   
             '</div>'+
             
            '<div class="modal-footer">'+
              '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
            '</div>';
 
    

   
   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');
    
var d = new Date();


 $('#fecha_formato_inm').value(d.toISOString().substr(0, 10));

 $('#b_proy_nuevo').on('click',function () {
        
       
            var doc = form_proy_nuevo($('#identificador').text());
            $('#pdfR').css('display','inline');
            pdfMake.createPdf(doc).getDataUrl(function (outDoc) {
                document.getElementById('pdfR').src = outDoc;
            });

    });
    $('#b_proy_usado').on('click',function () {
        
       
            var doc = form_proy_usado($('#identificador').text());
            $('#pdfR').css('display','inline');
            pdfMake.createPdf(doc).getDataUrl(function (outDoc) {
                document.getElementById('pdfR').src = outDoc;
            });

    });




}