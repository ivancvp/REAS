
function getURLParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
        p[k] = v;
    });
    return k ? p[k] : p;
}


var identificador = getURLParams('identificador');

$('#id_ficha_social').val(identificador);


var obj = {}
obj["identificador"] =identificador;
obj["op"] ='insertar_ficha_social_general';
$.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: obj,
  dataType: "json",
  async: false,
  success: function (response) {
  },
});

var obj = {}
obj["identificador"] =identificador;
obj["op"] ='get_datos_generales';
$.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: obj,
  dataType: "json",
  async: false,
  success: function (response) {
    $.each( response[0], function( key, value ) {
          $("#"+key).val(value);
       });
  },
});


var obj = {}
obj["identificador"] =identificador;
obj["op"] ='get_municipios_ficha_social';
$.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: obj,
  dataType: "json",
  async: false,
  success: function (response) {
    console.log(response)

  for(i=0;i<=response.length;i++){
    $('select[data-id="p2_8"]').append('<option val="'+response[i].Nom_Municipio+'">'+response[i].Nom_Municipio+'</option>');
  }


  },
});



  var obj = {}
  obj["identificador"] =identificador;
  obj["op"] ='traer_datos_ficha_social';

$.ajax({
  type: "GET",
  url: "GestionConsultas",
  data: obj,
  dataType: "json",
  async: false,
  success: function (response) {

  $.each( response[0], function( key, value ) {


    var str1 = key;
    var str2 = "p11_";
    if(str1.indexOf(str2) != -1){
      $("input[data-id='"+key+"']").prop('checked',JSON.parse(value));

    }else {
      $("input[data-id='"+key+"'],select[data-id='"+key+"'],textarea[data-id='"+key+"']").val(value);
    }

     });


  },
});


//parte de traer los Familiares

var obj1 = {}
obj1["identificador"] =identificador;
obj1["op"] ='get_num_familiares';

var num_integrantes=0;
var miembros_nuevos=0;
$.ajax({
type: "GET",
url: "GestionConsultas",
data: obj1,
dataType: "json",
async: false,
success: function (response) {

  num_integrantes=response[0].count;
  miembros_nuevos=num_integrantes;
  habilitar_checkbox(num_integrantes);

  for (i = 1; i < num_integrantes; i++) {
    adicion();
  }

},

}).done(function() {

  for (i = 1; i <= num_integrantes; i++) {

  var obj = {}
  obj["identificador"] =identificador;
  obj["op"] ='get_data_familiares';
  obj["consecutivo"] =i;

  $.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: obj,
    dataType: "json",
    async: false,
    success: function (response) {

console.log(response)
 var tables=$('table').attr("data-op");

$('table[data-op]').each(function(){
  var table=$(this);
        $.each( response[0], function( key, value ) {

          table.find("tr:eq("+i+") input[data-id='"+key+"'],tr:eq("+i+")  select[data-id='"+key+"'],tr:eq("+i+")  textarea[data-id='"+key+"']").val(value)

        });
});

var j=i-1;
$.each( response[0], function( key, value ) {

  var bool=false;
  if(value==="true"){
    bool=true;
  }
  if(value==="false"){
    bool=false;
  }


  $("th[data-op='"+key+"']").parent().find("td:eq("+j+") > .checkbox label input[type='checkbox']").prop('checked',bool);
  $("th[data-op='"+key+"']").parent().find("td:eq("+j+") > input,td:eq("+j+") > textarea").val(value);

});


/*
$('.check').each(function(key,value){

var tbl=value;

var rowCount = $(tbl).find("tr").length;

for (var i = 1; i < rowCount; i++) {

  var data=$(tbl).find("tr:eq("+i+") > th:eq(0)").attr("data-op");

  var boolean=$(tbl).find("tr:eq("+i+") > td:eq(0) > .checkbox label input[type='checkbox']").prop('checked');

  console.log(data)


  $.each( response[0], function( key, value ) {

    $("input[type='checkbox']")

  });

}


});
*/





/*
      $.each( response[0], function( key, value ) {
        console.log(key+":"+value);
        console.log($("tr:eq("+3+") input[data-id='"+key+"'],tr:eq("+i+")  select[data-id='"+key+"'],tr:eq("+i+")  textarea[data-id='"+key+"']"))
            $("tr:eq("+3+") input[data-id='"+key+"'],tr:eq("+3+")  select[data-id='"+key+"'],tr:eq("+3+")  textarea[data-id='"+key+"']").val(value);
      });
*/
    },
  });

  }

validacion();
  var loop=1;
  $('select[data-id="p2_012"]').each(function(key,value) {

  if($(this).val()=="1"){
    $('table[data-op="5m"] tr').eq(loop).find('select[data-id="p5_5"]').attr("disabled", false);
  }else{
    $('table[data-op="5m"] tr').eq(loop).find('select[data-id="p5_5"]').val("NO APLICA").attr("disabled", true);;

  }

  loop=loop+1;
  });









});
