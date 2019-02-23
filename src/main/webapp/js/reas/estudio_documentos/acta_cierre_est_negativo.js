function gen_acta_cierre_negativo(identificador){


    var contenido =
'  <div class="row"> '+
'      <div class="col-md-12"> '+
'           <div class="form-group"> '+
'                <button type="button" class="btn btn-primary" id="reg_estudio"><i class="fas fa-arrow-left"></i> Regresar a Est. de documentos</button>'+
'           </div> '+
'       </div> '+
'  </div> '+        
 '<h2 id="titulo" style="color:#2E9AFE">Acta de cierre por estudio de documentos negativo</h2>'+
 '<p>En el siguiente modulo usted podrá subir la información correspondiente al acta de cierre por estudio de documento negativo</p>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Identificador</label> '+
                                '     <input type="text" class="form-control" id="id_acta_cierre" placeholder="identificador" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
'<div class="row"> '+
'<div class="col-md-12"> '+
    '<div class="form-group ">'+
    '  <label >Fecha de la notificación del estudio de documentos negativo:</label>'+
    ' <small class="text-muted">Corresponde a la fecha en que el beneficiario recibió la notificación</small>'+
    '  <div class="span5 sandbox-container"><input  type="text" class="form-control upd_estudio obligatorio fecha disponible" id="fecha_not" placeholder="Fecha de la notificación"></div>'+
    '  <label class="error" style="display:none" id="error_fecha_not">Campo Obligatorio</label>'+
    '</div>'+
'</div>'+ 
'</div>'+ 

'<div class="row"> '+
'<div class="col-md-12"> '+
    '<div class="form-group ">'+
    '  <label >Fecha del acta de cierre:</label>'+
    '  <div class="span5 sandbox-container"><input  type="text" class="form-control upd_estudio obligatorio fecha disponible" id="fecha_act" placeholder="Fecha del acta de cierre"></div>'+
    '  <label class="error" style="display:none" id="error_fecha_act">Campo Obligatorio</label>'+
    '</div>'+
'</div>'+ 
'</div>'+ 


'<p>Por favor cargue un documento adjunto pdf que evidencia el registro de visitas fallidas, un (1) solo árchivo pdf es permitido:</p>'+         
      '            <div class="row"> '+  
      '                   <div class="col-md-12"> '+
      '                     <div class="file-loading"> '+
      '                       <input id="input-b2" name="input-b2" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+
' <p>Por favor asegurese de cargar el árchivo correcto, una vez subido y guardado en el sistema no sera posible borrarlo desde este modulo:</p>'+  



 
     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button type="button" class="btn btn-success" id="save_act_cierre_est"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> '+
     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button type="button" class="btn btn-primary" id="enviar_act_cierre_est"><i class="glyphicon glyphicon-share"></i> Enviar a revisión</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> ';
return contenido;
   
 }
 
 function logica_acta_cierre_negativo(identificador,modo,id_proceso,id_actividad){
    
 $('#reg_estudio').click(function(){
     
     hola({formulario:2,index:0,modo:1});
 });
 
  $('#id_acta_cierre').val(identificador);   
     
     
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


$("input:disabled").css({"backgroundColor":"white"});

var borrar_pdf=false;

var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_acta_cierre_estudio_negativo",
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
                    }

                } else {
                    
                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });

var contar;
           
if(datos1["1"]===undefined){
     contar=false;
}else{
     contar=true;
}

$("#input-b2").fileinput({
    theme: 'fa',
    language: 'es',
    initialPreview: [
        url_preview1
    ], 
    fileActionSettings: {
    'showRemove': false,
    'indicatorNew': '&nbsp;'
},
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: datos1["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos1["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: 'Acta de cierre Estudio Negativo',
                identificador: identificador,
                tipo_documento: '250007',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_acta_cierre_estudio_negativo',
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
    showRemove: false,
    autoReplace:false,
    maxFileCount: 1,
    validateInitialCount: contar
});

$("#fecha_not").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });
$("#fecha_act").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });

$(".fecha").blur(function(){   
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



$("#input-b2").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = borrar_pdf;
        if(borrar_pdf){
            alertify.error("El archivo no se puede borrar");
        }
        else{
            contar=false;
        }
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


$("#input-b2").on('filepreajax', function (event, previewId, index) {
    contar=true;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();
    });

$('#save_act_cierre_est').click(function(){
   guardar(); 
});



    $datos = {
        op: 'datos_acta_cierre_est_documentos',
        identificador: identificador
    };

    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
           if(response.length){
               if(response[0].fecha_not){
                   document.getElementById("fecha_not").value =moment(response[0].fecha_not).format("DD/MM/YYYY");
               }
               
               if(response[0].fecha_act){
                   document.getElementById("fecha_act").value =moment(response[0].fecha_act).format("DD/MM/YYYY");
               }
               if(response[0].concepto){
                   if(response[0].concepto===true){
                       bloqueo();
                   }
               }
               
           }
           console.log(response)
           
        }
   });     

$('#enviar_act_cierre_est').click(function(){
   
  var conta=0;
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
    
});



if(conta>0){
    alertify.error("Revise los campos obligatorios");
}else{
    
    if(contar===true){
       guardar();
    
        var asignado_a=168;
        var observacion_inicial='Envio Cargue de acta de cierre por estudio de documentos negativo';
        var creador=usuario_identificador;

        envio_de_notificacion(identificador,1,20,19,creador,asignado_a,1,observacion_inicial,''); 

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Revisión de cargue de acta de cierre por estudio de documentos negativo</p>';

        correo(creador,asignado_a,"Revisión de Cargue de acta de cierre",msg,id_proceso);
        
        quitar_tarea_lider(id_actividad);
        
        $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
         });

        $('#modal_form').modal('toggle'); 
        
        
    }else{
        alertify.error("Por favo suba un documento pdf con el acta de cierre");         
    }
    

    
}
    
});


 function guardar(){

    $fecha_not = document.getElementById("fecha_not");
    $fecha_act = document.getElementById("fecha_act");

 
    
    $datos = {
        op: 'save_acta_cierre_est_documentos_negativo',
        identificador: identificador,
        fecha_not:$($fecha_not).val(),
        fecha_act:$($fecha_act).val(),
        usuario_nombre:usuario_usuario,
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

function bloqueo(){
    $('#enviar_act_cierre_est').hide();
    $('#save_act_cierre_est').hide();
    $('.kv-file-remove').hide();
    $('.btn-file').hide();
    $('.disponible').attr('disabled', 'disabled');
    $(".disponible").css({"backgroundColor":"white"});
}

     if(modo===2){
         bloqueo();
     }
     if(modo===4){
         bloqueo();
     }


}

