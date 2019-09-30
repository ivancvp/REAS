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

 var aprobacion=response[0];

 console.log(aprobacion)
 
  $('#observaciones_aprobacion').val((aprobacion.observaciones?aprobacion.observaciones:''));
  $('#ver_obs_aprobacion').hide();

/*Mensaje del estado de la ficha social*/
if(aprobacion.estado_ficha=='2'){
  $('#titulo_ficha_social').append('<h3 style="color:#585858">Ficha social en estado de aprobación</h3>');
  $('#validar_ficha').hide();
  $('#ver_obs_aprobacion').show();
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

}if(aprobacion.estado_ficha==''){
  consulta(usuario_identificador);
}

 if(aprobacion.estado_ficha=='2' || aprobacion.estado_ficha=='3'){

   $("input,select[data-id],textarea[data-id],.checkbox").prop('disabled', true).css("background-color","#FBFBFB");

   $("#addFamily").remove();
   $('.float').remove();
   $('#validar_ficha').remove();
 }

}

});

$('input[data-id="p2_8"]').prop('disabled', true);

function consulta(id){
  $datos = { op: 'get_datos_regreso',id:id};
  $.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: $datos,
  dataType: "json",
  async: false,
  success: function (response) {

    if(response.length>0){

      $('#elaboro_nombre').val(response[0].usuario_id);

      $('#elaboro_contrato').val(response[0].usuario_contrato);
      var MyDate = new Date();
      var MyDateString;

      MyDate.setDate(MyDate.getDate() + 20);

      MyDateString = MyDate.getFullYear()+ '-'
                   + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'+('0' + MyDate.getDate()).slice(-2);
      $('#elaboro_fecha').val(MyDateString);

    }

  }
  });

  }
