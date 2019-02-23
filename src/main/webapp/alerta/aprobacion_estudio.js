
function aprobacion_estudio(identificador,id_actividad,tipo_proceso,tipo_actividad,actividad_padre,asignado_a,observacion,modo){
    

        var dat1=consulta(asignado_a);
        
        var nombre_creador=dat1[0]["usuario_nombre"];
        
        var dat2=consulta(usuario_identificador);
        var elaboro=dat2[0]["usuario_nombre"]+" - "+dat2[0]["usuario_contrato"];
        
        
        if(modo===2){
        dat1=consulta_est_aprobado(identificador);
        
        nombre_creador=dat1[0]["elaboro"];
        elaboro=dat1[0]["aprobo"];
        }
        
        var obs=JSON.parse(obtener_observaciones_est(identificador));
        

     
        obs="1. Observaciones Información básica: "+obs[0].obs1+'\n'
            +"2. Observaciones Tradición: "+obs[1].obs2+'\n'
            +"3. Observaciones Documentación: "+obs[2].obs3+'\n'
            +"4. Observaciones sobre Recomendaciones Juridicas: "+obs[3].obs4+'\n'
            +"5. Observaciones sobre Afectaciones:"+obs[4].obs5;

        
        function consulta(id){
            $datos = { op: 'get_datos_regreso',id:id};
            $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {           
              resultado = response;          
        },
        error: function (response) {
          
            }
        });
        return resultado;
        }

 var contenido=
     
'<h1>Aprobación de Estudio de Documentos</h1>'+
'<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
 '<hr /> '+
'<p>Estudio de documentos elaborado por:</p>'+    
'<div class="form-group">'+
 '<input type="text" class="form-control" id="nom_crea" value="'+String(nombre_creador)+'" disabled>'+
'</div>'+
 '<div class="row">'+
 '<div class="form-group col-sm-6">'+
 '<label >Concepto:</label>'+
 '<select class="form-control upd_aprobacion" id="sel_aprobacion">'+
  '<option value="true">Aprobar</option>'+
  '<option value="false">Regresar por modificaciones</option>'+
'</select>'+
 '</div>'+
  '</div>'+
 '<div id="show_obs">'+ 
  '<div class="form-group">'+
  '<label >Observaciones:</label>'+
'</div>'   +
'<div class="form-group">'+
 ' <textarea class="form-control upd_aprobacion" rows="5" id="obs_regreso" disabled>'+obs+'</textarea>'+
'</div> '+
'</div>'   +
'<div class="row">'+
    '<div class="form-group col-sm-6">'+
     '<label >Aprobó:</label>'+
     '<input type="text" class="form-control" id="aprobo_est" value="'+elaboro+'" disabled>'+
   '</div>' +
'</div>'+
 '<hr />'+
 '<div class="row">'+
    '<div class="form-group col-sm-6">'+
    '<button class="btn btn-success btn_hide" id="aprob_estudio" onclick="$(\'#modal_form\').modal(\'toggle\');">Enviar</button>'+ 
    '</div>'+
  '</div>'+
'<br>';

 return contenido;
}


 function logica_aprobacion_estudio(datos,modo,identificador){
            $("input:disabled").css({"backgroundColor":"white"});
            $("textarea:disabled").css({"backgroundColor":"white"});
        if(modo===2){
            $('.upd_aprobacion').attr('disabled', 'disabled');
            $(".upd_aprobacion").css({"backgroundColor":"white"});
            $('.btn_hide').remove();

        var dat1=consulta_est_aprobado(identificador);
        var concepto=dat1[0]["concepto"];
        
        if(concepto===true){
            $('#sel_aprobacion').val("true");
        }else{
            $('#sel_aprobacion').val("false");
         }            
      }


     $('#show_obs').hide();
     $('#sel_aprobacion').change(function(){
        if($('#sel_aprobacion').val()==="true"){
            $('#show_obs').hide();
        }else{
            $('#show_obs').show();
        }
     });
     
     $('#aprob_estudio').click(function () {
         
        var identificador=datos["identificador"];
        var id_actividad = datos["id_actividad"];       
        var actividad_padre=datos["actividad_padre"];
        var tipo_actividad=datos["id_tipo_actividad"];
        var tipo_proceso=datos["id_proceso"];
        var identificador=datos["identificador"];
        var creador=datos["asignado_a"];
        var asignado_a=datos["creado_por"];
        var estado=1;
        var observacion_inicial=$('#obs_regreso').val();
        
        var observacion_final='';
        
        var msg_aprobado='';
        
        
        
        var dat_aprobacion=get_estado_aprobacion(identificador);

        
        if($('#sel_aprobacion').val()==="true"){                    
         aprobar_res(identificador,dat_aprobacion[0].tipo_estudio,creador,asignado_a);
         msg_aprobado="Estudio de documentos aprobado.";
        }else{
         msg_aprobado="Estudio de documentos no aprobado.";
        }
        
        
        envio_de_notificacion(identificador,1,2,6,creador,asignado_a,estado,observacion_inicial,observacion_final);   
        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Estado de aprobación: '+msg_aprobado+' </p>';
        
        
        correo(creador,asignado_a,"Aprobación de Estudio de documentos",msg,tipo_proceso);
        
        quitar_tarea_lider(id_actividad);
        
        
        
        var estado=1;        
        if($('#sel_aprobacion').val()==="true"){
            estado=2;
        }
        
        insertar_aprobacion_est(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),dat_aprobacion[0].tipo_estudio,dat_aprobacion[0].consecutivo,estado);
  
        $("#not_update").remove();
        $.getScript("alerta/notificaciones.js", function(){
         });
    
    });
 }