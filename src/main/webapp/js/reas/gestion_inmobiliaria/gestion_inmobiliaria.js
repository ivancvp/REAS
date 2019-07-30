 
 function general_gestion_inmobiliaria(identificador){
     var contenido=
'<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title">Formulario de: Gestión inmobiliaria</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<h1 style="color:#F39C12;font-size: 20px;">Módulo general para el proceso de gestión inmobiliaria <i class="fas fa-home"></i> </h1>'+
      
                
                '<div class="row">'+
                    '<div class="col-md-12">  '+
                        '<p>En este módulo usted podrá consultar la información básica más relevante para el proceso de gestión inmobiliaria</p>'+
                    '</div>'+        
                '</div>'+     
                
'<div id="smartwizard">'+
'    <ul>'+
'        <li><a href="#step-1"><i class="fas fa-building"></i><br /><small>Proyectos</small></a></li>'+
'        <li><a href="#step-2"><i class="fas fa-home"></i><br /><small>Selección de vivienda</small></a></li>'+
'        <li><a href="#step-3"><i class="fas fa-info"></i><br /><small>Cruces de información</small></a></li>'+
'        <li><a href="#step-4"><i class="fas fa-info"></i><br /><small>Estados</small></a></li>'+
'        <li><a href="#step-5"><i class="fas fa-file-alt"></i><br /><small>Desestimientos</small></a></li>'+
'        <li><a href="#step-6"><i class="fas fa-gavel"></i><br /><small>Sanciones</small></a></li>'+
'    </ul>'+
'<div>'+
'        <div id="step-1" class="">'+

        '<h2>Proyectos</h2>'+              
                  
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Nombre del proyecto</label> '+
                '<input type="text" class="form-control for_table1 obligatorio data paso1" style="text-transform: uppercase" id="crea_nom_proy"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+    
        
         '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Oferente (Nombre del constructor)</label> '+
                '<input type="text" class="form-control for_table1 obligatorio data paso1" style="text-transform: uppercase" id="crea_nom_cons"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+ 
         
        '<div class="row"> '+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                    '<label for="sandbox-container" class="control-label">Fecha de posible entrega</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd data paso1 fecha for_table1" id="crea_fecha_entrega" placeholder="Fecha"></div>'+
                '</div> '+
            '</div> '+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                    '<label for="sandbox-container" class="control-label">Tipo de proyecto</label> '+
                    '<select class="form-control for_table1 obligatorio data paso1" id="crea_tipo_proy" ><option value="">Seleccione</option><option value="NO APLICA">NO APLICA (N/A)</option><option value="PROPIO">PROYECTO PROPIO</option><option value="PRIVADO">PROYECTO PRIVADO</option></select> '+
                '</div> '+
            '</div> '+
        '</div> '+   

 
            '<div class="row"> '+ 
            '  <div class="col-md-12">  '+
                    '<button type="button" class="btn btn-primary" id="add_row"><i class="fas fa-plus"></i></button>'+
                    '<button type="button" class="btn btn-success" id="save_row" style="display:none"><i class="fas fa-save"></i></button>'+
                    '<button type="button" class="btn btn-danger" id="del_row" style="display:none"><i class="far fa-trash-alt"></i></button>'+
                '</div>'+  
            '</div>'+  

            
 
                '<div class="row">'+
                   '<div class="col-md-12">'+ 
                    '<table class="table table-bordered" id="tabla1">'+
                    '<thead>'+
                      '<tr>'+
                        '<th width="10px">#</th>'+
                        '<th width="35px" >Editar</th>'+
                        '<th>Nombre Proyecto</th>'+
                        '<th>Nombre Constructor</th>'+
                        '<th>Fecha de posible entrega</th>'+
                        '<th>Tipo de Proyecto</th>'+
                      '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                      '<tr >'+
                      '</tr>'+                      
                    '</tbody>'+
                  '</table>'+
                '</div>'+              
            '</div>'+ 


'        </div> '+     

'        <div id="step-2" class="">'+


        '<h2>Selección de vivienda</h2>'+ 

                    '<div class="row"> '+
                        '<div class="col-md-9"> '+
                        '<div class="form-group"> '+
                           '<label class="control-label">Nombre del beneficiario</label> '+
                           '<div class="row" > '+
                                '<div class="col-md-12" style="padding-right:0"> '+
                                     '<input type="text" class="form-control nombre" style="text-transform: uppercase" placeholder="Nombre" disabled> '+
                                '</div> '+
                           '</div> '+
                       '</div> '+
                   '</div> '+
                   
                    '<div class="col-md-3"> '+
                       '<div class="form-group"> '+
                           '<label class="control-label">Cédula</label> '+
                           '<input type="text" class="form-control cedula"  placeholder="Cédula" disabled> '+
                       '</div> '+
                   '</div> '+
                '</div> '+  

                '<div class="row">'+
                    '<div class="col-md-6"> '+
                        '<div class="form-group"> '+
                        '<label class="control-label">Proyecto escogido</label> '+
                        '<input type="text" class="form-control db sel_proyecto" id="sel_proyecto"> '+
                        '</div> '+ 
                    '</div> '+                        
                    '<div class="col-md-3"> '+
                        '<div class="form-group"> '+
                        '<label class="control-label">Torre</label> '+
                        '<input type="text" class="form-control db" id="sel_torre"> '+
                        '</div> '+ 
                    '</div> '+                       
                    '<div class="col-md-3"> '+
                        '<div class="form-group"> '+
                        '<label class="control-label">Apartamento</label> '+
                        '<input type="text" class="form-control db" id="sel_apto" > '+
                        '</div> '+ 
                    '</div> '+                        
                '</div> '+                 

                '<div class="row"> '+
                        '<div class="col-md-4"> '+
                            '<div class="form-group"> '+
                                '<label for="sandbox-container" class="control-label">Fecha de selección </label> '+
                                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd fecha db" id="sel_fecha_sel" placeholder="Fecha"></div>'+
                            '</div> '+
                        '</div> '+
                '</div> '+                 
                

        '<button type="button" class="btn btn-primary" id="save_sel_vivienda"><i class="fas fa-save"></i> Guardar</button>' +



'        </div> '+ 


'        <div id="step-3" class="">'+


                
            '<h2>Cruces de información</h2>'+
                
                
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Sentencia (origen)</label> '+
                    '<input type="text" class="form-control db" id="cru_sentencia" > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+   
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Causal</label> '+
                    '<input type="text" class="form-control db" id="cru_causal" > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Nombre de la entidad</label> '+
                    '<input type="text" class="form-control db" id="cru_entidad"> '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Inscripción (Si/No)</label> '+
                    '<select class="form-control db" id="cru_inscripcion" ><option value="">Seleccione</option><option value="SI">SI</option><option value="NO">NO</option></select> '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Fecha de inscripción</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd fecha db" id="cru_fecha_inscripcion" placeholder="Fecha"></div>'+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
 
                
        '<button type="button" class="btn btn-primary" id="save_cruces_informacion"><i class="fas fa-save"></i> Guardar</button>' +
             
             
'        </div> '+ 

'        <div id="step-4" class="">'+
        '<h2>Estados</h2>'+
        
        
                    '<div class="row"> '+
                '<div class="col-md-9"> '+
                   '<div class="form-group"> '+
                       '<label class="control-label">Nombre del beneficiario</label> '+
                       '<div class="row" > '+
                            '<div class="col-md-12" style="padding-right:0"> '+
                                 '<input type="text" class="form-control nombre" style="text-transform: uppercase" placeholder="Nombre" disabled> '+
                            '</div> '+
                       '</div> '+
                   '</div> '+
               '</div> '+
                '<div class="col-md-3"> '+
                   '<div class="form-group"> '+
                       '<label class="control-label">Cédula</label> '+
                       '<input type="text" class="form-control cedula" placeholder="Cédula" disabled> '+
                   '</div> '+
               '</div> '+
            '</div> '+  
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Proyecto escogido</label> '+
                    '<input type="text" class="form-control db sel_proyecto" disabled> '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Estado</label> '+
                    '<input type="text" class="form-control db" id="estado_estado" > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+
            
            
        '<button type="button" class="btn btn-primary" id="save_estado"><i class="fas fa-save"></i> Guardar</button>' +

            
            
'        </div> '+ 

'        <div id="step-5">'+

        '<h2>Desestimientos</h2>'+
            

        '<div class="row">'+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Proyecto escogido</label> '+
                '<input type="text" class="form-control " id="proyecto_escogido_des" disabled> '+
                '</div> '+ 
            '</div> '+                        
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Torre</label> '+
                '<input type="text" class="form-control " disabled > '+
                '</div> '+ 
            '</div> '+                       
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Apartamento</label> '+
                '<input type="text" class="form-control" disabled > '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+   
             
            
        '<div class="row"> '+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                    '<label for="sandbox-container" class="control-label">Fecha de registro</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha data" id="fecha_registro_des" placeholder="Fecha"></div>'+
                '</div> '+
            '</div> '+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                    '<label for="sandbox-container" class="control-label">Fecha de desestimiento</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha data" id="fecha_desestimiento_des" placeholder="Fecha"></div>'+
                '</div> '+
            '</div> '+
        '</div> '+   




        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Causal</label> '+
                '<input type="text" class="form-control data " id="causal_des"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+    
        
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de selección</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha data" id="" placeholder="Fecha" disabled></div>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+         
        
              
     

 
        '<div class="row"> '+ 
        '  <div class="col-md-12">  '+
                '<button type="button" class="btn btn-primary" id="add_row1"><i class="fas fa-plus"></i></button>'+
                '<button type="button" class="btn btn-success" id="save_row1" style="display:none"><i class="fas fa-save"></i></button>'+
                '<button type="button" class="btn btn-danger" id="del_row1" style="display:none"><i class="far fa-trash-alt"></i></button>'+
            '</div>'+  
        '</div>'+  

            
 
        '<div class="row">'+
           '<div class="col-md-12">'+ 
            '<table class="table table-bordered" id="tabla2">'+
            '<thead>'+
              '<tr>'+
                '<th width="10px">#</th>'+
                '<th width="35px" >Editar</th>'+
                '<th>Fecha de registro</th>'+
                '<th>Fecha de desestimiento</th>'+
                '<th>Causal</th>'+
                '<th>Proyecto escogido</th>'+
              '</tr>'+
            '</thead>'+
            '<tbody>'+
              '<tr >'+
              '</tr>'+                      
            '</tbody>'+
          '</table>'+
        '</div>'+              
    '</div>'+ 


'        </div> '+ 



'        <div id="step-6">'+

            '<h2>Sanciones</h2>'+


        '<div class="row">'+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Proyecto escogido</label> '+
                '<input type="text" class="form-control for_table " id="proyecto_escogido_sancion"  disabled> '+
                '</div> '+ 
            '</div> '+                        
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Torre</label> '+
                '<input type="text" class="form-control for_table " disabled> '+
                '</div> '+ 
            '</div> '+                       
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Apartamento</label> '+
                '<input type="text" class="form-control for_table " disabled> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  


        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Estados</label> '+
                '<input type="text" class="form-control for_table " id="estado_sancion"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  
        
        
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Observaciones</label> '+
                '<input type="text" class="form-control for_table " id="observaciones_sancion"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+         
        

           '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de registro</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_registro_sancion" placeholder="Fecha"></div>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+      
        
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de sanción</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_sancion_sancion" placeholder="Fecha"></div>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+   
        

        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Cantidad de sanciones</label> '+
                '<input type="text" class="form-control for_table " id="doc_ide"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+ 
     

 
        '<div class="row"> '+ 
        '  <div class="col-md-12">  '+
                '<button type="button" class="btn btn-primary" id="add_row2"><i class="fas fa-plus"></i></button>'+
                '<button type="button" class="btn btn-success" id="save_row2" style="display:none"><i class="fas fa-save"></i></button>'+
                '<button type="button" class="btn btn-danger" id="del_row2" style="display:none"><i class="far fa-trash-alt"></i></button>'+
            '</div>'+  
        '</div>'+  

            
 
        '<div class="row">'+
           '<div class="col-md-12">'+ 
            '<table class="table table-bordered" id="tabla3">'+
            '<thead>'+
              '<tr>'+
                '<th width="10px">#</th>'+
                '<th width="35px" >Editar</th>'+
                '<th>Proyecto</th>'+
                '<th>Estado</th>'+
                '<th>Fecha de sanción</th>'+
                '<th>Observaciones</th>'+
              '</tr>'+
            '</thead>'+
            '<tbody>'+
              '<tr >'+
              '</tr>'+                      
            '</tbody>'+
          '</table>'+
        '</div>'+              
    '</div>'+ 



        '</div> '+  



        '</div> '+             


        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fas fa-times"></i> Cerrar</button>' +

        '</div>';

   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');  


 $('#smartwizard').smartWizard({
    selected: 0,  // Initial selected step, 0 = first step 
    keyNavigation:true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
    autoAdjustHeight:true, // Automatically adjust content height
    cycleSteps: false, // Allows to cycle the navigation of steps
    backButtonSupport: true, // Enable the back button support
    useURLhash: true, // Enable selection of the step based on url hash
    lang: {  // Language variables
        next: 'Siguiente', 
        previous: 'Anterior'
    },
    anchorSettings: {
        anchorClickable: true, // Enable/Disable anchor navigation
        enableAllAnchors: true, // Activates all anchors clickable all times
        markDoneStep: true, // add done css
        enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
    },            
    disabledSteps: [],    // Array Steps disabled
    errorSteps: [],    // Highlight step with errors
    theme: 'arrows',

    transitionSpeed: '400'
});
$(".sw-btn-prev").removeClass("btn-secondary").addClass("btn-primary"); 
$(".sw-btn-next").removeClass("btn-secondary").addClass("btn-success");  
$('#save_caracoli').append('<i class="glyphicon glyphicon-floppy-disk"></i>');  


function datos_formulario(){
    
var obj = {}

obj['identificador'] = identificador;
obj['usuario']=usuario_nombre;

$('.db').each(function(index) {
    
    var valor=$(this).val().toUpperCase().trim();

    obj[$(this).prop('id')] = valor
       
    
});


return obj;
    
}

$('#save_sel_vivienda').click(function(){
    
    var obj=datos_formulario();
    obj['op'] = "save_sel_vivienda_inmobiliaria";
        
      $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: obj,
      dataType: "json",
      async: false,
      success: function (response) {
          
          console.log(response)
            
      }
  });
   
});

