
$(document).ready(function () {
    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function (event, label) {

        var input = $(this).parents('.input-group').find(':text'),
                log = label;

        if (input.length) {
            input.val(log);
        } else {

        }

    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img_plano').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    };
    function readURL1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img_plano1').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
    $("#imgInp1").change(function () {
        readURL1(this);
    });
});
function paso1() {

    $identificador = document.getElementById("identificador");
    $fecha_elaboracion = document.getElementById("fecha_elaboracion");
    
    $nom3_1 = document.getElementById("nom3_1").value.toUpperCase().trim().replace("\t", "");
    $nom3_2 = document.getElementById("nom3_2").value.toUpperCase().trim().replace("\t", "");
    $ape3_1 = document.getElementById("ape3_1").value.toUpperCase().trim().replace("\t", "");
    $ape3_2 = document.getElementById("ape3_2").value.toUpperCase().trim().replace("\t", "");
    
    
    $nom3_1=$nom3_1.trim();
    $nom3_2=$nom3_2.trim();
    $ape3_1=$ape3_1.trim();
    $ape3_2=$ape3_2.trim();
    
    $cedula_visita = document.getElementById("cedula_visita");
    $parentesco = document.getElementById("parentesco").value.toUpperCase();
    $telefono1 = document.getElementById("telefono1");
    $telefono2 = document.getElementById("telefono2");
    
    
if(!$fecha_elaboracion.value){
   $fecha='0001-01-01';
}else{
    $fecha=$($fecha_elaboracion).val();
}


    $datos = {
        op: 'ficha1',
        identificador: $($identificador).val(),
        fecha_elaboracion:$fecha ,
        nom3_1: $nom3_1,
        nom3_2: $nom3_2,
        ape3_1: $ape3_1,
        ape3_2: $ape3_2,
        cedula_visita: $($cedula_visita).val(),
        parentesco: $parentesco,
        telefono1: $($telefono1).val(),
        telefono2: $($telefono2).val()
    };

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
     
                console.log(response);

            } else {
                alertify.error("Ocurrió un error al almacenar la información");
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });
    
    
    $nom1_1 = document.getElementById("nom1_1").value.toUpperCase().replace("\t", "").trim();
    $nom1_2 = document.getElementById("nom1_2").value.toUpperCase().replace("\t", "").trim();
    $ape1_1 = document.getElementById("ape1_1").value.toUpperCase().replace("\t", "").trim();
    $ape1_2 = document.getElementById("ape1_2").value.toUpperCase().replace("\t", "").trim();
    $nom2_1 = document.getElementById("nom2_1").value.toUpperCase().replace("\t", "").trim();
    $nom2_2 = document.getElementById("nom2_2").value.toUpperCase().replace("\t", "").trim();
    $ape2_1 = document.getElementById("ape2_1").value.toUpperCase().replace("\t", "").trim();
    $ape2_2 = document.getElementById("ape2_2").value.toUpperCase().replace("\t", "").trim();
    $ced1 = document.getElementById("cedula_prin").value;
    $ced2 = document.getElementById("cedula_sec").value;
    
    if($ced1===''){
        $ced1=0;
    } 
    if($ced2===''){
        $ced2=0;
    }

 $datos1 = {
        op: 'ficha1_1',
        identificador: $($identificador).val(),
        nom1_1: $nom1_1,
        nom1_2: $nom1_2,
        ape1_1: $ape1_1,
        ape1_2: $ape1_2,
        nom2_1: $nom2_1,
        nom2_2: $nom2_2,
        ape2_1: $ape2_1,
        ape2_2: $ape2_2,
        ced1: $ced1,
        ced2: $ced2,
        user_upd:usuario_nombre
    };
  


    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos1,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                alertify.success("La información se almacenó correctamente");
                console.log(response);

            } else {
                alertify.error("Ocurrió un error al almacenar la información");
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });
    
    if( $(".num_ficha").css('display') !== 'none') {
        $ficha_num = document.getElementById("ficha_num").value.trim();
        
        if($ficha_num===""){
        }else{
            $datos3={
            op: 'set_numero_ficha_tecnica',
            identificador: $($identificador).val(),
            ficha_num:$ficha_num
        };

        $.ajax({
            type: "GET",
            url: "GestionConsultas",
            data: $datos3,
            dataType: "json",
            async: false,
            success: function (response) {
                   console.log(response);
            },
            error: function (response) {
            }
        });
        }


    }
    
        
    upd_user();
    
    
    

}

