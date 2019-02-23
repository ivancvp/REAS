function gen_resolucion(identificador){

    var contenido =
        
 '<h2 id="titulo" style="color:#2E9AFE">Resolución de Asignación - VUR</h2>'+
 '<p>En el siguiente modulo usted podrá subir la información correspondiente a la resolución</p>'+
 
 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group "> '+
                                '     <label for="identificador" class="control-label">Identificador</label> '+
                                '     <input type="text" style="border-color:#5DADE2" class="form-control upd" id="identificador" placeholder="identificador" value="'+identificador+'" disabled> '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Nombre del beneficiario principal</label> '+
                                '     <input type="text" style="border-color:#5DADE2"  class="form-control" id="nom_ben" placeholder="Nombre del beneficiario" disabled> '+
                                '   </div> '+
 '                     </div> '+
  '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Cédula</label> '+
                                '     <input type="text" style="border-color:#5DADE2"  class="form-control" id="cedula" placeholder="Cédula" disabled> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
  '                 <div class="row"> '+
/*
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label class="control-label">Folio Concepto Técnico</label> '+
                                '     <input type="text" class="form-control obligatorio disponible" id="folio_concepto_tecnico" placeholder="Folio Concepto Técnico" > '+
                                '   </div> '+
                       '   </div> '+
                       */
                    '<div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label class="control-label">Folio Est. documentos</label> '+
                                '     <input type="text" class="form-control obligatorio disponible upd" id="folio_est_documentos" placeholder="Folio Estudio de documentos" > '+
                                '   </div> '+
                    '</div> '+
                    '<div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label class="control-label">Zona</label> '+
                                '     <input type="text" class="form-control obligatorio disponible upd" id="zona" placeholder="Zona" > '+
                                '   </div> '+
                    '</div> '+                    
                    '</div> '+
   '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label  class="control-label">Valor del CDP</label> '+
                                ' <small class="text-muted">(Valor establecido para Caracolí)</small>'+
                                '<div class="input-group"> '+
                                '<span style="border-color:#5DADE2"  class="input-group-addon">$</span>'+
                                '     <input type="text" style="border-color:#5DADE2" class="form-control obligatorio moneda disponible upd" id="valor_cdp" placeholder="Valor del CDP"> '+
                                '   </div> '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="cdp_res" class="control-label">Número del (CDP)</label> '+
                                '     <input type="number" class="form-control obligatorio numeric disponible upd" id="no_cdp" placeholder="(CDP)" > '+
         '                     </div> '+
        '                 </div> '+
         '          <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                            '     <label class="control-label">Fecha CDP</label> '+
                            ' <small class="text-muted">(dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container"><input id="fecha_cdp" type="text" class="form-control upd obligatorio disponible fecha fecha_validate" placeholder="Fecha CDP" ></div>'+
                            '   </div> '+
 '                     </div> '+      
        
  '                 </div> '+ 

                    '<div class="row"> '+
                        '<div class="col-md-12"> '+
                            '<div class="form-group"> '+
                                '<label class="control-label">Objeto CDP</label> '+
                                '<textarea class="form-control disponible upd" rows="3" id="objeto_cdp"></textarea>'+
                            '</div> '+
                        '</div> '+ 
                    '</div> '+ 

   '                 <div class="row"> '+
    '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="val_res" class="control-label">Valor de la Resolución</label> '+
                                ' <small class="text-muted">(Valor establecido para Caracolí)</small>'+
                                '<div class="input-group"> '+
                                '<span style="border-color:#5DADE2"  class="input-group-addon">$</span>'+
                                '     <input style="border-color:#5DADE2"  type="text" class="form-control obligatorio moneda disponible upd" id="valor_resol" placeholder="Valor de la Resolución"> '+
                                '   </div> '+
                                '   </div> '+
                       '   </div > '+
                       '   <div id="div_posterior_aprobacion"> '+
 '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="cdp_res" class="control-label">Número de la resolución</label> '+
                                '     <input type="number" class="form-control numeric disponible1 upd" id="no_resol" placeholder="Número resolución" > '+
         '                     </div> '+
        '                 </div> '+
            '          <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                            '     <label class="control-label">Fecha Resolución</label> '+
                            ' <small class="text-muted">(dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container"><input id="fecha_resol" type="text" class="form-control upd disponible1 fecha fecha_validate" placeholder="Fecha RES" ></div>'+
                            '   </div> '+
 '                     </div> '+    
                       '   </div> '+
   
   
   
   '                 </div> '+ 

    '                 <div class="row"> '+
    '                   <div class="col-md-12"> '+
    '                      <div class="form-group"> '+
    '                            <small class="text-muted">Los campos que tienen borde azul, son campos no modificables que ya vienen preestablecidos por el sistema.</small>'+
    '                       </div> '+ 
    '                   </div> '+ 
    '                 </div> '+ 



'<div class="row"> '+
'<div class="col-md-12"> '+  
'<div class="form-group">'+
/*
'<label class="control-label">Texto de recomendación CVP</label> '+
'  <textarea class="form-control upd_estudio disponible" rows="5" id="texto_juridico"></textarea>'+
*/
'</div> '+
'</div> '+
'</div> '+

'<div class="btn-group">'+
'                           <button type="button" class="btn btn-success" id="save_res_vereditas"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
'                           <button type="button" class="btn btn-primary" id="enviar_res_vereditas"><i class="glyphicon glyphicon-share-alt"></i> Enviar a revisión</button>'+
'                           <button type="button" class="btn btn-danger" id="impr_resolucion"><i class="far fa-file-pdf"></i> Resolución preliminar</button>'+
/*'                           <button type="button" class="btn btn-info" id="quitar_tarea"><i class="fas fa-times"></i> Quitar tarea</button>'+*/
'</div>'+
 '<h4 id="info_elaboracion"></h4>'+
'<div id="ver_pdf"> '+
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
'</div>'+
'<br>'+

    '                 <div class="row"> '+
    '                     <div class="col-md-12"> '+
    '                           <div class="form-group">'+
    '                           <iframe id="pdf_resolucion" style="display:none; width:100%; height: 500px"  > </ iframe>'+
    '                           </div> '+
    '                     </div> '+
    '                 </div> ';    
     
     
     
return contenido;
   
 }
 
 function logica_resolucion(identificador,modo,tipo_proceso,id_actividad,usuario_creador){
 


 
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
      


$('#impr_resolucion').click(function(){
  
 var doc = imp_resolucion_caracoli(identificador,'ivan','lei');
                
$('#pdf_resolucion').css('display', 'inline');

pdfMake.createPdf(doc).getDataUrl(function (outDoc) {
    document.getElementById('pdf_resolucion').src = outDoc;
});   
    
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


$('input').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });
 
 $('.upd').on('change', function(){
    $('#alerta_'+this.id).css("display","none");
});

if(identificador.includes("CP19")){
    $('#valor_resol').val('54686940');
}


    var entrega_par=0;
    
    
      $datos = {
          op: 'datos_resolucion',
          identificador: identificador
      };
      
      var resultado;
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            
           if(response.length> 0) {
            resultado=response;
           $.each( response[0], function( key, value ) {
               
               if($('#'+key).hasClass('fecha') ){                       
                        $('#'+key).val(moment(value).format("DD/MM/YYYY"));
                    }else{
                        $('#'+key).val(value);
                    }
           });
           
            if(resultado[0]["concepto"]?resultado[0]["concepto"]:false){
                $('#info_elaboracion').append("<p style='color:#EB984E'>Elaboro: "+(resultado[0]["elaboro"]?resultado[0]["elaboro"]:'')
                        +"</p><p style='color:#EB984E'>Aprobó: "+(resultado[0]["aprobo"]?resultado[0]["aprobo"]:'')+"</p>");
                $('.disponible').attr('disabled', 'disabled');
                $(".disponible").css({"backgroundColor":"white"});
                $("#enviar_res_vereditas").hide();
                /*$("#save_res_vereditas").hide();*/
                $('#impr_resolucion').text("Imprimir Resolución");
                $('#div_posterior_aprobacion').show();
                $("#div_posterior_aprobacion").css("color", "#2874A6");
                /*$("#quitar_tarea").show();*/

            }else{
                
                $('#div_posterior_aprobacion').hide();
                $('#ver_pdf').hide();
                $(".disponible1").attr('disabled', 'disabled');
                $(".disponible1").css({"backgroundColor":"white"});
                /*$("#quitar_tarea").hide();*/
            }

            }

           
        }
    });


    

