function edicion_servicios_publicos(identificador) {
    var contenido =
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
            '<h4 class="modal-title">Formulario de: Edición de Servicios públicos</h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<div id="smartwizard">' +
            '    <ul>' +
            '        <li><a href="#step-1">Energía Eléctrica <div style="font-size:1.5em; color:#F1C40F"><i class="fas fa-battery-half"></i></div></a></li>' +
            '        <li><a href="#step-2">Acueducto <div style="font-size:1.5em; color:#1577f5"><i class="fas fa-tint"></i></div></a></li>' +
            '        <li><a href="#step-3">Alcantarillado <div style="font-size:1.5em; color:#0b3f90"><i class="fab fa-first-order-alt"></i></i></div></a></li>' +
            '        <li><a href="#step-4">Aseo <div style="font-size:1.5em; color:#b58686"><i class="fas fa-broom"></i></div></a></li>' +
            '        <li><a href="#step-5">Gas <div style="font-size:1.5em; color:#f10f0f"><i class="fas fa-fire"></i></div></a></li>' +
            '        <li><a href="#step-6">Telefono <div style="font-size:1.5em; color:#0ff16b"><i class="fas fa-phone"></i></div></a></li>' +
            '    </ul>' +
            '<div  class="">' +
            '   <div id="step-1" class="">' +
            '<button class="btn btn-success " id="add_energia"><i class="fas fa-plus"></i></button>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            ' <th scope="col">#</th>' +
            '<th scope="col">Tipo de Servicio</th>' +
            ' <th scope="col">Cuenta</th>' +
            '<th scope="col">Estado</th>' +
            '<th scope="col">Dirección</th>' +
            '<th scope="col" >Modalidad</th>' +
            '<th scope="col" >Disponibilidad</th>' +
            '<th scope="col" >Fecha Paz y Salvo</th>' +
            '<th scope="col" >Observación</th>' +
            '<th scope="col"   style="width: 11%;" > Opciones </th>' +
            ' </tr>' +
            '</thead>' +
            ' <tbody id="energia">' +
            '</tbody>' +
            '</table>' +
            '  </div> ' +
            '   <div id="step-2" class="">' +
            '<button class="btn btn-success"  id="add_agua"><i class="fas fa-plus"></i></button>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            ' <th scope="col">#</th>' +
            '<th scope="col">Tipo de Servicio</th>' +
            ' <th scope="col">Cuenta</th>' +
            '<th scope="col">Estado</th>' +
            '<th scope="col">Dirección</th>' +
            '<th scope="col" >Modalidad</th>' +
            '<th scope="col" >Disponibilidad</th>' +
            '<th scope="col" >Fecha Paz y Salvo</th>' +
            '<th scope="col" >Observación</th>' +
            '<th scope="col"   style="width: 11%;" > Opciones </th>' +
            ' </tr>' +
            '</thead>' +
            ' <tbody id="acueducto">' +
            '</tbody>' +
            '</table>' +
            '  </div> ' +
            '   <div id="step-3" class="">' +
            '<button class="btn btn-success"  id="add_alacantrillado"><i class="fas fa-plus"></i></button>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            ' <th scope="col">#</th>' +
            '<th scope="col">Tipo de Servicio</th>' +
            ' <th scope="col">Cuenta</th>' +
            '<th scope="col">Estado</th>' +
            '<th scope="col">Dirección</th>' +
            '<th scope="col" >Modalidad</th>' +
            '<th scope="col" >Disponibilidad</th>' +
            '<th scope="col" >Fecha Paz y Salvo</th>' +
            '<th scope="col" >Observación</th>' +
            '<th scope="col"   style="width: 11%;" > Opciones </th>' +
            ' </tr>' +
            '</thead>' +
            ' <tbody id="alcantarillado">' +
            '</tbody>' +
            '</table>' +
            '  </div> ' +
            '   <div id="step-4" class="">' +
            '<button class="btn btn-success"  id="add_aseo"><i class="fas fa-plus"></i></button>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            ' <th scope="col">#</th>' +
            '<th scope="col">Tipo de Servicio</th>' +
            ' <th scope="col">Cuenta</th>' +
            '<th scope="col">Estado</th>' +
           '<th scope="col">Dirección</th>' +
            '<th scope="col" >Modalidad</th>' +
            '<th scope="col" >Disponibilidad</th>' +
            '<th scope="col" >Fecha Paz y Salvo</th>' +
            '<th scope="col" >Observación</th>' +
            '<th scope="col"   style="width: 11%;" > Opciones </th>' +
            ' </tr>' +
            '</thead>' +
            ' <tbody id="aseo">' +
            '</tbody>' +
            '</table>' +
            '  </div> ' +
            '   <div id="step-5" class="">' +
            '<button class="btn btn-success"  id="add_gas"><i class="fas fa-plus"></i></button>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            ' <th scope="col">#</th>' +
            '<th scope="col">Tipo de Servicio</th>' +
            ' <th scope="col">Cuenta</th>' +
            '<th scope="col">Estado</th>' +
            '<th scope="col">Dirección</th>' +
            '<th scope="col" >Modalidad</th>' +
            '<th scope="col" >Disponibilidad</th>' +
            '<th scope="col" >Fecha Paz y Salvo</th>' +
            '<th scope="col" >Observación</th>' +
            '<th scope="col"   style="width: 11%;" > Opciones </th>' +
            ' </tr>' +
            '</thead>' +
            ' <tbody id="gas">' +
            '</tbody>' +
            '</table>' +
            '  </div> ' +
            '   <div id="step-6" class="">' +
            '<button class="btn btn-success"  id="add_telefono"><i class="fas fa-plus"></i></button>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            ' <th scope="col">#</th>' +
            '<th scope="col">Tipo de Servicio</th>' +
            ' <th scope="col">Cuenta</th>' +
            '<th scope="col">Estado</th>' +
            '<th scope="col">Dirección</th>' +
            '<th scope="col" >Modalidad</th>' +
            '<th scope="col" >Disponibilidad</th>' +
            '<th scope="col" >Fecha Paz y Salvo</th>' +
            '<th scope="col" >Observación</th>' +
            '<th scope="col"   style="width: 11%;"> Opciones </th>' +
            ' </tr>' +
            '</thead>' +
            ' <tbody id="telefono">' +
            '</tbody>' +
            '</table>' +
            '  </div> ' +
            '</div>' +
            '</div>' +
            '<hr><div class="row hidden"> ' +
            '<input type="text" id="servicio">' +
            '<input type="text" id="consecutivo">' +
            '</div>' +
            '<div class="row"> ' +
            '<div class="col-md-1"><label>Servicio:</label></div>' +
            '<div class="col-md-11"><h3  style="color: #1da2ce;" id="lservicio" ></h3></div>' +
            '</div>' +
            '<div class="row"> ' +
            '<div class="col-md-2"> ' +
            '<div class="form-group"> ' +
            '<label for="man_idiger" class="control-label">Disponibilidad</label> ' +
            '<select class="form-control" id="disponibilidad"><option value="">Seleccione</option><option value="Si">Si</option><option value="No">No</option></select> ' +
            '</div> ' +
            '</div> ' +
            ' <div class="col-md-3"> ' +
            '<div class="form-group"> ' +
            '<label for="man_idiger" class="control-label">Modo</label> ' +
            '<select class="form-control"  id="modalidad">' +
            '<option value="" >Seleccione el modo</option>' +
            '<option value="Provisional">1. Provisional</option>' +
            '<option value="Definitivo Privado">2. Definitivo Privado</option>' +
            '<option value="Definitivo Público">3. Definitivo Público</option>' +
            '</select>' +
            '</div> ' +
            '</div> ' +
            '<div class="col-md-3"> ' +
            '<div class="form-group">' +
            ' <label class="control-label">Dirección</label>' +
            '<div class="input-group">' +
            '<input type="text" class="form-control upd dir-camp" id="dir_campo" placeholder="Dirección" disabled>' +
            '<span class="input-group-btn">' +
            '<button class="btn btn-success upd_btn edit_dir" type="button" id="edit_dir"><span class="glyphicon glyphicon-pencil"></span></button>' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div> ' +
            '<div class="col-md-4"> ' +
            '<div class="form-group"> ' +
            '<label for="man_idiger" class="control-label">Cuenta</label> ' +
            '<input type="text" class="form-control num_cuenta" id="cuenta" placeholder="No. Cuenta"> ' +
            '<input type="checkbox" id="no_cuenta">Sin cuenta' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '                 <div class="row"> ' +
            '                       <div class="col-md-2" id="div_est_ene"> ' +
            '                           <div class="form-group"> ' +
            '                               <label  class="control-label">Estado</label> ' +
            '                                    <div class="input-group"> ' +
            '                                        <select class="form-control estado" id="estado" >' +
            '                                            <option value="">seleccione...</option><option>A paz y salvo</option>' +
            '                                            <option>Deuda</option>' +
            '                                            <option>Activa</option>' +
            '                                         </select>' +
            '                                         <span class="input-group-addon show_val"  >$</span>' +
            '                                         <input type="text" class="form-control moneda show_val" id="deuda"placeholder="Deuda"> ' +
            '                                   </div> ' +
            '                          </div> ' +
            '                      </div> ' +
            '<div class="col-md-3"  id="fecha_paz_cont"> ' +
            '  <div class="form-group"> ' +
            '     <label for="man_idiger" class="control-label">Fecha de paz y salvo</label> ' +
            '     <div class="span5 sandbox-container"><input id="fecha_serv" type="text" class="form-control fecha_validate" placeholder="Fecha">' +
            '     </div>' +
            '   </div> ' +
            '</div> ' +
            ' <div class="col-md-7" id="div_obs_ene"> ' +
            '   <div class="form-group"> ' +
            '     <label for="man_idiger" class="control-label">Observación</label> ' +
            '     <input type="text"  class="form-control obs_serv" id="observacion"> ' +
            '    </div> ' +
            '   </div> ' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-md-10">' +
            '</div>' +
            '<div class="col-md-2">' +
            '<button class="btn btn-primary" id="save_service"><i class="far fa-save"></i> Guardar </button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" data-dismiss="modal"  id="cerrar_crvicios" class="btn btn-default">Cerrar</button>' +
            '</div>';
    $('.modal-content').css('height', '90%');
    $('.modal-content').css('width', '100%');
    $('.modal-body').css('max-height', 'calc(100% - 100px)');
    $('#form').empty();
    $('#form').append(contenido);
    $('#modal_form').modal('show');
    getInformacionServicios();
    $('#smartwizard').smartWizard({
        selected: 0, // Initial selected step, 0 = first step 
        keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
        autoAdjustHeight: true, // Automatically adjust content height
        cycleSteps: false, // Allows to cycle the navigation of steps
        backButtonSupport: true, // Enable the back button support
        useURLhash: true, // Enable selection of the step based on url hash
        lang: {// Language variables
            next: 'Siguiente',
            previous: 'Anterior'
        },
        toolbarSettings: {
            toolbarExtraButtons: [
//                $('<button></button>').text('Guardar ')
//                        .addClass('btn  btn-primary')
//                        .attr('id', 'save_service')

            ],
        },
        anchorSettings: {
            anchorClickable: true, // Enable/Disable anchor navigation
            enableAllAnchors: true, // Activates all anchors clickable all times
            markDoneStep: true, // add done css
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        },
        disabledSteps: [], // Array Steps disabled
        errorSteps: [], // Highlight step with errors
        theme: 'default',
        transitionSpeed: '400'
    });
    $('.show_val').hide();
    $('.edit_dir').click(function () {
        var fecha = $(this).parent().parent().find('.dir-camp');

        $('#form1').empty();
        var contenido = generar_direccion();
        $('#form1').append(contenido);
        $('#modal').modal('show');
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
            $(fecha[0]).val($('#11d').text());
        });
    });
    $('#add_energia,#add_agua,#add_alacantrillado,#add_aseo,#add_gas,#add_telefono').on('click', agregarServicio);
