

var res = get_num_alert(id_user);

var num_not = res.length;
var not_head = '';

var con_head =
        '<li role="presentation" class="dropdown" id="not_update">' +
        '<a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">' +

        '<span class="fa-layers fa-fw fa-border" style="border:none">'+
         ' <i class="fas fa-comment"></i>'+
          '<span class="fa-layers-counter" >0</span>'+
        '</span>'+

        '</a>' +
        '<ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">';



var con_foot = 
        ' <li>' +
        '<div class="text-center">' +
        ' <a>' +
        ' <strong>Ver Todas las Notificaciones</strong>' +
        '<i class="fa fa-angle-right"></i>' +
        '</a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</li>';

var not = '';

not_head=   '<li style="width: 550px; border-bottom: 0.5px solid #BEBEBE; max-height: 800px; overflow: auto;overflow-x: hidden">' +
            '<a data-toggle="collapse" data-target="#demo1" >' +
            '<div class="row">' +
            '<div class="col-sm-11" >' +
            '<div class="row" >' +
            ' <p>Bandeja de entrada vacia.</p>' +       
            '</div>' +
            '</div>' +
            '<div class="col-sm-1" >' +
            '<div class="row" >' +
            ' <i class="fas fa-times"></i>' +       
            '</div>' +
            '</div>' +
            ' </div>' +
            '</a>' +
            '</li>';



var contenido = con_head.concat(not_head);
var contenido = contenido.concat(con_foot);

$('#enca').append(contenido);
