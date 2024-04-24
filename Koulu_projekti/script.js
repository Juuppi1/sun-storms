function siirryAb() {
    window.location.href = "./about.html";
}

function siirryHi() {
    window.location.href = "./history.html";
}

function siirryIn() {
    window.location.href = "./index.html";
}

window.onscroll = function() {
    var div = document.querySelector(".tokaDiv");
    if (window.pageYOffset > 200) {
        div.style.opacity = "0";
    } else {
        div.style.opacity = "1";
    }
}