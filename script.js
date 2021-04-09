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
    // document.insertBefore(style_element, document.querySelector("title"));
    document.head.innerHTML += "<style id='highContrast'>"+style_element.innerHTML+"</style>";
    document.querySelector('.contrast_link').style.border = "1px white solid";
}

function disableHighContrast() {
    document.querySelector('style#highContrast').remove();
    document.querySelector('.contrast_link').style.border = "none";
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