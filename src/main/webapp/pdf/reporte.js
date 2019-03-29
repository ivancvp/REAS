




 function pdf1(identificador){
     

var can=0;
var img_vacia='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa4AAAFKCAIAAADKQixZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAf8SURBVHhe7dy9etNWAMdhp9eSMPBwBe4VkC6dWNnMSJZuGdm6hLHZWJm6kFwBuQIehjr3kv51pNg68kfi2BgD7ztAZcn6cKpfdE7SHt3d3Y0Afm2/dX8D/MKkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaQQIKQQQAoBpBAgpBBACgGkECCkEEAKAaTwENy+//3o6Oj397fd8oa2fPvQ9Ztd7m175fJm57Pji93C4EzaxTfX7dIy5YNdtwHflRTuS3uv3Dug1lSu35xejiZXn98edy/Ar0EK9yJPBCdno4vpXWf66uPJrIbHbz/npSfXZ8u39zUhHF9M/3nZLR+eHV7slg7nTNgJKdyD2/fvLkejyfn8tmnuowO8i17+4+bmFyWFezD9ejMajZ+fdIsL6lmk2eRYebm1doppMAnVLDZv743Iu5WLr8z1DrZk+F6t7fR2Ua3u73rja2ms3bas7L+8dOty3Gaxd8kLFzW8rOpgD5/5wpm01h+xVh1/cVfsVR7y+dauJs1HnaFntzxQVk+uuqXpxbjZer59+8Js/YL67d3B5m9vlyeT/NVtNNxhs8Xw/b3DlRcGe5uvrXc22PXG17LsYL0Xupdm76+Wsu/qMONx/rhfWe23MXihPbHhcu+lhTOvz2S2/coj1tsP9rewd/ZNCvej3AdF/3bsLLupqs0Gd9HAYG17qN7W3V3af/8GOyzv7p3NYLnZtjrXav2m11JWLm4+ON7s7Sv31V3y6gMvHmiwwcNnXi8+eMQlS9XG1efG/hkg70czC9feLTdnJxkNPTh2evGsN2V38jzv/PLfA2/pm/w5/9HH8bMX+bP/Smv9DletLXu7+Tptl67/vRyca72+ePS13P73JTl49Udv85d/tY1Zquzr8t2qz7I/O3u/8b9lGLrkQDnUn8lTt0Fn06/C6iMOPOpzY5+kcH/anzm2RWyC+GNODrUV6SY+y8Lo8rSd7Wqd5iZ/ojKpWgViveO3H/JhPvKbS/sdobXmQBt9x1mvf8Tajj83dkAK964pYsnh6seZ/etN9g9uyuO355PU5u+u29d/n90Mn6fmg8aZLX4fZ6MWlW8vs28uP9h3l91+bmxHCr+L1c8L30GTweq3Hsus1r3ym0Dj8ZfuCeb0Mjfw7BdudnwdZUS5ufZxuznrdd9dqsfZxvLmbvBQ+pCFI84c1NefQgq/i3aAtMO7bhtltFjPcvU0a8evPpSxfVE9uKyZDnuCUoibj596iSpPoY+y2NHqvG4/fZwPisu0YH2gbv5ucUp1E6uPOLDbz40dkMJvrww++0O32/evm1HmxV+HMRqqb8ucbTVAbta2s3Fz83m5drbu8rQ3U9dc7lMHquWHJL3R+Juj0y/Nr8QsVx1p2cj98vR+/fAj7w70enba7WVPrrYaoZaH5xVHrO34c2N7UvjtZfx2NelPkZ+cvbg6oP+so5zfbA7/5Ot5NUI+/uPVuP4lj6tJ0ji7h5vRaXmlfXu7gycHJXubXozvz+Xd8+nd5/OVY8mmJ/cD94zcc5L1Z5qh/NWoXX9ydtMf2LenPb0YzU67/ZpsOVX34jyfxaojDuz2c2NrR/lXu/tHWNQ8mDXTg/2bNM8vZW7xYGK+oJxhkyJt4ZE8FbJOO6k5UCYX4acihaxThsf1D2bL/8dr9Y9Z4Ickhay1MKXVjpeNPPnJmCsE8FQIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIIIUAIYUAUggghQAhhQBSCCCFACGFAFIIMBr9DyhAAH0n6TeeAAAAAElFTkSuQmCC';
var img_ubicacion=img_vacia; 
var img_ext=img_vacia;
var can=img_vacia;
var im1=img_vacia;
var im2=img_vacia;                                 
var im3=img_vacia;
var im4=img_vacia;
var im5=img_vacia;
var im6=img_vacia;
var img_esp=img_vacia;
var img_coc=img_vacia;
var img_nom=img_vacia;
var img_hab=img_vacia;
var img_usa=img_vacia;

$datos = {
        op: 'buscar_ficha_imagenes',
        identificador: identificador
    }; 

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: false,
        success: function (response) {
            if (response.length > 0){
                 resultados = response[0];
                
                img_ubicacion = (resultados["foto_ubicacion"]?resultados["foto_ubicacion"]:img_vacia); 
                                    
                can = (resultados["foto_plano"]?resultados["foto_plano"]:img_vacia);

                }

        },
        error: function (response) {
        }
    });
    
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
                                        img_ext = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9102') {
                                        img_esp = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9103') {
                                        img_coc = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9104') {
                                        img_nom = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9105') {
                                        img_hab = 'ObtenerArchivo?ID='+resultado["id"];
                                    }
                                    if ((resultado["descripcion"] ? resultado["descripcion"] : '') === 'imagen9106') {
                                        img_usa = 'ObtenerArchivo?ID='+resultado["id"];
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
    
    
    
    
    

function img_ubi(callback){

Jimp.read(img_ubicacion).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_ubicacion=src;
               
                callback();
              });
        });

}

function img_plano(callback){

Jimp.read(can).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                can=src;
               
                callback();
              });
        });

}

