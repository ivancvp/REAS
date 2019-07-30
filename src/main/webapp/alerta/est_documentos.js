
function gen_est_documentos(datos){
 var data = datos[0];

var est_511='';

if((data["cerrado"]?data["cerrado"]:'')===true && (data["procede"]?data["procede"]:'')==='No' && datos[0].tipo_estudio!=='457' && datos[0].tipo_estudio!=='651'){
    est_511='<button type="button" class="btn btn-link" id="ver_511">511</button>';
}

 var cont1=
'<h3>Modulo de estudio de documentos</h3>'+
'<button type="button" class="btn btn-link" id="ver_255">'+datos[0].tipo_estudio+'</button>'+
est_511+
'<div id="contenedor_estudio"></div>';


var cont2=contenido_refresh(datos[0]);

var contenido=cont1+cont2;

 return contenido;
}

var cont_edit_est='';

if(usr_funct.includes(21)){
    cont_edit_est='<button type="button" class="press press-purple press-ghost" id="hab_est_docu"><i class="fas fa-pencil-alt"></i> Editar</button>';
}






function contenido_refresh(datos){
    

var data = datos;


var manzana=(data["MZ"]?data["MZ"]:'');
var lote=(data["LT"]?data["LT"]:'');

if(data.IDENTIFICADOR.includes("CP19")){
    manzana=(data["man_cat"]?data["man_cat"]:'');
    lote=(data["lot_cat"]?data["lot_cat"]:'');
}

var contenido=
'<div id="refresh_estudio">'+
'<div id="smartwizard">'+
'    <ul>'+
'        <li><a href="#step-1">1<br /><small>Información básica</small></a></li>'+
'        <li><a href="#step-2">2<br /><small>Tradición</small></a></li>'+
'        <li><a href="#step-3">3<br /><small>Documentación</small></a></li>'+
'        <li><a href="#step-4">4<br /><small>Observaciones</small></a></li>'+
'        <li><a href="#step-5">5<br /><small>Afectaciones</small></a></li>'+
'        <li><a href="#step-6">6<br /><small>Estudio en PDF escaneado</small></a></li>'+
'    </ul>'+
'    <div>'+
'        <div id="step-1" class="">'+
'   <h1>Estudio de Documentos Aportados</h1><h5> Identificador: '+data.IDENTIFICADOR+'</h5>'+
cont_edit_est+
         ' <div class="form-horizontal" > '+
        '    <div class="form-group">'+        
        '           <label class="control-label col-sm-3">Estudio de documentos por:</label>'+
        '        <div class="col-sm-2">'+
        '           <select class="form-control" id="tipo_estudio" disabled>'+
        '               <option value="">Seleccione</option>'+
        '               <option value="255">255</option>'+
        '               <option value="511">511</option>'+
        '               <option value="457">457</option>'+
        '               <option value="651">651</option>'+
        '           </select>'+
        '            <label class="error" style="display:none" id="error_tipo_estudio">Campo Obligatorio</label>'+
        '        </div>'+
        '    </div>'+
        '</div>'+ 
'    <p>Documentación aportada por:</p>'+
'   <div class="form-group">'+
'     <input type="text" class="form-control" value="'+(data["Nombre 1"]?data["Nombre 1"]:'')+'" disabled>'+
'   </div>   '+
'<div class="form-group ">'+
'  <label >Fecha:</label>'+
'  <div class="span5 sandbox-container"><input  type="text" class="form-control upd_estudio data fecha" id="fecha_est" placeholder="Fecha"></div>'+
'  <label class="error" style="display:none" id="error_fecha_est">Campo Obligatorio</label>'+
'</div>        '+
' <div class="form-group">'+
'  <label >Descripción del Inmueble:</label>'+
'</div>'+



   ' <div class="row"> '+
        '    <div class="form-group col-sm-3">'+
        '     <label >Localidad</label>'+
        '    <input type="text" class="form-control " value="'+(data["Localidad"]?data["Localidad"]:'')+'" disabled> '+
        '   </div>'+
        '    <div class="form-group col-sm-3">'+
        '     <label >Barrio</label>'+
        '     <input type="text" class="form-control " value="'+(data["Barrio"]?data["Barrio"]:'')+'" disabled>'+
        '   </div>'+
        '    <div class="form-group col-sm-6">'+
        '     <label >Dirección</label>'+
        '     <input type="text" class="form-control " value="'+(data["Dirección"]?data["Dirección"]:'')+'" disabled>'+
        '   </div>'+
    ' </div>  '+
    
     ' <div class="row"> '+
        '    <div class="form-group col-sm-3">'+
        '     <label >Manzana</label>'+
        '    <input type="text" class="form-control " value="'+manzana+'" disabled> '+
        '   </div>'+
        '    <div class="form-group col-sm-3">'+
        '     <label >Lote</label>'+
        '     <input type="text" class="form-control " value="'+lote+'" disabled>'+
        '   </div>'+
        '    <div class="form-group col-sm-6">'+
        '     <label >Concepto Técnico</label>'+
        '     <input type="text" class="form-control " value="'+(data["texto"]?data["texto"]:'')+'" disabled>'+
        '   </div>'+

    ' </div>  '+


'<div class="form-group">'+
'  <h4 >Linderos Ficha Técnica:</h4>'+
' <small class="text-muted">Los linderos que se muestran en esta sección son los que aparecen en la Ficha Técnica de Reconocimiento. (No quedan en el estudio de documentos.)</small>'+
'</div>    '+
' <div class="form-horizontal"> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Norte:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control " value="'+(data["lin_nor"]?data["lin_nor"]:'')+'" disabled>'+
'        </div> '+
'    </div>'+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Sur:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control " value="'+(data["lin_sur"]?data["lin_sur"]:'')+'" disabled>'+
'        </div> '+
'    </div> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Oriente:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control " value="'+(data["lin_ori"]?data["lin_ori"]:'')+'" disabled>'+
'        </div> '+
'    </div> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Occidente:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control " value="'+(data["lin_occ"]?data["lin_occ"]:'')+'" disabled>'+
'        </div> '+
'    </div> '+
' </div> '+
'<div class="form-group">'+
'  <h4 >Linderos Estudio de documentos:</h4>'+
' <small class="text-muted">Los linderos que se muestran en esta sección son los que aparecerán en el estudio de documentos.</small>'+
'</div>    '+
' <div class="form-horizontal"> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Norte:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control upd_estudio" id="lin_nor_est" value="'+(data["lin_nor_est"]?data["lin_nor_est"]:'')+'" >'+
'        </div> '+
'    </div> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Sur:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control upd_estudio" id="lin_sur_est" value="'+(data["lin_sur_est"]?data["lin_sur_est"]:'')+'" >'+
'        </div> '+
'    </div> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Oriente:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control upd_estudio" id="lin_ori_est" value="'+(data["lin_ori_est"]?data["lin_ori_est"]:'')+'" >'+
'        </div> '+
'    </div> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Occidente:</label>'+
'        <div class="col-sm-10">'+
'            <input type="text" class="form-control upd_estudio" id="lin_occ_est" value="'+(data["lin_occ_est"]?data["lin_occ_est"]:'')+'" >'+
'        </div> '+
'    </div> '+
'    </div> '+
'<div class="form-group div_obs" style="background-color:#96E6F2">'+
'        <label class="control-label">Observaciones sección 1:</label>'+
 ' <textarea class="form-control obs_rev" rows="5" id="obs_est_1"></textarea>'+
'</div> '+
'        </div>'+
'        <div id="step-2" class="">'+
  ' <div class="form-group">'+
'  <label >Tradición</label>'+
'</div> '+
'<div class="form-group">'+
'  <textarea class="form-control upd_estudio" rows="15" id="tradicion_est">'+(data["tradicion"]?data["tradicion"]:'')+'</textarea>'+
 ' <label class="error" style="display:none" id="error_tradicion_est">Campo Obligatorio</label>'+
'</div> '+
'<div class="form-group div_obs" style="background-color:#96E6F2">'+
'        <label class="control-label">Observaciones sección 2:</label>'+
 ' <textarea class="form-control obs_rev" rows="5" id="obs_est_2"></textarea>'+
'</div> '+
'        </div>'+
'        <div id="step-3" class="">'+
 ' <div class="form-group ">'+
'  <label >Documentación Objeto del Presente Estudio:</label>'+
'</div>  '+
' <div class="form-horizontal"> '+
'    <div class="form-group">'+
'        <label class="control-label col-sm-2">Tipo Documento:</label>'+
'        <div class="col-sm-4">'+
'            <input type="text" class="form-control upd_estudio" id="tipo_doc_est" value="'+(data["tipo_doc"]?data["tipo_doc"]:'')+'">'+
'            <small class="text-muted">Documento que demuestra la tenencia.</small>'+
'        </div>'+
'         <label class="control-label col-sm-2">Nro Documento:</label>'+
'        <div class="col-sm-4">'+
'            <input type="text" class="form-control upd_estudio" id="nro_doc_est" value="'+(data["nro_doc"]?data["nro_doc"]:'')+'">'+
'            <small class="text-muted">Número de la escritura pública, promesa de compraventa ó documento aportado.</small>'+
'        </div> '+
'    </div>'+
'    <div class="form-group">'+
'         <label class="control-label col-sm-2">Notaria:</label>'+
'        <div class="col-sm-4">'+
'            <input type="text" class="form-control upd_estudio" id="notaria_est" value="'+(data["notaria"]?data["notaria"]:'')+'">'+
'        </div> '+
'        <label class="control-label col-sm-2">Fecha Documento:</label>'+
'        <div class="col-sm-4">'+
'            <input class="form-control upd_estudio" id="fecha_doc_est" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')" value="" >'+
'        </div>'+
'    </div>'+
'    <div class="form-group">'+
'         <label class="control-label col-sm-2">Nombre Vendedor</label>'+
'        <div class="col-sm-4">'+
'            <input type="text" class="form-control upd_estudio" id="nom_vendedor_est" value="'+(data["nom_vendedor"]?data["nom_vendedor"]:'')+'">'+
'        </div> '+
'        <label class="control-label col-sm-2">Matricula Inmobiliaria</label>'+
'        <div class="col-sm-4">'+
'            <input type="text" class="form-control upd_estudio" id="matricula_inm_est" value="'+(data["matricula_inm"]?data["matricula_inm"]:'')+'">'+
'        </div>'+
'    </div>'+
'       <div class="form-group">'+
'         <label class="control-label col-sm-2">Fecha CLT:</label>'+
'        <div class="col-sm-4">'+
'            <input class="form-control upd_estudio"  id="fecha_clt_est" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')" value="" >'+
'            <small class="text-muted">Fecha del certificado de Tradición y Libertad.</small>'+
'        </div> '+
'         <label class="control-label col-sm-2">Turno CLT:</label>'+
'        <div class="col-sm-4">'+
'            <input type="text" class="form-control upd_estudio"  id="turno_clt_est" value="'+(data["turno_clt_est"]?data["turno_clt_est"]:'')+'">'+
'            <small class="text-muted">Turno del certificado de Tradición y Libertad.</small>'+
'        </div> '+
'    </div>'+
'</div>  '+
' <div class="form-group ">'+
'  <label >Documentación Aportada:</label>'+
'</div>  '+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="fotocopia_cedula_est" > <label>Fotocopias de Cédulas:</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="certificado_tra_est"  > <label>Certificados de Libertad y Tradición:</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="escritura_publica_est" > <label>Escritura Pública:</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="servicios_publicos_est" > <label>Servicios Públicos</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="promesa_compraventa_est" > <label>Promesa de Compraventa o permuta:</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="declaracion_extrajuicio_est" > <label>Declaraciones Extrajuicio</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="boletin_catastral_est" > <label>Boletín Catastral</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="cert_comunal_est" > <label>Certificado Junta de Acción Comunal</label>    '+
'            </div>'+
'            </div>'+
' <div class="form-group ">'+
'            <div class="col-sm-6 checkbox abc-checkbox abc-checkbox-primary">'+
'               <input type="checkbox" class="upd_check styled" id="certificado_nomen_est" > <label>Certificado de Nomenclatura</label>    '+
'            </div>'+
'            </div>'+

