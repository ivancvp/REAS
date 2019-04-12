

var res = get_num_alert(id_user);

var num_not = res.length;

var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');



var con_head =
        '<li role="presentation" class="dropdown" id="not_update">' +
        '<a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">' +

        '<span class="fa-layers fa-fw fa-border" style="border:none">'+
         ' <i class="fas fa-envelope"></i>'+
          '<span class="fa-layers-counter" >'+num_not+'</span>'+
        '</span>'+

        '</a>' +
        '<ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">';



var con_foot = 
        ' <li>' +
        '<div class="text-center">' +
        ' <a>' +
        ' <strong>Ver Todas las Notificaciones</strong>' +
        '<i class="fa fa-angle-right"></i>' +
        '</a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>';

var not = '';

var identificador = '';

/*
function inicio(id, formulario,tipo_estudio) {
    identificador = id;

    if (formulario === 1) {
        hola(1, identificador, 3);
    }
    if (formulario === 2) {
        hola(2, identificador, 3);
    }
    if (formulario === 4) {
        hola("subir_resolucion_vereditas", identificador, 3);
    }
    if (formulario === 5) {
        hola(10, identificador, 3);
       
    }
    if (formulario === 6) {
        hola(8, identificador, 3);
       
    }
}
*/

function generar_modal(contenido){
    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');
}

function contenido_modal(cont,nombre){
    
    var contenido=
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
            '<h4 class="modal-title">Formulario de:'+nombre+'</h4>' +
            '</div>' +
            '<div class="modal-body">' +
            cont +
            '<iframe id="pdfest" style="display:none; width:100%; height: 500px"  > </ iframe>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
            '</div>';
    
    return contenido;
}


function ver_estado_estudio(identificador,tipo_estudio){
    
    var data_est = get_datos_estudio(identificador,tipo_estudio);
    var contenido=contenido_modal(gen_est_documentos(data_est),'Estudio de documentos');
    generar_modal(contenido);
    logica_est_documentos(identificador, res, data_est[0], 3);
    
}


/*function hola(formulario, index, modo,id_proceso,id_actividad) {*/

