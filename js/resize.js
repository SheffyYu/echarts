$(window, document).resize(function () {
    console.log("窗口改变了可用宽度:"+screen.availWidth+"  当前宽度:"+$(window).width());
    var ratio = $(window).width() / 1920;
    console.log("ratio : "+ratio);
    $('body').css({
        transform: "scale(" + ratio + ")",
        transformOrigin: "left top",
        backgroundSize: "100%"
    });
});