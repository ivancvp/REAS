
/*usuario con permiso =3 puede editar la ficha social*/
if(!usr_funct.includes(3)){
  $("input[data-id],select[data-id],textarea[data-id],.checkbox").prop('disabled', true);
  $("#addFamily").hide();
  $('.float').hide();
}

$('select[data-id="version"]').change(function(){
  if($(this).val()=="8"){
    $('table[data-op="3m"] td:nth-child(7), table[data-op="3m"] th:nth-child(7)').hide();

//cambio de la pregunta 3.9
    $('#btn_msg_3_9a').hide();
    $('#btn_msg_3_9b').show();
//cambio de la pregunta 3.10

  $('#btn_msg_3_10_a').hide();
  $('#btn_msg_3_10_b').show();

  //cambio de opciones de acuerdo a la versión
  $('option[version="8"]').show();
  $('option[version="old"]').hide();


 $('select[data-id="p8_6_3"]').parents('.row').hide();

  }else{
    $('table[data-op="3m"] td:nth-child(7), table[data-op="3m"] th:nth-child(7)').show();
    $('select[data-id="p8_6_3"]').parents('.row').show();

//cambio de la pregunta 3.9
    $('#btn_msg_3_9a').show();
    $('#btn_msg_3_9b').hide();

//cambio de la pregunta 3.10
    $('#btn_msg_3_10_a').show();
    $('#btn_msg_3_10_b').hide();

//cambio de opciones de acuerdo a la versión
    $('option[version="8"]').hide();
    $('option[version="old"]').show();

  }


}).change();

//oculta boton de borrar miembro de la familia
$('#del_fam').hide();

$('.checkbox').click(function(e){
  e.preventDefault();


  if($(this).find(' label input[type="checkbox"]').prop('checked')) {
      $(this).find(' label input[type="checkbox"]').prop('checked',false);
  } else {
        $(this).find(' label input[type="checkbox"]').prop('checked',true);
  }


});

//$('input[type="checked"]').setAttribute("checked", "checked");
function habilitar_checkbox(num_integrantes){
  var hide_title=num_integrantes;
  var hide_body=num_integrantes-1;
  $(".check thead").find('th:eq('+hide_title+')').nextAll().hide();
  $(".check tr").find('td:eq('+hide_body+')').nextAll().hide();
}


function validacion(){


  $(".numto999").on('input', function (e) {

    var term = $(this).val();
    var re = new RegExp("^([0-9]){1,4}$");
    if (!re.test(term)) {
          $(this).val("");
    }
  });

  $('.documento').keyup(function() {
   this.value = this.value.replace(/\s/g,'');
   this.value = this.value.replace(/\./g, "");
   this.value = this.value.replace(/\,/g, "");
  });


  $('#telefono_cel').keyup(function() {
    var term = $(this).val();
    var str = term.replace(/[a-z`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi,'');

    var tel=str.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    $(this).val(tel);
  });

  $('#sin_telefono_cel').click(function(){
    $('#telefono_cel').val('NO INFO');
  });

  $('#sin_telefono_fijo').click(function(){
    $('#telefono_fijo').val('NO INFO');
  });

  $('#telefono_fijo').keyup(function() {
    var term = $(this).val();

    var str = term.replace(/[a-z`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi,'');

    var tel=str.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    
  });


//Todos los textos a mayusculas

    $('input:not(.fecha)').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });
    $('textarea').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });


//Valores de moneda
$('.moneda').keyup(function(event) {

  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40){
    event.preventDefault();
  }

  $(this).val(function(index, value) {
    return value
      .replace(/\D/g, "")
      .replace(/([0-9])([0-9]{0})$/, '$1')
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")
    ;
  });



});

//validaciòn en cambio de la versiòn de la fichasocial


$( "select[data-id='version']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="6"){



  $.confirm({
    title: 'Mensaje',
    content: 'Diligencie las preguntas de la ficha teniendo en cuenta que son de la ficha social versión 7',
    type: 'dark',
    icon: 'fa fa-spinner fa-spin',
      closeIcon: function(){
          return false; // to prevent close the modal.
          // or
          return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
      },
      // or
      closeIcon: 'aRandomButton', // set a button handler
      buttons: {
          mas: function(){
              $.alert('Debe diligenciar toda la ficha social que presenta la estructura de la ficha social versión 7, adecuando las opciones de la versión 6 a esta plantilla.');
              return false; // you shall not pass
          },
          cerrar: function(){
          }
      }
  });




}

});




