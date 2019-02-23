function caracoli_fotos(identificador){


    var contenido =
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title">Formulario de: Caracolí</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<h1 style="color:#148F77;font-size: 20px;">Fotografias proceso de Caracolí <i class="fas fa-camera"></i> </h1>'+
                
                '<div class="row"> '+ 
                '<div class="col-md-12"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Número de ocupación SDH</label> '+
                           '<input type="text" class="form-control data" style="text-transform: uppercase" id="num_sdh"  style="background:white" disabled placeholder="Número de ocupación" > '+
                       '</div> '+
                '</div> '+
                '            </div> '+
       
                '            <div class="row"> '+  
                '                   <div class="col-md-6"> '+
                '                     <p>Por favor cargue una fotografía (Formato png/jpg) de la fachada:</p>'+  
                '                     <div class="form-group"> '+
                '                       <input id="input-b1" name="input-b1" type="file" class="file upd" accept="image/x-png,image/gif,image/jpeg"> '+ 
                '                     </div> '+
                '                       <div id="alerta_input-b1" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
                '                       </div> '+ 
                '                    </div> '+

                '                   <div class="col-md-6"> '+
                '                     <p>Por favor cargue una fotografía (Formato png/jpg) del soporte de notificación (Stiker Alcaldía):</p>'+  
                '                     <div class="form-group"> '+
                '                       <input id="input-b2" name="input-b2" type="file" class="file upd" accept="image/x-png,image/gif,image/jpeg"> '+ 
                '                     </div> '+
                '                       <div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
                '                       </div> '+ 
                '                    </div> '+
                '            </div> '+
                
                '            <div class="row"> '+  
                '                   <div class="col-md-12"> '+
                '                     <p>Por favor cargue una fotografía (Formato png/jpg) de la vista interna:</p>'+  
                '                     <div class="form-group"> '+
                '                       <input id="input-b3" name="input-b3" type="file" class="file upd" accept="image/x-png,image/gif,image/jpeg"> '+ 
                '                     </div> '+
                '                       <div id="alerta_input-b3" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
                '                       </div> '+ 
                '                    </div> '+
                '            </div> '+
                '<div class="row"> '+            
                    '<div class="col-md-12">  '+            
                        '<div class="form-group">'+
                            '<label for="comment">Observaciones</label>'+
                            '<textarea class="form-control data" rows="6" style="text-transform: uppercase" id="observaciones"></textarea>'+
                        '</div>'+
                    '</div> '+  
                '</div> '+ 
                '<div class="row"> '+            
                    '<div class="col-md-12">  '+                     
                        '<button type="button" class="btn btn-default" id="save_foto"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
                    '</div> '+  
                '</div> '+ 
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
 
 
 function logica_caracoli_fotos(identificador){

        $datos = {
          op: 'get_info_caracoli_fotos',
          num_sdh: identificador
      };
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

           $.each( response[0], function( key, value ) {

                if($('#'+key).is("input,textarea") ){
                    $('#'+key).val(value)
                }
                
              });
           
        }, error: function (a) {
            
        }
    });
 
     

    
$('#save_foto').click(function(){


var obj = {};
obj['op'] = "save_info_caracoli_fotos";
obj['usuario_nombre'] = usuario_nombre;

$('.data').each(function(index) {
    
    var valor=$(this).val().toUpperCase().trim().replace(/\s+/g, " ").replace(/,/g, "");
    obj[$(this).prop('id')] = valor;

});
console.log(obj)
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: obj,
        dataType: "json",
        async: false,
        success: function (response) {
            alertify.success("Datos almacenados satisfactoriamente");                 
        },
        error: function (response) {
            alertify.error("Ocurrió un error");
        }
        });



    });
    
    
function get_foto(descripcion){
        
var datos = {};
var url_preview='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "get_foto_Caracoli",
            identificador: identificador,
            descripcion:descripcion
        },
        dataType: "json",
        async: false,
        success: function (response) {

            if (response)
            {
                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        var resultado = response[i];

                            datos["1"] = (resultado["id"] ? resultado["id"] : '');
                            url_preview='ObtenerArchivo?ID='+datos["1"];
                            console.log(url_preview)
                    }

                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });
      return url_preview;  
    }
get_foto('Fachada Caracoli');



    contenedor_fotos(1,'Fachada Caracoli',get_foto('Fachada Caracoli'),'4');
    contenedor_fotos(2,'Soporte de Notificacion Caracoli',get_foto('Soporte de Notificacion Caracoli'),'5')
    contenedor_fotos(3,'Vista Interna Caracoli',get_foto('Vista Interna Caracoli'),'6');

    
    function contenedor_fotos(id,descripcion,url,tipo_documento){
        
        
    $('#input-b'+id).fileinput({
        theme: 'fa',
        language: 'es',
        initialPreview: [
            url
        ],
        initialPreviewFileType: 'image', 
            initialPreviewConfig: [ 
            {caption: "fotográfia",size:100, key: 1,id:1, downloadUrl:url}
        ],
        uploadExtraData: function (previewId, index) {  // callback example        
                var out = {
                    numFolios: 1,
                    descripcion: descripcion,
                    identificador: identificador,
                    tipo_documento: tipo_documento,
                    thumbnail: ''
                };
                return out;
            },    
        deleteExtraData: function (previewId, index) {

            var out = {
                op: 'delete_img_caracoli',
                identificador: identificador,
                descripcion:descripcion
            };
            return out;
        } ,   
        uploadUrl: 'FileUploader',
        deleteUrl: 'GestionConsultas',
        allowedFileExtensions: ["jpg", "png", "gif"],
        initialPreviewAsData: true,
        showUpload: true,
        overwriteInitial: true,
        browseOnZoneClick: true
});
    
 $('#input-b'+id).on("filepredelete", function (event, key, jqXHR, data) {
        var abort = true;
        if (confirm("Esta seguro de borrar la imágen?")) {
            abort = false;
        }
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });
       
        
    } 

     
     
     
     
    
  
 }
 