$('#valor_cdp').val('54686940');
$('#valor_resol').val('54686940');
$('#valor_cdp, #valor_resol').attr('disabled', 'disabled');
$("#valor_cdp, #valor_resol").css({"backgroundColor":"white"});

$('#valor_resol').val($('#valor_resol').val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
$('#valor_cdp').val($('#valor_cdp').val().replace(/\B(?=(\d{3})+(?!\d))/g, ","));




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


var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_resolucion_vur_reas",
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
                descripcion: 'Resolucion VUR',
                identificador: identificador,
                tipo_documento: '5103',
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


/*Quitar la tarea de la notificación*/
/*
$('#quitar_tarea').click(function(){
   
   
   var no_resol=$('#no_resol').val();
   var fecha_resol=$('#fecha_resol').val();

   var alerta=false;
   
   var msg='';
   if(no_resol===''){
       msg='Número de la resolución'
       alerta=true;
   }if(fecha_resol===''){
       msg=msg+' Fecha de la resolución';
       alerta=true;
   }if(seguir_archivo===0){
       msg=msg+' Cargue el PDF de la resolución';
       alerta=true;
   }
   
   if(alerta){
        $.alert({
          title: 'Por favor complete la información!',
          content: msg
        });
   }else{
        guardar();  
        quitar_tarea_lider(id_actividad);
        $('#modal_form').modal('hide'); 

        $("#not_update").remove();
                $.getScript("alerta/notificaciones.js", function(){
        });
   }

});
*/



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
   

        guardar();  
        
        var asignado_a=usuario_creador;
        
        var observacion_inicial='Envio Cargue de resolución para su aprobación';

        envio_de_notificacion(identificador,1,7,3,creador,asignado_a,1,observacion_inicial,''); 

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Revisión de cargue de resolución</p>';

        correo(creador,asignado_a,"Revisión de Cargue de Resolución",msg,tipo_proceso);
        
        quitar_tarea_lider(id_actividad);
   
       
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

var obj = {};
obj['op'] = "save_resolucion_VUR";

function consulta(id){
    $datos = { op: 'get_datos_regreso',id:id};
    $.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: $datos,
    dataType: "json",
    async: false,
    success: function (response) {           
          resultado = response;          
    }
    });
    return resultado;
}

var dat1=consulta(usuario_identificador);

var nombre_creador=dat1[0]["usuario_nombre"]+" - "+dat1[0]["usuario_contrato"];

obj['usuario_nombre'] = nombre_creador; 


$('.upd').each(function(index) {
    var valor=$(this).val().trim().replace(/\s+/g, " ");
    
    if ( $( this ).hasClass( "moneda" )  ) {
        valor=valor.replace(/,/g, '');
    }
    if($( this ).hasClass( "numeric" ) || $( this ).hasClass( "moneda" )){
        if(valor===""){
           valor=-1; 
        }
    }
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
         alertify.success("Información almacenada correctamente");
      }, error: function (a) {

      }


  });  


}
 

  if(modo===3 || modo===2){
     
    $('.disponible, .disponible1').attr('disabled', 'disabled');
    $(".disponible , .disponible1").css({"backgroundColor":"white"});
    $('#save_res_vereditas').hide();
    $('#enviar_res_vereditas').hide();
    $('.kv-file-remove').hide();
    $('.btn-file').hide();
    $('#quitar_tarea').hide();
    if(modo===3){
        $('#impr_resolucion').hide();
    }
}

  

    
    
    
    
 
}, 200);
    
    
    


    



}

