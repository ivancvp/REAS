function gen_acta_entrega_vereditas(){
    
    var contenido =    
 '<h2 id="titulo" style="color:#2E9AFE">Cargue de Acta de Entrega de la Ocupación</h2>'+
 '<p>En el siguiente modulo usted podrá subir el documento pdf escaneado correspondiente al acta de entrega de la ocupación.</p>'+
            '<div class="row"> '+
              '<div class="col-md-6"> '+
                  '<div class="form-group"> '+
                      '<label for="identificador" class="control-label">Identificador</label> '+
                      '<input type="text" class="form-control" id="id_acta_entrega" disabled> '+
                  '</div> '+
              '</div> '+
                '<div class="col-md-6"> '+
                    '<div class="form-group"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha de acta de entrega</label> '+
                            ' <small class="text-muted">Formato válido (dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container "><input id="fecha_acta" type="text" class="form-control upd obligatorio disponible fecha_validate" placeholder="Fecha Acta de Entrega"></div>'+
                            '   </div> '+
                    '</div> '+
                '</div> '+
            '</div> '+  
                '<div class="row"> '+
                    '<div class="col-md-8"> '+
                        '<div class="form-group"> '+
                                '<label for="ben1" class="control-label">Beneficiario Principal</label> '+
                            '<input type="text" class="form-control" id="ben1" placeholder="Beneficiario Principal" required disabled> '+
                            '  <label class="error" style="display:none" id="error_ben1">Campo Obligatorio, Por favor actualizar el nombre en la Ficha Técnica. (Recuerde que debe ser el titular del estudio de documentos)</label>'+
                        '</div> '+
                    '</div> '+
                    '<div class="col-md-4"> '+
                        '<div class="form-group"> '+
                                '<label for="ben1" class="control-label">Cédula</label> '+
                            '<input type="text" class="form-control" id="ced" placeholder="Cédula" required disabled> '+
                            '  <label class="error" style="display:none" id="error_ced">Campo Obligatorio, Por favor actualizar la cédula en la ficha técnica.</label>'+
                        '</div> '+
                    '</div> '+
                '</div> '+
               '<div class="row"> '+  
                    '<div class="col-md-12"> '+
                        '<div class="file-loading"> '+
                                '<input id="input-b2" name="input-b2" type="file" class="file upd" accept="application/pdf"> '+ 
                        '</div> '+
                        '<div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                            '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                            '<strong>Error!</strong> Debe subir y cargar un árchivo '+ 
                        '</div> '+ 
                    '</div> '+
                '</div> '+
     '<div class="row"> '+
        '<div class="col-md-12"> '+
            '<div class="form-group"> '+
                '<button type="button" class="btn btn-primary" id="enviar_acta_vereditas"><i class="glyphicon glyphicon-share-alt"></i> Enviar a revisión</button>'+
            '</div> '+
        '</div> '+
     '</div> ';


return contenido;


}


function logica_gen_acta_entrega_vereditas(datos,modo){
    
var identificador='';

if(jQuery.type( datos )==="string"){
    identificador=datos;
}else{
    identificador=datos["identificador"];
  
}
$('#id_acta_entrega').val(identificador);

$("input:disabled").css({"backgroundColor":"white"});
    
setTimeout(function(){

   var dia_de_hoy=moment(new Date()).format("DD/MM/YYYY");

 $('.sandbox-container input').datepicker({
    weekStart: 1,
    todayBtn: "linked",
    clearBtn: true,
    language: "es",
    forceParse: false,
    daysOfWeekHighlighted: "0",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    endDate:dia_de_hoy
});

 $("#fecha_acta").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });
 
    function getDateFormat(date) {
     if (date === '') {
         return '';
     } else {

         var today = new Date(date);
         var mes=today.getMonth()+1;
         return  today.getUTCDate() + '/'+mes +'/' + today.getUTCFullYear();  
     }
 }; 

      
    $datos = {
        op: 'datos_acta_entrega_par_vereditas',
        identificador: identificador
    };
    var resultado = 0;
    var borrar_pdf='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response[0];
            
            
            $('#fecha_acta').val(moment(resultado["fecha_acta_entrega"]).format("DD/MM/YYYY"));
            borrar_pdf=(resultado["cerrado"]?resultado["cerrado"]:false);
            $('#ben1').val(resultado["nombre_beneficiario"]?resultado["nombre_beneficiario"]:'');
            $('#ced').val(resultado["cedula"]?resultado["cedula"]:'');
            if(resultado["cerrado"]?resultado["cerrado"]:false){
                
                $( "#titulo" ).after( '<p>Acta de Entrega cargada por: <b>'+resultado["elaboro"]+' </b></p>' );
 
                $( "#titulo" ).after( '<p>Acta de Entrega aprobada para su cargue por: <b>'+resultado["aprobo"]+' </b></p>' );
                
                $('.disponible').attr('disabled', 'disabled');
                $(".disponible").css({"backgroundColor":"white"});
                $('#enviar_acta_vereditas').text("Enviar a Financiera");               
                
            }
        },
        error: function (response) {
            alert("Ocurrió un error al almacenar la información");
        }
    });


    
    
var seguir_archivo=0;
//Subir archivo pdf

var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_acta_entrega",
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {

            if (response)
            {
                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        var resultado = response[i];

                            datos1["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos1["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview1='ObtenerArchivo?ID='+datos1["1"];
                            seguir_archivo=1;
                    }

                } else {
                    console.log(response);
                    
                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });

    
if(datos1["1"]===undefined){
    var contar=false;
}else{
    var contar=true;
}

