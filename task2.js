$(window).bind('scroll', function(e){
    parallaxScroll();
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop(); 
    
    $('.layer-0').css('top', (0 - (scrolled * 0.1)) + 'px');
    $('.layer-1').css('top', (0 - (scrolled * 0.2)) + 'px');
    $('.layer-2').css('top', (0 - (scrolled * 0.35)) + 'px');
    $('.layer-3').css('top', (0 - (scrolled * 0.5)) + 'px');
    $('.layer-4').css('top', (0 - (scrolled * 0.65)) + 'px');
    $('.layer-5').css('top', (0 - (scrolled * 0.8)) + 'px');
    
    $('.star-1').css('top', (100 - (scrolled * 0.15)) + 'px');
    $('.star-2').css('top', (150 - (scrolled * 0.25)) + 'px');
    $('.star-3').css('top', (200 - (scrolled * 0.18)) + 'px');
    $('.star-4').css('top', (180 - (scrolled * 0.22)) + 'px');
    $('.star-5').css('top', (300 - (scrolled * 0.3)) + 'px');
    $('.star-6').css('top', (250 - (scrolled * 0.28)) + 'px');
    $('.star-7').css('top', (120 - (scrolled * 0.2)) + 'px');
    $('.star-8').css('top', (350 - (scrolled * 0.35)) + 'px');
    
    $('.rock-1').css('top', (400 - (scrolled * 0.75)) + 'px');
    $('.rock-2').css('top', (600 - (scrolled * 0.55)) + 'px');
    $('.rock-3').css('top', (1000 - (scrolled * 0.65)) + 'px');
    $('.rock-4').css('top', (1200 - (scrolled * 0.45)) + 'px');
    $('.rock-5').css('top', (1600 - (scrolled * 0.7)) + 'px');
    $('.rock-6').css('top', (1800 - (scrolled * 0.5)) + 'px');
    $('.rock-7').css('top', (2200 - (scrolled * 0.8)) + 'px');
    $('.rock-8').css('top', (2400 - (scrolled * 0.4)) + 'px');
    $('.rock-9').css('top', (2800 - (scrolled * 0.6)) + 'px');
    $('.rock-10').css('top', (3000 - (scrolled * 0.68)) + 'px');
    $('.rock-11').css('top', (3400 - (scrolled * 0.52)) + 'px');
    $('.rock-12').css('top', (3600 - (scrolled * 0.72)) + 'px');
    $('.rock-13').css('top', (4000 - (scrolled * 0.58)) + 'px');
    $('.rock-14').css('top', (4200 - (scrolled * 0.78)) + 'px');
    $('.rock-15').css('top', (4500 - (scrolled * 0.48)) + 'px');
    
    $('.rock-1').css('transform', 'rotate(' + (scrolled * 0.05) + 'deg)');
    $('.rock-3').css('transform', 'rotate(' + (scrolled * -0.03) + 'deg)');
    $('.rock-5').css('transform', 'scaleX(-1) rotate(' + (scrolled * 0.04) + 'deg)');
    $('.rock-7').css('transform', 'scaleX(-1) rotate(' + (scrolled * -0.06) + 'deg)');
    $('.rock-11').css('transform', 'scaleX(-1) rotate(' + (scrolled * 0.03) + 'deg)');
    $('.rock-14').css('transform', 'scaleX(-1) rotate(' + (scrolled * -0.04) + 'deg)');
    

    $('.planet-1').css('top', (1500 - (scrolled * 0.3)) + 'px');
    $('.planet-2').css('top', (2600 - (scrolled * 0.25)) + 'px');
    
    var cometTop = 2000 - (scrolled * 0.9);
    var cometLeft = 20 + (scrolled * 0.05);
    $('.comet-1').css({
        'top': cometTop + 'px',
        'right': cometLeft + '%'
    });
    
    $('.moon').css('top', (3800 - (scrolled * 0.4)) + 'px');
    
    var satelliteTop = 4100 - (scrolled * 0.35);
    var satelliteRotation = scrolled * 0.1;
    $('.satellite').css({
        'top': satelliteTop + 'px',
        'transform': 'rotate(' + satelliteRotation + 'deg)'
    });
    
    $('.rock-foreground').css('top', (0 - (scrolled * 0.15)) + 'px');
    

    $('.section-1').css('transform', 'translateY(' + (scrolled * 0.05) + 'px)');
    $('.section-2').css('transform', 'translateY(' + (scrolled * 0.03) + 'px)');
    $('.section-3').css('transform', 'translateY(' + (scrolled * 0.04) + 'px)');
    $('.section-4').css('transform', 'translateY(' + (scrolled * 0.02) + 'px)');
    $('.section-5').css('transform', 'translateY(' + (scrolled * 0.06) + 'px)');
    

    var heroOpacity = 1 - (scrolled / 400);
    if (heroOpacity < 0) heroOpacity = 0;
    $('h1, .subtitle').css('opacity', heroOpacity);
}

var ticking = false;

$(window).on('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            parallaxScroll();
            ticking = false;
        });
        ticking = true;
    }
});


