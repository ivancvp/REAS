function gen_adenda(identificador,tipo_estudio){


    var contenido =
            
'  <div class="row"> '+
'      <div class="col-md-12"> '+
'           <div class="form-group"> '+
'                <button type="button" class="btn btn-primary" id="reg_estudio"><i class="fas fa-arrow-left"></i> Regresar a Est. de documentos</button>'+
'           </div> '+
'       </div> '+
'  </div> '+ 

    
'<h2 id="titulo_adenda" style="color:#2E9AFE">Adenda de estudio de documentos</h2>'+
'<h3 style="color:#E67E22;display:none" id="msg_noaprob"> Adenda en aprobación.</h3>'+
'<p>En el siguiente modulo usted podrá subir la información correspondiente a la adenda</p>'+
'<div class="row"> '+
    '<div class="col-md-6"> '+
        '<div class="form-group"> '+
            '<label for="identificador" class="control-label">Identificador</label> '+
            '<input type="text" class="form-control" id="id_adenda" placeholder="identificador" disabled> '+
        '</div> '+
    '</div> '+
    '<div class="col-md-6"> '+
        '<div class="form-group">'+
         '<label >Adenda</label>'+
         '<select class="form-control" id="select_adenda">'+
           '<option value="">Seleccione...</option>'+
         '</select>'+
       '</div>'+
    '</div> '+ 
'</div> '+
 '<div class="row"> '+
    '<div class="col-md-12"> '+
        '<div class="form-group">'+
          '<button class="press press-blue press-ghost" id="subir_adenda">Crear Adenda <i class="fas fa-plus"></i></button>'+
       '</div>'+
    '</div> '+
'</div> '+



gen_adenda_multiple();


return contenido;
   
 }


 function gen_adenda_multiple(){
     
     var contenido=

    '<div id="pre_temporal">'+

    '<div class="row"> '+
        '<div class="col-md-12"> '+
            '<div class="form-group">'+
             '<label >Opción de cargue de adenda</label>'+
             '<select class="form-control data disponible" id="tipo_cargue_adenda">'+
               '<option value="">Seleccione...</option>'+
               '<option value="CREAR DESDE SISTEMA">Crear desde el sistema</option>'+
               '<option value="SUBIR PDF">Subir adenda escaneada</option>'+
             '</select>'+
           '</div>'+
        '</div> '+
    '</div> '+

 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <h4>Cambios que trae la adenda</h4>'+
                                '     <p>Si la adenda trae consigo cambios de nombre de los beneficiarios y/o forma de tenencia del predio de clic en el siguiente boton.</p> '+
                                '     <button class="press press-red press-ghost" id="change_data_user"> <i class="fas fa-user-edit"></i> Editar información básica</button>'+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+

'<div id="div_info_basica">'+

'    <div class="panel panel-primary">'+
'      <div class="panel-heading">Edicion de informacion</div>'+
'       <div class="panel-body">'+

'                    <div class="row">'+
'                        <div class="col-md-12">'+
'                            <div class="form-group">'+
'                                <label class="control-label">1.1 Nombre del beneficiario Principal</label>'+
'                                <div class="row">'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="nom_prin_1"  class="form-control disponible sensible obligatorio" placeholder="1er Nombre" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="nom_prin_2"  class="form-control disponible sensible" placeholder="2do Nombre" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="ape_prin_1"  class="form-control disponible sensible obligatorio" placeholder="1er Apellido" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="ape_prin_2"  class="form-control disponible sensible" placeholder="2do Apellido" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <h4>1.2 Cédula beneficiario principal</h4>'+
                                '       <input  type="text"  id="ced1"  class="form-control disponible sensible obligatorio" placeholder="Cédula 1" >                            '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
'                    <div class="row">'+
'                        <div class="col-md-12">'+
'                            <div class="form-group">'+
'                                <label class="control-label">1.3 Nombre del beneficiario Secundario</label>'+
'                                <div class="row">'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="nom_sec_1"  class="form-control disponible sensible" placeholder="1er Nombre" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="nom_sec_2"  class="form-control disponible sensible" placeholder="2do Nombre" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="ape_sec_1"  class="form-control disponible sensible" placeholder="1er Apellido" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="col-md-3">'+
'                                        <div class="form-group">                           '+
'                                            <input  type="text"  id="ape_sec_2"  class="form-control disponible sensible" placeholder="2do Apellido" >                            '+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <h4>1.4 Cédula beneficiario secundario</h4>'+
                                '       <input  type="text"  id="ced2"  class="form-control disponible sensible" placeholder="Cédula 2" >                            '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+

        ' <div class="form-horizontal">'+
        '    <div class="form-group">'+
        '        <label class="control-label col-sm-3">Tipo de tenencia:</label>'+
        '        <div class="col-sm-4">'+
        '            <select class="form-control disponible sensible obligatorio" id="tenencia"><option value="" >Seleccione</option><option value="Propietario(a)" >Propietario(a)</option> <option value="Poseedor(a)">Poseedor(a)</option><option value="Ocupante">Ocupante</option> </select>'+
        '        </div> '+
        '    </div>'+
        ' </div> '+
        
        
        ' <div class="form-horizontal">'+
        '    <div class="form-group">'+
        '      <label class="control-label col-sm-3">Adenda al Estudio de documentos:</label>'+
        '        <div class="col-sm-4">'+
        '           <select class="form-control upd_estudio data disponible obligatorio" id="est_procede" ><option value="" >Seleccione</option><option value="POSITIVO" >Positivo</option> <option value="NEGATIVO">Negativo</option></select>'+
        '        </div> '+
        '    </div>'+
        ' </div> '+

        '                 <div class="row"> '+
        '                     <div class="col-md-12"> '+
        '                           <button class="press press-teal press-ghost" id="save_info_basica">Guardar cambios <i class="fas fa-save"></i></button>           '+
        '                     </div> '+
        '                 </div> '+




'       </div>'+
'    </div>'+

'    </div>'+


'    </div>'+

'<div id="fecha">'+

 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '       <h4>Fecha de la adenda </h4>'+
                                '       <div class="span5 sandbox-container"><input  type="text" class="form-control disponible data fecha obligatorio" id="fecha_adenda" placeholder="Fecha de la adenda"></div> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+

'    </div>'+

'<div id="temporal">'+



 

 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <h4>LINDEROS PARTICULARES </h4>'+
                                '   <div class="form-group"> '+
                                '     <p>Los Linderos fueron tomados de:</p> '+
                                '     <textarea class="form-control data disponible" rows="3" id="fuente_linderos"></textarea> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <h4>OBSERVACIONES Y RECOMENDACIONES JURÍDICAS</h4>'+
                                '     <p>Relacionar en forma Cronológica los hechos que motivan la adenda al Estudio de documentos y el fundamento jurídico que lo sustenta:</p> '+
                                '     <textarea class="form-control data disponible" rows="10" id="motivos_adenda"></textarea> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 
 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <h4>CONCLUSIONES</h4>'+
                                '     <p> Describir las conclusiones y las recomendaciones acorde al decreto 255 de 2013 y normas complementarias</p> '+
                                '     <textarea class="form-control data disponible" rows="10" id="conclusion_adenda"></textarea> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
 

'                 <div class="row"> '+
'                     <div class="col-md-12"> '+
'                           <div class="form-group">'+
'                           <button class="btn btn-danger" id="impr_adenda"><i class="far fa-file-pdf"></i> Generar pdf</button>'+
'                           </div> '+
'                     </div> '+
'                 </div> '+ 

'                 </div> '+


'<div id="div_pdf">'+
 '<p>Por favor cargue un documento adjunto pdf que evidencia la adenda, un (1) solo árchivo pdf es permitido:</p>'+         
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

     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button  class="press press-blue press-ghost" id="save_adenda"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> '+

     '  <div class="row"> '+
     '      <div class="col-md-12"> '+
     '           <div class="form-group"> '+
     '                <button class="press press-teal press-ghost" id="rev_adenda"><i class="glyphicon glyphicon-floppy-disk"></i> Enviar a revisión</button>'+
     '           </div> '+
     '       </div> '+
     '  </div> '+
    '                 <div class="row"> '+
    '                     <div class="col-md-12"> '+
    '                           <div class="form-group">'+
    '                           <button class="press press-green press-ghost" id="quitar_noti"><i class="fas fa-user-times"></i> Tarea completada.</button>'+
    '                           </div> '+
    '                     </div> '+
    '                 </div> '+      
    '                 <div class="row"> '+
    '                     <div class="col-md-12"> '+
    '                           <div class="form-group">'+
    '                               <iframe id="pdf_adenda" style="display:none; width:100%; height: 500px"  > </ iframe>'+
    '                           </div> '+
    '                     </div> '+
    '                 </div> ';
    
     
return contenido;
   
 }


 var tip_estudio='';
 var nom_ela='';
 var nom_apr='';
 var seguir=false;
 var next_adenda=0;
 var borrar_pdf=false;
 var file='';
 
 var sector='';
