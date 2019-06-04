

<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page import="com.trelta.commons.web.CacheBuster"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>


<html>
    <head>
        <title>Ficha Tecnica de Reconocimiento</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script  type='text/javascript'>
            <%

                out.print("var usuario_usuario = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_usuario") + "';");
                out.print("var usuario_nombre = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre") + "';");
                out.print("var usuario_identificador = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';");
                out.print("var usuario_funcionalidades = '" + ((Map<String, Object>) session.getAttribute("info")).get("funcionalidades") + "';");
                out.print("var usuario_cargo = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_cargo") + "';");
                out.print("var id_user = '" + ((Map<String, Object>) session.getAttribute("info")).get("usuario_id") + "';");

            %>


        </script>
        <script>
            var id_user = '<%                    if ((session.getAttribute("user") != null)) {
                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_id"));
                }
            
            %>';

        </script>

        <script language="JavaScript" src="js/md5.js"></script>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="font-awesome/css/fontawesome-all.css" rel="stylesheet">
        <!-- Importe de jquery, bootstrap js y css y las fuentes de google -->
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <!-- js y css para el element select con busqueda -live search-->
        <link href="css/tecnica/bootstrap-select.min.css" rel="stylesheet" />
        <script src="css/tecnica/bootstrap-select.min.js"></script>

        <!-- Text spinners style -->
        <link href="css/plugins/textSpinners/spinners.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">

        <!-- Literally Canvas, modulo para hacer el dibujo del plano de la ficha técnica -->
        <link href="literallycanvas-0.4.14/css/literallycanvas.css" rel="stylesheet">
        <script src="literallycanvas-0.4.14/js/react-with-addons.js"></script>
        <script src="literallycanvas-0.4.14/js/react-dom.js"></script>
        <script src="literallycanvas-0.4.14/js/literallycanvas.js"></script>
        <!-- js y css que se encargan de cada uno de los pasos de la ficha técnica-->
        <link href="css/pasos_tecnica.css" rel="stylesheet">
        <script src="js/reas/tecnica/pasos.js"></script>
        <!-- js para la generación de la dirección en la ficha técnica -->
        <script src="js/reas/tecnica/direccion.js"></script>
        <!-- js que guarda cada paso de la ficha técnica -->
        <%= CacheBuster.bust(application.getRealPath("/"), "js/reas/tecnica/fotos.js", "js")%>
        <!-- Modulo para el sistema de notificaciones de la ficha técnica -->
        
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/envio.js", "js")%>
        <!-- Parte del código que sirve para el repositorio documental, en este caso las fotos de la ficha técnica.-->
        <link href="js/vendors/kartik-v-bootstrap-fileinput/themes/explorer-fa/theme.css" media="all" rel="stylesheet" type="text/css"/>
        <link type="text/css" href="js/vendors/kartik-v-bootstrap-fileinput/css/fileinput.css" rel="stylesheet" />
        <script src="js/vendors/kartik-v-bootstrap-fileinput/js/fileinput.js"></script>
        <script src="js/vendors/kartik-v-bootstrap-fileinput/js/locales/es.js"></script>
        <script src="js/vendors/html2canvas/html2canvas.min.js"></script>
        <script src="js/vendors/kartik-v-bootstrap-fileinput/themes/explorer-fa/theme.js" type="text/javascript"></script>
        <%= CacheBuster.bust(application.getRealPath("/"), "alerta/notificaciones.js", "js")%>
        <!-- Plugin visor de imagenes-->
        
        <link href="js/vendors/SmartWizard-master/dist/css/smart_wizard.css" rel="stylesheet" type="text/css" />
        <link href="js/vendors/SmartWizard-master/dist/css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/SmartWizard-master/dist/js/jquery.smartWizard.min.js"></script>

        <!-- libreria para la carga de las fotos, mensaje de espera-->

        <script src="js/vendors/jquery-loading-master/src/loading.js"></script>
        <link href="js/vendors/jquery-loading-master/src/loading.css" rel="stylesheet">


        <!-- Libreria js para el procesamiento digital de imágenes, sirve para la ficha técnica -->
        <script src="js/vendors/jimp-master/browser/lib/jimp.min.js"></script>
        
        <link href="js/vendors/bootstrap-datepicker/css/bootstrap-datepicker.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/vendors/bootstrap-datepicker/js/bootstrap-datepicker.es.min.js"></script>
        <!-- Libreria para mensajes laterales al usuario-->
        <link rel="stylesheet" href="js/vendors/alertifyjs/css/alertify.rtl.css"/>
        <link rel="stylesheet" href="js/vendors/alertifyjs/css/themes/default.rtl.css"/>
        <script type="text/javascript" src="js/vendors/alertifyjs/alertify.js"></script>        
        
        <!-- Validacion de fechas -->
        <script src="js/vendors/moment/moment.js" ></script> 
        <!--librerias para checkbox-->
        <link rel="stylesheet" href="js/vendors/awesome-bootstrap-checkbox-1.0.0-alpha.2/bower_components/Font-Awesome/css/font-awesome.css"/>
        <link rel="stylesheet" href="js/vendors/awesome-bootstrap-checkbox-1.0.0-alpha.2/demo/build.css"/>
        <!-- Libreria para la fecha inputmask-->
        <script type="text/javascript" src="js/vendors/Inputmask/dist/jquery.inputmask.bundle.js" charset="utf-8"></script>
        
        <style>
            .btn-file {
                position: relative;
                overflow: hidden;
            }
            .btn-file input[type=file] {
                position: absolute;
                top: 0;
                right: 0;
                min-width: 100%;
                min-height: 100%;
                font-size: 100px;
                text-align: right;
                filter: alpha(opacity=0);
                opacity: 0;
                outline: none;
                background: white;
                cursor: inherit;
                display: block;
            }

            #img-upload{
                width: 80%;
            }
            input[type=number]::-webkit-inner-spin-button, 
            input[type=number]::-webkit-outer-spin-button { 
                -webkit-appearance: none; 
                margin: 0; 
            }

            .direccion {
                padding-right:2px;  
                padding-left:2px;
            }

            .direccion1 {
                padding-right:2px;  
                padding-left:12px;
            }


            .btn.outline {
                    background: none;
            }

             .btn-primary.outline {
                    border: 2px solid #0099cc;
                    color: #0099cc;
            }           


