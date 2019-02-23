
function aprobacion_resolucion(identificador,id_actividad,tipo_proceso,tipo_actividad,actividad_padre,asignado_a,observacion,modo){
    

        var dat1=consulta(asignado_a);
        
        var nombre_creador=dat1[0]["usuario_nombre"];
        
        var dat2=consulta(usuario_identificador);
        var elaboro=dat2[0]["usuario_nombre"]+" - "+dat2[0]["usuario_contrato"];
        
        
        if(modo===2){
        dat1=consulta_res_aprobado(identificador);
        
        nombre_creador=dat1[0]["elaboro"];
        elaboro=dat1[0]["aprobo"];
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
     
'<h1>Aprobación de Resolución</h1>'+
'<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
 '<hr /> '+
'<p>Resolución cargada al sistema por:</p>'+    
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


 function logica_aprobacion_resolucion(datos,modo,identificador){
        
        $('#show_obs').hide();
        $("input:disabled").css({"backgroundColor":"white"});
        
        if(modo===2){
            
            $('.upd_aprobacion').attr('disabled', 'disabled');
            $(".upd_aprobacion").css({"backgroundColor":"white"});
            $('.btn_hide').remove();

            var dat1=consulta_res_aprobado(identificador);
            
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

    $( "#sel_aprobacion" ).change(function() {        
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
         var estado_aprobacion='';
        if($('#sel_aprobacion').val()==="true"){                    
            aprobar_res_vereditas(identificador,creador);
            estado_aprobacion='Aprobado';
        }else{
            estado_aprobacion='Devuelto para correcciones';
        }
        
        envio_de_notificacion(identificador,1,3,7,creador,asignado_a,estado,observacion_inicial,observacion_final);       
        quitar_tarea_lider(id_actividad);

        insertar_aprobacion_resolucion(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val());
        
        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Estado de aprobación: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            
        correo(creador,asignado_a,"Aprobación del Cargue de la Resolución",msg,tipo_proceso);
        
        $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
         });
    
    });
 }
 

 function aprobacion_resolucion_reas(identificador,id_actividad,tipo_proceso,tipo_actividad,actividad_padre,asignado_a,observacion,modo){
    

        var dat1=consulta(asignado_a);
        
        var nombre_creador=dat1[0]["usuario_nombre"]+" - "+dat1[0]["usuario_contrato"];;
 
        var dat2=consulta(usuario_identificador);
        var elaboro=dat2[0]["usuario_nombre"]+" - "+dat2[0]["usuario_contrato"];
        
        
        if(modo===2){
        dat1=consulta_res_aprobado(identificador);
        
        nombre_creador=dat1[0]["elaboro"];
        elaboro=dat1[0]["aprobo"];
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
        
        
        function juridicos(){
        var opciones='';
        $datos = { op: 'juridicos_resolucion'};
        $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) { 

            for ( var i = 0; i < response.length; i++ ) {
                opciones=opciones+'<option>'+response[i].nombre+' - '+response[i]["vinculación"]+'</option>';
            }
        }
        });
        return opciones;
        }   
        
        
        

 var contenido=
     
'<h1>Aprobación de Resolución VUR</h1>'+
'<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
 '<hr /> '+
'<p>Resolución cargada al sistema por:</p>'+    
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
'<div class="row">'+
'<div class="form-group col-sm-6">'+
    '<label >Revisó - Dirección Jurídica</label>'+
    '<select class="form-control upd_aprobacion" id="aprob_juridica">'+
        juridicos()+
    '</select>'+
  '</div>'+
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


 function logica_aprobacion_resolucion_reas(datos,modo,identificador){
        
        $('#show_obs').hide();
        $("input:disabled").css({"backgroundColor":"white"});
        
        if(modo===2){
            
            $('.upd_aprobacion').attr('disabled', 'disabled');
            $(".upd_aprobacion").css({"backgroundColor":"white"});
            $('.btn_hide').remove();

            var dat1=consulta_res_aprobado(identificador);
            
            $('#obs_regreso').val((dat1[0]["obs"]?dat1[0]["obs"]:''));
            $('#aprob_juridica').val((dat1[0]["aprob_juridica"]?dat1[0]["aprob_juridica"]:''));
            
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

    $( "#sel_aprobacion" ).change(function() {        
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
        var estado_aprobacion='';
         
        if($('#sel_aprobacion').val()==="true"){                    
            estado_aprobacion='Aprobado';
        }else{
            estado_aprobacion='Devuelto para correcciones';
        }
        
        envio_de_notificacion(identificador,1,3,7,creador,asignado_a,estado,observacion_inicial,observacion_final);       
        
        quitar_tarea_lider(id_actividad);

        insertar_aprobacion_resolucion_reas(identificador,$('#nom_crea').val(),$('#aprobo_est').val(),$('#sel_aprobacion').val(),$('#obs_regreso').val(),$('#aprob_juridica').val());

        
        var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Estado de aprobación: <strong>'+estado_aprobacion+'</strong> Las observaciones son: '+$('#obs_regreso').val()+'  </p>';
            
        correo(creador,asignado_a,"Aprobación del Cargue de la Resolución",msg,tipo_proceso);
        
        $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
         });
    
    });
 }
 
 
 function insertar_aprobacion_resolucion_reas(id,elaboro,aprobo,concepto,obs,aprob_juridica){
    
    $datos={
       op: 'insertar_aprobacion_resolucion_reas',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        obs:obs,
        aprob_juridica:aprob_juridica
    };
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {                     
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });
    
}