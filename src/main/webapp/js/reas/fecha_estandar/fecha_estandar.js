jQuery.fn.direccionEstandar = function (options) {
    // Configuración por defecto:
    var defaults = {
        textColor: "#000",
        backgroundColor: "#fff",
        fontSize: "1em",
        delay: "quite long"
    };
    var settings = $.extend({}, defaults, options);
    function direccion() {
        if ($('#dir1').val() === 'CL' || $('#dir1').val() === 'DG' || $('#dir1').val() === 'AC') {
            $('#dir12').attr('disabled', true);
            $('#dir6').attr('disabled', true);
            $('#dir12').prop('checked', false);
            $('#dir6').prop('checked', false);
            $('#dir11').attr('disabled', false);
            $('#dir7').attr('disabled', false);
        }
        if ($('#dir2').val() < 0) {
            $('#dir2').val(0);
        }
        if ($('#dir8').val() < 0) {
            $('#dir8').val(0);
        }
        if ($('#dir10').val() < 0) {
            $('#dir10').val(0);
        }
        if ($('#dir1').val() === 'KR' || $('#dir1').val() === 'TV' || $('#dir1').val() === 'AK') {
            $('#dir11').attr('disabled', true);
            $('#dir7').attr('disabled', true);
            $('#dir11').prop('checked', false);
            $('#dir7').prop('checked', false);
            $('#dir12').attr('disabled', false);
            $('#dir6').attr('disabled', false);
        }
        if ($('#dir4').prop('checked') === true) {
            $('#dir5').attr('disabled', false);
        }
        if ($('#dir4').prop('checked') === false) {
            $('#dir5').attr('disabled', true);
            $('#dir5').val('');
        }

        var $direccion = [];
        $direccion[0] = $('#dir1').val();
        $direccion[1] = $('#dir2').val();
        $direccion[2] = $('#dir3').val();
        $direccion[3] = $('#dir4').prop('checked') === true ? $('#dir4').val() : '';
        $direccion[4] = $('#dir4').prop('checked') === true ? $('#dir5').val() : '';
        $direccion[5] = $('#dir6').prop('checked') === true ? $('#dir6').val() : '';
        $direccion[6] = $('#dir7').prop('checked') === true ? $('#dir7').val() : '';
        $direccion[7] = $('#dir8').val();
        $direccion[8] = $('#dir9').val();
        $direccion[9] = $('#dir10').val();
        $direccion[10] = $('#dir11').prop('checked') === true ? $('#dir11').val() : '';
        $direccion[11] = $('#dir12').prop('checked') === true ? $('#dir12').val() : '';
        $direccion[12] = $('#dir13').val().toUpperCase();
        var removeItem = '';
        $direccion = jQuery.grep($direccion, function (value) {
            return value !== removeItem;
        });
        $('#dir_generada').text($direccion.join(' '));
        $('#direccion').val($direccion.join(' '));
    }
    return this.each(function () {
        $('.dir_estandar').on('click', direccion);
    });

};