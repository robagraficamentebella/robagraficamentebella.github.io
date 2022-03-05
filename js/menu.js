
var menu = document.getElementById('menu');
var whiteBackground = document.getElementById('white-background');
var redBackground = document.getElementById('red-background');
var hamburgerOpen = document.getElementById('hamburger-open');

function hamburgerChange(elem) {
    elem.classList.toggle("change");
}

function positioning() {
    // elenco menù
    menu.style.top = (window.innerHeight) / 10; // per far salire il menù
}

function showMenu() {
    if( menu.style.display == 'block' ) {
        whiteBackground.style.width = 0;
        menu.style.display = 'none';
    } else {
        whiteBackground.style.width = '23%'; // per aumentare la sezione lilla
        menu.style.display = 'block';
    }
    return true;
}

function setRedBackgroundWidth() {
    redBackground.style.width = '36%'; // per aumentare la sezione di sfondo
}

function resetRedBackgroundWidth() {
    redBackground.style.width = '8%'; // per ridurre la sezione di sfondo
}

function toggleSubMenu(id) {
    var menuToShow = document.getElementById(id);
    if( menuToShow.style.maxHeight == menuToShow.scrollHeight + "px" ) {
        menuToShow.style.maxHeight = 0;
    } else {
        menuToShow.style.maxHeight = menuToShow.scrollHeight + "px";
    }
}

$(document).ready(function() {
    var hamburgerOpen = $('#hamburger-open');
    var overlayContent = $('.overlay-content');
    var subMenuElem = $('.sub-menu-elem');
    var closeBtn = $('.closebtn');

    // se siamo nella modalità mobile, chiude la finestra quando seleziona una voce del menù
    if(window.innerWidth <= 414) {
        overlayContent.click(function() {
                closeBtn.trigger('click');
        });
    } else {
        hamburgerOpen.css('z-index', 99999);
        subMenuElem.click(function() {
            // chiude la voce di menù
            var idToToggle = $(this).closest('.menu-list-padding-top').find('.sub-menu').attr('id');
            toggleSubMenu(idToToggle);
            // chiude il menù
            hamburgerOpen.trigger('click');
        });
    }

});

positioning();