function initMap() {
    var position = {lat: 41.875329, lng: -87.627811};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: position,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true
    });
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
}

var $slideAnims = $('.slideanim');

$(window).scroll(function () {
    console.log('scroll');
    $slideAnims.each(function () {
        if ($(this).hasClass('slide')) {
            console.log('ggg');
            return;
        }
        var position = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (position < winTop + 600) {
            $(this).addClass('slide');
        }
    });
});

var menuHide = function () {
    $('#myNavbar').collapse('hide');
};

var menuShow = function () {
    $('#myNavbar').collapse('toggle');
};

$('.navbar button').on('click', function () {
    menuShow();
});

var scrollMenu = function (idElement) {
    var $targetElement = $(idElement);
    var position = $targetElement.offset().top;
    var navHeight = $('.navbar').height();
    $('html, body').animate({scrollTop: position - navHeight}, 2000);
};

var scrollSmallMenu = function (idElement) {
    var $targetElement = $(idElement);
    var position = $targetElement.offset().top;
    $('html, body').animate({scrollTop: position}, 2000);
};

$('.navbar a, .top a').on('click', function () {
    var idElement = $(this).attr('href');
    scrollMenu(idElement);
    if ($(window).width() < 768) {
        menuHide();
        scrollSmallMenu(idElement);

    }

});

console.log($('#about').offset().top);