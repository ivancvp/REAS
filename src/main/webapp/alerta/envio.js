function get_num_alert(id_user) {

    $datos = {
        op: 'num_alertas',
        id_user: id_user
    };
    var result = 0;

    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

            resultado = response;
            result = resultado.length;
        },
        error: function (response) {
            alert("Ocurrió un error al almacenar la información");
        }
    });
    return resultado;
}


function envio_de_notificacion(identificador,tipo_proceso,tipo_actividad,actividad_padre,creador,asignado_a,estado,observacion_inicial,observacion_final){
    
    var fecha_creacion=0;
    var fecha_cierre=null;
    
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = yyyy + '-' + mm + '-' + dd;
    fecha_creacion=today;


    
    /*
    tipo_proceso=1;
    tipo_actividad=2;
    actividad_padre=1;
    creador=152;
    asignado_a=152;
    estado=1;
    observacion_inicial='test notificaciones';
    observacion_final='hola';
    */
           $datos = {
                op: 'envio_notificaciones',
                identificador:identificador,
                tipo_proceso:tipo_proceso,
                tipo_actividad:tipo_actividad,
                actividad_padre:actividad_padre,
                creador:creador,
                asignado_a:asignado_a,
                fecha_creacion:fecha_creacion,
                fecha_cierre:fecha_cierre,
                estado:estado,
                observacion_inicial:observacion_inicial,
                observacion_final:observacion_final
            };
     
        
        $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {           
            alertify.success("Notificación enviada");            
        },
        error: function (response) {
            alertify.error("Error en la notificación");
            }
        });
    
    
}

function quitar_tarea_lider(id){
    
    $datos={
       op: 'quitar_tarea_lider',        
        id_act:id 
    }
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {           
            alertify.success("Notificación resuelta satisfactoriamente");            
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });
    
}
function insertar_pre_aprobacion_est(id,tipo_estudio,consecutivo,estado){
    
    $datos={
       op: 'insertar_pre_aprobacion_est',        
        id:id,
        estado:estado,
        tipo_estudio:tipo_estudio,
        consecutivo:consecutivo
        
    };
    
    console.log($datos);
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

function get_estado_aprobacion(id){
    
    var resultado=0;
     $datos={
       op: 'get_estado_aprobacion',        
        id:id        
    };
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) { 
            resultado=response;
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });
    
    return resultado;

}