//Fechas

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


//calculo del grupo etareo a partir de la edad
$( ".fecha_nacimiento" ).change(function(e) {
e.stopImmediatePropagation();
  var fecha=$(this).val();

  var dob = new Date(fecha);
  var today = new Date();
  var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
  var rango_edad;

if(age>=0 && age<=5){
  rango_edad = "1";
}if(age>5 && age<=12){
  rango_edad = "2";
}
if(age>12 && age<=17){
  rango_edad = "3";
}
if(age>17 && age<=26){
  rango_edad = "4";
}
if(age>26 && age<=59){
  rango_edad = "5";
}
if(age>59 && age<=120){
  rango_edad = "6";
}
if(age<0 || age>120){
  $(this).val("");
  alert("fecha de nacimiento no valida");
}
var indice=$(this).parents("tr").find("th").text();

if(rango_edad=="1"){
  $('table[data-op="5m"] tr').eq(indice).find('select[data-id="p5_5"]').attr("disabled", false);
}else {
  $('table[data-op="5m"] tr').eq(indice).find('select[data-id="p5_5"]').val("NO APLICA").attr("disabled", true);
}

$(this).parents("tr").find("select[data-id='p2_012']").val(rango_edad);

});

//tipo de beneficiario validación.

$('.tipo_ben').on("change",function(e){
  e.preventDefault();
  e.stopImmediatePropagation();

  var indice= $(this).index('.tipo_ben');
  var valor=$(this).val();

  $('.tipo_ben').each(function(key,value) {
    if($(this).val()==valor){
      if($(this).index('.tipo_ben')!==indice){
        $(this).val("");
      }
    }

  });


})

//ocultar el checkbox para todos menos el ultimo miembro de la familia
$('table[data-op="2m"] tr:not(:last-child)').find('div.checkbox').hide();

//borrado de miembro en la familia
$('.drop_family').change(function(){
  if($(this).is(":checked")) {
    $('#del_fam').show();
  }else {
    $('#del_fam').hide();
  }
});


//validación pregunta 3.6
$( "select[data-id='p3_6']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="SI"){
  $(this).parents("tr").find("select[data-id='p3_7'],select[data-id='p3_8'],select[data-id='p3_9']").prop('disabled', false);
}
if($(this).val()==="NO"){
  $(this).parents("tr").find("select[data-id='p3_7'],select[data-id='p3_8'],select[data-id='p3_9']").val("").prop('disabled', true);
}

}).change();




//validación pregunta 4.1
$( "select[data-id='p4_1']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="6"){
  $(this).parents("tr").find("input[data-id='p4_2']").prop('disabled', false);
  $(this).parents("tr").find("input[data-id='p4_2']").addClass('obligatorio');

}else{
  $(this).parents("tr").find("input[data-id='p4_2']").val("").prop('disabled', true);
  $(this).parents("tr").find("input[data-id='p4_2']").removeClass('obligatorio');
  $(this).parents("tr").find("td").removeClass( "has-error" );
  $(this).parents("tr").find("td").find("span.error").remove();

}

}).change();

//validación pregunta 5.1
$( "select[data-id='p5_1']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="SI"){
  $(this).parents("tr").find("select[data-id='p5_2']").prop('disabled', false);
}else{
  $(this).parents("tr").find("select[data-id='p5_2']").val("").prop('disabled', true);
}

}).change();

//validación pregunta 5.3
$( "select[data-id='p5_3']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO"){
  $(this).parents("tr").find("select[data-id='p5_4']").prop('disabled', false);
}else{
  $(this).parents("tr").find("select[data-id='p5_4']").val("").prop('disabled', true);
}

}).change();

//pregunta 5.5
$( "select[data-id='p5_5']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()===""){
  $(this).addClass('obligatorio');

}else{
  $(this).removeClass('obligatorio');
  $(this).parents("td").removeClass( "has-error" );
  $(this).parents("td").find("span.error").remove();
}

}).change();

//validación pregunta 6.1
$( "select[data-id='p6_1']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()==="NO SABE"){
  $(this).parents("tr").find("select[data-id='p6_2']").val("").prop('disabled', true);
}else{
  $(this).parents("tr").find("select[data-id='p6_2']").prop('disabled', false);
}

}).change();

