

function btnAppuie() {

    alert("Le bouton a été appuiyé");

}

function imageover(){

    alert("Antony le bg")
}

var p = document.getElementById("bouton");
var img = document.getElementById("image");

p.onclick = btnAppuie;
img.onmouseover = imageover;