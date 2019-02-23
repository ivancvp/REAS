function caracoli_generar_formulario(identificador){


    var contenido =
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                '<h4 class="modal-title">Formulario de: Caracolí</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<h1 style="color:#148F77;font-size: 20px;">Identificación general de condiciones socioambientales y de entorno <i class="far fa-id-badge"></i> </h1>'+
 
                '<div class="row"> '+
                    '<div class="col-md-4"> '+
                        '<div class="form-group"> '+
                            '<label for="sandbox-container" class="control-label">Fecha</label> '+
                            '<div class="span5 sandbox-container"><input  type="text" class="form-control upd data fecha" id="fecha_acta" placeholder="Fecha"></div>'+
                        '</div> '+
                    '</div> '+
                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label class="control-label">Número del acta</label> '+
                           '<input type="text" class="form-control data" style="text-transform: uppercase" id="num_acta" placeholder="Número del acta" > '+
                       '</div> '+
                   '</div> '+
                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Número de ocupación SDH</label> '+
                           '<input type="text" class="form-control data" style="text-transform: uppercase" id="num_sdh"  style="background:white" disabled placeholder="Número de ocupación" > '+
                       '</div> '+
                   '</div> '+
                '</div> '+                
                
                    '<div class="row">'+
                        '<div class="col-md-12">'+
                            '<div class="form-group">'+
                                '<label class="control-label">Dirección Provisional</label>'+
                                '<div class="input-group">'+
                                    '<input type="text" class="form-control data" placeholder="Dirección Provisional" style="background:white" disabled id="direccion">'+
                                    '<span class="input-group-btn">'+
                                       '<button class="btn btn-success upd_btn" type="button" id="edit_dir"><i class="fas fa-pencil-alt"></i> Editar</button>'+
                                    '</span>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+                
                
                '<div class="row">'+
                    '<div class="col-md-12">  '+
                        '<p>La Alcaldía Local de Ciudad Bolívar realiza la jornada de caracterización socioambiental para'+
                            'identifcación de riesgos colectivos en el entorno en el sector Caracolí</p>'+
                    '</div>'+        
                '</div>'+     
                
'<div id="smartwizard">'+
'    <ul>'+
'        <li><a href="#step-1"><i class="fas fa-user"></i><br /><small>Persona notificada</small></a></li>'+
'        <li><a href="#step-2"><i class="fas fa-users"></i><br /><small>Núcleo familiar</small></a></li>'+
'        <li><a href="#step-3"><i class="fas fa-home"></i><br /><small>Ocupación</small></a></li>'+
'        <li><a href="#step-4"><i class="fas fa-align-justify"></i><br /><small>Observaciones</small></a></li>'+
'        <li><a href="#step-5"><i class="far fa-file-pdf"></i><br /><small>PDF</small></a></li>'+
'    </ul>'+
'<div>'+
'        <div id="step-1" class="">'+


              '<div class="panel panel-success class">'+
                    '<div class="panel-heading">Persona notificada</div>'+
                        '<div class="panel-body">'+  
                '<div class="row"> '+
                    '<div class="col-md-9"> '+
                       '<div class="form-group"> '+
                           '<label class="control-label">Nombre de la persona notificada</label> '+
                           '<div class="row" > '+
                                '<div class="col-md-3" style="padding-right:0"> '+
                                     '<input type="text" class="form-control data" style="text-transform: uppercase" id="nom1" placeholder="Nombre 1" > '+
                                '</div> '+
                                '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                                    '<input type="text" class="form-control data" style="text-transform: uppercase" id="nom2" placeholder="Nombre 2" > '+
                                '</div> '+
                                '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                                    '<input type="text" class="form-control data" style="text-transform: uppercase" id="ape1" placeholder="Apellido 1" > '+
                                '</div> '+
                                '<div class="col-md-3" style="padding-left:0"> '+
                                    '<input type="text" class="form-control data" style="text-transform: uppercase" id="ape2" placeholder="Apellido 2" > '+
                                '</div> '+
                           '</div> '+
                       '</div> '+
                   '</div> '+
                    '<div class="col-md-3"> '+
                       '<div class="form-group"> '+
                           '<label class="control-label">Cédula</label> '+
                           '<input type="text" class="form-control numeric tel data" id="cedula" placeholder="Cédula" > '+
                       '</div> '+
                   '</div> '+
                '</div> '+  

            '<div class="row"> '+
                '<div class="col-md-6"> '+
                    '<div class="form-group"> '+
                        '<label for="val_res" class="control-label">Telefono 1</label> '+
                        '<div class="input-group"> '+
                            '<span class="input-group-addon"><i class="fas fa-phone"></i></span>'+
                            '<input type="text" class="form-control tel numeric data" id="tel1" placeholder="Telefono 1"> '+
                        '</div> '+
                    '</div> '+
                '</div> '+

                '<div class="col-md-6"> '+
                    '<div class="form-group"> '+
                        '<label for="val_res" class="control-label">Telefono 2</label> '+
                        '<div class="input-group"> '+
                            '<span class="input-group-addon"><i class="fas fa-phone"></i></span>'+
                            '<input type="text" class="form-control tel numeric data" id="tel2" placeholder="Telefono 2"> '+
                        '</div> '+
                    '</div> '+
                '</div> '+
            '</div> '+            
            

            '<div class="row"> '+
                '  <div class="col-md-6">  '+
                '	  <label >Calidad en la que habita la ocupación</label>'+
                '	  <div class="checkbox data" id="calidad_habita">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Arrendatario</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled "  ><label>Cuidador</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>Ocupante</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Otro</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+

                    '<div class="col-md-6 condicionado data" id="calidadhabitaotro"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Cuál?</label> '+
                           '<input type="text" class="form-control" style="text-transform: uppercase" placeholder="Cuál?" > '+
                       '</div> '+
                   '</div> '+
                '</div> '+   
            
            '<div class="row"> '+
                '  <div class="col-md-5" >  '+
                '	  <label >Antes de llegar al sector, donde residía</label>'+
                '	  <div class="checkbox data" id="residia_antes">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>En Bogotá</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled "><label>Fuera de Bogotá</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+

                    '<div class="col-md-5"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">¿Donde?</label> '+
                           '<input type="text" class="form-control data" style="text-transform: uppercase" id="residiaantesdonde" placeholder="¿Donde?" > '+
                       '</div> '+
                   '</div> '+

                '  <div class="col-md-2">  '+
                '	  <label >Zona </label>'+
                '	  <div class="checkbox data" id="residiaanteszona">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>Urbana</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled "  ><label>Rural</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+
             '</div> '+              
            
            
            
            '<div class="row"> '+                
                '  <div class="col-md-6">  '+
                '	  <label >¿Le gustaría retornar a su lugar de origen?</label>'+
                '	  <div class="checkbox data" id="desea_retornar">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+           
            
                '<div class="col-md-6">  '+            
                    '<div class="form-group">'+
                        '<label for="comment">¿Por qué?</label>'+
                        '<textarea class="form-control data" rows="3" style="text-transform: uppercase" id="desearetornarpq"></textarea>'+
                    '</div>'+
                '</div> '+              
             '</div> '+   

                     '</div>'+        
                '</div>'+  




'        </div> '+     

'        <div id="step-2" class="">'+

'<div class="panel panel-warning class">'+
                    '<div class="panel-heading">Descripción núcleo familiar que habita en la ocupación</div>'+
                        '<div class="panel-body">'+   
 
 
        '<div class="row">'+
            '<div class="col-md-12"> '+
                '<div class="form-group"> '+
                '<label class="control-label">Nombres y apellidos</label> '+
                '        <div class="row">'+
                '<div class="col-md-3" style="padding-right:0"> '+
                    '<input type="text" class="form-control for_table obligatorio" style="text-transform: uppercase" placeholder="Nombre 1" id="nom1f" > '+
               '</div> '+
               '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                   '<input type="text" class="form-control for_table" style="text-transform: uppercase" placeholder="Nombre 2" id="nom2f"> '+
               '</div> '+
               '<div class="col-md-3" style="padding-right:0;padding-left:0"> '+
                   '<input type="text" class="form-control for_table" style="text-transform: uppercase" placeholder="Apellido 1" id="ape1f" > '+
               '</div> '+
               '<div class="col-md-3" style="padding-left:0"> '+
                   '<input type="text" class="form-control for_table" style="text-transform: uppercase" placeholder="Apellido 2" id="ape2f"> '+
               '</div> '+                   
 '        </div> '+ 
                '</div> '+ 
            '</div> '+                        
        '</div> '+                          
                        
                        

 '        <div class="row">'+
                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Tipo de documento</label> '+
                           '<select class="form-control for_table obligatorio" id="tip_doc"><option value="">Seleccione</option><option value="CC">Cédula</option><option value="TI">Tarjeta de Identidad</option><option value="CE">Cédula Extranjeria</option><option value="RN">Registro de Nacimiento</option></select> '+
                       '</div> '+
                   '</div> '+                     

                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Documento de identidad</label> '+
                           '<input type="text" class="form-control for_table obligatorio" id="doc_ide"> '+
                       '</div> '+
                   '</div> '+                     

                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Fecha de nacimiento</label> '+
                           '<div class="span5 sandbox-container"><input  type="text" class="form-control upd for_table fecha" id="fec_nac" placeholder="Fecha"> </div>'+
                       '</div> '+
                   '</div> '+                     
 '        </div> '+
   '        <div class="row">'+
                    '<div class="col-md-8"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Relación con el jefe de familia</label> '+
                           '<select class="form-control upd for_table" id="rel_jef" >'+
                                    '<option value="" >Seleccione el Tipo de Parentesco</option>'+
                                    '<option value="JEFE DE FAMILIA"> Jefe de familia </option>'+
                                    '<option value="ESPOSO(A)/CCOMPAÑERO(O)"> Esposo(a)/Compañero(a) </option>'+
                                    '<option value="HIJO(A)"> Hijo(a) </option>'+
                                    '<option value="HERMANO(A)"> Hermano(a) </option>'+
                                    '<option value="PADRE O MADRE"> Padre o Madre </option>'+
                                    '<option value="ABUELO(A)"> Abuelo(a) </option>'+
                                    '<option value="NUERA/YERNO"> Nuera/Yerno </option>'+
                                    '<option value="NIETO(A)"> Nieto(a) </option>'+
                                    '<option value="SUEGRO(A)"> Suegro(a) </option>'+
                                    '<option value="OTRO PARIENTE"> Otro pariente </option>'+
                                    '<option value="OTRO NO PARIENTE"> Otro no pariente </option>'+
                                    '<option value="ARRENDATARIO"> Arrendatario </option>'+
                                    '<option value="OTRO"> Otro </option>'+
                                '</select>'+ 
                       '</div> '+
                   '</div> '+                     

                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Unidad social a la que pertenece</label> '+
                           '<input type="number" class="form-control for_table" id="uni_soc"> '+
                       '</div> '+
                   '</div> '+                     
 '        </div> '+
     '        <div class="row">'+
                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Tiene discapacidad</label> '+
                           '<select class="form-control upd for_table" id="tie_dis">'+
                                 '<option value="" >Seleccione</option>'+
                                 '<option value="SI">Si</option>'+
                                 '<option value="NO">No</option>'+
                             '</select>'+  
                       '</div> '+
                   '</div> '+                     

                    '<div class="col-md-4 condicionado" id="div_tip_dis"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Tipo de discapacidad</label> '+
                           '<select class="form-control upd for_table" id="tip_dis" >'+
                                 '<option value="" >Seleccione</option>'+
                                 '<option value="Física">Física</option>'+
                                 '<option value="Auditiva">Auditiva</option>'+
                                 '<option value="Visual">Visual</option>'+
                                 '<option value="Cognitiva">Cognitiva</option>'+ 
                                 '<option value="Mental">Mental</option>'+
                                 '<option value="Múltiple">Múltiple</option>'+
                                 '<option value="Sordo-ceguera">Sordo-ceguera</option>'+                             
                             '</select>'+ 
                       '</div> '+
                   '</div> '+                     

                    '<div class="col-md-4"> '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">Ha presentado enferemedad diarreica?</label> '+
                            '<select class="form-control upd for_table" id="pre_dia">'+
                                 '<option value="" >Seleccione</option>'+
                                 '<option value="SI">Si</option>'+
                                 '<option value="NO">No</option>'+
                             '</select>'+ 
                       '</div> '+
                   '</div> '+                     
 '        </div> '+ 
 
 
             '<div class="row"> '+ 
            '  <div class="col-md-12">  '+
                    '<button type="button" class="btn btn-primary" id="add_row"><i class="fas fa-plus"></i></button>'+
                    '<button type="button" class="btn btn-success" id="save_row" style="display:none"><i class="fas fa-save"></i></button>'+
                    '<button type="button" class="btn btn-danger" id="del_row" style="display:none"><i class="far fa-trash-alt"></i></button>'+
                '</div>'+  
            '</div>'+  

            
 
                '<div class="row">'+
                   '<div class="col-md-12">'+ 
                    '<table class="table table-bordered" id="tabla1">'+
                    '<thead>'+
                      '<tr>'+
                        '<th width="10px">#</th>'+
                        '<th width="35px" >Editar</th>'+
                        '<th>Nombre Prin.</th>'+
                        '<th>Nombre Sec.</th>'+
                        '<th>Apellido Prin.</th>'+
                        '<th>Apellido Sec.</th>'+
                      '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                      '<tr >'+
                      '</tr>'+                      
                    '</tbody>'+
                  '</table>'+
                '</div>'+              
            '</div>'+ 
            
            '<div class="row">'+
                   '<div class="col-md-12">'+ 
                    '<table class="table table-bordered" id="tabla2">'+
                    '<thead>'+
                      '<tr>'+
                        '<th width="10px">#</th>'+
                        '<th>Tipo de documento</th>'+
                        '<th>Documento de identidad</th>'+
                        '<th>Fecha de nacimiento</th>'+
                        '<th>Relación con el jefe de familia</th>'+
                      '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                      '<tr>'+  
                      '</tr>'+                      
                    '</tbody>'+
                  '</table>'+
                '</div>'+              
            '</div>'+       
 
                '<div class="row">'+
                   '<div class="col-md-12">'+ 
                    '<table class="table table-bordered" id="tabla3">'+
                    '<thead>'+
                      '<tr>'+
                        '<th width="10px">#</th>'+                        
                        '<th>Unidad social a la que pertenece</th>'+
                        '<th>Tiene discapacidad</th>'+
                        '<th>Tipo de discapacidad</th>'+
                        '<th>Ha presentado enferemedad diarreica?</th>'+
                      '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                      '<tr>'+                      
                      '</tr>'+                      
                    '</tbody>'+
                  '</table>'+
                '</div>'+              
            '</div>'+                   
            
    
            
             '<div class="row"> '+                
                '  <div class="col-md-6">  '+
                '	  <label >¿Hay en el núcleo familiar mujeres gestantes? </label>'+
                '	  <div class="checkbox data" id="hay_embarazadas">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+          
             '</div> '+              

            '<div class="row"> '+                
                '  <div class="col-md-6">  '+
                '	  <label >¿En el último mes algún miembro de la familia ha presentado síntomas de enfermedad respiratoria?</label>'+
                '	  <div class="checkbox data" id="enf_respiratoria">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+           
            
                '<div class="col-md-6 condicionado check data" id="enfrespiratoriacausa">  '+            
                '	  <label >Si la respuesta es si </label>'+
                '	  <div class="checkbox">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Resfriado</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Dificultad para respirar</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Tos</label>'+
                '            </div>'+                
                '	  </div>'+
                '</div> '+              
             '</div> '+  
            
                '</div> '+              
             '</div> '+ 





'        </div> '+ 

'        <div id="step-3" class="">'+

'<div class="panel panel-info class">'+
                    '<div class="panel-heading">Características de la ocupación</div>'+
                        '<div class="panel-body">'+
                        
            
             
                
            '<div class="row"> '+  
                '<div class="col-md-4">  '+          
                    '<label >¿Se encuentra habitada?</label>'+
                '	  <div class="checkbox data" id="ocuhabitada">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                 '</div> '+  

                '<div class="col-md-4">  '+          
                    '<label >¿Consolidado? (bloque, ladrillo o material rígido)</label>'+
                '	  <div class="checkbox data" id="ocuconsolidado">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>No</label>'+
                '            </div>'+
                '	  </div>'+ 
                 '</div> '+  
  
                '<div class="col-md-4">  '+          
                '<label >¿Provisional? (Madera/ latas/material de reciclaje)</label>'+
                '	  <div class="checkbox data" id="ocuprovisional">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                 '</div> '+  
            '</div> '+             
            
            '<div class="row"> '+
                '<div class="col-md-12">'+ 
                    '<label >Uso que se identifica de la Ocupación</label>'+
                '</div> '+  
            '</div> '+ 
            
            '<div class="row"> '+                
                '<div class="col-md-3">  '+             
                '<label >Comercial</label>'+
                '	  <div class="checkbox data" id="usocomercial">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                 '</div> '+
                '<div class="col-md-3">  '+             
                '<label >Residencial</label>'+
                '	  <div class="checkbox data" id="usoresidencial">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled" ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                 '</div> '+
              '</div> '+               
          
            
            '<div class="row"> '+
                '  <div class="col-md-5">  '+
                '	  <label >¿Se identifica más de una unidad de vivienda?</label>'+
                '	  <div class="checkbox data" id="mas_viv">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled "><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+

                    '<div class="col-md-5 condicionado data" id="masvivnum" > '+
                       '<div class="form-group"> '+
                           '<label  class="control-label">¿Cuantas?</label> '+
                           '<input type="text" class="form-control numeric numeric1"  placeholder="¿Cuantas?" > '+
                       '</div> '+
                   '</div> '+

             '</div> '+  
            
            '<div class="row"> '+
                '<div class="col-md-12">'+ 
                    '<label >Número de pisos de la construcción</label>'+
                    '<input type="text" class="form-control numeric data" id="num_pisos" placeholder="Número de pisos" > '+
                '</div> '+  
            '</div> '+             
           

             
            '<div class="row"> '+
                '  <div class="col-md-5">  '+
                '	  <label >¿Hay animales de compañía?</label>'+
                '	  <div class="checkbox data" id="hay_ani">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled" ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+

                '  <div class="col-md-2 condicionado data check" id="tip_ani">  '+
                '	  <label >Si la respuesta es si, ¿Qué tipo?</label>'+
                '	  <div class="checkbox">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Canino</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Felino</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled " ><label>Otro</label>'+
                '            </div>'+                
                '	  </div>'+
                ' </div>'+
                '<div class="col-md-5 condicionado data" id=tipaniotro> '+
                   '<div class="form-group"> '+
                       '<label  class="control-label">¿Cuál?</label> '+
                       '<input type="text" class="form-control" style="text-transform: uppercase" placeholder="¿Cuál?" > '+
                   '</div> '+
               '</div> '+                
                
             '</div> '+             
            
            '<div class="row"> '+
                '  <div class="col-md-5 condicionado data check" id="can_peligro">  '+
                '	  <label >Si seleccionó Canino ¿Es de raza potencialmente peligrosas? </label>'+
                '	  <div class="checkbox">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled "  ><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+

                '<div class="col-md-5 condicionado data" id="canpeligroraza"> '+
                   '<div class="form-group"> '+
                       '<label  class="control-label">Raza</label> '+
                       '<input type="text" class="form-control"  placeholder="Raza" > '+
                   '</div> '+
               '</div> '+                
                
             '</div> '+                 
            
            '<div class="row"> '+
                '  <div class="col-md-5">  '+
                '	  <label >¿Hay presencia de especies de producción? </label>'+
                '	  <div class="checkbox data" id="hay_esp_prod">'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox"  class="upd_check styled "><label>Si</label>'+
                '            </div>'+
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled " ><label>No</label>'+
                '            </div>'+
                '	  </div>'+
                ' </div>'+

                '<div class="col-md-5 condicionado data" id="hayespprodcual"> '+
                   '<div class="form-group"> '+
                       '<label  class="control-label">¿Cuál?</label> '+
                       '<input type="text" class="form-control" style="text-transform: uppercase" placeholder="¿Cuál?" > '+
                   '</div> '+
               '</div> '+                
                
             '</div> '+             
            
            
             '</div>'+
             '</div>'+

'        </div> '+ 

'        <div id="step-4">'+
                '<div class="row"> '+            
                    '<div class="col-md-12">  '+            
                        '<div class="form-group">'+
                            '<label for="comment">Observaciones</label>'+
                            '<textarea class="form-control data" rows="6" style="text-transform: uppercase" id="observaciones"></textarea>'+
                        '</div>'+
                    '</div> '+  
                '</div> '+ 


'        </div> '+ 
'        <div id="step-5">'+

      '            <div class="row"> '+ 
      '<p>Por favor cargue un documento adjunto pdf que evidencia el registro de visitas fallidas, un (1) solo árchivo pdf es permitido:</p>'+ 
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


'        </div> '+ 




'</div> '+  
'</div> '+             

          
            
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fas fa-times"></i> Cerrar</button>' +
        '</div>';
    
    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');
        

 }
 
 
 function logica_caracoli_generar_formulario(identificador){
     
     
     

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
					      .attr('id', 'save_caracoli')
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
     $('#save_caracoli').append('<i class="glyphicon glyphicon-floppy-disk"></i>');    
 
     

    $datos = {
          op: 'get_info_caracoli',
          num_sdh: identificador
      };
      $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {

           $.each( response[0], function( key, value ) {

                if($('#'+key).is("input,textarea") ){
                    if($('#'+key).hasClass('fecha') ){                       
                        $('#'+key).val(moment(value).format("DD/MM/YYYY"))
                    }else{
                        $('#'+key).val(value)
                    }
                    
                }
                if($('#'+key).hasClass('condicionado') ){
                     if($('#'+key).hasClass('check') ){
                         
                         
                         var values = [value.match(/Tos/g) || value.match(/Otro/g) ,value.match(/Resfriado/g)|| value.match(/Felino/g), value.match(/Dificultad para respirar/g)|| value.match(/Canino/g)];

                         $('#'+key+' :checkbox').each(function(){
                             
                             for ( var i = 0, l = values.length; i < l; i++ ) {
                                 if(values[i]!==null){
                                     if($(this).next().text()===values[i].toString()){
                                        $(this).prop('checked', true);
                                    }
                                 }
                                    
                                }
                        });
                        
                     }else{
                         $('#'+key+' input').val(value)
                     }
                    
                }
                if($('#'+key).hasClass('checkbox')){

                        $('#'+key+' :checkbox').each(function(){        
                            if($(this).next().text()===value){
                                $(this).prop('checked', true);
                            }
                         });
                }
                
              });
           
        }, error: function (a) {
            
        }
    });

     
     
