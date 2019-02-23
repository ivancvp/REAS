function solicitud_vur(identificador){

    var contenido =
        
 '<h2 id="titulo" style="color:#2E9AFE">Solicitud de requerimientos</h2>'+
 '<p>En el siguiente modulo usted podrá solicitar formalmente un requerimiento dirigido a un área especifica de la dirección de reasentamientos con el proposito de avanzar en'+
 ' en el proceso para el identificador <b>'+identificador+'</b></p>'+
 

'<div class="row"> '+
'   <div class="col-md-12"> '+ 
'       <div class="form-group">'+
'           <label for="sel1">Área destino del requerimiento:</label>'+
'           <select class="form-control" id="area_req">'+
                '<option value="">Seleccione...</option>'+
                '<option value="Juridica">Jurídica</option>'+
                '<option value="Financiera">Financiera</option>'+
                '<option value="Social">Social</option>'+
                '<option value="ges_documental">Gestión documental</option>'+
                '<option value="des_inmobiliaria">Gestión inmobiliaria</option>'+
'           </select>'+
'       </div>'+
'   </div>'+
'</div>'+


'<div class="row" id="div_tip_req"> '+
'   <div class="col-md-12"> '+ 
'       <div class="form-group">'+
'           <label for="sel1">Tipo de requerimiento</label>'+
'           <select class="form-control" id="tip_req">'+
                '<option>Seleccione...</option>'+
'           </select>'+
'       </div>'+
'   </div>'+
'</div>'+


'<div class="row"> '+
'   <div class="col-md-12"> '+  
'       <div class="form-group">'+
'           <label class="control-label">Descripción del requerimiento</label> '+
'           <textarea class="form-control upd_estudio disponible" rows="5" id="texto_solicitud"></textarea>'+
'       </div> '+
'   </div> '+
'</div> '+



'<div class="btn-group">'+
'   <button type="button" class="btn btn-primary" id="enviar_solicitud_vur"><i class="glyphicon glyphicon-share-alt"></i> Enviar solicitud</button>'+
'</div>';    
     
     
     
return contenido;
   
 }
 
 
 function logica_solicitud_vur(identificador,modo,tipo_proceso,id_actividad){


$('#fecha_solicitud').val(moment(new Date()).format("DD/MM/YYYY"));
$('#nombre_solicitud').val(usuario_nombre);

$('#div_tip_req').hide();



$('#area_req').on("change",function(){
    
    if($(this).val()===""){
        $('#div_tip_req').hide();
    }else{
        $('#div_tip_req').show();
    }
    
    $('#tip_req').find('option').remove();
    $('#tip_req').append($('<option>', {value:'', text:'Seleccione...'}));

    if($(this).val()==="Juridica"){
        $('#tip_req').append($('<option>', {value:'Resolucion', text:'Resolución VUR'}));  
        $('#tip_req').append($('<option>', {value:'Estudio de documentos', text:'Estudio de documentos'}));  
    }
    

});

}

