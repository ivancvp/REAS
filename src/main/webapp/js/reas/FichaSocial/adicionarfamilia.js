var count = 1;

function adicion(){

  count=count+1;

  $('.adicionar').each(function(index,item) {


      $('.adicionar > tbody > tr:last-child').eq(index).clone().appendTo( $(this))
      $('.adicionar > tbody > tr:last-child >th:first-child').eq(index).html(count)


  });


  validacion('validation.js');
  $(".adicionar > tbody > tr:last-child").find("input").val("");

  $('table[data-op="2m"] tr:not(:last-child)').find('div.checkbox').hide();


}



//verifica si el número de identificación ingresado ya existe en la lista de miembros del hogar.

$('#verificar_miembro').click(function(){

var tipo=$('#sel_tipo_identificacion').val();
var num=$('#num_identificacion').val();
var tipo_identificacion_nueva=num;

if(tipo=="" || num==""){
  $.alert({
    title: 'Alerta.',
    content: 'Campos incompletos',
});

}else{

  var valida=0;

  $('input[data-id="p2_011"]').each(function(key,value) {

  var tipo_identificacion=$(this).val();

  if(tipo_identificacion_nueva==tipo_identificacion){
    valida=1;
  }

  });

if(valida==1){
  $.alert({
    title: 'Alerta.',
    content: 'El miembro ya existe en el nucleo familiar.',
});
}else{
    $('#myModal').modal('toggle');
    new_member();
    $('table[data-op="2m"] tr:last').find('input[data-id="p2_011"]').val(num);
    $('table[data-op="2m"] tr:last').find('select[data-id="p2_9"]').val(tipo);
}


}


});

//cierre de los modales
$("#cerrar_modal").click(function(){
  $('#myModal').modal('toggle');
});

$("#cerrar_modal_nacimiento").click(function(){
  $('#modal_lugar_nacimiento').modal('toggle');
});


// Boton de agregar un nuevo miembro.
$('#addFamily').click(function(){

  $.confirm({
      title: 'Mensaje de confirmación!',
      content: 'Usted va a adicionar un nuevo miembro.',
      type: 'dark',
      typeAnimated: true,
      buttons: {
          confirmar: {

            action: function(){
              $('#myModal').modal('toggle');

              $('#myModal .modal-body').css('max-height', '300px');
              $('#myModal .modal-body').css('overflow', 'hidden');

            }
          },
          cancelar: {

          }
      }
  });

});



$('#departamento').change(function(){

  var nom_dpto=$('#departamento').val();

  var depto = deptos_mpios.filter(function (el) {
    return (el.nom_depto === nom_dpto);
  });

  $('#municipio').empty();

  $.each(depto , function(i, item) {
    $('#municipio').append('<option val="'+item.nom_mun+'">'+item.nom_mun+'</option>');
  });


});




function new_member(){
  adicion();
  miembros_nuevos_title=miembros_nuevos+1;
  miembros_nuevos_body=miembros_nuevos_title-1;
  miembros_nuevos=miembros_nuevos_title;
  $(".check thead").find('th:eq('+miembros_nuevos_title+')').show();
  $(".check tr").find('td:eq('+miembros_nuevos_body+')').show();

  var obj = {}
  obj["identificador"] =  $('#id_ficha_social').val();
  obj["miembro"] =miembros_nuevos_title;
  obj["op"] ='insertar_ficha_social_miembro';
  $.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: obj,
    dataType: "json",
    async: false,
    success: function (response) {
      console.log(response);
    },
  });

}


$('#del_fam').click(function(){

  $.confirm({
      title: 'Mensaje de confirmación!',
      content: 'Usted va a eliminar un miembro de la familia',
      type: 'dark',
      typeAnimated: true,
      buttons: {
          confirmar: {

            action: function(){
              borrar_miembro();
            }
          },
          cancelar: {

          }
      }
  });

function borrar_miembro(){


var conta=0;
$('table[data-op="2m"] tr:last').find("input:not([type='checkbox'],[role='combobox']),select").each(function(key,value) {


if($(this).val()=="" || $(this).val()=="null" ){
  conta=conta+1;
}

});

console.log(conta)

if(conta>12){


  obj["identificador"] =$('#id_ficha_social').val();
  obj["op"] ="borrar_miembro_ficha_social";

    $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: obj,
      dataType: "json",
      async: false,
      success: function (response) {

      },
  });


  $.alert({
    title: 'Confirmado.',
    content: 'Miembro borrado exitoamente!',
    type: 'green'
  });

//cargando la ficha nuevamente
$('#form').empty();
cuerpo_ficha();

}else{
  $.alert({
    title: 'No procede.',
    content: 'Por favor borre todos los datos del miembro agregado.',
    type: 'red'
});
}

}


});



