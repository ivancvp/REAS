$('#crea_act').on('click', function(e) {
   resultado = res[0];
$('#modal_act').modal('toggle');

    var contenido=
            
    '<div class="modal-header">'+
         ' <button type="button" class="close" data-dismiss="modal">&times;</button>'+
          '<h4 class="modal-title">'+resultado["desc_actividad"]+'</h4>'+
        '</div>'+        
        '<div class="modal-body">'+
          '<h3>Identificador: '+resultado["identificador"]+'</h3>'+
          '<p><b>Observaciones:</b> '+resultado["observacion_inicial"]+'<p/>'+
          '<p><b>Fecha Limite:</b> '+resultado["tiempo_limite"]+' dias <p/>'+
          '<button type="button" class="btn btn-primary" id="ver_form">Ver Formulario</button>'+
          '<button type="button" class="btn btn-danger">Regresar Actividad</button>'+
       ' </div>'+
        '<div class="modal-footer">'+
          '<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>'+
        '</div>';

   $('.modal-content').css('height', '80%');
   $('.modal-body').css('max-height', 'calc(100% - 120px)');
   $('#act').empty();
   $('#act').append(contenido);
   $('#modal_act').modal('show'); 
   
   
   $('#ver_form').on('click', function(e) {
  
    var contenido=
            '<div class="modal-header">'+
              '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
              '<h4 class="modal-title">Formulario de: '+resultado["desc_actividad"]+'</h4>'+
            '</div>'+
            '<div class="modal-body">'+
            '<iframe src="est_doc/lista_chequeo.html" height="600px" width="800px" frameborder="0"></iframe>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
            '</div>';
   $('.modal-content').css('height', '80%');
   $('.modal-body').css('max-height', 'calc(100% - 120px)');
   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');
            
});
   
   
   
   
   
   
   
});
