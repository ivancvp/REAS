function caracoli_creacion_proceso(identificador){


    var contenido =
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title">Formulario de: Creación del proceso caracolí</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                
            '<div class="row"> '+    
                '<div class="col-md-12"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Número de ocupación SDH</label> '+
                           '<input type="text" class="form-control data" style="text-transform: uppercase" id="num_sdh"  placeholder="Número de ocupación" > '+
                       '</div> '+
                   '</div> '+
                '</div> '+   
                
            '<div class="row"> '+ 
            '  <div class="col-md-12">  '+
                    '<button type="button" class="btn btn-success" id="save_id"><i class="fas fa-save"></i> Crear proceso</button>'+
                '</div>'+  
            '</div>'+   
                
                
            
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fas fa-times"></i> Cerrar</button>' +
                '</div>';

    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');
        

 }
 
 
 function logica_caracoli_creacion_proceso(identificador){

    
    $("#save_id").click(function () {
        
                
        var num_sdh=$('#num_sdh').val().trim().replace(/\s+/g, " ").toUpperCase();
        
        if(num_sdh===""){
            alertify.error("Ingrese un valor válido");
        }else{
                    var seguir=false;
        $datos = {
                op: 'verificar_id_caracoli',
                num_sdh: num_sdh
            };
      
            $.ajax({
              type: "POST",
              url: "GestionConsultas",
              data: $datos,
              dataType: "json",
              async: false,
              success: function (response) {

              if(response.length>0){
                  seguir=true
              }

              }, error: function (a) {

              }
          });
          if(seguir){
              alertify.error("El número de ocupación SDH ya esta registrado en el sistema");

          }else{
              $datos = {
                op: 'insertar_id_caracoli',
                num_sdh: num_sdh,
                usuario_nombre:usuario_nombre
            };
      
            $.ajax({
              type: "POST",
              url: "GestionConsultas",
              data: $datos,
              dataType: "json",
              async: false,
              success: function (response) {
                  $('#modal_form').modal('toggle');
                  alertify.success("Número de ocupación SDH almacenado correctamente");
              }, error: function (a) {

              }
          });
          }
        }
        

          
                
         /*
        $datos = {
                op: 'save_fam_caracoli',
                num_sdh: 1,
                usuario_nombre:usuario_nombre
            };
      
            $.ajax({
              type: "POST",
              url: "GestionConsultas",
              data: $datos,
              dataType: "json",
              async: false,
              success: function (response) {



              }, error: function (a) {

              }
          });
        */
    });
    
    
    
  
 }
 