function upd_user(){
    
    $identificador = document.getElementById("identificador");
    $datos = {
        op: 'ficha1_upd_user',
        identificador: $($identificador).val(),
        usuario:usuario_nombre
    };
  


    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                console.log(response);

            } else {
                alertify.error("Ocurrió un error al almacenar la información");
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });
}



function paso2() {
    

$identificador = document.getElementById("identificador");
$dir_campo = document.getElementById("dir_campo").value.toUpperCase().replace("\t", "");
    $dir_cat = document.getElementById("dir_cat");
    $man_cat = document.getElementById("man_cat");
    $lot_cat = document.getElementById("lot_cat");
    $area_ter = document.getElementById("area_ter");
    $area_con = document.getElementById("area_con");
    $lin_nor = document.getElementById("lin_nor").value.toUpperCase().replace("\t", "");
    $lin_sur = document.getElementById("lin_sur").value.toUpperCase().replace("\t", "");
    $lin_ori = document.getElementById("lin_ori").value.toUpperCase().replace("\t", "");
    $lin_occ = document.getElementById("lin_occ").value.toUpperCase().replace("\t", "");
    $cord_x = document.getElementById("cord_x");
    $cord_y = document.getElementById("cord_y");
    $acu_dis = document.getElementById("acu_dis");
    $acu_mod = document.getElementById("acu_mod");
 $acu_con = document.getElementById("acu_con").value.toUpperCase().replace("\t", "");
    $acu_dir = document.getElementById("acu_dir").value.toUpperCase().replace("\t", "");
    $alc_dis = document.getElementById("alc_dis");
    $alc_mod = document.getElementById("alc_mod");
    $alc_con = document.getElementById("alc_con").value.toUpperCase().replace("\t", "");
    $alc_dir = document.getElementById("alc_dir").value.toUpperCase().replace("\t", "");
    $ase_dis = document.getElementById("ase_dis");
    $ase_mod = document.getElementById("ase_mod");
    $ase_con = document.getElementById("ase_con").value.toUpperCase().replace("\t", "");
    $ase_dir = document.getElementById("ase_dir").value.toUpperCase().replace("\t", "");
    $ene_dis = document.getElementById("ene_dis");
    $ene_mod = document.getElementById("ene_mod");
  $ene_con = document.getElementById("ene_con").value.toUpperCase().replace("\t", "");
    $ene_dir = document.getElementById("ene_dir").value.toUpperCase().replace("\t", "");
    $gas_dis = document.getElementById("gas_dis");
    $gas_mod = document.getElementById("gas_mod");
  $gas_con = document.getElementById("gas_con").value.toUpperCase().replace("\t", "");
    $gas_dir = document.getElementById("gas_dir").value.toUpperCase().replace("\t", "");
    $tel_dis = document.getElementById("tel_dis");
    $tel_mod = document.getElementById("tel_mod");
    $tel_con = document.getElementById("tel_con").value.toUpperCase().replace("\t", "");
    $tel_dir = document.getElementById("tel_dir").value.toUpperCase().replace("\t", "");


    $datos = {
        op: 'ficha2',
        identificador: $($identificador).val(),
        dir_campo: $dir_campo,      
        dir_cat: $($dir_cat).val(),
        man_cat: $($man_cat).val(),
        lot_cat: $($lot_cat).val(),
        area_ter: $($area_ter).val(),
        area_con: $($area_con).val(),
        lin_nor: $lin_nor,
        lin_sur: $lin_sur,
        lin_ori: $lin_ori,
        lin_occ: $lin_occ,
        cord_x: $($cord_x).val(),
        cord_y: $($cord_y).val(),
        
        acu_dis: $($acu_dis).val(),
        acu_mod: $($acu_mod).val(),
        acu_con: $acu_con,
        acu_dir: $acu_dir,
        alc_dis: $($alc_dis).val(),
        alc_mod: $($alc_mod).val(),
        alc_con: $alc_con,
        alc_dir: $alc_dir,
        ase_dis: $($ase_dis).val(),
        ase_mod: $($ase_mod).val(),
        ase_con: $ase_con,
        ase_dir: $ase_dir,
        ene_dis: $($ene_dis).val(),
        ene_mod: $($ene_mod).val(),
        ene_con: $ene_con,
        ene_dir: $ene_dir,
        gas_dis: $($gas_dis).val(),
        gas_mod: $($gas_mod).val(),
        gas_con: $gas_con,
        gas_dir: $gas_dir,
        tel_dis: $($tel_dis).val(),
        tel_mod: $($tel_mod).val(),
        tel_con: $tel_con,
        tel_dir: $tel_dir

    };
    
    
    
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                console.log(response);

            } else {
                alertify.error("Ocurrió un error al almacenar la información");
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });
    
    $acu_con = document.getElementById("acu_con").value.toUpperCase().replace("\t", "");
    $ene_con = document.getElementById("ene_con").value.toUpperCase().replace("\t", "");
    $gas_con = document.getElementById("gas_con").value.toUpperCase().replace("\t", "");
    $chip = document.getElementById("chip").value.toUpperCase().replace("\t", "");

    $dat_chip = {
        op: 'ficha_chip',
        identificador: $($identificador).val(),
        chip: $chip,
        user_upd:usuario_nombre
    };
  


    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $dat_chip,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                alertify.success("La información se almacenó correctamente");
                console.log(response);

            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });

