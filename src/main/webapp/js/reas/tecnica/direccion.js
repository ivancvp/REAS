
 function generar_direccion(){
     
     var cont=
 

'<div class="modal-header">' +
'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
'<h3 class="modal-title" style="color:#2980B9">Asignación de dirección  <i class="fas fa-road"></i></h3>' +
'</div>' +
'<div class="modal-body">' +
' <div class="row">'+
'  <div class="col-md-12"> '+
'<p>En caso de no contar con la dirección, por favor marque la siguiente opción:</p>'+
' </div> '+
'  <div class="col-md-12"> '+
'	  <div class="checkbox">'+
'            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="0a" value="" onchange="myFunction()" ><label> Sin Dirección</label>'+
'            </div>'+
'            </div>'+
' </div> '+

' </div> '+
 '<div id="mostrar">'+
'<p>Ingrese la dirección (según el ejemplo) del predio que desee ubicar</p>'+
'<b>Ejemplo</b>'+
 '<div class="row">'+
 '  <div class="col-md-2 direccion1"> '+ 
	'	  <label >Dg(*)</label>'+
	'	  <select class="form-control bloq" id="1d" onchange="myFunction()">'+
	'	    <option value="">--</option>'+
	'		<option value="CL">Cll</option>'+
	'	    <option value="KR">Cr</option>'+
	'		<option value="DG">Dg</option>'+
	'		<option value="TV">Tr</option>'+
	'		<option value="AC">Av Cll</option>'+
	'		<option value="AK">Av Cr</option>'+
'		  </select>'+
 '   </div>'+
	'<div class="col-md-1 direccion">  	'+
	'	<label >84(*)</label>'+
	'	<input type="number" min="1" max="400" class="form-control bloq" id="2d" onchange="myFunction()">'+	  
    '</div>'+
	 '<div class="col-md-1 direccion">  '+
		'  <label >B</label>'+
		 ' <select class="form-control bloq" id="3d" onchange="myFunction()">	'+	   
		  '</select>'+
'    </div>	'+
'	<div class="col-md-1 direccion">  '+
'		  <label >Bis</label>'+
	'	  <div class="checkbox">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled bloq" id="4d" value="" onchange="myFunction()" ><label>BIS</label>'+
        '            </div>'+
        '            </div>'+
 '   </div>'+
'	<div class="col-md-1 direccion">  '+
'		  <label >A</label>'+
'		  <select class="form-control bloq" id="5d" onchange="myFunction()" disabled>'+		   
'		  </select>'+
 '   </div>'+
  '  <div class="col-md-1 direccion">  '+
	'	  <label >Sur</label>'+
	'	  <div class="checkbox">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled bloq" id="6ad" onchange="myFunction()" ><label>E</label>'+
        '            </div>'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled bloq" id="6bd" onchange="myFunction()" ><label>S</label>'+
        '            </div>'+
	'	  </div>'+
   ' </div>'+
'	<div class="col-md-1 direccion">  '+
'		<label >No.8(*)</label>'+
'		<input type="number" min="1" max="400" class="form-control bloq" id="7d" onchange="myFunction()">	 '+ 
 '   </div>'+
'	<div class="col-md-1 direccion">  '+
'		  <label >B</label>'+
'		  <select class="form-control bloq" id="8d" onchange="myFunction()">'+		   
'		  </select>'+
 '   </div>'+
'	<div class="col-md-1 direccion">  '+
'		<label >62</label>'+
'		<input type="number" min="1" max="400" class="form-control bloq" id="9d" onchange="myFunction()">'+	  
 '   </div>'+
'	<div class="col-md-1 direccion">  '+
'		  <label >Este</label>'+

'		  <div class="checkbox">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled bloq" id="10ad" onchange="myFunction()" ><label>E</label>'+
        '            </div>'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled bloq" id="10bd" onchange="myFunction()" ><label>S</label>'+
        '            </div>'+
'		  </div>'+
'    </div>	'+
' </div> '+
' <div class="row">'+
'  <div class="col-md-12"> '+
'		<label >Complemento Dirección</label>'+
'		<input type="text" class="form-control bloq" id="text_dir" onchange="myFunction()">'+
' </div> '+
' </div> '+
' </div> '+
' <div class="row">'+
'  <div class="col-md-12"> '+
'		<label >Dirección Generada</label>'+
'		<b><h3 style="color:#E74C3C" id="11d"> </h3></b>'+
' </div> '+
' </div> '+
'<br>'+
' <div class="row">'+
 '  <div class="col-md-4"> '+
' <button type="button" id="save_direccion" class="btn btn-success"  onclick="$(\'#modal_form_tec\').modal(\'toggle\')"><i class="glyphicon glyphicon-floppy-saved"></i> Guardar</button>'+
' </div> '+
'</div>'+            
'</div>' +
'<div class="modal-footer">' +
'<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fas fa-times"></i> Cerrar</button>' +
'</div>';    

     return cont;
 }
 

 
 function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i).toUpperCase());
    }
    return a;
}