$('#save_estado').click(function(){
    
    var obj=datos_formulario();
    obj['op'] = "save_estado_inmobiliaria";
        
      $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: obj,
      dataType: "json",
      async: false,
      success: function (response) {
          
          console.log(response)
            
      }
  });
    
});

$('#save_cruces_informacion').click(function(){
    
    var obj=datos_formulario();
    obj['op'] = "save_cruces_inmobiliaria";
    
        
      $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: obj,
      dataType: "json",
      async: false,
      success: function (response) {
          
          console.log(response)
            
      }
  });
});


traer_info_gestion();

function traer_info_gestion(){
    
     $datos = {
         op: 'get_data_inmobiliaria',
         identificador:identificador
     };
       
    ajax($datos);

     $datos = {
         op: 'get_data_sel_vivienda_inmobiliaria',
         identificador:identificador
     };
     
    ajax($datos);
    
    $datos = {
         op: 'get_data_cruces_inmobiliaria',
         identificador:identificador
     };
     
    ajax($datos);
        
    
}

function ajax(datos){
      $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: datos,
      dataType: "json",
      async: false,
      success: function (response) {
           if(response.length>0){
               
           $.each( response[0], function( key, value ) {               
                   $('#'+key).val(value);
            });
            $.each( response[0], function( key, value ) {               
                   $('.'+key).val(value);
            }); 
            
            }
            
      }

  }); 
    
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

