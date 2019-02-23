
 function gestion_inmobiliaria_escrituras(identificador){
     var contenido=
           '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title">Formulario de: Escrituras - Gestión inmobiliaria</h4>' +
            '</div>' +
            '<div class="modal-body">' +
                '<h1 style="color:#F39C12;font-size: 20px;">Módulo de registro de escrituras <i class="fas fa-home"></i> </h1>'+
      
                
            '<div class="row">'+
                  '<div class="col-md-12">  '+
                      '<p>En este módulo usted podrá consultar la información básica más relevante para el proceso de gestión inmobiliaria asociada a las escrituras</p>'+
                  '</div>'+        
            '</div>'+  
            
            
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Identificador</label> '+
                '<input type="text" class="form-control" style="text-transform: uppercase" id="identificador" placeholder="identificador" value="'+identificador+'" disabled> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  
        
        '<div class="row">'+
            '<div class="col-md-4"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Nro Escritura</label> '+
                '<input type="number" class="form-control upd" style="text-transform: uppercase" id="no_escritura" placeholder="Nro de escritura"> '+
                '</div> '+ 
            '</div> '+                        

            '<div class="col-md-4"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de escritura</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control fecha upd" id="fecha_escritura" placeholder="Fecha"></div>'+
                '</div> '+ 
            '</div> '+                        

            '<div class="col-md-4"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Notaria</label> '+
                '<input type="text" class="form-control upd" style="text-transform: uppercase" id="notaria" placeholder="Notaria"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+               
             
             
        '<div class="row">'+
            '<div class="col-md-4"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Matrícula inmobiliaria</label> '+
                '<input type="text" class="form-control upd" style="text-transform: uppercase" id="matricula_inmo" placeholder="Matrícula inmobiliaria"> '+
                '</div> '+ 
            '</div> '+                        

            '<div class="col-md-4"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Tipo de alternativa</label> '+
                '<select class="form-control upd" id="tipo_alternativa" ><option value="">Seleccione ...</option></select> '+
                '</div> '+ 
            '</div> '+                        

            '<div class="col-md-4"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Estado</label> '+
                '<select class="form-control upd" id="estado" ><option value="">Seleccione ...</option></select> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  
             
             
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Observaciones</label> '+
                '<textarea class="form-control upd" rows="5" style="text-transform: uppercase" id="observaciones" placeholder="Observaciones"></textarea> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  
        
  
        '<div class="row">'+             
        '            <p>Por favor cargue un documento adjunto pdf que evidencia la adenda, un (1) solo árchivo pdf es permitido:</p>'+         
        '            <div class="row"> '+  
        '                   <div class="col-md-12"> '+
        '                     <div class="file-loading"> '+
        '                       <input id="input-b2" name="input-b2" type="file" class="file upd" accept="application/pdf"> '+ 
        '                     </div> '+
        '                       <div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
        '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
        '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
        '                       </div> '+ 
        '                    </div> '+
        '            </div> '+  
        '</div> '+ 
        
        '<div class="row">'+
              '<div class="col-md-12">  '+
                  '<p id="info"></p>'+
              '</div>'+        
        '</div>'+ 
            
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<button type="button" class="btn btn-primary" id="save"><i class="fas fa-save"></i> Guardar</button>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+          


        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<button type="button" class="btn btn-danger" id="reporte"><i class="far fa-file-excel"></i> Reporte General</button>'+
                '<div id="dvjson"></div>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+ 

        '<div class="modal-footer">' +
            '<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fas fa-times"></i> Cerrar</button>' +
        '</div>';

   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');  

/*permisos de edición del formulario*/
if(!usr_funct.includes(120) || !usr_funct.includes(121)){
     $('.upd').each(function(index) {
        $(this).prop('disabled', true);
        $(this).css({"backgroundColor":"white"});
    });
    $('#save').hide();
}

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



$('.numeric').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
}); 



$('#save').click(function(){
    guardar();
});


