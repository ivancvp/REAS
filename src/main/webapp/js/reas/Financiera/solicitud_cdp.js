function solicitud_cdp(){

    var contenido =
        
 '<h2 id="titulo" style="color:#2E9AFE">Solicitud de CDP</h2>'+
 '<p>En el siguiente modulo usted podrá solicitar al equipo financiero el CDP'+
 ' Certificado Disponibilidad Presupuestal '+
 '</p>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group "> '+
                                '     <label for="" class="control-label">Identificador</label> '+
                                '     <input type="text"  class="form-control  ver" id="id_form" placeholder="identificador" > '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="" class="control-label">Nombre del beneficiario principal</label> '+
                                '     <input type="text"   class="form-control ver" id="nombre1" placeholder="Nombre del beneficiario" > '+
                                '   </div> '+
 '                     </div> '+
  '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="" class="control-label">Cédula</label> '+
                                '     <input type="text"  class="form-control ver" id="cedula1" placeholder="Cédula" > '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 '<div >'+
 
 '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group "> '+
                                '     <label for="" class="control-label">Barrio</label> '+
                                '     <input type="text"  class="form-control ver" id="barrio1" placeholder="Barrio" > '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="" class="control-label">Localidad</label> '+
                                '     <input type="text"   class="form-control ver" id="localidad1" placeholder="Localidad" > '+
                                '   </div> '+
 '                     </div> '+
  '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="" class="control-label">Dirección</label> '+
                                '     <input type="text"   class="form-control ver" id="direccion1" placeholder="Dirección" > '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 '<div >'+
 
  '                 <div class="row"> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group "> '+
                                '     <label for="" class="control-label">Manzana</label> '+
                                '     <input type="text"  class="form-control ver" id="manzana1" placeholder="Manzana" > '+
                                '   </div> '+
                       '   </div> '+
 '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="" class="control-label">Lote</label> '+
                                '     <input type="text"   class="form-control ver" id="lote1" placeholder="Lote" > '+
                                '   </div> '+
 '                     </div> '+
  '                     <div class="col-md-4"> '+
                                '   <div class="form-group"> '+
                                '     <label for="" class="control-label">Fecha Solicitud CDP</label> '+
                                '     <input type="text"  class="form-control ver upd" id="fecha_solicitud" placeholder="Fecha Solicitud"> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
 '<div >'+
'<div class="row"> '+
 '<div class="col-md-12"> '+
     '<div class="form-group"> '+
         '<label class="control-label">Breve descripción de la solicitud</label> '+
         '<textarea class="form-control obligatorio upd" rows="3" id="objeto_cdp"></textarea>'+
     '</div> '+
 '</div> '+ 
'</div> '+

'<div class="row"> '+
'    <div class="col-md-12">'+
'      <div class="form-group">'+
'        <label>Tipo de resolución </label>'+
'        <select class="form-control upd obligatorio" id="tipo_resol">'+
'          <option value="">Seleccione...</option>'+
'          <option value="VUR"> VUR (Primera vez)</option>'+
'          <option value="ADQUISICION PREDIAL">Adquisición Predial</option>'+
'          <option value="VUR AJUSTE">VUR (Ajuste)</option>'+
'        </select>'+
'      </div>'+
'    </div>'+
'    </div>'+

 ' <div class="row"> '+
 ' <div class="col-md-4"> '+
    '   <div class="form-group"> '+
    '     <label  class="control-label">Valor solicitado del CDP</label> '+
    '        <div class="input-group"> '+
    '           <span style="border-color:#5DADE2"  class="input-group-addon">$</span>'+
    '           <input type="text" style="border-color:#5DADE2" class="form-control obligatorio moneda upd" id="valor_cdp" placeholder="Valor del CDP"> '+
    '   </div> '+
    '   </div> '+
    '   </div> '+
  ' </div> '+
  '<div class="btn-group">'+
'                           <button type="button" class="btn btn-success boton" id="save_cdp"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>'+
'                           <button type="button" class="btn btn-primary boton" id="send_cdp"><i class="glyphicon glyphicon-share-alt"></i> Solicitar CDP</button>'+
'                           <button type="button" class="btn btn-info" id="quitar_tarea"><i class="fas fa-times"></i> Enviar para generar Resolución</button>'+
'</div>';

     
return contenido;
   
 }
 
 
function logica_solicitud_cdp(datos,modo,tipo){



console.log(datos);

var identificador="";
if(tipo===1){
    identificador=datos;
}else if(tipo===2){
    identificador=datos["identificador"];
}

console.log(identificador)

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



  if(modo===3 || modo===2){
    $('.ver').attr('disabled', 'disabled');
    $(".ver").css({"backgroundColor":"white"});
    $("#quitar_tarea").hide();
}
if(modo===2){
    $(".boton").hide();
    $('.upd').attr('disabled', 'disabled');
    $(".upd").css({"backgroundColor":"white"});
}

if(modo===1){

    $(".boton").hide();
    $("#quitar_tarea").show();
}


//funciones

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
            
        var usuario_destino=asignado_a=get_usuario_tarea(34);
        
        var tipo_proceso=0;

        var observacion_inicial='Envio solicitud para nuevo CDP';

        envio_de_notificacion(identificador,6,29,28,usuario_identificador,usuario_destino,1,observacion_inicial,''); 

        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para generación de CDP.</p>';

        correo(usuario_identificador,usuario_destino,"Solicitud para generación de nuevo CDP",msg,tipo_proceso);
        

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
    
  
  //se habilita el modulo para el usuario con funcionalidad 35
 
  if(get_usuario_tarea(35)===parseInt(usuario_identificador)){
      
  }else{
      $('.boton').hide();
      $('.obligatorio ').attr('disabled', 'disabled'); 
      $(".obligatorio ").css({"backgroundColor":"white"});
  }
  

  

}

