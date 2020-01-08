
/*usuario con permiso =3 puede editar la ficha social*/
if(!usr_funct.includes(3)){
  $("input[data-id],select[data-id],textarea[data-id],.checkbox").prop('disabled', true);
  $("#addFamily").hide();
  $('.float').hide();
}



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

if($(this).val()==="5" || $(this).val()==="6" || $(this).val()==="7" || $(this).val()==="8"){



  $.confirm({
    title: 'Mensaje',
    content: 'Diligencie las respuestas de la versión seelccionada ajustandose a la versión 9',
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
              $.alert('Debe diligenciar toda la ficha social que presenta la estructura de la ficha social en versión 9, adecuando las opciones de la versión seleccionada a esta plantilla.');
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

}).change();

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


});


//ver modal de agregar el lugar de nacimiento
$('.agregar_lugar_nacimiento').click(function(e){

  e.preventDefault();
  e.stopImmediatePropagation();

  $('#modal_lugar_nacimiento').modal('toggle');
  $('#modal_lugar_nacimiento .modal-body').css('max-height', '300px');
  $('#modal_lugar_nacimiento .modal-body').css('overflow', 'hidden');

  var posicion=$(this).parents("tr");

  $("#save_lugar_nacimiento").unbind( "click" );
  $('#save_lugar_nacimiento').bind('click', {param1: posicion}, cool_function);

});

function cool_function(event){

  event.preventDefault();
  event.stopImmediatePropagation();
  var select=event.data.param1;

  var muni=$('#municipio').val();
  select.find('input[data-id="p2_8"]').val(muni);
  
}



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
  $(this).parents("tr").find("select[data-id='p3_7'],select[data-id='p3_8']").prop('disabled', false);
}
if($(this).val()==="NO"){
  $(this).parents("tr").find("select[data-id='p3_7'],select[data-id='p3_8']").val("").prop('disabled', true);
}

}).change();

//validación pregunta 3.7
$( "select[data-id='p3_7']" ).change(function(e) {
  e.stopImmediatePropagation();
  
  if($(this).val()==="SI"){
    $(this).parents("tr").find("select[data-id='p3_8']").prop('disabled', false);
  }
  if($(this).val()==="NO"){
    $(this).parents("tr").find("select[data-id='p3_8']").val("").prop('disabled', true);
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

//validación pregunta 5.2
$( "select[data-id='p5_2']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="SI"){
  $(this).parents("tr").find("select[data-id='p5_4a'],input[data-id='p5_4b']").prop('disabled', true);
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

//validación pregunta 5.4
$( "select[data-id='p5_4a']" ).change(function(e) {
  e.stopImmediatePropagation();
  
  if($(this).val()==="14"){
    $(this).parents("tr").find("input[data-id='p5_4b']").prop('disabled', false).addClass('obligatorio');
  }else{
    $(this).parents("tr").find("input[data-id='p5_4b']").val("").prop('disabled', true).removeClass('obligatorio');
    $(this).parents("tr").find("td").removeClass('has-error');
    $(this).parents("tr").find("td").find("span.error").remove();
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
$( "select[data-id='p7_7a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()==="" ){
  $("input[data-id='p7_7b']").val("").parent().hide();
  $("input[data-id='p7_7b']").removeClass('obligatorio');
  $("input[data-id='p7_7b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p7_7b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p7_7b']").parent().show();
  $("input[data-id='p7_7b']").addClass('obligatorio');

}

}).change();

//validación pregunta 7.8
$( "select[data-id='p7_8a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p7_8b']").val("").parent().hide();
  $("input[data-id='p7_8b']").removeClass('obligatorio');
  $("input[data-id='p7_8b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p7_8b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p7_8b']").parent().show();
  $("input[data-id='p7_8b']").addClass('obligatorio');
}

}).change();

//validación pregunta 7.9
$( "select[data-id='p7_9a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p7_9b']").val("").parent().hide();
  $("input[data-id='p7_9b']").removeClass('obligatorio');
  $("input[data-id='p7_9b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p7_9b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p7_9b']").parent().show();
  $("input[data-id='p7_9b']").addClass('obligatorio');
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
$( "select[data-id='p8_1a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()!=="5"){
  $("input[data-id='p8_1b']").val("").parent().hide();
  $("input[data-id='p8_1b']").removeClass('obligatorio');
  $("input[data-id='p8_1b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_1b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_1b']").parent().show();
  $("input[data-id='p8_1b']").addClass('obligatorio');

}

}).change();

