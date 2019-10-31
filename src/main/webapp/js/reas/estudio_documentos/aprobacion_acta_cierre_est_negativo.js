
function aprobacion(identificador,id_actividad,tipo_proceso,tipo_actividad,actividad_padre,asignado_a,observacion,modo,formulario){
    

        var dat1=consulta(asignado_a);
        
        var nombre_creador=dat1[0]["usuario_nombre"];
        
        var dat2=consulta(usuario_identificador);
        var elaboro=dat2[0]["usuario_nombre"]+" - "+dat2[0]["usuario_contrato"];
        
        
        if(formulario===19){
            if(modo===2){
                dat1=consulta_acta_cierre_aprobado(identificador);        
                nombre_creador=dat1[0]["elaboro"];
                elaboro=dat1[0]["aprobo"];
            }
        }
        if(formulario===21){
            if(modo===2){
                dat1=consulta_adenda_aprobado(identificador);   
                nombre_creador=dat1[0]["elaboro"];
                elaboro=dat1[0]["aprobo"];
            }
        }
        if(formulario===26){
            if(modo===2){
                dat1=consulta_adenda_aprobado_511(identificador);   
                nombre_creador=dat1[0]["elaboro"];
                elaboro=dat1[0]["aprobo"];
            }
        }
        if(formulario===24){
            if(modo===2){
                dat1=consulta_fichaTecnica_aprobado(identificador);   
                nombre_creador=dat1[0]["elaboro"];
                elaboro=dat1[0]["aprobo"];
            }
        }
        if(formulario===18){
            if(modo===2){
                dat1=consulta_aprobacion_ficha_social(identificador); 
                
                var creador=consulta(dat1[0]["usuario_id_elaboro"]);
                
                nombre_creador=creador[0].usuario_nombre;
                
                var aprobo=consulta(dat1[0]["usuario_id_reviso"]);
                
                elaboro=aprobo[0].usuario_nombre;

            }
        }

        
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
     
'<h1>Sistema de Aprobación</h1>'+
'<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
 '<hr /> '+
'<p>Solicitud enviada por:</p>'+    
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
 ' <textarea class="form-control upd_aprobacion" rows="5" id="obs_regreso"></textarea>'+
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


 function logica_aprobacion(datos,modo,identificador,formulario){

        $('#show_obs').hide();
        $("input:disabled").css({"backgroundColor":"white"});
        
        if(modo===2){
            
            $('.upd_aprobacion').attr('disabled', 'disabled');
            $(".upd_aprobacion").css({"backgroundColor":"white"});
            $('.btn_hide').remove();
            
            var dat1;
            
            if(formulario===19){
                dat1=consulta_acta_cierre_aprobado(identificador);
            }
            if(formulario===21){
                dat1=consulta_adenda_aprobado(identificador);
            }
            if(formulario===26){
                dat1=consulta_adenda_aprobado_511(identificador);
            }
            if(formulario===24){
                dat1=consulta_fichaTecnica_aprobado(identificador);
                dat1[0]["obs"]=datos["observacion_inicial"];
            }
            if(formulario===18){
                dat1=consulta_aprobacion_ficha_social(identificador);
                
                if(dat1[0]["estado_ficha"]===3){
                    dat1[0]["concepto"]=true;
                }
                dat1[0]["obs"]=dat1[0]["observaciones"];

            }

            $('#obs_regreso').val((dat1[0]["obs"]?dat1[0]["obs"]:''));
            
            var concepto=dat1[0]["concepto"];

            if(concepto===true){
                $('#sel_aprobacion').val("true");
            }else{
                $('#sel_aprobacion').val("false");
            }
            if($('#sel_aprobacion').val()==="true"){
                $('#show_obs').hide();
            }else{
                $('#show_obs').show();
            }
      }


        if(formulario!==18){
            $( "#sel_aprobacion" ).change(function() {        
                if($('#sel_aprobacion').val()==="true"){
                    $('#show_obs').hide();
                }else{
                    $('#show_obs').show();
                }
            });
        } 
  
     
     $('#aprob_estudio').one('click', function () {
         
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
        var estado_aprobacion='';
        

        if($('#sel_aprobacion').val()==="true"){                    
            estado_aprobacion='Aprobado';
        }else{
            estado_aprobacion='Devuelto para correcciones';
        }
        
        if(formulario===19){
            envio_de_notificacion(identificador,1,19,20,creador,asignado_a,estado,observacion_inicial,observacion_final);
            insertar_aprobacion_acta_cierre(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val());
            var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Estado de aprobación: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            correo(creador,asignado_a,"Aprobación del Cargue de Acta de Cierre Estudio de documentos negativo",msg,tipo_proceso);
        }
        
        if(formulario===21){
            envio_de_notificacion(identificador,1,21,22,creador,asignado_a,estado,observacion_inicial,observacion_final);
            insertar_aprobacion_adenda(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val(),'255');
            
            if($('#sel_aprobacion').val()==="true"){
                insertar_aprobacion_adenda_nombres(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),'255');
                insertar_aprobacion_adenda_estado(identificador,'255',3);
            }else{
                insertar_aprobacion_adenda_estado(identificador,'255',2);
            }
            
            
            var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Estado de aprobación: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            correo(creador,asignado_a,"Aprobación de la Adenda - 255",msg,tipo_proceso);
        }
        if(formulario===26){
            envio_de_notificacion(identificador,1,26,27,creador,asignado_a,estado,observacion_inicial,observacion_final);
            insertar_aprobacion_adenda(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val(),'511');
            
            if($('#sel_aprobacion').val()==="true"){
                insertar_aprobacion_adenda_nombres(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),'511');
                insertar_aprobacion_adenda_estado(identificador,'511',3);
            }else{
                insertar_aprobacion_adenda_estado(identificador,'511',2);
            }
            
            
            var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Estado de aprobación: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            correo(creador,asignado_a,"Aprobación de la Adenda - 511",msg,tipo_proceso);
        }        
        if(formulario===24){
            /*envio_de_notificacion(identificador,4,16,24,creador,asignado_a,estado,observacion_inicial,observacion_final);*/
            
            
            if($('#sel_aprobacion').val()==="true"){
                insertar_aprobacion_FichaTecnica(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val());
                set_estado_ficha_tecnica(identificador,2);
                /*envio_de_notificacion(identificador,1,15,16,creador,76,1,"Por favor revisar la cartografia","");*/
            }else{
                set_estado_ficha_tecnica(identificador,0);
                insertar_aprobacion_FichaTecnica(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val());
            }

            var msg='<p><strong>Mensaje: </strong>La ficha técnica con identificador: <strong> '+identificador+' </strong> ha sido: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            correo(creador,asignado_a,"Aprobación de Ficha Técnica",msg,tipo_proceso);
        }
        if(formulario===18){
            envio_de_notificacion(identificador,5,17,18,creador,asignado_a,estado,observacion_inicial,observacion_final);
        
                var info=consulta(creador);
                var contrato=info[0]["usuario_contrato"];
                
            if($('#sel_aprobacion').val()==="true"){                                                
                insertar_aprobacion_FichaSocial(identificador,creador,contrato,'3');
            }else{
                insertar_aprobacion_FichaSocial(identificador,creador,contrato,'4');
            }
            var msg='<p><strong>Mensaje: </strong>La ficha Social con identificador: <strong> '+identificador+' </strong> ha sido: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            correo(creador,asignado_a,"Aprobación de Ficha Social",msg,tipo_proceso);
        }
        
            quitar_tarea_lider(id_actividad);

        $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
         });
    
    });
    
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
    
    
 }