function guardar(){

var obj = {}

obj['op'] = "save_escrituras";
obj['identificador'] = identificador;
obj['usuario']=usuario_nombre;

$('.upd').each(function(index) {
    var valor=$(this).val().toUpperCase().trim(); 
    obj[$(this).prop('id')] = valor
});

/*AJAX para guardar los datos*/
$.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: obj,
    dataType: "json",
    async: false,
    success: function (response) {
       alertify.success("Información almacenada correctamente");
    }, error: function (a) {

    }
}); 

}

/*AJAX para los indices de los campos estado y alternativa habitacional*/

$.ajax({
  type: "POST",
  url: "GestionConsultas",
  data: {op:'indice_tablas_escrituras'},
  dataType: "json",
  async: false,
  success: function (response) {  

     for(var i=0;i<response.length;i++){               
         var estado = document.getElementById('estado');
         var tipo_alternativa = document.getElementById('tipo_alternativa');
         var data=(response[i]['indice']?response[i]['indice']:'').toUpperCase();
         if(response[i]['tbl']==="tbl_es"){                    
              estado.options[estado.options.length] = new Option(data,data);
         }else{
              tipo_alternativa.options[tipo_alternativa.options.length] = new Option(data, data);
         }
     }
  }
});



/*Traer los datos de la base de datos*/
traer_datos(identificador);

function traer_datos(identificador){
    
 $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: {op:'traer_datos_escrituras',identificador:identificador},
      dataType: "json",
      async: false,
      success: function (response) {  
         if(response.length>0){
             for (var x in response[0]) {
                $("#"+x).val((response[0][x]?response[0][x]:''));
             }
             if((response[0]['escrituras_upd_user']?response[0]['escrituras_upd_user']:'')!==''){
                 $('#info').append('última actualización por: <b>'+response[0]['escrituras_upd_user']+'</b> en la fecha: <b>'+response[0]['escrituras_upd_time']+'</b>');
             }
         }
      }
    });       
}



 function obligatorio(){
    var cont=0;
    $('.obligatorio').each(function() {

    var str=$(this).attr('id');
    
    if($(this).val()==='' || $(this).val()==='Seleccione...' ){
        if($("#"+str+"_error").length===0) {
           $(this).after( $( "<label id="+$(this).attr('id')+'_error'+" class='error'>Campo Obligatorio</label>" ) );
           cont=cont+1;
          }else{
            $("#"+str+"_error").show();
            cont=cont+1;
          }
    }else{
       
          $("#"+str+'_error').hide();
    }
    
}); 
     return cont;
 }


get_pdf(identificador)
    
function get_pdf(identificador){


var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_escritura",
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

                            datos1["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos1["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview1='ObtenerArchivo?ID='+datos1["1"];
                    }

                }
            }
        }, error: function (a) {
            alert("No fué posible obtener EL PDF");
        }


    });

var contar;
           
if(datos1["1"]===undefined){
     contar=false;
}else{
     contar=true;
}

$("#input-b2").fileinput({
    theme: 'fa',
    language: 'es',
    initialPreview: [
        url_preview1
    ], 
    fileActionSettings: {
    'showRemove': false,
    'indicatorNew': '&nbsp;'
},
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: datos1["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos1["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: 'Escritura de la alternativa habitacional',
                identificador: identificador,
                tipo_documento: '7104',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_escrituras',
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


$("#input-b2").on("filepredelete", function (event, key, jqXHR, data) {
    var abort = borrar_pdf;
    if(borrar_pdf){
        alertify.error("El archivo no se puede borrar");
    }
    else{
        contar=false;
    }
    return abort;
});


$("#input-b2").on('filepreajax', function (event, previewId, index) {
    contar=true;
    $('.fileinput-upload').hide();
    $('.btn-file').hide();     
});




}

/*descarga de documento excel reporte de escrituras*/

$('#reporte').click(function(){
                      
var data;
$.ajax({
    type: "POST",
    url: "GestionConsultas",
    data: {op: 'reporte_escrituras'},
    dataType: "json",
    async: false,
    success: function (response) {
        console.log(response);
        data=response;
    },
    error: function (response) {
        alert("Ocurrió un error al almacenar la información");
    }
});

$("#dvjson").excelexportjs({
    containerid: "dvjson"
       , datatype: 'json'
       , dataset: data
       , columns: getColumns(data)     
});


});


 }