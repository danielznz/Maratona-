$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    $(document).ready(function () {
        const navItems = $('.nav-item');
        const header = $('header');
    
        // Clique suave no link
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
    
            const target = $($(this).attr('href'));
    
            if (target.length) {
                $('html, body').animate(
                    { scrollTop: target.offset().top - header.outerHeight() }, // Desconta a altura do header
                    500
                );
            }
        });
    
        // Alterar item ativo com base no scroll
        $(window).on('scroll', function () {
            const scrollPosition = $(window).scrollTop();
    
            $('section').each(function () {
                const sectionTop = $(this).offset().top - header.outerHeight();
                const sectionBottom = sectionTop + $(this).outerHeight();
    
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const id = $(this).attr('id');
    
                    navItems.removeClass('active');
                    $(`a[href="#${id}"]`)
                        .parent()
                        .addClass('active');
                }
            });
        });
    });

    ScrollReveal().reveal('#left', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.card', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    $(document).ready(function () {
        ScrollReveal().reveal('.feature-image', {
            origin: 'left',
            duration: 400,
            distance: '50px',
            easing: 'ease-in-out',
            reset: false,
            delay: 100 
        });
        ScrollReveal().reveal('.feature-text', {
            origin: 'right',
            duration: 400,
            distance: '50px',
            easing: 'ease-in-out',
            reset: false, 
            delay: 300 
        });
    });    
    
});