$('.tel').change(function() {
   checkNumberFieldLength(this); 
});

function checkNumberFieldLength(elem) {
    if (elem.value.length > 10) {
        elem.value = null;
        alertify.error("Número no válido");
    }
};

$('.numeric').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
}); 

$('.numeric1').focusout('input', function (event) {    
var term = this.value;
var re = new RegExp("([2-9]|[1-8][0-9]|9[0-9]|100)");
if (re.test(term)) {
    
} else {
    alertify.error("Debe ingresar un número mayor a 1");
    this.value=""
}
}); 


var indice=0;
var indice_guardar=0;

    $datos = {
        op: 'get_info_inmobiliaria_proyecto'
    };
    $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: $datos,
      dataType: "json",
      async: false,
      success: function (response) {

       for ( var i = 0, l = response.length; i < l; i++ ) {
          var data=response[i];
          generar_filas_tabla1(data.consecutivo,data.nombre,data.constructor,data.fecha_entrega,data.tipo_proyecto);
          
       }

      }, error: function (a) {

      }
  });
  
     $datos = {
        op: 'get_info_inmobiliaria_desestimientos',
        identificador:identificador
    };
    $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: $datos,
      dataType: "json",
      async: false,
      success: function (response) {

    

       for ( var i = 0, l = response.length; i < l; i++ ) {
          var data=response[i];
          //generar_filas(data.consecutivo,data.nombre,data.constructor,data.fecha_entrega,data.tipo_proyecto);
          generar_filas_tabla2(data.consecutivo,data.fecha_registro_desestimiento,data.fecha_desestimiento,data.causal_desestimiento,data.proyecto_escogido);
          
       }

      }, error: function (a) {

      }
  }); 


