$.reas('reas', {
    DetallesBeneficiario: function (identificador) {
        instancia = this;
        function iniciar() {

            buscarDetallesIdentificador();
        }
        function getDateFormat(date) {

            if (date === '') {

                return '';
            } else {

                var today = new Date(date);
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                today = mm + '/' + dd + '/' + yyyy;
                return [yyyy, mm, dd].join('-');
            }


        }
        ;
        function buscarDetallesIdentificador() {

            //var token = $(instancia).find('#txt_buscar_identificadores').val();

            if (identificador) {
                var contenedor = $(instancia);
                contenedor.empty();
                contenedor.addClass('row m-b-lg m-t-lg');
                contenedor.append('<div class="h3 text-center m-t-xs text-navy"><small>buscando, por favor espere </small><span class="loading dots"></span></div>');
                $.ajax({
                    type: "GET",
                    url: "GestionConsultas",
                    data: {
                        op: "consulta_detalles_beneficiario",
                        identificador: identificador
                    },
                    dataType: "json",
                    async: true,
                    success: function (response) {
                        if (response)
                        {
                            contenedor.empty();
                            if (response.length > 0) {
                                for (var i = 0; i < response.length; i++) {
                                    var resultado = response[i];
                                   console.log(resultado);
//                                    console.log(typeof resultado['Código Chip Catastro']);
                                    var unidades = '<h4><small>Unidades habitacionales: ' + (resultado['unidades_habitacionales'] > 1 ? '<span id="habitacional_btn" class="badge badge-default badge-pill">' + resultado['unidades_habitacionales'] + '</span>' : '<span id="habitacional_btn" class="badge badge-default badge-pill">1</span>') + '</small></h4>';
                                    unidades = resultado['padre'] !== undefined ? '<h4><small>Identificador principal <span id="padre_btn" class="badge badge-default badge-pill">' + resultado['padre'] + '</span></small></h4>' : unidades;
                                    contenedor.append(
                                            '<div class="row">' +
                                            '<div class="col-md-6">' +
                                            '	<div class="profile-image">' +
                                            '		<img src="img/a0.jpg" class="img-circle circle-border m-b-md" alt="profile">' +
                                            '	</div>' +
                                            '	<div class="profile-info">' +
                                            '		<div class="">' +
                                            '			<div>' +
                                            '				<h2 class="no-margins text-navy">' + (resultado['nombre_evacuado'] ? resultado['nombre_evacuado'] : '') + (resultado['cedula_evacuado'] ? ' | ' + resultado['cedula_evacuado'] : '') + '</h2>' +
                                            '				<h4 class="text-navy" id="identificador">' + resultado['IDENTIFICADOR'] + '</h4>' +
                                            '				<form class="hidden" action="http://sig-reas/Reasentamientos/s/resoluciones.jsp"  method="POST" id="reloca_from"><input type="text" id="identificador" name="identificador" value="' + resultado['IDENTIFICADOR'] + '"></form>' +
                                            '				<h4>' + (resultado['cedula_2_evacuado'] || resultado['nombre_2_evacuado'] ? ('Segundo evacuado: ' + resultado['nombre_2_evacuado'] + ' | ' + resultado['cedula_2_evacuado']) : '') + '</h4>' +
                                            '				<span>Predio PAR: <i class="fa fa-map-marker"></i> <strong id="direcion_reg">' + resultado['direccion'] + '</strong></span><br>' +
                                            '				<h4><small>Concepto de ingreso: ' + (resultado['concepto_ingreso'] ? resultado['concepto_ingreso'] : 'Sin concepto de ingreso') + '</small></h4>' +
                                            '				<h4><small>Telefono: ' + (resultado['telefono'] ? resultado['telefono'] + ' <a id="btn-contactar"><i class="fa fa-envelope-o"></i> Contactar</a>' : 'Sin teléfono') + '</small></h4>' +
                                            '				<h4><small><a id="btn-correo"><i class="fa fa-envelope"></i> Enviar correo</a></small></h4>' +
                                            unidades +
                                            '				 ' + (resultado['cuenta_ahorro'] > 0 ? '<h4><small>Cuenta de ahorro programado <a id="detalle_cuenta" target="#" class="badge badge-default badge-pill">ver</a></small></h4>' : '<h4><small>No posee cuenta de ahorro programado</h4>') +
                                            '			</div>' +
                                            '		</div>' +
                                            '	</div>' +
                                            '</div>' +
                                            '<div class="col-md-3">' +
                                            '	<table class="table small m-b-xs">' +
                                            '		<tbody>' +
                                            '			<tr>' +
                                            '				<td>' +
                                            '					Localidad <strong>' + (resultado['localidad'] ? resultado['localidad'] : '') + '</strong>' +
                                            '				</td>' +
                                            '				<td>' +
                                            '					UPZ <strong>' + (resultado['upz'] ? resultado['upz'] : '') + '</strong>' +
                                            '				</td>' +
                                            '			</tr>' +
                                            '			<tr>' +
                                            '				<td>' +
                                            '					Sector <strong>' + (resultado['sector'] ? resultado['sector'] : '') + '</strong>' +
                                            '				</td>' +
                                            '				<td>' +
                                            '					Barrio <strong>' + (resultado['barrio'] ? resultado['barrio'] : '') + '</strong>' +
                                            '				</td>' +
                                            '			</tr>' +
                                            '			<tr>' +
                                            '				<td>' +
                                            '					Manzana <strong>' + (resultado['manzana'] ? resultado['manzana'] : '') + '</strong>' +
                                            '				</td>' +
                                            '				<td>' +
                                            '					Lote <strong>' + (resultado['lote'] ? resultado['lote'] : '') + '</strong>' +
                                            '				</td>' +
                                            (typeof resultado['Predio_IDIGER'] !== 'undefined' ? '<tr><td colspan="2" >' + '<strong>' + (resultado['Predio_IDIGER'] !== '' ? resultado['Predio_IDIGER'] : '') + '</strong></td></tr>' : '') +
                                            (typeof resultado['IDENTIFICA_ANTERIOR'] !== 'undefined' ? '<tr><td colspan="2" >' + 'Identificador provisional: <strong>' + (resultado['IDENTIFICA_ANTERIOR'] !== '' ? resultado['IDENTIFICA_ANTERIOR'] : '') + ' </strong></td></tr>' : '') +
                                            (typeof resultado['Código Chip Catastro'] !== 'undefined' ? '<tr><td colspan="2" >' + ' chip catastral: <strong> ' + (resultado['Código Chip Catastro'] !== '' ? resultado['Código Chip Catastro'] : '') + ' </strong></td></tr>' : '') +
                                            '		</tbody>' +
                                            '	</table>' +
                                            '</div>' +
                                            '<div class="col-md-3 text-success">' +
                                            '	<small>Estado: </small>' +
                                            '	<h2 class="no-margins">' + (resultado['esvereditas'] === 0 ? resultado['estado'] : resultado['estado_v']) + '</h2>' +
                                            '	<small>subestado: ' + (resultado['esvereditas'] === 0 ? resultado['subestado'] : resultado['subestado_v']) + '</small>' +
                                            '	<div id="sparkline1">' +
                                            '</div>' +
                                            '</div>' +
                                            '</div>' +
                                            '<div >' +
                                            '<div class="row">' +
                                            '<div class="col-md-4 lista">' +
                                            '   <ul class="list-group">' +
                                            '<li class="list-group-item">Fecha de Ingreso al Proceso: <input id="fech_ing" disabled class="upd" style="border: 1px solid #ccc;border-radius: 15px; background:none" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')"  value="' + getDateFormat(resultado["Fecha de Ingreso al Proceso"] ? resultado["Fecha de Ingreso al Proceso"] : '') + '"></li>' +
                                            '<li class="list-group-item">Fecha de Verificación de Traslado: <input id="fech_ver" type="text" disabled  style="border: 1px solid #ccc;border-radius: 15px; background:none" value="' + getDateFormat(resultado["Fecha de Verificación de Traslado"] ? resultado["Fecha de Verificación de Traslado"] : '') + '"><button name="fech_ver" type="button" class="btn btn-link btn-xs pdf_fecha tec" style="background-color:#59739B;color:#fff;border-color:#59739B"><span class="glyphicon glyphicon-pencil"></span> Editar</button></li>' +
                                            '<li class="list-group-item">Fecha acta de entrega alternativa habitacional: <input type="text" disabled id="fech_act" style="border: 1px solid #ccc;border-radius: 15px; background:none"  value="' + (resultado["Fecha acta de entrega alternativa habitacional"] ? resultado["Fecha acta de entrega alternativa habitacional"] : '') + '"><button name="fech_act" type="button" class="btn btn-link btn-xs pdf_fecha tec" style="background-color:#59739B;color:#fff;border-color:#59739B" ><span class="glyphicon glyphicon-pencil"></span> Editar</button></li>' +
                                            '<li class="list-group-item">Fecha Entrega predio en riesgo al DADEP: <input id="fech_ent" class="upd tec" style="border: 1px solid #ccc;border-radius: 15px;   background:none" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')"  value="' + getDateFormat(resultado["Fecha Entrega predio en riesgo al DADEP"] ? resultado["Fecha Entrega predio en riesgo al DADEP"] : '') + '"></li>' +
                                            '<li class="list-group-item">Solicitud Adecuación del Predio a IDIGER: <input id="fech_sol" class="upd sup" style="border: 1px solid #ccc;border-radius: 15px; background:none" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')"  value="' + getDateFormat(resultado["Solicitud Adecuación del Predio a DPAE"] ? resultado["Solicitud Adecuación del Predio a DPAE"] : '') + '"></li>' +
                                            '<li class="list-group-item">Notificación Adecuación Predio en Alto riesgo: <input id="fech_ade" class="upd sup" style="border: 1px solid #ccc;border-radius: 15px; background:none" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')"  value="' + getDateFormat(resultado["Notificación Adecuación Predio en Alto riesgo"] ? resultado["Notificación Adecuación Predio en Alto riesgo"] : '') + '"></li>' +
                                            '<li class="list-group-item">Fecha Notificacion Alcaldia Vigilancia PAR: <input id="fech_alc" class="upd sup" style="border: 1px solid #ccc;border-radius: 15px; background:none" onfocus="(this.type=\'date\')" onfocusout="(this.type=\'text\')"  value="' + getDateFormat(resultado["Fec_Notificacion_Alcaldia_Vigilancia_PAR"] ? resultado["Fec_Notificacion_Alcaldia_Vigilancia_PAR"] : '') + '"></li>' +
                                            '<li class="list-group-item">Fecha Acta de entrega predio en riesgo a CVP: <input type="text" disabled id="fech_par"  style="border: 1px solid #ccc;border-radius: 15px; background:none"  value="' + getDateFormat(resultado["Fecha Acta de entrega predio en riesgo a CVP"] ? resultado["Fecha Acta de entrega predio en riesgo a CVP"] : '') + '"><button name="fech_par" type="button" class="btn btn-link btn-xs pdf_fecha sup" style="background-color:#59739B;color:#fff;border-color:#59739B" ><span class="glyphicon glyphicon-pencil"></span> Editar</button></li>' +
                                            '   </ul>' +
                                            '</div>' +
                                            '<div class="col-md-7 lista">' +
                                            '<div class="table-responsive-md" style="border: solid 1px lightgrey; border-radius:  20px;" >' +
                                            '<a href="#" id="editar_servicios" class="btn btn-success" style="float:rigth">' +
                                            '<i class="far fa-edit"></i> Editar' +
                                            '</a>' +
                                            '<table class="table  table-responsive-md"   id="tabla_Serv_p">' +
                                            ' <thead>' +
                                            '<tr>' +
                                            '<th scope="col">Servicio</th>' +
                                            '<th scope="col">Nº Cuenta</th>' +
                                            '<th scope="col">Estado</th>' +
                                            ' <th scope="col">Fecha paz y salvo</th>' +
                                            ' <th scope="col">Cantidad</th>' +
                                            ' </tr>' +
                                            '  </thead>' +
                                            ' <tbody id="serv_profile">' +
                                            ' </tbody>' +
                                            ' </table>' +
                                            '</div>' +
                                            ' </div>' +
                                            '</div>');


if($('#fech_act').val()===''){
   $('button[name="fech_ver"]').hide();
}
                                    
$('.pdf_fecha').click(function(){


    
var fecha_btn=$('#'+this.attributes["name"].value).val();   
var fecha_input=this.attributes["name"].value;

var fecha_inicial="1950-01-01";


if(this.attributes["name"].value==='fech_ver'){
  var tipo='Acta de verificación de traslado';
  var codigo_pdf='7201';
  
  fecha_inicial=$('#fech_act').val();
}

if(this.attributes["name"].value==='fech_act'){
  var tipo='Acta de entrega alternativa habitacional';
  var codigo_pdf='7101';
  fecha_inicial=fecha_inicial_mes_habil_2_dias();
}

if(this.attributes["name"].value==='fech_par'){
  var tipo='Acta de Entrega del Predio en Alto Riesgo a CVP';
  var codigo_pdf='7305';  
}



generar_contenedor_pdf_fecha(tipo,fecha_inicial,false);


function fecha_inicial_mes_habil_2_dias(){
    
var daystartOfMonth = moment().startOf('month').day();

var startOfMonth=moment().startOf('month').format("YYYY-MM-DD"); 

var mes_pasado=true;

var dayIncrement = 1;

if(daystartOfMonth===0 ){
    dayIncrement=3;
}
else if(daystartOfMonth===1 ){
    dayIncrement=2;
}
else if(daystartOfMonth===2 ){
    dayIncrement=2;
}
else if(daystartOfMonth===3 ){
    dayIncrement=2;
}
else if(daystartOfMonth===4 ){
    dayIncrement=2;
}
else if(daystartOfMonth===5){
    dayIncrement=4;
}
else if(daystartOfMonth===6){
    dayIncrement=4;
}
else if(daystartOfMonth===7){
    dayIncrement=3;
}

var start = moment(startOfMonth).add(dayIncrement, 'd');
var end = moment(new Date()).format("YYYY-MM-DD");

var diferencia_dias_habiles_al_actual=moment.duration(start.diff(end)).asDays();

if(diferencia_dias_habiles_al_actual<1){
    mes_pasado=false;
}

if(mes_pasado){
    startOfMonth=moment().subtract(1, 'months').date(1).format("YYYY-MM-DD");
}


return moment(startOfMonth).add(dayIncrement, 'd').format("YYYY-MM-DD");
}

function generar_contenedor_pdf_fecha(tipo,date_inicial,contar){

    var identificador = document.getElementById("identificador").innerHTML;
    var contenido=
    '<div class="modal-body"> '+
        '<div class="row"> '+
            '<div class="col-md-12"> '+
                '<h2 style="color:#2E86C1"><i class="far fa-file-pdf"></i> Cargue de documento PDF: '+tipo+'</h2>'+
                '<p>En el siguiente módulo usted podrá cargar el '+tipo+' e ingresar la fecha del '+tipo+'. </p>'+
            '</div>'+
        '</div>'+
        '<div class="form-group ">'+
        '  <label >Fecha del '+tipo+'</label>'+
        '  <div class="span5 sandbox-container"><input  type="text" class="form-control upd_estudio data fecha obligatorio" id="fecha_pdf" placeholder="Fecha"></div>'+
        '</div>'+
        '            <div class="row"> '+         
        '                   <div class="col-md-12"> '+
        '                       <label >Documento soporte: '+tipo+'</label>'+
        '<p>Adjunte y cargue un documento en formato pdf.</p>'+
        '                       <div class="file-loading"> '+
        '                           <input id="input-b1" name="input-b1" type="file" class="file" accept="application/pdf"> '+ 
        '                       </div> '+
        '<label id="input-b1_error" class="error">Campo Obligatorio. Adjunte y cargue un documento pdf!</label>'+
        '                    </div> '+
        '            </div> '+
        '                 <div class="row"> '+
        '                     <div class="col-md-12"> '+
        '                           <button class="btn btn-success" id="save_fecha_pdf">Guardar cambios <i class="fas fa-save"></i></button>           '+
        '                     </div> '+
        '                 </div> '+
    '</div>'+
    '<div class="modal-footer">' +    
    '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
    '</div>';

    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');  



var date = moment(fecha_btn);
var dia_de_hoy=moment(new Date()).format("YYYY-MM-DD"); 
var fecha_inicial=moment(date_inicial);

if(fecha_btn!==""){
    $('#fecha_pdf').val(fecha_btn);
    $('#fecha_pdf').attr('disabled', true);
}


$('#fecha_pdf').focusout(function(){
    var fecha=moment($(this).val());
    if(fecha.isBetween(fecha_inicial,dia_de_hoy)){

}else{
 $(this).val("");   
}

})

    
$('#input-b1_error').hide();



 $('.sandbox-container input').datepicker({
    startDate: date_inicial,
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



get_pdf(identificador);

function get_pdf(identificador){
    
var datos1 = {};
var url_preview1='';
    $.ajax({
        type: "POST",
        url: "GestionConsultas",
        data: {
            op: "consulta_pdf_fechas_reas",
            identificador: identificador,
            tipo_documento:codigo_pdf
        },
        dataType: "json",
        async: false,
        success: function (response) {
            if (response){
                if (response.length > 0){
                    for (var i = 0; i < response.length; i++) {
                        var resultado = response[i];
                            datos1["1"] = (resultado["id"] ? resultado["id"] : '');
                            datos1["2"] = (resultado["nombre"] ? resultado["nombre"] : '');
                            url_preview1='ObtenerArchivo?ID='+datos1["1"];
                            contar=true;
                    }
                }
            }
        }, error: function (a) {
            alert("No fué posible obtener las alternativas");
        }
    });
          
    file=$("#input-b1").fileinput({
    theme: 'fa',
    language: 'es',
    initialPreview: [
        url_preview1
    ], 
    fileActionSettings: {
    'showRemove': false,
    'indicatorNew': '&nbsp;'
},
        initialPreviewConfig: [  
        {type: "pdf", size:100,caption: datos1["2"], key: 1,id:1, downloadUrl:'ObtenerArchivo?ID='+datos1["1"]}
    ],
    uploadExtraData: function (previewId, index) {  // callback example        
            var out = {
                numFolios: 1,
                descripcion: tipo,
                identificador: identificador,
                tipo_documento:codigo_pdf,
                thumbnail: ''
            };
            return out;
        },    
    deleteExtraData: function (previewId, index) {        
        var out = {
            op: 'delete_pdf_fechas_reas',
            identificador: identificador,
            tipo_documento:codigo_pdf
        };
        return out;
    } ,   
    uploadUrl: 'FileUploader',
    deleteUrl: 'GestionConsultas',
    allowedFileExtensions: ["pdf"],
    initialPreviewAsData: true,
    showUpload: true,
    overwriteInitial: false,
    browseOnZoneClick: true,
    showRemove: true,
    autoReplace:false,
    maxFileCount: 1,
    validateInitialCount: contar
});

var borrar_pdf=true;

    $("#input-b1").on("filepredelete", function (event, key, jqXHR, data) {
        var abort = borrar_pdf;
        if(borrar_pdf){
            alertify.error("El archivo no se puede borrar");
        }
        else{
            contar=false;
        }
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });


    $("#input-b1").on('filepreajax', function (event, previewId, index) {
        contar=true;
        $('.fileinput-upload').hide();
        $('.btn-file').hide();     
    });

$('#save_fecha_pdf').click(function(){

verificar_datos_sensibles();  

function verificar_datos_sensibles(){
 
 var conta=0;   
 $('.obligatorio').each(function() {

    var str=$(this).attr('id');
    
    if($(this).val()==='' || $(this).val()==='Seleccione...' ){
        if($("#"+str+"_error").length===0) {
           $(this).after( $( "<label id="+$(this).attr('id')+'_error'+" class='error'>Campo Obligatorio</label>" ) );
           conta=conta+1;
          }else{
            $("#"+str+"_error").show();
            conta=conta+1;
          }
    }else{
       
          $("#"+str+'_error').hide();
    }
    
});

if(contar===false){    
   $('#input-b1_error').show();
   conta=1;
}else{
   $('#input-b1_error').hide(); 
}

if(conta>0){
    
alertify.error("Revise los campos obligatorios");  

}else{
    
$('#'+fecha_input).val($('#fecha_pdf').val());   
    
$datos = {
    op: 'update_detalles_fechas',
    identificador: $(document.getElementById("identificador")).text(),
    fech_ing: $(document.getElementById("fech_ing")).val().trim(),
    fech_ver: $(document.getElementById("fech_ver")).val().trim(),
    fech_act: $(document.getElementById("fech_act")).val().trim(),
    fech_ent: $(document.getElementById("fech_ent")).val().trim(),
    fech_sol: $(document.getElementById("fech_sol")).val().trim(),
    fech_ade: $(document.getElementById("fech_ade")).val().trim(),
    fech_alc: $(document.getElementById("fech_alc")).val().trim(),
    fech_par: $(document.getElementById("fech_par")).val().trim()
};
$.ajax({
    type: "GET",
    url: "GestionConsultas",
    data: $datos,
    dataType: "json",
    async: false,
    success: function (response) {
        console.log(response);
        alertify.success("Guardado exitosamente");
    },
    error: function (response) {
        alert("Error al Guardar");
    }
});  
 $('#modal_form').modal('toggle');
}
    
}
    
    
    
    
    
});


}

}         


    
});






                                    
                                    $('#editar_servicios').click(function () {
                                        edicion_servicios_publicos(identificador);
                                    });
                                    $('#sel_cta_1').change(function () {
                                        if ($("#sel_cta_1").val() === 'Deuda') {
                                            document.getElementById("cod_est").value = $("#sel_cta_1").val();
                                            $('#cod_est').attr('disabled', false);
                                        } else {
                                            document.getElementById("cod_est").value = $("#sel_cta_1").val();
                                        }
                                    });
                                    $('#sel_cta_2').change(function () {
                                        if ($("#sel_cta_2").val() === 'Deuda') {
                                            document.getElementById("acu_est").value = $("#sel_cta_2").val();
                                            $('#acu_est').attr('disabled', false);
                                        } else {
                                            document.getElementById("acu_est").value = $("#sel_cta_2").val();
                                        }
                                    });
                                    $('#sel_cta_3').change(function () {
                                        if ($("#sel_cta_3").val() === 'Deuda') {
                                            document.getElementById("gas_est").value = $("#sel_cta_3").val();
                                            $('#gas_est').attr('disabled', false);
                                        } else {
                                            document.getElementById("gas_est").value = $("#sel_cta_3").val();
                                        }
                                    });
                                    function validar() {
                                        $('.upd').each(function () {
                                            var elem = $(this);
                                            // Save current value of element
                                            elem.data('oldVal', elem.val());
                                            // Look for changes in the value
                                            elem.focusout("propertychange change click keyup input paste", function (event) {
                                                // If value has changed...
                                                if (elem.data('oldVal') != elem.val()) {
                                                    // Updated stored value
                                                    elem.data('oldVal', elem.val());
                                                    update_tecnicos();
                                                }
                                            });
                                        });
                                    }


                                    function update_tecnicos() {

                                        function special_char(string) {
                                            string = string.replace(/[&\/\\#+()$~%'":*?<>{}]/g, '');
                                            return string;
                                        }


                                        $datos = {
                                            op: 'update_detalles_fechas',
                                            identificador: $(document.getElementById("identificador")).text(),
                                            fech_ing: $(document.getElementById("fech_ing")).val().trim(),
                                            fech_ver: $(document.getElementById("fech_ver")).val().trim(),
                                            fech_act: $(document.getElementById("fech_act")).val().trim(),
                                            fech_ent: $(document.getElementById("fech_ent")).val().trim(),
                                            fech_sol: $(document.getElementById("fech_sol")).val().trim(),
                                            fech_ade: $(document.getElementById("fech_ade")).val().trim(),
                                            fech_alc: $(document.getElementById("fech_alc")).val().trim(),
                                            fech_par: $(document.getElementById("fech_par")).val().trim()
                                        };
                                        $.ajax({
                                            type: "GET",
                                            url: "GestionConsultas",
                                            data: $datos,
                                            dataType: "json",
                                            async: false,
                                            success: function (response) {
                                                console.log(response);
                                                console.log("Guardado exitosamente");
                                            },
                                            error: function (response) {
                                                alert("Error al Guardar");
                                            }
                                        });
                                        $datos1 = {
                                            op: 'update_detalles_servicios',
                                            identificador: $(document.getElementById("identificador")).text(),
                                            cod_cta: special_char($(document.getElementById("cod_cta")).val().trim()),
                                            cod_est: special_char($(document.getElementById("cod_est")).val().trim()),
                                            cod_paz: special_char($(document.getElementById("cod_paz")).val().trim()),
                                            acu_cta: special_char($(document.getElementById("acu_cta")).val().trim()),
                                            acu_est: special_char($(document.getElementById("acu_est")).val().trim()),
                                            acu_paz: special_char($(document.getElementById("acu_paz")).val().trim()),
                                            gas_cta: special_char($(document.getElementById("gas_cta")).val().trim()),
                                            gas_est: special_char($(document.getElementById("gas_est")).val().trim()),
                                            gas_paz: special_char($(document.getElementById("gas_paz")).val().trim())
                                        };
                                        $.ajax({
                                            type: "GET",
                                            url: "GestionConsultas",
                                            data: $datos1,
                                            dataType: "json",
                                            async: false,
                                            success: function (response) {
                                                console.log(response);
                                                console.log("Guardado exitosamente");
                                            },
                                            error: function (response) {
                                                alert("Error al Guardar");
                                            }
                                        });
                                    }
                                    /* linea temporal para habilitar el servicio de actualizar las fechas
                                     $('.upd').attr('disabled', 'disabled');
                                     */

                                    if (editar_servicios === true) {
                                        $('.serv').attr('disabled', false);
                                        validar();
                                    } else {
                                        $('.serv').attr('disabled', true);
                                        $('.editar_est').css({display: 'none'});
                                        $('.estado_disponible').attr("colspan", 1);
//                                        console.log("hola");
                                    }
                                    if (editar_servicios === true) {
                                        $("#editar_servicios").show();
                                    } else {
                                        $("#editar_servicios").hide();
                                    }
                                    if (editar_fec_ent === true) {
                                        $('.sup').attr('disabled', false);
                                        validar();
                                    } else {
                                        $('.sup').attr('disabled', true);
                                        $(':button.sup').hide();
                                    }
                                    if (user_tec === true) {
                                        $('.tec').attr('disabled', false);                                       
                                        validar();
                                    } else {
                                        $('.tec').attr('disabled', true);
                                        $(':button.tec').hide();
                                    }


                                    contenedor.find("#btn-contactar").on('click', function () {
                                        modalSMS(resultado['telefono']);
                                    });
                                    contenedor.find("#btn-correo").on('click', function () {
                                        modalCorreo();
                                    });
                                    if (resultado['reloca'] === 0) {
                                        $('#reloca').hide();
                                        $('#relocatext').text('Este identificador no tiene relocalización transitoria');
                                    } else {
                                        $('#relocatext').append('Último Contrato: ' + resultado['contrato'] + ' <br> fecha de terminación: ' + getDateFormat(resultado['fecha_fin']) + '<br> Titular del Contrato: ' + resultado['titular']);
                                    }
                                    resultado['estado_vivienda'] ? $('#vivienda').html('Estado: ' + resultado['estado_vivienda'] + '<br> Fecha de entrega: ' + resultado['fecha_vivienda'] + '<br> Proyecto: ' + resultado['proyecto_vivienda']) : $('#vivienda').html('El identificador no se encuentra en selección de vivienda. Las posibles razones:<ul><li>Proceso por adquisición predial</li><li>Es un identificador perteneciente a población indigena.</li><li>Su reasentamiento fue realizado antes del 2014 </li></ul>');

                                    $('#crear_estudio').show();
                                    
                                    $('#ver_resolucion_vereditas').show();

                                    if (!resultado['ficha_caracterizacion']) {
//                                        $('#txt_social').text('Aún no posee ficha social');
                                        $('#lista_chequeo_btn').hide();
                                    }
                                    if (!resultado['ficha_reconocimiento']) {
                                        $('#fcaracterizacion').hide();
                                    }
                                    if (editar_ficha_tecnica) {
                                        $('#freconocimiento').show();
                                      
                                    }
                                    console.log(resultado['registro_caracterizacion'])
                                    if (resultado['registro_caracterizacion'] > 0) {
                                        $('#fcaracterizacion').show();
                                    }
                                    if (editar_ficha_social && resultado['ficha_reconocimiento']) {
                                        $('#fcaracterizacion').show();
                                    }
                                    if(!resultado['ficha_reconocimiento']){
                                        $('#concepto_hidrico').hide();                                        
                                    }else{
                                        $('#concepto_hidrico').show();                                        
                                    }
                                    $('#concepto_hidrico').on('click', function () {
                                        $('body').riesgoHidrico({identificador: identificador});
                                    });

//                                    solicitud de nuevas unidades habitacionales
//                                    if (sol_uni && resultado['ficha_caracterizacion'] > 0) {
                                    $('#habitacional_btn').on('click', function () {
                                        $('#habitacional_btn').Unidades(
                                                {
                                                    id: identificador,
                                                    tittle: 'Solicitud Unidades Habitacionales',
                                                    tipo: (resultado['unidades_habitacionales'] > 1 ? 1 : 2),
                                                    closeHeader: true,
                                                    closeButton: true,
                                                    closeButtonName: "Cancelar",
                                                    functionButton: false,
                                                    functionButtonName: "nada"
                                                }
                                        );
                                    });
//                                    }

                                    $('#padre_btn').on('click', function () {
                                        var root = location.protocol + '//' + location.host;
                                        location.replace(root + '/Reas/profile.jsp?identificador=' + resultado['padre']);
                                    });
                                    $('#detalle_cuenta').on('click', function () {
                                        $cuenta = {};
                                        $.ajax({
                                            type: "POST",
                                            url: "GestionConsultas",
                                            data: {
                                                op: "informacion_cuenta_ahorro",
                                                identificador: identificador
                                            },
                                            dataType: "json",
                                            async: false,
                                            success: function (response) {//                       
                                                if (response.length > 0) {
                                                    $cuenta = response[0];
                                                }

                                            }
                                        });
                                        var cuerpo1 = "<table class='table small m-b-xs'> <tbody><tr> <th>Item</th> <th>Información</th> </tr></tbody>" +
                                                "<tbody> <tr> <td>Numero de cuenta</td> <td> " + $cuenta['numero_cuenta'] + "</td></tr>" +
                                                " <tr> <td> Titular</td><td>" + $cuenta['titular_principal'] + "</td> </tr>" +
                                                " <tr> <td> Cedula</td><td>" + $cuenta['cedula_principal'] + "</td> </tr>" +
                                                ($cuenta['cedula_secundario'] !== 0 ? " <tr> <td> Titular dos</td><td>" + $cuenta['titular_principal'] + "</td> </tr> <tr> <td>Cedula</td><td>" + $cuenta['cedula_secundario'] + "</td> </tr>" : '') +
                                                " <tr> <td> Banco</td><td>" + $cuenta['banco'] + "</td> </tr>" +
                                                " <tr> <td> Fecha de apertura</td><td>" + $cuenta['fecha_apertura'] + "</td> </tr>" +
                                                "<tr> <td>Valor movilizado</td> <td>" + $cuenta['valor_movilizado_cap'] + "</td></tr> </tbody>      </table>";
                                        $("#detalle_cuenta").modalup({
                                            tittle: 'Información de cuenta',
                                            closeButtonName: "Cerrar",
                                            functionButton: false,
                                            body: cuerpo1
                                        });
                                    });

                                    $.ajax({
                                        type: "POST",
                                        url: "GestionConsultas",
                                        data: {
                                            op: "muestra_servicios",
                                            identificador: identificador
                                        },
                                        dataType: "json",
                                        async: false,
                                        success: function (response) {//                       
                                            console.log(response);
                                            if (response.length > 0) {
                                                $.each(response, function (ind, serv) {
                                                    var fila = ' <tr> <th scope="row">' + serv.tipo_servicio + '</th> <td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td>  <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td>  <td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? serv.fecha_paz_salvo : ' ') + '</td>  <td><span id="habitacional_btn" class="badge badge-default badge-pill">' + serv.contador + '</span></td> </tr>';
                                                    $('#serv_profile').append(fila);
                                                });
                                            }

                                        }
                                    });



                                    //solo debe existir un resultado en la consulta
                                    break;
                                }
                            } else {
                                contenedor.append('<div class="h4 text-center m-t-xs text-navy">No se encontraron resultados</div>');
                            }
                        }
                    }, error: function (a) {
                        alert("No fué posible obtener los datos del servidor");
                    }
                });
            }
        }

        function modalSMS(numero) {
            var modal_id = Math.random().toString(36).substring(7);
            var html = '<div id="dynamicModal-' + modal_id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
            html += '<div class="modal-dialog modal-lg">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<a class="close" data-dismiss="modal">×</a>';
            html += '<h4>Enviar mensaje al beneficiario</h4>';
            html += '</div>';
            html += '<div class="modal-body">';
            html +=
                    '<form class="form" role="form" data-toggle="validator">' +
                    '  <div class="form-group">' +
                    '    <label class="control-label" for="cont_fecha_inicio">Teléfono</label>' +
                    '    <input type="text" class="form-control" id="txt_telefono" placeholder="Teléfono" value="' + (numero ? numero : '') + '">' +
                    '  </div>' +
                    '  <div class="form-group">' +
                    '    <label class="control-label" for="cont_fecha_fin">Mensaje</label>' +
                    '    <textarea id="txt_mensaje" maxlength="140" required="required" class="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="4" data-parsley-maxlength="104" data-parsley-minlength-message="el mensaje debe tener la menos 4 caracteres" data-parsley-validation-threshold="10"></textarea>' +
                    '  </div>' +
                    '</form>';
            html += '</div>';
            html += '<div class="modal-footer">';
            html += '  <span class="btn btn-success" id="btn-enviar">Enviar</span>';
            html += '  <span class="btn btn-default" data-dismiss="modal">Cerrar</span>';
            html += '</div>'; // footer
            html += '</div>'; // content
            html += '</div>'; // dialog
            html += '</div>'; // modalWindow
            $('body').append(html);
            $("#dynamicModal-" + modal_id).modal();
            $("#dynamicModal-" + modal_id).modal('show');
            $("#dynamicModal-" + modal_id).find('#btn-enviar').on('click', function () {
                if ($("#dynamicModal-" + modal_id).find("#txt_telefono").val() &&
                        $("#dynamicModal-" + modal_id).find("#txt_mensaje").text()) {
                    alert('Debe indicar el número y mensaje a enviar');
                    return;
                }

                var datos = {
                    user: 'mejiafabiandj@gmail.com',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFiaWFuIE1FamlhIiwiaWQiOjV9.Z4AO2-kgGp8SuP2qz5M9BdbxW4AulTjXyLil0bVOaKA',
                    tel: $("#dynamicModal-" + modal_id).find("#txt_telefono").val(),
                    msg: $("#dynamicModal-" + modal_id).find("#txt_mensaje").val(),
                    ref: '1'
                };
                $.ajax({
                    type: "POST",
                    url: "https://mtext.co/api/qsend",
                    dataType: "json",
                    data: datos,
                    success: function (response) {
                        $("#dynamicModal-" + modal_id).modal('hide');
                    }, error: function (error) {
                        $("#dynamicModal-" + modal_id).modal('hide');
                        //alert("No fué posible guardar el contrato");
                    }
                });
            });
            $('textarea[maxlength]').keyup(function () {
//get the limit from maxlength attribute
                var limit = parseInt($(this).attr('maxlength'));
                //get the current text inside the textarea
                var text = $(this).val();
                //count the number of characters in the text
                var chars = text.length;
                //check if there are more characters then allowed
                if (chars > limit) {
//and if there are use substr to get the text before the limit
                    var new_text = text.substr(0, limit);
                    //and change the current text with the new text
                    $(this).val(new_text);
                }
            });
        }
        function modalCorreo(numero) {
            var modal_id = Math.random().toString(36).substring(7);
            var html = '<div id="dynamicModal-' + modal_id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
            html += '<div class="modal-dialog modal-lg">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<a class="close" data-dismiss="modal">×</a>';
            html += '<h4>Correo</h4>';
            html += '</div>';
            html += '<div class="modal-body">';
            html +=
                    '<form class="form" role="form" data-toggle="validator">' +
                    '  <div class="form-group">' +
                    '    <label class="control-label" for="cont_fecha_inicio">Correo</label>' +
                    '    <input type="text" class="form-control" id="txt_correo" placeholder="E-Mail" value="">' +
                    '  </div>' +
                    '  <div class="form-group">' +
                    '    <label class="control-label" for="cont_fecha_fin">Asunto</label>' +
                    '    <input type="text" class="form-control" id="txt_asunto" placeholder="Asunto" value="">' +
                    '  </div>' +
                    '  <div class="form-group">' +
                    '    <label class="control-label" for="cont_fecha_fin">Mensaje</label>' +
                    '    <textarea id="txt_mensaje" maxlength="500" required="required" class="form-control" name="message" ></textarea>' +
                    '  </div>' +
                    '</form>';
            html += '</div>';
            html += '<div class="modal-footer">';
            html += '  <span class="btn btn-success" id="btn-enviar">Enviar</span>';
            html += '  <span class="btn btn-default" data-dismiss="modal">Cerrar</span>';
            html += '</div>'; // footer
            html += '</div>'; // content
            html += '</div>'; // dialog
            html += '</div>'; // modalWindow
            $('body').append(html);
            $("#dynamicModal-" + modal_id).modal();
            $("#dynamicModal-" + modal_id).modal('show');
            $("#dynamicModal-" + modal_id).find('#btn-enviar').on('click', function () {
                if ($("#dynamicModal-" + modal_id).find("#txt_telefono").val() &&
                        $("#dynamicModal-" + modal_id).find("#txt_mensaje").text()) {
                    alert('Debe indicar el número y mensaje a enviar');
                    return;
                }

                var datos = {
                    mensaje: $("#dynamicModal-" + modal_id).find("#txt_mensaje").val(),
                    asunto: $("#dynamicModal-" + modal_id).find("#txt_asunto").val(),
                    correos: $("#dynamicModal-" + modal_id).find("#txt_correo").val()
                };
                $.ajax({
                    type: "POST",
                    url: "Correos",
                    dataType: "json",
                    data: datos,
                    success: function (response) {
                        $("#dynamicModal-" + modal_id).modal('hide');
                    }, error: function (error) {
                        $("#dynamicModal-" + modal_id).modal('hide');
                        //alert("No fué posible guardar el contrato");
                    }
                });
            });
            $('textarea[maxlength]').keyup(function () {
//get the limit from maxlength attribute
                var limit = parseInt($(this).attr('maxlength'));
                //get the current text inside the textarea
                var text = $(this).val();
                //count the number of characters in the text
                var chars = text.length;
                //check if there are more characters then allowed
                if (chars > limit) {
//and if there are use substr to get the text before the limit
                    var new_text = text.substr(0, limit);
                    //and change the current text with the new text
                    $(this).val(new_text);
                }
            });
        }

        if (identificador) {
            iniciar();
        } else {

        }
    }
});

