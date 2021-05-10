function scrollToID(elementID) {
    document.getElementById(elementID).scrollIntoView();

    setTimeout(() => {

        console.log(new Date().getMilliseconds())
        switch (elementID) {
            case "freetime":
                moveToFreetime();
                break;

            case "minecraft":
                moveToMinecraft();
                break;
        }

    })
}

function moveToFreetime() {
    var header = document.getElementById("texthead_freetime");
    var text = document.getElementById("text_freetime");

    header.classList.remove("fade_out_left");
    text.classList.remove("fade_out_left");
}

function moveToMinecraft() {
    var header = document.getElementById("texthead_minecraft");
    var text = document.getElementById("text_minecraft");

    header.classList.remove("fade_out_right");
    text.classList.remove("fade_out_right");
}

window.onload = function () {
    var header = document.getElementById("header");
    header.classList.remove("fade_out_down")
}