//validación pregunta 6.3
$( "select[data-id='p6_3']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $(this).parents("tr").find("input[data-id='p6_4'],select[data-id='p6_5']").val("").prop('disabled', true);

  $(this).parents("tr").find("input[data-id='p6_4']").removeClass('obligatorio');
  $(this).parents("tr").find("td").removeClass( "has-error" );
  $(this).parents("tr").find("td").find("span.error").remove();

}else{
  $(this).parents("tr").find("input[data-id='p6_4'],select[data-id='p6_5']").prop('disabled', false);
  $(this).parents("tr").find("input[data-id='p6_4']").addClass('obligatorio');

}

}).change();

//validación pregunta 7.4
$( "select[data-id='p7_4']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $(this).parents("tr").find("input[data-id='p7_5'],select[data-id='p7_6a'],input[data-id='p7_6b']").val("").prop('disabled', true);
  $(this).parents("tr").find("input[data-id='p7_5']").removeClass('obligatorio');
  $(this).parents("tr").find("td").removeClass( "has-error" );
  $(this).parents("tr").find("td").find("span.error").remove();
}else {
  $(this).parents("tr").find("input[data-id='p7_5']").addClass('obligatorio');
  $(this).parents("tr").find("input[data-id='p7_5'],select[data-id='p7_6a'],input[data-id='p7_6b']").prop('disabled', false);

}

}).change();

//validación pregunta 7.6
$( "select[data-id='p7_6a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $(this).parents("tr").find("input[data-id='p7_6b']").val("").prop('disabled', true);
  $(this).parents("tr").find("input[data-id='p7_6b']").removeClass('obligatorio');
  $(this).parents("tr").find("td").removeClass( "has-error" );
  $(this).parents("tr").find("td").find("span.error").remove();
}else {
  $(this).parents("tr").find("input[data-id='p7_6b']").addClass('obligatorio');
  $(this).parents("tr").find("input[data-id='p7_6b']").prop('disabled', false);

}

}).change();


//validación pregunta 7.7
$( "select[data-id='p7_7_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()==="" ){
  $("input[data-id='p7_7_b']").val("").parent().hide();
  $("input[data-id='p7_7_b']").removeClass('obligatorio');
  $("input[data-id='p7_7_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p7_7_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p7_7_b']").parent().show();
  $("input[data-id='p7_7_b']").addClass('obligatorio');

}

}).change();

//validación pregunta 7.8
$( "select[data-id='p7_8_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p7_8_b']").val("").parent().hide();
  $("input[data-id='p7_8_b']").removeClass('obligatorio');
  $("input[data-id='p7_8_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p7_8_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p7_8_b']").parent().show();
  $("input[data-id='p7_8_b']").addClass('obligatorio');
}

}).change();

//validación pregunta 7.9
$( "select[data-id='p7_9_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p7_9_b']").val("").parent().hide();
  $("input[data-id='p7_9_b']").removeClass('obligatorio');
  $("input[data-id='p7_9_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p7_9_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p7_9_b']").parent().show();
  $("input[data-id='p7_9_b']").addClass('obligatorio');
}

}).change();


//validación pregunta 7.10


$('#condition_p710').hide();

$('select[data-id="p7_010"]').change(function(e) {
  e.stopImmediatePropagation();

  if($(this).val()==="6"){
    $('#condition_p710').show();
  }else{
    $('#condition_p710').hide();

  }

}).change();

//validación pregunta 8.1
$( "select[data-id='p8_1_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()!=="5"){
  $("input[data-id='p8_1_b']").val("").parent().hide();
  $("input[data-id='p8_1_b']").removeClass('obligatorio');
  $("input[data-id='p8_1_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_1_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_1_b']").parent().show();
  $("input[data-id='p8_1_b']").addClass('obligatorio');

}

}).change();

//validación pregunta 8.3
$( "select[data-id='p8_3_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()!=="4"){
  $("input[data-id='p8_3_b']").val("").parent().hide();
  $("input[data-id='p8_3_b']").removeClass('obligatorio');
  $("input[data-id='p8_3_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_3_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_3_b']").parent().show();
  $("input[data-id='p8_3_b']").addClass('obligatorio');

}

}).change();


