jQuery(document).ready(function($) {


    $(".fancybox").fancybox();

    $('[type="tel"]').mask('+38(000)000-00-00');

    $('.header-burger').click(function(event){
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
   
    let headerHight = $('header.header').outerHeight()
    
    $('.header-link, .logo').click(function(event){
        
        let linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHight
        }, 100);
        event.preventDefault()
        
    });
    $('.header-link, .logo').click(function(event){
        $('.header-link').removeClass('active');
        $(this).addClass('active')
        
    });
    
    

    
});
