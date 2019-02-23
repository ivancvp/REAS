/* global alertify, usuario_usuario */

$.reas('reas', {
    Comentarios: function (identificador) {
        var instance = this;

        function start() {

            $(instance).empty();
            $(instance).append(

                    
                    '<ul class="nav nav-tabs">'+
                        '<li class="active"><a data-toggle="tab" href="#tab-1">Comentarios</a></li>'+
                        '<li class=""><a data-toggle="tab" href="#tab-2">Notificaciones</a></li>'+
                        /*'<li class=""><a data-toggle="tab" href="#tab-3">Requerimientos</a></li>'+*/
                    '</ul>'+
                            '<div class="tab-content">'+
                                '<div id="tab-1" class="tab-pane active">'+
                                    '<div class="panel-body" >'+
                                        '<div class="ibox m-t-xl">' +
                                        '    <div class="ibox-content">' +
                                        '        <h3>Comentarios</h3>' +
                                        '        <p class="small">' +
                                        '            ' +
                                        '        </p>' +
                                        '        <div class="form-group">' +
                                        /*'            <label>Subject</label>' +*/
                                        '           <div id="editable" class="inputor" placeholder="Ingrese un nuevo comentario"  contentEditable="true" style="border: 1px solid #e5e6e7; min-height: 120px; padding: 10px;"></div>' +
                                        '           <div class="m-t-xs text-right">' +
                                        '               <a class="btn btn-xs btn-info btn-circle btn-outline" id="btn-mencionar" title="Mencionar usuario"><i class="fa fa-at"></i></a>' +
                                        '               <a class="btn btn-xs btn-success btn-circle btn-outline" id="btn-relacionar-identificador" title="Relacionar Identificador"><i class="fa fa-hashtag"></i></a>' +
                                        '            </div>' +
                                        '        </div>' +
                                        '        <button class="btn btn-primary btn-block disabled" id="btn-guardar-comentario">Enviar</button>' +
                                        '    </div>' +
                                        '</div>' +
                                    '</div>'+
                                '</div>'+
                                '<div id="tab-3" class="tab-pane">'+
                                    '<div class="panel-body" >'+
                                    solicitud_vur(getURLParams('identificador'))+
                                    '</div>'+
                                '</div>'+
                                '<div id="tab-2" class="tab-pane">'+
                                    '<div class="panel-body" >'+
                                    generar_listado_historico_notificaciones(getURLParams('identificador'))+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                    
                    '<div class="ibox" id="container-comments">' +
                    '</div>'
                    );
            logica_solicitud_vur();
            var tribute = new Tribute({
                menuContainer: document.getElementById('content'),
                lookup: 'nombre',
                fillAttr: 'nombre',
                noMatchTemplate: function () {
                    return '<li class="no-match">Escriba el nombre de un usuario para mencionarlo</li>';
                },
                values: function (text, callback) {
                    if (!text || text === "") {
                        callback([]);
                    } else {
                        $.getJSON("GestionConsultas", {op: 'consulta_usuarios', q: text}, function (data) {
                            callback(data);
                        });
                    }
                },
                menuItemTemplate: function (item) {
                    if (item.original.disabled) {
                        return item.string;
                    }
                    return item.string + ' | <small>' + item.original.tipo + '</small>';
                },
                selectTemplate: function (item) {
                    if (typeof item === 'undefined')
                        return null;
                    if (this.range.isContentEditable(this.current.element)) {
                        return '<span contenteditable="false" class="badge badge-info comment-user" data-user="' + item.original.usuario + '">' + item.original.nombre + '</span>';
                    }

                    return '@' + item.original.value;
                }
            });

            var tribute2 = new Tribute({
                trigger: '#',
                menuContainer: document.getElementById('content'),
                lookup: 'identificador',
                fillAttr: 'identificador',
                noMatchTemplate: function () {
                    return '<li class="no-match">Escriba el código de un identificador para relacionarlo</li>';
                },
                values: function (text, callback) {
                    if (!text || text === "") {
                        callback([]);
                    } else {
                        $.getJSON("GestionConsultas", {op: 'consulta_identificador_mencion_comentario', q: text}, function (data) {
                            callback(data);
                        });
                    }
                },
                menuItemTemplate: function (item) {
                    if (item.original.disabled) {
                        return item.string;
                    }
                    return item.string + ' | <small>' + item.original.beneficiario + '</small>';
                },
                selectTemplate: function (item) {
                    if (typeof item === 'undefined')
                        return null;
                    if (this.range.isContentEditable(this.current.element)) {
                        return '<span contenteditable="false" class="badge badge-success comment-id" data-identificador="' + item.original.identificador + '">' + item.original.identificador + '</span>';
                    }

                    return '#' + item.original.value;
                }
            });

            tribute.attach($(instance).find('#editable')[0]);
            tribute2.attach($(instance).find('#editable')[0]);

            //disable send button if there is not message
            $(instance).find('#editable').on('blur keyup paste cut delete input', function (e) {
                $(instance).find('#btn-guardar-comentario').toggleClass('disabled', $(instance).find("#editable").text().length <= 0);
            });

            $(instance).find('#btn-mencionar').on('click', function (e) {
                e.preventDefault();
                tribute.showMenuForCollection($(instance).find('#editable')[0]);
            });
            $(instance).find('#btn-relacionar-identificador').on('click', function (e) {
                e.preventDefault();
                tribute2.showMenuForCollection($(instance).find('#editable')[0]);
            });


            $(instance).find('#btn-guardar-comentario').on('click', function (e) {
                e.preventDefault();
                var comment = $(instance).find("#editable").html().replace(/<div>/gi, '\n').replace(/<\/div>/gi, '').replace(/<br>/gi, '\n').replace(/&nbsp;/gi, ' ');
                sendComment(comment);
            });
           
            searchComments(window.location.hash);
        }

        function sendComment(comment) {

            if (comment.length <= 0) {
                alertify.error("Debe ingresar un comentario");
                return;
            }

            $(instance).find('#btn-guardar-comentario').toggleClass('disabled', true);
            $(instance).find('#editable').attr('contenteditable', 'false');

            var followers = getFollowers(comment);
            var interesados;
            var linkedIds = getLinkedIds(comment);
            var ids;

            if (!followers) {
                followers = [];
                interesados = '';
            } else {
                interesados = '{' + followers.join(',') + '}';
            }

            if (!linkedIds) {
                linkedIds = [];
                ids = '';
            } else {
                ids = '{' + linkedIds.join(',') + '}';
            }

            $.ajax({
                type: "POST",
                url: "GestionDML",
                data: {
                    op: "insertar_observacion_identificador",
                    identificador: identificador,
                    comen_desc: comment,
                    comen_interesados: interesados,
                    comen_referencias: ids
                },
                dataType: "text",
                success: function (response) {
                    if (response)
                    {
                        var res = eval("(" + response + ")");
                        if (res.total > 0) {
                            alertify.success("Comentario enviado");
                            if (followers.length > 0) {
                                notifyUsers(usuario_usuario, followers, 'Ha sido etiquetado en un comentario del identificador ' + identificador, comment, res.data[0].comen_id);
                            }
                            searchComments();
                        }
                    }
                    $(instance).find('#btn-guardar-comentario').toggleClass('disabled', true);
                }, error: function (a) {
                    alertify.success("No fué posible guardar el comentario");
                    $(instance).find('#btn-guardar-comentario').toggleClass('disabled', false);
                },
                complete: function (jqXHR, textStatus) {
                    $(instance).find('#editable').empty();
                    $(instance).find('#editable').attr('contenteditable', 'true');
                }
            });
        }

        function searchComments(scroll) {
            $(instance).find('#container-comments').empty();

            $.ajax({
                type: "POST",
                url: "GestionConsultas",
                data: {
                    op: "consulta_comentarios_identificador",
                    identificador: identificador
                },
                dataType: "json",
                async: true,
                success: function (response) {
                    if (response)
                    {
                        if (response.length > 0) {
                            $(instance).find('#container-comments').append(
                                    '<div class="ibox-content">' +
                                    '   <div class="activity-stream"></div>' +
                                    '</div>'
                                    );

                            for (var i = 0; i < response.length; i++) {
                                let comment = response[i];
                                let well = $('<div class="well well-sm">' + comment.comen_desc + '</div>');
                                var well_text = comment.comen_desc;

                                //convert referencies into anchors
                                $.each(well.find('span.comment-id'), function (key, value) {
                                    well_text = well_text.replace(this.outerHTML, '<a target="_blank" title="Ir al identificador" href="profile.jsp?identificador=' + $(this).data('identificador') + '">' + this.outerHTML + '</a>');
                                });


                                $(instance).find('#container-comments').find('.activity-stream').append(
                                        '<div class="stream" id="comment-' + comment.codigo + '">' +
                                        '	<div class="stream-badge">' +
                                        '		<i class="fa fa-circle"></i>' +
                                        '	</div>' +
                                        '	<div class="stream-panel">' +
                                        '		<div class="stream-info">' +
                                        '			<div>' +
                                        '				<img src="img/a0.jpg" />' +
                                        '				<span class="title">' + comment.comen_user + '</span>' +
                                        '				<span class="date">' + comment.comen_time + '</span>' +
                                        '			</div>' +
                                        '		</div>' +
                                        '		<div class="well well-sm">' + well_text + '</div>' +
                                        '	</div>' +
                                        '</div>'
                                        );

                            }
                      
                            if (scroll && scroll.indexOf("comment-",-1)) {
                                
                                $('html, body').animate({
                                    scrollTop: $(scroll).offset().top
                                }, 1000, 'swing', function () {
                                    $(scroll).addClass('yellow');
                                    setTimeout(function () {
                                        $(scroll).addClass('transition');
                                    }, 1000);
                                });
                                
                            }
                        }
                    }

                }, error: function (a) {
                    alert("No fué posible obtener los tipos de documentos");
                }
            });
        }

        function getFollowers(message) {
            var div = $('<div></div>');
            div.append(message);
            var followers = [];

            var users = div.find('span.comment-user');
            for (var i = 0; i < users.length; i++) {
                let user = users[i];
                let id = $(user).data('user');
                if (id && id !== '') {
                    if (followers.indexOf(id) === -1) {
                        followers.push(id);
                    }
                }
            }

            return followers;
        }

        function getLinkedIds(message) {
            var div = $('<div></div>');
            div.append(message);
            var ids = [];

            var users = div.find('span.comment-id');
            for (var i = 0; i < users.length; i++) {
                let user = users[i];
                let id = $(user).data('identificador');
                if (id && id !== '') {
                    if (ids.indexOf(id) === -1 && id !== identificador) {
                        ids.push(id);
                    }
                }
            }

            return ids;
        }

        function notifyUsers(from, to, subject, body, commentID) {
            correo_masivo(identificador, from, to, subject, body, commentID);
        }

        function getURLParams(k) {
            var p = {};
            location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
                p[k] = v;
            });
            return k ? p[k] : p;
        }

        start();
    }
});