function img_1(callback){

Jimp.read(img_ext).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_ext=src;
                
                callback();
              });
        });

}
function img_2(callback){

Jimp.read(img_esp).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_esp=src;
                
                callback();
              });
        });

}
function img_3(callback){

Jimp.read(img_coc).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_coc=src;
                
                callback();
              });
        });

}
 function img_4(callback){

Jimp.read(img_nom).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_nom=src;
                
                callback();
              });
        });

}
function img_5(callback){

Jimp.read(img_hab).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_hab=src;
               
                callback();
              });
        });

}

function img_6(callback){

Jimp.read(img_usa).then(function (lenna) {
            
            lenna.getBase64(Jimp.MIME_PNG, function (err, src) {                
                img_usa=src;
                
                callback();
              });
        });

}
img_ubi(function(){
 
   img_plano(function(){
      
        img_1(function(){
         
            img_2(function(){
              
                img_3(function(){
                   
                    img_4(function(){
                        
                        img_5(function(){
                           
                            img_6(function(){
                                

     
                        var resultados = {};
                        var fecha_elaboracion = 0; 
                        var nombre_visita =0;
                        var cedula_visita =0;
                        var nombre_prin =0;
                        var cedula_prin =0;
                        var parentesco =0;
                        var nombre_sec =0;
                        var cedula_sec =0;
                        var telefono1 =0;
                        var telefono2 =0;
                        var localidad =0;
                        var barrio =0;
                        var upz =0;
                        var dir_campo =0;
                        var dir_reco =0;
                        var man_reco =0;
                        var lot_reco =0;
                        var dir_cat =0;
                        var man_cat =0;
                        var lot_cat =0;
                        var chip =0;
                        var area_ter =0;
                        var area_con =0;
                        var lin_nor =0;
                        var lin_sur =0;
                        var lin_ori =0;
                        var lin_occ =0;
                        var cord_x =0;
                        var cord_y =0;
                        var acu_dis =0;
                        var acu_mod =0;
                        var acu_con =0;
                        var acu_dir =0;
                        var alc_dis =0;
                        var alc_mod =0;
                        var alc_con =0;
                        var alc_dir =0;
                        var ase_dis =0;
                        var ase_mod =0;
                        var ase_con =0;
                        var ase_dir =0;
                        var gas_dis =0;
                        var gas_mod =0;
                        var gas_con =0;
                        var gas_dir =0;
                        var tel_dis =0;
                        var tel_mod =0;
                        var tel_con =0;
                        var tel_dir =0;
                        var ene_dis =0;
                        var ene_mod =0;
                        var ene_con =0;
                        var ene_dir =0;
                        var tip_inm =0;
                        var num_pis =0;
                        var unid_viv =0;
                        var est_con1 =0;
                        var est_con2 =0;
                        var etp_cons =0;
                        var uso_pred =0;
                        var cimen =0;
                        var estruct =0;
                        var mat_par =0;
                        var mat_pis =0;
                        var mat_cub =0;
                        var num_hab =0;
                        var num_gar =0;
                        var num_san =0;
                        var num_loc =0;
                        var num_coc =0;
                        var num_bod =0;
                        var num_lav =0;
                        var num_pat =0;
                        var esp_mul =0;
                        var zon_soc =0;
                        var cri_ani =0;
                        var coc_enc =0;
                        var coc_lav =0;
                        var coc_mes =0;
                        var coc_ind =0;
                        var san_enc =0;
                        var san_duc =0;
                        var san_apar =0;
                        var san_des =0;
                        var san_poz =0;
                        var san_lad =0;
                        

                        var observ=0;
                        var nom_ela=0;
                        var car_ela=0;
                        var nom_rev=0;
                        var car_rev=0;
                        
                        var sector="";
                        var decreto="";
                        var concepto="";
                        var acta="";
                        var con_ingreso="";
                        var titulo_acta="";
                        var disponible_imprimir="Preliminar";
                        var version="";
                        var vigencia="";
                   
                   $datos = {
                            op: 'buscar_ficha',
                            identificador: identificador
                        };
                       
                       
                        $.ajax({
                            type: "GET",
                            url: "GestionConsultas",
                            data: $datos,
                            dataType: "json",
                            
                            success: function (response) {
                                if (response.length > 0)
                                {
                                    resultados = response[0];
                                    
                                    
                                    fecha_elaboracion = resultados["fecha_elaboracion"];
                                    concepto =(resultados["con_ingreso"]?resultados["con_ingreso"]:'').trim();  
                                    
                                    nombre_visita =(resultados["nombre_visita"]?resultados["nombre_visita"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');                                    
                                    cedula_visita =(resultados["cedula_visita"]?resultados["cedula_visita"]:'Sin Información').trim();
                                    nombre_prin =(resultados["nombre_prin"]?resultados["nombre_prin"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,''); 
                                    
                                    cedula_prin =(resultados["cedula_prin"]?resultados["cedula_prin"]:'Sin Información');
                                    parentesco =(resultados["parentesco"]?resultados["parentesco"]:'Sin Información').trim();
                                    nombre_sec =(resultados["nombre_sec"]?resultados["nombre_sec"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,''); 
                                                                        
                                    cedula_sec =(resultados["cedula_sec"]?resultados["cedula_sec"]:'Sin Información');  
                                    telefono1 =(resultados["telefono1"]?resultados["telefono1"]:'Sin Información').trim();  
                                    telefono2 =(resultados["telefono2"]?resultados["telefono2"]:'Sin Información').trim();  
                                    localidad =(resultados["localidad"]?resultados["localidad"]:'').trim();  
                                    barrio =(resultados["barrio"]?resultados["barrio"]:'').trim();  
                                    upz =(resultados["upz"]?resultados["upz"]:'').trim();  
                                    dir_campo =(resultados["dir_campo"]?resultados["dir_campo"]:'Sin Información').trim();  
                                    dir_reco =(resultados["dir_reco"]?resultados["dir_reco"]:'Sin Información').trim();  
                                    man_reco =(resultados["man_reco"]?resultados["man_reco"]:'N/A').trim();  
                                    lot_reco =(resultados["lot_reco"]?resultados["lot_reco"]:'N/A').trim();  
                                    dir_cat =(resultados["dir_cat"]?resultados["dir_cat"]:'Sin Información').trim();  
                                    man_cat =(resultados["man_cat"]?resultados["man_cat"]:'N/A').trim();  
                                    lot_cat =(resultados["lot_cat"]?resultados["lot_cat"]:'N/A').trim();  
                                    chip =(resultados["chip"]?resultados["chip"]:'N/A').trim();  
                                    area_ter =(resultados["area_ter"]?resultados["area_ter"]:'').trim();  
                                    area_con =(resultados["area_con"]?resultados["area_con"]:'N/A').trim();  
                                    lin_nor =(resultados["lin_nor"]?resultados["lin_nor"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    lin_sur =(resultados["lin_sur"]?resultados["lin_sur"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    lin_ori =(resultados["lin_ori"]?resultados["lin_ori"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    lin_occ =(resultados["lin_occ"]?resultados["lin_occ"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    cord_x =(resultados["cord_x"]?resultados["cord_x"]:'').trim();  
                                    cord_y =(resultados["cord_y"]?resultados["cord_y"]:'').trim();  
                                    acu_dis =(resultados["acu_dis"]?resultados["acu_dis"]:'').trim();  
                                    acu_mod =(resultados["acu_mod"]?resultados["acu_mod"]:'Sin Información').trim();  
                                    acu_con =(resultados["acu_con"]?resultados["acu_con"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    acu_dir =(resultados["acu_dir"]?resultados["acu_dir"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    alc_dis =(resultados["alc_dis"]?resultados["alc_dis"]:'').trim();  
                                    alc_mod =(resultados["alc_mod"]?resultados["alc_mod"]:'Sin Información').trim();  
                                    alc_con =(resultados["alc_con"]?resultados["alc_con"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    alc_dir =(resultados["alc_dir"]?resultados["alc_dir"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    ase_dis =(resultados["ase_dis"]?resultados["ase_dis"]:'').trim();  
                                    ase_mod =(resultados["ase_mod"]?resultados["ase_mod"]:'Sin Información').trim();  
                                    ase_con =(resultados["ase_con"]?resultados["ase_con"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    ase_dir =(resultados["ase_dir"]?resultados["ase_dir"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    gas_dis =(resultados["gas_dis"]?resultados["gas_dis"]:'').trim();  
                                    gas_mod =(resultados["gas_mod"]?resultados["gas_mod"]:'Sin Información').trim();  
                                    gas_con =(resultados["gas_con"]?resultados["gas_con"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    gas_dir =(resultados["gas_dir"]?resultados["gas_dir"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    tel_dis =(resultados["tel_dis"]?resultados["tel_dis"]:'').trim();  
                                    tel_mod =(resultados["tel_mod"]?resultados["tel_mod"]:'Sin Información').trim();  
                                    tel_con =(resultados["tel_con"]?resultados["tel_con"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    tel_dir =(resultados["tel_dir"]?resultados["tel_dir"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    ene_dis =(resultados["ene_dis"]?resultados["ene_dis"]:'').trim();  
                                    ene_mod =(resultados["ene_mod"]?resultados["ene_mod"]:'Sin Información').trim();  
                                    ene_con =(resultados["ene_con"]?resultados["ene_con"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    ene_dir =(resultados["ene_dir"]?resultados["ene_dir"]:'Sin Información').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');
                                    
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Casa'){
                                        tip_inm=1;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Casa Lote'){
                                        tip_inm=2;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Institucional'){
                                        tip_inm=3;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Industrial'){
                                        tip_inm=4;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Bodega'){
                                        tip_inm=5;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Garaje'){
                                        tip_inm=6;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Oficina'){
                                        tip_inm=7;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='Lote'){
                                        tip_inm=8;
                                    }
                                    if((resultados["tip_inm"]?resultados["tip_inm"]:'')==='No Aplica'){
                                        tip_inm='N/A';
                                    }if((resultados["tip_inm"]?resultados["tip_inm"]:'')===''){
                                        tip_inm='';
                                    }
                                    
                                    
                                    num_pis =(resultados["num_pis"]?resultados["num_pis"]:'').trim(); 
                                    
                                    if((resultados["est_con1"]?resultados["est_con1"]:'')==='Completa'){
                                       est_con1=1; 
                                    }if((resultados["est_con1"]?resultados["est_con1"]:'')==='Incompleta'){
                                        est_con1=2;
                                    }if((resultados["est_con1"]?resultados["est_con1"]:'')===''){
                                        est_con1='';
                                    }
                                    
                                    unid_viv =(resultados["unid_viv"]?resultados["unid_viv"]:'').trim();  
                                   
                                    
                                     if((resultados["est_con2"]?resultados["est_con2"]:'')==='Habitada'){
                                       est_con2=1; 
                                    }if((resultados["est_con2"]?resultados["est_con2"]:'')==='Deshabilitada'){
                                        est_con2=2;
                                    }if((resultados["est_con2"]?resultados["est_con2"]:'')===''){
                                        est_con2='';
                                    }
                                    
                                    
                                   
                                    if((resultados["etp_cons"]?resultados["etp_cons"]:'')==='Obra Provisional'){
                                      etp_cons=1;
                                    }
                                    if((resultados["etp_cons"]?resultados["etp_cons"]:'')==='Obra negra'){
                                      etp_cons=2;
                                    }
                                    if((resultados["etp_cons"]?resultados["etp_cons"]:'')==='Obra gris'){
                                      etp_cons=3;
                                    }
                                    if((resultados["etp_cons"]?resultados["etp_cons"]:'')==='Obra Blanca'){
                                      etp_cons=4;
                                    }
                                    if((resultados["etp_cons"]?resultados["etp_cons"]:'')==='No Aplica'){
                                      etp_cons='N/A';
                                    }
                                    if((resultados["etp_cons"]?resultados["etp_cons"]:'')===''){
                                      etp_cons='';
                                    }
                                 
                                   
                                    if((resultados["uso_pred"]?resultados["uso_pred"]:'')==='Residencial'){
                                        uso_pred=1;
                                    }
                                    if((resultados["uso_pred"]?resultados["uso_pred"]:'')==='Comercial'){
                                        uso_pred=2;
                                    }
                                    if((resultados["uso_pred"]?resultados["uso_pred"]:'')==='Mixto'){
                                        uso_pred=3;
                                    }
                                    if((resultados["uso_pred"]?resultados["uso_pred"]:'')==='Institucional'){
                                        uso_pred=4;
                                    }
                                    if((resultados["uso_pred"]?resultados["uso_pred"]:'')===''){
                                        uso_pred='';
                                    }
                                    
                            
                                 
                                    
                                    if((resultados["cimen"]?resultados["cimen"]:'')==='Zapatas'){
                                      cimen=1;  
                                    }
                                    if((resultados["cimen"]?resultados["cimen"]:'')==='Vigas corridas'){
                                      cimen=2;  
                                    }
                                    if((resultados["cimen"]?resultados["cimen"]:'')==='Placa flotante'){
                                      cimen=3;  
                                    }
                                    if((resultados["cimen"]?resultados["cimen"]:'')==='Muro confinamiento'){
                                      cimen=4;  
                                    }
                                    if((resultados["cimen"]?resultados["cimen"]:'')==='Ninguna'){
                                      cimen=5;  
                                    }
                                    if((resultados["cimen"]?resultados["cimen"]:'')==='No Identificada'){
                                      cimen=6;  
                                    }if((resultados["cimen"]?resultados["cimen"]:'')===''){
                                      cimen='';  
                                    }
                                    
                                   
                                    
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Pórtico'){
                                      estruct=1;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Mamposteria confinada'){
                                      estruct=2;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Mamposteria parcialmente confinada'){
                                      estruct=3;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Mamposteria Simple'){
                                      estruct=4;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Madera'){
                                      estruct=5;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Prefabricado'){
                                      estruct=6;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='Material de recuperación'){
                                      estruct=7;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')==='No Aplica'){
                                      estruct=8;  
                                    }
                                    if((resultados["estruct"]?resultados["estruct"]:'')===''){
                                      estruct='';  
                                    }
                                   
                                   
                                    
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Material de recuperación'){
                                      mat_par=1;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Madera, guadua, caña, otro vegetal'){
                                      mat_par=2;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Bahareque'){
                                      mat_par=3;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Adobe o tapia pisada'){
                                      mat_par=4;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Ladrillo, bloque o prefabricado'){
                                      mat_par=5;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Concreto reforzado'){
                                      mat_par=6;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='Material metálico'){
                                      mat_par=7;  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')==='No Aplica'){
                                      mat_par='N/A';  
                                    }
                                    if((resultados["mat_par"]?resultados["mat_par"]:'')===''){
                                      mat_par='';  
                                    }
                                     
                                    
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')==='Tierra, arena'){
                                        mat_pis=1;
                                    }
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')==='Mortero / mineral'){
                                        mat_pis=2;
                                    }
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')==='Madera burda, otro veg'){
                                        mat_pis=3;
                                    }
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')==='Baldosin, ladrillo, vinilo'){
                                        mat_pis=4;
                                    }
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')==='Madera pulida, alfombra'){
                                        mat_pis=5;
                                    }
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')==='No Aplica'){
                                        mat_pis='N/A';
                                    }
                                    if((resultados["mat_pis"]?resultados["mat_pis"]:'')===''){
                                        mat_pis='';
                                    }
                                      
                                  
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='Material de recuperación'){
                                      mat_cub=1;
                                    }
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='Teja de Zinc'){
                                      mat_cub=2;
                                    }
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='Teja de asbesto cemento'){
                                      mat_cub=3;
                                    }    
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='Teja plástica'){
                                      mat_cub=4;
                                    }
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='Placa de concreto reforzado'){
                                      mat_cub=5;
                                    }
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='Placa fácil'){
                                      mat_cub=6;
                                    }
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')==='No Aplica'){
                                      mat_cub='N/A';
                                    }
                                    if((resultados["mat_cub"]?resultados["mat_cub"]:'')===''){
                                      mat_cub='';
                                    }
                                    
                                  
                                    
                                    
                                    num_hab =(resultados["num_hab"]?resultados["num_hab"]:'N/A').trim();  
                                    num_gar =(resultados["num_gar"]?resultados["num_gar"]:'N/A').trim();  
                                    num_san =(resultados["num_san"]?resultados["num_san"]:'N/A').trim();  
                                    num_loc =(resultados["num_loc"]?resultados["num_loc"]:'N/A').trim();  
                                    num_coc =(resultados["num_coc"]?resultados["num_coc"]:'N/A').trim();  
                                    num_bod =(resultados["num_bod"]?resultados["num_bod"]:'N/A').trim();  
                                    num_lav =(resultados["num_lav"]?resultados["num_lav"]:'N/A').trim();  
                                    num_pat =(resultados["num_pat"]?resultados["num_pat"]:'N/A').trim();  
                                    esp_mul =(resultados["esp_mul"]?resultados["esp_mul"]:'N/A').trim();  
                                    zon_soc =(resultados["zon_soc"]?resultados["zon_soc"]:'N/A').trim();  
                                    cri_ani =(resultados["cri_ani"]?resultados["cri_ani"]:'N/A').trim();  
                                    coc_enc =(resultados["coc_enc"]?resultados["coc_enc"]:'N/A').trim();  
                                    coc_lav =(resultados["coc_lav"]?resultados["coc_lav"]:'N/A').trim();  
                                    coc_mes =(resultados["coc_mes"]?resultados["coc_mes"]:'N/A').trim();  
                                    coc_ind =(resultados["coc_ind"]?resultados["coc_ind"]:'N/A').trim();  
                                    san_enc =(resultados["san_enc"]?resultados["san_enc"]:'N/A').trim();  
                                    san_duc =(resultados["san_duc"]?resultados["san_duc"]:'N/A').trim();  
                                    san_apar =(resultados["san_apar"]?resultados["san_apar"]:'N/A').trim();  
                                    san_des =(resultados["san_des"]?resultados["san_des"]:'N/A').trim();  
                                    san_poz =(resultados["san_poz"]?resultados["san_poz"]:'N/A').trim();  
                                    san_lad =(resultados["san_lad"]?resultados["san_lad"]:'N/A').trim();  
                                    observ=(resultados["observ"]? resultados["observ"]:'SIN OBSERVACIONES').trim();
                                    observ = observ.replace(/(\r\n|\n|\r)/gm,"");
                                    nom_ela =(resultados["nom_ela"]? resultados["nom_ela"]:'').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    car_ela =(resultados["car_ela"]? resultados["car_ela"]:'').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    nom_rev =(resultados["nom_rev"]? resultados["nom_rev"]:'').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
                                    car_rev=(resultados["car_rev"]? resultados["car_rev"]:'').trim().replace(/(\r\n|\n|\r|\t)/gm,"").replace(/ +(?= )/g,'');  
 
                                    sector=(resultados["sector"]?resultados["sector"]:'');
                                    sector=sector.toUpperCase();
                                    
                                    if((resultados["revisado"]?resultados["revisado"]:false)){
                                        disponible_imprimir="";
                                    }
                                    
                                    titulo_acta="FICHA TÉCNICA SURR No.";
                                  
                                    if(sector==="GAVILANES"){
                                        decreto="";
                                        concepto="AP 152";
                                        acta="";
                                        titulo_acta="ACTA DE NOTIFICACIÓN No.";
                                    }
                                    
                                    version="1";
                                    vigencia="21-09-2017"
                                    
                                    var obj = {};
                                    obj["identificador"] =identificador;
                                    obj["op"] ="impresion_vereditas_decreto";
                                    
                                      $.ajax({
                                        type: "POST",
                                        url: "GestionConsultas",
                                        data: obj,
                                        dataType: "json",
                                        async: false,
                                        success: function (response) {
                                                
                                                if(response.length>0){
                                                var data=response[0];
                                                if((data["decreto"]?data["decreto"]:'')==="457"){
                                                    decreto="DECRETO 457 DE 2017";
                                                    concepto="DECRETO 457 DE 2017";
                                                    acta=dir_reco;
                                                    titulo_acta="ACTA DE NOTIFICACIÓN No.";                                                    
                                                }
                                                if((data["decreto"]?data["decreto"]:'')==="651"){
                                                    decreto="DECRETO DISTRITAL 457 DE 2017 \n MODIFICADO POR EL DECRETO DISTRITAL 651 DE 2018";
                                                    concepto="DECRETO DISTRITAL 651 DE 2018";
                                                    acta=dir_reco;
                                                    titulo_acta="ACTA DE NOTIFICACIÓN No.";
                                                    version="2";
                                                    vigencia="13/03/2019";
                                                }                                                    
                                                }

                                        },
                                    });

       
         
                                }else{
                                    console.log("error");
                                }
                             },
                             async: false
                            
                        });
                       
                        
                        
                        
       
       if(fecha_elaboracion===undefined){
           fecha_elaboracion='';
       }
       
             if(titulo_acta==="FICHA TÉCNICA SURR No."){
                  $datos={
                    op: 'get_numero_ficha_tecnica',
                    identificador:identificador
                };

                $.ajax({
                    type: "GET",
                    url: "GestionConsultas",
                    data: $datos,
                    dataType: "json",
                    async: false,
                    success: function (response) {
                        if (response.length > 0){
                             resultados = response[0];

                            acta=(resultados["Num_Ficha_Tecnica"]?resultados["Num_Ficha_Tecnica"]:'');
                        }

                    },
                    error: function (response) {
                    }
                });
             }
             
            if(sector==="VEREDITAS"){
                  $datos={
                    op: 'get_numero_ficha_tecnica_vereditas',
                    identificador:identificador
                };

                $.ajax({
                    type: "GET",
                    url: "GestionConsultas",
                    data: $datos,
                    dataType: "json",
                    async: false,
                    success: function (response) {
                        if (response.length > 0){
                             resultados = response[0];

                            acta=(resultados["IDENTIFICA_ANTERIOR"]?resultados["IDENTIFICA_ANTERIOR"]:'');
                        }

                    },
                    error: function (response) {
                    }
                });
             }
       
       
       
       
       
        var docDefinition = {
        pageSize:  'LETTER',
        pageOrientation: 'landscape', 
        pageMargins: [ 10, 10,10, 10 ],
        
       watermark: {text: disponible_imprimir, color: 'gray', opacity: 0.3, bold: true, italics: false},

        content: [
        {      
        style: 'titulo',
        table: {
             widths: [80,500,75,78],
                body: [
                        [{rowSpan:3,
                    image:'data:image/jpeg;base64,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',
                    width: 50,
                    height: 50
                         },{text:'\n FICHA TÉCNICA DE RECONOCIMIENTO \n '+decreto,rowSpan:3},{text:'Código: 208-REAS-Ft-95',colSpan:2,style:'tableExample'},{}],
                     ['','',{text:'Versión: '+version,style:'tableExample'},{text:'Pág: 1 de 3',style:'tableExample'}],
                     ['','',{text:'Vigente desde: '+vigencia,colSpan:2,style:'tableExample'},{}]

                        ]
                }
        },
        {      
        style: 'intro',                                   
        table: {
            widths: [130,70,100,220,60,135],
                body: [
                        [{text:titulo_acta},{text: acta, style: 'linea1'}, 'CONCEPTO INGRESO:',{text: concepto, style: 'linea1',fontSize: 8},'SECTOR:',{text:sector, style: 'linea1'}]                                                    
                        ]
                }
        },
        {      
        style: 'subtitulo',

        table: {
            widths: [760],
                body: [
                        ['1. INFORMACIÓN FAMILIAR']                                                    
                        ]
                }
        },
        {      
        style: 'tableExample',

        table: {
            widths: [180,180,250,123],
                body: [
                        [{text: 'FECHA DE ELABORACIÓN', style: 'tableHeader'},{text: 'IDENTIFICADOR', style: 'tableHeader'},{text: '1.5 NOMBRE DE QUIEN ATIENDE LA VISITA', style: 'tableHeader'},{text: '1.6 CÉDULA', style: 'tableHeader'}],
                        [fecha_elaboracion,identificador,nombre_visita,cedula_visita] 
                        ]
                }
        },
        {      
        style: 'tableExample',

        table: {
            widths: [260,100,382],
                body: [
                        [{text: '1.1 NOMBRE BENEFICIARIO PRINCIPAL', style: 'tableHeader'},{text: '1.2 CÉDULA', style: 'tableHeader'},{text: '1.7 PARENTESCO DE QUIEN ATIENDE LA VISITA', style: 'tableHeader'}],
                        [nombre_prin,cedula_prin,parentesco] 
                        ]
                }
        },
        {      
        style: 'tableExample',

        table: {
            widths: [260,100,185,188],
                body: [
                        [{text: '1.3 NOMBRE BENEFICIARIO SECUNDARIO', style: 'tableHeader'},{text: '1.4 CÉDULA', style: 'tableHeader'},{text: '1.8 NÚMERO TELEFÓNICO (1)', style: 'tableHeader'},{text: '1.9 NÚMERO TELEFÓNICO (2)', style: 'tableHeader'}],
                        [{text: nombre_sec, style: 'r'},{text:cedula_sec, style: 'r'},{text:telefono1, style: 'r'},{text:telefono2, style: 'r'}] 
                        ]
                }
        },
        {      
        style: 'subtitulo',

        table: {
            widths: [760],
                body: [
                        ['2. INFORMACIÓN GENERAL DE LA VIVIENDA']                                                    
                        ]
                }
        },{      
        style: 'tableExample',

        table: {
                widths: [40,20,155,80,50,65,18,80,70,98],
                body: [
                        [{text: '1.2 LOCALIDAD', style: 'tableHeader',colSpan: 2},{},{text: '2.2 BARRIO', style: 'tableHeader'},{text: '2.3 UPZ', style: 'tableHeader',colSpan: 2},{},{text: '2.12 SERVICIOS PÚBLICOS', style: 'tableHeader',colSpan: 5},{},{},{},{}],
                        [{text:localidad,colSpan: 2},{},barrio,{text: upz,colSpan: 2},{},{text: 'Tipo', style: 'tableHeader1'},{text: 'Si-No', style: 'tableHeader1'},{text: 'Modo', style: 'tableHeader1'},{text: 'No. de Cuenta/contrato', style: 'tableHeader1'},{text: 'Dirección Recibo SPD', style: 'tableHeader1'}],
                        [{text: '2.4 DIRECCIÓN TOMADA EN CAMPO',colSpan:5, style: 'tableHeader'},{},{},{},{},{text: '1. Acueducto',rowSpan:2},{text: acu_dis,rowSpan:2},{text: acu_mod,rowSpan:2},{text: acu_con,rowSpan:2},{text: acu_dir,rowSpan:2}],
                        [{text: dir_campo,colSpan:5},{},{},{},{},'','','','',''],
                        [{text: '2.5 DIRECCIÓN CONCEPTO DE RECOMENDACIÓN',colSpan:3, style: 'tableHeader'},{},{},{text: 'MANZANA', style: 'tableHeader'},{text: 'LOTE', style: 'tableHeader'},{text: '2. Alcantarillado',rowSpan:2},{text: alc_dis,rowSpan:2},{text: alc_mod,rowSpan:2},{text: alc_con,rowSpan:2},{text: alc_dir,rowSpan:2}],
                        [{text: dir_reco,colSpan:3},{},{},man_reco,lot_reco,'','','','',''],
                        [{text: '2.6 DIRECCIÓN CATASTRAL',colSpan:3, style: 'tableHeader'},{},{},{text: 'MANZANA', style: 'tableHeader'},{text: 'LOTE', style: 'tableHeader'},{text: '3. Aseo',rowSpan:2},{text: ase_dis,rowSpan:2},{text: ase_mod,rowSpan:2},{text: ase_con,rowSpan:2},{text: ase_dir,rowSpan:2}],
                        [{text: dir_cat,colSpan:3},{},{},man_cat,lot_cat,'','','','',''],
                        [{text: '2.7 CHIP CATASTRO',style: 'tableHeader',colSpan:2},{},{text: '2.8 AREA TERRENO (M2)',style: 'tableHeader'},{text: '2.9 AREA CONSTRUCCIÓN (M2)',colSpan:2, style: 'tableHeader'},{},{text: '4. Energía eléctrica',rowSpan:2},{text:ene_dis,rowSpan:2},{text:ene_mod,rowSpan:2},{text:ene_con,rowSpan:2},{text:ene_dir,rowSpan:2}],
                        [{text:chip,colSpan: 2},{},area_ter,{text: area_con,colSpan:2},'','','','',''],
                        [{text: '2.10 LINDEROS',colSpan:3,style: 'tableHeader'},{},{},{text: '2.11 COORDENADAS',colSpan:2,style: 'tableHeader'},{},{text: '5. Gas Natural',rowSpan:2},{text:gas_dis,rowSpan:2},{text:gas_mod,rowSpan:2},{text:gas_con,rowSpan:2},{text:gas_dir,rowSpan:2}],
                        [{text: 'NORTE:',style: 'tableHeader'},{text:lin_nor,colSpan: 2},{},{text: 'X:',rowSpan:2,style: 'tableHeader'},{text: cord_x,rowSpan:2},'','','','',''],
                        [{text: 'SUR:',style: 'tableHeader'},{text:lin_sur,colSpan: 2},{},'','',{text: '6. Teléfono Fijo',rowSpan:2},{text:tel_dis,rowSpan:2},{text:tel_mod,rowSpan:2},{text:tel_con,rowSpan:2},{text:tel_dir,rowSpan:2}],
                        [{text: 'ORIENTE:',style: 'tableHeader'},{text:lin_ori,colSpan: 2},{},{text: 'Y:',rowSpan:2,style: 'tableHeader'},{text: cord_y,rowSpan:2},'','','','',''],
                        [{text: 'OCCIDENTE:',style: 'tableHeader'},{text:lin_occ,colSpan: 2},{},'','',{text: 'Modo. 1 Provisional, 2 Definitivo Privado. 3 Definitivo Público',colSpan: 5},{},{},{},{}]
                    ]
                }
        },
        {      
        style: 'subtitulo',

        table: {
            widths: [760],
                body: [
                        ['3. DESCRIPCIÓN DE LA VIVIENDA']                                                    
                        ]
                }
        },
        {      
        style: 'tableExample',

        table: {
            widths: [70,70,30,100,100,70,30,70,30,70,30],
                body: [
                        [{text: '3.1 TIPO DE INMUEBLE', style: 'tableHeader',colSpan:3,rowSpan:1},'','',{text: '3.2 NÚMERO DE PISOS', style: 'tableHeader',colSpan:1,rowSpan:1},{text: '3.3 UNIDADES DE VIVIENDA', style: 'tableHeader',colSpan:1,rowSpan:1},{text: '3.4 ESTADO DE LA CONSTRUCCIÓN', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.5 ETAPA DE CONSTRUCCIÓN', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.6 USO DEL PREDIO', style: 'tableHeader',colSpan:2,rowSpan:1},''],
                        [{text:'1. Casa\n 2. Casa lote\n 3. Institucional\n 4. Industrial',rowSpan:2},{text:'5. Bodega\n 6. Garage\n 7.Oficina\n 8. Lote',rowSpan:2},{text:tip_inm,rowSpan:2},{text:num_pis,rowSpan:2},{text:unid_viv,rowSpan:2},'1. Completa\n 2. Incompleta',est_con1,{text:'1. Obra provisional\n 2. Obra negra\n 3. Obra gris\n 4. Obra blanca',rowSpan:2},{text:etp_cons,rowSpan:2},{text:'1. Residencial\n 2. Comercial\n 3. Mixto\n 4. Institucional',rowSpan:2},{text:uso_pred,rowSpan:2}],
                        ['','','','','','1. Habitada\n 2. Deshabitada',est_con2,'','','','']
                        ]
                }
        },
        {      
        style: 'tableExample',

        table: {
            widths: [105,30,105,30,105,30,105,30,108,30],
                body: [
                        [{text: '3.7  CIMENTACIÓN', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.8  ESTRUCTURA', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.9 MATERIAL DE PAREDES', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.10 MATERIAL DE PISOS', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.11 MATERIAL DE CUBIERTA', style: 'tableHeader',colSpan:2,rowSpan:1},''],
                        ['1.Zapatas\n 2. Vigas Corridas\n 3. Placa Flotante\n 4. Muro confinamiento\n 5.Ninguna\n 6. No Identificada',cimen,'1. Pórtico\n 2. Mampostería confinada\n 3. Mamposteria parcialmente confinada\n 4. Mamposteria simple\n 5. Madera\n 6. Prefabricado\n 7. Material de recuperación',estruct,'1. Material de recuperación\n 2. Madera, Guadua, Caña, Otro vegetal\n 3. Bahareque\n 4. Adobe o tapia pisada\n 5. Ladrillo, bloque o prefabricado\n 6. Concreto reforzado\n 7. Material metálico',mat_par,'1. Tierra, arena\n 2. Mortero, mineral\n 3. Madera burda, otro veg\n 4. Baldosin, ladrillo, vinilo\n 5. Madera pulida, alfombra\n',mat_pis,'1. Material de recuperación\n 2. Teja de Zinc\n 3. Teja de asbesto de cemento\n 4. Teja plástica\n 5. Placa de concreto reforzado\n 6. Placa fácil',mat_cub] 
                        ]
                }
        },
         {      
        style: 'titulo',
        table: {
             widths: [80,500,75,78],
                body: [
                        [{rowSpan:3,
                    image:'data:image/jpeg;base64,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',
                    width: 50,
                    height: 50
                         },{text:'\n FICHA TÉCNICA DE RECONOCIMIENTO \n '+decreto,rowSpan:3},{text:'Código: 208-REAS-Ft-95 ',colSpan:2,style:'tableExample'},{}],
                     ['','',{text:'Versión: 1',style:'tableExample'},{text:'Pág: 2 de 3',style:'tableExample'}],
                     ['','',{text:'Vigente desde: 21-09-2017 ',colSpan:2,style:'tableExample'},{}]

                        ]
                }
        },
        {      
        style: 'tableExample',

        table: {
            widths: [150,25,150,25,150,25,150,20],
                body: [
                        [{text: '3.12 DISTRIBUCIÓN DE LA VIVIENDA', style: 'tableHeader',colSpan:4,rowSpan:1},'','','',{text: '3.13  CARACTERISTICAS DE LA COCINA', style: 'tableHeader',colSpan:2,rowSpan:1},'',{text: '3.14 CARACTERISTICAS DE LA UNIDAD SANITARIA', style: 'tableHeader',colSpan:2,rowSpan:1},''],
                        ['Número de habitaciones',num_hab,'Número de garages',num_gar,'1. ¿Se encuentra enchapada?',coc_enc,'1. ¿Se encuentra enchpado?',san_enc],
                        ['Número de unidades sanitarias',num_san,'Número de Locales',num_loc,'2. Tiene Lavaplatos?',coc_lav,'2. Tiene ducha?',san_duc],
                        ['Número de cocinas',num_coc,'Número de Bodegas',num_bod,'3. Tiene Meson?',coc_mes,'3. Tiene aparatos sanitarios?',san_apar],
                        ['Número de Lavaderos',num_lav,'','','4. Cocina Independiente?',coc_ind,'4. Los desagues conectan con alcantarillado?',san_des],
                        ['Número de Patios',num_pat,'Todo es un espacio Multiple?',esp_mul,'','','5. Los desagues conectan con Pozo Séptico?',san_poz],
                        ['Zona Social (Sala, Comedor, Estar)',zon_soc,'Tiene criadero de Animales?',cri_ani,'','','6. los desagues evacuan a la ladera?',san_lad]
                        ]
                }
        },
        {      
        style: 'subtitulo',

        table: {
            widths: [760],
                body: [
                        ['4. PLANOS DE LA VIVIENDA']                                                    
                        ]
                }
        },{
           style: 'tableExample',
            table: {
            widths: [375,375],
            body: [
                [{text: '4.1 PLANO UBICACIÓN', style: 'tableHeader'},{text: '4.2 PLANO VIVIENDA (VISTA SUPERIOR)', style: 'tableHeader'}],
                [{image:img_ubicacion, width: 360, height: 300,style: 'imgCen'},{image:can, width: 360, height: 300,pageBreak: "after",style: 'imgCen'}]    
                  ]
            }
        },{      
        style: 'titulo',
        table: {
             widths: [80,500,75,78],
                body: [
                        [{rowSpan:3,
                    image:'data:image/jpeg;base64,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',
                    width: 50,
                    height: 50
                         },{text:'\n FICHA TÉCNICA DE RECONOCIMIENTO \n '+decreto,rowSpan:3},{text:'Código: 208-REAS-Ft-95',colSpan:2,style:'tableExample'},{}],
                     ['','',{text:'Versión: 1',style:'tableExample'},{text:'Pág: 3 de 3',style:'tableExample'}],
                     ['','',{text:'Vigente desde: 21-09-2017 ',colSpan:2,style:'tableExample'},'']

                        ]
                }
        },
        {      
        style: 'subtitulo',

        table: {
            widths: [760],
                body: [
                        [{text:'5. FOTOGRAFÍAS DE LA VIVIENDA'}]                                                    
                        ]
                }
        },{
           style: 'tableExample',
            table: {
            widths: [250,245,245],
            body: [
                [{text: 'EXTERIOR/ENTORNO', style: 'tableHeader'},{text: 'NOMENCLATURA', style: 'tableHeader'},{text: 'ESPACIO SOCIAL', style: 'tableHeader'}],                
                [{image:img_ext, width: 180, height:180,style: 'imgCen'},{image:img_nom, width: 180, height: 180,style: 'imgCen'},{image:img_esp, width: 180, height:180,style: 'imgCen'}],                
                [{text: 'HABITACIONES', style: 'tableHeader'},{text: 'COCINA', style: 'tableHeader'},{text: 'UNIDAD SANITARIA/BAÑO', style: 'tableHeader'}],              
                [{image:img_hab, width: 180, height: 180,style: 'imgCen'},{image:img_coc, width: 180, height: 180,style: 'imgCen'},{image:img_usa, width: 180, height: 180,style: 'imgCen'}]
                  ]
            }
        },
        {      
        style: 'subtitulo',

        table: {
            widths: [760],
                body: [
                        ['6. OBSERVACIONES']                                                    
                        ]
                }
        },
         {      
       style: 'tableExample',

        table: {
            widths: [50,700],
                body: [
                        [{text:observ, style: 'tableHeader',colSpan:2,fontSize: 7},''],
                        [{text: 'Notas', style: 'tableHeader',fontSize: 7},{text:'Las fotografías se deben  tomar  por cada unidad habitacional encontrada, en una foto debe aparecer  alguien del grupo familiar ojala algún mayor. Incluir las fotografias relacionadas y las demás que sean necesarias',fontSize: 7}] 
                        ]
                }
        },
        { style: 'tableExample',
            table: {
            widths: [375,375],
            body: [
                [{text: 'ELABORÓ', style: 'tableHeader'},{text: 'REVISÓ', style: 'tableHeader'}],
                [{text: "Nombre:  "+nom_ela, style: 'tableHeader'},{text: 'Nombre:   '+nom_rev, style: 'tableHeader'}],
                [{text: "Cargo:   "+car_ela, style: 'tableHeader'},{text: 'Cargo:    '+car_rev, style: 'tableHeader'}]
                  ]
            }
        }
        
        
        
        
        
        

        ],
        styles: {
                tableExample: {
                        fontSize: 7.5
                },
                tableHeader:{
                        fontSize: 7,
                        bold:true                      
                },
                tableHeader1:{
                        fontSize: 6,
                        bold:true,
                        alignment: 'center'
                },
                titulo:{
                        fontSize: 11.5,
                        alignment: 'center', 
                        bold:true
                },
                intro:{
                        fontSize: 10,
                        bold:true
                },
                subtitulo:{
                        fontSize: 11,
                        alignment: 'center', 
                        bold:true,
                        fillColor: '#D7DBDD'
                },
                imgCen:{
                    alignment: 'center'
                },
                r:{
                    height: 12
                },
                linea1:{
                        fontSize:9,
                        alignment: 'center', 
                        bold:false
                }
        } 
    };

    
    pdfMake.createPdf(docDefinition).download('Ficha_técnica_'+identificador+'.pdf');



                            });
                        });
                    });
                });
            });
        });
   });  
    
}); 
    
 }