function hola(args){


var opciones = jQuery.extend({
        formulario : 1,
        index : 1,
        modo : 3,
        id_proceso : 1,
        id_actividad : 1,
        creado_por : 152
    }, args);
    
    var formulario=opciones.formulario;
    var index=opciones.index;
    var modo=opciones.modo;
    var id_proceso=opciones.id_proceso;
    var id_actividad=opciones.id_actividad;
    var user_creador=opciones.creado_por;

    /*llamada de las funciones*/
    if (formulario === 1 || formulario===25) {

        var identificador = '';
        if (modo === 3) {
            identificador = index;
        } else {
            identificador = res[index]["identificador"];

        }
        
        var sector=get_sector(identificador);
        var texto='<option selected  value="255">255</option> <option value="511">511</option>';
        if(sector.toUpperCase()==="VEREDITAS"){
            
            var tip_est=get_decreto_vereditas(identificador);
            
            texto='<option selected  value="'+tip_est+'">'+tip_est+'</option>'
        }
        
        $.confirm({
        title: 'Lista de chequeo',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        '<label>Seleccione el tipo</label>' +
        '<select class="form-control" id="tipo_lista_chequeo" >'+texto+'</select>'+
        '</div>' +
        '</form>',
    buttons: {
        formSubmit: {
            text: 'Ver',
            btnClass: 'btn-primary',
            action: function () {
                var tipo_estudio = this.$content.find('#tipo_lista_chequeo').val();
                
                if(tipo_estudio==='511'){
                    var hacer_511=elaborar_lista_chequeo_511(identificador);
                    if(hacer_511.length>0){
                        if(hacer_511[0]["procede"]==="Si"){
                        $.alert('Estudio de documentos 255 positivo, No procede!');
                        return false;
                    }
                    else if(hacer_511[0]["procede"]==="No"){
                        lista_chequeo_all(tipo_estudio);
                    }else{
                        $.alert('Estudio de documentos aún sin 255');
                        return false;
                    }
                    }else{
                        $.alert('Estudio de documentos aún sin 255');
                        return false;
                    }
                    
                    
                }else{
                    
                    lista_chequeo_all(tipo_estudio);
                }
                
                function lista_chequeo_all(tipo_estudio){                    
                        var lista_chequeo = get_datos_lista_chequeo(identificador,tipo_estudio);
                        var contenido=contenido_modal(gen_lista_chequeo(lista_chequeo),'Lista de Chequeo');
                        generar_modal(contenido);

                        if (modo !== 3) {
                            logica_lista_chequeo(identificador, lista_chequeo[0], res[index], modo);
                        } else {
                            logica_lista_chequeo(identificador, lista_chequeo[0], 0, modo);
                        }
                }

            }
        },
        cancelar: function () {
            //close
        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
});
        

    }

    if (formulario === 2) {
        
        var identificador = '';
        var creador = '';
        if (modo === 3) {
            identificador = index;
            creador = usuario_identificador;
        } else {
            identificador = res[index]["identificador"];
            creador = res[index]["creado_por"];
        }
        
        
        var tipo_estudio='255';

        if((res[index]["Sector"]).toUpperCase()==="VEREDITAS"){
            tipo_estudio=get_decreto_vereditas(identificador);
        }
        
        var data_est = get_datos_estudio(identificador,tipo_estudio);
        
       
        var adicionar=gen_est_documentos(data_est) +
                '<iframe id="pdfest" style="display:none; width:100%; height: 500px"  > </ iframe>';
        var contenido=contenido_modal(adicionar,'Estudio de documentos');
        generar_modal(contenido);
        logica_est_documentos(index, res, data_est[0], modo);
    }
    if (formulario === 3) {        
    
        var usuario_creador='';
        if(modo===3){
            identificador = index;
        }else if(modo===1){

            if (typeof res[index] === 'undefined'){
                identificador = index;
                usuario_creador=user_creador;
            }else{
                identificador = res[index]["identificador"];
                usuario_creador= res[index]["creado_por"];
            }

        }
        else{
            identificador = res[index]["identificador"];
        }
  
        
        var contenido= '';
        var resultado = 0;
        
        var sector='';


           $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: {
                    op: 'get_resolucion_existe',
                    identificador: identificador
                },
                dataType: "json",
                async: false,
                success: function (response) {
                    resultado = response[0];
                    
                        if(resultado===undefined && modo===3){
                            $.alert({
                                title: 'Mensaje.',
                                icon: 'fa fa-warning',
                                content: 'El identificador <b>'+identificador+' </b>No tiene cargada la resolución al sistema!',
                                typeAnimated: true,
                            });
                        }else{
                           
                                    $.ajax({
                                    type: "POST",
                                    url: "GestionConsultas",
                                    data: { op: 'get_sector',id:identificador},
                                    dataType: "json",
                                    async: false,
                                    success: function (response) {
                                        if(response.length> 0) {
                                            sector=(response[0].Sector?response[0].Sector:'');
                                        }

                                    }
                                    });
                                    /*
                                    if(sector==='Vereditas'){
                                        contenido=contenido_modal(gen_resolucion_vereditas(identificador),' Resolución Vereditas');
                                        generar_modal(contenido);
                                        logica_resolucion_vereditas(identificador,modo,id_proceso,id_actividad);
                                    }else{
                                        contenido=contenido_modal(gen_resolucion(identificador),' Resolución VUR');
                                        generar_modal(contenido);
                                        logica_resolucion(identificador,modo,id_proceso,id_actividad,usuario_creador);
                                    }*/
                                        contenido=contenido_modal(gen_resolucion(identificador),' Resolución VUR');
                                        generar_modal(contenido);
                                        logica_resolucion(identificador,modo,id_proceso,id_actividad,usuario_creador);
                           
                           
                           
                           
                        }
                    }
                });  
    
       
       
    }

    if (formulario === 5) {

        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];
        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        var contenido=contenido_modal(regreso(id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion),'Devolución de Solicitud');
        generar_modal(contenido);
        logica_regreso(res[index], modo);
    }


    if (formulario === 6) {

        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];

        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        var contenido=contenido_modal(aprobacion_estudio(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo),'Aprobación de Estudio de documentos');
        generar_modal(contenido);
        logica_aprobacion_estudio(res[index], modo, identificador);
    }
        if (formulario === 7) {
        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];

        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        
        var sector='';

        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: { op: 'get_sector',id:identificador},
            dataType: "json",
            async: false,
            success: function (response) {
                if(response.length> 0) {
                    sector=(response[0].Sector?response[0].Sector:'');
                }
              
            }
            });
            
            if(sector==='Vereditas'){
                var contenido=contenido_modal(aprobacion_resolucion(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo),'Aprobación de Resolución');
                generar_modal(contenido);
                logica_aprobacion_resolucion(res[index], modo, identificador);
            }else{
                var contenido=contenido_modal(aprobacion_resolucion_reas(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo),'Aprobación de Resolución');
                generar_modal(contenido);
                logica_aprobacion_resolucion_reas(res[index], modo, identificador);
            }    
            

        
    }
        if (formulario === 8) {
        var contenido=contenido_modal(gen_acta_entrega_vereditas(identificador),'Acta de entrega de Predio PAR');
        generar_modal(contenido);
        if(modo===3){
            identificador = index;            
            logica_gen_acta_entrega_vereditas(identificador,modo);
        }else{
            logica_gen_acta_entrega_vereditas(res[index],modo);
        }
    }
    if (formulario === 9) {
        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];
        
        var contenido=contenido_modal(aprobacion_acta_entrega(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo),'Aprobación de cargue de acta de ocupación');
        generar_modal(contenido);
        logica_aprobacion_acta_entrega(res[index],modo);
    }
    if (formulario === 10) {
        var contenido=contenido_modal(gen_financiera_vereditas(),'Información Financiera'); 
        generar_modal(contenido);
        if(modo===3){
            identificador = index;            
            logica_financiera_vereditas(identificador,modo);
        }else{
            logica_financiera_vereditas(res[index],modo);
        }
    } 
    if (formulario === 11) {
        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];
        
        var contenido=contenido_modal(aprobacion_financiera(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo),'Aprobación de cargue de Información financiera');   
        generar_modal(contenido);
        logica_aprobacion_financiera(res[index], modo, identificador);
    }

    if (formulario === 'reasignar') {

        var vereditas = usuario_cargo.includes("Vereditas");
        var lider_sig = usuario_cargo.includes("Lider GIS");
        var lider_financiero = usuario_cargo.includes("Lider Financiero");
        var lider_tecnico = usuario_cargo.includes("Lider Tecnico");
        var lider_social = usuario_cargo.includes("lider_social");
        
        
        
        var lista = 'reas';

        if (vereditas) {
            lista = 'vereditas';
        }
        if (lider_sig) {
            lista = 'aprobacion_cartografia';
        }
        if (lider_financiero) {
            lista = 'financiero_vereditas';
        }
        if (lider_tecnico) {
            lista = 'tecnico_vereditas';
        }
        if (lider_social) {
            lista = 'social_reas';
        }
       
        if(id_user==='348'){            
            lista = 'est_doc_caracoli';
        }
        
        //Litsado de funcionarios a los que se reasigna la tarea para elaborar estudio de documentos
        var tipo_actividad = res[index]["id_tipo_actividad"];
        if(tipo_actividad===2){
            lista = 'listado_funcionarios_elaboracion_est_documentos';
        }
        if(tipo_actividad===6){
            lista = 'listado_funcionarios_aprobacion_est_documentos';
        }

        var nom_crea = res[index]["creado_por"];
        var datos = lista_tareas_funcionarios(lista);
        var des_actividad = res[index]["desc_actividad"];
        var obs_inicial = res[index]["observacion_inicial"];
        var contenido=contenido_modal(re_asignacion(nom_crea, des_actividad, obs_inicial, datos),'Asignación de tareas');   
        generar_modal(contenido);
        logica_re_asignacion(res[index]);
    }
        
    /*Formulario de aprobación SIG de Esteban */
    if (formulario === 15) {
        var contenido=contenido_modal(aprobacion_sig(identificador),'Aprobación SIG');
        generar_modal(contenido);
        logica_aprobacion_sig(res[index]);
    }

    /*Formulario para visualizar la Ficha Técnica */
    if (formulario === 16) {
        var contenido=contenido_modal(ver_ficha_tecnica(res[index]["identificador"]),'Ficha Técnica'); 
        generar_modal(contenido);
    }
    /*Formulario para visualizar la Ficha Social */
    if (formulario === 17) {
        
        var ficha="";
        $.ajax({
         url:'js/reas/FichaSocial/FichaSocial.html',
         type:'POST',
         async:false,
         success: function(data){
           ficha=data;
          var contenido=
          '<div class="modal-header">' +
          '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
          '<h4 class="modal-title">Formulario de la Ficha Social</h4>' +
          '</div>' +
          '<div class="modal-body">' +
          ficha+
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
          '</div>';
          generar_modal(contenido);
          
         }
        });
    }
    /*Formulario para aprobar ficha social */
    if (formulario === 18) {
        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];

        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        var contenido=contenido_modal(aprobacion(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo,18),' Aprobación de Ficha Social');
        generar_modal(contenido);
        logica_aprobacion(res[index], modo, identificador,18);
        
    }
    /* Formulario de Acta de Cierre de estudio de documentos Negativo */
    if (formulario === 19) {
        
        var identificador;
        if(modo===2 || modo ===1){
           identificador = res[index]["identificador"];
           id_actividad = res[index]["id_actividad"];
        }else{
            identificador = index;
        }
        var contenido=contenido_modal(gen_acta_cierre_negativo(identificador),'Acta de cierre Estudio de documentos Negativo'); 
        generar_modal(contenido);
        logica_acta_cierre_negativo(identificador,modo,id_proceso,id_actividad);
    }
    /*Aprobación acta de cierre por estudio de documentos negativo */    
    if(formulario===20){

        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];

        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        var contenido=contenido_modal(aprobacion(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo,19),'Aprobación de Cargue de Acta de Cierre');
        generar_modal(contenido);
        logica_aprobacion(res[index], modo, identificador,19);

    }
       /* Formulario para la adenda */
    if (formulario === 21 || formulario === 26) {
        var tipo_estudio='255'
        if(formulario===26){
            tipo_estudio='511'
        }
        
        var identificador;
        if(modo===2 || modo ===1){
           identificador = res[index]["identificador"];
           id_actividad = res[index]["id_actividad"];
        }else{
            identificador = index;
        }
        
        var papa=get_usuario_tarea(22);
        
        if (typeof res[index] !== "undefined") {
           papa= res[index]["creado_por"]; 
         }

        var contenido=contenido_modal(gen_adenda(identificador,tipo_estudio),'Adenda de estudio de documentos'); 
        
        generar_modal(contenido);
        
        logica_adenda(identificador,modo,id_proceso,id_actividad,tipo_estudio,papa);
    }
   /*Aprobación del cargue de la adenda */    
    if(formulario===22 || formulario === 27){
        
        var form=21
        if(formulario===27){
            form=26
        }
        
        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];

        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        var contenido=contenido_modal(aprobacion(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo,form),'Aprobación de la Adenda');
        generar_modal(contenido);
        logica_aprobacion(res[index], modo, identificador,form);

    } 
    
   /*Aprobación de la ficha técnica */    
    if(formulario===24){

        var identificador = res[index]["identificador"];
        var asignado_a = res[index]["creado_por"];
        var id_actividad = res[index]["id_actividad"];
        var actividad_padre = res[index]["actividad_padre"];
        var tipo_actividad = res[index]["id_tipo_actividad"];
        var tipo_proceso = res[index]["id_proceso"];

        var observacion = "";
        if (modo === 3) {
            observacion = res[index]["observacion_inicial"];
        }
        var contenido=contenido_modal(aprobacion(identificador, id_actividad, tipo_proceso, tipo_actividad, actividad_padre, asignado_a, observacion, modo,24),'Aprobación de la Ficha Técnica');
        generar_modal(contenido);
        logica_aprobacion(res[index], modo, identificador,24);

    }     
    
    

};



