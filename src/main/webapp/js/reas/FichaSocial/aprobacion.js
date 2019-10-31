function get_nombres(id){

  $datos = { op: 'get_datos_regreso',id:id};
  $.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: $datos,
  dataType: "json",
  async: false,
  success: function (response) {           
        resultado = response;          
  },
  error: function (response) {
    
 }
  });

  return resultado;
  }


$datos = { op: 'consulta_aprobacion_ficha_social',id: $('#id_ficha_social').val()};
$.ajax({
type: "GET",
url: "GestionConsultas",
data: $datos,
dataType: "json",
async: false,
success: function (response) {

if(response.length>0){

 var aprobacion=response[0];

 console.log(aprobacion)
 
  $('#observaciones_aprobacion').val((aprobacion.observaciones?aprobacion.observaciones:''));

  $('#ver_obs_aprobacion').hide();

  $('#quitar_tarea').hide();



  $('#elaboro_fecha').val(aprobacion.elaboro_fecha.substring(0,10));
  $('#elaboro_contrato').val(aprobacion.usuario_elaboro_contrato);
  $('#elaboro_nombre').val(aprobacion.usuario_id_elaboro);
  consulta(aprobacion.usuario_id_elaboro);

/*Mensaje del estado de la ficha social*/
if(aprobacion.estado_ficha=='2'){
  $('#titulo_ficha_social').append('<h3 style="color:#585858">Ficha social en estado de aprobación</h3>');
  $('#validar_ficha').hide();
  
  if ( $( "#id_actividad" ).length ) {
    $('#ver_obs_aprobacion').show();
  }
}

if(aprobacion.estado_ficha=='1'){
  $('#titulo_ficha_social').append('<h3 style="color:#585858">Ficha social disponible en edición</h3>');
  consulta(usuario_identificador);
}

if(aprobacion.estado_ficha=='4'){
  $('#titulo_ficha_social').append('<h3 style="color:#585858">Ficha social devuelta por modificaciones</h3>');
  consulta(usuario_identificador);
  $('#ver_obs_aprobacion').show();
  $('#observaciones_aprobacion').prop('disabled', true);
  $('#guardar_obs_ficha').remove();

  if ( $( "#id_actividad" ).length ) {

  }else{
    $('#validar_ficha').remove();
  }
  

}

if(aprobacion.estado_ficha=='3'){

  var usuario_aprobo=get_nombres(aprobacion.usuario_id_reviso);
  usuario_aprobo=usuario_aprobo[0].usuario_nombre;

  var usuario_elaboro=get_nombres(aprobacion.usuario_id_elaboro);
  usuario_elaboro=usuario_elaboro[0].usuario_nombre;

  $('#titulo_ficha_social').append('<h3 style="color:#585858">Ficha social Aprobada</h3>');
  $('#titulo_ficha_social').append('<h5 style="color:#5F5F5F">Aprobado por: '+usuario_aprobo+'</h5>');
  $('#titulo_ficha_social').append('<h5 style="color:#5F5F5F">Elaborado por: '+usuario_elaboro+'</h5>');
  $('#titulo_ficha_social').append('<h5 style="color:#5F5F5F">Fecha de aprobación: '+aprobacion.reviso_fecha+'</h5>');

  if ( $( "#id_actividad" ).length ) {
                          
    $('#quitar_tarea').show();
 
  }

}if(aprobacion.estado_ficha==''){
  consulta(usuario_identificador);
}

 if(aprobacion.estado_ficha=='2' || aprobacion.estado_ficha=='3'){

   $("input,select[data-id],textarea[data-id],.checkbox").prop('disabled', true).css("background-color","#FBFBFB");


   $("input").attr("disabled", true);

   $("#addFamily").remove();
   $('.float').remove();
   $('#validar_ficha').remove();

 }




}else{

  $('#titulo_ficha_social').append('<h3 style="color:#585858">Ficha social disponible en edición</h3>');
  consulta(usuario_identificador);

  $('#ver_obs_aprobacion').hide();

  $('#quitar_tarea').hide();

}




}

});

$('input[data-id="p2_8"]').prop('disabled', true);


if(usuario_identificador!=117){
  $('select[data-id="condicion_miembro"]').prop('disabled', true);
}


function consulta(id){
  $datos = { op: 'get_datos_regreso',id:id};
  $.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: $datos,
  dataType: "json",
  async: false,
  success: function (response) {

    console.log(response);

    if(response.length>0){

      $('#elaboro_nombre_real').val(response[0].usuario_nombre);
      $('#elaboro_nombre').val(id);
      $('#elaboro_contrato').val(response[0].usuario_contrato);
    }

  }
  });

  }