$('#save_caracoli').click(function () {
      


var obj = {}
obj['op'] = "save_info_caracoli"
obj['usuario_nombre'] = usuario_nombre
$('.data').each(function(index) {
    
    if($(this).hasClass('checkbox')){
        
            var id=$(this).prop('id');
            var dato='';
          $('#'+id+' :checkbox').each(function(){        
                if($(this).is(":checked")){
                     dato=$(this).next().text();
                }else{

                }
            
        });
        obj[$(this).prop('id')] = dato

    }
    
     else if($(this).hasClass('condicionado')){
         
         if($(this).hasClass('check')){
             var id=$(this).prop('id');
             var dato='-';
            
             if(id==="can_peligro"){
                 $('#'+id+' :checkbox').each(function(){        
                     if($(this).is(":checked")){
                          dato=$(this).next().text();
                     }
               });            
             obj[$(this).prop('id')] = dato
             }else{
                 var ids = [];
                 
                $('#'+id+' :checkbox').each(function(){        
                     if($(this).is(":checked")){
                          dato=$(this).next().text()+dato;
                          ids.push($(this).next().text());
                     }else{
                         ids.push(null);
                     }
               });
               
             obj[$(this).prop('id')] =JSON.stringify(ids).replace(/\"/g,'\'');
             }
              

             
             
         }else{
            var id=$(this).prop('id');
            obj[$(this).prop('id')] = $('#'+id+' input').val().toUpperCase().trim().replace(/\s+/g, " ");;             
         }

     }  
    
    else{
        var valor=$(this).val().toUpperCase().trim().replace(/\s+/g, " ");
        if($(this).hasClass('fecha')){
            console.log($(this).val())
            if($(this).val()===""){
                valor='0001-01-01';
            }
        }
        
        obj[$(this).prop('id')] = valor
    }
    
    
    
});

      $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: obj,
        dataType: "json",
        async: false,
        success: function (response) {
           alertify.success("Información almacenada correctamente");
        }, error: function (a) {
            
        }


    });

      
      
    }); 
 
     
     
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



