var show = 300;

$(window).scroll(function () {
    if ($(this).scrollTop() >= show) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow')
})