function gen_financiera_vereditas(){

    var contenido =
        
 '<h2 id="titulo" style="color:#2E9AFE">Información Financiera - Vereditas</h2>'+
 '<p>En el siguiente modulo usted podrá subir la información financiera para el predio ubicado en el séctor de vereditas, recuerde que debe subir los <b> pdf'+
 ' </b> escaneados Archivo para cargar en el repositorio: CDP Certificado Disponibilidad Presupuestal,'+
 '  Copia certificación cuenta de Ahorro Programado, Certificación Registro Presupuestal y Autorización Desembolso.</p>'+
 
 
 '<div id="smartwizard">'+
'    <ul>'+
'        <li><a href="#step-1"><i class="fas fa-align-justify"></i><br /><small>Información básica</small></a></li>'+
'        <li><a href="#step-2"><i class="far fa-file-pdf"></i><br /><small>Adjunto PDF Financiera</small></a></li>'+
'    </ul>'+
'<div>'+
'        <div id="step-1" class="">'+


  '<div class="panel-group">'+
    
    '<div class="panel panel-info">'+
      '<div class="panel-heading">Información registrada en el sistema</div>'+
      '<div class="panel-body">'+
      

'                 <div class="row"> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Identificador</label> '+
                                '     <input type="text" class="form-control data" id="id" placeholder="identificador" disabled> '+
                                '   </div> '+

 '                     </div> '+

 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Nombre del beneficiario</label> '+
                                '     <input type="text" class="form-control" id="nom_ben" placeholder="Nombre del beneficiario" disabled> '+
                                '   </div> '+

 '                     </div> '+

 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Número de documento</label> '+
                                '     <input type="text" class="form-control" id="num_doc" placeholder="Número de documento" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
  '                 <div class="row"> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Número CDP</label> '+
                                '     <input type="text" class="form-control" id="num_cdp" placeholder="CDP" disabled> '+
                                '   </div> '+

 '                     </div> '+

  '                     <div class="col-md-3"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha CDP</label> '+
                            '     <div class="span5 sandbox-container "><input id="fecha_cdp" type="text" class="form-control" placeholder="Fecha CDP" disabled></div>'+
                            '   </div> '+
 '                     </div> '+

 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Número de la resolución</label> '+
                                '     <input type="text" class="form-control" id="num_res" placeholder="Número de la resolución" disabled> '+
                                '   </div> '+

 '                     </div> '+

  '                     <div class="col-md-3"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha Resolución</label> '+
                            '     <div class="span5 sandbox-container "><input id="fecha_res" type="text" class="form-control" placeholder="Fecha Resolución" disabled></div>'+
                            '   </div> '+
 '                     </div> '+
  '                 </div> '+       
      
    '</div>'+
'</div>'+  
  '</div>'+


   '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="numero_res" class="control-label">Número del certificado de registro presupuestal</label> '+
                                '     <input type="text" class="form-control numeric data obligatorio disponible" id="num_rep" placeholder="Número RP"> '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-6"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha Registro presupuestal</label> '+
                            ' <small class="text-muted">Formato válido (dd/mm/yyyy)</small>'+
                            '     <div class="span5 sandbox-container "><input id="fecha_rp" type="text" class="form-control fecha data obligatorio disponible fecha_validate" placeholder="Fecha RP"></div>'+
                            '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 
   '                 <div class="row"> '+
    '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="cdp_res" class="control-label">Número de la cuenta bancaria</label> '+
                                '     <input type="text" class="form-control data obligatorio disponible" id="num_cta" placeholder="Número de cuenta"> '+
         '                     </div> '+
        '                 </div> '+ 
         '                     <div class="col-md-4"> '+
                            '   <div class="form-group"> '+
                                '     <label for="cdp_res" class="control-label">Entidad Bancaria</label> '+
                                '     <input type="text" class="form-control data obligatorio disponible" id="ent_ban" placeholder="Entidad Bancaria"> '+
         '                     </div> '+
        '                 </div> '+ 
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="val_res" class="control-label">Valor a girar</label> '+
                                '<div class="input-group"> '+
                                '<span class="input-group-addon">$</span>'+
                                '     <input type="text" class="form-control moneda numeric data obligatorio disponible" id="val_gir" placeholder="Valor a girar"> '+
                                '   </div> '+
                                '   </div> '+
                       '   </div> '+

        
  '                 </div> '+ 
  
'        </div> '+
'        <div id="step-2" class="">'+
  
      '            <div class="row"> '+  
      '                   <div class="col-md-6"> '+
      '                     <p>CDP Certificado Disponibilidad Presupuestal</p>'+  
      '                     <div class="file-loading"> '+
      '                       <input id="input-b1" name="input-b1" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b1" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+

      '                   <div class="col-md-6"> '+
      '                     <p>Copia certificación cuenta de Ahorro Programado</p>'+  
      '                     <div class="file-loading"> '+
      '                       <input id="input-b2" name="input-b2" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+
 
      '            <div class="row"> '+  
      '                   <div class="col-md-6"> '+
      '                     <p>Certificación Registro Presupuestal </p>'+  
      '                     <div class="file-loading"> '+
      '                       <input id="input-b3" name="input-b3" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b3" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+

      '                   <div class="col-md-6"> '+
      '                     <p>Autorización Desembolso </p>'+  
      '                     <div class="file-loading"> '+
      '                       <input id="input-b4" name="input-b4" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b4" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+  

      '            <div class="row"> '+  
      '                   <div class="col-md-12"> '+
      '                     <p>Orden de pago </p>'+  
      '                     <div class="file-loading"> '+
      '                       <input id="input-b5" name="input-b5" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b5" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+  
        

     '  <br>'+

     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button type="button" class="btn btn-primary" id="enviar_fin_vereditas"><i class="glyphicon glyphicon-share-alt"></i> Enviar a revisión</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> '+
'        </div> '+
'</div> '+
'</div> ';

     
return contenido;
   
 }
 
 function logica_financiera_vereditas(datos,modo){

var identificador='';

if(jQuery.type( datos )==="string"){
    identificador=datos;
}else{
    identificador=datos["identificador"];
}

    

$("input:disabled").css({"backgroundColor":"white"});



$('#smartwizard').smartWizard({
            selected: 0,  // Initial selected step, 0 = first step 
            keyNavigation:true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
            autoAdjustHeight:true, // Automatically adjust content height
            cycleSteps: false, // Allows to cycle the navigation of steps
            backButtonSupport: true, // Enable the back button support
            useURLhash: true, // Enable selection of the step based on url hash
            lang: {  // Language variables
                next: 'Siguiente', 
                previous: 'Anterior'
            },
            toolbarSettings: {
             toolbarExtraButtons: [
			$('<button></button>').text('Guardar ')
					      .addClass('btn btn_hide btn-default')
					      .attr('id', 'save_fin_vereditas')
                      ],
            },
            anchorSettings: {
                anchorClickable: true, // Enable/Disable anchor navigation
                enableAllAnchors: true, // Activates all anchors clickable all times
                markDoneStep: true, // add done css
                enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
            },            
            disabledSteps: [],    // Array Steps disabled
            errorSteps: [],    // Highlight step with errors
            theme: 'arrows',

            transitionSpeed: '400'
      });
     $(".sw-btn-prev").removeClass("btn-secondary").addClass("btn-primary"); 
     $(".sw-btn-next").removeClass("btn-secondary").addClass("btn-success");  
     $('#save_fin_vereditas').append('<i class="glyphicon glyphicon-floppy-disk"></i>');  




    
 var dia_de_hoy=moment(new Date()).format("DD/MM/YYYY");


var puede_borrar=false;
    $datos = {
          op: 'get_info_financiera',
          identificador: identificador
      };
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

           $.each( response[0], function( key, value ) {
               if (key.indexOf('fecha') >= 0) {
                   
                   $('#'+key).val(moment(value).format("DD/MM/YYYY") );
               }else{
                   $('#'+key).val(value);
               }
                    
              });
            var resultado = response[0];  
            
           if(resultado["concepto"]?resultado["concepto"]:false){
                
                $( "#titulo" ).after( '<p>Acta de Entrega cargada por: <b>'+resultado["elaboro"]+' </b></p>' );
 
                $( "#titulo" ).after( '<p>Acta de Entrega aprobada para su cargue por: <b>'+resultado["aprobo"]+' </b></p>' );
                puede_borrar=true;
                $('.disponible').attr('disabled', 'disabled');
                $(".disponible").css({"backgroundColor":"white"});
                $('#enviar_fin_vereditas').hide();  
                $('#save_fin_vereditas').hide();
                
            }   
           
        }
    });


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

