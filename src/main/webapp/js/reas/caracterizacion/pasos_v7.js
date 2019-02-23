$(document).ready(function () {

    var navListItems = $('ul.setup-panel li a'),
            allWells = $('.setup-content');

    allWells.hide();
    $('#step-1').show();
    navListItems.click(function (e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });



});
function siguienteTab() {
    var actual = $('ul.setup-panel li.active');
    var siguiente = $(actual).next('li');
    var target_actual = $(actual).find('a').attr('href');
    var target = $(siguiente).find('a').attr('href');
    $(target_actual).hide();
    $(target).show();
    actual.removeClass('active');
    siguiente.addClass('active');
    siguiente.removeClass('disabled');
}
;
        