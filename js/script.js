mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.documentElement.scrollTop = 0;
}

document.getElementById("defaultOpen").click();

function openServiceTab(evt, sTab) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("info");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(sTab).style.display = "block";
    evt.currentTarget.className += " active";
}