.btn-primary.outline:hover, .btn-primary.outline:focus, .btn-primary.outline:active, .btn-primary.outline.active, .open > .dropdown-toggle.btn-primary {
	color: #27AE60;
	border-color: #27AE60;
}
.btn-primary.outline:active, .btn-primary.outline.active {
	border-color: #007299;
	color: #007299;
	box-shadow: none;
}            
            

            
        </style>



    </head>

    <body >
        <h2 style="color:#1B4F72"><i class="far fa-file-alt"></i> Ficha Técnica de Reconocimiento</h2>
        <p>Modulo para la edición y consulta de la ficha técnica de reconocimiento.</p>
        <h3 style="color:#E67E22;display:none" id="msg_noaprob"> Ficha Técnica en aprobación.</h3>
        <h3 style="color:#E67E22;display:none" id="msg_siaprob"> Ficha Técnica aprobada.</h3>
        
 <div id="smartwizard">
    <ul>
        <li><a href="#step-1">1 <i class="fas fa-users"></i><br /><small> Información Familiar</small></a></li>
        <li><a href="#step-2">2 <i class="fas fa-home"></i><br /><small>Información General de la Vivienda</small></a></li>
        <li><a href="#step-3">3 <i class="fas fa-building"></i><br /><small>Descripción de la Vivienda</small></a></li>
        <li><a href="#step-4">4 <i class="fas fa-map"></i><br /><small>Planos de la vivienda</small></a></li>
        <li><a href="#step-5">5 <i class="fas fa-camera-retro"></i><br /><small>Fotografías de la vivienda</small></a></li>
        <li><a href="#step-6">6 <i class="far fa-file-alt"></i><br /><small>Observaciones</small></a></li>
    </ul>

    <div>
        <div id="step-1" class="">


  <legend style="color:#2E86C1"><h3> <i class="fas fa-users"></i> 1. Información Familiar </h3></legend>

                    


                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label" id="lbl_fecha">Fecha de elaboración</label>                                
                                <div class="span5 sandbox-container"><input id="fecha_elaboracion" type="text" class="form-control upd" placeholder="Fecha"></div>
                            </div>
                            <script>
                                var dia_de_hoy=moment(new Date()).format("YYYY-MM-DD");                                
                                 $('.sandbox-container input').datepicker({
                                    format: "yyyy-mm-dd",
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

                                $(".fecha").inputmask("datetime",{ alias: "datetime", inputFormat: "yyyy-mm-dd",clearIncomplete: true });


                            </script>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Identificador</label>
                                <input type="text" id="identificador" required="required" class="form-control upd" placeholder="Ingrese el Identificador">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label num_ficha">Ficha técnica No.</label>
                                <input type="number" id="ficha_num" class="form-control upd num_ficha" placeholder="Ingrese el Número de ficha">
                            </div>
                        </div>                        
                    </div>


                    <div class="row">
                        <div class="col-md-9">
                            <div class="form-group">
                                <label class="control-label">1.1 Nombre del beneficiario Principal</label>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="nom1_1"  class="form-control upd" placeholder="1er Nombre" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="nom1_2"  class="form-control upd" placeholder="2do Nombre" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="ape1_1"  class="form-control upd" placeholder="1er Apellido" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="ape1_2"  class="form-control upd" placeholder="2do Apellido" >                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">1.2 Cédula</label>
                                <small class="text-muted">(Cédula del beneficiario principal.)</small>
                                <input type="number" id="cedula_prin" class="form-control upd numeric" placeholder="Ingrese la cédula" oninput="checkNumberFieldLength(this);"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="form-group">
                                <label class="control-label">1.3 Nombre del beneficiario Secundario</label>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="nom2_1"  class="form-control upd" placeholder="1er Nombre" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="nom2_2"  class="form-control upd" placeholder="2do Nombre" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="ape2_1"  class="form-control upd" placeholder="1er Apellido">                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="ape2_2"  class="form-control upd" placeholder="2do Apellido">                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">1.4 Cédula</label>
                                <small class="text-muted">(Cédula del beneficiario secundario.)</small>
                                <input type="number" id="cedula_sec"  class="form-control upd numeric" placeholder="Ingrese la cédula" oninput="checkNumberFieldLength(this);" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-9">
                            <div class="form-group">
                                <label class="control-label">1.5 Nombre de quien atiende la visita</label>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="nom3_1"  class="form-control upd" placeholder="1er Nombre" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="nom3_2"  class="form-control upd" placeholder="2do Nombre" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="ape3_1"  class="form-control upd" placeholder="1er Apellido" >                            
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">                           
                                            <input  type="text"  id="ape3_2"  class="form-control upd" placeholder="2do Apellido" >                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">1.6 Cédula</label>
                                <small class="text-muted">(Cédula de quien atiende la visita)</small>
                                <input type="number"  id="cedula_visita" class="form-control upd" data-toggle="dropdown" oninput="checkNumberFieldLength(this);" placeholder="Ingrese la cedula" >
                            </div>
                        </div>     
                    </div>    
                    <script>
            function checkNumberFieldLength(elem) {



                if (elem.value.length > 10) {
                    elem.value = elem.value.slice(0, 10);
                }
            }

                    </script>


                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">1.7 Parentesco de quien atiende la visita</label>
                                <small class="text-muted">(Parentesco de quien atiende la visita con el beneficiario principal.)</small>
                                <select class="form-control upd"  id="parentesco" >
                                    <option value="" >Seleccione el Tipo de Parentesco</option>
                                    <option value='JEFE DE FAMILIA'> Jefe de familia </option>
                                    <option value='ESPOSO(A)/CCOMPAÑERO(O)'> Esposo(a)/Compañero(a) </option>
                                    <option value='HIJO(A)'> Hijo(a) </option>
                                    <option value='HERMANO(A)'> Hermano(a) </option>
                                    <option value='PADRE O MADRE'> Padre o Madre </option>
                                    <option value='ABUELO(A)'> Abuelo(a) </option>
                                    <option value='NUERA/YERNO'> Nuera/Yerno </option>
                                    <option value='NIETO(A)'> Nieto(a) </option>
                                    <option value='SUEGRO(A)'> Suegro(a) </option>
                                    <option value='OTRO PARIENTE'> Otro pariente </option>
                                    <option value='OTRO NO PARIENTE'> Otro no pariente </option>
                                    <option value='ARRENDATARIO'> Arrendatario </option>
                                    <option value='OTRO'> Otro </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">1.8 Número Telefónico (1)</label>
                                <input type="number"  id="telefono1"  class="form-control upd numeric" placeholder="Ingrese el Numero de telefono 1" oninput="checkNumberFieldLength(this);"  />

                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label">1.9 Número Telefónico (2)</label>
                                <input type="number" id="telefono2"   class="form-control upd numeric" placeholder="Ingrese el Numero de telefono 2" oninput="checkNumberFieldLength(this);"  />
                            </div>
                        </div>
                        
                    </div>


                    <button class="btn btn-primary nextBtn btn-lg pull-right upd_btn outline" type="button" onclick="paso1()" ><i class="far fa-save"></i> Guardar</button>

        </div>
        <div id="step-2" class="">
            <legend><h3 style="color:#2E86C1"><i class="fas fa-home"></i> 2. Información General de la Vivienda</h3></legend>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">2.1 Localidad</label>
                                <select class="selectpicker form-control upd" data-live-search="true" id="localidad" disabled>
                                    <option value="01 Usaquén">01. Usaquén</option>
                                    <option value="02 Chapinero">02. Chapinero</option>
                                    <option value="03 Santa Fe">03. Santa Fe</option>
                                    <option value="04 San Cristóbal">04. San Cristóbal</option>
                                    <option value="05 Usme">05. Usme</option>
                                    <option value="06 Tunjuelito">06. Tunjuelito</option>
                                    <option value="07 Bosa">07. Bosa</option>
                                    <option value="08 Kennedy">08. Kennedy</option>
                                    <option value="09 Fontibón">09. Fontibón</option>
                                    <option value="10 Engativá">10. Engativá</option>
                                    <option value="11 Suba">11. Suba</option>
                                    <option value="12 Barrios Unidos">12. Barrios Unidos</option>
                                    <option value="13 Teusaquillo">13. Teusaquillo</option>
                                    <option value="14 Los Mártires">14. Los Mártires</option>
                                    <option value="15 Antonio Nariño">15. Antonio Nariño</option>
                                    <option value="16 Puente Aranda">16. Puente Aranda</option>
                                    <option value="17 La Candelaria">17. La Candelaria</option>
                                    <option value="18 Rafael Uribe Uribe">18. Rafael Uribe Uribe</option>
                                    <option value="19 Ciudad Bolívar">19. Ciudad Bolívar</option>
                                    <option value="20 Sumapaz">20. Sumapaz</option>

                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">2.2 Barrio</label>
                                <input type="text"  id="barrio" class="form-control upd" placeholder="Ingrese el Barrio" disabled/>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">2.3 UPZ</label>
                                <input  type="text" id="upz"  class="form-control upd" placeholder="Ingrese la UPZ" disabled />
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">2.4 Dirección tomada en campo</label>
                                <div class="input-group">
                                    <input type="text" class="form-control upd" id="dir_campo" placeholder="Ingrese la dirección" disabled>
                                    <span class="input-group-btn">
                                        <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(1)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="modal fade" tabindex="-1" data-focus-on="input:first" style="display: none;" id="modal_form_tec">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content" id="form_tec">

                            </div>
                        </div>

                    </div>
                    <script>
                        function gen_direccion(id) {

                            $('#form_tec').empty();
                            var contenido = generar_direccion();
                            $('#form_tec').append(contenido);
                            $('#modal_form_tec').modal('show');
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
                                if (id === 1) {
                                    $('#dir_campo').val($('#11d').text());
                                }
                                if (id === 2) {
                                    $('#dir_reco').val($('#11d').text());
                                }
                                if (id === 3) {
                                    $('#dir_cat').val($('#11d').text());
                                }
                                if (id === 4) {
                                    $('#acu_dir').val($('#11d').text());
                                }
                                if (id === 5) {
                                    $('#alc_dir').val($('#11d').text());
                                } 
                                if (id === 6) {
                                    $('#ase_dir').val($('#11d').text());
                                } 
                                if (id === 7) {
                                    $('#ene_dir').val($('#11d').text());
                                }
                                if (id === 8) {
                                    $('#gas_dir').val($('#11d').text());
                                }  
                                if (id === 9) {
                                    $('#tel_dir').val($('#11d').text());
                                }                                   
                            });

                        }

                    </script>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">2.5 Dirección concepto de recomendación</label>

                                <input type="text" class="form-control upd" id="dir_reco" placeholder="Ingrese la dirección" disabled>


                            </div>

                        </div>


                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Manzana</label>
                                <input type="text" id="man_reco" class="form-control upd" disabled/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Lote</label>
                                <input type="text"  id="lot_reco" class="form-control upd" disabled/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">2.6 Dirección Catastral</label>
                                <div class="input-group">
                                    <input type="text" class="form-control upd" id="dir_cat" placeholder="Ingrese la dirección" disabled>
                                    <span class="input-group-btn">
                                        <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(3)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                    </span>
                                </div>

                            </div>

                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Manzana</label>
                                <input type="number" max="10000"  min="0" id="man_cat"  class="form-control upd" />
                            </div>

                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Lote</label>
                                <input type="number" max="10000" min="0" id="lot_cat"  class="form-control upd" />
                            </div>


                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">CHIP Catastro</label>
                                <small class="text-muted">(Número de once digitos)</small>
                                <input type="text"  id="chip" class="form-control upd" placeholder="Ingrese el CHIP" />
                                 <div class="alert alert-danger" style="display:none" id="alerta_chip">
                                <strong>Error!</strong> Longitud de CHIP No coincide con 11 digitos.
                                </div>
                                <script>
                                        $('#chip').focusout(function(e) {
                                            var val = $(this).val();
                                            var longitud=val.length;
                                            if(longitud===11 || longitud===0){
                                                $("#alerta_chip").css('display','none');
                                            }else{
                                                $("#alerta_chip").css('display','block');
                                            }

                                            });
                                    </script>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Área terreno (M2)</label>
                                <input min="0" type="number" id="area_ter"  class="form-control upd" placeholder="Ingrese el area de terreno"  />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">Área construcción(M2)</label>
                                <input min="0" type="number" id="area_con"  class="form-control upd" placeholder="Ingrese el area de construcción"  />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <h4> 2.10 Linderos <i class="fas fa-list-ol"></i></h4>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">Norte:</label>
                                <input type="text"  id="lin_nor"  class="form-control upd" placeholder="Norte"  />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">Sur:</label>
                                <input type="text" id="lin_sur"  class="form-control upd" placeholder="Sur"  />
                            </div>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Oriente:</label>
                                <input type="text" id="lin_ori"  class="form-control upd" placeholder="Oriente"  />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">Occidente:</label>
                                <input type="text" id="lin_occ"  class="form-control upd" placeholder="Occidente"  />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <h4> 2.11 Coordenadas <i class="fas fa-map-marker-alt"></i></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">X: </label><small class="text-muted">Coordenada Este</small>
                                <input type="number" id="cord_x"  class="form-control upd coord" placeholder="Coordenada X"  />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label class="control-label">Y: </label><small class="text-muted">Coordenada Norte</small>
                                <input type="number" id="cord_y" class="form-control upd coord" placeholder="Coordenada Y"  />
                            </div>
                        </div>
                    </div>
                    <script>
                            $('.coord').keyup(function (e) {
                                var val = $(this).val();
                                if(isNaN(val)){
                                     val = val.replace(/[^0-9\.]/g,'');
                                     if(val.split('.').length>2) 
                                         val =val.replace(/\.+$/,"");
                                }
                                $(this).val(val); 
                                });
                        </script>
                    <div class="row">
                        <div class="col-md-12">
                            <h4> 2.12 Servicios Públicos <i class="fas fa-battery-half"></i></h4>
                        </div>
                    </div>

                    <div class="row">
                        <table class="table table-bordered">
                            <thead>
                                <tr style="color:#3498DB">
                                    <th>Tipo</th>
                                    <th>Si-No</th>
                                    <th>Modo</th>
                                    <th>No. de cuenta/contrato</th>
                                    <th>Dirección Recibo SPD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="color:#3498DB">1. Acueducto</td>
                                    <td><select class="form-control upd"  id="acu_dis">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option Value="No">No</option>
                                        </select></td>
                                    <td><select class="form-control upd"  id="acu_mod">
                                            <option value="" >Seleccione el modo</option>
                                            <option value="Provisional">1. Provisional</option>
                                            <option value="Definitivo Privado">2. Definitivo Privado</option>
                                            <option value="Definitivo Público">3. Definitivo Público</option>
                                        </select></td>
                                    <td><input type="text" id="acu_con"  class="form-control upd num_cuenta" placeholder="Ingrese No. de cuenta"  /></td>
                                    <td>
                                     <div class="input-group">
                                        <input type="text" class="form-control upd" id="acu_dir" placeholder="Ingrese la dirección" disabled>
                                        <span class="input-group-btn">
                                            <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(4)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                        </span>
                                    </div>
                                    </td>
                                </tr>
                            <script>
                                $(function () {
                                    $('.num_cuenta').keydown(function (e) {
                                        if (e.shiftKey || e.ctrlKey || e.altKey) {
                                            e.preventDefault();
                                        } else {
                                            var key = e.keyCode;
                                            if (!((key == 8) || (key == 109) || (key >= 95 && key <= 105))) {
                                                e.preventDefault();
                                            }
                                        }
                                    });
                                });
                            </script>


                            <tr>
                                <td style="color:#3498DB">2. Alcantarillado</td>
                                <td><select class="form-control upd"  id="alc_dis">
                                        <option value="" >Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select></td>
                                <td><select class="form-control upd" id="alc_mod">
                                        <option value="" >Seleccione el modo</option>
                                        <option value="Provisional">1. Provisional</option>
                                        <option value="Definitivo Privado">2. Definitivo Privado</option>
                                        <option value="Definitivo Público">3. Definitivo Público</option>
                                    </select></td>
                                <td><input type="text" id="alc_con" class="form-control upd" placeholder="Ingrese No. de cuenta"  /></td>
                                <td>
                                    <div class="input-group">
                                        <input type="text" class="form-control upd" id="alc_dir" placeholder="Ingrese la dirección" disabled>
                                        <span class="input-group-btn">
                                            <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(5)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                        </span>
                                    </div>
                                    
                                    
                                </td>
                            </tr>
                            <tr>
                                <td style="color:#3498DB">3. Aseo</td>
                                <td><select class="form-control upd"  id="ase_dis">
                                        <option value="" >Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select></td>
                                <td><select class="form-control upd" id="ase_mod">
                                        <option value="" >Seleccione el modo</option>
                                        <option value="Provisional">1. Provisional</option>
                                        <option value="Definitivo Privado">2. Definitivo Privado</option>
                                        <option value="Definitivo Público">3. Definitivo Público</option>
                                    </select></td>
                                <td><input type="text" id="ase_con" class="form-control upd" placeholder="Ingrese No. de cuenta"  /></td>
                                <td>
                                    <div class="input-group">
                                        <input type="text" class="form-control upd" id="ase_dir" placeholder="Ingrese la dirección" disabled>
                                        <span class="input-group-btn">
                                            <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(6)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                        </span>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td style="color:#3498DB">4. Energía eléctrica </td>
                                <td><select class="form-control upd"  id="ene_dis">
                                        <option value="" >Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select></td>
                                <td><select class="form-control upd" id="ene_mod">
                                        <option value="" >Seleccione el modo</option>
                                        <option value="Provisional">1. Provisional</option>
                                        <option value="Definitivo Privado">2. Definitivo Privado</option>
                                        <option value="Definitivo Público">3. Definitivo Público</option>
                                    </select></td>
                                <td><input type="text" id="ene_con" class="form-control upd" placeholder="Ingrese No. de cuenta"  /></td>
                                <td>
                                     <div class="input-group">
                                        <input type="text" class="form-control upd" id="ene_dir" placeholder="Ingrese la dirección" disabled>
                                        <span class="input-group-btn">
                                            <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(7)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                        </span>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td style="color:#3498DB">5. Gas Natural</td>
                                <td><select class="form-control upd" id="gas_dis">
                                        <option value="" >Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select></td>
                                <td><select class="form-control upd" id="gas_mod">
                                        <option value="" >Seleccione el modo</option>
                                        <option value="Provisional">1. Provisional</option>
                                        <option value="Definitivo Privado">2. Definitivo Privado</option>
                                        <option value="Definitivo Público">3. Definitivo Público</option>
                                    </select></td>
                                <td><input type="text" id="gas_con"  class="form-control upd" placeholder="Ingrese No. de cuenta"  /></td>
                                <td>
                                    <div class="input-group">
                                        <input type="text" class="form-control upd" id="gas_dir" placeholder="Ingrese la dirección" disabled>
                                        <span class="input-group-btn">
                                            <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(8)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                        </span>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td style="color:#3498DB">6. Teléfono Fijo</td>
                                <td><select class="form-control upd"  id="tel_dis">
                                        <option value="" >Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select></td>
                                <td><select class="form-control upd"  id="tel_mod">
                                        <option value="" >Seleccione el modo</option>
                                        <option value="Provisional">1. Provisional</option>
                                        <option value="Definitivo Privado">2. Definitivo Privado</option>
                                        <option value="Definitivo Público">3. Definitivo Público</option>
                                    </select></td>
                                <td><input type="text" id="tel_con"  class="form-control upd" placeholder="Ingrese No. de cuenta"  /></td>
                                <td>
                                    <div class="input-group">
                                        <input type="text" class="form-control upd" id="tel_dir" placeholder="Ingrese la dirección" disabled>
                                        <span class="input-group-btn">
                                            <button class="btn btn-success upd_btn" type="button" onclick="gen_direccion(9)"><i class="fas fa-pencil-alt"></i> Editar</button>
                                        </span>
                                    </div>  
                                    
                                </td>
                            </tr>
                            </tbody>
                        </table>


                    </div>


                    <button class="btn btn-primary nextBtn btn-lg pull-right upd_btn outline" type="button"  onclick="paso2()"><i class="far fa-save"></i> Guardar</button>

        </div>
        <div id="step-3" class="">
            <legend style="color:#2E86C1"><h3 ><i class="fas fa-building"></i> 3. Descripción de la Vivienda</h3></legend>

                    <div class="row">

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.1 Tipo de Inmueble</label>
                                <select class="form-control upd"  id="tip_inm">
                                    <option value="" >Seleccione...</option>
                                    <option value="Casa">1. Casa</option>
                                    <option value="Casa Lote">2. Casa Lote</option>
                                    <option value="Institucional">3. Institucional</option>
                                    <option value="Industrial">4. Industrial</option>
                                    <option value="Bodega">5. Bodega</option>
                                    <option value="Garaje">6. Garaje</option>
                                    <option value="Oficina">7. Oficina</option>
                                    <option value="Lote">8. Lote</option>
                                    <option value="No Aplica">9. No Aplica</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.2 Número de Pisos</label>
                                <input type="text"  id="num_pis"  class="form-control upd numeric" placeholder="Numero de Pisos"  />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.3 Unidades de vivienda</label>
                                <input type="number" id="unid_viv"  min="0" class="form-control upd" placeholder="Numero de viviendas"  />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.4 Estado de la construcción</label>
                                <select class="form-control upd" id="est_con1">
                                    <option value="" >Seleccione...</option>
                                    <option value="Completa">1. Completa</option>
                                    <option value="Incompleta">2. Incompleta</option>
                                </select>
                                <select class="form-control upd"  id="est_con2">
                                    <option value="" >Seleccione...</option>
                                    <option value="Habitada">1. Habitada</option>
                                    <option value="Deshabilitada">2. Deshabilitada</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.5 Etapa de construcción</label>
                                <select class="form-control upd"  id="etp_cons">
                                    <option value="" >Seleccione...</option>
                                    <option value="Obra Provisional">1. Obra Provisional</option>
                                    <option value="Obra negra">2. Obra negra</option>
                                    <option value="Obra gris">3. Obra gris</option>
                                    <option value="Obra Blanca">4. Obra Blanca</option>
                                    <option value="No Aplica">5. No Aplica</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.6 Uso del predio</label>
                                <select class="form-control upd"  id="uso_pred">
                                    <option value="" >Seleccione...</option>
                                    <option value="Residencial">1. Residencial</option>
                                    <option value="Comercial">2. Comercial</option>
                                    <option value="Mixto">3. Mixto</option>
                                    <option value="Institucional">4. Institucional</option>
                                    <option value="No Aplica">5. No Aplica</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.7 Cimentación</label>
                                <select class="form-control upd"  id="cimen">
                                    <option value="" >Seleccione...</option>
                                    <option value="Zapatas">1. Zapatas</option>
                                    <option value="Vigas corridas">2. Vigas corridas</option>
                                    <option value="Placa flotante">3. Placa flotante</option>
                                    <option value="Muro confinamiento">4. Muro confinamiento</option>
                                    <option value="Ninguna">5. Ninguna</option>
                                    <option value="No Identificada">6. No Identificada</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.8 Estructura</label>
                                <select class="form-control upd"  id="estruct">
                                    <option value="" >Seleccione...</option>
                                    <option value="Pórtico">1. Pórtico</option>
                                    <option value="Mamposteria confinada">2. Mamposteria confinada</option>
                                    <option value="Mamposteria parcialmente confinada">3. Mamposteria parcialmente confinada</option>
                                    <option value="Mamposteria Simple">4. Mamposteria Simple</option>
                                    <option value="Madera">5. Madera</option>
                                    <option value="Prefabricado">6. Prefabricado</option>
                                    <option value="Material de recuperación">7. Material de recuperación</option>
                                    <option value="No Aplica">8. No Aplica</option>
                                </select>
                            </div>
                        </div>


                    </div>


                    <div class="row">

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.9 Material de Paredes</label>
                                <select class="form-control upd"  id="mat_par">
                                    <option value="" >Seleccione...</option>
                                    <option value="Material de recuperación">1. Material de recuperación</option>
                                    <option value="Madera, guadua, caña, otro vegetal">2. Madera, guadua, caña, otro vegetal</option>
                                    <option value="Bahareque">3. Bahareque</option>
                                    <option value="Adobe o tapia pisada">4. Adobe o tapia pisada</option>
                                    <option value="Ladrillo, bloque o prefabricado">5. Ladrillo, bloque o prefabricado</option>
                                    <option value="Concreto reforzado">6. Concreto reforzado</option>
                                    <option value="Material metálico">7. Material metálico</option>
                                    <option value="No Aplica">8. No Aplica</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.10 Material de Pisos</label>
                                <select class="form-control upd"  id="mat_pis">
                                    <option value="" >Seleccione...</option>
                                    <option value="Tierra, arena">1. Tierra, arena</option>
                                    <option value="Mortero / mineral">2. Mortero / mineral</option>
                                    <option value="Madera burda, otro veg">3. Madera burda, otro veg.</option>
                                    <option value="Baldosin, ladrillo, vinilo">4. Baldosin, ladrillo, vinilo</option>
                                    <option value="Madera pulida, alfombra">5. Madera pulida, alfombra</option>
                                    <option value="No Aplica">6. No Aplica</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group ">
                                <label class="control-label">3.11 Material de Cubierta</label>
                                <select class="form-control upd"  id="mat_cub">
                                    <option value="" >Seleccione...</option>
                                    <option value="Material de recuperación">1. Material de recuperación</option>
                                    <option value="Teja de Zinc">2. Teja de Zinc</option>
                                    <option value="Teja de asbesto cemento">3. Teja de asbesto cemento</option>
                                    <option value="Teja plástica">4. Teja plástica </option>
                                    <option value="Placa de concreto reforzado">5. Placa de concreto reforzado</option>
                                    <option value="Placa fácil">6. Placa fácil</option>
                                    <option value="No Aplica">7. No Aplica</option>
                                </select>
                            </div>
                        </div>


                    </div>



                    <div class="row">
                        <table class="table table-bordered">
                           <thead>
                            <tr>
                              <th  colspan="4"><p> <b> 3.12 Distribución de la vivienda <i class="fas fa-home"></i></b></p></th>
                            </tr>
                          </thead>
                            <tbody>
                                <tr>
                                    <td>Número de habitaciones</td>
                                    <td><input type="number" id="num_hab"  min="0" class="form-control upd" placeholder="No. Habitaciones"  /></td>
                                    <td>Número de Garajes</td>
                                    <td><input type="number" id="num_gar"  min="0" class="form-control upd" placeholder="No. Garajes"  /></td>
                                </tr>
                                <tr>
                                    <td>Número de unidades sanitarias</td>
                                    <td><input type="number" id="num_san"  min="0" class="form-control upd" placeholder="No. unidades sanitarias"  /></td>
                                    <td>Número de Locales</td>
                                    <td><input type="number" id="num_loc"  min="0" class="form-control upd" placeholder="No. Locales"  /></td>
                                </tr>
                                <tr>
                                    <td>Número de cocinas</td>
                                    <td><input type="number" id="num_coc"  min="0"  class="form-control upd" placeholder="No. Cocinas"  /></td>
                                    <td>Número de Bodegas</td>
                                    <td><input type="number" id="num_bod"  min="0" class="form-control upd" placeholder="No. Bodegas"  /></td>
                                </tr>
                                <tr>
                                    <td>Número de Lavaderos</td>
                                    <td><input type="number" id="num_lav"  min="0" class="form-control upd" placeholder="No. Lavaderos"  /></td>

                                </tr>
                                <tr>
                                    <td>Número de Patios</td>
                                    <td><input type="number" id="num_pat"  min="0" class="form-control upd" placeholder="No. Patios"  /></td>
                                    <td>Todo es un espacio Multiple?</td>
                                    <td><select class="form-control upd"  id="esp_mul" >
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td>Zona Social (Sala, Comedor, Estar)</td>
                                    <td><select class="form-control upd"  id="zon_soc">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                    <td>Tiene criadero de Animales?</td>
                                    <td><select class="form-control upd"  id="cri_ani">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="row">
                        <table class="table table-bordered">
                           <thead>
                            <tr>
                              <th colspan="2"><p> <b> 3.13 Caracteristicas de la cocina <i class="fas fa-utensils"></i></b><p></th>
                              <th colspan="2"> <p> <b> 3.14 Caracteristicas de la Unidad Sanitaria <i class="fas fa-bath"></i></b><p></th>
                            </tr>
                          </thead>
                            <tbody>
                                <tr>
                                    <td>1. Se encuentra Enchapada?</td>
                                    <td><select class="form-control upd"  id="coc_enc">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                    <td>1. Se encuentra Enchapado?</td>
                                    <td><select class="form-control upd" id="san_enc">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td>2. Tiene lavaplatos?</td>
                                    <td><select class="form-control upd"  id="coc_lav">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                    <td>2. Tiene Ducha?</td>
                                    <td><select class="form-control upd"  id="san_duc">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>                                        
                                </tr>
                                <tr>
                                    <td>3. Tiene meson?</td>
                                    <td><select class="form-control upd"  id="coc_mes">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                    <td>3. Tiene aparatos sanitarios?</td>
                                    <td><select class="form-control upd"  id="san_apar">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>                                        
                                </tr>
                                <tr>
                                    <td>4. Cocina independiente?</td>
                                    <td><select class="form-control upd"  id="coc_ind">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>
                                    <td>4. Los desagues conectan con Alcantarillado?</td>
                                    <td><select class="form-control upd" id="san_des">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>                                        
                                </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td>5. Los desagues conectan con Pozo Séptico?</td>
                                    <td><select class="form-control upd" id="san_poz">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>                                       
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>6. Los desagues evacuan a la ladera?</td>
                                    <td><select class="form-control upd"  id="san_lad">
                                            <option value="" >Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select></td>                                   
                                </tr>

                            </tbody>
                        </table>


                    </div>







                    <button class="btn btn-primary nextBtn btn-lg pull-right upd_btn outline" type="button" onclick="paso3()" ><i class="far fa-save"></i> Guardar</button>

        </div>
        <div id="step-4" class="">

            <legend> <h3 style="color:#2E86C1"><i class="fas fa-map"></i> 4. Planos de la vivienda</h3></legend>

                    <p>Para realizar el plano de ubicación de la vivienda, usted puede hacer uso de la herramienta de dibujo de la vivienda sobre el mapa ó puede subir
                        directamente la imagen si cuenta con ella.</p>

                    <button class="btn btn-primary upd_btn" type="button" id="showmap">Ver Mapa</button>

                    <div id="myDIV" style="display:none">    
                        <div id="map" style="width: 100%;height:580px;"> </div>                        
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                         <iframe src="" id="arc_visor" height="600" width="95%"></iframe>
                        </div>                        
                    </div>


                    <script>
                        $("#showmap").click(function () {
                            $("#myDIV").toggle("slow");
                        });


                    </script>                   



                    <div class="row">

                        <div class="col-md-12">

                            <div class="form-group">                                 
                                <label class="upd_btn">Cargar Imagen</label>
                                <p class="upd_btn">Subir formatos de imágen .jpg ó .png </p>
                                <div class="input-group upd_btn">
                                    <span class="input-group-btn">
                                        <span class="btn btn-danger btn-file upd_btn">
                                            Cargar... <input type="file" id="imgInp1">
                                        </span>
                                    </span>
                                    <input type="text" class="form-control upd" readonly>
                                </div>

                                <div style="margin:auto; width:800px; height:500px; box-shadow: 10px 10px 5px #888888;" id="divp1">
                                    <button type="button" onclick="close_div2(this.id)" class="btn btn-default upd_btn" style="z-index:10;position:absolute">X</button> 
                                    <img id='img_plano1' src='#' style="width:780px; height:480px;left:10px; top:10px;position:relative"/>
                                    <!--<button style="z-index:10;position:relative" type="button" class="btn btn-success" onclick="RotarPlano1()"><span class="glyphicon glyphicon-repeat"></span>Rotar</button>-->
                                    <a href=""  id="desimgp1" download="Plano_Ubicacion.jpg" style="position:relative">
                                        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>                                   
                                    </a> 


                                </div>
                                <canvas id="canvas" width=400 height=400 style="display:none"></canvas>
                                <script>

                                    var canvas = document.getElementById("canvas");
                                    var ctx = canvas.getContext("2d");

                                    var image = document.createElement("img");


                                    function rotcanvas(angulo, imgIndex) {

                                        image.onload = function () {
                                            canvas.width = this.width;
                                            canvas.height = this.height;
                                            ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.width / 2);

                                        };
                                        image.src = $('#' + (imgIndex)).attr('src');

                                        drawRotated(angulo);
                                        var dataURL = canvas.toDataURL();

                                        return dataURL;
                                    }

                                    function drawRotated(degrees) {
                                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                                        ctx.save();
                                        ctx.translate(canvas.width / 2, canvas.height / 2);
                                        ctx.rotate(degrees * Math.PI / 180);
                                        ctx.drawImage(image, -image.width / 2, -image.width / 2);
                                        ctx.restore();
                                    }



                                    $('#desimgp1').click(function () {
                                        var src = $('#img_plano1').attr('src');
                                        $("#desimgp1").attr("href", src);
                                    });

                                    function close_div2(identify) {

                                        $('#img_plano1').attr('src', "data:image/jpeg;base64,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");

                                    }
                                    var angle = 0;
                                    function RotarPlano1() {
                                        angle += 90;
                                        $('#img_plano1').attr('src', rotcanvas(angle, 'img_plano1'));
                                    }
                                </script>



                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="myModalu" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Plano Ubicación</h4>
                                </div>
                                <div class="modal-body">
                                    <div id="logu"> <img id="img_ubica"  onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                </div>
                                <div class="modal-footer">
                                    <a href="" id="desimgu" download="Ubicacion.jpg">
                                        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                    </a>                                                
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                    <script>
                                        $('#desimgu').click(function () {
                                            var src = $('#img_plano1').attr('src');
                                            $("#desimgu").attr("href", src);
                                        });
                                    </script>


                                </div>
                            </div>

                        </div>
                    </div>



                    <h4>4.2 Plano de Vivienda vista superior</h4> 

                    <p>Para realizar el plano de la vivienda (Vista superior), usted cuenta con dos opciones, la primera es hacer uso de la herramienta de edición ó cargar directaqmente
                        la imagen si cuenta con esta.</p>


                    <button class="btn btn-primary upd_btn" type="button" id="showmap1">Ver Herramienta de edición</button>

                    <div id="myDIV1" class="upd_btn">                    
                        <div class="my-drawing"></div>

                    </div>



                    <div class="row upd_btn">
                        <div class="col-md-12">                         
                            <a href="" id="png" download="Plano.png">
                                <button type="button" class="btn btn-success"><span class="glyphicon glyphicon-save"></span>Descargar Plano Vista Superior</button>
                            </a> 
                        </div>
                    </div>
 <!--
                    <div class="row upd_btn">
                        <p> Alternativa 2 para elaborar el plano de vista superior, recuerde exportar su plano en formato .jpg </p>
                        <div class="col-md-12">

                         <iframe src="https://vectr.com/new" id="flowplanner" height="600" width="1200"></iframe>
                        </div>                        
                    </div>
