
//valida numeros del 0 al 999
$(function(){
  $(".numto999").on('input', function (e) {

    var term = $(this).val();
    var re = new RegExp("^([1-9]){1,3}$");
    if (!re.test(term)) {
          $(this).val("");
    }
  });
});

//Todos los textos a mayusculas
$(function() {
    $('input').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
    });
});


//Valores de moneda
$(function() {
    $('.moneda').keyup(function() {
      var num=$(this).val().replace(",", ".");
      $(this).val(currencyFormatDE(Number(num)));
    });
});


function currencyFormatDE(num) {
return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
