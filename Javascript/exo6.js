

function copieinput(e) {

    test = document.getElementById("text2");
    
    var chaine = e.target.value;

    test.value = chaine;

    
}

function capital(e) {

    var pays = e.target.value;

    var chaine = "";
    var liste = [
        {
            pays : "France",
            capital: "Paris"
        },
        {
            pays : "Angleterre",
            capital: "Londre"
        },
        {
            pays : "Espagne",
            capital: "Madrid ou Baecelone"
        }
    ];

    liste.forEach(element => {
        
        if (element.pays == pays) {

            chaine = element.capital;
            
        }
    });
    
    document.getElementById("capital").innerHTML = chaine



    
}

var p = document.getElementById("text1");
p.oninput = copieinput;

var lol = document.getElementById("test");
lol.onchange = capital;

