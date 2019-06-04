
$('#freconocimiento').on('click', function () {
    var identificador = document.getElementById("identificador").innerHTML;
    
    
    
    var cont='';
    var operacion = 'ficha_reconocimiento';
    var tabs = '';
    $.ajax({type: "GET",
        url: "GestionConsultas",
        data: {
            op: operacion,
            identificador: identificador
        },
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                
                $respuesta = response[0];
                    if (response.length > 0) {
                        
                      
                        tabs = tabs + " <h1>Ficha de Reconocimiento en Campo</h1><h3><strong>Número de visitas fallidas: </strong> " +
                                ($respuesta["num_visitas_fallidas"] ? $respuesta["num_visitas_fallidas"] : 'No hay información') + " </h3><p>Información del entrevistado:</p><div class='row'> <div class='col-lg-6'>" +
                                ($respuesta["Nombre_Atiende"] ? $respuesta["Nombre_Atiende"] : 'No hay información') + "</div><div class='col-lg-6'>" +
                                ($respuesta["Cedula_Atiende"] ? $respuesta["Cedula_Atiende"] : 'No hay información') + " </div> </div><!-- Nav tabs --><ul class='nav nav-tabs' role='tablist'><li class='nav-item active'><a class='nav-link '  style='color: #337ab7;' data-toggle='tab' href='#home' role='tab'>Localización</a></li><li class='nav-item'><a class='nav-link' data-toggle='tab' style='color: #337ab7;' href='#messages' role='tab'>vivienda</a></li><li class='nav-item'><a class='nav-link' style='color: #337ab7;' data-toggle='tab' href='#settings' role='tab'>Linderos</a></li><li class='nav-item'><a class='nav-link' data-toggle='tab' style='color: #337ab7;' href='#fotos' role='tab'>Fotos</a></li></ul><!-- Tab panes --><div class='tab-content'><div class='tab-pane active' id='home' role='tabpanel'><div class='row'><div class='col-lg-12 center-orientation'><h2>Localización de la vivienda</h2></div> </div><div class='row'><div class='col-lg-4'><strong>Localidad:</strong> " +
                                ($respuesta["Localidad"] ? $respuesta["Localidad"] : 'No hay información') + "</div><div class='col-lg-4'> <strong>Manzana:</strong> " +
                                ($respuesta["MZ"] ? $respuesta["MZ"] : 'No hay información') + " </div> <div class='col-lg-4'><strong>UPZ:</strong> " +
                                ($respuesta["UPZ"] ? $respuesta["UPZ"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-4'> <strong>Lote:</strong> " +
                                ($respuesta["LT"] ? $respuesta["LT"] : 'No hay información') + "</div><div class='col-lg-4'> <strong>Barrio:</strong> " +
                                ($respuesta["Barrio"] ? $respuesta["Barrio"] : 'No hay información') + "</div> </div><div class='row'><div class='col-lg-4'><strong>Dirección:</strong> " +
                                ($respuesta["Dirección"] ? $respuesta["Dirección"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Telefono:</strong> " +
                                ($respuesta["Telefono"] ? $respuesta["Telefono"] : 'No hay información') + "</div><div class='col-lg-4'> <strong>Chip Catastral:</strong> " +
                                ($respuesta["Código Chip Catastro"] ? $respuesta["Código Chip Catastro"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-4'><strong>Dirección Campo:</strong> " +
                                ($respuesta["Dirección_Campo"] ? $respuesta["LoDirección_Campocalidad"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Dirección Catastro:</strong> " +
                                ($respuesta["Direccion_Catastro"] ? $respuesta["Localidad"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Otra Nomenclatura:</strong> " +
                                ($respuesta["Direccion_Otra"] ? $respuesta["Direccion_Otra"] : 'No hay información') + "</div></div><br><div class='row'><div class='col-lg-6'><strong> Contador EEAA:</strong> " +
                                ($respuesta["Contador_EEAA"] ? $respuesta["Contador_EEAA"] : 'No hay información') + "</div> <div class='col-lg-6'><strong>Dirección EEAA:</strong> " +
                                ($respuesta["Direccion_EEAA"] ? $respuesta["Direccion_EEAA"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-6'><strong>Contador CODENSA:</strong> " +
                                ($respuesta["Contador_CODENSA"] ? $respuesta["Contador_CODENSA"] : 'No hay información') + "</div><div class='col-lg-6'><strong>Dirección CODENSA:</strong> " +
                                ($respuesta["Direccion_CODENSA"] ? $respuesta["Direccion_CODENSA"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-6'><strong>Contador Gas Natural:</strong> " +
                                ($respuesta["Contador_Gas_Natural"] ? $respuesta["Contador_Gas_Natural"] : 'No hay información') + "</div><div class='col-lg-6'><strong>Dirección Gas Natural:</strong> " +
                                ($respuesta["Direccion_Gas_Natural"] ? $respuesta["Direccion_Gas_Natural"] : 'No hay información') + "</div></div></div><div class='tab-pane' id='messages' role='tabpanel'><div class='row'><div class='col-lg-12 center-orientation'><h2>Descripción de la vivienda</h2></div></div><div class='row'><div class='col-lg-4'><strong>Predio Demolido:</strong> " +
                                ($respuesta["Predio_Demolido"] ? $respuesta["Predio_Demolido"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Habitado:</strong>  " +
                                ($respuesta["Habitado"] ? $respuesta["Habitado"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Ubicación:</strong> " +
                                ($respuesta["Ubicacion"] ? $respuesta["Ubicacion"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-4'><strong>Largo:</strong> " +
                                ($respuesta["Largo"] ? $respuesta["Largo"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Ancho:</strong> " +
                                ($respuesta["Ancho"] ? $respuesta["Ancho"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Construcción:</strong> " +
                                ($respuesta["Area Construccion"] ? $respuesta["Area Construccion"] + " M2" : 'No hay información') + "</div></div><div class='row'><div class='col-lg-4'><strong>Acabado Piso:</strong> " +
                                ($respuesta["Acabados piso"] ? $respuesta["Acabados piso"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Acabado Cocina:</strong> " +
                                ($respuesta["Acabado_Cocina"] ? $respuesta["Acabado_Cocina"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Acabado Baño:</strong> " +
                                ($respuesta["Acabado_Baño"] ? $respuesta["Acabado_Baño"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-4'><strong>Estructura:</strong> " +
                                ($respuesta["Estructura"] ? $respuesta["Estructura"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Cimentación:</strong> " +
                                ($respuesta["Cimentacion"] ? $respuesta["Cimentacion"] : 'No hay información') + "</div><div class='col-lg-4'><strong>Cubierta:</strong> " +
                                ($respuesta["Cubierta"] ? $respuesta["Cubierta"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-6'><strong>Distribución interior:</strong> " +
                                (($respuesta["Alcobas"] ? 'Alcobas ' : '') + ($respuesta["Zona social"] ? ' Zona Social' : '') + ($respuesta["Baño"] ? ' Baño' : '') + ($respuesta["Cocina"] ? ' Cocina' : '') + ($respuesta["Patio"] ? ' Patio' : '') + ($respuesta["Otros"] ? ' Otros' : '')) +
                                "</div></div></div><div class='tab-pane' id='settings' role='tabpanel'><div class='row'><div class='col-lg-12 center-orientation'><h2>Linderos</h2></div></div><div class='row'><div class='col-lg-6 '><strong>Origen de la información:</strong> " +
                                ($respuesta["Origen_Informacion"] ? $respuesta["Localidad"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-12 '><strong>Norte:</strong> " +
                                ($respuesta["Lindero_Norte"] ? $respuesta["Origen_Informacion"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-12 '><strong>Sur:</strong>  " +
                                ($respuesta["Lindero_Sur"] ? $respuesta["Lindero_Sur"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-12 '><strong>Oriente:</strong> " +
                                ($respuesta["Lindero_Oriente"] ? $respuesta["Lindero_Oriente"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-12 '><strong>Occidente:</strong> " +
                                ($respuesta["Lindero_Occidente"] ? $respuesta["Lindero_Occidente"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-12 '><h4>Anexos:</strong> </h4> " +
                                (($respuesta["Anexo_Manzana_Catastral"] ? 'Manzana Catastral ' : '') + ($respuesta["Anexo_Concepto_Tecnico"] ? 'Concepto Técnico ' : '') + ($respuesta["Anexo_Certificado_Nomenclatura"] ? 'Certificado de Nomenclatura' : '') + ($respuesta["Anexo_Esquema"] ? 'Esquema' : '') + ($respuesta["Anexo_Otro"] ? ' Otro anexo:' + $respuesta["Anexo_Cual_Otro"] : '')) +
                                "</div></div><div class='row'><div class='col-lg-12 '><strong>Observaciones:</strong>  " +
                                ($respuesta["Observaciones"] ? $respuesta["Observaciones"] : 'No hay información') + "</div></div><div class='row'><div class='col-lg-6 '><strong>Elaborado:</strong> " +
                                ($respuesta["Elaborado por"] ? $respuesta["Elaborado por"] : 'No hay información') + "</div><div class='col-lg-6 '><strong>Revisado:</strong> " +
                                ($respuesta["Des_Revisor"] ? $respuesta["Des_Revisor"] : 'No hay información') + "</div></div></div>  <div class='tab-pane' id='fotos' role='tabpanel'><div class='row'><div class='col-lg-12 center-orientation'><h2>Registro fotografico</h2></div></div></div>   </div>";
                                
                                var btn_hab_ficha='';
                                if(usr_funct.includes(20)){
                                    btn_hab_ficha='<button type="button" class="btn btn-success" id="habilitar_ficha"><i class="fas fa-check"></i> Habilitar Ficha</button>';
                                }
                            
                                if(($respuesta["num_visitas_fallidas"] ? $respuesta["num_visitas_fallidas"] : 0)>2 && ($respuesta["habilitar_ficha"] ? $respuesta["habilitar_ficha"] : false)===false ){
                                        cont='   <button type="button" class="btn btn-danger"  id="visita_fallida" data-dismiss="modal">Visita Fallida <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'+
                                             btn_hab_ficha;
                                }else{
                                        cont='   <button type="button" class="btn btn-danger"  id="visita_fallida" data-dismiss="modal">Adicionar Visita Fallida <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>' +
                                            '   <button type="button" class="btn btn-primary"  id="editar_reconocimiento" data-dismiss="modal">Editar <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>' +
                                            '   <button type="button" class="btn btn-success" id="imprimir_reconocimiento"  data-dismiss="modal">Imprimir <span class="glyphicon glyphicon-print" aria-hidden="true"></span></button>';
                                }
                    }else{
                        tabs = '<p>No hay información disponible, por favor edite la Ficha técnica.</p>';
                         cont='   <button type="button" class="btn btn-danger"  id="visita_fallida" data-dismiss="modal">Adicionar Visita Fallida <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>' +
                              '   <button type="button" class="btn btn-primary"  id="editar_reconocimiento" data-dismiss="modal">Editar <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>';
                       
                    } 

            }
            
                       var contenido = '<div class="modal-header">' +
                            '<h3 class="modal-title">Ficha de Reconocimiento</h3>' +
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                            '   <span aria-hidden="true">&times;</span>' +
                            '</button>' +
                            '</div>' +
                            '<div class="modal-body">' +
                            tabs +
                            '</div>' +
                            '<div class="modal-footer" style="margin-top:10px">' +
                            cont+
                            '   <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'+
                            '</div>';
                    $('#consultas').empty();
                    $('#consultas').append(contenido);
                    
                     $('#modal_consultas').modal('show');

                    if (editar_ficha_tecnica ) {
                        

                        $('#editar_reconocimiento').on('click', function () {                          

                                    $('#ficha_tecnica').empty();
                                    $("#ficha_tecnica").append('<div class="modal-header"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item"  id="frame_tenica" src="ficha.jsp?identificador=' + identificador + '" ></iframe></div></div><div class="modal-footer"><button class="btn btn-primary" data-dismiss="modal"><i class="fas fa-times"></i> Cerrar</button></div>');
                                    $('.modal-lg').css('width', '95%');
                                    $('#modal_tecnico').modal({
                                        backdrop: 'static',
                                        keyboard: false  // to prevent closing with Esc button (if you want this too)
                                    });
                                    $('#imprimir_reconocimiento').css('display','inline-block');
        //                            $boton = $('#frame_tecnica').context.all.fin_btn;
        //                            console.log($('#frame_tecnica'));
        //                            console.log($boton);
        //                            $($boton).on('click', function () {
        //                                $('#modal_tecnico').modal('hide');
        //                            });
                        });
                        

                    }
                    
                  if(usr_funct.includes(25)){
                        $('#visita_fallida').on('click', function () {
                            gen_visita_fallida(identificador);
                        });
                  }

         
                $('#imprimir_reconocimiento').on('click',function () {
                    pdf1(identificador);
                });
                
                $('#habilitar_ficha').click(function(){
                    
                        $datos = {
                         op: 'habilitar_ficha_visita_fallida',
                         identificador:identificador
                        };
                            
                          $.ajax({
                            type: "POST",
                            url: "GestionConsultas",
                            data: $datos,
                            dataType: "json",
                            async: false,
                            success: function (response) {           
                                alertify.success("Ficha habilitada, cargue nuevamente");            
                            },
                            error: function (response) {
                                alertify.error("Error en el sistema");
                                }
                            });
                });
               
            
            
        }
    });
});