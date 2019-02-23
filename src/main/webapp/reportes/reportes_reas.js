
function reporte_reasentamientos (){




 var contenido=

'<div class="modal-header">' +
'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
'<h4 class="modal-title">Formulario de: Generación de reportes</h4>' +
'</div>' +
'<div class="modal-body">' +

'<h1>Reporte de información REAS</h1>'+
   '<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
'<hr />'+
'<p>Por favor seleccione una opción para generar el reporte</p>'+
'<div class="form-group">'+
'<button type="button" class="btn btn-default" style="border:1px solid #D7DBDD ;" id="abrir_div"><span class="glyphicon glyphicon-plus"></span> Más opciones</button>'+
'<button type="button" class="btn btn-default" style="border:1px solid #D7DBDD;"  id="todo"><span class="glyphicon glyphicon-file"></span> Reporte Completo</button>'+

'</div>'+
'<div class="row">'+
'<div id="ver_div" style="display:none" class="col">'+
'<p >Por favor seleccione al menos un criterio de busqueda para la generación del reporte.</p>'+
    '<div class="form-group">'+
    '<p >Localidad</p>'+
    '<select class="form-control" required="required"  id="get_localidad" >'+
        '<option value="" selected >Todas</option>'+
        '<option>01 Usaquén</option>'+
        '<option>02 Chapinero</option>'+
        '<option>03 Santa Fe</option>'+
        '<option>04 San Cristóbal</option>'+
        '<option>05 Usme</option>'+
        '<option>06 Tunjuelito</option>'+
        '<option>07 Bosa</option>'+
        '<option>08 Kennedy</option>'+
        '<option>09 Fontibón</option>'+
        '<option>10 Engativá</option>'+
        '<option>11 Suba</option>'+
        '<option>12 Barrios Unidos</option>'+
        '<option>13 Teusaquillo</option>'+
        '<option>14 Los Mártires</option>'+
        '<option>15 Antonio Nariño</option>'+
        '<option>16 Puente Aranda</option>'+
        '<option>17 La Candelaria</option>'+
        '<option>18 Rafael Uribe Uribe</option>'+
        '<option>19 Ciudad Bolívar</option>'+
        '<option>20 Sumapaz</option>'+
    '</select>'+
    '</div>'+
    '  <div class="form-group" > '+
        '<p >UPZ</p>'+
        '<select class="form-control" id="get_upz" disabled>'+
        '   <option value="" selected >Todas</option>'+
        '</select>'+

    '</div>'+  
 
    '<div class="form-group" > '+
        '<p >Séctor Catastral</p>'+
        '<select class="form-control" id="get_sector" disabled>'+
        '   <option value=""  selected>Todos</option>'+
        '</select>'+
    '</div>'+  
    
 '</div>'+
 '<div class="col"></div>'+
 '</div>'+
'<div class="form-group">'+
'<button type="button" class="btn btn-primary" id="enviar_reporte"><i class="fa fa-file-excel-o"></i> Generar</button>'+
'</div>'+

'</div>' +
'<div class="modal-footer">' +
'<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
'</div>';

 

$('#act').empty();
$('#act').append(contenido);
$('#modal_act').modal('show');
 
$('.modal-content').css('height', '80%');
$('.modal-body').css('max-height', 'calc(100% - 120px)');
$("#get_upz").select2();
$("#get_localidad").select2();
$("#get_sector").select2();


$('#abrir_div').click(function() {
    $("#abrir_div").removeClass("btn-default");
    $("#abrir_div").addClass("btn-success");
    $("#todo").addClass("btn-default");
    $("#todo").removeClass("btn-success");
    $("#todo").css("border", "1px solid #D7DBDD");
    $('#ver_div').toggle( "slow", function() {
   
  });
});
$('#todo').click(function() {
    $("#todo").removeClass("btn-default");
    $("#todo").addClass("btn-success");
    $("#abrir_div").addClass("btn-default");
    $("#abrir_div").removeClass("btn-success");
    $("#abrir_div").css("border", "1px solid #D7DBDD");
    $("#ver_div").css("display", "none");
});

$('#get_localidad').on('change', function (e) {
     $("#get_sector").prop('disabled', true);

    if($('#get_localidad').val()===''){
        $("#get_upz").prop('disabled', true);
    }else{
        $("#get_upz").prop('disabled', false);
    }
    
    var r_localidad=$("#get_localidad" ).val();
    var id_loca=r_localidad.substring(0, 2);
    
    
    $('#get_upz')
    .find('option')
    .remove()
    .end()
    .append('<option value="">Todas</option>');
    
    $('#get_sector')
    .find('option')
    .remove()
    .end()
    .append('<option value="">Todos</option>');
    
    $.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: {
        op: "obtener_upz",
        id_loca:id_loca
    },
    dataType: "json",
    async: false,
    success: function (response) {//                       
        if (response.length > 0) {
            $.each(response, function (i, item) {
                $('#get_upz').append($('<option>', {
                    value: item.upz_desc,
                    text: item.localidad_id + '-' + item.upz_desc
                }));
            });

        }

    }
});
    
    
});

$('#get_upz').on('change', function (e) {

 if($('#get_upz').val()===''){
        $("#get_sector").prop('disabled', true);
    }else{
        $("#get_sector").prop('disabled', false);
    }

$('#get_sector')
    .find('option')
    .remove()
    .end()
    .append('<option value="">Todos</option>');

var localidad=$("#get_localidad" ).val().toUpperCase().trim();
var upz=$("#get_upz" ).val().toUpperCase().trim();


$.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: {
        op: "obtener_sector",
        localidad:localidad,
        upz:upz
    },
    dataType: "json",
    async: false,
    success: function (response) {//                       
        if (response.length > 0) {
            $.each(response, function (i, item) {
                if(item.sector!=='VEREDITAS'){
                    $('#get_sector').append($('<option>', {
                    value: item.sector,
                    text: item.sector
                }));
                }
                
            });

        }else{
            $("#get_sector").prop('disabled', true);
            $("#get_sector option[value='']").text('No existen séctores catastrales para esta consulta');

        }

    }
});



});






$( "#enviar_reporte" ).click(function() {
    
    var r_localidad=$("#get_localidad" ).val().toUpperCase().trim();
    var r_sector=$("#get_sector" ).val().toUpperCase().trim();
    var r_upz=$("#get_upz" ).val().toUpperCase().trim();

    var parametros = {r_localidad:r_localidad, r_sector:r_sector,r_upz:r_upz};
    
    console.log(parametros);
    descargarReporte('reporte_reas',parametros);
    
  
});





}


 