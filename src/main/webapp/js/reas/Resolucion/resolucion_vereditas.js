function gen_resolucion_vereditas(identificador){


    var contenido =
        
 '<h2 id="titulo" style="color:#2E9AFE">Resolución de Asignación - Vereditas</h2>'+
 '<p>En el siguiente modulo usted podrá subir la información correspondiente a la resolución emitida para el predio ubicado en el séctor de vereditas, recuerde que debe subir el <b> pdf'+
 ' </b> escaneado de la resolución y los datos aqui reportados deben coincidir totalmente con la misma.</p>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Identificador</label> '+
                                '     <input type="text" class="form-control" id="id_acta_entrega" placeholder="identificador" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
  '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="numero_res" class="control-label">Número de la Resolución</label> '+
                                '     <input type="number" class="form-control obligatorio numeric disponible" id="num_res" placeholder="Número Resolución"> '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-6"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha Resolución</label> '+
                            ' <small class="text-muted">Formato válido (dd/mm/yyyy)</small>'+
                            '  <div class="span5 sandbox-container"><input  type="text" class="form-control upd_estudio data fecha disponible" id="fecha_res" placeholder="Fecha Resolución"></div>'+
                            '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 
   '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="val_res" class="control-label">Valor de la Resolución</label> '+
                                '<div class="input-group"> '+
                                '<span class="input-group-addon">$</span>'+
                                '     <input type="text" class="form-control obligatorio moneda disponible" id="val_res" placeholder="Valor de la Resolución"> '+
                                '   </div> '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="cdp_res" class="control-label">Número del (CDP)</label> '+
                                '     <input type="number" class="form-control obligatorio numeric disponible" id="cdp_res" placeholder="(CDP)"> '+
         '                     </div> '+
        '                 </div> '+
         '          <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                            '     <label class="control-label">Fecha CDP</label> '+
                            ' <small class="text-muted">(dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container"><input id="fecha_cdp" type="text" class="form-control upd obligatorio disponible fecha_validate" placeholder="Fecha CDP"></div>'+
                            '   </div> '+
 '                     </div> '+      
        
  '                 </div> '+
 
   '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="not_res" class="control-label">La persona fue notificada?</label> '+
                                '     <select class="form-control obligatorio disponible" id="not_res"><option val="">Seleccione...</option><option val="Si">Si</option><option val="No">No</option></select> '+
         '                     </div> '+
        '                 </div> '+
        '          <div class="col-md-4"> '+
                            '   <div class="form-group auto_error"> '+
                            '     <label class="control-label">Fecha Notificación</label> '+
                            ' <small class="text-muted">(dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container "><input id="fecha_not" type="text" class="form-control upd obligatorio disponible fecha_validate verificacion" placeholder="Fecha Notificación"></div>'+
                            '   </div> '+
 '                     </div> '+
         '          <div class="col-md-4"> '+
                            '   <div class="form-group auto_error"> '+
                            '     <label class="control-label">Fecha Ejecutoria</label> '+
                            ' <small class="text-muted">(dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container"><input id="fecha_ejec" type="text" class="form-control upd obligatorio disponible fecha_validate verificacion" placeholder="Fecha Ejecutoria"></div>'+
                            '   </div> '+
 '                     </div> '+
        
'                 </div> '+ 

  
'<p>Por favor cargue un documento adjunto pdf que evidencia la resolución, un (1) solo árchivo pdf es permitido:</p>'+         
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
'<br>'+
     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button type="button" class="btn btn-success" id="save_res_vereditas"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> '+
     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button type="button" class="btn btn-primary" id="enviar_res_vereditas"><i class="glyphicon glyphicon-share-alt"></i> Enviar a revisión</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> ';  
     
     
     
return contenido;
   
 }
 
 function logica_resolucion_vereditas(identificador,modo,tipo_proceso,id_actividad){
 
 

 
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
      

 $( "#not_res" ).change(function() {
    veri_notificacion();  
});

function veri_notificacion(){
    if($( "#not_res" ).val()==="No"){
      $('.verificacion').prop('disabled', true);
      $(".verificacion").css({"backgroundColor":"white"});
      $('.verificacion').val("");
      $('#fecha_not').removeClass( "obligatorio" );
      $('#fecha_ejec').removeClass( "obligatorio" );
      $('.auto_error .error').remove();
  }else{
      $('.verificacion').prop('disabled', false);
      $('#fecha_not').addClass( "obligatorio" );
      $('#fecha_ejec').addClass( "obligatorio" );
  }
}



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


$('input').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });
 
 $('.upd').on('change', function(){
    $('#alerta_'+this.id).css("display","none");
});
    
    function consulta(id){
        var res='';
        $datos = { op: 'get_datos_regreso',id:id};
        $.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: $datos,
    dataType: "json",
    async: false,
    success: function (response) {           
          res = response;          
    },
    error: function (response) {

        }
    });
    return res;
    }
    
    var entrega_par=0;
    
    $datos = {
        op: 'datos_resolucion_vereditas',
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
            $('#id_acta_entrega').val(identificador);

            if(response.length>0){
                 resultado = response[0];
            
            $('#num_res').val((resultado["num_res"]?resultado["num_res"]:''));
            $('#val_res').val((resultado["val_res"]?resultado["val_res"]:''));
            $('#cdp_res').val((resultado["cdp_res"]?resultado["cdp_res"]:''));
            
            $('#not_res').val((resultado["persona_notificada"]?resultado["persona_notificada"]:''));
            $('#fecha_res').val( moment(resultado["fecha_res"]).format("DD/MM/YYYY") );
            $('#fecha_cdp').val(moment(resultado["fecha_cdp"]).format("DD/MM/YYYY"));
            $('#fecha_ejec').val(moment(resultado["fecha_ejec"]).format("DD/MM/YYYY"));
            $('#fecha_not').val(moment(resultado["fecha_not"]).format("DD/MM/YYYY"));
            
            borrar_pdf=(resultado["concepto"]?resultado["concepto"]:false);
            veri_notificacion(); 
            if((resultado["concepto"]?resultado["concepto"]:'')===true){
                
               
                $( "#titulo" ).after( '<p>Resolución cargada por: <b>'+resultado["elaboro"]+' </b></p>' );
 
                $( "#titulo" ).after( '<p>Resolución aprobada para su cargue por: <b>'+resultado["aprobo"]+' </b></p>' );              
                
                $('.disponible').attr('disabled', 'disabled');
                $(".disponible").css({"backgroundColor":"white"});
                $('#save_res_vereditas').hide();
                /*
                $('#enviar_res_vereditas').hide();
                */
                $('#enviar_res_vereditas').text("Enviar a Generación Acta de Entrega de la ocupación");
                entrega_par=1;
            }
            
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });

