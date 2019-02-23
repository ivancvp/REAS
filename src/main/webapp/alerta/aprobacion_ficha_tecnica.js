
function aprobacion_ficha_tecnica (){
 var contenido=
     
'<h1>Aprobación de Ficha técnica</h1>'+
'<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
 '<hr /> '+
 '<div class="row">'+
    '<div class="form-group">'+
      '<button id="aprob_est" class="btn btn-default btn-md col-md-2" type="button" > <span class="glyphicon glyphicon-ok"></span> Aprobar</button>'+
      '<button id="no_aprob_est" class="btn btn-default btn-md col-md-2" type="button" > <span class="glyphicon glyphicon-remove"></span> No Aprobar</button>'+ 
      ' </div>'+
      ' </div>'+
      '<div class="form-group row" id="div_obs_aprob">'+
      '<label class="col-sm-4 col-form-label">Observaciones de rechazo</label>'+
      '  <textarea class="form-control upd" rows="5" id="obs_aprob"></textarea>'+
      ' </div>'+
       '<hr /> '+
      '<div class="form-group row">'+
      '<button id="save_aprob" class="btn btn-primary btn-md col-md-1.5" type="button" > <span class="glyphicon glyphicon-floppy-disk"></span> Enviar</button>'+ 
 ' </div>';

 return contenido;
}


 