/*ejemplo
 * var parametros = {'upz':'18' , 'tipo': 'otro'}
 * descargarReporte('mi_reporte', parametros);
 */

function descargarReporte(reporte, parametros) {
    
    var params = "";
    for (var param in parametros){
        params += "&" + param + "=" + parametros[param];
    }
    
    var url = 'GenerarReporteCSV?op=' + reporte + params;
    console.log(url)
    var xhr = new XMLHttpRequest();
    xhr.ontimeout = function () {

    };
    xhr.onload = function (e) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var blobURL = URL.createObjectURL(xhr.response);
        a.href = blobURL;
        a.download = reporte + '.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    };
    xhr.onreadystatechange = function (aEvt) {

    };
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.timeout = 86400000;
    xhr.send(null);
    
}