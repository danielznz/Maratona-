$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
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