var con_not = '';

var act = "";
var nom_crea = "";
var modo = 1;


function puede_reasignar(i) {
    var lider = '';


    if (usuario_identificador === '152' || usuario_identificador === '348' || usuario_identificador === '168' || usuario_identificador === '76' || usuario_identificador === '117' || usuario_identificador === '9' || usuario_identificador === '199' || usuario_identificador === '16' || usuario_identificador === '196') {
        var lider = '<button type="button" class="btn btn-link btn-xs" onclick="hola({formulario:\'reasignar\',index:' + i + ',modo:1})" data-toggle="tooltip" data-placement="bottom" title="Reasignar">' +
                    '<i class="fas fa-list-ul"></i>' +
                    '</button>';
    }
    return lider;
}


function notificacion(i) {

    resultado = res[i];

    id_actividad = resultado["id_actividad"];


    act_previa = resultado["actividad_padre"];
    act_nueva = resultado["id_tipo_actividad"];

    nom_crea = resultado["usuario_nombre"];


    var form1 = resultado["form1"];
    var form2 = resultado["form2"];

    if (act_nueva === 5) {
        modo = 3;
        act_previa = resultado["id_tipo_actividad"];
        act_nueva = resultado["actividad_padre"];
        form1 = resultado["form2"];
        form2 = resultado["form1"];
    } else {
        modo = 2;
    }
    
    function seguir_form(act_previa,act_nueva){
        var str='';
        
        if(act_previa===6 || act_nueva===6 || act_previa===7 || act_nueva===7 || act_previa===9 || act_nueva===9 || act_previa===11 || act_nueva===11 || act_previa===20 || act_nueva===20 || act_previa===22 || act_nueva===22 || act_previa===24 || act_nueva===24){
            
        }else{
            str= '<button type="button" class="btn btn-link btn-xs" id="reg'+i+'" onclick="hola({formulario:5,index:' + i + ',modo:1})" data-toggle="tooltip" data-placement="bottom" title="Regresar tarea">' +
            '<div style="font-size:1.5em; color:#E74C3C">'+
                '<i class="fas fa-undo-alt"></i>'+
              '</div>'+
            '</button>';
        }
        
        return str;
    }
    
    con_not =
            '<div class="contenedor">' +
            '<div class="row" id="not' + i + '" style="width: 600px; border-bottom: 0.5px solid #BEBEBE; " onmouseover="this.style.background=\'#F8F9F9\';" onmouseout="this.style.background=\'white\';">' +
            '<div class="col-md-2"><span class="image"><img src=' + (resultado["foto"] ? resultado["foto"] : "img/a0.png") + ' alt="Profile Image" style="width:50px" /></span></div>' +
            '<div class="col-md-5"><span>' +
            '<small style="color:#16A085";>'+(resultado["des2"]?resultado["des2"]:'')+'</small>'+
            '<div class="short-div"  ><b>' + resultado["usuario_nombre"] + '</b></div>' +
            '<div class="short-div" style="font-size: 90%;">Séctor: <b>' + (resultado["Sector"] ? resultado["Sector"] : '.') + '</b></div>' +
            '<div class="short-div" style="font-size: 90%;">Identificador: <b> ' + resultado["identificador"] + '</b></div>' +
            '<div class="short-div" style="font-size: 80%;">Observaciones: ' + resultado["observacion_inicial"] + '</div>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<div class="short-div" ><small style="color:#EC7063";>Fecha: </small><span class="time">' + resultado["fecha_creacion"] + '</span></div>' +
            '<div class="short-div" >' +
            '<div class="btn-toolbar">' +
            '<button type="button" class="btn btn-link btn-xs" onclick="hola({formulario:' + act_previa + ',index:' + i + ',modo:' + modo +',id_actividad:' + resultado["id_actividad"] + '})" data-toggle="tooltip" data-placement="bottom" title="' + form1 + '">' +
            '<div style="font-size:1.5em; color:#3498DB" >'+
                '<i class="far fa-file-alt"></i>'+
              '</div>'+
            '</button>' +
            '<button type="button" class="btn btn-link btn-xs" onclick="hola({formulario:' + act_nueva + ',index:' + i + ',modo:1,id_actividad:' + resultado["id_actividad"]+'})" data-toggle="tooltip" data-placement="bottom" title="' + form2 + '">' +
            '<div style="font-size:1.5em; color:#16A085">'+
                '<i class="far fa-file"></i>'+
              '</div>'+
            '</button>' +
            seguir_form(act_previa,act_nueva)+
            '<button type="button" class="btn btn-link btn-xs" data-toggle="tooltip" data-placement="bottom" title="Recordar más tarde">' +
            '<div style="font-size:1.5em; color:#F4D03F">'+
                '<i class="far fa-clock"></i>'+
              '</div>'+
            '</button>' +
            puede_reasignar(i)+
            '</div>' +
            '</div>' +
            '</div>' +
             '</div>' +
            '</div>';
    return con_not;
}