function myFunction() {




if($('#1d').val()==="CL" || $('#1d').val()==="DG" || $('#1d').val()==="AC"){
 $("#6ad").attr("disabled", true);
 $("#10bd").attr("disabled", true);
 $("#6bd").attr("disabled", false);
 $("#10ad").attr("disabled", false);
}else{
 $("#6ad").attr("disabled", false);
 $("#10bd").attr("disabled", false);
 $("#6bd").attr("disabled", true);
 $("#10ad").attr("disabled", true);
}
 


var bis="";
if($('#4d').is(":checked")){
 bis="BIS";
 $("#5d").attr("disabled", false);
}else{
 $("#5d").attr("disabled", true);
 bis="";
}

var e1="";
if($('#6ad').is(":checked")){
 e1="ESTE";
}else{
 e1="";   
}
var s1="";
if($('#6bd').is(":checked")){
 s1="SUR";
}else{
 s1="";   
}

if($('#6ad').is(":checked")){
 $('#6bd').prop('checked', false);
}else{
 $('#6ad').prop('checked', false);  
}
var e2="";
if($('#10ad').is(":checked")){
 e2="ESTE";
}else{
 e2="";   
}
var s2="";
if($('#10bd').is(":checked")){
 s2="SUR";
}else{
 s2="";   
}


var contenido="";




if($('#1d').val()!==""){
contenido=contenido+$('#1d').val()+" ";
}
if($('#2d').val()!==""){
contenido=contenido+$('#2d').val()+" ";
}
if($('#3d').val()!==""){
contenido=contenido+$('#3d').val()+" ";
}
if(bis!==""){
contenido=contenido+bis+" ";
}
if($('#4d').val()!==""){
contenido=contenido+$('#4d').val()+" ";
}
if($('#5d').val()!==""){
contenido=contenido+$('#5d').val()+" ";
}
if(e1!==""){
contenido=contenido+e1+" ";
}
if(s1!==""){
contenido=contenido+s1+" ";
}
if($('#7d').val()!==""){
contenido=contenido+$('#7d').val()+" ";
}
if($('#8d').val()!==""){
contenido=contenido+$('#8d').val()+" ";
}
if($('#9d').val()!==""){
contenido=contenido+$('#9d').val()+" ";
}
if(e2!==""){
contenido=contenido+e2+" ";
}
if(s2!==""){
contenido=contenido+s2+" ";
}
if($('#text_dir').val()!==""){
contenido=contenido+$('#text_dir').val()+"";
}
if($('#0a').is(":checked")){
   
contenido="SIN DIRECCIÓN";
$('.bloq').attr('disabled', 'disabled'); 
$('.bloq').css({"backgroundColor":"white"});
$('#mostrar').hide();
}else{
    $('.bloq').prop("disabled", false);
    $('#mostrar').show();
}
contenido = contenido.replace(/\s\s+/g, ' ');
$('#11d').text(contenido);
}