var modo_adenda='';

var id_act='';
var seguir_archivo=false;

 function logica_adenda(identificador,modo,id_proceso,id_actividad,tipo_estudio,creado_por){


id_act=id_actividad;

$('#quitar_noti').hide();

tip_estudio=tipo_estudio;
modo_adenda=modo;
console.log(modo_adenda)
var dia_de_hoy=moment(new Date()).format("YYYY-MM-DD"); 

 $('.sandbox-container input').datepicker({
    format: "yyyy-mm-dd",
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

$(".fecha").inputmask("datetime",{ alias: "datetime", inputFormat: "yyyy-mm-dd",clearIncomplete: true });






$.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: { op: 'get_sector',id:identificador},
    dataType: "json",
    async: false,
    success: function (response) {
      sector=response[0].Sector;
    }, error: function (a) {

    }


    }); 


$('#div_info_basica').hide();

$('#pre_temporal').hide();
 
$('#change_data_user').click(function(){
    $('#div_info_basica').toggle("slow");
});



$('#save_info_basica').click(function(){
    
   verificar_datos_sensibles();

});


function verificar_datos_sensibles(){
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
 $.confirm({
    title: 'Aviso de confirmacion!',
    icon: 'fa fa-warning',
    content: 'Usted va a modificar datos en la base de datos, desea continuar!',
    theme: 'modern',
    buttons: {
        confirmar:{
            btnClass: 'btn-primary',
            action:function () {
                $.alert('Confirmado!');                    
                    guardar_datos_sensibles();
                }            
            },
        cancelar:{
            btnClass: 'btn-danger',
            action:function () {
                    $.alert('Cancelado!');
                }
            }
    }
});    
}
    
}


