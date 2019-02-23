 function crear_proyecto(){
     var contenido=
            '<div class="modal-header">'+
                '<h4 class="modal-title">Estado Proceso de Selección de Vivienda</h4>'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
            '</div>'+
            '<div class="modal-body">'+
                '<div class="form-group">'+
                    '<h4>1 Información Basica</h4>'+                    
                    '<button type="button" class="btn btn-success" onclick="ver_detalle_loretta(1)">Ver</button>'+
                '</div>'+
             '</div>'+
             
            '<div class="modal-footer">'+
              '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
            '</div>';
   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');
   

 }