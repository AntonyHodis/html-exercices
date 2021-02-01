

function affichervariable(chaine){

    document.write(chaine);
}

function tableau(a,b,c,d){

    document.write("<table style='border: 1px solid black'><tr><td>"+ a + "</td><td>"+ b +"</td></tr><tr><td>" + c + "</td><td>" + d + "</td></tr></table>");
}

var chaine = "Je mange";


var a = "Valeur variable 1";
var b = "Valeur variable 2";
var c = "Valeur variable 3";
var d = "Valeur variable 4";

affichervariable(chaine);
tableau(a,b,c,d)