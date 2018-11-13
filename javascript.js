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