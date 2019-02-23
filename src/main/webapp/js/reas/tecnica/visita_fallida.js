function gen_visita_fallida(identificador){
   
    
    var contenido =
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
        '<h4 class="modal-title">Formulario de: Visita Fallida</h4>' +
        '</div>' +

         '  <div class="modal-body"> '+
          '<h2 style="color:#2E9AFE">Registro de visitas Fallidas</h2>'+
          '<br>'+
         '<p>En la siguiente sección usted podra reportar las visitas fallidas:</p>'+
         
          ' <div class="container-fluid"> '+
                   '            <div class="row"> '+
 '                     <div class="col-md-6"> '+
                            '   <div class="form-group"> '+
                            '     <label for="num_visitas" class="control-label">Número de visitas fallidas</label> '+
                            '     <select class="form-control upd" id="num_visitas"><option value="">Seleccione</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> '+
                             '   <div id="alerta_num_visitas" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                            '     <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                            '     <strong>Error!</strong> Debe ingresar al menos una opción '+ 
                            '   </div> '+ 

                    '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
                    '            <div class="row"> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group" id="div_visita1" style="display:none"> '+
                                '     <label for="sandbox-container" class="control-label">Fecha 1er visita</label> '+
                                 '<div class="input-group date"> '+
                                    '<input type="text" class="form-control upd" readonly id="fecha1"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span> '+
                                ' </div> '+
                            '   <div id="alerta_fecha1" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                            '     <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                            '     <strong>Error!</strong> Debe ingresar una fecha '+ 
                            '   </div> '+ 
                                '   </div> '+
                                
                        '   </div> '+
                         ' <div class="col-md-3"> '+
                                '   <div class="form-group" id="div_visita2" style="display:none"> '+
                                '     <label for="sandbox-container" class="control-label">Fecha 2da visita</label> '+
                                 '<div class="input-group date"> '+
                                    '<input type="text" class="form-control upd" readonly id="fecha2"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span> '+
                                ' </div> '+
                            '   <div id="alerta_fecha2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                            '     <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                            '     <strong>Error!</strong> Debe ingresar una fecha '+ 
                            '   </div> '+ 
                                '   </div> '+
                                
                        '   </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group" id="div_visita3" style="display:none"> '+
                                '     <label for="sandbox-container" class="control-label">Fecha 3er visita</label> '+
                                 '<div class="input-group date"> '+
                                    '<input type="text" class="form-control upd" readonly id="fecha3"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span> '+
                                ' </div> '+
                            '   <div id="alerta_fecha3" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                            '     <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                            '     <strong>Error!</strong> Debe ingresar una fecha '+ 
                            '   </div> '+ 
                                '   </div> '+
                                
                        '   </div> '+
 '                     </div> '+
 '                 </div> '+
 
         '<p>Por favor cargue un documento adjunto pdf que evidencia el registro de visitas fallidas, un (1) solo árchivo pdf es permitido:</p>'+         
                '            <div class="row"> '+  
                '                   <div class="col-md-12"> '+
                '                     <div class="form-group"> '+
                '                       <input id="input-b1" name="input-b1" type="file" class="file upd" accept="application/pdf"> '+ 
                '                     </div> '+
                '                       <div id="alerta_input-b1" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
                '                       </div> '+ 
                '                    </div> '+
                '            </div> '+
         
                '            <div class="row"> '+  
                    '   <div class="form-group"> '+
                    '     <label for="exampleFormControlTextarea1">Observaciones</label> '+
                    '     <textarea class="form-control" id="observaciones" rows="3"></textarea> '+
                    '   </div> '+
                '            </div> '+
         
          ' </div> '+ 
         ' </div> '+      
        '<div class="modal-footer">' +
         ' <button type="button" class="btn btn-success" id="save"><i class="glyphicon glyphicon-floppy-saved"></i> Guardar </button> '+ 
        '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
        '</div>';



    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');
  
  $(document).ready(function(){
    $('.input-group.date').datepicker({
    weekStart: 1,
    todayBtn: "linked",
    clearBtn: true,
    language: "es",
    forceParse: false,
    daysOfWeekHighlighted: "0",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true
});


    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "visita_fallida_get",
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {
            
         if (response)
            {
                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        var resultado = response[i];

                            $('#num_visitas').val((resultado["num_visitas_fallidas"]?resultado["num_visitas_fallidas"]:''));
                            if((resultado["fecha1"]?resultado["fecha1"]:'')!==''){
                                $('#fecha1').val((resultado["fecha1"]?resultado["fecha1"]:''));
                                $('#div_visita1').css("display","block");
                            }
                            if((resultado["fecha2"]?resultado["fecha2"]:'')!==''){
                                $('#fecha2').val((resultado["fecha2"]?resultado["fecha2"]:''));
                                $('#div_visita2').css("display","block");
                            }
                            if((resultado["fecha3"]?resultado["fecha3"]:'')!==''){
                                $('#fecha3').val((resultado["fecha3"]?resultado["fecha3"]:''));
                                $('#div_visita3').css("display","block");
                            }
                            $('#observaciones').val((resultado["observaciones"]?resultado["observaciones"]:''));
                    }

                } else {
                    console.log(response);
                }
            }
            
            
            
           
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });




});  