var indice_seleccion=0;

function add_info(no_tabla){

     if(no_tabla===1){
        var fila = $('#tabla1 >tbody >tr').length;
        refresh(no_tabla,fila);
        guardar(fila,1);
     }
     else if(no_tabla===2){
         var fila = $('#tabla2 >tbody >tr').length;
         refresh(no_tabla,fila);
         guardar(fila,2);
     }
     else if(no_tabla===3){
         var fila = $('#tabla3 >tbody >tr').length;
         refresh(no_tabla,fila);
         guardar(fila,3);
     }


 

}


function refresh(no_tabla,fila){
   
    var button= 
        '<div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '   <input type="checkbox" class="upd_check styled edit" ><label></label>'+
        '</div>';
   
   if(no_tabla===1){
       $('#tabla1 tr:last').after('<tr><td>'+fila+'</td><td>'+button+'</td><td>'+$('#crea_nom_proy').val()+'</td><td>'+$('#crea_nom_cons').val()+'</td><td>'+$('#crea_fecha_entrega').val()+'</td><td>'+$('#crea_tipo_proy').val()+'</td></tr>'); 
   }
   else if(no_tabla===2){
       $('#tabla2 tr:last').after('<tr><td>'+fila+'</td><td>'+button+'</td><td>'+$('#fecha_registro_des').val()+'</td><td>'+$('#fecha_desestimiento_des').val()+'</td><td>'+$('#causal_des').val()+'</td><td>'+$('#proyecto_escogido_des').val()+'</td></tr>'); 
   }else if(no_tabla===3){
       $('#tabla3 tr:last').after('<tr><td>'+fila+'</td><td>'+button+'</td><td>'+$('#proyecto_escogido_sancion').val()+'</td><td>'+$('#estado_sancion').val()+'</td><td>'+$('#fecha_sancion_sancion').val()+'</td><td>'+$('#observaciones_sancion').val()+'</td></tr>'); 
   }

    activar_check();  
 
}