-->
                    <script>
                        $("#showmap1").click(function () {
                            $("#myDIV1").toggle("slow");
                        });

                        $('#png').click(function (e) {

                            var imgplano = lc.getImage().toDataURL("image/png").replace("image/png", "image/octet-stream");

                            $('#png').attr("href", imgplano);

                        });

                    </script>  



                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="upd_btn">Cargar Imagen</label>
                                <p class="upd_btn">Subir formatos de imágen .jpg ó .png </p>
                                <div class="input-group upd_btn">
                                    <span class="input-group-btn">
                                        <span class="btn btn-danger btn-file upd_btn">
                                            Cargar... <input type="file" id="imgInp">
                                        </span>
                                    </span>
                                    <input type="text" class="form-control upd" readonly>
                                </div>

                                <div style="margin:auto; width:500px; height:500px; box-shadow: 10px 10px 5px #888888;" id="divp">
                                    <button type="button" onclick="close_div1(this.id)" class="btn btn-default upd_btn" id="botonp" style="z-index:10;position:absolute">X</button> 
                                    <img id='img_plano' src="#" alt="" style="width:480px; height:480px;left:10px; top:10px;position:relative"/>
                                    <!--<button style="z-index:10;position:relative" type="button" class="btn btn-success" onclick="RotarPlano()"><span class="glyphicon glyphicon-repeat"></span>Rotar</button>-->
                                    <a href=""  id="desimgp" download="Plano.jpg" style="position:relative">
                                        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>                                   
                                    </a> 

                                </div>

                                <script>

                                    $('#desimgp').click(function () {
                                        var src = $('#img_plano').attr('src');
                                        $("#desimgp").attr("href", src);
                                    });

                                    function close_div1(identify) {
                                        $('#img_plano').attr('src', "data:image/jpeg;base64,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");
                                    }
                                    var angle = 0;
                                    function RotarPlano() {
                                        angle += 90;
                                        $('#img_plano').attr('src', rotcanvas(angle, 'img_plano'));
                                    }
                                </script>



                            </div>
                        </div>
                    </div>



                    <div class="modal fade" id="myModalp" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Plano Vivienda (Vista Superior)</h4>
                                </div>
                                <div class="modal-body">
                                    <div id="logp"> <img id="img_viv" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                </div>
                                <div class="modal-footer">
                                    <a href="" id="desimgpl" download="Plano.png">
                                        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                    </a>                                                
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                    <script>
                                        $('#desimgpl').click(function () {
                                            var src = $('#img_plano').attr('src');
                                            $("#desimgpl").attr("href", src);
                                        });
                                    </script>


                                </div>
                            </div>

                        </div>
                    </div>



                    <script>




                    </script>



                    <button class="btn btn-primary nextBtn btn-lg pull-right upd_btn outline" type="button" onclick="paso4()" ><i class="far fa-save"></i> Guardar</button>

                    <script >


                        function paso4() {

                            $identificador = document.getElementById("identificador");

                            var plano = JSON.stringify(lc.getSnapshot());

                            var st1 = /\\"/g;

                            var pl1 = plano.replace(st1, "@");
                            var foto_p = document.getElementById('img_plano');
                            var foto_ubicacion = document.getElementById('img_plano1');

                            foto_p = String(foto_p.src);

                            foto_ubicacion = String(foto_ubicacion.src);

                            
                            function img_ubi(callback){
                                Jimp.read(foto_ubicacion).then(function (lenna) {

                                lenna.resize(500, 500).getBase64(Jimp.MIME_PNG, function (err, src) {
                                    foto_ubicacion=src;
                                   callback();
                                  });

                            });

                            }
                            function img_plano(callback){
                                Jimp.read(foto_p).then(function (lenna) {

                                lenna.resize(500, 500).getBase64(Jimp.MIME_PNG, function (err, src) { 
                                   foto_p=src;
                                   callback();
                                  });

                            });

                            }
                            img_ubi(function(){
                                img_plano(function(){
                                $datos = {
                                    op: 'ficha_4',
                                    identificador: $($identificador).val(),
                                    plano: pl1,
                                    foto_plano: foto_p,
                                    foto_ubicacion: foto_ubicacion
                                };

                                $.ajax({
                                    type: "POST",
                                    url: "GestionConsultas",
                                    data: $datos,
                                    dataType: "json",
                                    async: true,
                                    success: function (response) {
                                        if (response)
                                        {
                                           alertify.success("Información almacenada correctamente");

                                        }
                                    }
                                });

                                     upd_user();
                            });
                            });


                       
                        }

                    </script>

        </div>
        <div id="step-5" class="">
            <legend><h3 style="color:#2E86C1"><i class="fas fa-camera-retro"></i> 5. Fotografias de la vivienda</h3></legend>

                    <p>En la siguiente sección, usted podrá asignar cada una de las fotografias al formulario técnico, recuerde que es una imágen
                        por cada lugar, para un total de 6 imágenes. <b>Subir formatos de imágen .jpg ó .png </b></p>



                    <div class="row">
                        <div id="folder" class="col-md-12" style='display: none;'>

                        </div>            
                    </div>


                    <div class="row">
                        <div class="col-md-12" style="display:none">
                            <label class="btn btn-success btn-file control-label upd_btn">
                              <i class="fas fa-upload"></i>  Cargar Imágen<input type='file' id="imgu" data-max-size="4000000" style="display: none;"/>
                            </label>
                        </div>

                    </div>



<canvas id="canvas_1"  width=300 style="display:none"></canvas>
<canvas id="canvas_2"  width=300 style="display:none"></canvas>
<canvas id="canvas_3"  width=300 style="display:none"></canvas>
<canvas id="canvas_4"  width=300 style="display:none"></canvas>
<canvas id="canvas_5"  width=300 style="display:none"></canvas>
<canvas id="canvas_6"  width=300 style="display:none"></canvas>



                    <div class="row">


                        <div class="col-md-6">


                            <div class="form-group ">                      

                                <label class="btn btn-default btn-file control-label upd_btn" style="display: none;">
                                    Cargar <input type='file' id="img1" style="display: none;" />
                                </label>


                                <div class="modal fade" id="myModal1" role="dialog">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                <h4 class="modal-title">Exterior/Entorno</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div class="logo" id="log1"> <img id="img_ext" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                            </div>
                                            <div class="modal-footer">


                                                <a href="" id="desimg1" download="Exterior_Entorno.jpg">
                                                    <button type="button" class="btn btn-default upd_btn"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                                </a>                                                
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                                <script>
                                                    $('#desimg1').click(function () {
                                                        var src = $('#img_ext').attr('src');
                                                        $("#desimg1").attr("href", src);
                                                    });
                                                </script>


                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>


                        <div class="col-md-6">

                            <label class="btn btn-default btn-file upd_btn" style="display: none;">
                                Cargar <input type='file' id="img2" style="display: none;" />
                            </label>



                            <div class="modal fade" id="myModal2" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Nomenclatura</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="logo" id="log2"> <img id="img_nom" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                        </div>
                                        <div class="modal-footer">
                                            <a href="" id="desimg2" download="Nomenclatura.jpg">
                                                <button type="button" class="btn btn-default "><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                            </a>                                                
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                            <script>
                                                $('#desimg2').click(function () {
                                                    var src = $('#img_nom').attr('src');
                                                    $("#desimg2").attr("href", src);
                                                });
                                            </script>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>




                    <div class="row">
                        <div class="col-md-6">

                            <label class="btn btn-default btn-file upd_btn" style="display: none;">
                                Cargar <input type='file' id="img3" style="display: none;" />
                            </label>



                            <div class="modal fade" id="myModal3" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Espacio Social</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="logo" id="log3"> <img id="img_esp" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                        </div>
                                        <div class="modal-footer">
                                            <a href="" id="desimg3" download="Espacio_Social.jpg">
                                                <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                            </a>                                                
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                            <script>
                                                $('#desimg3').click(function () {
                                                    var src = $('#img_esp').attr('src');
                                                    $("#desimg3").attr("href", src);
                                                });
                                            </script>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">

                            <label class="btn btn-default btn-file upd_btn" style="display: none;">
                                Cargar <input type='file' id="img4" style="display: none;" />
                            </label>



                            <div class="modal fade" id="myModal4" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Habitaciones</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="logo" id="log4"> <img id="img_hab" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                        </div>
                                        <div class="modal-footer">
                                            <a href="" id="desimg4" download="Habitaciones.jpg">
                                                <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                            </a>                                                
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                            <script>
                                                $('#desimg4').click(function () {
                                                    var src = $('#img_hab').attr('src');
                                                    $("#desimg4").attr("href", src);
                                                });
                                            </script>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>



                    <div class="row">
                        <div class="col-md-6">

                            <label class="btn btn-default btn-file upd_btn" style="display: none;">
                                Cargar <input type='file' id="img5" style="display: none;" />
                            </label>



                            <div class="modal fade" id="myModal5" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Cocina</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="logo" id="log5"> <img id="img_coc" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                        </div>
                                        <div class="modal-footer">
                                            <a href="" id="desimg5" download="Cocina.jpg">
                                                <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                            </a>                                                
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                            <script>
                                                $('#desimg5').click(function () {
                                                    var src = $('#img_coc').attr('src');
                                                    $("#desimg5").attr("href", src);
                                                });
                                            </script>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">

                            <label class="btn btn-default btn-file upd_btn" style="display: none;">
                                Cargar <input type='file' id="img6" style="display: none;" />
                            </label>



                            <div class="modal fade" id="myModal6" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Unidad Sanitaria</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div class="logo" id="log6"> <img id="img_usa" onerror="arguments[0].currentTarget.style.display='none'"/></div>
                                        </div>
                                        <div class="modal-footer">
                                            <a href="" id="desimg6" download="Unidad_Sanitaria.jpg">
                                                <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-save"></span>Descargar</button>
                                            </a>                                                
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                                
                                            <script>
                                                $('#desimg6').click(function () {
                                                    var src = $('#img_usa').attr('src');
                                                    $("#desimg6").attr("href", src);
                                                });
                                            </script>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>



                    <div class="row">
                        <div class="col-md-4"> 
                         <div class="form-group">
                        <p><b>Imágen Exterior/Entorno</b></p>
                                <input id="file-1" name="file-1" type="file" class="file kartik" accept="image/x-png,image/gif,image/jpeg">
                            </div>
                        </div>
                        
                        <div class="col-md-4"> 
                            <div class="form-group">
                                <p><b>Imágen Espacio Social</b></p>   
                                <input id="file-2" name="file-2" type="file" class="file kartik" accept="image/x-png,image/gif,image/jpeg">
                        </div>
                            </div>
                     
                        <div class="col-md-4"> 
                         <div class="form-group">
                        <p><b>Cocina</b></p>
                                <input id="file-3" name="file-3" type="file" class="file kartik" accept="image/x-png,image/gif,image/jpeg">
                            </div>
                        </div>
                           </div>
                    <div class="row">
                        <div class="col-md-4"> 
                            <div class="form-group">
                                <p><b>Nomenclatura</b></p>   
                                <input id="file-4" name="file-4" type="file" class="file kartik" accept="image/x-png,image/gif,image/jpeg">
                        </div>
                            </div>
                
                        <div class="col-md-4"> 
                         <div class="form-group">
                        <p><b>Habitaciones</b></p>
                                <input id="file-5" name="file-5" type="file" class="file kartik" accept="image/x-png,image/gif,image/jpeg">
                            </div>
                        </div>
                        
                        <div class="col-md-4"> 
                            <div class="form-group">
                                <p><b>Unidad Sanitaria</b></p>   
                                <input id="file-6" name="file-6" type="file" class="file kartik" accept="image/x-png,image/gif,image/jpeg">
                        </div>
                            </div>
                        </div>             
            
  

                    <canvas id="canvas_pru" style="display:none" width=300></canvas>
                    






                    <!--          
                                
                <img id="img_prueba"  src="" class="img-responsive" alt="Cinque Terre">
           
            
                <script>
                  var img_prueba='data:image/jpeg;base64,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';
              
                  Jimp.read(img_prueba).then(function (lenna) {
                        
                      lenna.resize(256, 256).getBase64(Jimp.MIME_PNG, function (err, src) { 
                         $("#img_prueba").attr("src",src);
                        });
                        
                  });
                  
          
                  
                    </script>
                              
                              
                    -->       

        </div>
        <div id="step-6" class="">

            <legend><h3 style="color:#2E86C1"><i class="far fa-file-alt"></i> 6. Observaciones</h3></legend>

                    <div class="row">

                        <div class="col-md-12">
                            <div class="form-group ">
                                <label class="control-label" >Observaciones:</label>
                                <textarea id="observ" class="form-control upd" style="text-transform: uppercase" rows="6"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group ">
                                <p> <b> NOTAS: </b> Las fotografías se deben tomar por cada unidad habitacional encontrada,
                                    en una foto debe aparecer alguien del grupo familiar ojala algún mayor. Incluir las
                                    fotografías relacionadas y las demás que sean necesarias.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <p><b>Elaboró</b></p>
                            <div class="form-group form-inline ">
                                <label class="control-label">Nombre:</label>
                                <input id="nom_ela" type="text"   class="form-control upd" placeholder=""  />
                            </div>
                            <div class="form-group form-inline ">
                                <label  class="control-label">Cargo:</label>
                                <input id="car_ela" type="text"   class="form-control upd" placeholder=""  />
                            </div>
                        </div>

                        <div class="col-md-6" style="display:none">
                            <p><b>Revisó</b></p>
                            <div class="form-group form-inline ">
                                <label  class="control-label">Nombre:</label>
                                <input  id="nom_rev" type="text"   class="form-control upd" placeholder=""  />
                            </div>
                            <div class="form-group form-inline ">
                                <label  class="control-label">Cargo:</label>
                                <input id="car_rev" type="text"   class="form-control upd" placeholder=""  />
                            </div>
                        </div>

                    </div>
            
                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn btn-primary btn-lg pull-right upd_btn outline" type="button" id='fin_btn' onclick="paso6()" ><i class="far fa-save"></i> Guardar</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn btn-danger btn-lg pull-right" type="button" id="enviar_revision"> <i class="fa fa-send-o"></i> Enviar a revisión</button>
                        </div>
                    </div>
                     
                            

                    <hr>
                   
                      

                              
             
                    <p id="msg_ultimo_upd"></p>
                    <button type="button" class="btn btn-default" id="revisar_aldemar" style="display:none"><i class="glyphicon glyphicon-ok"></i> Aprobar</button>
                    <br>
                    <button type="button" class="btn btn-danger" id="no_revisar_aldemar" style="display:none"><i class="glyphicon glyphicon-ok"></i>Quitar aprobación</button>
                    <p id="msg_aprobado_por">Aprobada por: </p>
                    <p id="msg_fecha_aprobado">Fecha de aprobación: </p>




                    <script>
                        if (usuario_usuario === 'agalviss') {
                            $('#revisar_aldemar').css("display", "block");
                        }
                        $('#revisar_aldemar').click(function () {
                            paso7();
                            envio_de_notificacion(identificador,1,15,16,usuario_identificador,76,1,"Por favor revisar la cartografia","");
                            window.top.location.reload();
                          
                        });
                    </script>


                    <div class="modal fade" id="myModalf" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabelf" style="font-weight: bold;">Almacenamiento Exitoso</h4>
                                </div>
                                <div class="modal-body">
                                    Formulario técnico almacenado satisfactoriamente.
                                </div>
                                <div class="modal-footer">
                                    <button id="closeform" type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <script>
                        $('#closeform').click(function () {
                            window.top.location.reload();
                        });
                    </script>

        </div>
    </div>