$("#input-b2").fileinput({
    theme: 'fa',
    language: 'es',
    fileActionSettings: {
    'showRemove': false,
    'indicatorNew': '&nbsp;'
},
    initialPreview: [
        url_preview1
    ],
        initialPreviewFileType: 'pdf', 
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: datos1["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos1["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: 'Documento acta de entrega PAR Vereditas',
                identificador: identificador,
                tipo_documento: '240011',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_acta_entrega_par_vereditas',
            identificador: identificador
        };
        return out;
    } ,   
    uploadUrl: 'FileUploader',
    deleteUrl: 'GestionConsultas',
    allowedFileExtensions: ["pdf"],
    initialPreviewAsData: true,
    showUpload: true,
    overwriteInitial: false,
    browseOnZoneClick: true,
    showRemove: true,
    autoReplace:false,
    maxFileCount: 1,
    validateInitialCount: contar
});


$("#input-b2").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = borrar_pdf;
        if(borrar_pdf){
            alertify.error("El archivo no se puede borrar");
        }else{
            seguir_archivo=0;
        }
        
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


$("#input-b2").on('filepreajax', function (event, previewId, index) {
        seguir_archivo=1;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();
        
    });    
$('#input-b2').on('fileuploaded', function(data, previewId, index) {
    $('.fileinput-upload-button').css('display',"none");
});

    
    
$(".fecha_validate").blur(function(){   
     var newDate = $(this).val();
     if(newDate===''){

     }else{
         
        if (!moment(newDate, 'DD/MM/YYYY', true).isValid()){         
            $(this).val('');
            alertify.error("Formato de Fecha Incorrecto");
        }else{
            if (moment(newDate,"DD/MM/YYYY") > moment(dia_de_hoy,"DD/MM/YYYY")) {
                $(this).val('');
                alertify.error("Fecha posterior al dia de hoy");
            }
        }   
     }
         

});    

$( "#enviar_acta_vereditas" ).click(function() {
    var conta=0;
    
    if(seguir_archivo===0){      
        $('#alerta_input-b2').show();
        conta=1;
    }else{
        $('#alerta_input-b2').hide();
        conta=0;
    }    

  $('.obligatorio').each(function() {

    var str=$(this).attr('id');
    
    if($(this).val()==='' || $(this).val()==='Seleccione...' ){
        if($("#"+str+"_error").length===0) {
           $(this).after( $( "<label id="+$(this).attr('id')+'_error'+" class='error'>Campo Obligatorio</label>" ) );
           conta=conta+1;
          }else{
            $("#"+str+"_error").show();
            conta=conta+1;
          }
    }else{
       
          $("#"+str+'_error').hide();
    }
    
    if($('#ben1').val().trim().length<3){
    
        $('#error_ben1').show();

       conta=conta+1;
    }else{
        $('#error_ben1').hide();
    }
    if($('#ced').val().trim().length<1){
    
        $('#error_ced').show();

       conta=conta+1;
    }else{
        $('#error_ced').hide();
    }
    
});

if(conta>0){
    alertify.error("Revise los campos obligatorios");
}else{
    var identificador=datos["identificador"];
    var id_actividad = datos["id_actividad"];       
    var actividad_padre=datos["actividad_padre"];
    var tipo_actividad=datos["id_tipo_actividad"];
    var tipo_proceso=datos["id_proceso"];
    var identificador=datos["identificador"];
    var creador=datos["asignado_a"];
    
    if($('#enviar_acta_vereditas').text()==="Enviar a Financiera"){
   
       var asignado_a=16;
       var observacion_inicial='Solicitud de Cargue de Información Financiera';
       envio_de_notificacion(identificador,1,10,8,creador,asignado_a,1,observacion_inicial,''); 
       quitar_tarea_lider(id_actividad);
       var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Solicitud de Cargue de Información Financiera</p>';
       correo(creador,asignado_a,"Solicitud de Cargue de Información Financiera",msg,tipo_proceso);
       
    }else{
        guardar(false);          
        var asignado_a=196;
        var estado=1;
        var observacion_inicial=$('#obs_regreso').val();
        
        var observacion_final='';
         
        
        envio_de_notificacion(identificador,1,9,8,creador,asignado_a,estado,observacion_inicial,observacion_final);       
        quitar_tarea_lider(id_actividad);

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' Para la revisión del cargue de documentos. </p>';
            
        correo(creador,asignado_a,"Aprobación cargue de Acta de entrega de ocupación",msg,tipo_proceso);
    }
    
          $("#not_update").remove();
         $.getScript("alerta/notificaciones.js", function(){
         });
         $('#modal_form').modal('toggle');


}

         
          
  });
    

      function guardar(cerrado){
      $fecha_acta =document.getElementById("fecha_acta");
      $datos = {
          op: 'save_acta_entrega_vereditas',
          identificador: identificador,
          fecha:$($fecha_acta).val(),
          usuario_nombre:usuario_usuario,
          cerrado:cerrado
      };

      $.ajax({
          type: "POST",
          url: "GestionConsultas",
          data: $datos,
          dataType: "json",
          async: false,
          success: function (response) {
              alertify.success("Datos almacenados satisfactoriamente");                 
          },
          error: function (response) {
              alertify.error("Ocurrió un error");
          }
          });
    }  
    
     if(modo===3 || modo===2 ){
        $('.disponible').attr('disabled', 'disabled');
        $(".disponible").css({"backgroundColor":"white"});
        $('#enviar_acta_vereditas').hide();
        borrar_pdf=true;
        $('.kv-file-remove').hide();
        $('.btn-file').hide();
    }   
    
    
 
}, 200);
}

