if(localStorage.highContrast == "enabled") {
    enableHighContrast();
}

function enableHighContrast() {
    let style_element = document.createElement('style');
    style_element.innerHTML = `
    body, article, nav {
        background-color: black!important;
        color: #fff!important;
    }
    body {background-image: none}
    .logo {
        border: 3px solid #fff!important;
        background-color: black!important;
        color: #fff!important;
    }
    .logo_title {
        color: #fff!important;
    }
    `
    document.head.innerHTML += "<style id='highContrast'>"+style_element.innerHTML+"</style>";
    document.querySelector('.contrast_link').classList.add("active")
}

function disableHighContrast() {
    document.querySelector('style#highContrast').remove();
    document.querySelector('.contrast_link').classList.remove("active");
}

document.querySelector('.contrast_link').addEventListener("click", function(e) {
    if(localStorage.highContrast != "enabled") {
        localStorage.highContrast = "enabled";
        enableHighContrast();
    }
    else {
        localStorage.highContrast = "disabled";
        disableHighContrast();
    }
});

///

if(localStorage.bigText == "enabled") {
    enableBigText();
}

function enableBigText() {
    let style_element = document.createElement('style');
    style_element.innerHTML = `
    body, article, .img_container > p, article p, .article_title {
        font-size: 2em;
    }
    article p {
        line-height: 40px;
    }
    `
    document.head.innerHTML += "<style id='bigText'>"+style_element.innerHTML+"</style>";
    document.querySelector('.bigtext_link').classList.add("active")
}

function disableBigText() {
    document.querySelector('style#bigText').remove();
    document.querySelector('.bigtext_link').classList.remove("active");
}

document.querySelector('.bigtext_link').addEventListener("click", function(e) {
    if(localStorage.bigText != "enabled") {
        localStorage.bigText = "enabled";
        enableBigText();
    }
    else {
        localStorage.bigText = "disabled";
        disableBigText();
    }
});

///

$(document).ready(function (){
    $('.main_links > .link > li > a').click(function (e){
        $('html, body').animate({
            scrollTop: $(this.getAttribute('href')).offset().top - 80
        }, 800);
        parent.location.hash = this.getAttribute('href');
    });
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
	    rewind: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    }).mount();
} );

document.querySelector('.logo').addEventListener('click', function(e) {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    parent.location.hash = "";
});