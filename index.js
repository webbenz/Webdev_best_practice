"use strict";

$(document).ready(function() {

    setTimeout(function() {
        $('#loader').fadeOut(500);
        $('#load_pic').fadeOut(100);
        $('#pageIntro').fadeIn(1000);
        setTimeout(function() {
            $('#pageIntro').fadeOut(100);
            $('#Header').fadeIn(1000);
            $('#main').show().addClass('w3-animate-top');
            $('#one').show();
        }, 3000)
    }, 3000);

    $('#open').on('click', function() {
        $('#open').hide(500);
        $('#close').show(500);
        $('#container_nav').slideDown(500).css({ 'width': '100%' });
        $('#main').hide();
    });
    $('#close').on('click', function() {
        $('#open').show(500);
        $('#close').hide(500);
        $('#container_nav').slideUp(500);
        $('#main').show();
    });
    $('#exit').on('click', function() {
        $('#open').show(500);
        $('#close').hide(500);
        $('#main').show();
        $('#container_nav').slideUp(500);
        $('.modal').show();
    });
    $('#close-modal').on('click', function() {
        $('#modal').fadeOut('slow');
    });
    $('#close_modal').on('click', function() {
        $('#modal').fadeOut('slow');
    });
    $('#exit_modal').on('click', function() {
        $('#Header').hide();
        $('#main').hide();
        $('#modal').fadeOut('slow');
        $('#pageExit').fadeIn('slow');
        setTimeout(function() {
            $('#pageExit').fadeOut('slow');
            window.close();
        }, 3000);
    });
});


function openContent(evt, contents) {
    var i, x, content;
    x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    content = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
        content[i].classList.remove("w3-green");
    }
    $('#container_nav').slideUp(500);
    document.getElementById('close').style.display = "none";
    document.getElementById('open').style.display = "block";
    document.getElementById('main').style.display = "block";
    document.getElementById(contents).style.display = "block";
    evt.currentTarget.classList.add("w3-green");

}