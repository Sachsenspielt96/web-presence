function scrollToID(elementID) {
    document.getElementById(elementID).scrollIntoView();
}

window.onload = function () {
    const header = document.getElementById("header");
    header.classList.remove("fade_out_down")
}

$(window).on("load",function() {
    $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade_out_left").each(function() {
            /* Check the location of each desired element */
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $(this)[0].classList.remove("fade_out_left")
            }
        });

        $(".fade_out_right").each(function() {
            /* Check the location of each desired element */
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $(this)[0].classList.remove("fade_out_right")
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});