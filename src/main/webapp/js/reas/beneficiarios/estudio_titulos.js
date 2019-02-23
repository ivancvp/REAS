
$('#etitulos').on('click', function () {
    var identificador = document.getElementById("identificador").innerHTML;

    
    var contenido=
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
        '<h4 class="modal-title">Formulario de: Estudios de documentos</h4>' +
        '</div>' +

        '  <div class="modal-body"> '+
        '<div class="row"> '+
            '<div class="col-md-12"> '+
            '<h2 style="color:#2E9AFE">Estudios de documentos para el identificador:<b> '+identificador+'</b></h2>'+
            '<p>En el siguiente módulo usted podrá consultar cada uno de los estudios de documentos para el identificador <b>'+identificador+'</b>, como las adendas.</p>'+

            '</div>'+
        '</div>'+

        '<div class="row"> '+
            '<div class="col-md-12" id="div_table"> '+
            '</div>'+
        '</div>'+
        
        
        '</div>'+
   
        '<div class="modal-footer">' +
        '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
        '</div>';
    
    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show'); 
    
 


        $datos={
        op:'get_est_doc_tipo',
        identificador:identificador
    };
    
    var resultado;
    var cont=' ';
    $.ajax({
     type:"POST",
     url:"GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
           resultado=response;
           
            var i;
       
            if(response.length){
                $('#div_table').append(
                '<table class="table table-bordered" id="tabla1">'+
                  '<thead>'+
                    '<tr>'+
                      '<th >Tipo de estudio</th>'+
                      '<th >Procede</th>'+
                      '<th >Ver</th>'+
                      '<th >Notificación</th>'+
                      '<th >Adenda</th>'+
                      '<th >Acta de cierre sin reasentamiento</th>'+
                    '</tr>'+
                  '</thead>'+
                  '<tbody>'+
                    '<tr></tr>'+
                  '</tbody>'+
                '</table>');             
            }else{
      
    $datos1={
        op:'get_datos_usuario_encargado_est_documentos',
        identificador:identificador
    };            
    
             
            $.ajax({
                  type: "POST",
                  url: "GestionConsultas",
                  data: $datos1,
                  dataType: "json",
                  async: false,
                  success: function (response) {
                     
                     
                     if(response.length>0){
                         $('#div_table').append(
                            '<h3 style="color:#16A085">Información.</h3>'+     
                            '<p>El usuario: <b>'+response[0].usuario_nombre+'</b>, tiene a cargo el estudio de documentos, asignado en la fecha: <b>'+response[0].fecha_creacion+'</b></p>'+
                            '<p><b>Correo de contacto: </b>'+response[0].usuario_correo+'</p>'
                          );
                     }else{
                         $('#div_table').append(
                            '<h4>Identificador sin estudio de documentos.</h4>'     
                          ); 
                     }
                     
                  }, error: function (a) {
                      
                  }


              }); 
 
                
             }
            
   
            
            for (i = 0; i < response.length; i++) { 
                if(response[i].tipo_estudio==="255"){
                    if(response[i].consecutivo===1){
                        $('#tabla1 tr:last').after('<tr><th>255</th><td>'+(resultado[0].procede?resultado[0].procede:'')+'</td><td><button type="button" class="btn btn-primary outline" id="ver_255"><i class="fas fa-search-plus"></i></button></td><td><button type="button" class="btn btn-primary outline"><i class="far fa-file-alt"></i></button></td><td><button type="button" class="btn btn-primary outline" id="ver_adenda_255" ><i class="fas fa-plus"></i></button></td><td><button type="button" class="btn btn-primary outline" id="ver_acta_cierre"><i class="far fa-calendar-times"></i></button></td></tr>');
                    }
                    
                }
                if(response[i].tipo_estudio==="457"){
                    if(response[i].consecutivo===1){
                        $('#tabla1 tr:last').after('<tr><th>457</th><td>'+(resultado[0].procede?resultado[0].procede:'')+'</td><td><button type="button" class="btn btn-primary outline" id="ver_457"><i class="fas fa-search-plus"></i></button></td><td><button type="button" class="btn btn-primary outline"><i class="far fa-file-alt"></i></button></td><td><button type="button" class="btn btn-primary outline" id="ver_adenda_457" ><i class="fas fa-plus"></i></button></td><td><button type="button" class="btn btn-primary outline" id="ver_acta_cierre"><i class="far fa-calendar-times"></i></button></td></tr>');
                    }
                    
                }
                if(response[i].tipo_estudio==="511"){
                    if(response[i].consecutivo===1){
                        $('#tabla1 tr:last').after('<tr><th>511</th><td>'+(resultado[i].procede?resultado[i].procede:'')+'</td><td><button type="button" class="btn btn-primary outline" id="ver_511"><i class="fas fa-search-plus"></i></button></td><td><button type="button" class="btn btn-primary outline"><i class="far fa-file-alt"></i></button></td><td><button type="button" class="btn btn-primary outline" id="ver_adenda_511"><i class="fas fa-plus"></i></button></td><td><button type="button" class="btn btn-primary outline" ><i class="far fa-calendar-times"></i></button></td></tr>');
                    }
                    
                }
            }
            
            
           
        }
     
     
    });
    
    
    $("#ver_255").click(function(){
        ver_estado_estudio(identificador,'255');
    });
    $("#ver_457").click(function(){
        ver_estado_estudio(identificador,'457');
    });
    
    $("#ver_511").click(function(){
        ver_estado_estudio(identificador,'511');
    });
    
    $("#ver_adenda_255").click(function(){
        hola({formulario:21,index:identificador,modo:4});
    });
    
    $("#ver_adenda_511").click(function(){
        hola({formulario:26,index:identificador,modo:4});
    });
    
    $('#ver_acta_cierre').click(function(){
        hola({formulario:19,index:identificador,modo:4});
    });

    
    
});