function insertar_aprobacion_est(id,elaboro,aprobo,concepto,tipo_estudio,consecutivo,estado){
    
    $datos={
       op: 'insertar_aprobacion_est',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        tipo_estudio:tipo_estudio,
        consecutivo:consecutivo,
        estado:estado
        
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
function insertar_aprobacion_resolucion(id,elaboro,aprobo,concepto,obs){
    
    $datos={
       op: 'insertar_aprobacion_resolucion',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        obs:obs
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
function insertar_aprobacion_acta_cierre(id,elaboro,aprobo,concepto,obs){
    
    $datos={
       op: 'insertar_aprobacion_acta_cierre',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        obs:obs
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
function insertar_aprobacion_adenda(id,elaboro,aprobo,concepto,obs,tipo_estudio){
    
    $datos={
       op: 'insertar_aprobacion_adenda',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        obs:obs,
        tipo_estudio:tipo_estudio
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


function insertar_aprobacion_FichaTecnica(identificador,elaboro,aprobo,concepto,obs){
    
    $revisado = concepto;
    $usuario_que_revisa=aprobo.substr(0, aprobo.indexOf('-')); 
    $usuario_nombre_revisa=aprobo.substr(0, aprobo.indexOf('-'));
    $usuario_contrato_revisa=aprobo.split('- ').pop();


    $datos = {
        op: 'ficha_7',
        identificador: identificador,
        revisado: $revisado,
        usuario_que_revisa: $usuario_que_revisa,
        usuario_nombre_revisa:$usuario_nombre_revisa.toUpperCase(),
        usuario_contrato_revisa:$usuario_contrato_revisa.toUpperCase()
    };

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            alertify.success("Revisión Almacenada");
        },
        error: function (response) {
            alertify.success("Revisión Almacenada 1");
        }
    });


    
}



function insertar_aprobacion_adenda_nombres(id,elaboro,aprobo,tipo_estudio){
    
    $datos={
       op: 'insertar_aprobacion_adenda_nombres',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        tipo_estudio:tipo_estudio
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
function insertar_aprobacion_adenda_estado(id,tipo_estudio,estado){
    
    $datos={
        op: 'insertar_aprobacion_adenda_estado',        
        id:id,
        tipo_estudio:tipo_estudio,
        estado:estado
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

function insertar_aprobacion_financiera(id,elaboro,aprobo,concepto,obs){
    
    $datos={
       op: 'insertar_aprobacion_financiera',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        obs:obs
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

function insertar_aprobacion_acta_entrega(id,elaboro,aprobo,concepto,obs){
    
    $datos={
       op: 'insertar_aprobacion_acta_entrega',        
        id:id,
        elaboro:elaboro,
        aprobo:aprobo,
        concepto:concepto,
        obs:obs
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
function actualizar_estado_acta_entrega(id){
    
    $datos={
       op: 'actualizar_estado_acta_entrega',        
        id:id
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

function insertar_observaciones_est(id,obs,tipo_estudio,consecutivo,estado){
    
    $datos={
       op: 'insertar_observaciones_est',        
        id:id,
        obs:obs,
        tipo_estudio:tipo_estudio,
        consecutivo:consecutivo,
        estado:estado
    };
 

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) { 
            alertify.success("Observaciones Almacenadas correctamente");  
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });
    
}
function obtener_observaciones_est(id){
    
    
    var resultado_obs= '[' +
                        '{ "obs1":"" },' +
                        '{ "obs2":"" },' +
                        '{ "obs3":"" },' +
                        '{ "obs4":"" },' +
                        '{ "obs5":"" } ]';
    $datos={
       op: 'obtener_observaciones_est',        
        id:id
    };
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) { 
            
            if(response.length>0){
                if(response[0].obs){
                    resultado_obs=response[0].obs;
                }
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });
 
  return resultado_obs;  
}

function consulta_est_aprobado(id){
        $datos = { op: 'consulta_estudio_aprobado',id:id};
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
    
function consulta_financiera_aprobado(id){
        $datos = { op: 'consulta_financiera_aprobado',id:id};
        $.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: $datos,
    dataType: "json",
    async: false,
    success: function (response) {           
          resultado = response; 
          console.log(id);
          console.log(response);
    },
    error: function (response) {

        }
    });
    return resultado;
}
    
function consulta_res_aprobado(id){
        $datos = { op: 'consulta_resolucion_aprobado',id:id};
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
function consulta_acta_cierre_aprobado(id){
        $datos = { op: 'consulta_acta_cierre_aprobado',id:id};
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

function consulta_adenda_aprobado(id){
        $datos = { op: 'consulta_adenda_aprobado',id:id};
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
function consulta_adenda_aprobado_511(id){
        $datos = { op: 'consulta_adenda_aprobado_511',id:id};
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
function consulta_fichaTecnica_aprobado(id){
        $datos = { op: 'consulta_fichaTecnica_aprobado',id:id};
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



    
function consulta_adenda_aprobado_sistema(id,consecutivo){
        $datos = { op: 'consulta_adenda_aprobado_sistema',id:id,consecutivo:consecutivo};
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
    
    
function consulta_acta_entrega_aprobado(id){
        $datos = { op: 'consulta_acta_entrega_aprobado',id:id};
        $.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: $datos,
    dataType: "json",
    async: false,
    success: function (response) {           
          resultado = response; 
          console.log(id);
          console.log(response);
    },
    error: function (response) {

        }
    });
    return resultado;
    }



function devolucion_tarea(id_actividad,tipo_proceso,tipo_actividad,actividad_padre,creador,asignado_a,observacion_inicial,observacion_final){

    
    $observacion_inicial = document.getElementById("obs_regreso").value;
    var fecha_creacion = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    var fecha_cierre=null;
    
    $datos = {
        op: 'env_alerta_regreso',        
        id_act:id_actividad,
        tipo_proceso:tipo_proceso,
        tipo_actividad:tipo_actividad,
        actividad_padre:actividad_padre,
        creador:creador,
        asignado_a:asignado_a,
        fecha_creacion:fecha_creacion,
        fecha_cierre:fecha_cierre,
        observacion_inicial:observacion_inicial,
        observacion_final:observacion_final,
    
    };
    
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {           
           alertify.success("Enviado para correcciones");            
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });

    
    
    
}

function lista_tareas_funcionarios(lista){
     
     
     if(lista==='reas'){
         consulta_str='lista_tareas_funcionarios';
     }
     if(lista==='vereditas'){
         consulta_str='lista_tareas_funcionarios_vereditas';
     }
     if(lista==='aprobacion_cartografia'){
         consulta_str='lista_tareas_aprobacion_cartografia';
     }
     if(lista==='financiero_vereditas'){
         consulta_str='lista_tareas_financiera_vereditas';
     }
     if(lista==='tecnico_vereditas'){
         consulta_str='lista_tareas_tecnico_vereditas';
     }
     if(lista==='social_reas'){
         consulta_str='lista_tareas_social_reas';
     }     
     if(lista==='est_doc_caracoli'){
         consulta_str='lista_tareas_est_doc_caracoli';
     }
     

     
    var resultado=0;
     $datos = {
                op: consulta_str
            };
        
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



function envio_sel_vivienda(id,asignado_por){

        $datos = {
            op: 'env_alerta_seleccion_vivienda_cruce_cedula',
            asignado_por:asignado_por,
            identificador:id
        };
        
        $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {           
            alertify.success("Enviado para selección de vivienda");            
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
            }
        }); 

}
function get_datos_lista_chequeo(id,tipo_estudio){
    
    $datos = {
        op: 'get_dat_list_cheq',
        identificador:id,
        tipo_estudio:tipo_estudio
    };
    
    var resultado=0;
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
            alert("Ocurrió un error");
        }
    }); 
 return resultado;
}


function get_datos_estudio(id,estudio){
    
    $datos = {
        op: 'get_dat_est_doc1',
        identificador:id,
        estudio:estudio
    };


    var resultado=0;
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
            alert("Ocurrió un error");
        }
    }); 
 return resultado;
}

function elaborar_lista_chequeo_511(id){
    
    $datos = {
        op: 'elaborar_lista_chequeo_511',
        identificador:id
    };


    var resultado=0;
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
            alert("Ocurrió un error");
        }
    }); 
 return resultado;
}





function get_datos_resolucion(id){
    
    $datos = {
        op: 'get_dat_resolucion',
        identificador:id
    };

    var resultado=0;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    return resultado;   
    
}


function save_est(id,creador){
   $tipo_estudio =document.getElementById("tipo_estudio");
   
   $fecha_est =document.getElementById("fecha_est");
   $lin_nor_est=document.getElementById("lin_nor_est");
   $lin_sur_est=document.getElementById("lin_sur_est");
   $lin_ori_est=document.getElementById("lin_ori_est");
   $lin_occ_est=document.getElementById("lin_occ_est");
    $tradicion_est = document.getElementById("tradicion_est");
    $tipo_doc_est =document.getElementById("tipo_doc_est");
    $nro_doc_est =document.getElementById("nro_doc_est");
    $notaria_est =document.getElementById("notaria_est");
   $fecha_doc_est =document.getElementById("fecha_doc_est");
    $nom_vendedor_est =document.getElementById("nom_vendedor_est");
    $matricula_inm_est =document.getElementById("matricula_inm_est");
   $fecha_clt_est =document.getElementById("fecha_clt_est");
   $turno_clt_est=document.getElementById("turno_clt_est");
    $fotocopia_cedula_est =  $('#fotocopia_cedula_est').is(":checked");
    $certificado_tra_est =  $('#certificado_tra_est').is(":checked");
    $escritura_publica_est =  $('#escritura_publica_est').is(":checked");
    $servicios_publicos_est =  $('#servicios_publicos_est').is(":checked");
    $promesa_compraventa_est =  $('#promesa_compraventa_est').is(":checked");
    $declaracion_extrajuicio_est =  $('#declaracion_extrajuicio_est').is(":checked");
    $boletin_catastral_est =  $('#boletin_catastral_est').is(":checked");
    $cert_comunal_est =  $('#cert_comunal_est').is(":checked");
    $certificado_nomen_est =  $('#certificado_nomen_est').is(":checked");
    $avaluo_nro_est=document.getElementById("avaluo_nro_est");
   $fecha_avaluo_est=document.getElementById("fecha_avaluo_est");
    $obs_est = document.getElementById("obs_est");
    $afec_vivienda_est =  $('#afec_vivienda_est').is(":checked");
    $patri_familia_est =  $('#patri_familia_est').is(":checked");
    $servidumbre_est =  $('#servidumbre_est').is(":checked");
    $afect_ambiental_est =  $('#afect_ambiental_est').is(":checked");
    $embargo_est =  $('#embargo_est').is(":checked");
    $sucesion_est =  $('#sucesion_est').is(":checked");
    $cond_resolutoria_est =  $('#cond_resolutoria_est').is(":checked");
    $hipoteca_est =  $('#hipoteca_est').is(":checked");
    $usufructo_est =  $('#usufructo_est').is(":checked");
    $cabida_linderos_est =  $('#cabida_linderos_est').is(":checked");
 
    $procede_est = document.getElementById("procede_est");
    $tenencia_est = document.getElementById("tenencia_est");
    $elaboro=creador;
    
    var fecha_est=0;
    if($($fecha_est).val()===""){
        fecha_est='01-01-1111';
    }else{
        fecha_est=$($fecha_est).val();
    }
        
    $datos = {
        op: 'save_est',
        tipo_estudio:$('#tipo_estudio').val(),
       fecha_est: fecha_est,
        lin_nor_est:$(lin_nor_est).val(),
        lin_sur_est:$(lin_sur_est).val(),
        lin_ori_est:$(lin_ori_est).val(),
        lin_occ_est:$(lin_occ_est).val(),
        identificador:id,       
        tradicion_est: $($tradicion_est).val(),       
        tipo_doc_est: $($tipo_doc_est).val(),
        nro_doc_est: $($nro_doc_est).val(),
        notaria_est: $($notaria_est).val(),
       fecha_doc_est: $($fecha_doc_est).val().trim(),
        nom_vendedor_est: $($nom_vendedor_est).val(),
        matricula_inm_est: $($matricula_inm_est).val(),
       fecha_clt_est: $($fecha_clt_est).val().trim(),
       turno_clt_est: $($turno_clt_est).val().trim(),
        fotocopia_cedula_est: $fotocopia_cedula_est,
        certificado_tra_est: $certificado_tra_est,
        escritura_publica_est: $escritura_publica_est,
        servicios_publicos_est: $servicios_publicos_est,
        promesa_compraventa_est: $promesa_compraventa_est,
        declaracion_extrajuicio_est: $declaracion_extrajuicio_est,
        boletin_catastral_est: $boletin_catastral_est,
        cert_comunal_est: $cert_comunal_est,
        certificado_nomen_est: $certificado_nomen_est,
        avaluo_nro_est: $($avaluo_nro_est).val(),
       fecha_avaluo_est: $($fecha_avaluo_est).val().trim(),
        obs_est: $($obs_est).val(),
        afec_vivienda_est: $afec_vivienda_est,
        patri_familia_est: $patri_familia_est,
        servidumbre_est: $servidumbre_est,
        afect_ambiental_est: $afect_ambiental_est,
        embargo_est: $embargo_est,
        sucesion_est: $sucesion_est,
        cond_resolutoria_est: $cond_resolutoria_est,
        hipoteca_est: $hipoteca_est,
        usufructo_est: $usufructo_est,
        cabida_linderos_est: $cabida_linderos_est,
        procede_est: $($procede_est).val(),
        tenencia_est: $($tenencia_est).val(),
        elaboro:$elaboro
        
    };
    
   console.log($datos );
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            alertify.success("Datos almacenados satisfactoriamente");                 
        },
        error: function (response) {
            alertify.error("Ocurrió un error");
        }
    }); 

}

function aprobar_res(id,tipo_estudio,aprobo,realizo){
    
    $datos = {
        op: 'aprobar_resolucion',
        identificador:id,
        tipo_estudio:tipo_estudio,
        aprobo:aprobo,
        realizo:realizo
        
    };
   
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    
    
}
function aprobar_res_vereditas(id,aprobo){
    
    $datos = {
        op: 'aprobar_resolucion_vereditas',
        identificador:id,
        aprobo:aprobo
    };
   
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    
    
}

function save_res(id){
    
    $ced_exp_res = document.getElementById("ced_exp_res");
    $tipo_res = document.getElementById("tipo_res");
    $tipo_ben_res = document.getElementById("tipo_ben_res");
    $disp_pres_res = document.getElementById("disp_pres_res");
    $fecha_dis_res = document.getElementById("fecha_dis_res");
    $vur_res = document.getElementById("vur_res");
    $obs_res = document.getElementById("obs_res");
   
   
    $datos = {
        op: 'save_resolucion',
        identificador:id,
        ced_exp_res: $($ced_exp_res).val(),
        tipo_res: $($tipo_res).val(),
        tipo_ben_res: $($tipo_ben_res).val(),
        disp_pres_res: $($disp_pres_res).val(),
        fecha_dis_res: $($fecha_dis_res).val(),
        vur_res: $($vur_res).val(),
        obs_res: $($obs_res).val()
    };
   
   
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            alertify.success(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 

}




function save_lista_cheq(id,tipo_estudio){
  
    $con_tec_idiger = document.getElementById("con_tec_idiger");  
    $con_tec_idiger_folio = document.getElementById("con_tec_idiger_folio");  
    $con_tec_idiger_notas = document.getElementById("con_tec_idiger_notas");  
    $diag_tec_idiger = document.getElementById("diag_tec_idiger");  
    $diag_tec_idiger_folio = document.getElementById("diag_tec_idiger_folio");  
    $diag_tec_idiger_notas = document.getElementById("diag_tec_idiger_notas");  
    $ficha_tec_rec = document.getElementById("ficha_tec_rec");  
    $ficha_tec_rec_folio = document.getElementById("ficha_tec_rec_folio");  
    $ficha_tec_rec_notas = document.getElementById("ficha_tec_rec_notas");  
    $ficha_inf_predial = document.getElementById("ficha_inf_predial");  
    $ficha_inf_predial_folio = document.getElementById("ficha_inf_predial_folio");  
    $ficha_inf_predial_notas = document.getElementById("ficha_inf_predial_notas");  
    $ficha_social = document.getElementById("ficha_social");  
    $ficha_social_folio = document.getElementById("ficha_social_folio");  
    $ficha_social_notas = document.getElementById("ficha_social_notas");  
    $copia_cedula = document.getElementById("copia_cedula");  
    $copia_cedula_folio = document.getElementById("copia_cedula_folio");  
    $copia_cedula_notas = document.getElementById("copia_cedula_notas");  
    $copia_registro_civil = document.getElementById("copia_registro_civil");  
    $copia_registro_civil_folio = document.getElementById("copia_registro_civil_folio");  
    $copia_registro_civil_notas = document.getElementById("copia_registro_civil_notas");  
    $doc_sisben = document.getElementById("doc_sisben");  
    $doc_sisben_folio = document.getElementById("doc_sisben_folio");  
    $doc_sisben_notas = document.getElementById("doc_sisben_notas");  
    $cert_medico_disc = document.getElementById("cert_medico_disc");  
    $cert_medico_disc_folio = document.getElementById("cert_medico_disc_folio");  
    $cert_medico_disc_notas = document.getElementById("cert_medico_disc_notas");  
    $doc_est_civil = document.getElementById("doc_est_civil");  
    $doc_est_civil_folio = document.getElementById("doc_est_civil_folio");  
    $doc_est_civil_notas = document.getElementById("doc_est_civil_notas");  
    $cop_rec_acu = document.getElementById("cop_rec_acu");  
    $cop_rec_acu_folio = document.getElementById("cop_rec_acu_folio");  
    $cop_rec_acu_notas = document.getElementById("cop_rec_acu_notas");  
    $cop_rec_ene = document.getElementById("cop_rec_ene");  
    $cop_rec_ene_folio = document.getElementById("cop_rec_ene_folio");  
    $cop_rec_ene_notas = document.getElementById("cop_rec_ene_notas");  
    $cop_rec_gas = document.getElementById("cop_rec_gas");  
    $cop_rec_gas_folio = document.getElementById("cop_rec_gas_folio");  
    $cop_rec_gas_notas = document.getElementById("cop_rec_gas_notas");  
    $esc_publica_par = document.getElementById("esc_publica_par");  
    $esc_publica_par_folio = document.getElementById("esc_publica_par_folio");  
    $esc_publica_par_notas = document.getElementById("esc_publica_par_notas");  
    $cert_tradicion = document.getElementById("cert_tradicion");  
    $cert_tradicion_folio = document.getElementById("cert_tradicion_folio");  
    $cert_tradicion_notas = document.getElementById("cert_tradicion_notas");  
    $imp_predial = document.getElementById("imp_predial");  
    $imp_predial_folio = document.getElementById("imp_predial_folio");  
    $imp_predial_notas = document.getElementById("imp_predial_notas");  
    $cert_catastral = document.getElementById("cert_catastral");  
    $cert_catastral_folio = document.getElementById("cert_catastral_folio");  
    $cert_catastral_notas = document.getElementById("cert_catastral_notas");  
    $cont_cesion = document.getElementById("cont_cesion");  
    $cont_cesion_folio = document.getElementById("cont_cesion_folio");  
    $cont_cesion_notas = document.getElementById("cont_cesion_notas");  
    $dec_extraproceso_afirma = document.getElementById("dec_extraproceso_afirma");  
    $dec_extraproceso_afirma_folio = document.getElementById("dec_extraproceso_afirma_folio");  
    $dec_extraproceso_afirma_notas = document.getElementById("dec_extraproceso_afirma_notas");  
    $cop_ced_testigos = document.getElementById("cop_ced_testigos");  
    $cop_ced_testigos_folio = document.getElementById("cop_ced_testigos_folio");  
    $cop_ced_testigos_notas = document.getElementById("cop_ced_testigos_notas"); 
    
    $cert_catastral_posee = document.getElementById("cert_catastral_posee");  
    $cert_catastral_posee_folio = document.getElementById("cert_catastral_posee_folio");  
    $cert_catastral_posee_notas = document.getElementById("cert_catastral_posee_notas");  
    $obs_lista= document.getElementById("obs_lista"); 

    
    
    $datos = {
        op: 'save_lista_chequeo',
        identificador:id,
        con_tec_idiger_b: $($con_tec_idiger).val(),
        con_tec_idiger_folio: $($con_tec_idiger_folio).val(),
        con_tec_idiger_notas: $($con_tec_idiger_notas).val(),
        diag_tec_idiger_b: $($diag_tec_idiger).val(),
        diag_tec_idiger_folio: $($diag_tec_idiger_folio).val(),
        diag_tec_idiger_notas: $($diag_tec_idiger_notas).val(),
        ficha_tec_rec_b: $($ficha_tec_rec).val(),
        ficha_tec_rec_folio: $($ficha_tec_rec_folio).val(),
        ficha_tec_rec_notas: $($ficha_tec_rec_notas).val(),
        ficha_inf_predial_b: $($ficha_inf_predial).val(),
        ficha_inf_predial_folio: $($ficha_inf_predial_folio).val(),
        ficha_inf_predial_notas: $($ficha_inf_predial_notas).val(),
        ficha_social_b: $($ficha_social).val(),
        ficha_social_folio: $($ficha_social_folio).val(),
        ficha_social_notas: $($ficha_social_notas).val(),
        copia_cedula_b: $($copia_cedula).val(),
        copia_cedula_folio: $($copia_cedula_folio).val(),
        copia_cedula_notas: $($copia_cedula_notas).val(),
        copia_registro_civil_b: $($copia_registro_civil).val(),
        copia_registro_civil_folio: $($copia_registro_civil_folio).val(),
        copia_registro_civil_notas: $($copia_registro_civil_notas).val(),
        doc_sisben_b: $($doc_sisben).val(),
        doc_sisben_folio: $($doc_sisben_folio).val(),
        doc_sisben_notas: $($doc_sisben_notas).val(),
        cert_medico_disc_b: $($cert_medico_disc).val(),
        cert_medico_disc_folio: $($cert_medico_disc_folio).val(),
        cert_medico_disc_notas: $($cert_medico_disc_notas).val(),
        doc_est_civil_b: $($doc_est_civil).val(),
        doc_est_civil_folio: $($doc_est_civil_folio).val(),
        doc_est_civil_notas: $($doc_est_civil_notas).val(),
        cop_rec_acu_b: $($cop_rec_acu).val(),
        cop_rec_acu_folio: $($cop_rec_acu_folio).val(),
        cop_rec_acu_notas: $($cop_rec_acu_notas).val(),
        cop_rec_ene_b: $($cop_rec_ene).val(),
        cop_rec_ene_folio: $($cop_rec_ene_folio).val(),
        cop_rec_ene_notas: $($cop_rec_ene_notas).val(),
        cop_rec_gas_b: $($cop_rec_gas).val(),
        cop_rec_gas_folio: $($cop_rec_gas_folio).val(),
        cop_rec_gas_notas: $($cop_rec_gas_notas).val(),
        esc_publica_par_b: $($esc_publica_par).val(),
        esc_publica_par_folio: $($esc_publica_par_folio).val(),
        esc_publica_par_notas: $($esc_publica_par_notas).val(),
        cert_tradicion_b: $($cert_tradicion).val(),
        cert_tradicion_folio: $($cert_tradicion_folio).val(),
        cert_tradicion_notas: $($cert_tradicion_notas).val(),
        imp_predial_b: $($imp_predial).val(),
        imp_predial_folio: $($imp_predial_folio).val(),
        imp_predial_notas: $($imp_predial_notas).val(),
        cert_catastral_b: $($cert_catastral).val(),
        cert_catastral_folio: $($cert_catastral_folio).val(),
        cert_catastral_notas: $($cert_catastral_notas).val(),
        cont_cesion_b: $($cont_cesion).val(),
        cont_cesion_folio: $($cont_cesion_folio).val(),
        cont_cesion_notas: $($cont_cesion_notas).val(),
        dec_extraproceso_afirma_b: $($dec_extraproceso_afirma).val(),
        dec_extraproceso_afirma_folio: $($dec_extraproceso_afirma_folio).val(),
        dec_extraproceso_afirma_notas: $($dec_extraproceso_afirma_notas).val(),
        cop_ced_testigos_b: $($cop_ced_testigos).val(),
        cop_ced_testigos_folio: $($cop_ced_testigos_folio).val(),
        cop_ced_testigos_notas: $($cop_ced_testigos_notas).val(),
        cert_catastral_posee_b: $($cert_catastral_posee).val(),
        cert_catastral_posee_folio: $($cert_catastral_posee_folio).val(),
        cert_catastral_posee_notas: $($cert_catastral_posee_notas).val(),
        obs_lista:$($obs_lista).val(),
        tipo_estudio:tipo_estudio
   
    };

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
              alertify.success('Información almacenada correctamente');
                   
        },
        error: function (response) {
              alertify.error("Ocurrió un error");
        }
    }); 
    
 
    
    console.log(id); 
    
    
}

function get_datos_formatos_inmobiliaria(id){
    
      $datos = {
        op: 'get_dat_form_inmobiliaria',
        identificador:id
    };
    console.log(id);
    var resultado=0;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    return resultado; 
 
}

function get_datos_estudio_255_antiguo(id){
    
      $datos = {
        op: 'get_datos_estudio_255_antiguo',
        identificador:id
    };
    var resultado=0;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    return resultado; 
 
}
function get_datos_estudio_511_antiguo(id){
    
      $datos = {
        op: 'get_datos_estudio_511_antiguo',
        identificador:id
    };
    var resultado=0;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    return resultado; 
 
}

function get_usuario_tarea(tifunc){
    
    $datos = {
        op: 'get_usuario_tarea',
        tifunc:tifunc
    };


    var resultado=0;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response[0].usuario_id;   
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
 return resultado;
}


function set_estado_ficha_tecnica(id,estado){
    
      $datos = {
        op: 'set_estado_ficha_tecnica',
        identificador:id,
        estado:estado
    };
    var resultado=0;
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            resultado = response;
            console.log(resultado);                        
        },
        error: function (response) {
            alert("Ocurrió un error");
        }
    }); 
    return resultado; 
 
}