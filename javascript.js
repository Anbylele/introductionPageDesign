//navbar-effect
var didScroll;
var lastScrollTop = 0;
var origin=260;
var navbarHeight = $("nav").outerHeight();

$(window).scroll(function() {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {

    var st = $(window).scrollTop();
    // If they scrolled down, add class .nav-scroll-white.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > 0) {
        // Scroll Down
        $("nav").addClass("nav-scroll-white");
        $(".float-img-1").animate({top:origin-st}, 10)
    }
    //return to top
    else {if (st = navbarHeight)
        $("nav").addClass("nav-top").removeClass("nav-scroll-white");
        $(".float-img-1").animate({top:origin}, 10)
    }

}
