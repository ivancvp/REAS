$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "GestionConsultas",
        data: {
            op: "consulta_archivo_cuentas"
        },
        dataType: "json",
        async: true,
        success: function (response) {
            if (response.length > 0) {
                $.each(response,function (index,documento) {
                   $('#arch_cuentas').append("<tr><td>"+documento.doc_descripcion+" </td><td>"+documento.doc_time+"</td><td><a href='"+documento.doc_ruta+"'>ver</a> </td></tr>"); 
                });
                
            }
        }
    });
});