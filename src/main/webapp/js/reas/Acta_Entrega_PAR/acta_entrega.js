function gen_acta_entrega(identificador){
    
    console.log(identificador);
    console.log(usuario_usuario);

    
    
    var contenido =
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
        '<h4 class="modal-title">Formulario de: Acta de Entrega del Predio PAR</h4>' +
        '</div>' +

         '  <div class="modal-body"> '+
         
         '<div id="smartwizard">'+
'    <ul>'+
'        <li><a href="#step-1">1<br /><small>Información básica</small></a></li>'+
'        <li><a href="#step-2">2<br /><small>Servicios Públicos</small></a></li>'+
'        <li><a href="#step-3">3<br /><small>Fotografía PAR</small></a></li>'+
'        <li><a href="#step-4">4<br /><small>PDF Acta de Entrega</small></a></li>'+
'        <li><a href="#step-5">5<br /><small>Usuario responsable</small></a></li>'+
'    </ul>'+
''+
'    <div>'+
'        <div id="step-1" class="">'+
 '<h2 style="color:#2E9AFE">Acta de entrega del predio en alto riesgo a la CVP</h2>'+
 '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                            '   <div class="form-group"> '+
                            '     <label for="sandbox-container" class="control-label">Fecha</label> '+
                            '     <div class="span5 sandbox-container"><input id="fecha_acta" type="text" class="form-control upd" placeholder="Fecha"></div>'+
     '                       <div id="alerta_fecha" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
     '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
     '                          <strong>Error!</strong> Campo Obligatorio '+ 
     '                       </div> '+ 
                            '   </div> '+
 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="identificador" class="control-label">Identificador</label> '+
                                '     <input type="text" class="form-control" id="id_acta_entrega" placeholder="identificador" disabled> '+
                                '   </div> '+
 '                     </div> '+
  '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label class="control-label">Ficha Técnica IDIGER</label> '+
                                '     <input type="text" class="form-control" id="id_ficha_idiger" placeholder="FICHA TÉCNICA IDIGER No" disabled> '+
                                '   </div> '+
 '                     </div> '+
 '                 </div> '+
  '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="ben1" class="control-label">Beneficiario Principal</label> '+
                                '     <input type="text" class="form-control" id="ben1" placeholder="Beneficiario Principal" required disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="ced1" class="control-label">Cédula</label> '+
                                '     <input type="text" class="form-control" id="ced1" placeholder="Cédula" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
   '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="ben2" class="control-label">Beneficiario Secundario</label> '+
                                '     <input type="text" class="form-control" id="ben2" placeholder="Beneficiario Principal" required disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="ced2" class="control-label">Cédula</label> '+
                                '     <input type="text" class="form-control" id="ced2" placeholder="Cédula" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
  '<p>Mayor (es) de edad y vecino (s) de esta ciudad, beneficiario (s) del programa de reasentamiento de familias, hago (cemos) entrega a la caja de la '+
 'vivienda popular del predio del cual fui (mos) reasentado (s), y que se encuentra ubicado en:</p>'+
 
    '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="localidad" class="control-label">Localidad</label> '+
                                '     <input type="text" class="form-control" id="localidad" placeholder="Localidad" required disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="upz" class="control-label">UPZ</label> '+
                                '     <input type="text" class="form-control" id="upz" placeholder="UPZ" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
    '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="barrio" class="control-label">Barrio</label> '+
                                '     <input type="text" class="form-control" id="barrio" placeholder="Barrio"  disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="chip" class="control-label">CHIP</label> '+
                                '     <input type="text" class="form-control" id="chip" placeholder="Chip" disabled> '+
                                '  <div class="alert alert-danger" style="display:none" id="alerta_chip">'+
                                '    <strong>Error!</strong> Longitud de CHIP No coincide con 11 digitos.'+
                                '  </div>'+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
    '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="dir_campo" class="control-label">Dirección Campo</label> '+
 '                                     <input type="text" class="form-control" id="dir_campo" placeholder="Ingrese la dirección" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="man_campo" class="control-label">Manzana</label> '+
                                '     <input type="number" min="0" max="1000" class="form-control" id="man_campo" placeholder="Manzana Campo" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="lot_campo" class="control-label">Lote</label> '+
                                '     <input type="number" min="0" max="1000" class="form-control" id="lot_campo" placeholder="Lote Campo" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
     '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="dir_catastral" class="control-label">Dirección Catastral</label> '+
 '                                     <input type="text" class="form-control" id="dir_catastral" placeholder="Ingrese la dirección" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="man_catastral" class="control-label">Manzana</label> '+
                                '     <input type="number" min="0" max="1000" class="form-control" id="man_catastral" placeholder="Manzana Catastral" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="lot_catastral" class="control-label">Lote</label> '+
                                '     <input type="number" min="0" max="1000" class="form-control" id="lot_catastral" placeholder="Lote Catastral" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
 
 
     '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="dir_idiger" class="control-label">Dirección IDIGER</label> '+
 '                                     <input type="text" class="form-control" id="dir_idiger" placeholder="Ingrese la dirección" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="man_idiger" class="control-label">Manzana</label> '+
                                '     <input type="number" min="0" max="1000" class="form-control" id="man_idiger" placeholder="Manzana IDIGER" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-3"> '+
                                '   <div class="form-group"> '+
                                '     <label for="lot_idiger" class="control-label">Lote</label> '+
                                '     <input type="number" min="0" max="1000" class="form-control" id="lot_idiger" placeholder="Lote IDIGER" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
  
 
     '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="coord_x" class="control-label">Coordenada X</label> '+
                                '     <input type="text" class="form-control coord" id="coord_x" placeholder="Coordenada X" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="coord_y" class="control-label">Coordenada Y</label> '+
                                '     <input type="text" class="form-control coord" id="coord_y" placeholder="Coordenada Y" disabled> '+
                                '   </div> '+

 '                     </div> '+
 '                 </div> '+
'        </div>'+
'        <div id="step-2" class="">'+
'<p>Esta entrega es realizada a la caja de la vivienda popular y obra como soporte para efectura la adecuación del predio por parte del IDIGER y demás gestiones con las'+
 'entidades del Distrito, en el marco de los Decretos 511 de 2010 y 255 de 2013.</p>'+
 
 '<h3>Estado en el que la CVP recibe el predio:</h3>'+
 
 '<div class="text-center">'+
 '<p>PAZ Y SALVOS DE SERVICIOS PÚBLICOS</p>'+
 '</div> '+
 ' <table class="table"> '+
 '   <thead> '+
 '     <tr> '+
 '       <th scope="col">Concepto</th> '+
 '       <th scope="col">Si /No</th> '+
 '       <th scope="col">Fecha</th> '+
 '     </tr> '+
 '   </thead> '+
 '   <tbody> '+
 '     <tr> '+
 '       <th scope="row">Energía Electrica</th> '+
 '       <td><select class="form-control" id="ene"><option value="">Seleccione</option><option value="Si">Si</option><option value="No">No</option></select></td> '+
 '       <td><div class="span5 sandbox-container"><input id="ene_fecha" type="text" class="form-control" placeholder="Fecha"></div></td> '+
 '     </tr> '+
 '     <tr> '+
 '       <th scope="row">Acueducto</th> '+
 '       <td><select class="form-control" id="acu"><option value="">Seleccione</option><option value="Si">Si</option><option value="No">No</option></select></td> '+
 '       <td><div class="span5 sandbox-container"><input id="acu_fecha" type="text" class="form-control" placeholder="Fecha"></div></td></td> '+
 '     </tr> '+
 '     <tr> '+
 '       <th scope="row">Alcantarillado</th> '+
 '       <td><select class="form-control" id="alc"><option value="">Seleccione</option><option value="Si">Si</option><option value="No">No</option></select></td> '+
 '       <td><div class="span5 sandbox-container"><input id="alc_fecha" type="text" class="form-control" placeholder="Fecha"></div></td></td> '+
 '     </tr> '+
  '     <tr> '+
 '       <th scope="row">Gas Natural</th> '+
 '       <td><select class="form-control" id="gas"><option value="">Seleccione</option><option value="Si">Si</option><option value="No">No</option></select></td> '+
 '       <td><div class="span5 sandbox-container"><input id="gas_fecha" type="text" class="form-control" placeholder="Fecha"></div></td></td> '+
 '     </tr> '+
 '   </tbody> '+
 ' </table> '+


 '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <label for="carac_tecnicas" class="control-label">Caracteristicas Técnicas</label> '+
                                '     <select class="form-control upd" id="carac_tecnicas"><option value="">Seleccione</option><option value="Construcción Completa">Construcción Completa</option><option value="Predio Demolido Totalmente">Predio Demolido Totalmente</option><option value="Predio Demolido Parcialmente">Predio Demolido Parcialmente</option></select> '+
     '                       <div id="alerta_carac_tecnicas" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
     '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
     '                          <strong>Error!</strong> Campo Obligatorio '+ 
     '                       </div> '+ 
                                '   </div> '+

 '                     </div> '+
 
 
 '             </div> '+
 
  '                 <div class="row"> '+
 '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <label for="obs_acta" class="control-label">Observaciones:</label> '+
                                '     <textarea class="form-control" id="obs_acta" rows="3" placeholder="Observaciones sobre las características técnicas"></textarea> '+
                                '   </div> '+

 '                     </div> '+
    '                     <div class="col-md-12"> '+
                                '   <div class="form-group"> '+
                                '     <button type="button" class="btn btn-danger" id="gen_pdf">Generar PDF <i class="fa fa-file-pdf-o"></i></button>'+
                                '            <label class="error" style="display:none" id="error_msg">Por favor revise los campos obligatorios!</label>'+
                                '   </div> '+
 '                       </div> '+
 
 
 '             </div> '+
'        </div>'+
'        <div id="step-3" class="">'+
'<p>Por favor cargue una fotografía (Formato png/jpg) del predio PAR:</p>'+         
      '            <div class="row"> '+  
      '                   <div class="col-md-12"> '+
      '                     <div class="form-group"> '+
      '                       <input id="input-b1" name="input-b1" type="file" class="file upd" accept="image/x-png,image/gif,image/jpeg"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b1" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+
'        </div>'+
'        <div id="step-4" class="">'+
'<p>Por favor cargue un documento adjunto pdf que evidencia el registro de visitas fallidas, un (1) solo árchivo pdf es permitido:</p>'+         
      '            <div class="row"> '+  
      '                   <div class="col-md-12"> '+
      '                     <div class="file-loading"> '+
      '                       <input id="input-b2" name="input-b2" type="file" class="file upd" accept="application/pdf"> '+ 
      '                     </div> '+
      '                       <div id="alerta_input-b2" class="alert alert-danger alert-dismissible fade in" style="display:none"> '+ 
      '                          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+ 
      '                          <strong>Error!</strong> Debe subir y cargar un árchivo '+ 
      '                       </div> '+ 
      '                    </div> '+
      '            </div> '+ 
'        </div>'+
'        <div id="step-5" class="">'+
 '<p>Profesional que recibe el predio por la CVP</p>'+
 
  '                 <div class="row"> '+
 '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="nombre_tecnico" class="control-label">Nombre:</label> '+
                                '     <input type="text" class="form-control" id="nombre_tecnico"  disabled> '+
                                '   </div> '+

 '                     </div> '+
  '                     <div class="col-md-6"> '+
                                '   <div class="form-group"> '+
                                '     <label for="cargo_tecnico" class="control-label">Cargo/Contrato:</label> '+
                                '     <input type="text" class="form-control" id="cargo_tecnico" placeholder="Cargo/Contrato" disabled> '+

                                '   </div> '+

 '                     </div> '+


        
      '             </div> '+  
'        </div>'+
'    </div>'+
'</div>'+
   
    '<div class="modal-footer">' +
    '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
    '</div>';



    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');
  
    $("input:disabled").css({"backgroundColor":"white"});
    
setTimeout(function(){
    


    
    $('#smartwizard').smartWizard({
            selected: 0,  // Initial selected step, 0 = first step 
            keyNavigation:true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
            autoAdjustHeight:true, // Automatically adjust content height
            cycleSteps: false, // Allows to cycle the navigation of steps
            backButtonSupport: true, // Enable the back button support
            useURLhash: true, // Enable selection of the step based on url hash
            lang: {  // Language variables
                next: 'Siguiente', 
                previous: 'Anterior'
            },
            toolbarSettings: {
             toolbarExtraButtons: [
			$('<button></button>').text('Guardar ')
					      .addClass('btn btn_hide btn-default')
					      .attr('id', 'save_acta')
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
     $(".sw-btn-next").removeClass("btn-secondary").addClass("btn-success");  
     $('#save_acta').append('<i class="glyphicon glyphicon-floppy-disk"></i>');
    
    
    
    
    
    $('.sandbox-container input').datepicker({
    weekStart: 1,
    todayBtn: "linked",
    clearBtn: true,
    language: "es",
    forceParse: false,
    daysOfWeekHighlighted: "0",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true
});

    $('.coord').keyup(function (e) {
    var val = $(this).val();
    if(isNaN(val)){
         val = val.replace(/[^0-9\.]/g,'');
         if(val.split('.').length>2) 
             val =val.replace(/\.+$/,"");
    }
    $(this).val(val); 
    });
    
    $('#chip').focusout(function(e) {
    var val = $(this).val();
    var longitud=val.length;
    console.log(longitud);
    if(longitud===11 || longitud===0){
        $("#alerta_chip").css('display','none');
    }else{
        $("#alerta_chip").css('display','block');
    }

    });

$('input').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });
 
 $('.upd').on('change', function(){
    $('#alerta_'+this.id).css("display","none");
});
    
    $( "#gen_pdf" ).click(function() {
        
        var seguir=0;
        
        if($('#fecha_acta').val()===''){
           $('#alerta_fecha').css("display","block");
           seguir=1;
        }
        
        if(seguir===0){
         var doc = pdf_acta_entrega();
         pdfMake.createPdf(doc).download('acta_entrega_'+identificador+'.pdf');
         $('#error_msg').css("display","none");  
        }else{
          $('#error_msg').css("display","block");  
        }
        

        
        
      });
    function getDateFormat(date) {
     if (date === '') {
         return '';
     } else {

         var today = new Date(date);
         var mes=today.getMonth()+1;
         return  today.getUTCDate() + '/'+mes +'/' + today.getUTCFullYear();  
     }
 }; 

      
    $datos = {
        op: 'datos_acta_entrega_par',
        identificador: identificador,
        usuario_usuario:usuario_usuario
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
            $('#id_ficha_idiger').val((resultado["id_ficha_idiger"]?resultado["id_ficha_idiger"]:''));
            $('#id_acta_entrega').val((resultado["IDENTIFICADOR"]?resultado["IDENTIFICADOR"]:''));
            $('#ben1').val((resultado["Nombre 1"]?resultado["Nombre 1"]:''));
            $('#ced1').val((resultado["Cedula 1"]?resultado["Cedula 1"]:''));
            $('#ben2').val((resultado["Nombre 2"]?resultado["Nombre 2"]:''));
            $('#ced2').val((resultado["Cedula 2"]?resultado["Cedula 2"]:''));
            $('#localidad').val((resultado["Localidad"]?resultado["Localidad"]:''));
            $('#upz').val((resultado["UPZ"]?resultado["UPZ"]:''));
            
            $('#barrio').val((resultado["Barrio"]?resultado["Barrio"]:''));
            $('#chip').val((resultado["Código Chip Catastro"]?resultado["Código Chip Catastro"]:''));
            $('#dir_campo').val((resultado["Dirección"]?resultado["Dirección"]:''));
            $('#man_campo').val((resultado["MZ"]?resultado["MZ"]:''));
            $('#lot_campo').val((resultado["LT"]?resultado["LT"]:''));
            $('#dir_catastral').val((resultado["dir_cat"]?resultado["dir_cat"]:''));
            $('#man_catastral').val((resultado["man_cat"]?resultado["man_cat"]:''));
            $('#lot_catastral').val((resultado["lot_cat"]?resultado["lot_cat"]:''));
            
            $('#coord_x').val((resultado["cord_x"]?resultado["cord_x"]:''));
            $('#coord_y').val((resultado["cord_y"]?resultado["cord_y"]:''));
            $('#obs_acta').text((resultado["observ_acta_entrega"]?resultado["observ_acta_entrega"]:''));
            $('#carac_tecnicas').val((resultado["carac_tecnicas"]?resultado["carac_tecnicas"]:''));
            $('#fecha_acta').val(getDateFormat(resultado["Fecha Acta de entrega predio en riesgo a CVP"]?resultado["Fecha Acta de entrega predio en riesgo a CVP"]:''));

            
            if((resultado["acta_entrega_user"]?resultado["acta_entrega_user"]:'')===''){
                $('#nombre_tecnico').val((resultado["usuario_nombre"]?resultado["usuario_nombre"]:usuario_nombre));
                $('#cargo_tecnico').val((resultado["usuario_contrato"]?resultado["usuario_contrato"]:''));
            }else{
                $('#nombre_tecnico').val((resultado["usuario_nombre1"]?resultado["usuario_nombre1"]:usuario_nombre));
                $('#cargo_tecnico').val((resultado["usuario_contrato1"]?resultado["usuario_contrato1"]:''));
            }
            
            
            

        },
        error: function (response) {
            alert("Ocurrió un error al almacenar la información");
        }
    });
    
var seguir_archivo=0;
var datos = {};
var url_preview='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_img_entrega_par",
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {

            if (response)
            {
                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        var resultado = response[i];

                            datos["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview='ObtenerArchivo?ID='+datos["1"];
                            seguir_archivo=1;
                    }

                } else {
                    console.log(response);
                    
                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });
    
    
    $("#input-b1").fileinput({
    theme: 'fa',
    language: 'es',
    initialPreview: [
        url_preview
    ],
    initialPreviewFileType: 'image', 
        initialPreviewConfig: [ 
        {caption: datos["2"],size:100, key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: 'Foto Entrega PAR',
                identificador: identificador,
                tipo_documento: '9107',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_img_entrega_par',
            identificador: identificador
        };
        return out;
    } ,   
    uploadUrl: 'FileUploader',
    deleteUrl: 'GestionConsultas',
    allowedFileExtensions: ["jpg", "png", "gif"],
    initialPreviewAsData: true,
    showUpload: true,
    overwriteInitial: true,
    browseOnZoneClick: true
});
    
 $("#input-b1").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = true;
        if (confirm("Esta seguro de borrar la imágen?")) {
            abort = false;
            seguir_archivo=0;
        }
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


$("#input-b1").on('filepreajax', function (event, previewId, index) {
        seguir_archivo=1;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();
    });   


//Subir archivo pdf

var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_acta_entrega",
            identificador: identificador
        },
        dataType: "json",
        async: false,
        success: function (response) {

            if (response)
            {
                if (response.length > 0) {

                    for (var i = 0; i < response.length; i++) {

                        var resultado = response[i];

                            datos1["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos1["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview1='ObtenerArchivo?ID='+datos1["1"];
                            seguir_archivo=1;
                    }

                } else {
                    console.log(response);
                    
                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }


    });
    
if(datos1["1"]===undefined){
    var contar=false;
}else{
    var contar=true;
}

$("#input-b2").fileinput({
    theme: 'fa',
    language: 'es',
    fileActionSettings: {
    'showRemove': false,
    'indicatorNew': '&nbsp;'
},
    initialPreview: [
        url_preview1
    ],
        initialPreviewFileType: 'pdf', 
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: datos1["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos1["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: 'Documento acta de entrega PAR',
                identificador: identificador,
                tipo_documento: '7305',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {
        
        var out = {
            op: 'delete_pdf_acta_entrega_par',
            identificador: identificador
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
        var abort = true;
        alertify.error("El archivo no se puede borrar");
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


$("#input-b2").on('filepreajax', function (event, previewId, index) {
        seguir_archivo=1;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();
    });
    

$( "#save_acta" ).click(function() {
      $fecha_acta =document.getElementById("fecha_acta");
      $obs_acta = document.getElementById("obs_acta");
      $carac_tecnicas = document.getElementById("carac_tecnicas");
      var cerrado=false;


      $datos = {
          op: 'save_acta_entrega',
          identificador: identificador,
          fecha:$($fecha_acta).val(),
          usuario_nombre:usuario_usuario,
          observaciones: $($obs_acta).val(),
          carac_tecnicas: $($carac_tecnicas).val(),
          cerrado:cerrado
      };

      $.ajax({
          type: "POST",
          url: "GestionConsultas",
          data: $datos,
          dataType: "json",
          async: false,
          success: function (response) {
              alertify.success("Datos almacenados satisfactoriamente");                 
          },
          error: function (response) {
              alertify.error("Ocurrió un error");
          }
          });
          
    update_fecha_acta_entrega();
          
  });
    
    
    
  function update_fecha_acta_entrega() {
      
      
      $fecha_acta =document.getElementById("fecha_acta");
      
      $.ajax({
          type: "POST",
          url: "GestionConsultas",
         data: $datos = {
                op: 'update_fecha_acta_entrega',
                identificador: identificador,
                fecha_acta:$($fecha_acta).val()},
          dataType: "json",
          async: false,
          success: function (response) {
              alertify.success("Fecha almacenada y actualizada");                 
          },
          error: function (response) {
              alertify.error("Ocurrió un error");
          }
          });
      
      
  };
    
    
    
    
    
    
 
}, 200);
    
    
    


    



}

