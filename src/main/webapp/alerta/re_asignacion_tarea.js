
function re_asignacion (nom_crea,des_actividad,obs_inicial,datos){
    
    
        var dat1=consulta(nom_crea);
        
        var nombre_creador=dat1[0]["usuario_nombre"];
        
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
        }
        });
        return resultado;
        }
    
    

 var cont1=
     
'<h1>Asignación de Tareas</h1>'+
'<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
 '<hr /> '+
'<p>Solicitud enviada por:</p>'+    
'<div class="form-group">'+
 '<input type="text" class="form-control" id="nom_crea" value="'+nombre_creador+'" disabled>'+
'</div>'+
'<div class="form-group ">'+
  '<label >Tipo de solicitud:</label>'+
  '<input type="text" class="form-control" value="'+des_actividad+'" disabled>'+
'</div>'+
'<div class="form-group">'+
 '<label >Observaciónes de la solicitud:</label>'+
 ' <textarea class="form-control" rows="3" disabled>'+obs_inicial+'</textarea>'+
'</div> '+
'<div class="form-group">'+
 '<label >Persona encargada de la solicitud</label>'+
'<div style="height: 200px; overflow-y:scroll">'+
'<table class="table" >'+
'      <tr>'+
'        <th>Nombre</th>'+
'        <th>Tareas pendientes</th>'+
'        <th>Asignar</th>'+
'      </tr>'+
'    </thead>'+
'    <tbody>';

    
    
    
    var k=datos.length;
    cont2='';
    var subcontenido='';
    for (i = 0; i <k; i++) { 
    
    sub_contenido=
'      <tr>'+
'        <td>'+datos[i]["usuario_nombre"]+'</td>'+
'        <td>'+
            '<div class="btn-toolbar">'+
                '<button type="button" class="btn btn-warning btn-xs" data-toggle="tooltip" data-placement="bottom" title="Estudio de documentos">'+
                    '<span class="glyphicon glyphicon-list-alt"></span>'+datos[i]["cta_est"]+
                '</button>'+
                '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Resoluciones">'+
                    '<span class="glyphicon glyphicon-file"></span>'+datos[i]["cta_res"]+
                '</button>'+
                '<button type="button" class="btn btn-success btn-xs" data-toggle="tooltip" data-placement="bottom" title="Aprobación Est. Documentos">'+
                    '<span class="glyphicon glyphicon-file"></span>'+datos[i]["cta_rev"]+
                '</button>'+
            '</div> '+
'       </td>'+
'        <td>'+
'           <input type="radio" name="optradio" value='+datos[i]["usuario_id"]+'>'+
'       </td>'+
'      </tr>';
    
    cont2=cont2+sub_contenido;
   
    }

var cont3=
'    </tbody>'+
'  </table>'+
'</div>'+

'</div> '+
 '<hr />'+  
'<button class="btn btn-success" id="asignar" >Asignar</button>'+ 
'<br>';

var contenido=cont1+cont2+cont3;

 return contenido;
}

function logica_re_asignacion(datos){
    
          $('#asignar').click(function () {
              
           
           var asignado_a = $('input[name=optradio]:checked').val();
           
           if(asignado_a=== 'undefined'){
               alert("Seleccione un destinatario para la tarea");
           }else{
                               
                var actividad_padre=datos["actividad_padre"];
                var tipo_actividad=datos["id_tipo_actividad"];
                var tipo_proceso=datos["id_proceso"];
                var identificador=datos["identificador"];
                var creador=datos["creado_por"];
                var estado=1;
                var observacion_inicial=datos["observacion_inicial"];
                var observacion_final='';

                var id_tipo_proceso=datos["id_tipo_proceso"];

                
                envio_de_notificacion(identificador,id_tipo_proceso,tipo_actividad,actividad_padre,creador,asignado_a,estado,observacion_inicial,observacion_final);
                
                 var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> </p><p><strong>Observaciones: </strong>'+observacion_inicial+'</p>';

                 correo(creador,asignado_a,"Asignación de Tarea por el líder del proceso",msg,tipo_proceso);
          
                var id_actividad = datos["id_actividad"];
                quitar_tarea_lider(id_actividad);
                            $("#not_update").remove();
                            $.getScript("alerta/notificaciones.js", function(){
                             });
                $('#modal_form').modal('toggle');
       
       
           }
           

                      
         });
         
         
}

 