'    <div class="form-horizontal">'+

'        <div class="form-group">            '+
'            <p class=" col-sm-1">Avalúo Nro:</p>'+
'            <div class="col-sm-2">'+
'                <input type="text" class="form-control upd_estudio" id="avaluo_nro_est" value="'+(data["avaluo_nro"]?data["avaluo_nro"]:'')+'">'+
'            </div>'+
'            <p class=" col-sm-1">Fecha:</p>'+
'            <div class="col-sm-2">'+
'                <input  class="form-control upd_estudio" id="fecha_avaluo_est" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')" value="">'+
'            </div> '+
'        </div>'+
'    </div> '+
' <div class="form-group ">'+
'  <label >Servicios Públicos:</label>'+
'</div>   '+
'<table class="table">'+
'    <tbody>'+
'      <tr>'+
'        <td class="col-sm-3">Nro Cuenta Codensa</td>'+
'        <td class="col-sm-3"><input type="text" class="form-control upd_estudio" value="'+(data["cuenta_cod"]?data["cuenta_cod"]:'')+'"disabled></td>'+
'        <td class="col-sm-3">Estado de Cuenta</td>'+
'        <td class="col-sm-3"><input type="text" class="form-control upd_estudio" value="'+(data["estado_cod"]?data["estado_cod"]:'')+'"disabled ></td>'+
'      </tr>'+
'     <tr>'+
'        <td class="col-sm-3">Nro Cuenta Acueducto</td>'+
'        <td class="col-sm-3"><input type="text" class="form-control upd_estudio" value="'+(data["cuenta_acu"]?data["cuenta_acu"]:'')+'"disabled ></td>'+
'        <td class="col-sm-3">Estado de Cuenta</td>'+
'        <td class="col-sm-3"><input type="text" class="form-control upd_estudio" value="'+(data["estado_acu"]?data["estado_acu"]:'')+'"disabled ></td>'+
'      </tr>'+
'    </tbody>'+
'</table>'+
'<div class="form-group div_obs" style="background-color:#96E6F2">'+
'        <label class="control-label">Observaciones sección 3:</label>'+
 ' <textarea class="form-control obs_rev" rows="5" id="obs_est_3"></textarea>'+
