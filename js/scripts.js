
jQuery ('Ejercicio').ready(function($){

    var menuBtn = $('.menu-icon'),
    menu = $('.nav_inicio ul');

    menuBtn.click(function() {


        if( menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            
            menu.addClass('show');

        }
    });

});