upd_servicios('acueducto',$($acu_dis).val(),$acu_con,$acu_dir,$($acu_mod).val());
upd_servicios('alcantarillado',$($alc_dis).val(),$alc_con,$alc_dir,$($alc_mod).val());
upd_servicios('aseo',$($ase_dis).val(),$ase_con,$ase_dir,$($ase_mod).val());
upd_servicios('energia',$($ene_dis).val(),$ene_con,$ene_dir,$($ene_mod).val());
upd_servicios('gas',$($gas_dis).val(),$gas_con,$gas_dir,$($gas_mod).val());
upd_servicios('telefono',$($tel_dis).val(),$tel_con,$tel_dir,$($tel_mod).val());


function upd_servicios(tipo_servicio,disponibilidad,cuenta,direccion,modalidad){
    
    $datos1 = {
        op: 'ficha2_1',
        identificador: $($identificador).val(),
        tipo_servicio:tipo_servicio,
        disponibilidad:disponibilidad,
        cuenta:cuenta,
        direccion:direccion,
        modalidad:modalidad
    };

     $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos1,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {

            } else {
                alertify.error("Ocurrió un error al almacenar la información");
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });
 upd_user(); 
    
    
    
    
}


}

function paso3() {
    
    $identificador = document.getElementById("identificador");
    $tip_inm = document.getElementById("tip_inm");
    $num_pis = document.getElementById("num_pis");
    $unid_viv = document.getElementById("unid_viv");
    $est_con1 = document.getElementById("est_con1");
    $est_con2 = document.getElementById("est_con2");
    $etp_cons = document.getElementById("etp_cons");
    $uso_pred = document.getElementById("uso_pred");
    $cimen = document.getElementById("cimen");
    $estruct = document.getElementById("estruct");
    $mat_par = document.getElementById("mat_par");
    $mat_pis = document.getElementById("mat_pis");
    $mat_cub = document.getElementById("mat_cub");
    $est_cons = document.getElementById("est_cons");
    $num_hab = document.getElementById("num_hab");
    $num_gar = document.getElementById("num_gar");
    $num_san = document.getElementById("num_san");
    $num_loc = document.getElementById("num_loc");
    $num_coc = document.getElementById("num_coc");
    $num_bod = document.getElementById("num_bod");
    $num_lav = document.getElementById("num_lav");
    $num_pat = document.getElementById("num_pat");
    $esp_mul = document.getElementById("esp_mul");
    $zon_soc = document.getElementById("zon_soc");
    $cri_ani = document.getElementById("cri_ani");
    $coc_enc = document.getElementById("coc_enc");
    $coc_lav = document.getElementById("coc_lav");
    $coc_mes = document.getElementById("coc_mes");
    $coc_ind = document.getElementById("coc_ind");
    $san_enc = document.getElementById("san_enc");
    $san_duc = document.getElementById("san_duc");
    $san_apar = document.getElementById("san_apar");
    $san_des = document.getElementById("san_des");
    $san_poz = document.getElementById("san_poz");
    $san_lad = document.getElementById("san_lad");


    $datos = {
        op: 'ficha_3',
        identificador: $($identificador).val(),
        tip_inm: $($tip_inm).val(),
        num_pis: $($num_pis).val(),
        unid_viv: $($unid_viv).val(),
        est_con1: $($est_con1).val(),
        est_con2: $($est_con2).val(),
        etp_cons: $($etp_cons).val(),
        uso_pred: $($uso_pred).val(),
        cimen: $($cimen).val(),
        estruct: $($estruct).val(),
        mat_par: $($mat_par).val(),
        mat_pis: $($mat_pis).val(),
        mat_cub: $($mat_cub).val(),
        est_cons: $($est_cons).val(),
        num_hab: $($num_hab).val(),
        num_gar: $($num_gar).val(),
        num_san: $($num_san).val(),
        num_loc: $($num_loc).val(),
        num_coc: $($num_coc).val(),
        num_bod: $($num_bod).val(),
        num_lav: $($num_lav).val(),
        num_pat: $($num_pat).val(),
        esp_mul: $($esp_mul).val(),
        zon_soc: $($zon_soc).val(),
        cri_ani: $($cri_ani).val(),
        coc_enc: $($coc_enc).val(),
        coc_lav: $($coc_lav).val(),
        coc_mes: $($coc_mes).val(),
        coc_ind: $($coc_ind).val(),
        san_enc: $($san_enc).val(),
        san_duc: $($san_duc).val(),
        san_apar: $($san_apar).val(),
        san_des: $($san_des).val(),
        san_poz: $($san_poz).val(),
        san_lad: $($san_lad).val()

    };

  

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            if (response)
            {
                alertify.success("La información se almacenó correctamente");
                console.log(response);

            } else {
                alertify.error("Ocurrió un error al almacenar la información");
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });

 upd_user();

}



