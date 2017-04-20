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

$(window).scroll(function () {
    $('.slideanim').each(function () {
        var position = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (position < winTop + 600) {
            $(this).addClass('slide');
        }
    });
});

$('body').scrollspy({target: '#main-navbar'});

var scrollMenu = function (idElement) {
    var $targetElement = $(idElement);
    var position = $targetElement.offset().top;
    $('html, body').animate({scrollTop: position}, 3000);
};

$('.navbar a, .top a').on('click', function () {
   var idElement = $(this).attr('href');
   scrollMenu(idElement);
});