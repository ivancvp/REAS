 
 function general_gestion_inmobiliaria(){
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
'        <li><a href="#step-4"><i class="fas fa-file-alt"></i><br /><small>Desestimientos</small></a></li>'+
'        <li><a href="#step-5"><i class="fas fa-gavel"></i><br /><small>Sanciones</small></a></li>'+
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
                                '<div class="col-md-3" style="padding-right:0"> '+
                                     '<input type="text" class="form-control" style="text-transform: uppercase" id="nom1" placeholder="Nombre 1" > '+
                                '</div> '+
                                '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                                    '<input type="text" class="form-control" style="text-transform: uppercase" id="nom2" placeholder="Nombre 2" > '+
                                '</div> '+
                                '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                                    '<input type="text" class="form-control" style="text-transform: uppercase" id="ape1" placeholder="Apellido 1" > '+
                                '</div> '+
                                '<div class="col-md-3" style="padding-left:0"> '+
                                    '<input type="text" class="form-control" style="text-transform: uppercase" id="ape2" placeholder="Apellido 2" > '+
                                '</div> '+
                           '</div> '+
                       '</div> '+
                   '</div> '+
                   
                    '<div class="col-md-3"> '+
                       '<div class="form-group"> '+
                           '<label class="control-label">Cédula</label> '+
                           '<input type="text" class="form-control numeric tel" id="cedula" placeholder="Cédula" > '+
                       '</div> '+
                   '</div> '+
                '</div> '+  

                '<div class="row">'+
                    '<div class="col-md-6"> '+
                        '<div class="form-group"> '+
                        '<label class="control-label">Proyecto escogido</label> '+
                        '<input type="text" class="form-control for_table " > '+
                        '</div> '+ 
                    '</div> '+                        
                    '<div class="col-md-3"> '+
                        '<div class="form-group"> '+
                        '<label class="control-label">Torre</label> '+
                        '<input type="text" class="form-control for_table " > '+
                        '</div> '+ 
                    '</div> '+                       
                    '<div class="col-md-3"> '+
                        '<div class="form-group"> '+
                        '<label class="control-label">Apartamento</label> '+
                        '<input type="text" class="form-control for_table " > '+
                        '</div> '+ 
                    '</div> '+                        
                '</div> '+                 

                '<div class="row"> '+
                        '<div class="col-md-4"> '+
                            '<div class="form-group"> '+
                                '<label for="sandbox-container" class="control-label">Fecha de selección </label> '+
                                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                            '</div> '+
                        '</div> '+
                '</div> '+                 
                


          


'        </div> '+ 


'        <div id="step-3" class="">'+


                
            '<h2>Cruces de información</h2>'+
                
                
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Sentencia (origen)</label> '+
                    '<input type="text" class="form-control for_table " > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+   
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Causal</label> '+
                    '<input type="text" class="form-control for_table " > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Nombre de la entidad</label> '+
                    '<input type="text" class="form-control for_table" > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Inscripción (Si/No)</label> '+
                    '<select class="form-control for_table " ><option value="">Seleccione</option><option value="SI">SI</option><option value="NO">NO</option></select> '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Fecha de inscripción</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            '<div class="row"> '+
                '<div class="col-md-9"> '+
                   '<div class="form-group"> '+
                       '<label class="control-label">Nombre del beneficiario</label> '+
                       '<div class="row" > '+
                            '<div class="col-md-3" style="padding-right:0"> '+
                                 '<input type="text" class="form-control " style="text-transform: uppercase" id="nom1" placeholder="Nombre 1" > '+
                            '</div> '+
                            '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                                '<input type="text" class="form-control" style="text-transform: uppercase" id="nom2" placeholder="Nombre 2" > '+
                            '</div> '+
                            '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                                '<input type="text" class="form-control" style="text-transform: uppercase" id="ape1" placeholder="Apellido 1" > '+
                            '</div> '+
                            '<div class="col-md-3" style="padding-left:0"> '+
                                '<input type="text" class="form-control " style="text-transform: uppercase" id="ape2" placeholder="Apellido 2" > '+
                            '</div> '+
                       '</div> '+
                   '</div> '+
               '</div> '+
                '<div class="col-md-3"> '+
                   '<div class="form-group"> '+
                       '<label class="control-label">Cédula</label> '+
                       '<input type="text" class="form-control numeric tel" id="cedula" placeholder="Cédula" > '+
                   '</div> '+
               '</div> '+
            '</div> '+  
            
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Proyecto escogido</label> '+
                    '<input type="text" class="form-control numeric tel " > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
            
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="form-group"> '+
                    '<label class="control-label">Estado</label> '+
                    '<input type="text" class="form-control numeric tel " > '+
                    '</div> '+ 
                '</div> '+                        
            '</div> '+ 
                

             
             
'        </div> '+ 

'        <div id="step-4">'+

        '<h2>Desestimientos</h2>'+
            
        '<div class="row"> '+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                    '<label for="sandbox-container" class="control-label">Fecha de registro</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                '</div> '+
            '</div> '+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                    '<label for="sandbox-container" class="control-label">Fecha de desestimiento</label> '+
                    '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                '</div> '+
            '</div> '+
        '</div> '+   




        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Causal</label> '+
                '<input type="text" class="form-control for_table " id="doc_ide"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+    
        
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de selección</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+         
        
        '<div class="row">'+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Proyecto escogido</label> '+
                '<input type="text" class="form-control for_table " > '+
                '</div> '+ 
            '</div> '+                        
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Torre</label> '+
                '<input type="text" class="form-control for_table " > '+
                '</div> '+ 
            '</div> '+                       
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Apartamento</label> '+
                '<input type="text" class="form-control for_table " > '+
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
            '<table class="table table-bordered" id="tabla">'+
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



'        <div id="step-5">'+

            '<h2>Sanciones</h2>'+


        '<div class="row">'+
            '<div class="col-md-6"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Proyecto escogido</label> '+
                '<input type="text" class="form-control for_table " > '+
                '</div> '+ 
            '</div> '+                        
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Torre</label> '+
                '<input type="text" class="form-control for_table " > '+
                '</div> '+ 
            '</div> '+                       
            '<div class="col-md-3"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Apartamento</label> '+
                '<input type="text" class="form-control for_table " > '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  







        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Estados</label> '+
                '<input type="text" class="form-control for_table " id="doc_ide"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+  
        
        
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Observaciones</label> '+
                '<input type="text" class="form-control for_table " id="doc_ide"> '+
                '</div> '+ 
            '</div> '+                        
        '</div> '+         
        
        
        
        
        
           '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de registro</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                '</div> '+ 
            '</div> '+                        
        '</div> '+      
        
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Fecha de sanción</label> '+
                '<div class="span5 sandbox-container"><input  type="text" class="form-control upd  fecha" id="fecha_acta" placeholder="Fecha"></div>'+
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
                '<button type="button" class="btn btn-primary" id="add_row"><i class="fas fa-plus"></i></button>'+
                '<button type="button" class="btn btn-success" id="save_row" style="display:none"><i class="fas fa-save"></i></button>'+
                '<button type="button" class="btn btn-danger" id="del_row" style="display:none"><i class="far fa-trash-alt"></i></button>'+
            '</div>'+  
        '</div>'+  

            
 
        '<div class="row">'+
           '<div class="col-md-12">'+ 
            '<table class="table table-bordered" id="tabla">'+
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

var conta=1;
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
          generar_filas(data.consecutivo,data.nombre,data.constructor,data.fecha_entrega,data.tipo_proyecto);
          
       }
       if(response.length>0){
           conta=response[response.length-1].consecutivo+1;
       }
      

      }, error: function (a) {

      }
  });