$("#edit_dir").click(function () {
$('#form1').empty();
var contenido = generar_direccion();
$('#form1').append(contenido);
$('#modal').modal('show');

var letras = genCharArray('a', 'z');

$('#3d').append("<option value=\" \" ></option>");
for (i = 0; i < 26; i++) {
    $('#3d').append("<option value=\"" + letras[i] + "\" >" + letras[i] + "</option>");
}
$('#5d').append("<option value=\" \" ></option>");
for (i = 0; i < 26; i++) {
    $('#5d').append("<option value=\"" + letras[i] + "\" >" + letras[i] + "</option>");
}
$('#8d').append("<option value=\" \" ></option>");
for (i = 0; i < 26; i++) {
    $('#8d').append("<option value=\"" + letras[i] + "\" >" + letras[i] + "</option>");
}

$("#save_direccion").click(function () {

 $('#direccion').val($('#11d').text());
                                  
});

});




/*
$('.condicionado').hide();
*/



   
   check_unico('residia_antes');
   check_unico('residiaanteszona');
   check_unico('desea_retornar');
   check_unico('hay_embarazadas');
   check_unico('ocuhabitada');
   check_unico('ocuconsolidado');
   check_unico('ocuprovisional');
   check_unico('usocomercial');
   check_unico('usoresidencial');
   check_unico('can_peligro');
   check_unico('hay_esp_prod');
   
   function check_unico(id){       
       $('#'+id+' :checkbox').click(function() {
        $('#'+id+' :checkbox').not(this).prop('checked', false);
    });
   }
   
   check_mul('calidad_habita','calidadhabitaotro','Otro');
   check_mul('enf_respiratoria','enfrespiratoriacausa','Si');
   check_mul('mas_viv','masvivnum','Si'); 
   check_mul('hay_ani','tip_ani','Si');
   check_mul('tip_ani','can_peligro','Canino',true);
   check_mul('tip_ani','tipaniotro','Otro',true); 
   check_mul('can_peligro','canpeligroraza','Si'); 
   check_mul('hay_esp_prod','hayespprodcual','Si'); 
   
   function check_mul(id,id_otro,texto,disable){       
    $('#'+id+' :checkbox').click(function() {
        
        if(disable){
            
        $('#'+id+' :checkbox').each(function(){        
            if($(this).next().text()===texto){
                if($(this).is(":checked")){
                     $('#'+id_otro).show();
                }else{
                    $('#'+id_otro).hide();
                    $('#'+id_otro+' input').val("");
                    $('#'+id_otro+' :checked').prop('checked', false); 
                }
            }
        });
            

        }else{
             $('#'+id+' :checkbox').not(this).prop('checked', false);
            if($(this).next().text()===texto && $(this).is(":checked")){
                 $('#'+id_otro).show();
            }else{
                $('#'+id_otro).hide();
                $('#'+id_otro+' input').val("");
                $('#'+id_otro+' :checked').prop('checked', false); 
        }
        }
           
        


    });
   }  


     
     $('#tie_dis').change(function() {
         if($('#tie_dis').val()==="SI"){
            $('#div_tip_dis').show();
         }else{
             $('#div_tip_dis').hide();
             $('#tip_dis').val("");
         }
    });    
     
    