var num_act_not = [];


for (k = 0; k < num_not; k++) {
    resultado = res[k];
    num_act_not.push(resultado["desc_actividad"]);
}

var arr = num_act_not;


var uniqs = arr.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    return acc;
}, {});

function getAllIndexes(arr, val) {
    var listados_not = '';
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
        listados_not = notificacion(i) + listados_not;
    }
    return listados_not;
}

var not_head = '';
var content = '';



var cta=1;
$.each(uniqs, function (nombre_tarea, contador) {
    
  content = '<li style="width: 550px; border-bottom: 0.5px solid #BEBEBE; max-height: 800px; overflow: auto;overflow-x: hidden">' +
            '<a data-toggle="collapse" data-target="#demo' + cta + '" onmouseover="this.style.background=\'white\';" onmouseout="this.style.background=\'white\';" >' +
            '<div class="row" onmouseover="this.style.background=\'#D6EAF8\';" onmouseout="this.style.background=\'white\';"  >' +
            '<div class="col-sm-11" >' +
            '<div class="row" >' +
            '<div class="col-sm-6">' +
            ' <p> <b>' + nombre_tarea + '</b>  '+             
            '<span class="fa-stack" style="font-size:0.8em; color:#EC7063">'+
                '<span class="far fa-circle fa-stack-2x"></span>'+
               ' <strong class="fa-stack-1x">'+contador+'</strong>'+
            '</span>'+
            '</p>' +
            '</div>' +
            '<div class="col-sm-6">' +
            '<input type="text" placeholder="Busqueda" class="form-control" id="filter" name="filter" class="filter">' +
            '</div>' +            
            '</div>' +
            '</div>' +
            ' </div>' +
            '<div id="demo' + cta + '" class="collapse">' +
            getAllIndexes(arr, nombre_tarea) +
            '</div>' +
            '</a>' +
            '</li>';
    not_head = content + not_head;
    cta=cta+1;

});


$("#cl_not0").click(function () {
    alert();
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var contenido = con_head.concat(not_head);
var contenido = contenido.concat(con_foot);

$('#enca').append(contenido);


$('#filter').keyup(function () {

    var value = $(this).val().toLowerCase();
    $(".contenedor div").filter(function () {
        $(this).parent(".contenedor").toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });

});

$('.filter').on('click', function (e) {
    e.stopPropagation();
});

$(document).on('click', ' .dropdown-menu', function (e) {
    e.stopPropagation();
});