//validación pregunta 8.4.1
$( "select[data-id='p8_4_1_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p8_4_1_b']").val("").parent().hide();
  $("input[data-id='p8_4_1_b']").removeClass('obligatorio');
  $("input[data-id='p8_4_1_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_4_1_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_4_1_b']").parent().show();
  $("input[data-id='p8_4_1_b']").addClass('obligatorio');

}

}).change();

//validación pregunta 8.4.2
$( "select[data-id='p8_4_2_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO"  || $(this).val()===""){
  $("input[data-id='p8_4_2_b']").val("").parent().hide();
  $("input[data-id='p8_4_2_b']").removeClass('obligatorio');
  $("input[data-id='p8_4_2_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_4_2_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_4_2_b']").parent().show();
  $("input[data-id='p8_4_2_b']").addClass('obligatorio');

}

}).change();

//validación pregunta 8.4.3
$( "select[data-id='p8_4_3_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p8_4_3_b']").val("").parent().hide();
  $("input[data-id='p8_4_3_b']").removeClass('obligatorio');
  $("input[data-id='p8_4_3_b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_4_3_b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_4_3_b']").parent().show();
  $("input[data-id='p8_4_3_b']").addClass('obligatorio');

}

}).change();

//validación pregunta 10.1
$( "select[data-id='p10_1']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p10_2a']").val("").parent().hide();
  $("input[data-id='p10_2b']").val("").parent().hide();
  $("input[data-id='p10_2a'],input[data-id='p10_2b']").removeClass('obligatorio');
  $("input[data-id='p10_2a'],input[data-id='p10_2b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p10_2a'],input[data-id='p10_2b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p10_2a']").parent().show();
  $("input[data-id='p10_2b']").parent().show();
  $("input[data-id='p10_2a'],input[data-id='p10_2b']").addClass('obligatorio');

}

}).change();

//validación pregunta 12.1.1
$( "select[data-id='p12_1_1_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").val("").parent().hide();

  $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").removeClass('obligatorio');
  $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").parents("div").removeClass( "has-error" );
  $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").parents("div").find("span.error").remove();

}else{
    $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").parent().show();
    $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").addClass('obligatorio');

}

}).change();


//validación pregunta 12.1.2
$( "select[data-id='p12_1_2_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p12_1_2_b'],input[data-id='p12_1_2_c']").val("").parent().hide();

  $("input[data-id='p12_1_2_b'],input[data-id='p12_1_2_c']").removeClass('obligatorio');
  $("input[data-id='p12_1_2_b'],input[data-id='p12_1_2_c']").parents("div").removeClass( "has-error" );
  $("input[data-id='p12_1_2_b'],input[data-id='p12_1_2_c']").parents("div").find("span.error").remove();
}else{
    $("input[data-id='p12_1_2_b'],input[data-id='p12_1_2_c']").parent().show();

    $("input[data-id='p12_1_1_b'],input[data-id='p12_1_1_c']").addClass('obligatorio');

}

}).change();

//validación pregunta 12.1.3
$( "select[data-id='p12_1_3_a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p12_1_3_b'],input[data-id='p12_1_3_c']").val("").parent().hide();

  $("input[data-id='p12_1_3_b'],input[data-id='p12_1_3_c']").removeClass('obligatorio');
  $("input[data-id='p12_1_3_b'],input[data-id='p12_1_3_c']").parents("div").removeClass( "has-error" );
  $("input[data-id='p12_1_3_b'],input[data-id='p12_1_3_c']").parents("div").find("span.error").remove();

}else{
    $("input[data-id='p12_1_3_b'],input[data-id='p12_1_3_c']").parent().show();
    $("input[data-id='p12_1_3_b'],input[data-id='p12_1_3_c']").addClass('obligatorio');

}

}).change();





}