function add_info(){


     if(obligatorio()>0){
         alertify.error("Revise los campos obligatorios antes de ingresar la información");
     }else{

      var button= 
             '<div class="checkbox abc-checkbox abc-checkbox-primary">'+
             '   <input type="checkbox" class="upd_check styled edit" ><label></label>'+
             '</div>';
             
     refresh();
     
     guardar(conta);

     $(".for_table1").each(function(){
         $(this).val("");
     });



     conta=conta+1;  

     }

}


function refresh(){
   
  $('#tabla1 tr:last').after('<tr><td>'+conta+'</td><td>'+button+'</td><td>'+$('#crea_nom_proy').val()+'</td><td>'+$('#crea_nom_cons').val()+'</td><td>'+$('#crea_fecha_entrega').val()+'</td><td>'+$('#crea_tipo_proy').val()+'</td></tr>'); 
 
}


$('#add_row').click(function() {
    add_info();
 }); 

$('.edit:checkbox').click(function() {            
            
        $('.edit:checkbox').not(this).prop('checked', false);

        var editar=(this).closest("tr");
        indice=$(editar).index()+1;
        indice_guardar=$(editar).index();


        $('#crea_nom_proy').val($('#tabla1 tr:eq('+indice+')').find("td:eq(2)").text());              
        $('#crea_nom_cons').val($('#tabla1 tr:eq('+indice+')').find("td:eq(3)").text());               
        $('#crea_fecha_entrega').val($('#tabla1 tr:eq('+indice+')').find("td:eq(4)").text());               
        $('#crea_tipo_proy').val($('#tabla1 tr:eq('+indice+')').find("td:eq(5)").text());


    if($('.edit:checked').length === 0){
        $(".for_table1").each(function(){
            $(this).val("");
        });
        $('#save_row').hide();
        $('#del_row').hide();
        $('#add_row').show();
    }else{
        $('#save_row').show();
        $('#del_row').show();
        $('#add_row').hide();
    } 
          
});



function guardar(consecutivo){
refresh();
var obj = {}
obj['op'] = "save_proy_inmobiliaria";
obj['usuario_nombre'] = usuario_nombre; 
obj['consecutivo'] = consecutivo;

$('.data').each(function(index) {

    var valor=$(this).val().toUpperCase().trim();        
    obj[$(this).prop('id')] = valor;

});

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
    if(obligatorio()>0){
        alertify.error("Revise los campos obligatorios antes de ingresar la información");
    }else{
        guardar($('#tabla1 tr:eq('+indice+')').find("td:eq(0)").text());
    }


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



function generar_filas(contador,crea_nom_proy,crea_nom_cons,crea_fecha_entrega,crea_tipo_proy){
    var button= 
        '<div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '   <input type="checkbox" class="upd_check styled edit" ><label></label>'+
        '</div>';

        $('#tabla1 tr:last').after('<tr><td>'+contador+'</td><td>'+button+'</td><td>'+crea_nom_proy+'</td><td>'+crea_nom_cons+'</td><td>'+crea_fecha_entrega+'</td><td>'+crea_tipo_proy+'</td></tr>'); 

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