
$('#fichasocial').click(function(){
  var ficha="";

  $.ajax({
   url:'js/reas/FichaSocial/FichaSocial.html',
   type:'GET',
   success: function(data){
       ficha=data;

       var contenido=
       '<div class="modal-header">' +
       '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
       '<h4 class="modal-title">Formulario de la Ficha Social</h4>' +
       '</div>' +
       '<div class="modal-body">' +
       ficha+
       '</div>' +
       '<div class="modal-footer">' +
       '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
       '</div>';


    $('.modal-content').css('height', '80%');
    $('.modal-body').css('max-height', 'calc(100% - 120px)');
    $('.modal-body').css('width', '70%');
    $('.modal-body').css('overflow','scroll');
    $('#form1').empty();
    $('#form1').append(contenido);
    $('#modal').modal('show');

/*
    $.getScript('js/reas/FichaSocial/traerdatos.js', function() {
        //script is loaded and executed put your dependent JS here
    });
*/


   }
});



})