if(sector==='Vereditas'){
    vereditas=true; 
    tipo_estudio=get_decreto_vereditas(identificador);
}else{
     vereditas=false; 
}

      
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: {
                op: 'get_info_adenda_general',
                identificador: identificador,
                tipo_estudio:tipo_estudio
              },
        dataType: "json",
        async: false,
        success: function (response) {
            
           var total_adendas=(response[0]["total"]?response[0]["total"]:0); 
           
           next_adenda=total_adendas;
           
            for (var i = 1; i <= total_adendas; i++) {
               $('#select_adenda').append('<option value="'+i+'">Adenda '+i+'</option>');
            }
          
        }, error: function (a) {
            
        }
    });
    
 
 
 $("#select_adenda option:last").attr("selected", "selected");
    
    if($("#select_adenda option:last").val()!==""){
        get_info_adenda(identificador,next_adenda,tipo_estudio);
        get_pdf(identificador,next_adenda);
        $('#pre_temporal').show();
    }else{
        ocultar();
    }
 

 $('#select_adenda').change(function(){

    if($('#select_adenda').val()!==""){
         refresh_data();
     }else{
         ocultar();
     }
     if($('#pdf_adenda').is(":visible")){
         $('#pdf_adenda').hide();
     }
 });
 

 
 function refresh_data(){
         $(".data").val("");
         get_info_adenda(identificador,$('#select_adenda').val(),tipo_estudio);
         
         
         try {
file.fileinput('destroy');
}
catch(error) {
  console.error(error);

}
         
         
         
         get_pdf(identificador,$('#select_adenda').val());
     
 }
 
 
  $('#subir_adenda').on('click',function(){
     next_adenda=next_adenda+1;
     
     
    $datos = {
      op: 'get_info_adenda',
      identificador: identificador,
      tipo_estudio:tipo_estudio,
      consecutivo:(next_adenda-1)
    };
      
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if(response.length>0){
                seguir=(response[0]["concepto"]?response[0]["concepto"]:false);
            }else{
                seguir=false;
            }
           
        }
    });