$("#fecha_rp").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });


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
    if($(this).val().length>10){
        $(this).val("");
        alertify.error("Valor muy alto");
    }

    
  });
var seg=[0,0,0,0,0,0];


$( "#save_fin_vereditas" ).click(function() {
    guardar_financiera();
});

$( "#enviar_fin_vereditas" ).click(function() {
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

for (var i = 1; i < 6; i++) {
    if($('#input-b'+i).fileinput("getFilesCount")<1){
        conta=conta+1;
        $('#alerta_input-b'+i).show();
        if(seg[i]===1){
          $('#alerta_input-b'+i).hide();  
        }
    }else{
        $('#alerta_input-b'+i).hide();
    }
}

if(conta>0){
    alertify.error("Revise los campos obligatorios");
}else{
    
      guardar_financiera();
    
        var id_actividad = datos["id_actividad"];       
        var actividad_padre=datos["actividad_padre"];
        var tipo_actividad=datos["id_tipo_actividad"];
        var tipo_proceso=datos["id_proceso"];
        var identificador=datos["identificador"];
        var creador=datos["asignado_a"];
        var asignado_a=datos["creado_por"];
        var estado=1;
    
    
        var asignado_a=16;
        var observacion_inicial='Información financiera para su aprobación';

        envio_de_notificacion(identificador,1,11,10,creador,asignado_a,1,observacion_inicial,''); 

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Revisión de cargue de información financiera</p>';

        correo(creador,asignado_a,"Revisión de Cargue de Información Financiera",msg,tipo_proceso);
        quitar_tarea_lider(id_actividad);
    
    $("#not_update").remove();
        $.getScript("alerta/notificaciones.js", function(){
     });
     
    $('#modal_form').modal('toggle');
    
    
}
    
    
    
    
});




