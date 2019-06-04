
$datos = { op: 'consulta_aprobacion_ficha_social',id: $('#id_ficha_social').val()};
$.ajax({
type: "GET",
url: "GestionConsultas",
data: $datos,
dataType: "json",
async: false,
success: function (response) {
 var aprobacion=response[0];
/*Mensaje dek estado de la ficha social*/
if(aprobacion.estado_ficha=='2'){
  $('#titulo_ficha_social').append('<h3 style="color:#E88C00">Ficha social en estado de aprobación</h3>');
}
if(aprobacion.estado_ficha=='1'){
  $('#titulo_ficha_social').append('<h3 style="color:#E88C00">Ficha social disponible en edición</h3>');
  consulta(usuario_identificador);
}
if(aprobacion.estado_ficha=='3'){
  $('#titulo_ficha_social').append('<h3 style="color:#E88C00">Ficha social Aprobada</h3>');
  $('#titulo_ficha_social').append('<h5 style="color:#5F5F5F">Aprobado por: '+aprobacion.nombre_revisor+'</h5>');
  $('#titulo_ficha_social').append('<h5 style="color:#5F5F5F">Elaborado por: '+aprobacion.nombre_elaboro+'</h5>');
  $('#titulo_ficha_social').append('<h5 style="color:#5F5F5F">Fecha de aprobacioón: '+aprobacion.fecha+'</h5>');
}if(aprobacion.estado_ficha==''){
  consulta(usuario_identificador);
}

 if(aprobacion.estado_ficha=='2' || aprobacion.estado_ficha=='3'){
   $("input[data-id],select[data-id],textarea[data-id],.checkbox").prop('disabled', true);
   $("#addFamily").hide();
   $('.float').hide();
 }

}
});


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
      $('#elaboro_nombre').val(response[0].usuario_nombre);
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