function paso5() {
    
    

var bandera_foto=0;
for(i=1;i<j;i++){
    
   if ($('#sel' + i).val() === "") {
      bandera_foto=1+bandera_foto; 
}
}

if(bandera_foto===0){
     $identificador = document.getElementById("identificador");


    var imgElem1 = document.getElementById('img_ext');    
    var imgElem2 = document.getElementById('img_esp');
    var imgElem3 = document.getElementById('img_coc');
    var imgElem4 = document.getElementById('img_nom');
    var imgElem5 = document.getElementById('img_hab');
    var imgElem6 = document.getElementById('img_usa');

var exito=true;
for (i=1;i<7;i++){
    
var url_img=String(eval("imgElem"+i).src);

if(url_img=== ""){
    console.log("no")
}else{
    console.log("si")
}


//var b64=url_img.startsWith("data:image/");
//
//console.log(b64)
//
//if (b64) {
//    console.log("valido")
//    ingresar_img($($identificador).val(),url_img,'imagen910'+j,'910'+j,'prueba'+j+'.png');
//} else {
//toDataUrl(url_img, function(myBase64) {
//    console.log("no valido")
// ingresar_img($($identificador).val(),myBase64,'imagen910'+j,'910'+j,'prueba'+j+'.png');
//});
//}
//
//
//
//
//
//            
            
}
if(exito){
    alertify.success("Información almacenada correctamente");
}

    
    
    
    
}else{
   alertify.error("Error: "+bandera_foto+" Fotos sin asignar categoria");
}



 upd_user();
 
function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
 
 
function ingresar_img(identificador,url,descripcion,tipo_documento,nombre){
    
        function b64toBlob(b64Data, contentType, sliceSize) {
                contentType = contentType || '';
                sliceSize = sliceSize || 512;

                var byteCharacters = atob(b64Data);
                var byteArrays = [];

                for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                    var slice = byteCharacters.slice(offset, offset + sliceSize);

                    var byteNumbers = new Array(slice.length);
                    for (var i = 0; i < slice.length; i++) {
                        byteNumbers[i] = slice.charCodeAt(i);
                    }

                    var byteArray = new Uint8Array(byteNumbers);

                    byteArrays.push(byteArray);
                }

              var blob = new Blob(byteArrays, {type: contentType});
              return blob;
        }

        
                var ImageURL = url;
                
                if(url==='sinImg'){
                    
                }else{
                        // Split the base64 string in data and contentType
                        var block = ImageURL.split(";");
                        // Get the content type of the image
                        var contentType = block[0].split(":")[1];// In this case "image/gif"
                        // get the real base64 content of the file
                        var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

                        // Convert it to a blob to upload
                        var blob = b64toBlob(realData, contentType);

                        //stop submit the form, we will post it manually.
                        event.preventDefault();

                        // Get form
                        var form = $('#fileUploadForm')[0];

                                // Create an FormData object 
                        var data = new FormData(form);

                                // If you want to add an extra field for the FormData
                        data.append("identificador", identificador);
                        data.append("numFolios", "1");
                        data.append("descripcion",descripcion);
                        data.append("tipo_documento",tipo_documento);
                        data.append("image", blob,nombre);

                        $.ajax({
                            type: "POST",
                            enctype: 'multipart/form-data',
                            url: "FileUploader",
                            data: data,
                            processData: false,
                            contentType: false,
                            cache: false,
                            timeout: 600000,
                            success: function (data) {

                                $("#result").text(data);
                                console.log("SUCCESS : ", data);
                                $("#btnSubmit").prop("disabled", false);

                            },
                            error: function (e) {

                                $("#result").text(e.responseText);
                                console.log("ERROR : ", e);
                                $("#btnSubmit").prop("disabled", false);

                            }
                        });
                }

}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

}