$('#validar_ficha').click(function(){

var i=obligatorio();
if(i>0){
  $.alert({
    title: 'Alerta!',
    content: 'Por favor revise los campos obligatorios marcados en rojo.',
    type: 'red',
    typeAnimated: true,
    buttons: {
        Cerrar: {
            text: 'Cerrar'
        }
    }
});

}else{



  $.confirm({
      title: 'Mensaje de confirmación!',
      content: 'Desea enviar la ficha social a revisión?',
      type: 'dark',
      typeAnimated: true,
      buttons: {
          Si: {

            action: function(){

                var responsable_proceso=152;
                var act_padre=17;
                var identificador=$('#id_ficha_social').val();

                envio_de_notificacion(''+identificador+'',5,18,act_padre,''+usuario_identificador+'',''+responsable_proceso+'',1,'Aprobación de Ficha Social',null);

                var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> '+
                ' Para aprobación de Ficha Social.</p><p><strong>Observaciones: </strong></p>';

                correo(usuario_identificador,responsable_proceso,"Aprobación de Ficha Social",msg,"Ficha Social");

                var obj = {}
                obj["identificador"] =identificador;
                obj["op"] ='insertar_pre_aprobacion_social';
                obj["nombre_elaboro"] =usuario_nombre+" - "+usuario_contrato;
                obj["estado_ficha"] =2;
                $.ajax({
                  type: "GET",
                  url: "GestionConsultas",
                  data: obj,
                  dataType: "json",
                  async: false,
                  success: function (response) {
                  },
                });

            }
          },
          No: {

          }
      }
  });
}




});



//validaciòn de los checkbox.



$('.opc_unica').find(".checkbox label span").click(function() {

  var elemento=$(this)

  var seleccion_td=$(this).closest("td").index()-1;

  var columna=$(this).closest("tbody")

  $('.opc_unica tr').each(function () {

    
    $(this).find("td:eq("+seleccion_td+")").find(' label input[type="checkbox"]').prop('checked',false);



});


  
});



















function obligatorio(){

 var i=0;

var j=0;
var k=0;

$("span.warning").remove();

$('select[data-id="tipo_beneficiario"]').each(function(key,value){
  j=j+1;

  if($(this).val()==""){
    k=k+1;
  }

});
$('#tit_tipo_beneficiario').find("span.error").remove();
if(k==(j-1)){
  $('#tit_tipo_beneficiario').append("<span class='error text-danger'> Falta un beneficiario</span>");
  i=1;
}
else if(k==j){
  $('#tit_tipo_beneficiario').append("<span class='error text-danger'> Seleccione beneficiarios</span>");
  i=1;
}else{
  $('#tit_tipo_beneficiario').find("span.error").remove();
}


$('input[data-id="p2_7"]').each(function(key,value){

var fecha_nac=$(this).val();
var fecha_exp=$(this).closest('tr').find('input[data-id="p2_010"]').val()

if(fecha_nac>fecha_exp){
  i=1;
  $(this).closest("td").append("<span class='warning text-warning'> Fecha de nacimiento mayor a la fecha de expedición de la cedula!</span>");
  $(this).closest("tr").find('input[data-id="p2_010"]').closest("td").append("<span class='warning text-warning'> Fecha de expedición menor a la fecha de nacimiento!</span>")
}else{
  $(this).closest("tr").find("span.warning").remove();
}

});


var valida=0;

$('input[data-id="p2_011"]').each(function(key,value) {

var cedula=$(this).val();
var llave=key;

$('input[data-id="p2_011"]').each(function(key,value) {

if(key!=llave){

  if(cedula==$(this).val()){
    $(this).parent().append("<span class='warning text-warning'> Número de identificación repetido</span>");
    i=1;
  }
}


});

});




 $('.obligatorio').each(function(key,value) {
   var campo=$(this);
    if($(this).val()==="" || $(this).val()===null ){
      $('.msj_campos_obligatorios').remove();
      var msj=$(this).closest('.collapse').attr("id");
      $(this).closest( ".collapse" ).show();
      $("div[data-target='#"+msj+"'] > h3").css("color", "red");
      $("div[data-target='#"+msj+"'] > h3").append("<h5 class='msj_campos_obligatorios'>Campos obligatorios en esta sección!</h5>");
      $(this).parent().addClass( "has-error" );
      $(this).parent().find("span.error").remove();
      $(this).after("<span class='error text-danger'> Campo obligatorio!</span>")
      i=i+1;
    }else{
        $('.msj_campos_obligatorios').remove();
        var msj=$(this).closest('.collapse').attr("id");
        $(this).closest(".collapse" ).hide();
        $("div[data-target='#"+msj+"'] > h3").css("color", "#5499C7");
        $(this).parent().removeClass( "has-error" );
        $(this).parent().find("span.error").remove();
    }

 })

 return i;

}