'</div> '+
'        </div>'+
'        <div id="step-4" class="">'+
'<div class="form-group ">'+
        '  <label >Observaciones y Recomendaciones Juridicas:</label>'+
        '</div>  '+
        '<div class="form-group">'+
        '  <textarea class="form-control upd_estudio" rows="15" id="obs_est" >'+(data["obs_est"]?data["obs_est"]:'')+'</textarea>'+
        '</div> '+
'<div class="form-group div_obs" style="background-color:#96E6F2">'+
'        <label class="control-label">Observaciones sección 4:</label>'+
 ' <textarea class="form-control obs_rev" rows="5" id="obs_est_4"></textarea>'+
'</div> '+
'        </div>'+
'        <div id="step-5" class="">'+


        '<div class="form-group ">'+
        '  <label >Afectaciones / Gravamenes al Dominio:</label>'+
        '</div> '+
        '<table class="table">'+
        '    <tbody>'+
        '      <tr>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="afec_vivienda_est" > <label>Afectación Vivienda Familiar</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="patri_familia_est" > <label>Patrimonio de Familia</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="servidumbre_est" > <label>Servidumbre</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="afect_ambiental_est" > <label>Afectación Ambiental</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '      </tr>'+
        '       <tr>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="embargo_est" > <label>Embargo</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="sucesion_est" > <label>Sucesión</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="cond_resolutoria_est" > <label>Condición Resolutoria</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="hipoteca_est" > <label>Hipoteca</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+
        '      </tr>'+
        '      <tr>'+
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="usufructo_est" > <label>Usufructo</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+        
        '        <td class="col-sm-3">'+
        '           <div class="form-group ">'+
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled" id="cabida_linderos_est" > <label>Cabida y Linderos</label>    '+
        '            </div>'+
        '            </div>'+
        '        </td>'+   
        '      </tr>'+
        '    </tbody>'+
        '</table>'+
        ' <hr />  '+
        ' <div class="form-horizontal">'+
        '    <div class="form-group">'+
        '        <label class="control-label col-sm-3">Tipo de tenencia:</label>'+
        '        <div class="col-sm-4">'+
        '            <select class="form-control upd_estudio" id="tenencia_est"><option value="" >Seleccione</option><option value="Propietario(a)" >Propietario(a)</option> <option value="Poseedor(a)">Poseedor(a)</option><option value="Ocupante">Ocupante</option> </select>'+
        '            <label class="error" style="display:none" id="error_tenencia_est">Campo Obligatorio</label>'+
        '        </div> '+
        '    </div>'+
        '    <div class="form-group">'+
        '        <label class="control-label col-sm-3">Procede:</label>'+
        '        <div class="col-sm-4">'+
        '            <select class="form-control upd_estudio" id="procede_est"><option value="" >Seleccione</option><option value="Si" >Si</option> <option value="No">No</option> </select>'+
        '            <label class="error" style="display:none" id="error_procede_est">Campo Obligatorio</label>'+
        '    </div>'+
        ' </div> '+
        ' </div> '+
        ' <hr /> '+
        ' <div class="form-horizontal">'+
        '    <div class="form-group">'+
        '        <label class="control-label col-sm-3">Revisado por:</label>'+
        '        <div class="col-sm-6">'+
        '            <input type="text" class="form-control" id="reviso_estudio"  disabled>'+
        '        </div> '+
        '    </div>'+
        '     <div class="form-group">'+
        '        <label class="control-label col-sm-3">Aprobado por:</label>'+
        '        <div class="col-sm-6">'+
        '            <input type="text" class="form-control" id="aprobo_estudio" disabled>'+
        '        </div> '+
        '    </div>'+
        ' </div> '+
        ' <hr />  '+
        '<button type="button" class="btn btn-danger btn_hide" id="imp_est_docu">Imprimir</button>'+
        '<button class="btn btn-success btn_hide" type="button" id="envio_res"><span>Enviar a revisión y aprobación</span></button>'+ 
        '<button class="btn btn-primmary btn_hide" style="display:none" type="button" id="crear_res">Crear Resolución</button>'+  
        ' <hr />  '+
        '<div class="form-group" id="msg_pdf">'+
            ' <label class="text-warning">Para completar el estudio de documentos, por favor suba el estudio de documentos firmado en la sección 6.</label>'+
        '</div> '+
        '<div class="form-group">'+
            ' <label class="error" style="display:none" id="error_est">Faltan campos obligatorios</label>'+
        '</div> '+