function paso6() {

    $identificador = document.getElementById("identificador");
    $observ = document.getElementById("observ").value.toUpperCase().replace("\t", "").trim();
    $nom_ela = document.getElementById("nom_ela").value.toUpperCase().replace("\t", "").trim();
    $car_ela = document.getElementById("car_ela").value.toUpperCase().replace("\t", "").trim();
    $nom_rev = document.getElementById("nom_rev").value.toUpperCase().replace("\t", "").trim();
    $car_rev = document.getElementById("car_rev").value.toUpperCase().replace("\t", "").trim();


    $datos = {
        op: 'ficha_6',
        identificador: $($identificador).val(),
        observ: $observ,
        nom_ela: $nom_ela,
        car_ela: $car_ela,
        nom_rev: $nom_rev,
        car_rev: $car_rev
    };

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            console.log(response.length);
            if (response.length > 0 && response[0]['error'] === undefined)
            {
                $('#myModalf').modal('show');
                
            }
        },
        error: function (response) {
            alertify.error("Ocurrió un error al almacenar la información");
        }
    });


 upd_user();
}

function paso7() {

    
    $identificador = document.getElementById("identificador");
    $revisado = true;
    $usuario_que_revisa=usuario_usuario;
    $usuario_nombre_revisa=usuario_nombre;
    $usuario_contrato_revisa='Contrato No. 121 del 2018';
            

    $datos = {
        op: 'ficha_7',
        identificador: $($identificador).val(),
        revisado: $revisado,
        usuario_que_revisa: $usuario_que_revisa,
        usuario_nombre_revisa:$usuario_nombre_revisa.toUpperCase(),
        usuario_contrato_revisa:$usuario_contrato_revisa.toUpperCase()
    };

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            alertify.success("Revisión Almacenada");
        },
        error: function (response) {
            alertify.success("Revisión Almacenada 1");
        }
    });



}

function paso8() {

    
    $identificador = document.getElementById("identificador");
    $revisado = false;
    $usuario_que_revisa='';
    $usuario_nombre_revisa='';
    $usuario_contrato_revisa='';
            

    $datos = {
        op: 'ficha_8',
        identificador: $($identificador).val(),
        revisado: $revisado,
        usuario_que_revisa: $usuario_que_revisa,
        usuario_nombre_revisa:$usuario_nombre_revisa.toUpperCase(),
        usuario_contrato_revisa:$usuario_contrato_revisa.toUpperCase()
    };

    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: $datos,
        dataType: "json",
        async: true,
        success: function (response) {
            alertify.success("Revisión Almacenada");
        },
        error: function (response) {
            alertify.success("Revisión Almacenada 1");
        }
    });



}