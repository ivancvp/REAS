idleTime = 0;
var idleLimit = 20; //in minutes
var idleModalId = Math.random().toString(36).substring(7);
var idleVisibleModal = false;

//Increment the idle time counter every minute.
var idleInterval = setInterval("timerIncrement()", 60000); // 1 min

var idleLeftTime = 60;
var idleLeftTimeInterval;

//Zero the idle timer on mouse movement.
document.onmousemove = function (e) {
    idleTime = 0;
    if (idleVisibleModal) {
        $("#dynamicModal-" + idleModalId).modal('hide');
    }
};

document.onkeypress = function (e) {
    idleTime = 0;
    if (idleVisibleModal) {
        $("#dynamicModal-" + idleModalId).modal('hide');
    }
};


function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime >= idleLimit) {
        var params = location.search;
        if (params) {
            params = params.replace("?", "");
        } else {
            params = "";
        }

        var pn = window.location.pathname.split('/');
        window.location.href = "logout.jsp?idle=true&source=" + pn[pn.length - 1] + (params.length > 0 ? "&" + params : "");
    } else if (idleTime === idleLimit - 1) {
        showIdleModal();
    }
}

function showIdleModal() {
    var html =
            '<div id="dynamicModal-' + idleModalId + '"  data-backdrop="static" data-keyboard="false" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">' +
            '   <div class="modal-dialog modal-sm" >' +
            '       <div class="modal-content panel-warning">' +
            '           <div class="modal-header panel-heading">' +
            '               <h4>Alerta de Inactividad</h4>' +
            '           </div>' + // header
            '           <div class="modal-body sk-loading">' +
            '               <div class="sk-spinner sk-spinner-double-bounce">' +
            '                   <div class="sk-double-bounce1"></div>' +
            '                   <div class="sk-double-bounce2"></div>' +
            '               </div>' +
            '               <hr>' +
            '               <div>Por inactividad en la página su sesión expirará en <span id="counter">60</span> segundos</div>' +
            '           </div>' +
            '           <div class="modal-footer">' +
            '               <span id="btn-cerrar" class="btn btn-default" >Cerrar</span>' +
            '           </div>' + // footer
            '       </div>' + // content
            '   </div>' + // dialog
            '</div>'; // modalWindow
    $('body').append(html);
    $("#dynamicModal-" + idleModalId).modal();
    $("#dynamicModal-" + idleModalId).modal('show');



    $("#dynamicModal-" + idleModalId).on('hidden.bs.modal', function (e) {
        idleVisibleModal = false;
        clearInterval(idleLeftTimeInterval);
        idleLeftTime = 60;

        $(this).remove();
    });
    $("#dynamicModal-" + idleModalId).on('shown.bs.modal', function (e) {
        idleVisibleModal = true;
        idleLeftTimeInterval = setInterval("idleLeftTimeIncrement()", 1000);
    });
}


function idleLeftTimeIncrement() {
    idleLeftTime--;
    $("#dynamicModal-" + idleModalId).find('#counter').text(idleLeftTime);
}


/*
 var validarSesion = function () {
 var xhr = new XMLHttpRequest();
 xhr.onload = function (e) {
 if (xhr.readyState === 4 && xhr.status === 200) {
 var data = JSON.parse(xhr.responseText);
 if (!data.sesion) {
 window.location.href = 'login.jsp?secondlogin=true';
 }
 }
 };
 
 xhr.open("GET", "/WebFormalizacion/webresources/ValidarSesion/confirmar" + "?_a_=" + Math.random(), true);
 xhr.timeout = 7200000;
 xhr.send(null);
 };
 
 setInterval(function () {
 validarSesion();
 }, 50000);
 */