//validación pregunta 8.3
$( "select[data-id='p8_3a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()!=="4"){
  $("input[data-id='p8_3b']").val("").parent().hide();
  $("input[data-id='p8_3b']").removeClass('obligatorio');
  $("input[data-id='p8_3b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_3b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_3b']").parent().show();
  $("input[data-id='p8_3b']").addClass('obligatorio');

}

}).change();


//validación pregunta 8.4.1
$( "select[data-id='p8_4_1a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p8_4_1b']").val("").parent().hide();
  $("input[data-id='p8_4_1b']").removeClass('obligatorio');
  $("input[data-id='p8_4_1b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_4_1b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_4_1b']").parent().show();
  $("input[data-id='p8_4_1b']").addClass('obligatorio');

}

}).change();

//validación pregunta 8.4.2
$( "select[data-id='p8_4_2a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO"  || $(this).val()===""){
  $("input[data-id='p8_4_2b']").val("").parent().hide();
  $("input[data-id='p8_4_2b']").removeClass('obligatorio');
  $("input[data-id='p8_4_2b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_4_2b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_4_2b']").parent().show();
  $("input[data-id='p8_4_2b']").addClass('obligatorio');

}

}).change();

//validación pregunta 8.4.3
$( "select[data-id='p8_4_3a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p8_4_3b']").val("").parent().hide();
  $("input[data-id='p8_4_3b']").removeClass('obligatorio');
  $("input[data-id='p8_4_3b']").parents("div").removeClass( "has-error" );
  $("input[data-id='p8_4_3b']").parents("div").find("span.error").remove();
}else{
  $("input[data-id='p8_4_3b']").parent().show();
  $("input[data-id='p8_4_3b']").addClass('obligatorio');

}

}).change();


//validación pregunta 9
$( "select[data-id='p9a']" ).change(function(e) {
  e.stopImmediatePropagation();
  
  if($(this).val()!=="5"){
    $("input[data-id='p9b']").val("").parent().hide();
    $("input[data-id='p9b']").removeClass('obligatorio');
    $("input[data-id='p9b']").parents("div").removeClass( "has-error" );
    $("input[data-id='p9b']").parents("div").find("span.error").remove();
  }else{
    $("input[data-id='p9b']").parent().show();
    $("input[data-id='p9b']").addClass('obligatorio');
  
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
$( "select[data-id='p12_1_1a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p12_1_1b'],input[data-id='p12_1_1c']").val("").parent().hide();

  $("input[data-id='p12_1_1b'],input[data-id='p12_1_1c']").removeClass('obligatorio');
  $("input[data-id='p12_1_1b'],input[data-id='p12_1_1c']").parents("div").removeClass( "has-error" );
  $("input[data-id='p12_1_1b'],input[data-id='p12_1_1c']").parents("div").find("span.error").remove();

}else{
    $("input[data-id='p12_1_1b'],input[data-id='p12_1_1c']").parent().show();
    $("input[data-id='p12_1_1b'],input[data-id='p12_1_1c']").addClass('obligatorio');

}

}).change();


//validación pregunta 12.1.2
$( "select[data-id='p12_1_2a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p12_1_2b'],input[data-id='p12_1_2c']").val("").parent().hide();

  $("input[data-id='p12_1_2b'],input[data-id='p12_1_2c']").removeClass('obligatorio');
  $("input[data-id='p12_1_2b'],input[data-id='p12_1_2c']").parents("div").removeClass( "has-error" );
  $("input[data-id='p12_1_2b'],input[data-id='p12_1_2c']").parents("div").find("span.error").remove();
}else{
    $("input[data-id='p12_1_2b'],input[data-id='p12_1_2c']").parent().show();

    $("input[data-id='p12_1_2b'],input[data-id='p12_1_2c']").addClass('obligatorio');

}

}).change();

//validación pregunta 12.1.3
$( "select[data-id='p12_1_3a']" ).change(function(e) {
e.stopImmediatePropagation();

if($(this).val()==="NO" || $(this).val()===""){
  $("input[data-id='p12_1_3b'],input[data-id='p12_1_3c']").val("").parent().hide();

  $("input[data-id='p12_1_3b'],input[data-id='p12_1_3c']").removeClass('obligatorio');
  $("input[data-id='p12_1_3b'],input[data-id='p12_1_3c']").parents("div").removeClass( "has-error" );
  $("input[data-id='p12_1_3b'],input[data-id='p12_1_3c']").parents("div").find("span.error").remove();

}else{
    $("input[data-id='p12_1_3b'],input[data-id='p12_1_3c']").parent().show();
    $("input[data-id='p12_1_3b'],input[data-id='p12_1_3c']").addClass('obligatorio');

}

}).change();





}