function refrescar_campo(consecutivo,no_tabla){
    
    var button= 
     '<div class="checkbox abc-checkbox abc-checkbox-primary">'+
     '   <input type="checkbox" class="upd_check styled edit" ><label></label>'+
     '</div>';

if(no_tabla===1){
    
    $('#tabla1 tr:eq('+indice_seleccion+')').find("td:eq(2)").text($('#crea_nom_proy').val());
    $('#tabla1 tr:eq('+indice_seleccion+')').find("td:eq(3)").text($('#crea_nom_cons').val());
    $('#tabla1 tr:eq('+indice_seleccion+')').find("td:eq(4)").text($('#crea_fecha_entrega').val());
    $('#tabla1 tr:eq('+indice_seleccion+')').find("td:eq(5)").text($('#crea_tipo_proy').val());
        
}else if(no_tabla===2){
    
    
    $('#tabla2 tr:eq('+indice_seleccion+')').find("td:eq(2)").text($('#fecha_registro_des').val());
    $('#tabla2 tr:eq('+indice_seleccion+')').find("td:eq(3)").text($('#fecha_desestimiento_des').val());
    $('#tabla2 tr:eq('+indice_seleccion+')').find("td:eq(4)").text($('#causal_des').val());
    $('#tabla2 tr:eq('+indice_seleccion+')').find("td:eq(5)").text($('#proyecto_escogido_des').val());
}
else if(no_tabla===3){
    
    
    $('#tabla3 tr:eq('+indice_seleccion+')').find("td:eq(2)").text($('#proyecto_escogido_sancion').val());
    $('#tabla3 tr:eq('+indice_seleccion+')').find("td:eq(3)").text($('#estado_sancion').val());
    $('#tabla3 tr:eq('+indice_seleccion+')').find("td:eq(4)").text($('#fecha_sancion_sancion').val());
    $('#tabla3 tr:eq('+indice_seleccion+')').find("td:eq(5)").text($('#observaciones_sancion').val());
    
}
        
}


