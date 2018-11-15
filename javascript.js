document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector(".menubutton").addEventListener("click", trykPaaMenubutton)
}

function trykPaaMenubutton() {
    console.log("tryk på menubutton");
    document.querySelector("nav").classList.toggle("hidden")
    //skift knappen frem og tilbage mellem kryds
    document.querySelector(".menubutton").classList.toggle("kryds")

}

function hvisMere() {
    document.getElementById("mere").style.display = "block";

    window.scrollTo(0, document.body.scrollHeight);

}

function myFunction_1() {
    var x = document.getElementById("toggle_1");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toggle_1").style.display = "block";
    document.getElementById("toggle_2").style.display = "none";
    document.getElementById("toggle_3").style.display = "none";
    document.getElementById("toggle_4").style.display = "none";
    document.getElementById("toggle_5").style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);

}

function myFunction_2() {
    var x = document.getElementById("toggle_2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toggle_2").style.display = "block";
    document.getElementById("toggle_1").style.display = "none";
    document.getElementById("toggle_3").style.display = "none";
    document.getElementById("toggle_4").style.display = "none";
    document.getElementById("toggle_5").style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);

}

function myFunction_3() {
    var x = document.getElementById("toggle_3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toggle_3").style.display = "block";
    document.getElementById("toggle_1").style.display = "none";
    document.getElementById("toggle_2").style.display = "none";
    document.getElementById("toggle_4").style.display = "none";
    document.getElementById("toggle_5").style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
}

function myFunction_4() {
    var x = document.getElementById("toggle_4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toggle_4").style.display = "block";
    document.getElementById("toggle_1").style.display = "none";
    document.getElementById("toggle_2").style.display = "none";
    document.getElementById("toggle_3").style.display = "none";
    document.getElementById("toggle_5").style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
}

function myFunction_5() {
    var x = document.getElementById("toggle_5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toggle_5").style.display = "block";
    document.getElementById("toggle_1").style.display = "none";
    document.getElementById("toggle_2").style.display = "none";
    document.getElementById("toggle_3").style.display = "none";
    document.getElementById("toggle_4").style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
}