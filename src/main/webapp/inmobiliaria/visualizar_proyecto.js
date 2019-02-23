 
 function ver_modal(){
     var contenido=
            '<div class="modal-header">'+
                '<h4 class="modal-title">Visualizador de proyectos</h4>'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
            '</div>'+
            '<div class="modal-body">'+          
                
                '<div class="form-group">'+
                    '<h4>Vivienda Usada</h4>'+
                    '<p>En esta sección se muestran los predios usados en venta que podrian ser de su interes</p>'+
                    '<button type="button" class="btn btn-success btn-xs" onclick="ver_modal_usado()">Ver</button>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>Proyecto Nuevo</h4>'+
                    '<p>En esta sección se muestran los proyectos de vivienda nuevos por parte de privados</p>'+
                    '<button type="button" class="btn btn-success btn-xs" onclick="ver_nuevo()">Ver</button>'+
                    '<button type="button" class="btn btn-primary btn-xs" onclick="editar(1)" >Editar</button>'+
                    '<button type="button" class="btn btn-warning btn-xs" onclick="add_element(1)" >+</button>'+
                    '<div id="list_nuevo">'+
                    '</div>'+
                '</div>'+
                '<div class="form-group">'+
                    '<h4>Proyecto Propio</h4>'+
                    '<p>En esta sección se muestran los proyectos en los cuales la caja de la vivienda popular tiene participación y pueden ser su alternativa de'+
                    'solución de vivienda</p>'+
                    '<button type="button" id="buton_proy_nuevo" class="btn btn-success btn-xs" onclick="ver_propio()">Ver</button>'+
                    '<button type="button" class="btn btn-primary btn-xs" onclick="editar(2)" >Editar</button>'+
                    '<button type="button" class="btn btn-warning btn-xs" onclick="add_element(2)" >+</button>'+
                    '<div id="list">'+
                    '</div>'+
                '</div>'+
             '</div>'+
             
            '<div class="modal-footer">'+
              '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
            '</div>';
 
    

   
   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');
   
 
   
 }
 
 
 
 function ver_modal_loretta(){
     var contenido=
            '<div class="modal-header">'+
                '<h4 class="modal-title">Estado Proceso de Selección de Vivienda</h4>'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
            '</div>'+
            '<div class="modal-body">'+
                '<div class="form-group">'+
                    '<h4>1 Información Basica</h4>'+                    
                    '<button type="button" class="btn btn-success" onclick="ver_detalle_loretta(1)">Ver</button>'+
                '</div>'+
             '</div>'+
             
            '<div class="modal-footer">'+
              '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
            '</div>';
   $('#form').empty();
   $('#form').append(contenido);
   $('#modal_form').modal('show');
   

 }
 
 function ver_detalle_loretta(id){
     
    var contenido=
      '<div class="modal-header">'+
          '<h4 class="modal-title">Base de Datos de Selección de Vivienda</h4>'+
          '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
      '</div>'+
      '<div class="modal-body">'+        
        loretta_paso(id)+
       '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
      '</div>';
     
     
     
     
   $('#form1').empty();
   $('#form1').append(contenido);
   $('#modal').modal('show');
     
     
 }
 
 
 var conta_propio=0;
  function ver_nuevo(){
      
    if(conta_propio===1){
        var x = document.getElementById("cont_nuevo");
        if (x.style.display === "none") {
            x.style.display = "block";          
        } else {
            x.style.display = "none";           
        }
    }
      if(conta_propio===0){
      
     var contenido='<div id="cont_nuevo" style="height: 200px; overflow-y:scroll">'+
'<table class="table" >'+
'      <tr>'+
'        <th>Ver</th>'+
'        <th>Nombre</th>'+
'        <th>Localidad</th>'+
'      </tr>'+
'    </thead>'+
'    <tbody>'+
'      <tr>'+
'        <td>Torres de San Rafael II</td>'+
'        <td></td>'+
'        <td>'+
                '<div class="btn-toolbar">'+
                '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                    '<span class="glyphicon glyphicon-search"></span>'+
                '</button>'+
            '</div> '+
'       </td>'+
'      </tr>'+
'      <tr>'+
'        <td>Colores de Bolonia</td>'+
'        <td></td>'+
'        <td>'+
                '<div class="btn-toolbar">'+
                '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                    '<span class="glyphicon glyphicon-search"></span>'+
                '</button>'+
            '</div> '+
'       </td>'+
'      </tr>'+
'      <tr>'+
'        <td>Torres de San Rafael I</td>'+
'        <td></td>'+
'        <td>'+
                '<div class="btn-toolbar">'+
                '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                    '<span class="glyphicon glyphicon-search"></span>'+
                '</button>'+
            '</div> '+
'       </td>'+
'      </tr>'+
'      <tr>'+
'        <td>Villanova</td>'+
'        <td></td>'+
'        <td>'+
                '<div class="btn-toolbar">'+
                '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                    '<span class="glyphicon glyphicon-search"></span>'+
                '</button>'+
            '</div> '+
'       </td>'+
'      </tr>'+
'      <tr>'+
'        <td>San Miguel II</td>'+
'        <td></td>'+
'        <td>'+
                '<div class="btn-toolbar">'+
                '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                    '<span class="glyphicon glyphicon-search"></span>'+
                '</button>'+
            '</div> '+
'       </td>'+
'      </tr>'+
'    </tbody>'+
'  </table>'+
'</div>';

$('#list_nuevo').append(contenido);
     }
     
        conta_propio=1;
 }
 

 
 var conta=0;
 function ver_propio(){
    
    if(conta===1){
        var x = document.getElementById("cont_propio");
        if (x.style.display === "none") {
            x.style.display = "block";          
        } else {
            x.style.display = "none";           
        }
    }
 
     if(conta===0){
        var contenido='<div id="cont_propio" style="height: 200px; overflow-y:auto;overflow-x:auto">'+
            '<table class="table" >'+
            '      <tr>'+
            '        <th>Ver</th>'+
            '        <th>Nombre</th>'+
            '        <th>Localidad</th>'+
            '        <th>Cupos Disponibles</th>'+
            '        <th>Cantidad de Torres</th>'+
            '      </tr>'+
            '    </thead>'+
            '    <tbody id="tab_pro_nuevo">'+
            '      <tr>'+
            '        <td >'+
                            '<div class="btn-toolbar">'+
                            '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                                '<span class="glyphicon glyphicon-search"></span>'+
                            '</button>'+
                        '</div> '+
            '       </td>'+
            '        <td ><input type="text" class="form-control edit" value="Santa Teresita"></td>'+
            '        <td ><input type="text" class="form-control edit" value="San Cristobal"></td>'+
            '        <td ><input type="number" class="form-control edit" value="480"></td>'+
            '        <td ><input type="number" class="form-control edit" value="10"></td>'+

            '      </tr>'+
            '      <tr><td>'+
                            '<div class="btn-toolbar">'+
                            '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                                '<span class="glyphicon glyphicon-search"></span>'+
                            '</button>'+
                        '</div> '+
            '       </td>'+
            '           <td><input type="text" class="form-control edit" value="Arborizadora Cra 38 - Mz 54"></td>'+
            '           <td><input type="text" class="form-control edit" value="Ciudad Bolivar"></td>'+
            '        <td ><input type="number" class="form-control edit" value=""></td>'+
            '        <td ><input type="number" class="form-control edit" value=""></td>'+

            '      </tr>'+
            '      <tr>'+
            '        <td>'+
                            '<div class="btn-toolbar">'+
                            '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="ver_modal_propio()">'+
                                '<span class="glyphicon glyphicon-search"></span>'+
                            '</button>'+
                        '</div> '+
            '       </td>'+
            '<td><input type="text" class="form-control edit" value="Arborizadora Cra 38 - Mz 55"></td>'+
            '          <td><input type="text" class="form-control edit" value="Ciudad Bolivar"></td>'+
            '        <td ><input type="number" class="form-control edit" value=""></td>'+
            '        <td ><input type="number" class="form-control edit" value=""></td>'+
            '      </tr>'+
            
            '    </tbody>'+
            '  </table>'+
            '</div>';

            $('#list').append(contenido); 
     }
     conta=1;
     
     
 }
 
 function add_element(i){
     
     if(i==2){
       var contenido='<tr>'+
         '   <td>'+
            '<div class="btn-toolbar">'+
            '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Proyecto" onclick="">'+
                '<span class="glyphicon glyphicon-search"></span>'+
            '</button>'+
           '</div> '+
         '  </td>'+
            '<td><input type="text" class="form-control edit" value=""></td>'+
            '<td><input type="text" class="form-control edit" value=""></td>'+
            '<td ><input type="number" class="form-control edit" value=""></td>'+
            '<td ><input type="number" class="form-control edit" value=""></td>'+
         '</tr>';
             
     $('#tab_pro_nuevo').append(contenido); 
     }

 
 }
 

 function editar(i){
     if(i===2){
          if($('.edit').prop('disabled')){
            $('.edit').prop('disabled',false);
        }else{
            $('.edit').prop('disabled',true);
        }
     }
 }
 
 
  function ver_modal_propio(){
     var contenido=
                '<div class="modal-header">'+
                    '<h4 class="modal-title">Visualizador de proyectos</h4>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
                '</div>'+
                '<div class="modal-body">'+
                    proy_propio()+            
                '</div>'+             
                '<div class="modal-footer">'+
                  '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
                '</div>';

   $('#form1').empty();
   $('#form1').append(contenido);
   $('#modal').modal('show');
   
 
   
   
   $('#ver_pdf').on('click',function () {
       $('#pdf').css('display', 'inline');
      
   });
   
  
     
     $('#map').css('height', '200px');
     $('#map').css('width', '100%');
     
     var map = L.map('map').setView([4.527, -74.086], 15);
     
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
                        ,maxZoom: 30}).addTo(map);

    var polygon = L.polygon([
        [4.5278590, -74.0861750],
        [4.5274526, -74.0856063],
        [4.5273242, -74.0851235],
        [4.5272600, -74.0848875],
        [4.5269392, -74.0849626],
        [4.5269071, -74.0851128],
        [4.5259231, -74.0858531],
        [4.5254525, -74.0856493],
        [4.5250675, -74.0859175],
        [4.5253777, -74.0862179 ],
        [4.5256236, -74.0865505 ],
        [4.5258376, -74.0868831],
        [4.5260087,-74.0869904],
        [4.5263402, -74.0868616],
        [4.5266397, -74.0870333],
        [4.5269071, -74.0871191],
        [4.5272066, -74.0871191],
        [4.5274632, -74.0870762],
        [4.5275916, -74.0868616],
        [4.5276451, -74.0866256],
        [4.5277627, -74.0863466] 
 
    ], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
    
polygon.bindPopup("<b>Santa Teresita</b><br>TV15 ESTE 61 A 10 SUR").openPopup();


   
   
 }
 
 
 
  function ver_modal_usado(){
     var contenido=
                '<div class="modal-header">'+
                    '<h4 class="modal-title">Visualizador de proyectos</h4>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+              
                '</div>'+
                '<div class="modal-body">'+
                    ' <div class="row"> '+
        '    <div class="form-group col-sm-3">'+
        '     <label >Metro Cuadrado</label>'+
        '<a class="btn" href="http://www.metrocuadrado.com/">Link</a>'+
        '   </div>'+
        '    <div class="form-group col-sm-3">'+
        '     <label >Finca Raíz</label>'+
        '<a class="btn" href="https://www.fincaraiz.com.co/">Link</a>'+
        '   </div>'+
        '    <div class="form-group col-sm-6">'+
        '     <label >Olx</label>'+
       
        '<a class="btn" href="https://bogota.olx.com.co/apartamentos-casas-venta-cat-367">Link</a>'+
        '   </div>'+

    ' </div>  '+
                '</div>'+             
                '<div class="modal-footer">'+
                  '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>'+
                '</div>';

   $('#form1').empty();
   $('#form1').append(contenido);
   $('#modal').modal('show');
   
 
   

   
 }
 