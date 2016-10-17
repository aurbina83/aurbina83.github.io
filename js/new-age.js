(function($) {
    "use strict"; // Start of use strict

    // $('#dl-btn').click(function() {
    //     if(navigator.appVersion.indexOf("Android") != -1) {
    //         window.location = "http://www.google.com";
    //     } else if (navigator.appVersion.indexOf("iPhone") != -1){
    //         window.location = "http://www.apple.com";
    //     } else {
    //         return;
    //     }
    // });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    $('#fb').click(function() {

        if (navigator.appVersion.indexOf("Android") != -1) {
            window.location = "fb://profile/1086625011361427";

            setTimeout(function() {
                window.open("https://www.facebook.com/veteranconnectco", "_blank");
            }, 3000);
        } else if (navigator.appVersion.indexOf("iPhone") != -1) {
            window.location = "fb://profile/1086625011361427";
            
            setTimeout(function() {
                window.open("https://www.facebook.com/veteranconnectco", "_blank");
            }, 3000);
        } else {
            window.open("https://www.facebook.com/veteranconnectco", "_blank");
        }
    })
})(jQuery); // End of use strict