if(next_adenda===1){
    seguir=true;
}
if(seguir){
    $('#pre_temporal').show();
       
    
    $.confirm({
        title: 'Adenda disponible para elaborar!',
        content: 'Ahora puede editar la adenda.',
        type: 'green',
        typeAnimated: true,
        buttons: {
            Cerrar: function () {
            }
        }
    });
    
    
    $('#select_adenda').append('<option value="'+next_adenda+'">Adenda '+next_adenda+'</option>');
    $("#select_adenda option:last").attr("selected", "selected");
        
    if($("#select_adenda option:last").val()!==""){
        refresh_data();
        
    }else{
        ocultar();
    }
 
     $('#msg_noaprob').show().text("Adenda disponible para edición");
}else{
    
  $.confirm({
    title: 'Problema de creación de adenda',
    content: 'La adenda no puede ser creada dado que la actual no ha sido aprobada',
    type: 'red',
    typeAnimated: true,
    buttons: {
        Cerrar: function () {
        }
    }
});

}

 });
 
 $('#reg_estudio').click(function(){
    hola({formulario:2,index:0,modo:1});
 });


function ocultar(){
    $('#div_pdf').hide();
    $('#temporal').hide();
    $('#save_adenda').hide();
    $('#rev_adenda').hide(); 
    $('#fecha').hide();
}


    
$('#tipo_cargue_adenda').on('change',function(){
    verificar_div();
});




$('#save_adenda').click(function () {

    guardar($('#select_adenda').val(),0,tipo_estudio);
 }); 
    

$('#impr_adenda').click(function(){
  

  
 var doc = imp_adenda(nom_ela,nom_apr,tipo_estudio);

    
$('#pdf_adenda').css('display', 'inline');

pdfMake.createPdf(doc).getDataUrl(function (outDoc) {
    document.getElementById('pdf_adenda').src = outDoc;
});   
    
});


$('#id_adenda').val(identificador);   


$("input:disabled").css({"backgroundColor":"white"});



/*Manejo del pdf de las adendas */




//get_pdf(identificador,1);

if(modo===2){
    bloqueo(); 
}

if(modo===4){
    if(usr_funct.includes(23)===false){
        bloqueo(); 
        $('#subir_adenda').hide();
    }      
}

     
 if(!vereditas){
    contar=true;
 }
 


/*Enviar a revisión la adenda*/
$('#rev_adenda').click(function(){
    
    if(contar){
        var str=$(this).attr('id');
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
        guardar($('#select_adenda').val(),1,tipo_estudio);
        
        var asignado_a=get_usuario_tarea(22);
        
        
        if(identificador.includes("CP19")){

           asignado_a=get_usuario_tarea(26);
           
        }
        
        if(creado_por!==asignado_a){
            asignado_a=creado_por;
        }


        var observacion_inicial='Envio Cargue de adenda para revisión';
        var creador=usuario_identificador;
        
        if(tipo_estudio==='255'){
            envio_de_notificacion(identificador,1,22,21,creador,asignado_a,1,observacion_inicial,''); 
        }else{
            envio_de_notificacion(identificador,1,27,26,creador,asignado_a,1,observacion_inicial,''); 
        }

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Revisión de cargue de la adenda</p>';

        correo(creador,asignado_a,"Revisión de Cargue de adenda",msg,id_proceso);
        
       
       $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
         });

        $('#modal_form').modal('toggle'); 
        
        if(modo===3 || modo===2 || modo===1){
            quitar_tarea_lider(id_actividad);
        }else{
            location.reload();
        }
        
        }
       



    }else{
       alertify.error("Por favor suba un documento pdf con la adenda"); 
    }


    
});