/*parte de adicion de registros en las tablas */
$('#add_row').click(function() {
    add_info(1);
 }); 
 
$('#add_row1').click(function() {
    add_info(2);
 }); 
 $('#add_row2').click(function() {
    add_info(3);
 }); 



activar_check();
function activar_check(){
   $('.edit:checkbox').click(function() {            

        $('.edit:checkbox').not(this).prop('checked', false);

        var editar=(this).closest("tr");
        indice=$(editar).index()+1;
        indice_guardar=$(editar).index();

        indice_seleccion=indice;

    var tabla=$(this).closest('.table').attr('id');

    if(tabla==="tabla1"){
        
        $('#crea_nom_proy').val($('#tabla1 tr:eq('+indice+')').find("td:eq(2)").text());              
        $('#crea_nom_cons').val($('#tabla1 tr:eq('+indice+')').find("td:eq(3)").text());               
        $('#crea_fecha_entrega').val($('#tabla1 tr:eq('+indice+')').find("td:eq(4)").text());               
        $('#crea_tipo_proy').val($('#tabla1 tr:eq('+indice+')').find("td:eq(5)").text()); 
        
    }else if(tabla==="tabla2"){
       
        $('#fecha_registro_des').val($('#tabla2 tr:eq('+indice+')').find("td:eq(2)").text());              
        $('#fecha_desestimiento_des').val($('#tabla2 tr:eq('+indice+')').find("td:eq(3)").text());               
        $('#causal_des').val($('#tabla2 tr:eq('+indice+')').find("td:eq(4)").text());               
        $('#proyecto_escogido_des').val($('#tabla2 tr:eq('+indice+')').find("td:eq(5)").text()); 
        
    }else if(tabla==="tabla3"){
       

        $('#proyecto_escogido_sancion').val($('#tabla3 tr:eq('+indice+')').find("td:eq(2)").text());              
        $('#estado_sancion').val($('#tabla3 tr:eq('+indice+')').find("td:eq(3)").text());               
        $('#fecha_sancion_sancion').val($('#tabla3 tr:eq('+indice+')').find("td:eq(4)").text());               
        $('#observaciones_sancion').val($('#tabla3 tr:eq('+indice+')').find("td:eq(5)").text());     
           
           
    }


    if($('.edit:checked').length === 0){
        if(tabla==="tabla1"){
            $('#save_row').hide();
            $('#del_row').hide();
            $('#add_row').show();
        }else if(tabla==="tabla2"){
            $('#save_row1').hide();
            $('#del_row1').hide();
            $('#add_row1').show();
        }
        else if(tabla==="tabla3"){
            $('#save_row2').hide();
            $('#del_row2').hide();
            $('#add_row2').show();
        }
        
    }else{
        if(tabla==="tabla1"){
            $('#save_row').show();
            $('#del_row').show();
            $('#add_row').hide();
        }else if(tabla==="tabla2"){
            $('#save_row1').show();
            $('#del_row1').show();
            $('#add_row1').hide();
        }
        else if(tabla==="tabla3"){
            $('#save_row2').show();
            $('#del_row2').show();
            $('#add_row2').hide();
        }
    } 
          
}); 
    
}



