<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    session = request.getSession(false);
    if (session.getAttribute("user") == null) {
        response.sendRedirect("login.jsp");
    }
%>
<html>
    <head>
        <title>Caracterización</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <!-- Bootstrap -->
        <!--<link href="/css/bootstrap.min.css" rel="stylesheet">-->
        <!-- Font Awesome -->
        <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">


        <script language="JavaScript" src="js/md5.js"></script>
        <!-- jQuery -->
        <!--<script src="/js/jquery-3.1.1.min.js"></script>-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/reas/caracterizacion/pasos.js"></script>
        <script src="js/reas/caracterizacion/familia.js"></script>
        <script>
            function getURLParams(k) {
                var p = {};
                location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
                    p[k] = v;
                });
                return k ? p[k] : p;
            }

            var identificador = getURLParams('identificador');
            if(identificador){
                
            }
            
            console.log(identificador);
        </script>
       
        <link href="css/pasos.css" rel="stylesheet">
        <link href="css/forms.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step">
                    <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
                    <p>Información Institucional e Identificación del Predio</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                    <p>Identificacion de la Familia</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                    <p>Caracterizacion de  la Población</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-4" type="button" class="btn btn-default btn-circle" disabled="disabled">4</a>
                    <p>Acceso a Servicios Sociales, Educación y Salud</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-5" type="button" class="btn btn-default btn-circle" disabled="disabled">5</a>
                    <p>Dimesión Economica</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-6" type="button" class="btn btn-default btn-circle" disabled="disabled">6</a>
                    <p>Caracterización de la Vivienda</p>
                </div>
                <div class="stepwizard-step">
                    <a href="#step-7" type="button" class="btn btn-default btn-circle" disabled="disabled">7</a>
                    <p>Riesgo, Arraigo y Dimesión Sociocultural</p>
                </div>
            </div>
            <div class="row setup-content" id="step-1">
                <div class="col-xs-12 ">
                    <div class="col-md-12" >
                        <h3> Información Institucional e Identificación del Predio</h3>
                        <div class="form-group">
                            <label class="control-label">Identificador</label>
                            <input  maxlength="100" type="text" required="required" class="form-control" name="identificador" id="identificador" placeholder="Identificador REAS"  />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Numero y Fecha de concepto</label>
                            <input maxlength="100" type="text" required="required" class="form-control" id="concepto" name="concepto" placeholder="Concepto y fecha" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Direccion del PAR</label>
                            <input required="required" class="form-control" name="direccion" id="direccion" placeholder="Dirección del PAR"/> 
                        </div>
                        <div class="form-group">
                            <label class="control-label">Manzana</label>
                            <input type='number' min='1' required="required" class="form-control" name="manzana" id="manzana" placeholder="Manzana"/> 

                        </div>
                        <div class="form-group">
                            <label class="control-label">Lote Nº</label>
                            <input type='number' min='1' required="required" class="form-control" name="lote" id="lote" placeholder="lote"/>                                                                 
                        </div>
                        <div class="form-group">
                            <label class="control-label">Barrio</label>
                            <input required="required" class="form-control" name="barrio" id="barrrio" placeholder="Barrio"/>                                                                                                 
                        </div>
                        <div class="form-group">
                            <label class="control-label">Localidad</label>

                            <select class="form-control" required  id="localidad">
                                <option value="" disabled selected>Seleccione la Localidad</option>
                                <option>1. Usaquén</option>
                                <option>2. Chapinero</option>
                                <option>3. Santa Fe</option>
                                <option>4. San Cristóbal</option>
                                <option>5. Usme</option>
                                <option>6. Tunjuelito</option>
                                <option>7. Bosa</option>
                                <option>8. Kennedy</option>
                                <option>9. Fontibón</option>
                                <option>10. Engativá</option>
                                <option>11. Suba</option>
                                <option>12. Barrios Unidos</option>
                                <option>13. Teusaquillo</option>
                                <option>14. Los Mártires</option>
                                <option>15. Antonio Nariño</option>
                                <option>16. Puente Aranda</option>
                                <option>17. La Candelaria</option>
                                <option>18. Rafael Uribe Uribe</option>
                                <option>19. Ciudad Bolívar</option>
                                <option>20. Sumapaz</option>
                            </select>
                        </div>
                        <button class="btn btn-success nextBtn pull-right"  id="next1" type="button" >Guardar y Continuar</button>

                    </div>
                </div>
            </div>
            <div class="row setup-content" id="step-2">

                <h3> Identificacion de la Familia</h3>
                <div class="col-md-4 ">
                    <div class="panel panel-default text-center" >
                        <div class="card-header primary-color white-text">
                            <h3>Nucleo Familiar</h3> 
                        </div>
                        <div class="panel-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Parentesco</th>
                                    </tr>                                       
                                </thead>
                                <tbody id="familia_table">

                                </tbody>

                            </table>
                        </div>                           
                    </div>
                </div>
                <div class="col-md-8 panel panel-default" id="miembros">

                    <div class="row">                    
                        <div class="col-md-12 form-group">
                            <label class="control-label ">Tipo de Familia </label>
                            <select class="form-control tipofamilia" name="tipofamilia" id="tipofamilia">
                                <option value="" disabled selected>Seleccione el Tipo de Familia</option>
                                <option value='Nuclear'> Nuclear: Ambos padres con sus hijos, sin que estos ultimos tengan dependientes en el hogar </option>
                                <option value='Extensa'> Extensa: Familia nuclear con otros parientes diferentes a padres e hijos </option>
                                <option value='Compuesta'> Compuesta: Cada conyugue aporta hijos de una union anterior y a su vez existen hijos de la presente unión </option>
                                <option value='Monoparental'> Monoparental: Un solo padre/madre con sus hijos, sin que estos tengan dependientes en el hogar </option>
                                <option value='Ampliada'> Ampliada: Familia extensa donde viven miembros de la familia de dos o más generaciones, parientes cercanos o lejanos </option>
                                <option value='Unipersonal'> Unipersonal: Hogar en que vive una sola persona </option>
                                <option value='Pareja'> Pareja: Pareja del mismo o distinto género sin hijos </option>
                            </select>
                        </div>
                    </div>                 
                    <div  class="persona" >
                        <div class="row">
                            <div class="col-md-3 form-group">
                                <label class="control-label ">Primer Nombre</label>
                                <input type="text" pattern="[a-zA-Z]*" required="required" class="form-control nombre" name="nombre" id="nombre" placeholder="Primer Nombre"/>
                            </div>
                            <div class="col-md-3 form-group">
                                <label class="control-label">Segundo Nombre</label>
                                <input type="text" pattern="[a-zA-Z]*" required="required" class="form-control segundo" name="segundo" id="segundo" placeholder="Segundo Nombre"/>
                            </div>
                            <div class="col-md-3 form-group">
                                <label class="control-label">Primer Apellido</label>
                                <input type="text" pattern="[a-zA-Z]*" required="required" class="form-control apellido"  name="apellido" id="apellido" placeholder="Primer Apellido"/>
                            </div>
                            <div class="col-md-3 form-group">
                                <label class="control-label">Segundo Apellido</label>
                                <input type="text" pattern="[a-zA-Z]*" required="required" class="form-control segundap"  name="segundap" id="segundap" placeholder="Segundo Apellido"/>
                            </div>
                        </div>                    
                        <div class="row">
                            <div class="col-md-3  form-group">
                                <label class="control-label ">Fecha de Nacimiento</label>
                                <input type='date' required="required" class="form-control datepicker nacimiento" name="nacimiento" id="nacimiento" data-date-format="mm/dd/yyyy" />
                            </div>
                            <div class="col-md-3 form-group">
                                <label class="control-label">Ciudad de Nacimiento</label>
                                <input type='text' pattern="[a-zA-Z]*" class="form-control ciudad" name="ciudad" id="ciudad" placeholder="Ciudad de Nacimiento"/>
                            </div> 
                            <div class="col-md-3 form-group">
                                <label class="control-label ">Tipo</label>
                                <select class="form-control tipodoc" name="tipodoc" id="tipodoc" data-live-search="true">
                                    <option value="" disabled selected>Seleccione el Tipo de Identificación</option>
                                    <option value="1"> CC: Cedula de Ciudadania </option>
                                    <option value="2"> C.E: Cedula de Extranjería </option>
                                    <option value="3"> T.I: Tarjeta de Identidad </option>
                                    <option value="4"> R.C: Registro Civil </option>
                                    <option value="5"> P.A: Pasaporte </option>
                                    <option value="6"> NUIP: Número </option>
                                    <option value="7"> T.E: Tarjeta de Extranjería </option>
                                    <option value="0"> S.I: Sin Información </option>
                                </select>
                            </div>
                            <div class="col-md-3 form-group">                            
                                <label class="control-label">Fecha de expedición</label>
                                <input type='date' required="required" class="form-control datepicker expedoc" name="expedoc" id="expedoc" data-date-format="mm/dd/yyyy"/>
                            </div>

                        </div>
                        <div class="row">                        
                            <div class="col-md-3 form-group">
                                <label class="control-label">Nº de Documento</label>
                                <input class="form-control numdoc" name="numdoc" id="numdoc" placeholder="Número de Identificación"/>
                            </div>
                            <div class="col-md-3 form-group">
                                <label class="control-label">Grupo Etáreo</label>
                                <select class="form-control etareo" name="etareo" id="etareo">
                                    <option value="" disabled selected>Seleccione el Grupo Etáreo</option>
                                    <option value='1'>Primera Infancia: 0-5 años </option>
                                    <option value='2'>Infancia: 6-12 años </option>
                                    <option value='3'>Adolescencia: 13-17 años </option>
                                    <option value='4'>Jóvenes: 18-26 años </option>
                                    <option value='5'>Adultos: 27-59 años </option>
                                    <option value='6'>Adultos mayores: 60 años en adelante </option>                             
                                </select>
                            </div>
                            <div class="col-md-3  form-group">
                                <label class="control-label">Estado Civil</label>
                                <select class="form-control civil" name="civil" id="civil">
                                    <option value="" disabled selected>Seleccione el Estado Civíl</option>
                                    <option value='1'>Soltero </option>
                                    <option value='2'>Casado </option>
                                    <option value='3'>Unión marital de hecho </option>
                                    <option value='4'>Sin sociedad conyugal o comunidad de bienes </option>
                                    <option value='5'>Viudo </option>                                
                                </select>                      
                            </div>
                            <div class="col-md-3 form-group">
                                <label class="control-label ">Sexo</label>
                                <select class="form-control sexo" name="sexo" id="sexo">
                                    <option value="" disabled selected>Seleccione el Sexo</option>
                                    <option value='1'> Mujer </option>
                                    <option value='2'> Hombre </option>
                                    <option value='3'> Intersexual </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-success nextBtn pull-right" type="button" id="next2" >Guardar y Continuar</button> 
                <button class="btn btn-primary  pull-right"  id="add_miembro" type="button" >Nuevo miembro</button>
            </div>
            <div class="row setup-content" id="step-3">
                <div class="col-md-12">
                    <h3> Caracterización de la Población</h3>

                    <div class="" id="caracterizacion">

                    </div>

                </div>
                <button class="btn btn-primary nextBtn  pull-right" type="button" >Guardar y Continuar</button>                            
            </div>

            <div class="row setup-content" id="step-4">
                <div class="col-xs-12">
                    <div class="col-md-12">
                        <h3> Acceso a Servicios Sociales, Educación y Salud</h3>
                        <div id="servicios">                                

                        </div>
                        <button class="btn btn-primary nextBtn pull-right" type="button" >Guardar y Continuar</button>         
                    </div>
                </div>



            </div>

            <div class="row setup-content" id="step-5">
                <div class="col-xs-12">
                    <div class="col-md-12">
                        <h3>Dimensión Economica</h3>
                        <div class="" id="economica">                    
                        </div>
                        <button class="btn btn-primary nextBtn  pull-right" type="button" >Guardar y Continuar</button>                            
                    </div>
                </div>
            </div>
            <div class="row setup-content" id="step-6">
                <div class="col-xs-12">
                    <div class="col-md-12">
                        <h3>Caracterización de la Vivienda</h3>
                        <div id="vivienda">   
                            <div class="row">
                                <div class="col-md-5">Tipo de vivienda</div>
                                <div class="col-md-5">
                                    <select class="form-control tipo-vivienda" name="tipovivienda" id="tipovivienda"></select>
                                </div>
                                <div class="col-md-2">
                                    <input id="cual_tipovivienda" class="form-control cual_tipovivienda" name="cual_tipovivienda" placeholder="¿Cúal?"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">Documentos de Tenencia </div>
                                <div class="col-md-5">
                                    <select class="form-control tipo-tenencia" name="tipotenencia" id="tipotenencia"></select>
                                </div>
                                <div class="col-md-2">
                                    <input id="cual_tipovivienda"  class="form-control doc-tenencia" name="doctenencia" placeholder="¿Cúal?"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    Caracteristicas del Par:
                                    <ul class="list-group casa">
                                        <li class="list-group-item"><input type="number" class="form-control pisos" name="pisos" /> Número de pisos del PAR  </li>
                                        <li class="list-group-item"><input type="number" class="form-control cuartos" name="cuartos" /> Número de cuartos del PAR </li>

                                    </ul>
                                </div> 
                                <div class="col-md-4">
                                    Caracteristicas del Par:
                                    <ul class="list-group casa">                                           
                                        <li class="list-group-item"> <input type="number" class="form-control baños" name="baños" />   Número de baños del PAR</li>                                           
                                        <li class="list-group-item"><input type="number" class="form-control cocinas" name="cocinas" />  Número de cocinas del PAR </li>                                           
                                    </ul>
                                </div> 
                                <div class="col-md-4">Servicios públicos con los que cuenta el PAR:
                                    <ul class="list-group">
                                        <li class="list-group-item"><input type="checkbox" name="acueducto" />   Acueducto y alcantarillado</li>
                                        <li class="list-group-item"><input type="checkbox" name="energia" />   Servicio de Energia</li>
                                        <li class="list-group-item"><input type="checkbox" name="gas" />   Servicio de gas domiciliario</li>                                           
                                    </ul>
                                </div> 


                            </div>
                            <div class="row">
                                <!--                                <div class="col-md-3">
                                                                    Unidades Haitacionales
                                                                    <input type="number" class="form-control unidades" name="unidades" />
                                                                </div>-->
                                <div class="col-md-12">
                                    ¿Tiene afectación de vivienda familiar o patrimonio de familiar? 
                                    <textarea class="form-control afectacion" name="afectacion" id="afectacion"></textarea>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary nextBtn  pull-right" type="button" >Guardar y Continuar</button>                            
                    </div>
                </div>
            </div>
            <div class="row setup-content" id="step-7">
                <div class="col-xs-12">
                    <div class="col-md-12">
                        <h3>Riesgo, Arraigo y Dimesión Sociocultural</h3>
                        <div class="row">
                            <div class="col-md-4">
                                <!--<input type="checkbox" name="gustoUbicacion" />-->
                                ¿Se siente a gusto con la ubicación de su vivienda?                                    
                            </div>
                            <div class="col-md-2">
                                <select class="form-control"  name="gustoUbicacion">
                                    <option disabled selected>Seleccione...</option>
                                    <option value="si" >Si</option>
                                    <option value="no" >No</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                ¿Se siente a gusto con  su vivienda?                                    
                            </div>
                            <div class="col-md-2">
                                <select class="form-control"  name="gustoVivienda">
                                    <option disabled selected>Seleccione...</option>
                                    <option value="si" >Si</option>
                                    <option value="no" >No</option>
                                </select>                                                                  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                ¿Se siente a gusto con  su vecindario?                               
                            </div>
                            <div class="col-md-2">
                                <select class="form-control"  name="gustoVecindario">
                                    <option disabled selected>Seleccione...</option>
                                    <option value="si" >Si</option>
                                    <option value="no" >No</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                ¿Hace cuanto vive en la zona?
                            </div>
                            <div class="col-md-1">
                                <input type="number"  min="1" class="form-control años-zona" name="añosZona"/> 
                            </div>

                            <div class="col-md-2">
                                <select class="form-control">
                                    <option value="" disabled selected>seleccione...</option>
                                    <option value="1">Año(s)</option>
                                    <option value="2">Mes(es) </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                La idea de salir de salir del predio en alto riesgo le parece:
                                <select class="form-control">
                                    <option value="" selected disabled>seleccione...</option>
                                    <option value="1"  >Positiva</option>
                                    <option value="2"  >Aceptable</option>
                                    <option value="3"  >Negativa</option>
                                    <option value="4"  >Traumática</option>
                                    <option value="5"  >Indiferente</option>
                                </select>
                                <textarea  class="form-control" name="porqueSalir" placeholder="¿Explique por qué?"></textarea>
                            </div>
                            <div class="col-md-6">
                                Nivel de importanciade la zona donde vive para su proyecto de vida:
                                <select class="form-control">
                                    <option value="" selected disabled>seleccione...</option>
                                    <option value="1"  >Alto</option>
                                    <option value="2"  >Medio</option>
                                    <option value="3"  >Alto</option>                                    
                                </select>
                                <textarea  class="form-control" name="porqueImportancia" placeholder="¿Explique por qué?"></textarea>
                            </div>

                        </div>  
                        <div class="row">
                            <div class="col-md-4">
                                ¿Convive con algun tipo de animal?
                            </div>
                            <div class="col-md-2">
                                <select class="form-control"  id="boolMascota" name="boolMascota">
                                    <option disabled selected>Seleccione...</option>
                                    <option value="si" >Si</option>
                                    <option value="no" >No</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                ¿Cuantos y de que tipo?                                    
                            </div>
                            <div class="col-md-3">
                                <input type="text" class="form-control mascotas" disabled name="mascotas" id="mascotas" placeholder="Ejemplo: 5 Gatos"/>                                   
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-2">
                                Nombre
                            </div>
                            <div class="col-md-3">
                                ¿asiste a alguna de las siguientes actividades en la zona donde vive?                                        
                            </div>
                            <div class="col-md-3">
                                Las relaciones en su barrio son:                                       
                            </div>
                            <div class="col-md-4">
                                ¿Pertenece a alguna organización de la zona donde vive?  
                            </div>
                        </div>
                        <div id="sociocultural">

                        </div>     
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                Realice observaciones si identifica situaciones de atención prioritaria, describalas y reportelas en este campo

                                <textarea  class="form-control" name="observaciones" placeholder=""></textarea>
                            </div>                                
                        </div>                           
                        <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" >Finalizar</button>                            
                    </div>
                </div>
            </div>

        </div>


    </body>
</html>
