var obj = {}

function guardarFicha(json){

console.log(json)

obj["identificador"] =$('#id_ficha_social').val();

  $.each(json, function(i, item) {

    obj[i] = item

  });

  $.ajax({
    type: "POST",
    url: "GestionConsultas",
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
    obj["identificador"] =$('#id_ficha_social').val();

    if($.isNumeric(i)){
      obj["consecutivo"] =i;

      $.each(json[i], function(i, item) {

        obj[i] = item

      });
      console.log(obj)
      $.ajax({
        type: "POST",
        url: "GestionConsultas",
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

  obj["identificador"] =$('#id_ficha_social').val();

  console.log(obj)

  $.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: obj,
    dataType: "json",
    async: false,
    success: function (response) {

    },
});




}