$('#num_visitas').on('change', function() {
 var num =this.value;
if(num===''){
    $('#div_visita1').css("display","none");
    $('#div_visita2').css("display","none");
    $('#div_visita3').css("display","none");
    $('#fecha1').val('');
    $('#fecha2').val('');
    $('#fecha3').val('');
}
if (num==='1'){
    $('#div_visita1').css("display","block");
    $('#div_visita2').css("display","none");
    $('#div_visita3').css("display","none");
    $('#fecha2').val('');
    $('#fecha3').val('');
}
if (num==='2'){
    $('#div_visita1').css("display","block");
    $('#div_visita2').css("display","block");
     $('#div_visita3').css("display","none");
    $('#fecha3').val('');
}
if (num==='3'){
    $('#div_visita1').css("display","block");
    $('#div_visita2').css("display","block");
    $('#div_visita3').css("display","block");
}
    
   
});

$('.upd').on('change', function(){
    $('#alerta_'+this.id).css("display","none");
});


var seguir=1;

$('#save').click(function() {
seguir=1;

var num_visitas=($('#num_visitas').val()?$('#num_visitas').val():'');
var fecha1=$('#fecha1').val();
var fecha2=$('#fecha2').val();
var fecha3=$('#fecha3').val();
var observaciones=$('#observaciones').val().trim();


if(num_visitas===''){
    $('#alerta_num_visitas').css("display","block");
    seguir=0;
}

if(num_visitas==='1'){
    if(fecha1===''){
    $('#alerta_fecha1').css("display","block");
    seguir=0;
  }
}
if(num_visitas==='2'){
    if(fecha1===''){
    $('#alerta_fecha1').css("display","block");
    seguir=0;
  }
  if(fecha2===''){
    $('#alerta_fecha2').css("display","block");
    seguir=0;
}
}
if(num_visitas==='3'){
    if(fecha1===''){
    $('#alerta_fecha1').css("display","block");
    seguir=0;
  }
  if(fecha2===''){
    $('#alerta_fecha2').css("display","block");
    seguir=0;
}
if(fecha3===''){
    $('#alerta_fecha3').css("display","block");
    seguir=0;
}
}



if(seguir_archivo===0){
    $('#alerta_input-b1').css("display","block");
    seguir=0;
}
if(seguir===1){
        $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "visita_fallida",
            identificador: identificador,
            num_visitas:num_visitas,
            fecha1:fecha1,
            fecha2:fecha2,
            fecha3:fecha3,
            observaciones:observaciones,
            user:usuario_usuario
        },
        dataType: "json",
        async: false,
        success: function (response) {
           alert("Información almacenada exitosamente");
           $('#modal_form').modal('toggle');
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });
}else{
    alert("Complete la información que se señala en rojo por favor");
}



});



var seguir_archivo=0;
var datos = {};
var url_preview='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_visita_fallida",
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {

            if (response)
            {
                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        var resultado = response[i];

                            datos["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview='ObtenerArchivo?ID='+datos["1"];
                            seguir_archivo=1;
                    }

                } else {
                    console.log(response);
                    
                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });

if(datos["1"]===undefined){
    var contar=false;
}else{
    var contar=true;
}

$("#input-b1").fileinput({
    theme: 'fa',
    language: 'es',
    initialPreview: [
        url_preview
    ],
  fileActionSettings: {
    'showRemove': false,
    'indicatorNew': '&nbsp;'
},
    initialPreviewFileType: 'pdf', 
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: datos["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: 'constancia visita fallida',
                identificador: identificador,
                tipo_documento: '1106',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_repositorio',
            identificador: identificador
        };
        return out;
    } ,   
    uploadUrl: 'FileUploader',
    deleteUrl: 'GestionConsultas',
    allowedFileExtensions: ["pdf"],
    initialPreviewAsData: true,
    showUpload: true,
    overwriteInitial: false,
    browseOnZoneClick: true,
    showRemove: false,
    autoReplace:false,
    maxFileCount: 1,
    validateInitialCount: contar
});


$("#input-b1").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = false;
        alertify.error("El archivo no se puede borrar");
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


$("#input-b1").on('filepreajax', function (event, previewId, index) {
        seguir_archivo=1;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();
    });


}



