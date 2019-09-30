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
    async: true,
    success: function (response) {

    },
});


}



function guardarJsonp10_2(){

  var obj = {}
  var jsonObj = [];
  item = {}
  $('input[data-json]').each(function(){ 
    
    var value=$(this).val();
    var key=$(this).attr('data-json');
    
    item [key] = value;
    
  });
  
  jsonObj.push(item);
  var json=JSON.stringify(jsonObj[0]);

  obj["identificador"] =$('#id_ficha_social').val();
  obj["op"]="p10_2";
  obj["p10_2"]=json;
  
  console.log(obj)

  $.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: obj,
    dataType: "json",
    async: true,
    success: function (response) {

    },
});
  

}


function guardar_beneficiario(){

  $('.tipo_ben').each(function(key,value) {

    if($(this).val()=="PRINCIPAL" || $(this).val()=="SECUNDARIO"){
      var identificador=$('#id_ficha_social').val();

      var nom1 = $(this).parents("tr").find('input[data-id="p2_3"]').val().trim();
      var nom2 = $(this).parents("tr").find('input[data-id="p2_4"]').val().trim();

      var ape1 = $(this).parents("tr").find('input[data-id="p2_5"]').val().trim();
      var ape2 = $(this).parents("tr").find('input[data-id="p2_6"]').val().trim();

      var ced = $(this).parents("tr").find('input[data-id="p2_011"]').val().trim();

      var nombre_completo=nom1+" "+nom2+" "+ape1+" "+ape2;
      nombre_completo=nombre_completo.replace(/ +(?= )/g,'');
    }

    if($(this).val()=="PRINCIPAL"){
      save_ben("update_ben_principal",identificador,nombre_completo,nom1,nom2,ape1,ape2,ced);
    }
    if($(this).val()=="SECUNDARIO"){
      save_ben('update_ben_secundario',identificador,nombre_completo,nom1,nom2,ape1,ape2,ced);
    }

  });

save_tel();
save_elaboro_ficha();

function save_elaboro_ficha(){

  $datos = {
       op: "update_elaboro_ficha_social",
       identificador:$('#id_ficha_social').val(),
       usuario_id_elaboro:$('#elaboro_nombre').val(),
       usuario_elaboro_contrato:$('#elaboro_contrato').val(),
       elaboro_fecha:$('#elaboro_fecha').val()
   };

   $.ajax({
     type: "POST",
     url: "GestionConsultas",
     data: $datos,
     dataType: "json",
     async: true,
     success: function (response) {

     },
 });

}

function save_tel(){
  $datos = {
       op: "save_telefono_ficha_social",
       identificador:$('#id_ficha_social').val(),
       telefono_fijo:$('#telefono_fijo').val().replace(new RegExp('-', 'g'),""),
       telefono_cel:$('#telefono_cel').val().replace(new RegExp('-', 'g'),""),
   };

   $.ajax({
     type: "POST",
     url: "GestionConsultas",
     data: $datos,
     dataType: "json",
     async: true,
     success: function (response) {

     },
 });
}

  function save_ben(op,identificador,nombre_completo,nom1,nom2,ape1,ape2,ced){

    $datos = {
         op: op,
         identificador:identificador,
         nombre_completo:nombre_completo,
         nom1:nom1,
         nom2:nom2,
         ape1:ape1,
         ape2:ape2,
         ced:ced
     };

     $.ajax({
       type: "POST",
       url: "GestionConsultas",
       data: $datos,
       dataType: "json",
       async: true,
       success: function (response) {

       },
   });
  }



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
        async: true,
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
    async: true,
    success: function (response) {

    },
});




}


$('#guardar_obs_ficha').click(function(){

  var obj = {}
  obj["identificador"] =$('#id_ficha_social').val();
  obj["op"]="save_obs_ficha_social";
  obj["observacion"]=$('#observaciones_aprobacion').val();


  console.log(obj)

    $.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: obj,
    dataType: "json",
    async: true,
    success: function (response) {
      $.alert("Información almacenada correctamente");
    },
});



});