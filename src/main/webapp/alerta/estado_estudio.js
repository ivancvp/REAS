
function gen_est_estudio (identificador,datos_255,datos_511){

var datos_255 = datos_255[0];
var datos_511 = datos_511[0];

if(datos_255===undefined){
    datos_255=null;
}
if(datos_511===undefined){
    datos_511=null;
}
console.log(datos_255);
console.log(datos_511);
var msg_255='';
var pro=false;
var btn_edicion_255='';
var btn_edicion_511='';



if(datos_255!==null){
    
  if(datos_511!==null){
      
   if(datos_255["Procede"]===true){
        msg_255='<p class="col">Estudio de documentos que <b>Procede</b> por 255,'+
               ' elaborado el día '+(datos_255["Fecha Estudio de Titulos"]?datos_255["Fecha Estudio de Titulos"]:'N/A')+
               ' por '+(datos_255["Elaborado por"]?datos_255["Elaborado por"]:'N/A')+
               ', revisado por '+(datos_255["Revisado por"]?datos_255["Revisado por"]:'N/A')+
               ' y aprobado por '+(datos_255["Aprobado por"]?datos_255["Aprobado por"]:'N/A')+
               '</p>';
       btn_edicion_255='<button type="button" class="btn btn-default btn-xs"><i class="fa fa-close"></i> No disponible para editar</button>';
       btn_edicion_511='<button type="button" class="btn btn-default btn-xs"><i class="fa fa-close"></i> No disponible para editar</button>';
       pro=true;
    
    }

 if(datos_255["Procede"]===false){
    
    if(datos_511["Procede"]===true){
        msg_255='<p class="col">Estudio de documentos que no procede por 255 y que procede por 511</p>';
    btn_edicion_255='<button type="button" class="btn btn-default btn-xs"><i class="fa fa-close"></i> No disponible para editar</button>';
    btn_edicion_511='<button type="button" class="btn btn-default btn-xs"><i class="fa fa-close"></i> No disponible para editar</button>';
    }
    if(datos_511["Procede"]===false){
    msg_255='<p class="col">Estudio de documentos que no procede por 255 ni por 511</p>';
    btn_edicion_255='<button type="button" class="btn btn-default btn-xs"><i class="fa fa-close"></i> No disponible para editar</button>';
    btn_edicion_511='<button type="button" class="btn btn-default btn-xs"><i class="fa fa-close"></i> No disponible para editar</button>';
    }
    if(datos_511["Procede"]==='Vacio'){
        msg_255='<p class="col">Estudio de documentos que no procede por 255, queda por hacer el 511</p>';
        btn_edicion_511= '<button type="button" class="btn btn-primary btn-xs" id="btn_ver_255" onclick="hola({formulario:2,index:\''+identificador+'\',modo:3})"><i class="fa fa-edit"></i></button>'; 

    }
    
}
    if(datos_255["Procede"]==='Vacio'){
        msg_255='<p class="col">Sin Estudio de documentos por 255</p>';
        btn_edicion_255= '<button type="button" class="btn btn-primary btn-xs" id="btn_ver_255" onclick="hola({formulario:2,index:\''+identificador+'\',modo:3})"><i class="fa fa-edit"></i></button>'; 
    }
      
  }
  
  
}else{
    btn_edicion_255= '<button type="button" class="btn btn-primary btn-xs" id="btn_ver_255" onclick="hola({formulario:2,index:\''+identificador+'\',modo:3})"><i class="fa fa-edit"></i> Elaborar</button>'; 
    btn_edicion_511= '<button type="button" class="btn btn-primary btn-xs" id="btn_ver_255" onclick="hola({formulario:2,index:\''+identificador+'\',modo:3})"><i class="fa fa-edit"></i> Elaborar</button>'; 

}



 var contenido=
'<h1>Elaboración de estudio de documentos</h1>'+
   '<p style="color:#5F6A6A; font-weight: bold ">Dirección de Reasentamientos</p>'+
'<hr />'+
'<div class="row">'+
'<p>Modulo para la creación de estudios de documentos nuevos</p>'+
'</div>'+
 '<div class="row">'+
    msg_255+
 '</div>'+
 '<div class="row">'+
        '  <div class="form-horizontal" > '+
        '    <div class="form-group">'+        
        '           <p class="col-sm-4">Estudio de documentos por 255:</p>'+
        btn_edicion_255+
        '    </div>'+
        '</div>'+ 
'</div>'+
 '<div class="row">'+
        '  <div class="form-horizontal" > '+
        '    <div class="form-group">'+        
        '           <p class=" col-sm-4">Estudio de documentos por 511:</p>'+
        btn_edicion_511+
        '    </div>'+
        '</div>'+ 
'</div>';


 return contenido;
}


 