$('#quitar_noti').unbind("click").click(function(){

    if(seguir_archivo){
        
        quitar_tarea_lider(id_act);
        $('#modal_form').modal('hide'); 

        $("#not_update").remove();
          $.getScript("alerta/notificaciones.js", function(){
        });
        
     
    }else{
        $.alert({
          title: 'Tarea incompleta',
          content:'Por favor cargue el documento PDF de la adenda y de click en subir archivo'
        });
    }

    
});

}


function verificar_div(){
    
      if($('#tipo_cargue_adenda').val()==="CREAR DESDE SISTEMA"){
        $('#temporal').show();
        $('#save_adenda').show();
        $('#rev_adenda').show();
        $('#fecha').show();
    }else if($('#tipo_cargue_adenda').val()==="SUBIR PDF"){
        $('#temporal').hide();
        $('#div_pdf').show();
        $('#save_adenda').show();
        $('#rev_adenda').show();
        $('#fecha').show();
       
    }else{
       $('#fecha').hide();
        $('#div_pdf').hide();
        $('#temporal').hide();
        $('#save_adenda').hide();
        $('#rev_adenda').hide();
    }  
}

function bloqueo(){
    $('#rev_adenda').hide();
    $('.kv-file-remove').hide();
    $('.btn-file').hide();
    $('.disponible').prop('disabled', true);
    $(".disponible").css({"backgroundColor":"white"});
    $('#save_adenda').hide();
    $('#save_info_basica').hide();
}


 function get_info_adenda(identificador,consecutivo,tipo_estudio){


     $datos1 = {
      op: 'get_info_adenda_info_sensible',
      identificador: identificador,
      tipo_estudio:tipo_estudio
    };    
    
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos1,
        dataType: "json",
        async: false,
        success: function (response) {
            
           if(response.length>0){
               
           $.each( response[0], function( key, value ) {               
                   $('#'+key).val(value);
              });  
            }else{
                $('.disponible').val('');
                $('.disponible').prop('disabled', false);
            }
        }, error: function (a) {
            
        }
    });
    
    $datos = {
      op: 'get_info_adenda',
      identificador: identificador,
      tipo_estudio:tipo_estudio,
      consecutivo:consecutivo
    };
    
      var resultado;
      
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            
            if(response.length>0){
              resultado=response;
              
           $.each( response[0], function( key, value ) {
                   $('#'+key).val(value);
              });  
            }else{                
                $('.disponible').prop('disabled', false);
            }
            
           
        }, error: function (a) {
            
        }
    });
  

verificar_div();     


if(!jQuery.isEmptyObject( resultado )){

  nom_ela=(resultado[0].elaboro?resultado[0].elaboro:'');
  nom_apr=(resultado[0].aprobo?resultado[0].aprobo:'');
  seguir=(resultado[0].concepto?resultado[0].concepto:false);
  
   if((resultado[0].concepto?resultado[0].concepto:'')===true){
       $('#div_pdf').show();
       bloqueo();
       borrar_pdf=true;
    
       $('#quitar_noti').show();
       
   }else{
       $('#quitar_noti').hide();
       borrar_pdf=false;
       $('.disponible').prop('disabled', false);
         
   }  
   


if(modo_adenda===4){
    $('#quitar_noti').hide();
}

if((resultado[0].estado?resultado[0].estado:'')===1){
    bloqueo();
 $('#msg_noaprob').show().text("Adenda en Aprobación.");
}

if((resultado[0].estado?resultado[0].estado:'')===2){

 $('#msg_noaprob').show().text("Adenda devuelta por modificaciones.");
}
if((resultado[0].estado?resultado[0].estado:'')===2 && modo_adenda==4){
bloqueo(); 
}

if((resultado[0].estado?resultado[0].estado:'')===3){
    
    bloqueo();
 $('#msg_noaprob').show().text("Adenda Aprobada.");
 $('#subir_adenda').hide();
}

if((resultado[0].estado?resultado[0].estado:'')===3 && modo_adenda===4){
    $('#subir_adenda').show();
}

}