//    $('#add_energia').on('click', agregarServicio);
    var dia_de_hoy = moment(new Date()).format("DD/MM/YYYY");
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
        endDate: dia_de_hoy
    });
    $('#cerrar_crvicios').on('click', function () {
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
                $('#serv_profile').empty();
                if (response.length > 0) {
                    $.each(response, function (ind, serv) {
                        var fila = ' <tr> <th scope="row">' + serv.tipo_servicio + '</th> <td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td>  <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td>  <td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? serv.fecha_paz_salvo : ' ') + '</td>  <td><span id="habitacional_btn" class="badge badge-default badge-pill">' + serv.contador + '</span></td> </tr>';
                        $('#serv_profile').append(fila);
                    });
                }

            }
        });
    });
    $(".fecha_validate").blur(function () {
        var newDate = $(this).val();
        if (newDate === '') {

        } else {

            if (!moment(newDate, 'DD/MM/YYYY', true).isValid()) {
                $(this).val('');
                alertify.error("Formato de Fecha Incorrecto");
            } else {
                if (newDate > dia_de_hoy) {
                    $(this).val('');
                    alertify.error("Fecha posterior al dia de hoy");
                }
            }
        }


    });
    $('.obs_serv').keyup(function () {
        $(this).val($(this).val().toUpperCase());
    });
    $('.moneda').keyup(function (event) {
// skip for arrow keys
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }

        $(this).val(function (index, value) {
            return value
                    .replace(/\D/g, "")
                    .replace(/([0-9])([0-9]{0})$/, '$1')
                    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
                    ;
        });
    });
    $(".estado").on('change', function () {
        if ($(this).val() === 'Deuda') {
            $('.show_val').show();
            $('#div_est_ene').removeClass("col-md-2").addClass("col-md-5");
            $('#div_obs_ene').removeClass("col-md-7").addClass("col-md-4");
        } else {
            $('.show_val').hide();
            $('#div_est_ene').removeClass("col-md-5").addClass("col-md-2");
            $('#div_obs_ene').removeClass("col-md-4").addClass("col-md-7");
        }
        if (!$(this).val().includes('A paz y salvo')) {
            $('#fecha_paz_cont').hide();
        } else {
            $('#fecha_paz_cont').show();
        }

    });
    $('.eliminar').on('click', eliminarServicio);
    $('.editar').on('click', editarServicio);
    $('#no_cuenta').on('change', function () {
        if ($('#no_cuenta').prop('checked')) {
            $('#cuenta').val('SIN CUENTA');
            $('#disponibilidad').val('No');
            $('#modalidad').val('');
            $('#disponibilidad').attr("disabled", "disabled");
            $('#modalidad').attr("disabled", "disabled");
            $('#cuenta').attr("disabled", "disabled");

        } else {
            $('#cuenta').val('');
            $('#cuenta').removeAttr('disabled');
            $('#modalidad').removeAttr('disabled');
            $('#disponibilidad').removeAttr('disabled');
        }
    });

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
//    funcion guardar 
    $('#save_service').on('click', function () {
        guardarServicio();
    });
    //funcion de inicializacion
    var servicios = [];
    function fechaIngreso(fecha) {
        var date = fecha.split("-");
        return date[2] + '/' + date[1] + '/' + date[0];
    }
    function fechaSalida(fecha) {
        var date = fecha.split("/");
        return date[2] + '-' + date[1] + '-' + date[0];
    }
    function getInformacionServicios() {
        $datos = {
            op: 'informacion_servicios',
            identificador: identificador
        };
        $.ajax({
            type: "GET",
            url: "GestionConsultas",
            data: $datos,
            dataType: "json",
            async: false,
            success: function (response) {
                servicios = response;
                agregarServicios();
            }
        });
    }
    function agregarServicios() {
        $('#energia').empty();
        $('#acueducto').empty();
        $('#alcantarillado').empty();
        $('#aseo').empty();
        $('#gas').empty();
        $('#telefono').empty();
        $.each(servicios, function (ind, serv) {
            switch (serv.tipo_servicio) {
                case 'energia':
                    var columna = '<tr><th scope="row">' + serv.consecutivo + '</th> <td>' + serv.tipo_servicio + '</td><td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td> <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td> <td>' + (typeof serv.direccion !== 'undefined' ? serv.direccion : ' ') + '</td> <td>' + (typeof serv.disponibilidad !== 'undefined' ? serv.disponibilidad : ' ') + '</td><td>' + (typeof serv.modalidad !== 'undefined' ? serv.modalidad : ' ') + '</td><td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? fechaIngreso(serv.fecha_paz_salvo) : ' ') + '</td><td>' + (typeof serv.observacion !== 'undefined' ? serv.observacion : ' ') + '</td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                    $('#energia').append(columna);
                    break;
                case 'acueducto':
                    var columna = '<tr><th scope="row">' + serv.consecutivo + '</th> <td>' + serv.tipo_servicio + '</td><td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td> <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td> <td>' + (typeof serv.direccion !== 'undefined' ? serv.direccion : ' ') + '</td> <td>' + (typeof serv.disponibilidad !== 'undefined' ? serv.disponibilidad : ' ') + '</td><td>' + (typeof serv.modalidad !== 'undefined' ? serv.modalidad : ' ') + '</td><td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? fechaIngreso(serv.fecha_paz_salvo) : ' ') + '</td><td>' + (typeof serv.observacion !== 'undefined' ? serv.observacion : ' ') + '</td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                    $('#acueducto').append(columna);

                    break;
                case 'alcantarillado':
                    var columna = '<tr><th scope="row">' + serv.consecutivo + '</th> <td>' + serv.tipo_servicio + '</td><td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td> <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td> <td>' + (typeof serv.direccion !== 'undefined' ? serv.direccion : ' ') + '</td> <td>' + (typeof serv.disponibilidad !== 'undefined' ? serv.disponibilidad : ' ') + '</td><td>' + (typeof serv.modalidad !== 'undefined' ? serv.modalidad : ' ') + '</td><td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? fechaIngreso(serv.fecha_paz_salvo) : ' ') + '</td><td>' + (typeof serv.observacion !== 'undefined' ? serv.observacion : ' ') + '</td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                    $('#alcantarillado').append(columna);

                    break;
                case 'aseo':
                    var columna = '<tr><th scope="row">' + serv.consecutivo + '</th> <td>' + serv.tipo_servicio + '</td><td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td> <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td> <td>' + (typeof serv.direccion !== 'undefined' ? serv.direccion : ' ') + '</td> <td>' + (typeof serv.disponibilidad !== 'undefined' ? serv.disponibilidad : ' ') + '</td><td>' + (typeof serv.modalidad !== 'undefined' ? serv.modalidad : ' ') + '</td><td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? fechaIngreso(serv.fecha_paz_salvo) : ' ') + '</td><td>' + (typeof serv.observacion !== 'undefined' ? serv.observacion : ' ') + '</td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';

                    $('#aseo').append(columna);
                    break;
                case 'gas':
                    var columna = '<tr><th scope="row">' + serv.consecutivo + '</th> <td>' + serv.tipo_servicio + '</td><td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td> <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td> <td>' + (typeof serv.direccion !== 'undefined' ? serv.direccion : ' ') + '</td> <td>' + (typeof serv.disponibilidad !== 'undefined' ? serv.disponibilidad : ' ') + '</td><td>' + (typeof serv.modalidad !== 'undefined' ? serv.modalidad : ' ') + '</td><td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? fechaIngreso(serv.fecha_paz_salvo) : ' ') + '</td><td>' + (typeof serv.observacion !== 'undefined' ? serv.observacion : ' ') + '</td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                    $('#gas').append(columna);

                    break;
                case 'telefono':
                    var columna = '<tr><th scope="row">' + serv.consecutivo + '</th> <td>' + serv.tipo_servicio + '</td><td>' + (typeof serv.cuenta !== 'undefined' ? serv.cuenta : ' ') + '</td> <td>' + (typeof serv.estado !== 'undefined' ? serv.estado : ' ') + '</td> <td>' + (typeof serv.direccion !== 'undefined' ? serv.direccion : ' ') + '</td> <td>' + (typeof serv.disponibilidad !== 'undefined' ? serv.disponibilidad : ' ') + '</td><td>' + (typeof serv.modalidad !== 'undefined' ? serv.modalidad : ' ') + '</td><td>' + (typeof serv.fecha_paz_salvo !== 'undefined' ? fechaIngreso(serv.fecha_paz_salvo) : ' ') + '</td><td>' + (typeof serv.observacion !== 'undefined' ? serv.observacion : ' ') + '</td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                    $('#telefono').append(columna);
                    break;

            }
        });

        $('.eliminar').on('click', eliminarServicio);
        $('.editar').on('click', editarServicio);
    }

    function eliminarServicio() {
        var filaPadre = $(this).parent().parent();
        var columnas = $(filaPadre).find('th,td');
        $datos = {
            op: 'borrar_servicio',
            identificador: identificador,
            servicio: $(columnas[1]).text(),
            consecutivo: $(columnas[0]).text()
        };
        $.ajax({
            type: "GET",
            url: "GestionDML",
            data: $datos,
            dataType: "json",
            async: false,
            complete: function (response) {
                $(filaPadre).remove();
                $('input,select').val('');
                $('#lservicio').text('');
            }
        });
    }

    function editarServicio() {
        var filaPadre = $(this).parent().parent();
        var columnas = $(filaPadre).find('th,td');
        var estado = $(columnas[3]).text() !== ' ' ? $(columnas[3]).text() : '';
        var estado_real;
        if (estado.includes('Deuda')) {
            var temp = estado.split(" ");
            $('.show_val').show();
            $('#div_est_ene').removeClass("col-md-2").addClass("col-md-5");
            $('#div_obs_ene').removeClass("col-md-7").addClass("col-md-4");
            estado_real = temp[0];
            deuda = temp[1];

        } else {
            estado_real = estado;
            deuda = '';
            $('.show_val').hide();
            $('#div_est_ene').removeClass("col-md-5").addClass("col-md-2");
            $('#div_obs_ene').removeClass("col-md-4").addClass("col-md-7");

        }
        if (!estado.includes('A paz y salvo')) {
            $('#fecha_paz_cont').hide();
        } else {
            $('#fecha_paz_cont').show();
        }
        if (!$(columnas[2]).text().includes('SIN CUENTA')) {
            $('#modalidad').removeAttr("disabled");
            $('#cuenta').removeAttr("disabled");
            $('#no_cuenta').prop("checked", false);
        } else {
            $('#disponibilidad').val('No');
            $('#modalidad').attr("disabled", "disabled");
            $('#cuenta').attr("disabled", "disabled");
            $('#no_cuenta').prop("checked", true);
        }

        $('#lservicio').text($(columnas[1]).text() + ' #' + $(columnas[0]).text());
        $('#consecutivo').val($(columnas[0]).text());
        $('#servicio').val($(columnas[1]).text());
        $('#disponibilidad').val($(columnas[5]).text() !== ' ' ? $(columnas[5]).text() : '');
        $('#modalidad').val($(columnas[6]).text() !== ' ' ? $(columnas[6]).text() : '');
        $('#dir_campo').val($(columnas[4]).text() !== ' ' ? $(columnas[4]).text() : '');
        $('#cuenta').val($(columnas[2]).text() !== ' ' ? $(columnas[2]).text() : '');
        $('#estado').val(estado_real);
        $('#deuda').val(deuda);
        $('#fecha_serv').val($(columnas[7]).text() !== ' ' ? $(columnas[7]).text() : '');
        $('#observacion').val($(columnas[8]).text() !== ' ' ? $(columnas[8]).text() : '');

    }

    function agregarServicio() {
        var tipo_serv = '';
        switch ($(this).attr('id')) {
            case 'add_energia':
                tipo_serv = 'energia';
                break;
            case 'add_agua':
                tipo_serv = 'acueducto';
                break;
            case 'add_alacantrillado':
                tipo_serv = 'alcantarillado';
                break;
            case 'add_aseo':
                tipo_serv = 'aseo';
                break;
            case 'add_gas':
                tipo_serv = 'gas';
                break;
            case 'add_telefono':
                tipo_serv = 'telefono';
                break;

        }
        $.ajax({
            type: "POST",
            url: "GestionConsultas",
            data: {
                op: 'cuenta_servicios',
                identificador: identificador,
                servicio: tipo_serv
            },
            dataType: "json",
            success: function (response) {
                var consecutivo = 0;
                console.log(response);
                if (response.length > 0)
                    consecutivo = response[0].consecutivo;

                $.ajax({
                    type: "POST",
                    url: "GestionDML",
                    data: {
                        op: 'insertar_servicio',
                        identificador: identificador,
                        servicio: tipo_serv,
                        consecutivo: (consecutivo + 1)
                    },
                    dataType: "json",
                    complete: function (response) {
                        switch (tipo_serv) {
                            case 'energia':
                                var columna = '<tr><th scope="row">' + (consecutivo + 1) + '</th> <td>' + tipo_serv + '</td><td></td> <td></td> <td></td> <td></td><td></td><td></td><td></td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                                $('#energia').append(columna);
                                break;
                            case 'acueducto':
                                var columna = '<tr><th scope="row">' + (consecutivo + 1) + '</th> <td>' + tipo_serv + '</td><td></td> <td></td> <td></td> <td></td><td></td><td></td><td></td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                                $('#acueducto').append(columna);
                                break;
                            case 'alcantarillado':
                                var columna = '<tr><th scope="row">' + (consecutivo + 1) + '</th> <td>' + tipo_serv + '</td><td></td> <td></td> <td></td> <td></td><td></td><td></td><td></td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                                $('#alcantarillado').append(columna);
                                break;
                            case 'aseo':
                                var columna = '<tr><th scope="row">' + (consecutivo + 1) + '</th> <td>' + tipo_serv + '</td><td></td> <td></td> <td></td> <td></td><td></td><td></td><td></td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                                $('#aseo').append(columna);
                                break;
                            case 'gas':
                                var columna = '<tr><th scope="row">' + (consecutivo + 1) + '</th> <td>' + tipo_serv + '</td><td></td> <td></td> <td></td> <td></td><td></td><td></td><td></td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                                $('#gas').append(columna);

                                break;
                            case 'telefono':
                                var columna = '<tr><th scope="row">' + (consecutivo + 1) + '</th> <td>' + tipo_serv + '</td><td></td> <td></td> <td></td> <td></td><td></td><td></td><td></td> <td><button class="btn btn-sm btn-success  editar"><i class="far fa-edit"></i></button><button class="btn btn-sm btn-danger eliminar"><i class="far fa-trash-alt"></i></button></td></tr>';
                                $('#telefono').append(columna);
                                break;
                        }
                        $('input,select').val('');
                        $('#consecutivo').val(consecutivo + 1);
                        $('#servicio').val(tipo_serv);
                        $('#lservicio').text(tipo_serv + ' #' + (consecutivo + 1));
                        $('.eliminar').on('click', eliminarServicio);
                        $('.editar').on('click', editarServicio);

                    }
//        
                });
            }
//        
        });
    }
    //funciones de guardado
    function guardarServicio() {
        $('#fecha_serv').removeClass('error');
        $('#cuenta').removeClass('error');
        var valido = true;
        if ($('#estado').val() === 'A paz y salvo' && $('#fecha_serv').val() === '') {
            $('#fecha_serv').addClass('error');
            valido = false;
        }
        if ($('#estado').val() !== 'A paz y salvo' && $('#fecha_serv').val() !== '') {
            $('#fecha_serv').val('');           
        }
        if ($('#estado').val() !== 'Deuda') {
            $('#deuda').val('');           
        }
        if ($('#cuenta').val() === '') {
            $('#cuenta').addClass('error');
            valido = false;
        }        
        var fech = fechaSalida($('#fecha_serv').val());
        if (valido) {
            $.ajax({
                type: "POST",
                url: "GestionDML",
                data: {
                    op: 'actualizar_servicio',
                    identificador: identificador,
                    servicio: $('#servicio').val(),
                    consecutivo: $('#consecutivo').val(),
                    modalidad: $('#modalidad').val(),
                    disponibilidad: $('#disponibilidad').val(),
                    direccion: $('#dir_campo').val(),
                    cuenta: $('#cuenta').val(),
                    estado: $('#estado').val() + ($('#deuda').val() !== '' ? ' ' + $('#deuda').val() : ''),
                    fecha: $('#fecha_serv').val() !== '' ? "'" + (new Date(fech).toISOString()).split("T")[0] + "'" : 'null',
                    observacion: $('#observacion').val()

                },
                dataType: "text",
                async: false,
                success: function (response) {

                    alertify.success('Información de Energía Eléctrica guardada');
                    getInformacionServicios();
                    $('input,select').val('');
                    $('#lservicio').text('');
                },
                error: function (response) {
                    alertify.error('No se pudo guardar');
                }


            });
        }

    }


}
;
