function ver_ficha_tecnica(identificador){
 var contenido =
 '  <div class="container-fluid"> '+
 '<h2 style="color:#2E9AFE">Visualizador de Ficha Técnica</h2>'+
 '<br>'+
 '<br>'+
 '<iframe style="width: 100%;height: 800px;" id="frame_tenica" src="ficha.jsp?identificador=' + identificador + '"></iframe>'+
 '</div> ';

return contenido;

  
}

