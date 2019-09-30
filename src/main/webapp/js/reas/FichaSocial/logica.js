

$('#fichasocial').on('click', function (e) {

e.preventDefault();

  var ficha="";
  $.ajax({
   url:'js/reas/FichaSocial/inicioFicha.html',
   type:'GET',
   async:false,
   success: function(data){
       ficha=data;

       var contenido=
       '<div class="modal-header">' +
       '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
       '</div>' +
       '<div class="modal-body" id="modal_social">' +
       ficha+
       '</div>' +
       '<div class="modal-footer">' +
       '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
       '</div>';


     $('.modal-content').css('height', '80%');
     $('.modal-dialog').css('width', $(window).width()-($(window).width()*0.1));
     //$('.modal-dialog').css('width', $(window).width());
     $('#form').css('margin', 'auto');
     $('.modal-content').css('margin', 'auto');
     $('.modal-body').css('max-height', 'calc(100% - 120px)');
     $('#form').empty();
     $('#form').append(contenido);
     $('#modal_form').modal({
      backdrop: 'static',
      keyboard: false
      });
     $('#modal_form').modal('show');



   }
  });




  $('#edit_ficha_social').on('click', function (e) {

    e.preventDefault();

    cuerpo_ficha();

  });




});


function cuerpo_ficha(){
  var ficha="";
  $.ajax({
   url:'js/reas/FichaSocial/FichaSocial.html',
   type:'POST',
   async:false,
   success: function(data){
     ficha=data;
    $('#form').empty();

    var contenido=
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
    '</div>' +
    '<div class="modal-body">' +
    ficha+
    '<p class="hola"></p>'+
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>' +
    '</div>';

    $('#form').append(contenido);

   }
});
}
