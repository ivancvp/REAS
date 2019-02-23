function proy_propio(){
    
    var contenido=
            
    
    '<h3>Proyecto de Arboleda Santa Teresita</h3>'+
    '<p>Arboleda Santa Teresita es el proyecto más grande de vivienda VIP en Bogotá, ubicado en la localidad de San Cristóbal.'+ 
    'Es el conjunto residencial perfecto para disfrutar de zonas verdes y compartir en comunidad. Está conformado por dos sectores,'+
    'de 23 torres cada uno con seis pisos, excelentes instalaciones y muy buenos acabados en los apartamentos.</p>'+    
    '<iframe src="http://cvpe0021/Panoramica/CVP.html" width="100%" height="500"></iframe>'+
    '<h4>Ubicación del Proyecto</h4>'+
    '<div id="map"></div>'+
    '<h4>Fotos del avance de Obra</h4>'+
    '<div id="galley">'+
      '<ul class="pictures">'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/1.JPG" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/1.JPG" alt="Cuo Na Lake"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/2.jpg" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/2.jpg" alt="Tibetan Plateau"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/3.JPG" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/3.JPG" alt="Jokhang Temple"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/4.jpg" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/4.jpg" alt="Potala Palace 1"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/5.jpg" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/5.jpg" alt="Potala Palace 2"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/6.JPG" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/6.JPG" alt="Potala Palace 3"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/7.JPG" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/7.JPG" alt="Lhasa River"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/8.JPG" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/8.JPG" alt="Namtso 1"></li>'+
        '<li><img data-original="inmobiliaria/proyecto_propio/santa_teresita/fotos/9.JPG" src="inmobiliaria/proyecto_propio/santa_teresita/fotos/9.JPG" alt="Namtso 2"></li>'+
      '</ul>'+
    '</div>'+
    '<h4>Folleto del Proyecto</h4>'+
    '<p>En el siguiente folleto, podra encontrar información detallada del proyecto.</p>'+
    '<div class="form-group">'+
        '<button type="button" class="btn btn-danger btn-xs" data-toggle="tooltip" data-placement="bottom" title="Ver Pdf" id="ver_pdf">'+
            '<span class="glyphicon glyphicon-file"></span>Ver pdf'+
        '</button>'+      
    '</div>'+
    '<div id="pdf" style="display:none">'+    
        '<embed src="inmobiliaria/proyecto_propio/santa_teresita/santa_teresita.pdf" width="100%" height="500" type=\'application/pdf\'>'+
    '</div>'+
    '<h4>Apartamento Tipo</h4>'+
    '<p>El diseño de los apartamentos consta de cocina, sala-comedor, 3 alcobas, baño y 1 balcón.Los apartamentos se entregaran con muros'+ 
    'de concreto a la vista, puertas de baño y habitaciones, enchape de pisos y salpicadero en la zona de cocina, enchape de la cabina de'+
    'la ducha así como gasodomésticos (calentador y estufa a gas).</p>'+
    '<img src="inmobiliaria/proyecto_propio/santa_teresita/apto.PNG" width="100%" heigth="auto">'+
    '<h4>Planta Urbana</h4>'+
    '<img src="inmobiliaria/proyecto_propio/santa_teresita/planta.PNG" width="100%" heigth="auto">'+
        '<script>'+
    
       'var galley = document.getElementById(\'galley\');'+
       'var viewer;'+
       '$(\'#modal\').on(\'shown.bs.modal\', function (e) {'+        
         'if(e.namespace === \'bs.modal\') {'+
           'viewer = new Viewer(galley, {'+
             'url: \'data-original\','+
           '});'+
         '}'+
       '}).on(\'hidden.bs.modal\', function (e) {'+        
         'if(e.namespace === \'bs.modal\') {'+
           'viewer.destroy();'+
         '}'+
       '});'+
     
'</script>';
    
    
    
    return contenido;
    
    
}