$('#val_res').val($('#val_res').val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));




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


var seguir_archivo=0;


 
//Subir archivo pdf

var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_resolucion_vereditas",
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
                descripcion: 'Resolucion Vereditas',
                identificador: identificador,
                tipo_documento: '240008',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_resolucion_vur',
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
    validateInitialCount: contar,
   
});


    

$("#input-b2").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = borrar_pdf;
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
  
    
    
  $( "#enviar_res_vereditas" ).click(function() {
  
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
    
   var creador=usuario_identificador;
   
   if(entrega_par===1){
 
       var asignado_a=196;
       var observacion_inicial='Solicitud de Cargue de Acta de Entrega';
       envio_de_notificacion(identificador,1,8,3,creador,asignado_a,1,observacion_inicial,''); 
       var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Solicitud de Cargue de Acta de Entrega de la Ocupación</p>';
        correo(creador,asignado_a,"Solicitud de Cargue de Acta de Entrega",msg,tipo_proceso);
          quitar_tarea_lider(id_actividad);
 
   }else{
        guardar();        
        var asignado_a=168;
        var observacion_inicial='Envio Cargue de resolución para su aprobación';

        envio_de_notificacion(identificador,1,7,3,creador,asignado_a,1,observacion_inicial,''); 

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Revisión de cargue de resolución</p>';

        correo(creador,asignado_a,"Revisión de Cargue de Resolución",msg,tipo_proceso);
        
        quitar_tarea_lider(id_actividad);
   }
       
    $("#not_update").remove();
        $.getScript("alerta/notificaciones.js", function(){
     });
    $('#modal_form').modal('toggle');
}

 });   
 
 
$( "#save_res_vereditas" ).click(function() {
    guardar();
});
 
 
 
 
 function guardar(){
     
     
    $num_res =document.getElementById("num_res");
    $fecha_res = document.getElementById("fecha_res");
    $val_res = document.getElementById("val_res");
    $cdp_res = document.getElementById("cdp_res");
    
    $persona_notificada = document.getElementById("not_res");
    $fecha_ejec = document.getElementById("fecha_ejec");
    $fecha_not = document.getElementById("fecha_not");
    $fecha_cdp = document.getElementById("fecha_cdp");

 
    
    $datos = {
        op: 'save_resolucion_vereditas',
        identificador: identificador,
        num_res: $($num_res).val(),
        fecha_res:$($fecha_res).val(),
        val_res: $($val_res).val().replace(/,/g,""),
        cdp_res: $($cdp_res).val(),
       
        persona_notificada: $($persona_notificada).val(),
        fecha_ejec:$($fecha_ejec).val(),
        fecha_not:$($fecha_not).val(),
        fecha_cdp:$($fecha_cdp).val(),
        usuario_nombre:usuario_usuario,
    };
    
    console.log($datos)

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
 
    
  if(modo===3 || modo===2){
    $('.disponible').attr('disabled', 'disabled');
    $(".disponible").css({"backgroundColor":"white"});
    $('#save_res_vereditas').hide();
    $('#enviar_res_vereditas').hide();
    $('.kv-file-remove').hide();
    $('.btn-file').hide();
}
  

    
    
    
    
 
}, 200);
    
    
    


    



}

