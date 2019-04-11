var count = 1;

function adicion(){

  count=count+1;

  $('.adicionar').each(function(index,item) {


      $('.adicionar > tbody > tr:last-child').eq(index).clone().appendTo( $(this))
      $('.adicionar > tbody > tr:last-child >th:first-child').eq(index).html(count)


  });


  validacion('validation.js');
  $(".adicionar > tbody > tr:last-child").find("input").val("");




}



$('#addFamily').click(function(){

  $.confirm({
      title: 'Mensaje de confirmación!',
      content: 'Usted va a adicionar un nuevo miembro.',
      type: 'dark',
      typeAnimated: true,
      buttons: {
          confirmar: {

            action: function(){
                new_member();
            }
          },
          cancelar: {

          }
      }
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







});

$('#save_ficha').click(function(){


$('#fondo').show();

setTimeout(guardado, 1);

function guardado(){

  $('.paso').each(function(i,j) {

   var str=data_json1($(this),$(this).attr('data-op'),"input,select,textarea")
   var str1=escapeSpecialChars(str);

   guardarFicha(JSON.parse(str1));

 }).promise().done( function(){ $('#fondo').hide(); } );


  $('.data').each(function(i,j) {

  var str=data_json($(this),$(this).attr('data-op'),"tbody tr");
  var str1=escapeSpecialChars(str);

  guardarFichaFamilia(JSON.parse(str1));

  });

  guardar_checkbox();

}



});



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
     x = $(this).find('input,select,textarea');
        str=str+',"' + $(this).attr("data-id") + '":"' + $(this).val() + '"';
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