/* fuction numero de telefono de 10 digitos */

    $('.tel').change(function() {
       checkNumberFieldLength(this); 
    });
    
$('.numeric').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
}); 

$('.numeric1').focusout('input', function (event) {    
var term = this.value;
var re = new RegExp("([2-9]|[1-8][0-9]|9[0-9]|100)");
if (re.test(term)) {
    
} else {
    alertify.error("Debe ingresar un número mayor a 1");
    this.value=""
}


}); 

$(".fecha").blur(function(){   
     var newDate = $(this).val();
    
     if(newDate===''){

     }else{
         
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

    function checkNumberFieldLength(elem) {
        if (elem.value.length > 10) {
            elem.value = null;
            alertify.error("Número no válido");
        }
    };

var datos1 = {};
var url_preview1='';
var validar=false;
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_acta_caracoli",
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
                    validar=true;
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
                descripcion: 'Acta de notificación Caracolí',
                identificador: identificador,
                tipo_documento: '3',
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {       
                
        var out = {
            op: 'delete_acta_caracoli',
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
    showRemove: true,
    autoReplace:false,
    maxFileCount: 1,
    validateInitialCount: validar,
   
}); 




$('.borrar').click(function(){
    $(this).closest("tr").remove();
});

    $datos = {
        op: 'get_info_fam_caracoli',
        num_sdh: identificador
    };
    $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: $datos,
      dataType: "json",
      async: false,
      success: function (response) {

       for ( var i = 0, l = response.length; i < l; i++ ) {
          var data=response[i];
          
            var contador=i+1;
            var nom1=(data["nom1f"]?data["nom1f"]:'');
            var nom2=(data["nom2f"]?data["nom2f"]:'');
            var ape1=(data["ape1f"]?data["ape1f"]:'');
            var ape2=(data["ape2f"]?data["ape2f"]:'');

            var tip_doc=(data["tip_doc"]?data["tip_doc"]:'');
            var doc_ide=(data["doc_ide"]?data["doc_ide"]:'');
            var fec_nac=(data["fec_nac"]?data["fec_nac"]:'');
            fec_nac=moment(fec_nac).format("DD/MM/YYYY");
            var rel_jef=(data["rel_jef"]?data["rel_jef"]:'');
            var uni_soc=(data["uni_soc"]?data["uni_soc"]:'');
            var tie_dis=(data["tie_dis"]?data["tie_dis"]:'');
            var tip_dis=(data["tip_dis"]?data["tip_dis"]:'');
            var pre_dia=(data["pre_dia"]?data["pre_dia"]:'');
           generar_filas(contador,nom1,nom2,ape1,ape2,tip_doc,doc_ide,fec_nac,rel_jef,uni_soc,tie_dis,tip_dis,pre_dia);
       }
      

      }, error: function (a) {

      }
  });


function generar_filas(contador,nom1,nom2,ape1,ape2,tip_doc,doc_ide,fec_nac,rel_jef,uni_soc,tie_dis,tip_dis,pre_dia){
    var button= 
        '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
        '               <input type="checkbox" class="upd_check styled edit" ><label></label>'+
        '            </div>';

$('#tabla1 tr:last').after('<tr><td>'+contador+'</td><td>'+button+'</td><td>'+nom1+'</td><td>'+nom2+'</td><td>'+ape1+'</td><td>'+ape2+'</td></tr>'); 
$('#tabla2 tr:last').after('<tr><td>'+contador+'</td><td>'+tip_doc+'</td><td>'+doc_ide+'</td><td>'+fec_nac+'</td><td>'+rel_jef+'</td></tr>'); 
$('#tabla3 tr:last').after('<tr><td>'+contador+'</td><td>'+uni_soc+'</td><td>'+tie_dis+'</td><td>'+tip_dis+'</td><td>'+pre_dia+'</td></tr>');    
}

   

editar();

function editar(){
    $('.edit:checkbox').click(function() {            

            
            $('.edit:checkbox').not(this).prop('checked', false);
                var editar=(this).closest("tr");
                indice=$(editar).index()+1;
                
                var nom1=$('#tabla1 tr:eq('+indice+')').find("td:eq(2)").text();                
                $('#nom1f').val(nom1);
                var nom2=$('#tabla1 tr:eq('+indice+')').find("td:eq(3)").text();                
                $('#nom2f').val(nom2);
                var ape1=$('#tabla1 tr:eq('+indice+')').find("td:eq(4)").text();                
                $('#ape1f').val(ape1);
                var ape2=$('#tabla1 tr:eq('+indice+')').find("td:eq(5)").text();                
                $('#ape2f').val(ape2);
                var tipo_doc=$('#tabla2 tr:eq('+indice+')').find("td:eq(1)").text();      
                $('#tip_doc').val(tipo_doc);
                var doc_ide=$('#tabla2 tr:eq('+indice+')').find("td:eq(2)").text();      
                $('#doc_ide').val(doc_ide);
                $("#doc_ide").attr("disabled", true);
                var fec_nac=$('#tabla2 tr:eq('+indice+')').find("td:eq(3)").text();      
                $('#fec_nac').val(fec_nac);
                var rel_jef=$('#tabla2 tr:eq('+indice+')').find("td:eq(4)").text();      
                $('#rel_jef').val(rel_jef);
                var uni_soc=$('#tabla3 tr:eq('+indice+')').find("td:eq(1)").text();      
                $('#uni_soc').val(uni_soc);
                var tie_dis=$('#tabla3 tr:eq('+indice+')').find("td:eq(2)").text();      
                $('#tie_dis').val(tie_dis);
                var tip_dis=$('#tabla3 tr:eq('+indice+')').find("td:eq(3)").text();      
                $('#tip_dis').val(tip_dis);
                var pre_dia=$('#tabla3 tr:eq('+indice+')').find("td:eq(4)").text();      
                $('#pre_dia').val(pre_dia);
                
          
            if($('.edit:checked').length === 0){
                $(".for_table").each(function(){
                    $(this).val("");
                });
                $("#doc_ide").attr("disabled", false);
                $('#save_row').hide();
                $('#del_row').hide();
                $('#add_row').show();
            }else{
                $('#save_row').show();
                $('#del_row').show();
                $('#add_row').hide();
            }
          
          
        });
}
function guardar(){
        $('#tabla1 tr:eq('+indice+')').find("td:eq(2)").text($('#nom1f').val());
        $('#tabla1 tr:eq('+indice+')').find("td:eq(3)").text($('#nom2f').val());
        $('#tabla1 tr:eq('+indice+')').find("td:eq(4)").text($('#ape1f').val());
        $('#tabla1 tr:eq('+indice+')').find("td:eq(5)").text($('#ape2f').val());
        $('#tabla2 tr:eq('+indice+')').find("td:eq(1)").text($('#tip_doc').val());
        $('#tabla2 tr:eq('+indice+')').find("td:eq(2)").text($('#doc_ide').val());
        $('#tabla2 tr:eq('+indice+')').find("td:eq(3)").text($('#fec_nac').val());
        $('#tabla2 tr:eq('+indice+')').find("td:eq(4)").text($('#rel_jef').val());
        $('#tabla3 tr:eq('+indice+')').find("td:eq(1)").text($('#uni_soc').val());
        $('#tabla3 tr:eq('+indice+')').find("td:eq(2)").text($('#tie_dis').val());
        $('#tabla3 tr:eq('+indice+')').find("td:eq(3)").text($('#tip_dis').val());
        $('#tabla3 tr:eq('+indice+')').find("td:eq(4)").text($('#pre_dia').val());
        
        $(".for_table").each(function(){
            $(this).val("");
        });
                $('#save_row').hide();
                $('#del_row').hide();
                $('#add_row').show();
                $('.edit').prop('checked', false); // Unchecks it
    
    guardar_fam_bd();
    $("#doc_ide").attr("disabled", false);
}

function borrar(){
    
   $doc_ide=$('#tabla2 tr:eq('+indice+')').find("td:eq(2)").text();
    $datos = {
        op: 'delete_fam_caracoli',
        num_sdh: identificador,               
        doc_ide:$doc_ide
    };
    $.ajax({
      type: "POST",
      url: "GestionConsultas",
      data: $datos,
      dataType: "json",
      async: false,
      success: function (response) {
          alertify.success("Miembro borrado con exito");
      }, error: function (a) {

      }
  });
    
    $('#tabla1 tr:eq('+indice+')').remove();
    $('#tabla2 tr:eq('+indice+')').remove();
    $('#tabla3 tr:eq('+indice+')').remove();
        $(".for_table").each(function(){
        $(this).val("");
    });
    $('#save_row').hide();
    $('#del_row').hide();
    $('#add_row').show();
   

 

    
    
    
    
    
    
    
}



 function obligatorio(){
    var cont=0;
    $('.obligatorio').each(function() {

    var str=$(this).attr('id');
    
    if($(this).val()==='' || $(this).val()==='Seleccione...' ){
        if($("#"+str+"_error").length===0) {
           $(this).after( $( "<label id="+$(this).attr('id')+'_error'+" class='error'>Campo Obligatorio</label>" ) );
           cont=cont+1;
          }else{
            $("#"+str+"_error").show();
            cont=cont+1;
          }
    }else{
       
          $("#"+str+'_error').hide();
    }
    
}); 
     return cont;
 }







var conta=1;
var indice=0;



    $('#add_row').click(function() {
        
        if(obligatorio()>0){
            alertify.error("Revise los campos obligatorios antes de ingresar la información");
        }else{
         var button= 
                '            <div class="checkbox abc-checkbox abc-checkbox-primary">'+
                '               <input type="checkbox" class="upd_check styled edit" ><label></label>'+
                '            </div>';
 
        
        
        $('#tabla1 tr:last').after('<tr><td>'+conta+'</td><td>'+button+'</td><td>'+$('#nom1f').val()+'</td><td>'+$('#nom2f').val()+'</td><td>'+$('#ape1f').val()+'</td><td>'+$('#ape2f').val()+'</td></tr>'); 
        $('#tabla2 tr:last').after('<tr><td>'+conta+'</td><td>'+$('#tip_doc').val()+'</td><td>'+$('#doc_ide').val()+'</td><td>'+$('#fec_nac').val()+'</td><td>'+$('#rel_jef').val()+'</td></tr>'); 
        $('#tabla3 tr:last').after('<tr><td>'+conta+'</td><td>'+$('#uni_soc').val()+'</td><td>'+$('#tie_dis').val()+'</td><td>'+$('#tip_dis').val()+'</td><td>'+$('#pre_dia').val()+'</td></tr>');
        
        $(".for_table").each(function(){
            $(this).val("");
        });
        
        editar();
        guardar_fam_bd();

        conta=conta+1;  
        }

        

    });
    
    $('#save_row').click(function() {
        if(obligatorio()>0){
            alertify.error("Revise los campos obligatorios antes de ingresar la información");
        }else{
            guardar();
        }
        

    });
    
    $('#del_row').click(function() {
        
        borrar();
    
    });
    
    function guardar_fam_bd() {
        
        var rowCount = $('#tabla1 > tbody >tr').length-1;

        var indice=2
        
       for ( var i = 2, l = 2+rowCount; i < l; i++ ) {
            $nom1f=$('#tabla1 tr:eq('+i+')').find("td:eq(2)").text().toUpperCase().trim().replace(/\s+/g, " ");;
            $nom2f=$('#tabla1 tr:eq('+i+')').find("td:eq(3)").text().toUpperCase().trim().replace(/\s+/g, " ");;
            $ape1f=$('#tabla1 tr:eq('+i+')').find("td:eq(4)").text().toUpperCase().trim().replace(/\s+/g, " ");;
            $ape2f=$('#tabla1 tr:eq('+i+')').find("td:eq(5)").text().toUpperCase().trim().replace(/\s+/g, " ");;
            $doc_ide=$('#tabla2 tr:eq('+i+')').find("td:eq(2)").text().trim().replace(/\s+/g, " ");;            
            $tip_doc=$('#tabla2 tr:eq('+i+')').find("td:eq(1)").text();
            $fec_nac=$('#tabla2 tr:eq('+i+')').find("td:eq(3)").text();
            $rel_jef=$('#tabla2 tr:eq('+i+')').find("td:eq(4)").text();
            $uni_soc=$('#tabla3 tr:eq('+i+')').find("td:eq(1)").text();
            $tie_dis=$('#tabla3 tr:eq('+i+')').find("td:eq(2)").text();
            $tip_dis=$('#tabla3 tr:eq('+i+')').find("td:eq(3)").text();
            $pre_dia=$('#tabla3 tr:eq('+i+')').find("td:eq(4)").text();            
            
            
            $datos = {
                op: 'save_fam_caracoli',
                num_sdh: identificador,
                nom1f:$nom1f,
                nom2f:$nom2f,
                ape1f:$ape1f,
                ape2f:$ape2f,
                tip_doc:$tip_doc,
                fec_nac:$fec_nac,
                rel_jef:$rel_jef,
                uni_soc:$uni_soc,
                tie_dis:$tie_dis,
                tip_dis:$tip_dis,
                pre_dia:$pre_dia,                
                doc_ide:$doc_ide,
                usuario_nombre:usuario_nombre
            };
      
            $.ajax({
              type: "POST",
              url: "GestionConsultas",
              data: $datos,
              dataType: "json",
              async: false,
              success: function (response) {



              }, error: function (a) {

              }
          });


       }
        
        
        
        
    };
    
    
    /* para bloquear el formulario 
    $("input,textarea,button,select").attr("disabled", true);
    */
  $("#fecha_acta").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });
  
  
  $("#fec_nac").inputmask("datetime",{ alias: "datetime", inputFormat: "dd/mm/yyyy",clearIncomplete: true });
  
 }
 