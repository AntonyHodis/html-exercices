
function ferme(e) {

    window.top.close();
    
}

function ouvre() {
    
    window.open("./exo1.html")
}

var a = document.getElementById("ferme");
var b = document.getElementById("ouvre");
a.onmouseover= ferme;
b.onmouseover = ouvre;