</div>
        
        
<script type="text/javascript">
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
</script>
        



        <script>


            var backgroundImage = new Image();
            backgroundImage.src = 'img/grid.png';

            var lc = LC.init(
                    document.getElementsByClassName('my-drawing')[0],
                    {imageURLPrefix: 'literallycanvas-0.4.14/img', backgroundColor: '#fff',
                        backgroundShapes: [
                            LC.createShape(
                                    'Image', {x: 0, y: 0, image: backgroundImage, scale: 0.4})
                        ]}

            );


        </script>


        <script>

        var sector="";
        
            function buscar_tecnica(identificador) {

                $buscar = document.getElementById("buscar");
                var resultados;

                $datos = {
                    op: 'buscar_ficha',
                    identificador: identificador,
                    contrato_user: usuario_usuario
                };


                
    function getDateFormat(date) {
     if (date === '') {
         return '';
     } else {

         var today = new Date(date);
         var mes=today.getMonth()+1;
         return  today.getUTCDate() + '-'+mes +'-' + today.getUTCFullYear();  
     }
 }; 


                $.ajax({
                    type: "GET",
                    url: "GestionConsultas",
                    data: $datos,
                    dataType: "json",
                    async: false,
                    success: function (response) {
                        if (response.length > 0)
                        {
                            resultados = response[0];

                            sector = (resultados["sector"] ? resultados["sector"] : '');
                            sector = sector.toUpperCase();

                            if (sector === "VEREDITAS" || sector === "GAVILANES") {
                                $(".num_ficha").css('display', 'none');
                            }
                            if(resultados["fecha_elaboracion"]){
                                document.getElementById("fecha_elaboracion").value = (resultados["fecha_elaboracion"]?resultados["fecha_elaboracion"]:'');
                            }
                            
                            document.getElementById("identificador").value = resultados["identificador"];

                            document.getElementById("nom3_1").value = (resultados["nom3_1"] ? resultados["nom3_1"] : '');
                            document.getElementById("nom3_2").value = (resultados["nom3_2"] ? resultados["nom3_2"] : '');
                            document.getElementById("ape3_1").value = (resultados["ape3_1"] ? resultados["ape3_1"] : '');
                            document.getElementById("ape3_2").value = (resultados["ape3_2"] ? resultados["ape3_2"] : '');


                            document.getElementById("cedula_visita").value = (resultados["cedula_visita"] ? resultados["cedula_visita"] : '');
                            document.getElementById("nom1_1").value = (resultados["nom1_1"] ? resultados["nom1_1"] : '');
                            document.getElementById("nom1_2").value = (resultados["nom1_2"] ? resultados["nom1_2"] : '');
                            document.getElementById("ape1_1").value = (resultados["ape1_1"] ? resultados["ape1_1"] : '');
                            document.getElementById("ape1_2").value = (resultados["ape1_2"] ? resultados["ape1_2"] : '');
                            document.getElementById("cedula_prin").value = (resultados["cedula_prin"] ? resultados["cedula_prin"] : '');

                            document.getElementById("parentesco").value = (resultados["parentesco"] ? resultados["parentesco"] : '');
                            document.getElementById("nom2_1").value = (resultados["nom2_1"] ? resultados["nom2_1"] : '');
                            document.getElementById("nom2_2").value = (resultados["nom2_2"] ? resultados["nom2_2"] : '');
                            document.getElementById("ape2_1").value = (resultados["ape2_1"] ? resultados["ape2_1"] : '');
                            document.getElementById("ape2_2").value = (resultados["ape2_2"] ? resultados["ape2_2"] : '');
                            document.getElementById("cedula_sec").value = (resultados["cedula_sec"] ? resultados["cedula_sec"] : '');
                            document.getElementById("telefono1").value = (resultados["telefono1"] ? resultados["telefono1"] : '');
                            document.getElementById("telefono2").value = (resultados["telefono2"] ? resultados["telefono2"] : '');
                            document.getElementById("localidad").value = (resultados["localidad"] ? resultados["localidad"] : '');
                            document.getElementById("barrio").value = (resultados["barrio"] ? resultados["barrio"] : '');
                            document.getElementById("upz").value = (resultados["upz"] ? resultados["upz"] : '');

                            document.getElementById("dir_campo").value = (resultados["dir_campo"] ? resultados["dir_campo"] : '');
                            document.getElementById("dir_reco").value = (resultados["dir_reco"] ? resultados["dir_reco"] : '');
                            document.getElementById("man_reco").value = (resultados["man_reco"] ? resultados["man_reco"] : '');
                            document.getElementById("lot_reco").value = (resultados["lot_reco"] ? resultados["lot_reco"] : '');
                            document.getElementById("dir_cat").value = (resultados["dir_cat"] ? resultados["dir_cat"] : '');
                            document.getElementById("man_cat").value = (resultados["man_cat"] ? resultados["man_cat"] : '');
                            document.getElementById("lot_cat").value = (resultados["lot_cat"] ? resultados["lot_cat"] : '');
                            document.getElementById("chip").value = (resultados["chip"] ? resultados["chip"] : '');
                            document.getElementById("area_ter").value = (resultados["area_ter"] ? resultados["area_ter"] : '');
                            document.getElementById("area_con").value = (resultados["area_con"] ? resultados["area_con"] : '');
                            document.getElementById("lin_nor").value = (resultados["lin_nor"] ? resultados["lin_nor"] : '');
                            document.getElementById("lin_sur").value = (resultados["lin_sur"] ? resultados["lin_sur"] : '');
                            document.getElementById("lin_ori").value = (resultados["lin_ori"] ? resultados["lin_ori"] : '');
                            document.getElementById("lin_occ").value = (resultados["lin_occ"] ? resultados["lin_occ"] : '');
                            document.getElementById("cord_x").value = (resultados["cord_x"] ? resultados["cord_x"] : '');
                            document.getElementById("cord_y").value = (resultados["cord_y"] ? resultados["cord_y"] : '');
                            document.getElementById("acu_dis").value = (resultados["acu_dis"] ? resultados["acu_dis"] : '');
                            document.getElementById("acu_mod").value = (resultados["acu_mod"] ? resultados["acu_mod"] : '');
                            document.getElementById("acu_con").value = (resultados["acu_con"] ? resultados["acu_con"] : '');
                            console.log((resultados["acu_dis"] ? resultados["acu_dis"] : ''))
                            document.getElementById("acu_dir").value = (resultados["acu_dir"] ? resultados["acu_dir"] : '');
                            document.getElementById("alc_dis").value = (resultados["alc_dis"] ? resultados["alc_dis"] : '');
                            document.getElementById("alc_mod").value = (resultados["alc_mod"] ? resultados["alc_mod"] : '');
                            document.getElementById("alc_con").value = (resultados["alc_con"] ? resultados["alc_con"] : '');
                            document.getElementById("alc_dir").value = (resultados["alc_dir"] ? resultados["alc_dir"] : '');
                            document.getElementById("ase_dis").value = (resultados["ase_dis"] ? resultados["ase_dis"] : '');
                            document.getElementById("ase_mod").value = (resultados["ase_mod"] ? resultados["ase_mod"] : '');
                            document.getElementById("ase_con").value = (resultados["ase_con"] ? resultados["ase_con"] : '');
                            document.getElementById("ase_dir").value = (resultados["ase_dir"] ? resultados["ase_dir"] : '');
                            document.getElementById("ene_dis").value = (resultados["ene_dis"] ? resultados["ene_dis"] : '');
                            document.getElementById("ene_mod").value = (resultados["ene_mod"] ? resultados["ene_mod"] : '');
                            document.getElementById("ene_con").value = (resultados["ene_con"] ? resultados["ene_con"] : '');
                            document.getElementById("ene_dir").value = (resultados["ene_dir"] ? resultados["ene_dir"] : '');
                            document.getElementById("gas_dis").value = (resultados["gas_dis"] ? resultados["gas_dis"] : '');
                            document.getElementById("gas_mod").value = (resultados["gas_mod"] ? resultados["gas_mod"] : '');
                            document.getElementById("gas_con").value = (resultados["gas_con"] ? resultados["gas_con"] : '');
                            document.getElementById("gas_dir").value = (resultados["gas_dir"] ? resultados["gas_dir"] : '');
                            document.getElementById("tel_dis").value = (resultados["tel_dis"] ? resultados["tel_dis"] : '');
                            document.getElementById("tel_mod").value = (resultados["tel_mod"] ? resultados["tel_mod"] : '');
                            document.getElementById("tel_con").value = (resultados["tel_con"] ? resultados["tel_con"] : '');
                            document.getElementById("tel_dir").value = (resultados["tel_dir"] ? resultados["tel_dir"] : '');

                            document.getElementById("tip_inm").value = (resultados["tip_inm"] ? resultados["tip_inm"] : '');
                            document.getElementById("num_pis").value = (resultados["num_pis"] ? resultados["num_pis"] : '');
                            document.getElementById("unid_viv").value = (resultados["unid_viv"] ? resultados["unid_viv"] : '');
                            document.getElementById("est_con1").value = (resultados["est_con1"] ? resultados["est_con1"] : '');
                            document.getElementById("est_con2").value = (resultados["est_con2"] ? resultados["est_con2"] : '');
                            document.getElementById("etp_cons").value = (resultados["etp_cons"] ? resultados["etp_cons"] : '');
                            document.getElementById("uso_pred").value = (resultados["uso_pred"] ? resultados["uso_pred"] : '');
                            document.getElementById("cimen").value = (resultados["cimen"] ? resultados["cimen"] : '');
                            document.getElementById("estruct").value = (resultados["estruct"] ? resultados["estruct"] : '');
                            document.getElementById("mat_par").value = (resultados["mat_par"] ? resultados["mat_par"] : '');
                            document.getElementById("mat_pis").value = (resultados["mat_pis"] ? resultados["mat_pis"] : '');
                            document.getElementById("mat_cub").value = (resultados["mat_cub"] ? resultados["mat_cub"] : '');
                            /*!document.getElementById("est_cons").value=resultados["est_cons"];*/
                            document.getElementById("num_hab").value = (resultados["num_hab"] ? resultados["num_hab"] : '');
                            document.getElementById("num_gar").value = (resultados["num_gar"] ? resultados["num_gar"] : '');
                            document.getElementById("num_san").value = (resultados["num_san"] ? resultados["num_san"] : '');
                            document.getElementById("num_loc").value = (resultados["num_loc"] ? resultados["num_loc"] : '');
                            document.getElementById("num_coc").value = (resultados["num_coc"] ? resultados["num_coc"] : '');
                            document.getElementById("num_bod").value = (resultados["num_bod"] ? resultados["num_bod"] : '');
                            document.getElementById("num_lav").value = (resultados["num_lav"] ? resultados["num_lav"] : '');
                            document.getElementById("num_pat").value = (resultados["num_pat"] ? resultados["num_pat"] : '');
                            document.getElementById("esp_mul").value = (resultados["esp_mul"] ? resultados["esp_mul"] : '');
                            document.getElementById("zon_soc").value = (resultados["zon_soc"] ? resultados["zon_soc"] : '');
                            document.getElementById("cri_ani").value = (resultados["cri_ani"] ? resultados["cri_ani"] : '');
                            document.getElementById("coc_enc").value = (resultados["coc_enc"] ? resultados["coc_enc"] : '');
                            document.getElementById("coc_lav").value = (resultados["coc_lav"] ? resultados["coc_lav"] : '');
                            document.getElementById("coc_mes").value = (resultados["coc_mes"] ? resultados["coc_mes"] : '');
                            document.getElementById("coc_ind").value = (resultados["coc_ind"] ? resultados["coc_ind"] : '');
                            document.getElementById("san_enc").value = (resultados["san_enc"] ? resultados["san_enc"] : '');
                            document.getElementById("san_duc").value = (resultados["san_duc"] ? resultados["san_duc"] : '');
                            document.getElementById("san_apar").value = (resultados["san_apar"] ? resultados["san_apar"] : '');
                            document.getElementById("san_des").value = (resultados["san_des"] ? resultados["san_des"] : '');
                            document.getElementById("san_poz").value = (resultados["san_poz"] ? resultados["san_poz"] : '');
                            document.getElementById("san_lad").value = (resultados["san_lad"] ? resultados["san_lad"] : '');




                            if (resultados["acu_dis"] === "Si") {
                            } else {
                                $('#acu_mod').attr('disabled', 'disabled');
                                $('#acu_con').attr('disabled', 'disabled');
                                $('#acu_dir').attr('disabled', 'disabled');
                            }
                            if (resultados["alc_dis"] === "Si") {
                            } else {
                                $('#alc_mod').attr('disabled', 'disabled');
                                $('#alc_con').attr('disabled', 'disabled');
                                $('#alc_dir').attr('disabled', 'disabled');
                            }
                            if (resultados["ase_dis"] === "Si") {
                            } else {
                                $('#ase_mod').attr('disabled', 'disabled');
                                $('#ase_con').attr('disabled', 'disabled');
                                $('#ase_dir').attr('disabled', 'disabled');
                            }
                            if (resultados["ene_dis"] === "Si") {
                            } else {
                                $('#ene_mod').attr('disabled', 'disabled');
                                $('#ene_con').attr('disabled', 'disabled');
                                $('#ene_dir').attr('disabled', 'disabled');
                            }
                            if (resultados["gas_dis"] === "Si") {
                            } else {
                                $('#gas_mod').attr('disabled', 'disabled');
                                $('#gas_con').attr('disabled', 'disabled');
                                $('#gas_dir').attr('disabled', 'disabled');
                            }
                            if (resultados["tel_dis"] === "Si") {
                            } else {
                                $('#tel_mod').attr('disabled', 'disabled');
                                $('#tel_con').attr('disabled', 'disabled');
                                $('#tel_dir').attr('disabled', 'disabled');
                            }

                            var compare = '{"colors":{"primary":"hsla(0, 0%, 0%, 1)","secondary":"hsla(0, 100%, 42%, 1)","background":"hsla(0, 0%, 100%, 1)"},"position":{"x":0,"y":0},"scale":1,"shapes":[],"backgroundShapes":[{"className":"Image","data":{"x":0,"y":0,"imageSrc":"http://sig-reas/Reas/img/grid.png","imageObject":{},"scale":0.4},"id":"e4824dc9-281c-5a0c-e3e9-909e69f0c595"}],"imageSize":{"width":"infinite","height":"infinite"}}';

                            var plano = (resultados["plano"] ? resultados["plano"] : compare);



                            if (plano !== compare) {
                                var st1 = '\\"';
                                plano = plano.replace(/@/g, st1);
                                lc.loadSnapshot(JSON.parse(plano));
                            }


                            var img_vacia = "data:image/jpeg;base64,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";


                            var imp = (resultados["foto_plano"] ? resultados["foto_plano"] : img_vacia);
                            var img_ubicacion = (resultados["foto_ubicacion"] ? resultados["foto_ubicacion"] : img_vacia);

                            var im1 = resultados["img_ext"];
                            var im2 = resultados["img_esp"];
                            var im3 = resultados["img_coc"];
                            var im4 = resultados["img_nom"];
                            var im5 = resultados["img_hab"];
                            var im6 = resultados["img_usa"];
                            
                    var thumbnail = {};
                    
                    $.ajax({
                    type: "POST",
                    url: "GestionConsultas",
                    data: {
                        op: "consulta_img_identificador",
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
                          
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9101') {
                                        thumbnail["1"] = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9102') {
                                        thumbnail["2"] = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9103') {
                                        thumbnail["3"] = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9104') {
                                        thumbnail["4"] = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9105') {
                                        thumbnail["5"] = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9106') {
                                        thumbnail["6"] = 'ObtenerArchivo?ID='+resultado["id"];
                                    }                                    
                                }

                            } else {
                                console.log(response);
                            }
                        }
                    }, error: function (a) {
                        alert("No fué posible obtener las alternativas");
                    }


                });
                         
                            if (!!img_ubicacion) {
                                var img_ubi = img_ubicacion.replace(/"/, "");
                                document.getElementById('img_plano1').setAttribute('src', img_ubi);
                            }
                            if (typeof imp !== "undefined") {
                                var datp = imp.replace(/"/, "");
                                document.getElementById('img_plano').setAttribute('src', datp);
                            }
                            if (!!thumbnail["1"]) {
                                var dat1 = thumbnail["1"];
                                document.getElementById('img_ext').setAttribute('src',thumbnail["1"]);
                                canvas_prev(1);
                            }
                            if (!!thumbnail["2"]) {
                                var dat2 = thumbnail["2"];
                                document.getElementById('img_esp').setAttribute('src',thumbnail["2"]);
                                canvas_prev(2);
                            }
                            if (!!thumbnail["3"]) {
                                var dat3 = thumbnail["3"];
                                document.getElementById('img_coc').setAttribute('src',thumbnail["3"]);
                                canvas_prev(3);
                            }
                            if (!!thumbnail["4"]) {
                                var dat4 = thumbnail["4"];
                                document.getElementById('img_nom').setAttribute('src',thumbnail["4"]);
                                canvas_prev(4);
                            }
                            if (!!thumbnail["5"]) {
                                var dat5 = thumbnail["5"];
                                document.getElementById('img_hab').setAttribute('src',thumbnail["5"]);
                                canvas_prev(5);
                            }
                            if (!!thumbnail["6"]) {
                                var dat6 = thumbnail["5"];
                                document.getElementById('img_usa').setAttribute('src',thumbnail["6"]);
                                canvas_prev(6);
                            }

                    function canvas_prev(input){
                        var canvas = document.getElementById("canvas_"+input);
                        var ctx = canvas.getContext("2d");
                        var img = new Image();
                            img.onload = function () {

                            // set size proportional to image
                            canvas.height = canvas.width * (img.height / img.width);

                            // step 1 - resize to 50%
                            var oc = document.createElement('canvas'),
                                    octx = oc.getContext('2d');

                            oc.width = img.width * 0.5;
                            oc.height = img.height * 0.5;
                            octx.drawImage(img, 0, 0, oc.width, oc.height);

                            // step 2
                            octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);

                            // step 3, resize to final size
                            ctx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
                                    0, 0, canvas.width, canvas.height);
                        };
                        img.src = eval('dat' + input);
                        }


                          



                           


                            document.getElementById("img_plano1").style.cursor = "url('img/zoom.png'), auto";
                            $('#img_plano1').click(function () {
                                $('#myModalu').modal('show');
                                var temp = document.getElementById('img_plano1').src;
                                document.getElementById('img_ubica').setAttribute('src', temp);
                                $('#logu').css('display', 'inline');
                            });

                            document.getElementById("img_plano").style.cursor = "url('img/zoom.png'), auto";
                            $('#img_plano').click(function () {
                                $('#myModalp').modal('show');
                                var temp = document.getElementById('img_plano').src;
                                document.getElementById('img_viv').setAttribute('src', temp);
                                $('#logp').css('display', 'inline');
                            });







                            document.getElementById("observ").value = (resultados["observ"] ? resultados["observ"] : '');




                            document.getElementById("nom_ela").value = (resultados["nom_ela"] ? resultados["nom_ela"] : '');
                            document.getElementById("car_ela").value = (resultados["car_ela"] ? resultados["car_ela"] : '');
                            document.getElementById("nom_rev").value = (resultados["nom_rev"] ? resultados["nom_rev"] : '');
                            document.getElementById("car_rev").value = (resultados["car_rev"] ? resultados["car_rev"] : '');


                            if (resultados["revisado"] ? resultados["revisado"] : false) {
                                
                                $('#revisar_aldemar').addClass('btn btn-success');
                                $("#revisar_aldemar").html('Ficha Técnica Aprobada');
                                $("#revisar_aldemar").attr("disabled", true);
                                
                                
                                if (usuario_funcionalidades.includes("300")) {
                                    $('#no_revisar_aldemar').css("display", "block");
                                }
                                $('#no_revisar_aldemar').click(function () {
                                    paso8();
                                    window.top.location.reload();
                                });
                    
                                $(".upd").attr("disabled", true);
                                $(".upd").css("background-color", "transparent");
                                $(".upd_btn").css("display", "none");
                                $("#enviar_revision").css("display", "none");
                                $(".sel_upd").attr("disabled", true);
                                $(".sel_upd").css("background-color", "transparent");
                                $(".sel_upd").css("color", "white");
                                $('#msg_siaprob').show();
                            }
                            
                            if((resultados["estado"] ? resultados["estado"] : "")===1){
                                $(".upd").attr("disabled", true);
                                $(".upd").css("background-color", "transparent");
                                $(".upd_btn").css("display", "none");
                                $("#enviar_revision").css("display", "none");
                                $(".sel_upd").attr("disabled", true);
                                $(".sel_upd").css("background-color", "transparent");
                                $(".sel_upd").css("color", "white");
                                $('#msg_noaprob').show();
                            }
                            

                            $("#msg_aprobado_por").append(resultados["usuario_que_revisa"] ? resultados["usuario_que_revisa"] : 'Ficha técnica no aprobada aún');
                            $("#msg_fecha_aprobado").append(resultados["fecha_revisado"] ? resultados["fecha_revisado"] : 'Sin fecha de aprobación');



                            var resultados;

                            $datos = {
                                op: 'verificar_permiso_envio',
                                identificador: identificador
                            };


                            $.ajax({
                                type: "GET",
                                url: "GestionConsultas",
                                data: $datos,
                                dataType: "json",
                                async: false,
                                success: function (response) {

                                    resultados = response[0];



                                    if ((resultados["cuenta"] ? resultados["cuenta"] : 0) > 0) {
                                        $("#msg_revision").css("display", "inline");
                                    } else {
                                        if ((resultados["revisado"] ? resultados["revisado"] : false)) {
                                            $("#msg_revision_ok").css("display", "inline");
                                        } else {
                                            $("#permiso_para_revisar").css("display", "inline");
                                        }

                                    }



                                },
                                error: function (response) {
                                }
                            });





                        } else {
                            $("#alerta").modal();

                        }
                    }
                });





                $('#acu_dis').on('change', function () {

                    var others = $(this).val();
                    if (others === "Si") {
                        $('#acu_mod').removeAttr('disabled');
                        $('#acu_con').removeAttr('disabled');
                        $('#acu_dir').removeAttr('disabled');
                    }
                    else {
                        $('#acu_mod').attr('disabled', 'disabled');
                        $('#acu_mod').val('');
                        $('#acu_con').attr('disabled', 'disabled');
                        $('#acu_con').val('');
                        $('#acu_dir').attr('disabled', 'disabled');
                        $('#acu_dir').val('');
                        if(others === "No"){
                            $('#acu_con').val('SIN CUENTA');
                        }
                    }

                });
                $('#alc_dis').on('change', function () {

                    var others = $(this).val();
                    if (others === "Si") {
                        $('#alc_mod').removeAttr('disabled');
                        $('#alc_con').removeAttr('disabled');
                        $('#alc_dir').removeAttr('disabled');
                    } else {
                        $('#alc_mod').attr('disabled', 'disabled');
                        $('#alc_mod').val('');
                        $('#alc_con').attr('disabled', 'disabled');
                        $('#alc_con').val('');
                        $('#alc_dir').attr('disabled', 'disabled');
                        $('#alc_dir').val('');
                        if(others === "No"){
                            $('#alc_con').val('SIN CUENTA');
                        }
                    }

                });
                $('#ase_dis').on('change', function () {

                    var others = $(this).val();
                    if (others === "Si") {
                        $('#ase_mod').removeAttr('disabled');
                        $('#ase_con').removeAttr('disabled');
                        $('#ase_dir').removeAttr('disabled');
                    } else {
                        $('#ase_mod').attr('disabled', 'disabled');
                        $('#ase_mod').val('');
                        $('#ase_con').attr('disabled', 'disabled');
                        $('#ase_con').val('');
                        $('#ase_dir').attr('disabled', 'disabled');
                        $('#ase_dir').val('');
                        if(others === "No"){
                            $('#ase_con').val('SIN CUENTA');
                        }
                    }

                });
                $('#ene_dis').on('change', function () {

                    var others = $(this).val();
                    if (others === "Si") {
                        $('#ene_mod').removeAttr('disabled');
                        $('#ene_con').removeAttr('disabled');
                        $('#ene_dir').removeAttr('disabled');
                    } else {
                        $('#ene_mod').attr('disabled', 'disabled');
                        $('#ene_mod').val('');
                        $('#ene_con').attr('disabled', 'disabled');
                        $('#ene_con').val('');
                        $('#ene_dir').attr('disabled', 'disabled');
                        $('#ene_dir').val('');
                        if(others === "No"){
                            $('#ene_con').val('SIN CUENTA');
                        }
                    }

                });
                $('#gas_dis').on('change', function () {

                    var others = $(this).val();
                    if (others === "Si") {
                        $('#gas_mod').removeAttr('disabled');
                        $('#gas_con').removeAttr('disabled');
                        $('#gas_dir').removeAttr('disabled');
                    } else {
                        $('#gas_mod').attr('disabled', 'disabled');
                        $('#gas_mod').val('');
                        $('#gas_con').attr('disabled', 'disabled');
                        $('#gas_con').val('');
                        $('#gas_dir').attr('disabled', 'disabled');
                        $('#gas_dir').val('');
                        if(others === "No"){
                            $('#gas_con').val('SIN CUENTA');
                        }
                    }

                });
                $('#tel_dis').on('change', function () {

                    var others = $(this).val();
                    if (others === "Si") {
                        $('#tel_mod').removeAttr('disabled');
                        $('#tel_con').removeAttr('disabled');
                        $('#tel_dir').removeAttr('disabled');
                    } else {
                        $('#tel_mod').attr('disabled', 'disabled');
                        $('#tel_mod').val('');
                        $('#tel_con').attr('disabled', 'disabled');
                        $('#tel_con').val('');
                        $('#tel_dir').attr('disabled', 'disabled');
                        $('#tel_dir').val('');
                        if(others === "No"){
                            $('#tel_con').val('SIN CUENTA');
                        }
                    }

                });



                var iden = identificador;

                var ArrayIdentificadores = ["2013-4-14659", "2014-OTR-01132", "2014-OTR-01003", "2014-OTR-00951", "2014-OTR-00959", "2013-4-14666", "2015-OTR-01430", "2015-OTR-01363", "2015-OTR-01477", "2015-Q04-01472", "2007-19-9945", "2013-4-14667", "2013-4-14654", "2013-4-14652", "2013-4-14657", "2009-4-11069", "2009-4-11243", "2011-4-13402", "2009-4-11073", "2009-4-11074", "2011-4-13573", "2007-19-10634", "2014-Q18-00822", "2014-OTR-01214", "2015-OTR-01494", "2015-OTR-01367", "2015-OTR-01377", "2015-OTR-01374", "2015-OTR-01372", "2015-OTR-01368", "2015-OTR-01540", "2015-OTR-01371", "2015-OTR-01375", "2009-AP36-00045", "2015-Q24-01508", "2015-Q24-01510", "2015-Q24-01532", "2015-Q24-01511", "2015-Q24-01512", "2015-Q24-01515", "2015-Q24-01516", "2015-Q24-01517", "2015-Q24-01533", "2015-Q24-01534", "2014-OTR-00892", "2014-OTR-00939", "2013-Q18-00397", "2014-LC-00811", "2011-4-12629", "2011-4-12638", "2011-4-12639", "2011-4-12640", "2011-4-12641", "2011-4-12642", "2011-4-12643", "2011-4-12644", "2011-4-12645", "2011-4-12646", "2011-4-12647", "2011-4-12630", "2011-4-12648", "2011-4-12649", "2011-4-12650", "2011-4-12651", "2011-4-12652", "2011-4-12653", "2011-4-12654", "2011-4-12655", "2011-4-12656", "2011-4-12657", "2011-4-12631", "2011-4-12658", "2011-4-12659", "2011-4-12660", "2011-4-12661", "2011-4-12662", "2011-4-12663", "2011-4-12664", "2011-4-12665", "2011-4-12666", "2011-4-12667", "2011-4-12632", "2011-4-12668", "2011-4-12669", "2011-4-12670", "2011-4-12671", "2011-4-12672", "2011-4-12673", "2011-4-12674", "2011-4-12675", "2011-4-12676", "2011-4-12677", "2011-4-12633", "2011-4-12678", "2011-4-12679", "2011-4-12680", "2011-4-12681", "2011-4-12682", "2011-4-12683", "2011-4-12684", "2011-4-12685", "2011-4-12686", "2011-4-12687", "2011-4-12634", "2011-4-12688", "2011-4-12689", "2011-4-12690", "2011-4-12691", "2011-4-12692", "2011-4-12693", "2011-4-12694", "2011-4-12695", "2011-4-12696", "2011-4-12697", "2011-4-12635", "2011-4-12698", "2011-4-12699", "2011-4-12700", "2011-4-12701", "2011-4-12702", "2011-4-12703", "2011-4-12704", "2011-4-12705", "2011-4-12706", "2011-4-12707", "2011-4-12636", "2011-4-12708", "2011-4-12709", "2011-4-12710", "2011-4-12711", "2011-4-12712", "2011-4-12713", "2011-4-12714", "2011-4-12715", "2011-4-12716", "2011-4-12717", "2011-4-12637", "2011-4-12718", "2011-4-12719", "2011-4-12720", "2011-4-12721", "2011-4-12722", "2011-4-12723", "2011-4-12724", "2013-4-14662", "2013-4-14661", "2013-4-14660", "2009-AP36-00026", "2009-AP36-00027", "2011-5-13287", "2013-Q18-00489", "2013-Q18-00381", "2013-Q18-00382", "2013-Q18-00393", "2013-Q18-00398", "2013-4-14631", "2013-4-14632", "2013-4-14633", "2013-Q22-00622", "2012-4-14027", "2011-19-13694", "2013-2-14623", "2013-2-14622", "2013-2-14621", "2013-2-14620", "2013-4-14634", "2013-4-14651", "2013-4-14639", "2013-4-14635", "2013-4-14637", "2013-4-14636", "2013-4-14650", "2013-4-14649", "2013-4-14648", "2013-4-14647", "2013-4-14646", "2013-4-14644", "2013-4-14645", "2013-4-14643", "2013-4-14642", "2013-4-14640", "2013-Q18-00384", "2013-Q18-00624", "2013-Q18-00394", "2013-Q18-00383", "2013-Q18-00392", "2011-19-13607", "2012-19-14371", "2007-19-9693", "2012-19-14216", "2012-19-14375", "2009-AP36-00025", "2009-AP36-00042", "2013-4-14628", "2015-OTR-01379", "2014-OTR-01120", "2014-OTR-01194", "2014-OTR-01246", "2014-OTR-01210", "2014-OTR-01126", "2014-OTR-01143", "2014-OTR-01144", "2014-OTR-01145", "2014-OTR-01146", "2014-OTR-01147", "2014-OTR-01148", "2014-OTR-01151", "2014-OTR-01153", "2014-OTR-01154", "2014-OTR-01155", "2014-OTR-01122", "2014-OTR-01127", "2014-OTR-01130", "2014-OTR-01131", "2014-OTR-01123", "2014-OTR-01170", "2014-OTR-01157", "2014-OTR-01158", "2014-OTR-01159", "2014-OTR-01161", "2014-OTR-01162", "2014-OTR-01163", "2014-OTR-01164", "2014-OTR-01165", "2014-OTR-01166", "2014-OTR-01167", "2014-OTR-01168", "2014-OTR-01169", "2014-OTR-01171", "2014-OTR-01193", "2014-OTR-01212", "2014-OTR-01213", "2014-OTR-01160", "2006-1-8052", "2006-1-8035", "2006-1-8033", "2006-1-8036", "2007-1-10591", "2007-1-10588", "2007-1-10589", "2006-1-8018", "2006-1-8039", "2006-1-8019", "2010-1-11994", "2006-1-8016", "2007-1-10592", "2010-4-11844", "2010-4-11852", "2010-4-11878", "2010-4-11879", "2010-4-11880", "2010-4-11882", "2005-4-5815", "2010-4-11855", "2010-4-11851", "2002-4-2823", "2010-4-11883", "2010-4-11884", "2010-4-11841", "2010-4-11842", "2010-4-11843", "2010-4-11856", "2011-4-13628", "2011-4-13629", "2010-4-11845", "2010-4-11847", "2002-4-2828", "2010-4-11877", "2010-4-11876", "2010-4-11874", "2010-4-11873", "2010-4-11872", "2010-4-11871", "2005-4-6107", "2010-4-11870", "2010-4-11850", "2010-4-11868", "2007-4-9814", "2010-4-11857", "2010-4-11858", "2010-4-11859", "2010-4-11860", "2010-4-11861", "2010-4-11862", "2010-4-11864", "2010-4-11865", "2010-4-11863", "2014-OTR-00962", "2011-4-13656", "2011-4-13655", "2010-4-11924", "2010-4-11923", "2009-4-11175", "2009-4-11173", "2009-4-11172", "2009-4-11171", "2009-4-11170", "2009-4-11169", "2009-4-11168", "2009-4-11167", "2009-4-11166", "2009-4-11165", "2009-4-11163", "2009-4-11162", "2009-4-11160", "2011-4-12923", "2007-4-9479", "2006-4-8459", "2007-4-9974", "2010-4-11735", "2010-4-11736", "2006-4-8457", "2009-AP36-00047", "2009-AP36-00009", "2009-AP36-00010", "2009-AP36-00011", "2009-AP36-00050", "2009-AP36-00001", "2009-AP36-00012", "2009-AP36-00013", "2009-AP36-00014", "2009-AP36-00044", "2009-AP36-00005", "2009-AP36-00004", "2009-AP36-00036", "2009-AP36-00039", "2009-AP36-00043", "2009-AP36-00003", "2009-AP36-00024", "2009-AP36-00022", "2009-AP36-00021", "2009-AP36-00020", "2009-AP36-00048", "2005-4-6481", "2005-4-6485", "2005-4-6486", "2005-4-6487", "2005-4-6488", "2005-4-6479", "2005-4-6480", "2005-4-6482", "2005-4-6484", "2005-4-6478", "2005-4-6464", "2005-4-6466", "2005-4-6467", "2005-4-6474", "2005-4-6468", "2005-4-6473", "2005-4-6472", "2005-4-6470", "2005-4-6471", "2005-4-6463", "2005-4-6477", "2005-4-6465", "2005-4-6476", "2005-4-6452", "2005-4-6450", "2005-4-6449", "2005-4-6447", "2005-4-6461", "2005-4-6460", "2005-4-6453", "2005-4-6459", "2005-4-6458", "2005-4-6454", "2005-4-6456", "2011-5-13261", "2011-5-13269", "2011-5-13276", "2011-5-13277", "2011-5-13270", "2011-5-13284", "2011-5-13259", "2011-5-13260", "2011-5-13271", "2011-5-13280", "2011-5-13279", "2011-5-13264", "2011-5-13266", "2011-5-13281", "2011-5-13273", "2011-5-13282", "2011-5-13274", "2011-5-13265", "2011-5-13268", "2011-5-13286", "2014-OTR-00955", "2015-OTR-01497", "2014-OTR-01025", "2014-OTR-00950", "2014-OTR-00948", "2014-OTR-00954", "2014-OTR-01002", "2014-OTR-00971", "2011-19-13695", "2011-19-13696", "2011-19-13697", "2011-19-13693", "2011-19-13692", "2007-19-9694", "2007-19-9695", "2015-Q04-01336", "2007-19-9677", "2007-19-9679", "2011-19-12521", "2007-19-10466", "2013-Q08-00094", "2013-Q09-00097", "2013000385", "2013000398", "2013-Q18-00778", "2007-19-9698", "2007-19-9704", "2006-19-8259", "2006-19-8239", "2007-19-9597", "2007-19-9581", "2007-19-9656", "2007-19-9665", "2013-4-14630", "2013-4-14629", "2015-4-14747", "2009-AP36-00046", "2011-5-13258", "2015-Q18-04421", "2014-OTR-01133", "2014-OTR-01152", "2014-OTR-01216", "2014-OTR-01260", "2014-OTR-01257", "2014-OTR-01259", "2014-OTR-01262", "2014-OTR-01270", "2014-OTR-01261", "2015-OTR-01366", "2015-OTR-01370", "2015-OTR-01373", "2015-OTR-01376", "2015-OTR-01369", "2015-OTR-01380", "2014-OTR-01137", "2014-OTR-01233", "2014-OTR-01121", "2014-OTR-01124", "2014-OTR-01125", "2014-OTR-01134", "2014-OTR-01135", "2014-OTR-01136", "2014-OTR-01138", "2014-OTR-01140", "2014-OTR-01141", "2014-OTR-01142", "2014-OTR-01156", "2014-OTR-01128", "2014-OTR-01129", "2014-OTR-01139", "2015-4-14750", "2014-OTR-00974", "2014-OTR-00973", "2016-19-00006", "2016-19-00028", "2014-OTR-00975", "2014-OTR-00978", "2014-OTR-00966", "2014-OTR-01101", "2014-OTR-00943", "2014-OTR-00946", "2014-OTR-01004", "2014-OTR-01049", "2015-OTR-01362", "2015-OTR-01552", "2014-OTR-00970", "2014-OTR-00999", "2014-OTR-00972", "2014-OTR-01048", "2014-OTR-01070", "2014-OTR-01026", "2015-OTR-01295", "2014-OTR-00953", "2014-OTR-00947", "2014-OTR-00964", "2014-OTR-00965", "2014-OTR-01023", "2014-OTR-00976", "2014-OTR-00957", "2014-OTR-00968", "2014-OTR-00944", "2014-OTR-00967", "2014-OTR-00969", "2014-OTR-00963", "2014-Q16-00908", "2009-AP36-00041", "2014-OTR-00940", "2014-OTR-00879", "2014-OTR-00888", "2014-OTR-00889", "2014-OTR-00890", "2014-OTR-00891", "2014-OTR-00880", "2014-OTR-00881", "2014-OTR-00882", "2014-OTR-00883", "2014-OTR-00884", "2014-OTR-00885", "2014-OTR-00886", "2014-OTR-00887", "2007-19-9946", "2002-4-2809", "2014-OTR-00878", "2014-OTR-00897", "2014-OTR-00870", "2014-OTR-00899", "2014-OTR-00869", "2014-OTR-00900", "2014-OTR-00868", "2014-OTR-00901", "2014-OTR-00902", "2014-OTR-00905", "2014-OTR-00867", "2014-OTR-00904", "2014-OTR-00903", "2014-OTR-00877", "2014-OTR-00896", "2014-OTR-00875", "2014-OTR-00910", "2014-OTR-00876", "2014-OTR-00895", "2014-OTR-00874", "2014-OTR-00894", "2014-OTR-00873", "2014-OTR-00893", "2014-OTR-00872", "2014-OTR-00871", "2014-OTR-00898", "2011-5-12992", "2011-5-13008", "2011-5-12993", "2011-5-12995", "2011-5-12994", "2011-5-12996", "2011-5-13003", "2011-5-12991", "2011-5-13005", "2011-5-13002", "2011-5-13006", "2011-5-13001", "2011-5-13004", "2011-5-13015", "2011-5-12997", "2011-5-13013", "2011-5-12999", "2011-5-12998", "2011-5-13016", "2011-5-13009", "2011-5-13017", "2011-5-13018", "2011-5-13007", "2011-5-13012", "2011-5-13011", "2011-5-13010", "2011-5-12988", "2011-5-12989", "2011-5-12990", "2011-19-13691", "2011-19-13686", "2011-19-13687", "2011-19-13688", "2011-19-13690", "2011-19-13685", "2011-19-13689", "2011-5-13401", "2011-5-13014", "2013-4-14663", "2014-OTR-00985", "2014-OTR-01149", "2014-OTR-01150", "2014-OTR-01211", "2014-OTR-01215", "2014-OTR-01234", "2014-OTR-01256", "2014-OTR-01258", "2015-OTR-01378", "2009-4-11176", "2009-4-11177", "2009-4-11178", "2009-4-11179", "2009-4-11180", "2009-4-11181", "2009-4-11182", "2012-19-13971", "2009-4-11158", "2009-4-11157", "2009-4-11155", "2011-4-13432", "2006-4-8455", "2009-4-11159", "2012-19-13969", "2012-19-14007", "2012-19-13986", "2012-19-13976", "2012-19-13999", "2012-19-13973", "2012-19-13982", "2012-19-13988", "2012-19-13978", "2012-19-13991", "2012-19-13979", "2012-19-13992", "2012-19-13974", "2012-19-13994", "2012-19-13972", "2012-19-13981", "2012-19-13987", "2012-19-13968", "2012-19-13997", "2012-19-13989", "2012-19-14005", "2012-19-14001", "2012-19-14003", "2012-19-13980", "2012-19-13975", "2012-19-13977", "2012-19-13984", "2012-19-13985", "2012-19-14000", "2012-19-13995", "2012-19-13970", "2012-19-13998", "2012-19-14004", "2012-19-14009", "2012-19-14002", "2012-19-13996", "2012-19-13993", "2012-19-13983", "2012-19-13990", "2012-19-14006", "2012-19-14008", "1999-4-3063", "1999-4-3064", "2007-4-10150", "2007-4-10151", "2013-4-14641", "2007-4-10148", "2007-4-10145", "2012-4-14012", "2002-4-2788", "1999-4-3059", "2007-4-10142", "2009-4-11077", "1999-4-3058", "2006-1-7963", "2006-1-7960", "2006-1-7974", "2006-1-7970", "2006-1-7971", "2013-4-14658", "2014-OTR-00958", "2007-19-9944", "2014-OTR-00961", "2015-OTR-01496", "2007-19-9951", "2012-T314-01", "2012-T314-02", "2012-T314-03", "2012-T314-04", "2012-T314-05", "2012-T314-06", "2012-T314-07", "2012-T314-08", "2012-T314-09", "2012-T314-10", "2012-T314-11", "2012-T314-12", "2012-T314-13", "2012-T314-14", "2012-T314-15", "2012-T314-16", "2012-T314-17", "2012-T314-19", "2012-T314-20", "2011-5-13272", "2011-5-13285", "2011-5-13283", "2011-5-13262", "2011-5-13263", "2011-5-13267", "2011-5-13275", "2010-19-11346", "2010-19-11703", "2010-19-11704", "2010-19-11694", "2010-19-11705", "2010-19-11695", "2010-19-11696", "2010-19-11697", "2010-19-11698", "2010-19-11699", "2010-19-11700", "2010-19-11706", "2010-19-11701", "2010-19-11692", "2010-19-11691", "2010-19-11689", "2010-19-11688", "2010-19-11687", "2010-19-11686", "2010-19-11685", "2010-19-11684", "2010-19-11683", "2013000414", "2013-Q09-00074", "2007-19-10631", "2010-19-11351", "2007-19-9493", "2007-19-9500", "2007-19-9559", "2014-Q18-00938", "2007-19-9483", "2010-19-11350", "2013000470", "2007-19-9701", "2010-19-11354", "2010-19-11360", "2007-19-9485", "2013-Q08-00079", "2007-19-9586", "2010-19-11359", "2010-19-11358", "2006-19-8257", "2007-19-9705", "2007-19-9702", "2007-19-9499", "2010-19-11373", "2010-19-11374", "2007-19-9710", "2010-19-11370", "2007-19-9522", "2007-19-9516", "2007-19-9514", "2007-19-10471", "2007-19-9711", "2007-19-9713", "2007-19-9715", "2007-19-9707", "2007-19-9717", "2007-19-9709", "2011-19-13591", "2007-19-10449", "2010-19-11382", "2010-19-11383", "2010-19-11384", "2007-19-9537", "2007-19-10450", "2007-19-9517", "2007-19-9534", "2007-19-9508", "2007-19-9716", "2007-19-9718", "2010-19-11385", "2010-19-11363", "2010-19-11380", "2010-19-11774", "2010-19-11429", "2010-19-11361", "2007-19-9544", "2007-19-9721", "2010-19-11369", "2013-Q10-00199", "2006-19-8244", "2010-19-11368", "2007-19-9565", "2012-19-14554", "2007-19-10451", "2007-19-9630", "2007-19-9568", "2007-19-9571", "2007-19-9566", "2007-19-9562", "2010-19-11391", "2010-19-11392", "2010-19-11393", "2007-19-9692", "2007-19-9687", "2007-19-9685", "2007-19-10474", "2007-19-10475", "2007-19-10469", "2013000142", "2007-19-9691", "2010-19-11394", "2007-19-9688", "2007-19-9684", "2007-19-9675", "2007-19-9674", "2007-19-9735", "2011-19-13608", "2011-19-13609", "2011-19-13610", "2011-19-13611", "2007-19-9752", "2011-19-13612", "2007-19-9572", "2006-19-8265", "2007-19-9615", "2007-19-9610", "2010-19-11922", "2007-19-10625", "2007-19-9730", "2007-19-9745", "2011-19-13560", "2007-19-9760", "2007-19-9762", "2007-19-9742", "2007-19-9744", "2007-19-9747", "2005-19-7588", "2010-19-12127", "2007-19-9622", "2007-19-9611", "2010-19-11566", "2007-19-9609", "2010-19-11567", "2010-19-11570", "2010-19-11571", "2010-19-11572", "2007-19-9654", "2011-19-13613", "2011-19-13615", "2007-19-9770", "2007-19-9758", "2007-19-9774", "2007-19-9765", "2007-19-9754", "2007-19-9624", "2006-19-9072", "2010-19-11398", "2010-19-11402", "2010-19-11397", "2007-19-9776", "2007-19-9769", "2010-19-11931", "2007-19-9779", "2007-19-9789", "2006-19-8924", "2013000406", "2007-19-9642", "2007-19-9643", "2007-19-9636", "2007-19-9796", "2007-19-9780", "2010-19-11404", "2007-19-9797", "2007-19-9799", "2007-19-10479", "2013-Q09-00181", "2007-19-10462", "2007-19-9661", "2010-19-11403", "2010-19-11960", "2007-19-9663", "2007-19-9810", "2010-19-11959", "2007-19-9668", "2007-19-9619", "2009-AP36-00008", "2009-AP36-00017", "2009-AP36-00018", "2009-AP36-00019", "2009-AP36-00002", "2009-AP36-00007", "2009-AP36-00006", "2009-AP36-00038", "2009-AP36-00037", "2009-AP36-00023", "2009-AP36-00035", "2009-AP36-00034", "2009-AP36-00015", "2009-AP36-00033", "2009-AP36-00032", "2009-AP36-00029", "2009-AP36-00031", "2009-AP36-00028", "2009-AP36-00030", "2013-Q22-00620", "2013-4-14655", "2009-4-11079", "2006-1-7977", "2009-4-11070", "2007-4-10129", "2013-4-14656", "2011-4-13586", "2011-4-13643", "2013-4-14653", "2013-4-14638", "2009-4-11068", "2009-4-11072", "2007-4-10131", "2007-4-10141", "2005-19-7553", "2013-Q18-00627", "2015-Q18-01420", "2010-4-11885", "2010-4-11887", "2010-4-11888", "2007-4-9815", "2010-4-11964", "2010-4-11965", "2010-4-11966", "2010-4-11967", "2010-4-11968", "2010-4-11969", "2010-4-11970", "2010-4-11971", "2010-4-11891", "2010-4-11963", "2015-Q24-01530", "2015-Q24-01531", "2013-Q18-00095", "2013-Q18-00093", "2013000141", "2013-Q18-00395", "2007-19-9697", "2013000437", "2013-Q10-00182", "2014-Q18-00998", "2007-19-9699", "2013-Q08-00080", "2013-Q18-00388", "2014-LC-00790", "2013000211", "2014-LC-00792", "2014-LC-00812", "2014-LC-00813", "2014-LC-00810", "2014-LC-00791"];

                if (ArrayIdentificadores.indexOf(iden) > -1 && usuario_cargo == "Consorcio Intervivienda") {
                    $(".upd").one("focusin", function () {
                        var tmpval = '';
                        tmpval = $(this).val();

                        if (tmpval.length !== 0) {
                            $(this).attr('disabled', true);
                            $(this).css("background-color", "transparent");
                            $(this).parent().after("<div class='alert alert-warning alert-dismissible'> <a href='#' class='close' data-dismiss='alert' aria-label='cerrar'>&times;</a> <strong>Alerta!</strong>No editable</div>");
                        } else {
                        }
                    });
                }

            }





        </script>

        <script>
            function getURLParams(k) {
                var p = {};
                location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
                    p[k] = v;
                });
                return k ? p[k] : p;
            }
            var identificador = getURLParams('identificador');

            if (identificador) {
                $('#identificador').val(identificador);
                $('#identificador').attr('disabled', true);
                buscar_tecnica(identificador);
            }
            
            
            $('#enviar_revision').click(function () {

                if($('#fecha_elaboracion').val()===''){
                    $.confirm({
                          title: 'Problema al enviar!',
                          content: 'El campo de fecha de elaboración es obligatorio',
                          type: 'red',
                          typeAnimated: true,
                          buttons: {
                              Cerrar: function () {
                                  $('#lbl_fecha').css('color','red');
                              }
                          }
                      });
                }else{
                    paso1();
                    paso2();
                    paso3();
                    paso4();
                    paso6();


                    var asignado_a='196';
                    
                    if (identificador.includes("CP19")){
                        asignado_a='246';
                    }
                    
                    if(sector==="VEREDITAS"){
                        asignado_a='306';
                    }

                    var tipo_proceso=4;
                    var tipo_actividad=24;
                    var actividad_padre=16;                  
                    var estado=1;
                    var observacion_inicial='';
                    var observacion_final='';
                    var creador=usuario_identificador;

                    set_estado_ficha_tecnica(identificador,1);

                    envio_de_notificacion(identificador,tipo_proceso,tipo_actividad,actividad_padre,creador,asignado_a,estado,observacion_inicial,observacion_final);

                    window.top.location.reload();                   
 
                }
                
                
                
                


            });
                                  


                                  
            
            
        </script>

        <script>
            $identificador = document.getElementById("identificador");

            var ruta = "visor.jsp?config=viewer_editor_ficha_tecnica&id=" + $($identificador).val();
            $("#arc_visor").attr("src", ruta);
        </script>

        <script>

            $identificador = document.getElementById("identificador");
            var resultados;
            $datos = {
                op: 'get_numero_ficha_tecnica',
                identificador: $($identificador).val()
            };

            $.ajax({
                type: "GET",
                url: "GestionConsultas",
                data: $datos,
                dataType: "json",
                async: false,
                success: function (response) {
                    resultados = response[0];
                    if (typeof resultados !== 'undefined') {
                        if (Number(resultados["Num_Ficha_Tecnica"] ? resultados["Num_Ficha_Tecnica"] : '') !== 0) {
                            document.getElementById("ficha_num").value = Number(resultados["Num_Ficha_Tecnica"] ? resultados["Num_Ficha_Tecnica"] : '');
                        }
                    }


                },
                error: function (response) {
                }
            });

        </script>


        <script>

            var thumbnail = {};
            var titulo = {};

            buscarDocumentos();
            var identificador = getURLParams('identificador');

            function buscarDocumentos() {
                $.ajax({
                    type: "POST",
                    url: "GestionConsultas",
                    data: {
                        op: "consulta_img_identificador",
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
                          
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9101') {
                                        thumbnail["1"] = 'ObtenerArchivo?ID='+resultado["id"];
                                        titulo["1"] =resultado["nombre"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9102') {
                                        thumbnail["2"] = 'ObtenerArchivo?ID='+resultado["id"];
                                        titulo["2"] =resultado["nombre"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9103') {
                                        thumbnail["3"] = 'ObtenerArchivo?ID='+resultado["id"];
                                        titulo["3"] =resultado["nombre"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9104') {
                                        thumbnail["4"] = 'ObtenerArchivo?ID='+resultado["id"];
                                        titulo["4"] =resultado["nombre"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9105') {
                                        thumbnail["5"] = 'ObtenerArchivo?ID='+resultado["id"];
                                        titulo["5"] =resultado["nombre"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9106') {
                                        thumbnail["6"] = 'ObtenerArchivo?ID='+resultado["id"];
                                        titulo["6"] =resultado["nombre"];
                                    }

                                }

                            } else {
                                console.log(response);
                            }
                        }
                    }, error: function (a) {
                        alert("No fué posible obtener las alternativas");
                    }


                });

            }


            var fileInput = {};
            var tipo_doc = '';
            var imagen_delete = '';
            var identificador_predio = '';
            var id_img = '';
            
           
            for (var li = 1; li <= 6; li++) {

                fileInput["fileInput" + li] = $("#file-" + li), initPlugin = function() {
                 fileInput["fileInput" + li].fileinput({
                    theme: 'fa',
                    language: 'es',
                    initialPreview: thumbnail[li],
                        initialPreviewFileType: 'image', 
                            initialPreviewConfig: [ 
                            {caption: titulo[li], key: li,id:1, downloadUrl:thumbnail[li]}
                        ],
                    initialPreviewAsData: true,
                    uploadUrl: 'FileUploader', // you must set a valid URL here else you will get an error
                    deleteUrl: 'GestionConsultas',
                    allowedFileExtensions: ['jpg', 'png', 'gif'],
                    maxImageWidth: 1000,
                    maxFileCount: 1,
                    resizeImage: true,
                    showPreview:true,
                        overwriteInitial: false,
                        maxFileCount: 1,
                        validateInitialCount:true,
                    // previewFileType: "image",
                    //allowedFileTypes: ["image"],
                    fileActionSettings : {
                        // Disable
                        showUpload : false,
                        showRemove : false
                        },
                    browseOnZoneClick: true,
                    layoutTemplates: {actionUpload: ''},
                    uploadExtraData: function (previewId, index) {  // callback example

                        var out = {
                            numFolios: 1,
                            descripcion: 'imagen' + tipo_doc,
                            identificador: identificador,
                            tipo_documento: tipo_doc,
                            thumbnail: thumbnail[id_img]
                        };
                        return out;


                    },

                    deleteExtraData: function (previewId, index) {

                        var out = {
                            op: 'delete_img_repositorio',
                            identificador: identificador
                        };

                        return out;
                    }

                });
 };
initPlugin();

                fileInput["fileInput" + li].on("filepredelete", function (event, key, jqXHR, data) {
                    var abort = true;
                    if (confirm("Esta seguro de borrar la imágen?")) {
                        abort = false;
                    }
                    return abort; // you can also send any data/object that you can receive on `filecustomerror` event
                });



                fileInput["fileInput" + li].on('fileimageloaded', function (event, previewId) {
                    
                    
                    var src = $('#' + previewId + ' img').attr('src');
                    
                    id_img = $(event.currentTarget).attr('id');
                    if (id_img === 'file-1') {
                        id_img = 1;
                    }
                    if (id_img === 'file-2') {
                        id_img = 2;
                    }
                    if (id_img === 'file-3') {
                        id_img = 3;
                    }
                    if (id_img === 'file-4') {
                        id_img = 4;
                    }
                    if (id_img === 'file-5') {
                        id_img = 5;
                    }
                    if (id_img === 'file-6') {
                        id_img = 6;
                    }

                            

                });



                fileInput["fileInput" + li].on('filepreajax', function (event, previewId, index) {


                    var id_img = $(event.currentTarget).attr('id');
                    if (id_img === 'file-1') {
                        tipo_doc = '9101';
                    }
                    if (id_img === 'file-2') {
                        tipo_doc = '9102';
                    }
                    if (id_img === 'file-3') {
                        tipo_doc = '9103';
                    }
                    if (id_img === 'file-4') {
                        tipo_doc = '9104';
                    }
                    if (id_img === 'file-5') {
                        tipo_doc = '9105';
                    }
                    if (id_img === 'file-6') {
                        tipo_doc = '9106';
                    }
                    $identificador = document.getElementById("identificador");
                    identificador_predio = $($identificador).val();

                    $( this ).parent().parent().hide();


                });



                fileInput["fileInput" + li].on('fileuploaded', function (event, data, previewId, index) {
                    var form = data.form, files = data.files, extra = data.extra,
                            response = data.response, reader = data.reader;

                });





            }

if($(".upd").prop("disabled")){
    fileInput["fileInput1"].fileinput('disable');
    fileInput["fileInput2"].fileinput('disable');
    fileInput["fileInput3"].fileinput('disable');
    fileInput["fileInput4"].fileinput('disable');
    fileInput["fileInput5"].fileinput('disable');
    fileInput["fileInput6"].fileinput('disable');
}





        </script>




        <script>
                $identificador = document.getElementById("identificador");
                $datos = {
                    op: 'ficha_traer_user_upd',
                    identificador: identificador
                };


                $.ajax({
                    type: "GET",
                    url: "GestionConsultas",
                    data: $datos,
                    dataType: "json",
                    async: false,
                    success: function (response) {
                        var resultado = response[0];
                        $('#msg_ultimo_upd').append("Última actualización por: <b>"+(resultado["nombre"] ? resultado["nombre"] : '')+"</b> en la fecha <b>"+(resultado["tiempo"] ? resultado["tiempo"] : '')+"</b>");
                    },
                    error: function (response) {
                    }
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
                
                
                $("input:disabled").css({"backgroundColor":"#EBF5FB","border":"none"});
                            $('.numeric').on('input', function (event) { 
                                        this.value = this.value.replace(/[^0-9]/g, '');
                                    });
            
        </script>

        <!--
              <script>
                var img_prueba='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIWFhUXFxoXGBgYGBkaHRsXGhcWGB0XGBcYHSggHRolHRgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLy0tLy0vMi0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABBEAACAQMCBAMGBAQDBwQDAAABAhEAAyESMQQFQVEiYXEGEzKBkaGxwdHwFEJScgcj4RUWM2KCkvFDc6LSJFNj/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EADIRAAICAQQBAwEFBwUAAAAAAAABAhEDEiExQRMEUWEiBRRxgfAjMkJSocHhM5Gx0fH/2gAMAwEAAhEDEQA/AMmWjaN96a8CZzOIoVCetdNejRwWQvYjH7ionFFk1G9qiZgFw1A1GX1oRhTIk+SOugV2K6KxrGxXYpwFS2rUzWBYy3jNG8Ckq0iR+frU/Lwukhh8jXOIUJ8JMGgMlW4/ldg6ttqtkBZ2MjAGI65mqvk/DO89u5rU27Nu2hL4+QpZFIboznHhlJmfT9ftV5yK+WUTv06QB+4qK5et3iFVYjv171HwVw2WKnEdM0HuqCtnfRo+Luk/DA75j/WgeacMx0rmdOrcQekE+sUN/H6gQJ6iemehjNdv80sRb1MxIPjGR8h59KRRaHlJMrrdksQrQAPpHbzqy5ZfADJIAODnYDFBpxAusQFbSJ20ho8+58hVTduldUyCYx+vaq1ZFz07m94d7LwrXwqjp3Ede1ScbYAUNbkrvAE/MeVZv2b4FmMuRBGR26iZ60fc5g9hSuryCnMD8BU3DekyyyfTbQZw10sw3JDCI61uOOtApB3ivO+T8UNSMwLZxGMg4+VWtzm183iWnT2Ow2wDSZMbb2Hx5EkanlHKdPiJ/tH51Nxi9/pVda9otIAKkz2/Oor/ADKDq1gA+WflPWoaJN7ldUUgq9cKCAKy96+13iFUsFSYmdz2HzqTjuZrefSvwjdj+gquF0DCAmNjH7/CunHjrnk58mRPjgt+acGiEFDk4Jk/hOB9KqOLvA4kR5fr2qLjeJaZJn16egoS6+NU+QG1WhBrkhkyLoe13VAJJHzoZHAOwEH94qX38f6Vy3aJ8R/CqpUQcrJXJxO/lXLIp7L1O9P4dJodB5Yi9KpNNKgExocHau2mFVC3CKlXiDS0U1FkwnamM1QW+Krr3ga1B1IbdihGFPdqjo0TbsQFKKcKcBRBZwCaksyCIpxtDvVhynhgWBYYoMMVbG37LCMwDBnypvMBpgbyAfnVvxFgf8M9R4TP2qo4i2Wx1H5UqKSVBPK75+BYkk9qJ4bi/eSHEf6YqpVdIDCZHSmrxBEyJ6/OjpF11yanhrukeEZkQI/PvRIksGKLPnmaz/L+LDMNWZ3/AFq14jj1VSFOe8fn0pHErGaaCOZPp337Yx9Kp14nTdS4iqWRgwBG5G0iuX+KJmTJ88kfOj+SWjcU62VVUdRnfZetFLStxHLU9gu5zy+58SW0MSSAZImcmcUEOC9542cai0hIEnzkYHoaK48IBNsGIg6iBnuP9KG4VGIhR0nERA6+XSjFUttjSdunuaXgeXjTqS6o6RMdM/MUFzTl5cTbuK5VZdsb9gB1/SoOTNbFzTdtTIkas4wBknv5Vc8jvot91S0ig4nJ0xEwT61N3FtlVUlRlOGe4t23O+oY7dDW8vcACwJb84+dTXeWWdfvIkjM9BtkAbnzNAcbzVEJPhE/CdUn1gbfSllPW1pQ0YLGnqYzjeHSyGdyTM42H13rP2mucTc0Lhe+wAH40S/NTcVlCgkzluvaB1j86EXh3zLER0GMR9hVoRaW/Jz5JqT+ngsEKW/CsMdpoLiLw1T5/vauXrowFGfM9ai911Jz+8VRR9ycp9IVwTsIHU/pTfdg+m9SsSadaWmE5OW0H6U9xmnha7pmlCRlKmtjECnBMVIiUGxkNgUqm0jtSpLHPKYp2nG9IV1ljFOKThFZcYYdO9QqaSV3Y1gNnGFKK6aQogEKm1Z2qMU/NYFjvdz+VEcJfZBjY9KHZszU1txsRk1qMnuX3DMLuk7Rg/pQfNl0sIO2TQ9u4UAIE7yP31pcTfUtZWf+IY2yJ2+hBHbbNc88sMbWpnXDHPLF6VwDvcx60OEobmiSDt0A85gHT8x+NAW77AFHJ0nY9oyBnaakvWeyKP0L7kXqQMijkAfJmIqj5XfLrk7GPOOk/vpVmbpMAV2RepJo4JLRJxZZcFdAMEgeoB+Xzo9gFSVUf2w228jI6D71QAjznvNE2OMGNcmPwouJll9y5ucxATvOwMyB++lVrc1b+XGIaNiN49KH4nidWwgd+p9aHpowRPJmfQS3FszaiTJ8zt2rVcp5inumt20holmLRAG+kL6Vj0Wp7cjANGWNSQuPM4uy/t81f+toGAepHqOn3oW/DuTkjpP7gUPYFGKaGlLgfW5LcSCNsHyoq00SJgEZHf1oYkCnia1GUqJAJOK6RXUU10W81gjRU1pKctsDapkSg2FIZ7vNPVakZKkC0lj0RMvlUiLSaua+1ajWkOIpUw1yhQdR5ZFdpV2KYU6DSilFdAogEBXQtdArtGhWxBakXbypqipbZijQLIiKn4dATk/Wu3AJnpXbdjWwAwCQJOw2yfxpZSUVbGjFt0lZdcKouTpjYJOcs50jbfrVIOFJvhVMSSdZ6aJmOw8aj5daurSstqybQkkM6IVlmchgupQZ8I8RA6rVZbKOjuvhILW7ZM/CNiCdzqfJ7qO2fnsubyZJSXHC/X9T6XFh8WJQfPL/AF/Qg51aRV95BBDhSp7HUBp+Qzvv5VUczsyGgfCuonzZtIEdBBX71pebC37lUYhZNsmSNldSY3jB6xVfzzg/dA6pHvFXUOxliBPof3FbFPobLDcz/J7sXI6MI+e4P4/WtABWZ16bgYYgg48t61q8O3Y17XpJXFo8D18KmmuyNamt8MxEgUVwvLmJ2qx4lWABCjHbqPlXU5exxrG2rZTLaMxRdnl5bberO29t4Aic77+n77Ufy7gSjBzAG/lFLLJQ0cKb9yktcHB/Wim4PExFX/EPbNyVXfBEemR5VdWOBtFRMEkYj971KWeqbRePpk7SZhLNnvU8dK0TcoLMREfvvtQfH8muWztNOssW+RJYJRV0VXu6IspS9wZzRvD8ISNjTNoSMW2RKKaFzRP8OeorrW++KVMZobbXMVLtvSEAedRtW5DdHHekLh6VzTU1q15A0W0hUpN7DCk9adoiplUnyqw4fl+o4/H8KjLLReOGyq92e1KtC/I7k7D612p/eEU+7M8JiugU6K7FdZyWNiugV2K7FEFnIrtdiugURbEBRa8PiZFCxT1Y1qBYTwnD+8uIgwCQM9up+lWXs9wPvGvOoBVrhVZxK9CT0UMWx51z2c4Mv718qFtkB+iloWf+0t6TNafldhOHVBoJXUEJ6kM0TG+0NPn8q+f+1c/7TQuv/f8Ao+i+ycSWJzff9v0yi5NxTqeL1nULIFuYAIJDG4JXdZWRHQ1h+Bv37LOLUsNegA+IHJIEAiSRBkbz6V6Dx/u7fCcc9ksHuXAQ5gTpFvA7CSVPnq6VjlcC9YzpW4uoEbqzFwr/ANwAWJ2Brmw19Tr9JHblt11/ll3zW0b3A2rt1dJcC2c7aWjJbbKqSOn4Yq5xrPpDsW3BJ6nME+e30q35/dItsmyve99p0kQ+llbJ74bE9ugrPaa6MEKX5kMs22K8u4+Veocl4xb1i00AEjPqCVP3Bry416P/AIclb/Dm0AA9pvi/5XJYffWPkK7cMtL3OH1EXJbGhFhYlIA8h96VvhdQ0sAJ/m6H51PwXBN7whyRHr9qt7qIfAp27yPnV5TrY5owtWygPCoPCQJnBBIyOv73o4cKXAXVkRBG3z7HO9OflSzqLmD9PwrS8n4XSsAdhIEYoZMqStDY8Vumij5byph4nE5g5+81YPypTsTn9auzbwSsEg/h3+VVV92Rv8tTcViNp8LHc7bVDySky3jjBE1iwQuJkdGMbd8UTZDkgGG7+nWZpLZkagwGJIzjtRHvBGlJkdSIk/OptlEhj8rsKZgSfx8zQ9/h7YHwZ+kZ3jqPOjUfSTPbMx69PnQHGcC5eQfAfMwB6U0XvuwSVLZAqpbJgEMT0H7mqvjeDhjKkDpA/cVqrPAqpD28SMxkd/rU/wDBy2oicfv8vpTrPpexN4NS3MJb4N2mFOK7/AuNxW0bhIbA3Hy9TRS8OvUDamfqmIvSRMEOHOMRRFvhz2rUtyxHONugH51I3LwvhJ6Z9PypXnsZenozFrgDOxPpVvwfDFSIEnr5VaIEIHhxGScYqeygMBTjv+VTlkbKRxpAMxglqVWF1LYJFKp2PR8zRSinRXQK9s8KxsV2KcBTgtEFjQK6BRK8If5sD6/YUhaA3BI+nzzRBuQKh7bUorTXeTr/AAtzGfdC8O+F1AGR5+m3c1T+yfLX4mz7xyFVSQG6sB1HptPl6150PtPFqlq2SdWejP7MyqMXHdvo2vJOCC8IFG5XW22WYFgsHB8LJP8AaKv+X8KrqJESZIzMgsN/+0/OszxdxFVRddV05VWMaj/mpgzkwyA+p703j/bC1Ze1asuzqll2KqmbmnUC2omV0+6clT1I7V869WWbn7ts+hpYoKC62DeecrQcP7ojUIZ28wLmsr9gvlWF4Cx73i3c7WraFCJA1kW1M/8ASzHuMVuhdDcKuhw5FwgsWUyrXAFaRA0lCrdhI7VlPZ5X9/7u6qK5uMpQdj4VLQ06dZ0+RmdhT4ripGm1KjPe2dtveajIUPcQA9GDuSDmJAKiPw2rPi2QAxGGkA99MTH1/cVpOecx99wFhsgjiL2qf5meX1HvhpnaWMRtVdzPhSOF4S7iCty2M58N+80x0+I59OxrvxypJfNHJNW7KsgZntj1kflNbH/Clx/FPbY4e2WjuUZT9YZvpWMqz9l+ZNw/FWri9WCMO6OQrD1zI8wKutmSluj3LmPHrAUJIxvg/I1Bw3KrrQ7EZ6GCY7TAp6WZaTuCI7H8qt1EwT06fTcVZy0qkcyjrdsGtWxHc9ciI+dWXAXT/avaZH1pl7bAwxgdvUnoKj4VYkKMn+UbR88VJ7oqtmK/cKudBg9hsRO/YfepbTqG0g6X3PXG+elMThVVtTmW7DtUlx1XxqJb6/aa3wD5O6YYMVIM5O8wMbQBU3Dq7EEnAnO0Yxnef0pnD3zcgnpuMYM7HBo2wgAKr6k9vnv9e9K2MkOTQrYEvH65JqJ1IcavhwB/5qLjOYLbAAI17TvA86js8QbhUhTA6nA/f7miourA5K6LkQi9u0UMpYsMQI6/n0FdcnEtgdv3NNvX/MADekSGbHDWT0C9T1PapVtiOpoIcaCMeWTtFQX+ZAGA2sn6D7U3jkxXkiiz99A3AHf8q5aKDPU9WP671UI7NkkYznCj5Tn51xbrH4QN/jJj6U3jF8pbOgf0+k5imF7amBv2oBSx6sB1OqB8u9OUnoDHczn9aGg2sLLjuPr+ppUE4M7ClQpBtngFOAqdOGJBMjH73qZuBbeBH/Ln7b17No8LSwMCpkseYHaZE+mPMfWn+4jJk+mM9tqI5yi2nsywBjScblgDGruNKDyio5s6xyhH+ZnRg9M8kZy/lVnOHtPspWOsmAJ9TVhw1viNYW3dWSdMrkT5iKrD5nP73qy5Bw88RaDHElpx/KrMIPeRT5Xpg5eyYmL6pqPu0bbj+X6+Guqxy1h1nrLLG3rsPKs97KWf/wAO0gG2tfX/ADbig56Hf6VornEMTcVRk7A7Qbt0rB2JOjpTgqWXtnwxqAOIwdtj0MwK+KlK04/Nn2UNtzLc55X725cVse74G7dEjZnLWtU+Sr/4rz9XuBw8mAH4dVYSVttafDDyFwkA7wegr2vnlpXDOD4Xte7EDBU3AzhmnMxpA/llt5x5D7UMwvlERiWuK4WNUuUVRpWJkjSY867fSzX7nwc+aLa1/Jf+zfK1sWtaam9+gwxI0qw8TOBAnDfIDPWsvzxHe9YRGMlRbXxdrlxVcxO6kZz1r0fifd8PbUECVQIQJI8KKpGNhAI+decWlNzinuBTMlrYHhGXAnMjSNRJHfyo+nm5SlJjZYVCKRWcwe4CbVwk6DAJ3AjEZ+EiDHpV9zC7Z4uzbWwCty1bEofhVZtqzhj0GCfUmMZzfGoRcYHoe84jGT5RTuDd1YFATBEgAkHcwR2MH6Gu1xtJnHqptEU02exz0PnUvErGkwBqAiIzGCcde4371AKoKfQvLbpvWbXEmf8AMRXx01LJHnG1W/Cv/Mfhbr26ZH0rC/4U8e7cHoEn3bskT0aHED/qOI6VveDU7MMD9zTt7bkUqZPbM4A670ziUUGGaPTE/v1ox7MrIyImB28h1qk4q6CNKkhpgBlKH/5DOOgoQWpmm9KLNLgI0QAPxFNS1EKoHnHT/WqZOPFsSENw7li0YmMAZj1ioOb8VcaPiVGEgbAz6YNVjhbdEZZ4pX2XN/miJ4UGs9lMKPV9vpVZf5ncuHS7aVG62wY+fnVXadhsaltMQZBIPcV0RwxicsvUSkWdjmiWx/l25Pd8/v7U9ec3mwPlGI/frVeLJOTj1/TeiOH4aT8QH78qDjBbmU8j2JhxLjGx2jyPkfxqW07Aywz0B/ID/SlZt6fhHzO/yzTvddfxpW0USkHWOIOzHB6ACY8yNh+5qa/7pTLCT0XyoS2QO808qvX5xUHVl1dHWutcx8I6CibFlv6p7dY+hNRjiQAANq7/ABZ6UHfCQVS3bDfcERqMn1JJ+2Kd/Db6m+n61XjiG6QJ8v1pw1N3NI4vtjqa6QayWe80qCNg9qVDTH3DrfseRC+RBIVhGxwY+W/3qK4yH4dXc5MfaoH4osPFv6fiaI5Zfth7guhglu0bxbMeSY/mIkx+eK78uSOKOqR5+KMs0tMSfg+Aa66oDJJmIgwMnPoPvVL/AIl8amocOrSyFHcDI1m2VaexELj/AJj2FXvsk/EFPegRcYQzkdiYS2kgQoMaztn4sVluZ8tN3jnW2mq217xIvxBUuPbMZ3Pu2O/8wryMnqPNmt8RR7OL0/hx0v4in4Hnj21C6VYD+qduxg9sUdxntNqRRbsi2yurqwacq2rOB1Aqv51yz3F/3ZDopCsNcFoOCSExuGx5dd61NrkvBC1c92ly9cFkMNRwHK5BVSGB1FfKOpM1efqmo7ttMlH0sdVpKzRWv8ROES6hHvGViuqRHu5zJkxC+8YEDqp6ROw4py0A4xCxnIIg75gxXl/C+x6twiPetm3cI1ALJZlMbpqmYMxMwNpwL32f58VsIrlkFoojlvEDBQC7JzpJBkCYn1jycuOD/wBPp0zvg5J3L8jYcVwjC3sCQASCSAcGRCj9d6wHLuG08cW0hv4a2igyJIVPeGD3K+GfIVuOOe63Dm7buhwJZTb0+JQGIAgENJ+UViOV3muXveoxCh3VCFkFU4V01lpiEIgdMDuKXDF1L8B5S4/EXtbxDW7en/8AlJnMkuluDPWHY1HyrgFFy22Dq4MFtRge8a5abEHAggb4ic5m659ys8QgeNwxOnOPCysNtQ8RwPJvIv5YnD3U917sB7No2ibhCajoK6Q8ksBpXI2nvNNGVQpc9jT3lbZ5Jxt0MwhY8KzmZY+It8y34USeYOLK2l8IDMXKqAWjRGpgSWj0HxdZpw5LxTHxWbgIAJLjRAOd3jvMCtb7G+zA94GuRdZfGEEaVOQGZ2iTidONhvivRnkhFbnAotsyPOLz+C1cBVrY0sCf5pJBiYHgKrj+kdqrBXqvtRycuzXT2CkwpwAAoaQcfFv1PesRzDl2llttbCk+EaVIk+GDqyDJO2IzsIoYs0ZIM4NF9/hV7Tjhrp4e4JS8wg48LhSM9wYUV7Pw14XF1WXAaYEqSD12wa+chY9y1u6hOtWUhXXdgRjEGPIwcH1rbch/xU914OI4aVBzoPiB6wrR9zXQqavs55alKuj1wcIC4dk0sRBg/lt9qsEEdjAjOftWU9l/bzhOMYraZlbf3d1Qrx3WCVYeQMitS1hXzOflHzkUjfuMl7FXzG/ZQaSCB0WNp7dvlVRf4m2RCqRPf8QKv+J4aMlB8qob9sEzB+wrqxNHHn1IA912qVLdECzUq2a6HM5VAZw1kHcwKOPuhgA+oP61EvDneKIThDE4+on6b1GTT7LRTXCItQnC/U07WaNscIn8xIP78qkPAdRt571PVFFdMmV4U1IqUdZ4Ak7fOpm5Y4O0+YzQeRGWNletsVNbQUYvAHpUrcKoG+aRzRRQYKoFGcMvpUAt1NbSpyY8SZ0E7UqYyt50qQpZ4HwPCXLt1VW3/lz43J04kTpxnHy2+fL/ABa3b1xLaj3OovdkPHudaOiNMMIYHfALGYAgkcg597xgUBRSSqltMkkbIe+dI/u9Kis8sezxCOWy1u4CFGkC37sIJUzvhwIGQegFc+X1E8kn5OuEdOH0+PFH9n3yanll0Dh7KqpAPu/BE4YLOoj1Yk7SepOaX2RtsOa8cdIVLaMT5MSoGT/VNxvmas/Z3mVlrap7lw9sINLMDMKFHimCfDJ6iGqq5vxdyzebirCaLV46WJ2J16YKqZOQSHJxAzmK44WpSj2zqn9ST6RSe3nL3e61wEaURAcfzEXbqiQMSpnz+lM9jeT3b0+9Vjb0sFkfzLupBiVESQTEqMHodwl29xdm2wPu7QYm+zLuUbwLbYyGbRIkRG2Jg2XMOP4UWrdpL8aAVWVNxgz6lOVBGtixlpPxPjII6NbUPH3/AMEKTlqM3e5lfN0qt+54ipQq7HTqCgqgUxESAPhg1zmfPbvDv7p8kaSbi+EsCqtDoRDQSQRgE7zCkVfCWnZptqXViSJAiBvJOI6evyrS8g5Vcj+JYqjhlC/5fvYLEBZIxP8Ayb+lWkoR5EUpPgtOD4q7YshlR1954oUsuZIOpDjVAO646GRpE3LbzDh0CaFZrbF7msALbVhq8OoZIU4BPwHOKAtWb12XucQEACKpNoqxzvDHaA3rIzvI68v4fUjG6zjGWjSbisECqg8UFSYOdhJ8Vc23f9y34FuvtDaCvZZtRS3pthdZJAAyBbjSIMSADiJql50rPb/ygUuXM+7Ms5AIIJAjQRkAEsQC22AO3L8N7pQBifCukBiME5zA9KiuX/dm2JIEwSBoMzMSIx4mz5nyoxjTtcmbtb8B/M7jBbaF5CiFaADEnxKREwSuOmeggE8g44LxLurboZB+JdIWJ2G33nMGqL+L1FhIhT4ZHQmDO8ZAkRgUBeDFi20iN+hBBHoQadY7VMVz7Rvr3NEa4bAh8LidRMDUrPgnPhIMzknMCcpzvnV23xN22pLH3ptKoGkEFCDnqxNwZ/LBi4Hiy/Epcdm1BAkAiGjXCtj4hiCd4+oPMrha+l19X/G944VJIbUC0mdpUQIwCR0zseJRlT9jSm3G0R8+4gre96wLpd0k6sSAACIBjp33HlQHE2bdybivMyTqJ1ajmWncZOfTzNWPtMjhOHtEgt2BG4OhcnoQQZMdaD472fa1YF1ri6tWbYBlUkqLhPYsNIgfOumDSit/gjNO2Vun3ZDLc8alWXTIIOG3OzKcfLGM19Cf4c+1FzjuFN25bQOlxrbFQQpICsCBJOzD5g14BesXdGpjqWd5mJg56gGevUGr32E9qzwN1ixY2XADopggja4F2JGREjB8qtsyD2Pd+J4q9M6vD06fbr96FaW3oXlPNrPFL7yzdFwdYOR5MpyD61YqlXTSOSVt7kS26lW3UqrRVnhGPSPWg50aML4BVt1PYUgyN6NPL4zqEeePxqDap+RPgp42uR6kzJ3oocUdgKGtrO5ijLNiO58//NTlJFIpk3DqxyT8oj6mp7nEqBEiar7l07Bj6VFFIPYS7jpHy/XeuJbocE10cUg+Jz96zkkZRbC1QVKiqOk/hVc3NEGwmpLXMC3YCpuY6gGu2dx9K5UDcUKVbWHSfNfEy0AzifrsT9KvOM5i92HYAsDoMAgtsNgcYckqBG3QVUO9kmPeKpjAhhnbvv136/KpOO4hBpAOWYgmIkkiT5nG5nyqDVtKjpTq2EG9pdXttpYT4up1MzTpjtvPYVPzjmP8TatWrqge7Ms0Ea4mFZQQOuQCJnpmhTaldYAiCNKgyxzkTsckdemxpj8O+nWVVRjc94zA6eVLtd9jEXH3dYaABqaTgAnbthfh6R1G2KVviiQuogMjBlMAEEdTAz1+ZntSuWTuWmI2Bz6bdwM0yxZWVLE6WJAaIU9CQYOR27xVFVE7dli/HkKWW4y6pOkSAIURAGJmc+QO5qG1zi+mVdjOJYAkgasCcgjUp6gSN6h5jet6QFQASBKgsT4kJjU2NomNmOBUV25adiLZlCMD+bVEQxJ0z1kExBwdq0YprdGbd7Ml5jbe7dJXUFMkIYnrkdAJBAjoMnen3UNsrDBSF06hkQRnIxqPcdIzRgvIxOokuFCsbe5ADELpxu0ExmQM4kh8YRcYgEHxMzADOoLoUCBk7pEjSPWsnwugtdkD3CrnM5iRkEdxmSN+29QPdZyFxOACdh2knajf4DwiFIbUF33JzAA8p69Nh1aOEbTOgqCf5gRnvqMDttTaooG/BHw9iRCnqT5/CxG8YJHrjaoLi6flB3nBAqyFnw+IqAekjyxgmZj9O1K+trQBkNmSJIOCBvkmYHzNDybh0lbcVgQy9MkwCfSPy/KobKKCSeuAZO0ARMzMfgN4EnX7qaQEwQd4GV7RtM9fM+tCPpbTlwVECDOBJgRiJJ3qidoTh7D+GuXQxGvOgaCwU6VmBus6/CBJ7d4Iu0Kv41K61Qa++BJE9Cx1EdCcGKqrKhYl5yCCsxE589pwR9pNG8IPhADHUYLalMAkFWkL8QhpEgy2Jg0s0MiHjuHDhyQNtTdtRQMwE7Hb1IiqgoCkCGUiFONxJgT27kYnaDV9wht3F93JDggAMBBkxqLKWEBi2B1TrNHcdwjoVV1XY6YKicpAlZbTIbvEz1wFk07G0XuZPhFe1cF2y5tOoyUxjc4/I4+9bvkv+IF5Rp4myLo//ZblWiBunwsc9CvpWb4q2FhwiZEi2hgagY8RJnUQM6QZ1T1NBXljTqOpXGGypBHSIzjGJA1HbFWWRvglLEuz1vl3tjwV0T74W+4u+CPUnw/QmtTwXGWrgHu+ID/+3cVvX4Zrwp+Vyo8YDRqMmQBuAZjzxuYptvl8CdVtiDMq4GPVhP73pZZk+wLBR769tRknV8/yrqcUoyAojzrwu1zPjbQBVrmjzlx9TMfKj+E9urogXLIbaSpKn1jI/CsnZnCuj2O5za31ifTFQvzdT1ken+tYPl/tdwbiXa4h7NbYn/4yKL/3x5aDBuXfXQQPTMH7UrZlFs2H+1uy/v8AfnSPFXG2IUeVZux7Zcr6Xz6FLg/BKv8AlfMuHvjVw7I4G8GSP7huPnFJKTXRRROG256z9TT14BuzfSrJbsdvkK4zz3pPIHQgEcCRUw4Vu4+tTrUgoOZtAMeDH9X2rtTmaVDWHQj5g5dy+9ecKfARMsylYGfiJjGOnetRw9i3btqGJeJ0lhqOTMoswM/iaqLSXGgkkAEYkj4YIzt1xRCcZctM7a0b3kBtROsTuLdzOSJEkSJFUyNz2ujQ+neht++EJcXILAwp8ZIMx1keRnEjvVMt/UYLEE/1EwT0z9q0nOeE4fiCty0fdtp8QmR5aRMkR0xEdaF4nlFvQRJcnEgQAc50CT5bx3zFaGSEeeQuMpccEHL+MKQwJBGRP6GuEm46yOswPxiiuV8Ayq1n3IJ/rYEgZmFOwx3nyia0PLONeyoA4a1rUQLragQB/ex2JGMCelJPJFNtDRhJowvN2mNJOoHJnt5igbaXMvakzhgM+eRv8+nzzurvDs8t7lNbMSWXrtGmTt5DHlUH8a1uFIcEbklWHTOmSR3p4+pVVFX+Yrwu7lsU/JeEv3X1Gy4EbmVE9wTnIkbHfuKvuB5LpgO+psTpBOQTAUNuBq+x7wecw5raNsBLtz3kbwNIPmI/Cqg8wuf1u2ZjTI+ZJpHKc/gZRjH5NFzPiVtGBb1KRLECR1GiDMgggkk+IjMDNU73HuNqUkwNj0E9JmOo6DbFM/22dRlXAiAIz9RE10c2GSsqTiQqzHUQY38j160IxlHozp9hC20OSCsbYjUI3aMT/bXP4bpiDkSIMd1x9vTale58R8DNiIE4EdNJGkfKaGuc6aDsD0gsIHoIBO336wRlGbYbVD+O4JUiXXURJU/EN/iHQwJjzquuIuI323xUnC8Yi720ff4tUfZh+NC3WWdgPSe/mTVo2ibGe+VWwZj6euelEWeYFJKMRgjf+oQQO3+lCFB/THnn9ai/hvPr1EfWq/S+Rd0GnmC+GREGRvAz3mQcemKtl4w3dRKlmIEMCYxAkjr9etZs2D5H6/UCp+CuXbROh27kCcgEHI2OYOeoHallBNbGi2jSLwgEaLhDyoGDEmQF6zmDEHYeYDeJ5VxAUuQzOjEwg1MwiIB1Fgcn1k4Fd5T7QuGAazqJgeBQCY7J3+Y2FaVOecOGK3NVt9yt1CCD5kSJ+dck55IPiy6UJd0Y7mFs6hG0IDiM6SSSDnUdyT2PrXbFuBlsRvn7Ct5/F8PdGlbtp/8Al1K323qK7yOwwM2wCeokfT99TUvvS4aofxd2YC4iz4QxM77E0hwdzf3bfT9a2beziD4DEiO3360Bxfs5e/kYGfw7T2qq9VF/5EeFlAvBvGRAHeufw42KDp6/jtR/F+zfFkyFk4yG/wDtS/2ZxpUq1pgRJkEEHqR4Sc+VU8if8SE0P2Km9waA4U/L/wA1AnGPaabdx1PdWKmPUR+xRI5ZxHvJNpxBySrDyzjP5z03q3tC2BK21FwjxMwmDInSrYHrvVHlUV7iqDl8BfIvbnj1EC4LwGSLsHGZ8eG+ZJ6dMVoLX+KDggNwYjrF38AU+1YfmHHEmBj6D6AGKqzeadzQUVLegvbY9n5b/iJwtxtLrcteZAZZ7TbJI9SIrT8LzG1czbuI/wDawP4Gvn6xxDA/KMicx+O4+dRqFmSJ6/vFTeIZSPowsaVfPg4sdCw8qVL42HUWL8Pai2rWwAy6kEk+HUJJ889aXD8Lw5AIQROCAe3mQdprtKua3XL/AN/xOpQi+ia3wNg7Ln0ztvkxRfChbQlNSg9QqCTtt9cxSpVJtt02bSkrQQUBIU6pJgZH1n970BxnAqzPELpTWwMsNMwW0zH2mlSo41vyCTOry25B1XwdshQsAgHoJ6+dNvckfKteIif5egOTMnaR0G9KlWU3YXFNAfD8kR403GJJaBEHwzJ3jp96L/3XEfG5xjKid95mOnelSo5c04ukxY44voR9mLRGLjzgbgZxMeE/ep+E5BYPwtcH/UN/UL28qVKpyz5K5H8cV0StyOz2LHIMncicghfSm/7E4fGpDB2k5nePD0iKVKpeWfuPGKYj7PcLtBHzP5zTrPs/wwzonpufrSpUHlyV+8w6I3wO/wB2+H/p+7HH1FTjkNgb25nuzbfjSpUFmyPlsDjFdElrkdgf+kp9S30EGk3JbJ2Eah07fME/hSpVlkm+2DSl0D/7vW1fVbbSQNiNQ6icxnNNs+ztsZnUT/Uoj5D/AFpUqd5ppcgcV7FTf9m7wc6QjIcgREZ2Gokj70Vw3Jr6D/LuXEkxusdN9LZHyrlKnfq8nDon44ltw9njBAZ7ZBJgsskx5KVH1zR3u74jFsz6r9s12lUpTvpDLYeLj9Qv/cf/AKRSV7pPwLHfX+WmuUqS/gLJFut/SflH5kU/V3jGM9/vSpUGwkTWLbYKIf8Ap/WoTynhic2LU/2L+lKlWWSS7M0jjch4Y/8Aop8gB+FQj2c4bMW4nzJ/ExXaVMss/di0gc+y/Dd3/wC7/Su0qVN5snuw6V7H/9k=';
            
                Jimp.read(img_prueba).then(function (lenna) {
                      
                    lenna.resize(256, 256).getBase64(Jimp.MIME_PNG, function (err, src) { 
                       $("#img_prueba").attr("src",src);
                      });
                      
                });
                
        
                
                  </script>
        -->

    </body>

<link href='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.css' rel='stylesheet' type='text/css' />
        <script src='js/vendors/jquery-confirm-master/dist/jquery-confirm.min.js' type='text/javascript'></script>



</html>
