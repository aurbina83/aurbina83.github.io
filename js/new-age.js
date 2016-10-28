(function($) {
    "use strict"; // Start of use strict

    console.log(navigator.userAgent);

    var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var android = /Android|android/.test(navigator.userAgent) && !window.MSStream;

    $('#dl-btn').click(function() {
        if(android) {
            window.location = "market://details?id=com.veteranconnect.push";
        } else if (ios){
            window.location = "itms-app://itunes.apple.com/us/app/veteran-connect/id1161046543";
        } else {
            return;
        }
    });

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

    $('#android').click(function(){
        if(android) {
            window.location = "market://details?id=com.veteranconnect.push";
        } else {
            window.location="https://play.google.com/store/apps/details?id=com.veteranconnect.push";
        }
    })

    $('#ios').click(function(){
        if(ios) {
            window.location = "itms-app://itunes.apple.com/us/app/veteran-connect/id1161046543";
        } else {
            window.location = "https://itunes.apple.com/us/app/veteran-connect/id1161046543";
        }
    })

    $('#fb').click(function() {
        if (android || ios) {
            window.location = "http://m.facebook.com/veteranconnectco";
        }  else {
            window.location = "http://www.facebook.com/veteranconnectco";
        }
    })
})(jQuery); // End of use strict
