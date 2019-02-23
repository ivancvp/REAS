function aprobacion_sig(identificador){
    
    var contenido =
 '  <div class="container-fluid"> '+
 '<h2 style="color:#2E9AFE">Sistema de aprobación SIG</h2>'+
 '<br>'+
 '<br>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha de aprobación</label> '+
                            '     <div class="span5 sandbox-container"><input type="date" id="fecha_aprob" class="form-control" placeholder="Fecha" disabled></div>'+
                            '   </div> '+
 '                     </div> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Identificador</label> '+
                                '     <input type="text" class="form-control" id="iden_sig" placeholder="identificador" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
  '                 <div class="row"> '+
 '                     <div class="col-md-5"> '+
                                '   <div class="form-group"> '+
                                '     <label for="direccion_sig" class="control-label">Dirección</label> '+
                                '     <input type="text" class="form-control" id="direccion_sig" placeholder="Dirección" disabled> '+
                                '   </div> '+
 '                     </div> '+
 '                     <div class="col-md-2"> '+
                                '   <div class="form-group"> '+
                                '     <label for="manzana_sig" class="control-label">Manzana</label> '+
                                '     <input type="text" class="form-control" id="manzana_sig" placeholder="Manzana" disabled> '+
                                '   </div> '+

 '                     </div> '+
  '                     <div class="col-md-2"> '+
                                '   <div class="form-group"> '+
                                '     <label for="lote_sig" class="control-label">Lote</label> '+
                                '     <input type="text" class="form-control" id="lote_sig" placeholder="Lote" disabled> '+
                                '   </div> '+

 '                     </div> '+
   '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="chip_sig" class="control-label">CHIP</label> '+
                                '     <input type="text" class="form-control" id="chip_sig" placeholder="CHIP" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
  '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <label for="obs_tecnicas" class="control-label">Observaciones:</label> '+
                                '     <textarea class="form-control" id="obs_tecnicas" rows="3" placeholder="Observaciones de la digitalización"></textarea> '+
                             '   <div id="alerta_obs_tecnicas" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
                            '     <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
                            '     <strong>Error!</strong> Debe ingresar una observación'+ 
                            '   </div> '+ 
                                
                                '   </div> '+

 '                     </div> '+
  '                     </div> '+
   '                 <div class="row"> '+
 '                     <div class="col-md-2"> '+
                                '   <div class="form-group"> '+
                                '     <button type="button" class="btn btn-success" id="aprob_si" >Aprobar</button>'+
                                '   </div> '+

 '                     </div> '+
  '                     <div class="col-md-2"> '+
                                '   <div class="form-group"> '+
                                '     <button type="button" class="btn btn-danger" id="aprob_no" >No Aprobar</button>'+
                                '   </div> '+

 '                     </div> '+
  '                 </div> '+

 
 '             </div> '+
                     '<div class="row">'+
                        '<div class="col-md-12">'+
                         '<iframe src="" id="arc_visor" height="600" width="95%"></iframe>'+
                        '</div>'+                        
                    '</div>'+
 
 '<p>Profesional que aprueba la georeferenciación por la CVP</p>'+
 
  '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="nombre_tecnico" class="control-label">Usuario:</label> '+
                                '     <input type="text" class="form-control" id="nombre_tecnico" value="'+usuario_nombre+'" disabled> '+
                                '   </div> '+

 '                     </div> '+
  '                     </div> '+
    '                     </div> ';

return contenido;

  
}

function logica_aprobacion_sig(datos){
    
    var identificador=datos["identificador"];
    var id_actividad = datos["id_actividad"];
    
    var now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

   $("#iden_sig").val(identificador);
   $('#fecha_aprob').val(today);
   
   $('#aprob_no').click(function(){
       $('#obs_tecnicas').show();
       
        if($('#obs_tecnicas').val().length>0){
            set_obs_sig(identificador,"No Aprobar",id_actividad);
             }else{
                 $('#alerta_obs_tecnicas').css("display","block");
             }
   });
   
 
    $datos = {
     op: 'get_dat_aprobacion_sig',
     identificador: identificador
    };
    var resultado = 0;

    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response[0];
            console.log(resultado);
            $('#direccion_sig').val((resultado["direccion"]?resultado["direccion"]:''));
            $('#manzana_sig').val((resultado["manzana"]?resultado["manzana"]:''));
            $('#lote_sig').val((resultado["lote"]?resultado["lote"]:''));
            $('#chip_sig').val((resultado["chip"]?resultado["chip"]:''));

        },
        error: function (response) {
            alert("Ocurrió un error al almacenar la información");
        }
    });
   
 
   
   
   
   
   
   $('#aprob_si').click(function(){
       $('#obs_tecnicas').hide();
       
       set_obs_sig(identificador,"Aprobar",id_actividad);
     
   });
   
   
    var ruta = "visor.jsp?config=viewer_editor_ficha_tecnica&id=" + identificador;
    $("#arc_visor").attr("src", ruta);

    
}

function set_obs_sig(identificador,concepto,id_actividad){
    
   
    var obs_tecnicas=$('#obs_tecnicas').val().trim();    
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "aprobacion_sig",
            identificador: identificador,
            observaciones:obs_tecnicas,
            concepto:concepto,
            user:usuario_usuario
        },
        dataType: "json",
        async: false,
        success: function (response) {
           alert("Información almacenada exitosamente");

           quitar_tarea_lider(id_actividad);
           $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
             });
         
           $('#modal_form').modal('toggle');
        }, error: function (a) {
            alert("No fué alamacanar la aprobación");
        }


    });
}