

function parti1(nombre) {

    var lol = document.getElementById("1");
    
    if (nombre <= 10) {

        chaine = "Le chiffre est inférieur à 10";
        
    }else{

        chaine = "Le nombre est supérieur à 10";
    }

    lol.innerHTML = chaine;
    
}

function parti2for() {

    var lol = document.getElementById("2");
    var chaine = "";
    var tableau= "<table style='border : 1px solid black'>";

    for (let i = 1; i < 11; i++) {

        chaine =  chaine + i + "<br>";
        
    }

    for (let i = 0; i < 10; i++) {

        tableau = tableau + "<tr>"

        for (let y = 0; y < 10; y++) {
            tableau = tableau + "<td style='border:1px solid black'> ligne : " + (i+1) + " - colonne : " + (y+1) + "</td>";
            
        }
        
        tableau = tableau + "</tr>"
        
    }

    tableau = tableau + "</table>"

    lol.innerHTML = chaine + tableau;
    
}

parti1(20);
parti2for();