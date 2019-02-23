




function reporte_fichas (){


 var contenido=



'<div class="modal-header">' +
'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
'<h4 class="modal-title">Formulario de: Devolución de Solicitud</h4>' +
'</div>' +
'<div class="modal-body">' +

'<h1>Reporte de Fichas social y técnica</h1>'+
   '<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
'<hr />'+
 '<div class="row">'+
        '  <div class="form-horizontal" > '+
        '    <div class="form-group">'+        
        '           <label class="control-label col-sm-4">Reporte Fichas Técnicas Gavilanes</label>'+
        '        <div class="col-sm-2">'+
        '           <button type="button" class="btn btn-danger"  onclick="">Ver</button>'+
        '        </div>'+
        '    </div>'+
        '</div>'+ 
'</div>'+
 '<div class="row">'+
        '  <div class="form-horizontal" > '+
        '    <div class="form-group">'+        
        '           <label class="control-label col-sm-4">Reporte Fichas Técnicas Vereditas:</label>'+
        '        <div class="col-sm-2">'+
        '           <button type="button" class="btn btn-danger" onclick="">Ver</button>'+
        '        </div>'+
        '    </div>'+
        '</div>'+ 
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
 
}


 