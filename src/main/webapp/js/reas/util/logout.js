document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
setTimeout(function () {
    self.close();
}, 9000);
$('#salida_gis').click(function () {
    window.opener.location.href = "logout.jsp";
    self.close();
});
$('#salida_gis_google').on('click', function () {
    $('#contenedor_salida').append('<iframe id="logoutframe" src="https://accounts.google.com/logout" style="display: none"></iframe>');
    window.opener.location.href = "logout.jsp";
    self.close();
});