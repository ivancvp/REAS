$.reas('reas', {
    FormularioConsultaBeneficiarios: function () {
        instancia = this;

        function iniciar() {
            $(instancia).empty();
            $(instancia).append(
                    '<div class="col-lg-12">' +
                    '	<div class="ibox float-e-margins">' +
                    '		<div class="ibox-title">' +
                    '			<div>' +
                    '				<form role="form" class="form-horizontal" onsubmit="return false;">' +
                    '					<div class="form-group">' +
                    '						<div class="col-sm-8"><input id="txt_buscar_identificadores" type="text" placeholder="Buscar Identificadores" class="form-control" autofocus></div>' +
                    '						<div class="col-sm-4"><a class="btn btn-white" id="btn_buscar_identificadores">Buscar</a></div>' +
                    '					</div>' +
                    '				</form>' +
                    '			</div>' +
                    '			<div class="ibox-footer">' +
                    '				<a class="collapse-link">' +
                    '					Búsqueda Avanzada <i class="fa fa-chevron-up"></i>' +
                    '				</a>' +
                    '			</div>' +
                    '		</div>' +
                    '		<div class="ibox-content collapse">' +
                    '			<form role="form" class="form-inline">' +
                    '				<div class="form-group">' +
                    '					<label for="exampleInputEmail2" class="sr-only">Email address</label>' +
                    '					<input type="email" placeholder="Localidad" id="exampleInputEmail2"' +
                    '						   class="form-control">' +
                    '				</div>' +
                    '				<div class="form-group">' +
                    '					<label for="exampleInputPassword2" class="sr-only">Password</label>' +
                    '					<input type="password" placeholder="Sector" id="exampleInputPassword2"' +
                    '						   class="form-control">' +
                    '				</div>' +
                    '			</form>' +
                    '		</div>' +
                    '	</div>' +
                    '</div>' +
                    '<div id="contenedor_resultados_consulta_beneficiarios" class="row col-lg-12"></div>');
            $(instancia).find('#txt_buscar_identificadores').on('keypress', function (e) {
                if (e.which === 13) {
                    buscarIdentificador();
                }
            });

            $(instancia).find('#btn_buscar_identificadores').on('click', function () {
                buscarIdentificador();
            });
        }

        function buscarIdentificador() {

            var token = $(instancia).find('#txt_buscar_identificadores').val();

            if (token) {
                var contenedor_resultados = $(instancia).find('#contenedor_resultados_consulta_beneficiarios');
                contenedor_resultados.empty();
                contenedor_resultados.append('<div class="h3 text-center m-t-xs text-navy"><small>buscando, por favor espere </small><span class="loading dots"></span></div>');

                $.ajax({
                    type: "POST",
                    url: "GestionConsultas",
                    data: {
                        op: "consulta_beneficiario",
                        NOMBRE: token
                    },
                    dataType: "json",
                    async: true,
                    success: function (response) {
                        if (response)
                        {
                            contenedor_resultados.empty();

                            if (response.length > 0) {
                                var lineaNumero = 0;
                                for (var i = 0; i < response.length; i++) {
                                    if (i % 3 === 0) {
                                        lineaNumero++;
                                        contenedor_resultados.append('<div id="linea_' + lineaNumero + '" class="row col-lg-12"></div>');
                                    }
                                    var resultado = response[i];
                                    contenedor_resultados.find('#linea_' + lineaNumero).append(
                                            '<div class="col-lg-4">' +
                                            '	<div class="contact-box">' +
                                            '		<a href="profile.jsp?identificador=' + resultado['IDENTIFICADOR'] + '">' +
                                            '			<div class="col-sm-4">' +
                                            '				<div class="text-center">' +
                                            //'					<img alt="image" class="img-circle m-t-xs img-responsive" src="img/a' + (Math.floor(Math.random() * (8))) + '.jpg">' +
                                            '					<img alt="image" class="img-circle m-t-xs img-responsive" src="img/a0.jpg">' +
                                            '					<div class="m-t-xs font-bold">' + resultado['IDENTIFICADOR'] + '</div>' +
                                            '					<div class="m-t-xs text-navy">' + (resultado['estado_vereditas'] ===0? resultado['estado'] : resultado['estado_v']) + '</div>' +
                                            '				</div>' +
                                            '			</div>' +
                                            '			<div class="col-sm-8">' +
                                            '				<h3><strong class="text-success">' + (resultado['nombre_evacuado'] ? resultado['nombre_evacuado'] : 'Sin nombre registrado') + '</strong></h3>' +
                                            '				<p><i class="fa fa-address-card-o"></i> ' + (resultado['cedula_evacuado'] ? resultado['cedula_evacuado'] : '') + '</p>' +
                                            '				<p><i class="fa fa-map-marker"></i> ' + (resultado['direccion'] ? resultado['direccion'] : '') + '</p>' +
                                            '				<address>' +
                                            '					<strong>' + resultado['localidad'] + '</strong><br>' +
                                            '					' + (resultado['upz'] ? resultado['upz'] + (resultado['sector'] ? ' | ' + resultado['sector'] : '') : (resultado['sector'] ? resultado['sector'] : '&nbp;')) + '<br>' +
                                            '					' + (resultado['barrio'] ? resultado['barrio'] : '&nbp;') + '<br>' +
                                            '					<abbr title="Teléfono"><i class="fa fa-phone"></i>:</abbr> ' + (resultado['telefono'] ? resultado['telefono'] : '') +
                                            '				</address>' +
                                            '			</div>' +
                                            '			<div class="clearfix"></div>' +
                                            '		</a>' +
                                            '	</div>' +
                                            '</div>');
                                }
                            } else {
                                contenedor_resultados.append('<div class="h4 text-center m-t-xs text-navy">No se encontraron resultados</div>');
                            }
                        }
                    }, error: function (a) {
                        alert("No fué posible obtener las alternativas");
                    }
                });
            }
        }

        iniciar();
    }
});