if($('#select_adenda').val()!==""){
   var data=consulta_adenda_aprobado_sistema(identificador,$('#select_adenda').val());
}




//if(data.length){
//
//    if((data[0].concepto?data[0].concepto:false)===true){
//        bloqueo();
//        borrar_pdf=true;
//    }/*else if((data[0].concepto?data[0].concepto:'')===''){
//        bloqueo();
//        borrar_pdf=true;
//        $('#titulo_adenda').append('<div class="form-group" id="msg_pdf">'+
//            ' <label class="text-warning">Adenda en proceso de aprobación.</label>'+
//        '</div> ');
//    }*/else{
//        $('.disponible').prop('disabled', false);
//    }   
//
//}

     
 }



function guardar(consecutivo,estado,tipo_estudio){
    
    if (typeof estado === 'undefined') {
        estado=0;
    }

var obj = {}
obj['op'] = "save_adenda";
obj['consecutivo'] = consecutivo;
obj['tipo_estudio'] = tipo_estudio;
obj['usuario_nombre'] = usuario_nombre; 
obj['identificador'] = $('#id_adenda').val();
obj['estado'] = estado;
var adenda_pro="";

if($('#est_procede').val()==="POSITIVO"){
    adenda_pro="Si";
}else if($('#est_procede').val()==="NEGATIVO"){
    adenda_pro="No";
}

obj['adenda_procede'] = adenda_pro;


$('.data').each(function(index) {
    
    if($(this).hasClass('checkbox')){
        
            var id=$(this).prop('id');
            var dato='';
          $('#'+id+' :checkbox').each(function(){        
                if($(this).is(":checked")){
                     dato=$(this).next().text();
                }else{

                }
            
        });
        obj[$(this).prop('id')] = dato

    }
     
    
    else{
        
        var valor=$(this).val().toUpperCase().trim();
        
        obj[$(this).prop('id')] = valor
    }
    
    
    
});



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
    
      $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {op:'indice_tablas_escrituras'},
        dataType: "json",
        async: false,
        success: function (response) {

        }, error: function (a) {
            
        }


    }); 

function guardar_datos_sensibles(){
    
var obj = {};
obj['op'] = "guardar_datos_sensibles_adenda";
obj['usuario_nombre'] = usuario_nombre; 
obj['identificador'] = $('#id_adenda').val();
obj['tipo_estudio'] = tip_estudio;

var procede='';
if($('#est_procede').val()==="POSITIVO"){
    procede='Si';
}else{
    procede='No';
}

obj['procede'] = procede;


$('.sensible').each(function(index) {

        var valor=$(this).val().trim().replace(/\s+/g, " ");
        
        obj[$(this).prop('id')] = valor;

    
});



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




    
    
function get_pdf(identificador,consecutivo){


var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_adenda",
            identificador: identificador,
            consecutivo:consecutivo
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
                            seguir_archivo=true;

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

 file=$("#input-b2").fileinput({
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
                descripcion: 'Adenda Estudio de Documentos id='+consecutivo,
                identificador: identificador,
                tipo_documento: '240012',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_adenda',
            identificador: identificador,
            consecutivo:consecutivo
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
    seguir_archivo=true;
    $('.fileinput-upload').hide();
    $('.btn-file').hide();     
});







}