function guardar(consecutivo,no_tabla){

    refrescar_campo(consecutivo,no_tabla);
    

    var obj = {}
    
    if(no_tabla===1){
        obj['op'] = "save_proy_inmobiliaria";
    }else if(no_tabla===2){
        obj['op'] = "save_des_inmobiliaria";
    }
    
    
    obj['identificador'] = identificador; 
    obj['usuario_nombre'] = usuario_nombre; 
    obj['consecutivo'] = consecutivo;

    $('.data').each(function(index) {

        var valor=$(this).val().toUpperCase().trim();        
        obj[$(this).prop('id')] = valor;
        $(this).val("");
        
    });
    

    console.log(obj)

    /* guardado de la información*/
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



$('#del_row').click(function() {
    borrar();
});


$('#save_row').click(function() {

    guardar($('#tabla1 tr:eq('+indice+')').find("td:eq(0)").text(),1);

});

$('#save_row1').click(function() {
    guardar($('#tabla2 tr:eq('+indice+')').find("td:eq(0)").text(),2);

});
$('#save_row2').click(function() {

    guardar($('#tabla3 tr:eq('+indice+')').find("td:eq(0)").text(),3);

});

function borrar(){
    
    $datos = {
        op: 'delete_inmobiliaria_proyecto',
        consecutivo:indice-1 
    };
    $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: $datos,
      dataType: "json",
      async: false,
      success: function (response) {
          alertify.success("Miembro borrado con exito");
      }, error: function (a) {

      }
  });
    
   
    $('#tabla1 tr:eq('+indice+')').remove();
        $(".for_table").each(function(){
        $(this).val("");
    });
    
    $('#save_row').hide();
    $('#del_row').hide();
    $('#add_row').show();
    
    
}



function generar_filas_tabla1(contador,crea_nom_proy,crea_nom_cons,crea_fecha_entrega,crea_tipo_proy){
    var button= 
        '<div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '   <input type="checkbox" class="upd_check styled edit" ><label></label>'+
        '</div>';

        $('#tabla1 tr:last').after('<tr><td>'+contador+'</td><td>'+button+'</td><td>'+crea_nom_proy+'</td><td>'+crea_nom_cons+'</td><td>'+crea_fecha_entrega+'</td><td>'+crea_tipo_proy+'</td></tr>'); 

}

function generar_filas_tabla2(consecutivo,fecha_registro_desestimiento,fecha_desestimiento,causal_desestimiento,proyecto_escogido){
    var button= 
        '<div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '   <input type="checkbox" class="upd_check styled edit" ><label></label>'+
        '</div>';

        $('#tabla2 tr:last').after('<tr><td>'+consecutivo+'</td><td>'+button+'</td><td>'+fecha_registro_desestimiento+'</td><td>'+fecha_desestimiento+'</td><td>'+causal_desestimiento+'</td><td>'+proyecto_escogido+'</td></tr>'); 

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




 }