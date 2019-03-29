var obj = {}

function guardarFicha(json){

console.log(json)

if(json.op==='1'){
    obj["identificador"] =json.identificador;
  }

  $.each(json, function(i, item) {

    obj[i] = item

  });
console.log(obj)
  $.ajax({
    type: "POST",
    url: "../../../GestionConsultas",
    data: obj,
    dataType: "json",
    async: false,
    success: function (response) {

    },
});




}

function guardarFichaFamilia(json){



  $.each(json, function(i, item) {
    var obj = {}
    obj["identificador"] ='123';

    if($.isNumeric(i)){
      obj["consecutivo"] =i;

      $.each(json[i], function(i, item) {

        obj[i] = item

      });
      console.log(obj)
      $.ajax({
        type: "POST",
        url: "../../../GestionConsultas",
        data: obj,
        dataType: "json",
        async: false,
        success: function (response) {

        },
      })
      }
  });

}



function guardarBooleanFamilia(json){

  var obj = {}

  $.each(json, function(i, item) {

    obj[i] = item

  });

  obj["identificador"] ='123';

  console.log(obj)

  $.ajax({
    type: "POST",
    url: "../../../GestionConsultas",
    data: obj,
    dataType: "json",
    async: false,
    success: function (response) {

    },
});




}