function guardar_financiera(){
    
    
var obj = {};
obj['op'] = "save_info_financiera";
obj['usuario_nombre'] = usuario_nombre;

$('.data').each(function(index) {
    
 
    var valor=$(this).val().toUpperCase().trim().replace(/\s+/g, " ").replace(/,/g, "");;
    if($(this).hasClass('fecha')){
        if($(this).val()===""){
            valor='0001-01-01';
        }
    }
        
        obj[$(this).prop('id')] = valor;

});

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
        

    
}









var datos1 = {};
var url_preview1='';
var borrar_pdf;
var contar=false;
var nombre_doc="";

function consulta_pdf(descripcion){
    
    datos1 = {};
    url_preview1='';
    borrar_pdf;
    contar=false;
    nombre_doc="";
    
    
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf",
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

                            datos1["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos1["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview1='ObtenerArchivo?ID='+datos1["1"];
                            nombre_doc= datos1["2"];
                            seguir_archivo=1;
                            borrar_pdf=false;
                            contar=true;
                            
                    }

                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });
}

    



consulta_pdf('CDP Vereditas');
logica_pdf(1,nombre_doc,url_preview1,'CDP Vereditas','240004',contar,borrar_pdf);
consulta_pdf('Ahorro Programado Vereditas');
logica_pdf(2,nombre_doc,url_preview1,'Ahorro Programado Vereditas','240005',contar,borrar_pdf);
consulta_pdf('RP Vereditas');
logica_pdf(3,nombre_doc,url_preview1,'RP Vereditas','240006',contar,borrar_pdf);
consulta_pdf('Desembolso Vereditas');
logica_pdf(4,nombre_doc,url_preview1,'Desembolso Vereditas','240007',contar,borrar_pdf);
consulta_pdf('Orden de pago Vereditas');
logica_pdf(5,nombre_doc,url_preview1,'Orden de pago Vereditas','240010',contar,borrar_pdf);





function logica_pdf(id,nombre_doc,pdf,descripcion,tipo_documento,contar,borrar_pdf){
 
$("#input-b"+id).fileinput({
    theme: 'fa',
    language: 'es',
    initialPreview: [
        pdf
    ],
        initialPreviewFileType: 'pdf', 
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: nombre_doc, key: 1,id:1, downloadUrl:pdf}
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
            op: 'delete_pdf',
            identificador: identificador,
            descripcion:descripcion
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
    validateInitialCount: contar,
    required: true,
   
});

$("#input-b"+id).on("filepredelete", function (event, key, jqXHR, data) {
        var abort = borrar_pdf;
        if(borrar_pdf){
            alertify.error("El archivo no se puede borrar");
        }else{
            seg[id]=0;
        }
        
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });   
 $("#input-b"+id).on('filepreajax', function (event, previewId, index) {
     seg[id]=1;
    });     
    
    
    
}


  if(modo===3 || modo===2){
    $('.disponible').attr('disabled', 'disabled');
    $(".disponible").css({"backgroundColor":"white"});
    $('#save_fin_vereditas').hide();
    $('#enviar_fin_vereditas').hide();
    $('.kv-file-remove').hide();
    $('.btn-file').hide();
} 


    



}

