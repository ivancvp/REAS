function info_cdp(){

    var contenido =
        
 '<h2 id="titulo" style="color:#2E9AFE">Información de CDP</h2>'+
 '<p>En el siguiente modulo usted podrá visualizar y registrar la información correspondiente al CDP'+
 ' )Certificado Disponibilidad Presupuestal) '+
 '</p>'+
 
 '<div class="btn-group">'+
' <button type="button" class="btn btn-success boton" id="adicionar_cdp"><i class="fas fa-plus"></i> Adicionar CDP</button>'+
' <button type="button" class="btn btn-danger boton" id="anular_cdp"><i class="fas fa-ban"></i> Anular CDP</button>'+
'</div>'+
 
 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group "> '+
                                '     <label for="" class="control-label">Identificador</label> '+
                                '     <input type="text"  class="form-control ver" id="id_form" placeholder="identificador" > '+
                                '   </div> '+
                      '   </div> '+
 '</div >'+
 

 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label  class="control-label">Valor del CDP</label> '+
                                '<div class="input-group"> '+
                                '<span   class="input-group-addon">$</span>'+
                                '     <input type="text"  class="form-control obligatorio moneda disponible upd" id="valor_cdp" placeholder="Valor del CDP"> '+
                                '   </div> '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="cdp_res" class="control-label">Número del (CDP)</label> '+
                                '     <input type="number" class="form-control obligatorio numeric upd " id="no_cdp" placeholder="(CDP)" > '+
         '                     </div> '+
        '                 </div> '+
         '          <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                            '     <label class="control-label">Fecha CDP</label> '+
                            ' <small class="text-muted">(dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container"><input id="fecha_cdp" type="text" class="form-control upd obligatorio fecha fecha_validate " placeholder="Fecha CDP" ></div>'+
                            '   </div> '+
 '                     </div> '+      
        
  '                 </div> '+ 

'<div class="row"> '+
  '<div class="col-md-12"> '+
      '<div class="form-group"> '+
          '<label class="control-label">Objeto CDP</label> '+
          '<textarea class="form-control  upd obligatorio" rows="3" id="objeto_cdp"></textarea>'+
      '</div> '+
  '</div> '+ 
'</div> '+ 
  
  
  '<p>Por favor cargue un documento adjunto pdf que evidencia el documento CDP, un (1) solo árchivo pdf es permitido:</p>'+         
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
  
  
  
'<div class="btn-group">'+
' <button type="button" class="btn btn-success boton" id="save_cdp"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
' <button type="button" class="btn btn-primary boton" id="send_cdp"><i class="glyphicon glyphicon-share-alt"></i> Contestar Solicitud</button>'+
/*' <button type="button" class="btn btn-info" id="quitar_tarea"><i class="fas fa-times"></i> Quitar tarea</button>'+*/
'</div>';

     
return contenido;
   
 }
 
 
function logica_info_cdp(datos,modo,tipo){



var identificador="";
if(tipo===1){
    identificador=datos;
}
else if(tipo===2){
    identificador=datos["identificador"];
}

$("#id_form").val(identificador);

// traer datos
      $datos = {
          op: 'get_info_solicitud_cdp',
          identificador: identificador
      };
      
      var resultado;
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
           
            console.log(response)
           
           if(response.length> 0) {
            resultado=response;
           $.each( response[0], function( key, value ) {
               
               if($('#'+key).hasClass('fecha') ){                       
                    $('#'+key).val(moment(value).format("DD/MM/YYYY"));
                }else{
                    $('#'+key).val(value);
                }
            });

            }

           
        }
    });



//logica

var dia_de_hoy=moment(new Date()).format("DD/MM/YYYY");

$("#fecha_solicitud").val(dia_de_hoy)



$("#anular_cdp").click(function(){
   
   $.alert({
    title: 'Confirmación',
    content: '¿Esta seguro de anular este CDP?',
    type: 'blue',
    typeAnimated: true,
    buttons: {
        si: {
            text: 'Si'
        },
        no:{
            text: 'No'
        }
    }
});

});


$("#adicionar_cdp").click(function(){
   
   $.alert({
    title: 'Confirmación',
    content: '¿Esta seguro de agregar un nuevo CDP?',
    type: 'blue',
    typeAnimated: true,
    buttons: {
        si: {
            text: 'Si'
        },
        no:{
            text: 'No'
        }
    }
});

    
    
});


  if(modo===3 || modo===2){
    $('.ver').attr('disabled', 'disabled');
    $(".ver").css({"backgroundColor":"white"});
}

if(modo===3){
    $(".boton").hide();
    $('.upd').attr('disabled', 'disabled');
    $(".upd").css({"backgroundColor":"white"});
}

if(modo===2){
    $(".boton").hide();
    $('.upd').attr('disabled', 'disabled');
    $(".upd").css({"backgroundColor":"white"});
}
//manejador de documentos


var seguir_archivo=0;


var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_cdp",
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
                descripcion: 'Documento CDP',
                identificador: identificador,
                tipo_documento: '7316',
                thumbnail: ''
            };
            return out;
        },    
  
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
    validateInitialCount: contar,
   
});


    

$("#input-b2").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = true;
        if(borrar_pdf){
            alertify.error("El archivo no se puede borrar");
        }
        
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


$("#input-b2").on('filepreajax', function (event, previewId, index) {
        seguir_archivo=1;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();        
 });




//funciones

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



$('.numeric').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
});

$('.moneda').keyup(function(event) {

  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40){
    event.preventDefault();
  }

  $(this).val(function(index, value) {
    return value
      .replace(/\D/g, "")
      .replace(/([0-9])([0-9]{0})$/, '$1')  
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
    ;
  });
  
  
});

$('.moneda').focusout(function(event) {
    
    if($(this).val().length<9){
        $(this).val("");
        alertify.error("Valor muy bajo");
    }
    else if($(this).val().length>10){
        $(this).val("");
        alertify.error("Valor muy alto");
    }

    
  });


  $("#send_cdp").click(function(){
     
     var conta=verificarObligatorios();
     
        if(conta===0){

        var usuario_destino=datos["usuario_id"];
        
        var tipo_proceso=0;

        var observacion_inicial='Envio solicitud para nuevo CDP';

        envio_de_notificacion(identificador,6,28,29,usuario_identificador,usuario_destino,1,observacion_inicial,''); 

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para generación de CDP.</p>';

        correo(usuario_identificador,usuario_destino,"Solicitud para generación de nuevo CDP",msg,tipo_proceso);
                
        quitar_tarea_lider(datos["id_actividad"]);
       
        $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
         });
        $('#modal_form').modal('toggle');



        }else{
            alertify.error("Revise los campos obligatorios");
        }  
      
  });


  function verificarObligatorios(){
   
   var conta=0;
      
    $('.obligatorio').each(function() {

    var str=$(this).attr('id');
    
    if($(this).val()==='' || $(this).val()==='Seleccione...' || $(this).val()==='0'){
        if($("#"+str+"_error").length===0) {
           $(this).after( $( "<label id="+$(this).attr('id')+'_error'+" class='error'>Campo Obligatorio</label>" ) );
           conta=conta+1;
          }else{
           $("#"+str+"_error").show();
            conta=conta+1;
          }
          console.log("campos obligatorios:"+str)
    }else{
          $("#"+str+'_error').hide();
    }

});

return conta;
      
  }



}