'<div class="form-group div_obs" style="background-color:#96E6F2">'+
'        <label class="control-label">Observaciones sección 5:</label>'+
' <textarea class="form-control obs_rev" rows="5" id="obs_est_5"></textarea>'+
'</div> '+
'        </div>'+
'<div id="step-6" class="">'+
'<p>Por favor cargue el estudio de documentos una vez firmado, recuerde que una vez cargado y subido al sistema no puede borrarlo.</p>'+         
      '            <div class="row"> '+  
      '                   <div class="col-md-12"> '+
      '                     <div class="form-group"> '+
      '                       <input id="input-b2" name="input-b2" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+ 
        '</div>'+
'    </div>'+
'</div>'+
'</div>';        
           
   return contenido;
    
}

var guardar_extemporaneo=false;


function logica_est_documentos(index,res,datos,modo){
   
    var tipo_estudio_documentos=2102;

    if(datos.tipo_estudio==='511'){
        tipo_estudio_documentos=2202;    
    }
    
    $('#ver_255').css("border", " 2px solid #4CAF50");
    
    var tip_est=datos.tipo_estudio;
    
    $('#ver_511').click(function(){
        var estudio=$(this).text();        
        tipo_estudio_documentos=2202;
        tip_est="511";
        $( "#refresh_estudio" ).remove(); 
        $('#ver_511').css("border", " 2px solid #4CAF50");
        $('#ver_255').css("border", "none");
        var dat=get_datos_estudio(datos.identificador,estudio);
        $('#contenedor_estudio').append(contenido_refresh(dat[0]));
        reload(dat[0],estudio);
    });
    
    
    if(datos.Sector==='Vereditas'){
        tip_est='457';
    }
   
    
    $('#ver_255').click(function(){
       var estudio=$(this).text();
       tipo_estudio_documentos=2102;
       $( "#refresh_estudio" ).remove(); 
       $('#ver_255').css("border", " 2px solid #4CAF50");
       $('#ver_511').css("border", "none");
       var dat=get_datos_estudio(datos.identificador,estudio);
       $('#contenedor_estudio').append(contenido_refresh(dat[0]));
       reload(dat[0],estudio);
    });

    reload(datos,tip_est);

    
    function reload(datos,tip_est){
        $('#tipo_estudio').val(tip_est);
        
        /*Verifcación de Fechas*/
        var dia_de_hoy=moment(new Date()).format("DD/MM/YYYY");
        $('.sandbox-container input').datepicker({
            weekStart: 1,
            todayBtn: "linked",
            clearBtn: true,
            language: "es",
            forceParse: false,
            daysOfWeekHighlighted: "0",
            autoclose: true,
            todayHighlight: true,
            toggleActive: true,
            endDate:dia_de_hoy
        });   
        $("#fecha_est").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });
        $(".fecha").blur(function(){
             var newDate = $(this).val();

             if(newDate!==''){         
                if (!moment(newDate, 'DD/MM/YYYY', true).isValid()){         
                    $(this).val('');
                    alertify.error("Formato de Fecha Incorrecto");
                }else{
                    if (moment(newDate,"DD/MM/YYYY") > moment(dia_de_hoy,"DD/MM/YYYY")) {
                        $(this).val('');
                        alertify.error("Fecha posterior al dia de hoy");
                    }
                } 
             }
        });
        
        
        
        if(modo===3){
            $('#hab_est_docu').show();
        }else{
            $('#hab_est_docu').hide();
        }
        
        var vereditas=false;

        if(datos["Sector"].toUpperCase()==="VEREDITAS"){
            
        var tip_est=get_decreto_vereditas(datos.identificador);
        
        $('#tipo_estudio').val(tip_est);
        vereditas=true;
        
        }

        $("input:disabled").css({"backgroundColor":"white"});
        
        /*Modulo de pasos*/
        $('#smartwizard').smartWizard({
            selected: 0,  // Initial selected step, 0 = first step 
            keyNavigation:false, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
            autoAdjustHeight:true, // Automatically adjust content height
            cycleSteps: false, // Allows to cycle the navigation of steps
            backButtonSupport: true, // Enable the back button support
            useURLhash: true, // Enable selection of the step based on url hash
            lang: {  // Language variables
                next: 'Siguiente ', 
                previous: ' Anterior'
            },
            
            toolbarSettings: {
             toolbarExtraButtons: [
			$('<button></button>').text('Guardar ')
					      .addClass('btn  btn-default')
					      .attr('id', 'save_res')
                      ],
            },
            anchorSettings: {
                anchorClickable: true, // Enable/Disable anchor navigation
                enableAllAnchors: true, // Activates all anchors clickable all times
                markDoneStep: true, // add done css
                enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
            },            
            disabledSteps: [],    // Array Steps disabled
            errorSteps: [],    // Highlight step with errors
            theme: 'arrows',

            transitionSpeed: '400'
        });
        $(".sw-btn-prev").removeClass("btn-secondary").addClass("btn-primary");
        $('.sw-btn-prev').prepend('<i class="glyphicon glyphicon-arrow-left"></i>');
        $(".sw-btn-next").removeClass("btn-secondary").addClass("btn-success");
        $('.sw-btn-next').append('<i class="glyphicon glyphicon-arrow-right"></i>');
        $('#save_res').append('<i class="glyphicon glyphicon-floppy-disk"></i>');
     

        var identificador='';
        var creador='';
        if(modo===3 ){
            identificador=index;
            creador=usuario_identificador;
            $('#envio_res').hide();
            $('.div_obs').hide();

        }else{
            identificador=res[index]["identificador"];
            creador=res[index]["asignado_a"];
                if(res[index]["actividad_padre"]===6 ){
                    $('.obs_rev').attr('disabled', 'disabled');
                    $('.obs_rev').css({"backgroundColor":"white"});
                }
                if(res[index]["actividad_padre"]===1){
                    $('.div_obs').hide();
                }
        } 

        try {
           var obs=JSON.parse(obtener_observaciones_est(identificador));
           
            $('#obs_est_1').val(obs[0].obs1);
            $('#obs_est_2').val(obs[1].obs2);
            $('#obs_est_3').val(obs[2].obs3);
            $('#obs_est_4').val(obs[3].obs4);
            $('#obs_est_5').val(obs[4].obs5);
        }
        catch(err) {
            alertify.error("Error get de notificación");
        }
    
        if(datos.cerrado===true){
            $('.div_obs').hide();
        }

   
    
    
        //Obtener el archivo pdf
        var datos_est = datos;
        var borrar=false;
        if(datos["cerrado"]===true){
            borrar=true;
        }
        var datos1 = {};
        var url_preview1='';
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: "consulta_pdf_est_documentos",
                identificador: identificador,
                tidoc_id:tipo_estudio_documentos
            },
            dataType: "json",
            async: false,
            success: function (response) {
                if (response){
                    if (response.length > 0) {
                        for (var i = 0; i < response.length; i++) {
                                var resultado = response[i];
                                datos1["1"] = (resultado["id"] ? resultado["id"] : '');
                                datos1["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                                url_preview1='ObtenerArchivo?ID='+datos1["1"];
                        }
                    } else {
                        console.log(response);  
                    }
                }
            }, error: function (a) {
                alert("No fué posible obtener las alternativas");
            }


        });

        var contar;

        if(datos1["1"]===undefined){
             contar=false;
        }else{
             contar=true;
        }

        $("#input-b2").fileinput({
            theme: 'fa',
            language: 'es',
            initialPreview: [
                url_preview1
            ], 
            fileActionSettings: {
            'showRemove': false,
            'indicatorNew': '&nbsp;'
        },
                initialPreviewConfig: [  
                {type: "pdf", size:100,caption: datos1["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos1["1"]}
            ],
            uploadExtraData: function (previewId, index) {  // callback example        
                    var out = {
                        numFolios: 1,
                        descripcion: 'Estudio de documentos',
                        identificador: identificador,
                        tipo_documento: tipo_estudio_documentos,
                        thumbnail: ''
                    };
                    return out;
                },    
            deleteExtraData: function (previewId, index) {

                var out = {
                    op: 'delete_pdf_est_documentos',
                    identificador: identificador,
                    tidoc_id: tipo_estudio_documentos,
                };
                return out;
            } ,   
            uploadUrl: 'FileUploader',
            deleteUrl: 'GestionConsultas',
            allowedFileExtensions: ["pdf"],
            initialPreviewAsData: true,
            showUpload: true,
            overwriteInitial: false,
            browseOnZoneClick: true,
            showRemove: false,
            autoReplace:false,
            maxFileCount: 1,
            validateInitialCount: contar
        });


        $("#input-b2").on("filepredelete", function (event, key, jqXHR, data) {
            var abort = borrar;
            if(borrar){
                alertify.error("El archivo no se puede borrar");
            }else{
               alertify.success("El archivo fue borrado exitosamente."); 
            }
            return abort; // you can also send any data/object that you can receive on `filecustomerror` event
        });

        $("#input-b2").on('filepreajax', function (event, previewId, index) {
            contar=true;
            $('.fileinput-upload').hide();
            $('.btn-file').hide();     
            if(proceder){
                
            if(identificador.includes("CP19") || vereditas){
                $('#envio_res').hide();
                $('#crear_res').show();
            }else{
                $('#crear_res').hide();
                $('#envio_res').show();
            }

                $('#msg_pdf').hide();
            }
        });



        var proceder=false;
    
        if(datos_est["fecha_est"]){
            document.getElementById("fecha_est").value =moment(datos_est["fecha_est"]).format("DD/MM/YYYY");
        }
        
        document.getElementById("fecha_doc_est").value = (datos_est["fecha_doc"]?datos_est["fecha_doc"]:'');        
        document.getElementById("fecha_clt_est").value = (datos_est["fecha_clt"]?datos_est["fecha_clt"]:'');
        document.getElementById("fecha_avaluo_est").value = (datos_est["fecha_avaluo"]?datos_est["fecha_avaluo"]:'');
        //document.getElementById("tipo_estudio").value=(datos_est["tipo_estudio"]?datos_est["tipo_estudio"]:'');
        
        $('#msg_pdf').hide();

        if(datos["cerrado"]===true){
            proceder=true;
            $('.upd_estudio').attr('disabled', 'disabled');
            $(".upd_estudio").css({"backgroundColor":"white"});
            $(".upd_check").attr("disabled", true);            

            $("#reviso_estudio,#aprobo_estudio").val(datos["aprobado"]);
            
            
            
            if(vereditas){
                $('#envio_res').hide();
            }else{
                $('#envio_res span').text('Finalizar Estudio');
            }
            
            if(contar){               
                

                $('#crear_res').show();
                
                
                
                $('#msg_pdf').hide();
            }else{
                $('#envio_res,#crear_res').hide();
                $('#msg_pdf,#imp_est_docu').show();
            }
                      
            var siguiente=0;
            if(datos_est.procede==="No"){
               $('#crear_res').text("Acta de cierre"); 
               siguiente=1;
            }
            if(datos_est.procede==="Si"){
                siguiente=2;
            }
           
            if(identificador.includes("CP19") || vereditas){
                
                $('#envio_res').hide();
            }else{
                $('#crear_res').hide();
            }
            
           
            
            $('#save_res').css("display","none");
            
            
            $(".div_obs").hide();


            
            $('#crear_res').click(function () {
                if(siguiente===1){
                    $.confirm({
                        title: 'Aviso de confirmacion!',
                        icon: 'fa fa-warning',
                        content: 'Desea comenzar la edición del acta de cierre?',
                        theme: 'modern',
                        buttons: {
                            confirmar:{
                                btnClass: 'btn-primary',
                                action:function () {
                                    hola({formulario:19,index:identificador,modo:3,id_proceso:res[index]["id_proceso"],id_actividad:res[index]["id_actividad"]});
                                }            
                            },
                            cancelar:{
                                btnClass: 'btn-danger',
                                action:function () {}
                            }
                        }
                    });
                }
                
                if(siguiente===2){                    
                    $.confirm({
                        title: 'Aviso de confirmacion!',
                        icon: 'fa fa-warning',
                        content: 'Desea comenzar la edición de la resolución?',
                        theme: 'modern',
                        buttons: {
                            confirmar:{
                                btnClass: 'btn-primary',
                                action:function () {
                                   if(vereditas){
                                       hola({formulario:3,index:identificador,modo:1,id_proceso:res[index]["id_proceso"],id_actividad:res[index]["id_actividad"]});
                                   }else{
                                       hola({formulario:3,index:identificador,modo:1,id_proceso:res[index]["id_proceso"],id_actividad:res[index]["id_actividad"],creado_por:res[index]["creado_por"]});
                                   }
                                }            
                            },
                            cancelar:{
                                btnClass: 'btn-danger',
                                action:function () {
                                }
                            }
                        }
                    });
                }
            });

            $('#envio_res').click(function () {
                envio_sel_vivienda(identificador,res[index]["asignado_a"]);
                var id_actividad = res[index]["id_actividad"];
                quitar_tarea_lider(id_actividad);
                $("#not_update").remove();
                $.getScript("alerta/notificaciones.js", function(){});
                $('#modal_form').modal('toggle');
                
            });
            
            $('#imp_est_docu').on('click', function () {
                    
            var data_est=get_datos_estudio(identificador,$('#tipo_estudio').val());

            if(data_est[0]["cerrado"]===true){

            if (check_estudio() !== 0) {
                var doc = imp_estudio(data_est);
                $('#pdfest').css('display', 'inline');
                pdfMake.createPdf(doc).getDataUrl(function (outDoc) {
                    document.getElementById('pdfest').src = outDoc;
                });
            }

            }

        });
            
        }else{
            
            $('#imp_est_docu').on('click', function () {
                alertify.error("Estudio de documentos no aprobado para impresión.");
            });

            $('#envio_res').click(function () {

                if (check_estudio() === 0) {
                    alertify.error("Revise los campos obligatorios.");
                } else {
                    var tipo_proceso=1;
                    var tipo_actividad=6;
                    var actividad_padre=2;  
                    var tip='';
                        if(index!==identificador){
                            tip=res[index]["id_tipo_actividad"];  
                        }                   
                    var asignado_a='';
                        if(tip===5){
                            asignado_a=res[index]["creado_por"];
                            creador=res[index]["asignado_a"];
                        }
                        else{
                            if(vereditas){
                                asignado_a='199';
                            }else if((datos["Sector"]?datos["Sector"]:'').toUpperCase()==='GAVILANES'){ 
                                asignado_a='199';
                            }else if(identificador.includes("CP19")){
                                asignado_a='351';
                            }
                            else{
                                asignado_a='199';
                            }
                        }

                    var tip1='';
                        if(index!==identificador){
                            tip1=res[index]["actividad_padre"];  
                        } 
                        if(tip1===6){
                            asignado_a=res[index]["creado_por"];
                            creador=res[index]["asignado_a"];
                        }

                    var id_proceso=res[index]["id_proceso"];
                    var estado=1;
                    var observacion_inicial='';
                    var observacion_final='';
                    save_est(identificador,creador);
                    envio_de_notificacion(identificador,1,tipo_actividad,actividad_padre,creador,asignado_a,estado,observacion_inicial,observacion_final);
                    var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Revisión de estudio de documentos </p>';
                    correo(creador,asignado_a,"Revisión de Estudio de documentos",msg,id_proceso);
                        if(modo!==3){
                            var id_actividad = res[index]["id_actividad"];
                            quitar_tarea_lider(id_actividad);
                            $("#not_update").remove();
                            $.getScript("alerta/notificaciones.js", function(){});
                        }
                    $('#modal_form').modal('toggle');
                    }

            });
    
        }
        
        $('#save_res').click(function () {
            if(guardar_extemporaneo){
                save_est(identificador,usuario_identificador);
            }else{
             if(res[index]["id_tipo_actividad"]!==6){
                 save_est(identificador,creador);
             }
            var text =  [ 
                         { obs1:$('#obs_est_1').val().replace(/(?:\r\n|\r|\n)/g, '\\n').replace(/["']/g, "\\\" ") },
                         { obs2:$('#obs_est_2').val().replace(/(?:\r\n|\r|\n)/g, '\\n').replace(/["']/g, "\\\" ") },
                         { obs3:$('#obs_est_3').val().replace(/(?:\r\n|\r|\n)/g, '\\n').replace(/["']/g, "\\\" ") },
                         { obs4:$('#obs_est_4').val().replace(/(?:\r\n|\r|\n)/g, '\\n').replace(/["']/g, "\\\" ") },
                         { obs5:$('#obs_est_5').val().replace(/(?:\r\n|\r|\n)/g, '\\n').replace(/["']/g, "\\\" ") }
                        ];         
            insertar_observaciones_est(identificador,JSON.stringify(text),datos.tipo_estudio,datos.consecutivo,1);
            }
        });

        if(datos_est["fotocopia_cedula"]){
            $('#fotocopia_cedula_est').attr( 'checked', true );
        }
        if(datos_est["certificado_tra"]){
            $('#certificado_tra_est').attr( 'checked', true );
        }
        if(datos_est["escritura_publica"]){
            $('#escritura_publica_est').attr( 'checked', true );
        }
        if(datos_est["servicios_publicos"]){
            $('#servicios_publicos_est').attr( 'checked', true );
        }
        if(datos_est["promesa_compraventa"]){
            $('#promesa_compraventa_est').attr( 'checked', true );
        }
        if(datos_est["declaracion_extrajuicio"]){
            $('#declaracion_extrajuicio_est').attr( 'checked', true );
        }
        if(datos_est["boletin_catastral"]){
            $('#boletin_catastral_est').attr( 'checked', true );
        }
        if(datos_est["boletin_catastral"]){
            $('#boletin_catastral_est').attr( 'checked', true );
        }
        if(datos_est["cert_comunal"]){
            $('#cert_comunal_est').attr( 'checked', true );
        }
        if(datos_est["certificado_nomen"]){
            $('#certificado_nomen_est').attr( 'checked', true );
        }
        if(datos_est["afec_vivienda"]){
            $('#afec_vivienda_est').attr( 'checked', true );
        }
        if(datos_est["patri_familia"]){
            $('#patri_familia_est').attr( 'checked', true );
        }
        if(datos_est["servidumbre"]){
            $('#servidumbre_est').attr( 'checked', true );
        }
        if(datos_est["afect_ambiental"]){
            $('#afect_ambiental_est').attr( 'checked', true );
        }
        if(datos_est["embargo"]){
            $('#embargo_est').attr( 'checked', true );
        }
        if(datos_est["sucesion"]){
            $('#sucesion_est').attr( 'checked', true );
        }
        if(datos_est["cond_resolutoria"]){
            $('#cond_resolutoria_est').attr( 'checked', true );
        }
        if(datos_est["hipoteca"]){
            $('#hipoteca_est').attr( 'checked', true );
        }
        if(datos_est["usufructo"]){
            $('#usufructo_est').attr( 'checked', true );
        }
        if(datos_est["cabida_linderos"]){
            $('#cabida_linderos_est').attr( 'checked', true );
        }
        if(datos_est["procede"]==="Si"){
            $('#procede_est').val("Si");
        }
        if(datos_est["procede"]==="No"){
            $('#procede_est').val("No");
        }

        $('#tenencia_est').val(datos_est["tenencia"]?datos_est["tenencia"]:'');

        if(modo===2){
            $('.upd_estudio').attr('disabled', 'disabled'); 
            $(".upd_estudio").css({"backgroundColor":"white"});
            $(".upd_check").attr("disabled", true);
            $(".upd_check").css({"backgroundColor":"white"});
                if(res[index]["id_tipo_actividad"]===6){
                  $('.btn_hide').remove(); 
                }
        }
        if(modo===3){
            $('.upd_estudio').attr('disabled', 'disabled'); 
            $(".upd_estudio").css({"backgroundColor":"white"});
            $(".upd_check").attr("disabled", true);
            $(".upd_check").css({"backgroundColor":"white"});
            $("#save_res").hide();
            $('#crear_res').hide();
            
        }

        $('#hab_est_docu').click(function(){

        $.confirm({
            title: 'Aviso de confirmacion!',
            icon: 'fa fa-warning',
            content: 'Usted va a modificar datos en la base de datos, desea continuar!',
            theme: 'modern',
            buttons: {
                confirmar:{
                    btnClass: 'btn-primary',
                    action:function () {
                        $.alert('Confirmado!');
                        $(".upd_estudio").prop('disabled', false);
                        $(".upd_check").prop('disabled', false);
                        $("#save_res").show();
                        guardar_extemporaneo=true;
                    }            
                },
                cancelar:{
                    btnClass: 'btn-danger',
                    action:function () {
                            $.alert('Cancelado!');
                    }
                }
            }
        });
    
     });
        
    /*Función que verifica los datos obligatorios*/
    function check_estudio() {
           
        var ok = 1;

        if (document.getElementById("procede_est").value.length === 0) {
            $('#error_procede_est').css('display', 'inline');
            ok = 0;
        } else {
            $('#error_procede_est').css('display', 'none');
        }
        if (document.getElementById("fecha_est").value.length === 0) {
            $('#error_fecha_est').css('display', 'inline');
            ok = 0;
        } else {
            $('#error_fecha_est').css('display', 'none');
        }
        if (document.getElementById("tipo_estudio").value.length === 0) {
            $('#error_tipo_estudio').css('display', 'inline');
            ok = 0;
        } else {
            $('#error_tipo_estudio').css('display', 'none');
        }
        if (document.getElementById("tradicion_est").value.length === 0) {
            $('#error_tradicion_est').css('display', 'inline');
            ok = 0;
        } else {
            $('#error_tradicion_est').css('display', 'none');
        }
        if (document.getElementById("tenencia_est").value.length === 0) {
            $('#error_tenencia_est').css('display', 'inline');
            ok = 0;
        } else {
            $('#error_tenencia_est').css('display', 'none');
        }
        if (ok === 0) {
            $('#error_est').css('display', 'inline');
            alertify.error("Faltan campos Obligatorios.");
        } else {
            $('#error_est').css('display', 'none');
        }  
        

        
        return ok;
    }





}

}

 
 