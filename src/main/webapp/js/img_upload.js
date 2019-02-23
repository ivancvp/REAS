
function upload_userImg(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img_profile')
                    .attr('src', e.target.result)
                    .width(250)
                    .height(250);
            postUserImg(usuario_identificador,e.target.result);
            };
	    
            reader.readAsDataURL(input.files[0]);
        }
         	 
    }
	
	function imagenUsuario(id_user){
		
		imgsrc=getUserImg(id_user);
		
		var contenido='<label id="getFileLabel" for="getFile" style="height: 250px;  width: 250px; cursor:pointer; " class="border border-dark">'+
			'<img id="img_profile" src='+imgsrc+' alt="your image" style="width:250px;heigth:250px" title="Cambiar Imágen"/>'+
		'</label>'+
		'<input type="file" id="getFile" onchange="upload_userImg(this);"  style="display: none;" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|images/*"/>';
		
		$("#img_user").append(contenido);
	}
	
	function getUserImg(id_user){	
	
        $datos = {
            op: 'get_foto',
            id_user: id_user
        };
        var result = 0;

        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {

                    resultado = response[0];  
                              

            },
            error: function (response) {
                alert("Ocurrió un error al almacenar la información");
            }
        });
        
        if(resultado["foto"] === undefined){
            resultado["foto"]="img/a0.png";
        }
        
	return resultado["foto"];
        
	}
	
	function postUserImg(id_user,imgsrc){
         
        $datos = {
            op: 'post_foto',
            id_user: id_user,
            img_src:imgsrc
        };
        var result = 0;

        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {

                    resultado = response[0];  
                    console.log();               

            },
            error: function (response) {
                alert("Ocurrió un error al almacenar la información");
            }
        });
        
		
	}