var enviar=true;

$('#validar_ficha').click(function(event){

  event.preventDefault();
  

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


if(seguir_archivo==0){

  $.alert({
    title: 'Alerta!',
    content: 'Por favor cargue el documento PDF de la Ficha Social.',
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
    content: 'Ya guardo los datos de la Ficha Social?',
    type: 'dark',
    typeAnimated: true,
    buttons: {
        Si: {

          action: function(){

            $.confirm({
              title: 'Mensaje de confirmación!',
              content: 'Desea enviar la ficha social a revisión?',
              type: 'dark',
              typeAnimated: true,
              buttons: {
                  Si: {
                    
                    
                    action: function(){

                      $('#validar_ficha').prop('disabled', true);
                      
                      if(enviar){
                        var responsable_proceso=117;

                      if ( $( "#creado_por" ).length ) {
                          responsable_proceso=$( "#creado_por" ).text();
                      }

                        var act_padre=17;
          
                        var identificador=$('#id_ficha_social').val();
          
                        envio_de_notificacion(''+identificador+'',5,18,act_padre,''+usuario_identificador+'',''+responsable_proceso+'',1,'Aprobación de Ficha Social',null);
          
                        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> '+
                        ' Para aprobación de Ficha Social.</p><p><strong>Observaciones: </strong></p>';
          
                        correo(usuario_identificador,responsable_proceso,"Aprobación de Ficha Social",msg,"Ficha Social");
          
                        var obj = {}
                        obj["identificador"] =identificador;
                        obj["op"] ='insertar_pre_aprobacion_social';
                        obj["usuario_id_elaboro"] =usuario_identificador
                        obj["estado_ficha"] =2;
          
                        $.ajax({
                          type: "GET",
                          url: "GestionConsultas",
                          data: obj,
                          dataType: "json",
                          async: true,
                          success: function (response) {
                          },
                        });

                        //quita la tarea del lider 
                        if ( $( "#id_actividad" ).length ) {
                          
                          quitar_tarea( $( "#id_actividad" ).text());
                       
                        }

                                  
                        location.reload();
                      }
                      enviar=false;

                      




                    }


                    
                  },
                  No: {
          
                  }
              }
          });


          }
        },
        No: {

        }
    }
});











}




}




});

$('#quitar_tarea').click(function(){

  if ( $( "#id_actividad" ).length ) {
                          
    quitar_tarea( $( "#id_actividad" ).text());
 
  }

});


function quitar_tarea(id_act){
  $datos={
    op: 'quitar_tarea_lider',        
    id_act:id_act
}

$.ajax({
   type: "GET",
   url: "GestionConsultas",
   data: $datos,
   dataType: "json",
   async: false,
   success: function (response) {           
       
       location.reload();
   },
   error: function (response) {
       alertify.error("Ocurrió un error ");
   }
});

}


//validaciòn de los checkbox.



$('.opc_unica').find(".checkbox label span").click(function() {

  var seleccion_td=$(this).closest("td").index()-1;

  var columna=$(this).closest("tbody").find('tr')

  columna.each(function () {

    $(this).find("td:eq("+seleccion_td+")").find(' label input[type="checkbox"]').prop('checked',false);

  });

  
});



















function obligatorio(){

 var i=0;

var j=0;
var k=0;

$("span.warning").remove();

/* funcion que valida que existan dos beneficiarios dentro del nucleo familiar, se deshabilita */
$('select[data-id="tipo_beneficiario"]').each(function(key,value){

  if($(this).val()=="PRINCIPAL"){
    k=k+1;
  }

});

$('#tit_tipo_beneficiario').find("span.error").remove();
if(k==0){
  $('#tit_tipo_beneficiario').append("<span class='error text-danger'> Falta el beneficiario Principal</span>");
  i=1;
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
      console.log($(this))
      i=i+1;
    }else{
        $('.msj_campos_obligatorios').remove();
        var msj=$(this).closest('.collapse').attr("id");
        //$(this).closest(".collapse" ).hide();
        $("div[data-target='#"+msj+"'] > h3").css("color", "#5499C7");
        $(this).parent().removeClass( "has-error" );
        $(this).parent().find("span.error").remove();
    }

 })
 console.log(i)

 return i;

}