$('#save_ficha').click(function(){

  guardar_all();

});

function guardar_all(){

  $('#fondo').show();

  setTimeout(guardado, 1);
  
  function guardado(){
  
  
  guardar_beneficiario();
  
    $('.paso').each(function(i,j) {
  
     var str=data_json1($(this),$(this).attr('data-op'),"input,select,textarea")
     var str1=escapeSpecialChars(str);
  
     guardarFicha(JSON.parse(str1));
  
   }).promise().done( function(){ 
     $('#fondo').hide();
   } );
  
  
    $('.data').each(function(i,j) {
  
    var str=data_json($(this),$(this).attr('data-op'),"tbody tr");
    var str1=escapeSpecialChars(str);
  
    guardarFichaFamilia(JSON.parse(str1));
  
    });
  
    guardar_checkbox();
  
    guardarJsonp10_2();
  
  
  }
}



function data_json(html,op,selector){

  var json = '{"op":"'+op+'"';
  var str="";
  var tbl2 = $(html).find(selector).each(function(i) {
     x = $(this);
     var j=i+1;
     str=str+',"'+j+'":'+data_json1(x,op,"input:not([type=checkbox]),select");

  })
  json += str+ '}';
  return json;
}



function data_json1(html,op,selector){

  var json = '{"op":"'+op+'"';
  var str="";
  var tbl2 = $(html).find(selector).each(function(i) {
    x = $(this).find(selector);

    var valor='"'+ $(this).val() + '"';

    if($(this).attr('type')=="checkbox"){
      valor=$(this).prop('checked');
    }

    if($(this).hasClass("numto999")){
      
      if($(this).val()==""){
        valor='"null"';
      }else{
        valor=$(this).val();
      }
    }
    if($(this).hasClass("moneda")){

      if($(this).val()==""){
        valor='"null"';
      }else{
        var moneda=$(this).val();
        valor=moneda.replace(/\./g, "");
      }
   
    }

    str=str+',"' + $(this).attr("data-id") + '":' + valor ;


  })
  json += str+ '}'

  return json;
}





//Get JSON checkbox
function guardar_checkbox(){

for (i = 1; i <= num_integrantes; i++) {
  var j=i-1;

  var json = '{"op": "boolean","consecutivo":"'+i+'"';
  var str="";

  $('.check').each(function(key,value){

  var tbl=value;

  var rowCount = $(tbl).find("tr").length;

  for (var i = 1; i < rowCount; i++) {

    var data=$(tbl).find("tr:eq("+i+") > th:eq(0)").attr("data-op");

    var boolean=$(tbl).find("tr:eq("+i+") > td:eq("+j+") > .checkbox label input[type='checkbox']").prop('checked');

    if (boolean === undefined || boolean === null) {
      boolean=$(tbl).find("tr:eq("+i+") > td:eq("+j+") > input, tr:eq("+i+") > td:eq("+j+") > textarea").val();
    }

    str=str+',"'+data+'":'+'"'+boolean+'"';

  }

  });


  $('.opc_unica').each(function(key,value){

    var tbl=value;
  
    var rowCount = $(tbl).find("tr").length;
  
    var data=$(tbl).find("tr:eq(1) > th:eq(0)").attr("data-op");

    var k=null;

    for (var i = 1; i < rowCount; i++) {
    
      var boolean=$(tbl).find("tr:eq("+i+") > td:eq("+j+") > .checkbox label input[type='checkbox']").prop('checked');
  
      if(boolean==true){
        k=i;
      }
  
    }

    str=str+',"'+data+'":'+'"'+k+'"';
  
    });





  json=json+str+'}';

  var str1=escapeSpecialChars(json);

  guardarBooleanFamilia(JSON.parse(str1));

}

}



function escapeSpecialChars(jsonString) {

            return jsonString.replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/\t/g, "\\t")
                .replace(/\f/g, "\\f");

}
