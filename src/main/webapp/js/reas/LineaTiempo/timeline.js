
function generar_listado_historico_notificaciones(id){
    
   var text='';
$datos={
    op: 'info_proceso_notificaciones',        
    identificador:id
 };
    
$.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: $datos,
    dataType: "json",
    async: false,
    success: function (response) {
    
    
        var text1='';
        var col='bg-warning';
        
        if(response.length>0){
            for(var i=0;i<response.length;i++){
          var j=i+1;
          
          col='';
          if(response[i]["estado"]===1){
              col='bg-info';
          }
          console.log(response[i]["estado"])
        var text2=
            '    <li class="timeline-inverted ">'+
            '        <div class="timeline-badge info"><i class="far fa-comment-alt"></i></div>'+
            '        <div class="timeline-panel '+col+'">'+
            '          <div class="timeline-heading">'+
            '            <h4 class="timeline-title">Actividad: '+(response[i]["des_tarea"]?response[i]["des_tarea"]:'')+'</h4>'+
            '            <h4 class="timeline-title">Fecha: '+response[i]["fecha_creacion"]+'</h4>'+
            '            <h4 class="timeline-title">Estado: '+response[i]["estado_notificacion"]+'</h4>'+
            '          </div>'+
            '          <div class="timeline-body">'+
            '            <p><b>De: </b>'+response[i]["creador"]+'<b> Para: </b> '+response[i]["encargado"]+'</p>'+
            '            <p><b>Observación de la notificación: </b>'+(response[i]["observacion_inicial"]?response[i]["observacion_inicial"]:'Sin observacones')+'</p>'+
            '          </div>'+
            '        </div>'+
            '    </li>';
        text1=text1+text2;

       }
       text=
            '<div>Identificador del proceso:'+response[0]["id_proceso"]+' </div>'+
            '<ul class="timeline">'+
            text1+
            '</ul>';
        }else{
            text=
            '<ul class="timeline">'+          
            '    <li class="timeline-inverted ">'+
            '        <div class="timeline-badge info"><i class="far fa-comment-alt"></i></div>'+
            '        <div class="timeline-panel '+col+'">'+
            '          <div class="timeline-heading">'+
            '            <h4 class="timeline-title">Sin proceso de notificaciones</h4>'+
            '          </div>'+
            '        </div>'+
            '    </li>'+
            '</ul>';
        }
    
       
      
    },
    error: function (response) {
        alertify.error("Ocurrió un error ");
    }
    });
    
    return text;
}

