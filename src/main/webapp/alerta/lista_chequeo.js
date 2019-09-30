
function gen_lista_chequeo(datos){
    var data = datos[0];



 var contenido=
         
 '<div id="smartwizard">'+
'    <ul>'+
'        <li><a href="#step-1">1<br /><small>Información Inicial</small></a></li>'+
'        <li><a href="#step-2">2<br /><small>Datos básicos</small></a></li>'+
'        <li><a href="#step-3">3<br /><small>Datos propietario</small></a></li>'+
'        <li><a href="#step-4">4<br /><small>Datos poseedor</small></a></li>'+
'        <li><a href="#step-5">5<br /><small>Observaciones</small></a></li>'+
'    </ul>'+
''+
'    <div>'+
'        <div id="step-1" class="">'+
' <h1>Lista de Chequeo Para Estudio de Documentos por: '+data["tipo_estudio"]+'</h1>'+
'<div id="msg"></div>'+
        ' <div class="row"> '+
        '    <div class="form-group col-sm-6">'+
        '     <label >Nombre del Beneficiario</label>'+
        '     <input type="text" class="form-control  upd_lista" value="'+(data["Nombre 1"]?data["Nombre 1"]:'')+'" disabled >'+
        '   </div>'+
        '    <div class="form-group col-sm-6">'+
        '     <label >Identificador</label>'+
        '     <input type="text" class="form-control id="id_lista_chequeo" upd_lista" value="'+(data["IDENTIFICADOR"]?data["IDENTIFICADOR"]:'')+'" disabled >'+
        '   </div>'+
        ' </div>  '+
'        </div>'+
'        <div id="step-2" class="">'+
'  <div id="1">'+
        '    <h3>Para Poseedores y/o Propietarios</h3>'+
        '    <hr /> '+
        '   <table class="table">'+
        '      <thead>'+
        '        <tr>'+
        '          <th>Nombre de Documento</th>'+
        '          <th>Revision</th>'+
        '          <th>Folio</th>'+
        '          <th>Notas</th>'+
        '        </tr>'+
        '      </thead>'+
        '      <tbody>'+
        '        <tr>'+
        '          <td class="col-sm-5">Concepto Técnico IDIGER <label class="error error1" style="display:none" id="error_1">Campo Obligatorio</label></td>'+
        '          <td class="col-sm-2"><select class="form-control  upd_lista" id="con_tec_idiger" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="con_tec_idiger_folio" class="form-control upd_lista" value="'+(data["con_tec_idiger_folio"]?data["con_tec_idiger_folio"]:'')+'" ></td>'+
        '          <td class="col-sm-2"><input type="text" id="con_tec_idiger_notas" class="form-control upd_lista" value="'+(data["con_tec_idiger_notas"]?data["con_tec_idiger_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '         <tr>'+
        '          <td class="col-sm-5">Diagnóstico técnico IDIGER o Acción Judicial <label class="error error1" style="display:none" id="error_2">Campo Obligatorio</label></td>'+
        '          <td class="col-sm-2"><select class="form-control  upd_lista" id="diag_tec_idiger" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="diag_tec_idiger_folio" class="form-control upd_lista" value="'+(data["diag_tec_idiger_folio"]?data["diag_tec_idiger_folio"]:'')+'"  ></td>'+
        '          <td class="col-sm-2"><input type="text" id="diag_tec_idiger_notas" class="form-control upd_lista" value="'+(data["diag_tec_idiger_notas"]?data["diag_tec_idiger_notas"]:'')+'"  ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Ficha Técnica de Reconocimiento <label class="error" style="display:none" id="error_3">Campo Obligatorio</label></td>'+
        '          <td class="col-sm-2"><select class="form-control  upd_lista" id="ficha_tec_rec" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text"  id="ficha_tec_rec_folio" class="form-control upd_lista" value="'+(data["ficha_tec_rec_folio"]?data["ficha_tec_rec_folio"]:'')+'" ></td>'+
        '          <td class="col-sm-2"><input type="text" id="ficha_tec_rec_notas" class="form-control upd_lista" value="'+(data["ficha_tec_rec_notas"]?data["ficha_tec_rec_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Ficha de Información Predial</td>'+
        '          <td class="col-sm-2"><select class="form-control  upd_lista" id="ficha_inf_predial" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="ficha_inf_predial_folio" class="form-control upd_lista" value="'+(data["ficha_inf_predial_folio"]?data["ficha_inf_predial_folio"]:'')+'" ></td>'+
        '          <td class="col-sm-2"><input type="text" id="ficha_inf_predial_notas" class="form-control upd_lista" value="'+(data["ficha_inf_predial_notas"]?data["ficha_inf_predial_notas"]:'')+'"></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Ficha Social CVP <label class="error" style="display:none" id="error_4">Campo Obligatorio</label></td>'+
        '          <td class="col-sm-2"><select class="form-control  upd_lista" id="ficha_social" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="ficha_social_folio" class="form-control upd_lista" value="'+(data["ficha_social_folio"]?data["ficha_social_folio"]:'')+'"  ></td>'+
        '          <td class="col-sm-2"><input type="text" id="ficha_social_notas" class="form-control upd_lista" value="'+(data["ficha_social_notas"]?data["ficha_social_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Copia de cédula titular y/o titulares del proceso <label class="error" style="display:none" id="error_5">Campo Obligatorio</label></td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="copia_cedula" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="copia_cedula_folio" class="form-control upd_lista" value="'+(data["copia_cedula_folio"]?data["copia_cedula_folio"]:'')+'"  ></td>'+
        '          <td class="col-sm-2"><input type="text" id="copia_cedula_notas" class="form-control upd_lista" value="'+(data["copia_cedula_notas"]?data["copia_cedula_notas"]:'')+'"></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Copia Registros Civiles o tarjetas de identidad de menores de edad</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="copia_registro_civil" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="copia_registro_civil_folio"  class="form-control upd_lista" value="'+(data["copia_registro_civil_folio"]?data["copia_registro_civil_folio"]:'')+'" ></td>'+
        '          <td class="col-sm-2"><input type="text" id="copia_registro_civil_notas"  class="form-control upd_lista" value="'+(data["copia_registro_civil_notas"]?data["copia_registro_civil_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Documentos Seguridad Social SISBEN (copia) o Carnet de Afiliación a Salud</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="doc_sisben" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="doc_sisben_folio" class="form-control upd_lista" value="'+(data["doc_sisben_folio"]?data["doc_sisben_folio"]:'')+'"  ></td>'+
        '          <td class="col-sm-2"><input type="text" id="doc_sisben_notas" class="form-control upd_lista" value="'+(data["doc_sisben_notas"]?data["doc_sisben_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Certificado Médico de discapacidad fisica o mental (en este caso debe existir un representante legal)</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="cert_medico_disc" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="cert_medico_disc_folio" class="form-control upd_lista" value="'+(data["cert_medico_disc_folio"]?data["cert_medico_disc_folio"]:'')+'"  ></td>'+
        '          <td class="col-sm-2"><input type="text" id="cert_medico_disc_notas" class="form-control upd_lista" value="'+(data["cert_medico_disc_notas"]?data["cert_medico_disc_notas"]:'')+'"></td>'+
        '        </tr>'+
        '        <tr>'+
        '            <td class="col-sm-5">Documento que acredite el estado civil:<br> Casado: registro civil de matrimonio <br>Unión marital de hecho: Acta de conciliación</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="doc_est_civil" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="doc_est_civil_folio" class="form-control upd_lista" value="'+(data["doc_est_civil_folio"]?data["doc_est_civil_folio"]:'')+'"  ></td>'+
        '          <td class="col-sm-2"><input type="text" id="doc_est_civil_notas" class="form-control upd_lista" value="'+(data["doc_est_civil_notas"]?data["doc_est_civil_notas"]:'')+'"  ></td>'+
        '        </tr>'+
        '       <tr>'+
        '          <td class="col-sm-5" style="    font-weight: bold;">Copia de recibos de servicios Públicos</td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Acueducto</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="cop_rec_acu" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="cop_rec_acu_folio" class="form-control upd_lista" value="'+(data["cop_rec_acu_folio"]?data["cop_rec_acu_folio"]:'')+'" ></td>'+
        '          <td class="col-sm-2"><input type="text" id="cop_rec_acu_notas" class="form-control upd_lista" value="'+(data["cop_rec_acu_notas"]?data["cop_rec_acu_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Codensa</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="cop_rec_ene" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="cop_rec_ene_folio" class="form-control upd_lista" value="'+(data["cop_rec_ene_folio"]?data["cop_rec_ene_folio"]:'')+'" ></td>'+
        '          <td class="col-sm-2"><input type="text" id="cop_rec_ene_notas" class="form-control upd_lista" value="'+(data["cop_rec_ene_notas"]?data["cop_rec_ene_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '        <tr>'+
        '          <td class="col-sm-5">Gas Natural</td>'+
        '          <td class="col-sm-2"><select class="form-control upd_lista" id="cop_rec_gas" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '          <td class="col-sm-3"><input type="text" id="cop_rec_gas_folio" class="form-control upd_lista" value="'+(data["cop_rec_gas_folio"]?data["cop_rec_gas_folio"]:'')+'"></td>'+
        '          <td class="col-sm-2"><input type="text" id="cop_rec_gas_notas" class="form-control upd_lista" value="'+(data["cop_rec_gas_notas"]?data["cop_rec_gas_notas"]:'')+'" ></td>'+
        '        </tr>'+
        '      </tbody>'+
        '    </table>'+
        '  </div>'+
'        </div>'+
'        <div id="step-3" class="">'+
       '  <div id="2">'+
        '        <h3>Para Propietarios</h3>'+
        '         <hr /> '+
        '        <table class="table">'+
        '          <thead>'+
        '            <tr>'+
        '              <th>Nombre de Documento</th>'+
        '              <th>Revision</th>'+
        '              <th>Folio</th>'+
        '              <th>Notas</th>'+
        '            </tr>'+
        '          </thead>'+
        '          <tbody>'+
        '            <tr>'+
        '              <td class="col-sm-5">Escritura Pública del predio en Alto Riesgo -PAR <label class="error error2" style="display:none" >Campo Obligatorio</label></td>'+
        '              <td class="col-sm-2"><select class="form-control upd_lista" id="esc_publica_par" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '              <td class="col-sm-3"><input type="text" id="esc_publica_par_folio" class="form-control upd_lista" value="'+(data["esc_publica_par_folio"]?data["esc_publica_par_folio"]:'')+'" ></td>'+
        '              <td class="col-sm-2"><input type="text" id="esc_publica_par_notas" class="form-control upd_lista" value="'+(data["esc_publica_par_notas"]?data["esc_publica_par_notas"]:'')+'"></td>'+
        '            </tr>'+
        '            <tr>'+
        '              <td class="col-sm-5">Certificado de Tradición y Libertad</td>'+
        '              <td class="col-sm-2"><select class="form-control upd_lista" id="cert_tradicion" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '              <td class="col-sm-3"><input type="text" id="cert_tradicion_folio" class="form-control upd_lista" value="'+(data["cert_tradicion_folio"]?data["cert_tradicion_folio"]:'')+'" ></td>'+
        '              <td class="col-sm-2"><input type="text" id="cert_tradicion_notas" class="form-control upd_lista" value="'+(data["cert_tradicion_notas"]?data["cert_tradicion_notas"]:'')+'"></td>'+
        '            </tr>'+
        '            <tr>'+
        '              <td class="col-sm-5">Recibo pago Impuesto Predial</td>'+
        '              <td class="col-sm-2"><select class="form-control upd_lista" id="imp_predial" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '              <td class="col-sm-3"><input type="text" id="imp_predial_folio" class="form-control upd_lista" value="'+(data["imp_predial_folio"]?data["imp_predial_folio"]:'')+'" ></td>'+
        '              <td class="col-sm-2"><input type="text" id="imp_predial_notas" class="form-control upd_lista" value="'+(data["imp_predial_notas"]?data["imp_predial_notas"]:'')+'" ></td>'+
        '            </tr>'+
        '            <tr>'+
        '              <td class="col-sm-5">Certificación Catastral</td>'+
        '              <td class="col-sm-2"><select class="form-control upd_lista" id="cert_catastral" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '              <td class="col-sm-3"><input type="text" id="cert_catastral_folio" class="form-control upd_lista" value="'+(data["cert_catastral_folio"]?data["cert_catastral_folio"]:'')+'"></td>'+
        '              <td class="col-sm-2"><input type="text" id="cert_catastral_notas" class="form-control upd_lista" value="'+(data["cert_catastral_notas"]?data["cert_catastral_notas"]:'')+'" ></td>'+
        '            </tr>'+
        '          </tbody>'+
        '      </table>'+
        '</div>'+
'        </div>'+
'        <div id="step-4" class="">'+
       '  <div id="3">'+
        '            <h3>Para Poseedores</h3>'+
        '           <hr /> '+
        '         <table class="table">'+
        '           <thead>'+
        '             <tr>'+
        '               <th>Nombre de Documento</th>'+
        '               <th>Revision</th>'+
        '               <th>Folio</th>'+
        '               <th>Notas</th>'+
        '             </tr>'+
        '           </thead>'+
        '           <tbody>'+
        '             <tr>'+
        '               <td class="col-sm-5">Contrato de Cesión de Derechos o Promesa de Compraventa</td>'+
        '               <td class="col-sm-2"><select class="form-control upd_lista" id="cont_cesion" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '               <td class="col-sm-3"><input type="text" id="cont_cesion_folio" class="form-control upd_lista" value="'+(data["cont_cesion_folio"]?data["cont_cesion_folio"]:'')+'" ></td>'+
        '               <td class="col-sm-2"><input type="text" id="cont_cesion_notas" class="form-control upd_lista" value="'+(data["cont_cesion_notas"]?data["cont_cesion_notas"]:'')+'"></td>'+
        '             </tr>'+
        '             <tr>'+
        '               <td class="col-sm-5">Declaraciones Extraproceso. afirmaciones administrativas ante la CVP o pruebas de habitabilidad <label class="error error2" style="display:none" >Campo Obligatorio</label></td>'+
        '               <td class="col-sm-2"><select class="form-control upd_lista" id="dec_extraproceso_afirma" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '               <td class="col-sm-3"><input type="text" id="dec_extraproceso_afirma_folio" class="form-control upd_lista" value="'+(data["dec_extraproceso_afirma_folio"]?data["dec_extraproceso_afirma_folio"]:'')+'" ></td>'+
        '               <td class="col-sm-2"><input type="text" id="dec_extraproceso_afirma_notas" class="form-control upd_lista" value="'+(data["dec_extraproceso_afirma_notas"]?data["dec_extraproceso_afirma_notas"]:'')+'"></td>'+
        '             </tr>'+
        '             <tr>'+
        '               <td class="col-sm-5">Copia cédula de testigos de afirmaciones administrativas</td>'+
        '               <td class="col-sm-2"><select class="form-control upd_lista" id="cop_ced_testigos" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '               <td class="col-sm-3"><input type="text" id="cop_ced_testigos_folio" class="form-control upd_lista" value="'+(data["cop_ced_testigos_folio"]?data["cop_ced_testigos_folio"]:'')+'" ></td>'+
        '               <td class="col-sm-2"><input type="text" id="cop_ced_testigos_notas" class="form-control upd_lista" value="'+(data["cop_ced_testigos_notas"]?data["cop_ced_testigos_notas"]:'')+'"></td>'+
        '             </tr>'+
        '             <tr>'+
        '               <td class="col-sm-5">Certificado Catastral</td>'+
        '               <td class="col-sm-2"><select class="form-control upd_lista" id="cert_catastral_posee" ><option value="false">No</option> <option value="true">Si</option> </select></td>'+
        '               <td class="col-sm-3"><input type="text" id="cert_catastral_posee_folio" class="form-control upd_lista" value="'+(data["cert_catastral_posee_folio"]?data["cert_catastral_posee_folio"]:'')+'" ></td>'+
        '               <td class="col-sm-2"><input type="text" id="cert_catastral_posee_notas" class="form-control upd_lista" value="'+(data["cert_catastral_posee_notas"]?data["cert_catastral_posee_notas"]:'')+'"></td>'+
        '             </tr>'+
        '           </tbody>  '+
        '       </table>'+
        '  </div>'+
'        </div>'+
'        <div id="step-5" class="">'+
         '<div class="form-group">'+
        '  <label >Observaciones para enviar a estudio de documentos:</label>'+
        '</div>  '+
        '    <div class="form-group">'+
            '  <textarea class="form-control upd_lista" rows="15" id="obs_lista" >'+(data["obs_lista"]?data["obs_lista"]:'')+'</textarea>'+
        '</div> '+
                '<button class="btn btn-success rem_lista" id="envio_est_doc">Enviar a Estudio Documentos</button>'+
                '<label class="error"  id="error_envio" style="display:none" >Por favor revise los campos Obligatorios!</label>'+
'        </div>'+
'    </div>'+
'</div>';


 return contenido;
}

function logica_lista_chequeo(identificador,datos,dat_not,modo){
    
   console.log(dat_not.id_tipo_actividad)
   console.log(dat_not)
   
  var vereditas=usuario_cargo.includes("Vereditas");

    var act=1;
    
    if(datos["tipo_estudio"]==='511'){
        act=25;
    }
    
  var editable=true;
  var cod_usuario=usuario_identificador;
      $datos={
       op: 'estado_lista_chequeo',        
        id:identificador,
        act:act
    };
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {           
           if(response.length>0){
               
               if(Number(cod_usuario)===Number(response[0].asignado_a)){
                   editable=true;
               }else{
                   editable=false;
               }
               if(response[0].id_tipo_actividad===5){
                    $('#msg').append('<p>La lista de chequeo fue devuelta a: <b>'+response[0].nom_asignado+'</b> </p>');
                    $('#msg').append('<p>Por el Abogado (a) <b>'+response[0].nom_creador+'</b> </p>');
               }else{
                    $('#msg').append('<p>La lista de chequeo fue realizada por: <b>'+response[0].nom_creador+'</b> </p>');
                    $('#msg').append('<p>y se encuentra en estudio de documentos por: <b>'+response[0].nom_asignado+'</b> </p>');
                    editable=false;
               }
     

           } 
        },
        error: function (response) {
            alertify.error("Ocurrió un error ");
        }
    });
  
  
  
  
          $("input:disabled").css({"backgroundColor":"white"});
          
          $('#smartwizard').smartWizard({
            selected: 0,  // Initial selected step, 0 = first step 
            keyNavigation:true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
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
					      .addClass('btn btn_hide btn-default rem_lista')
                                              .attr('id', 'save_lista')
					      .on('click', function(){ 
						save_lista_cheq(identificador,(datos["tipo_estudio"]));
					      })
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
     $('#save_lista').append('<i class="glyphicon glyphicon-floppy-disk"></i>');
    


    if(!editable){
        $('#save_lista').hide();
        $('#envio_est_doc').hide();
        modo=2;
    }
    
    var data=datos;
    
    $("#con_tec_idiger").val((data["con_tec_idiger"]?data["con_tec_idiger"]:false).toString());
        $("#diag_tec_idiger").val((data["diag_tec_idiger"]?data["diag_tec_idiger"]:false).toString());
        $("#ficha_tec_rec").val((data["ficha_tec_rec"]?data["ficha_tec_rec"]:false).toString());
        $("#ficha_inf_predial").val((data["ficha_inf_predial"]?data["ficha_inf_predial"]:false).toString());
        $("#ficha_social").val((data["ficha_social"]?data["ficha_social"]:false).toString());
        $("#copia_cedula").val((data["copia_cedula"]?data["copia_cedula"]:false).toString());
        $("#copia_registro_civil").val((data["copia_registro_civil"]?data["copia_registro_civil"]:false).toString());
        $("#doc_sisben").val((data["doc_sisben"]?data["doc_sisben"]:false).toString());
        $("#cert_medico_disc").val((data["cert_medico_disc"]?data["cert_medico_disc"]:false).toString());
        $("#doc_est_civil").val((data["doc_est_civil"]?data["doc_est_civil"]:false).toString());
        $("#cop_rec_acu").val((data["cop_rec_acu"]?data["cop_rec_acu"]:false).toString());
        $("#cop_rec_ene").val((data["cop_rec_ene"]?data["cop_rec_ene"]:false).toString());
        $("#cop_rec_gas").val((data["cop_rec_gas"]?data["cop_rec_gas"]:false).toString());
        $("#esc_publica_par").val((data["esc_publica_par"]?data["esc_publica_par"]:false).toString());
        $("#cert_tradicion").val((data["cert_tradicion"]?data["cert_tradicion"]:false).toString());
        $("#imp_predial").val((data["imp_predial"]?data["imp_predial"]:false).toString());
        $("#cert_catastral").val((data["cert_catastral"]?data["cert_catastral"]:false).toString());
        $("#cont_cesion").val((data["cont_cesion"]?data["cont_cesion"]:false).toString());
        $("#dec_extraproceso_afirma").val((data["dec_extraproceso_afirma"]?data["dec_extraproceso_afirma"]:false).toString());
        $("#cop_ced_testigos").val((data["cop_ced_testigos"]?data["cop_ced_testigos"]:false).toString());
        $("#cert_catastral_posee").val((data["cert_catastral_posee"]?data["cert_catastral_posee"]:false).toString());
    
       
        if(modo==2 || usr_funct.includes(24)){
            
            $('.upd_lista').attr('disabled', 'disabled');
            $(".upd_lista").css({"backgroundColor":"white"});
            $('.rem_lista').remove(); 
        }
        
    


    
    $('#envio_est_doc').click(function () {
        
        save_lista_cheq(identificador,datos["tipo_estudio"]);
        
        if(verifica_obligatorios()===0){
         if(dat_not===0){
            
            var responsable_proceso='199';
            
            if(vereditas){
                responsable_proceso='199';
            }
            if((data["Sector"]?data["Sector"]:'').toUpperCase()==='GAVILANES'){
                responsable_proceso='199';
            }
            if (identificador.includes("CP19")){
                responsable_proceso='351';
            }
            
            var act_padre=1;
            if(data["tipo_estudio"]==='511'){
                act_padre=25;
            }
            
            envio_de_notificacion(''+identificador+'',1,2,act_padre,''+usuario_identificador+'',''+responsable_proceso+'',1,$('#obs_lista').val(),null);
            
            var msg='<p><strong>Mensaje: </strong>En su bandeja de entrada se encuentra una notificación para el identificador <strong> '+identificador+' </strong> Para Estudio de documentos.</p><p><strong>Observaciones: </strong>'+$('#obs_lista').val()+'</p>';
            
            correo(usuario_identificador,responsable_proceso,"Lista de Chequeo",msg,"Inicio de Proceso");
            
            $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
             });
        }else{
            

            envio_de_notificacion(''+identificador+'',1,2,1,''+usuario_identificador+'',''+dat_not["creado_por"]+'',1,$('#obs_lista').val(),null);
            var id_actividad = dat_not["id_actividad"];
            quitar_tarea_lider(id_actividad);
            
            $("#not_update").remove();
            $.getScript("alerta/notificaciones.js", function(){
             });
             
        }

        $('#modal_form').modal('toggle');
        }
        

     });
    
    
    
    function verifica_obligatorios(){
    var ok=0;
    if($('#con_tec_idiger').val()==='false' || $('#con_tec_idiger_folio').val().trim()==='' ){
        if($('#diag_tec_idiger').val()==='false' || $('#diag_tec_idiger_folio').val().trim()===''){ 
            $('.error1').css('display','block');
            ok=1;
        }else{
            $('.error1').css('display','none');
        } 
    }else{
        $('.error1').css('display','none');
    }
    if($('#esc_publica_par').val()==='false' || $('#esc_publica_par_folio').val().trim()==='' ){
        if($('#dec_extraproceso_afirma').val()==='false' || $('#dec_extraproceso_afirma_folio').val().trim()===''){ 
            $('.error2').css('display','block');
            ok=1;
        }else{
            $('.error2').css('display','none');
        } 
    }
    else{
        $('.error2').css('display','none');
    }
    if($('#ficha_tec_rec').val()==='false' || $('#ficha_tec_rec_folio').val().trim()==='' ){
        $('#error_3').css('display','block');
        ok=1;
    }else{
        $('#error_3').css('display','none');
    }
    if($('#ficha_social').val()==='false' || $('#ficha_social_folio').val().trim()==='' ){
        $('#error_4').css('display','block');
        ok=1;
    }else{
        $('#error_4').css('display','none');
    }
    if($('#copia_cedula').val()==='false'  ){
        $('#error_5').css('display','block');
        ok=1;
    }else{
        $('#error_5').css('display','none');
    }
    if(ok===1){
        $('#error_envio').css('display','block');
    }else{
        $('#error_envio').css('display','none');
    }
    
    return ok;
    
    }
}


 