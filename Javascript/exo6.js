

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
            pays: "France",
            capital: "Paris"
        },
        {
            pays: "Angleterre",
            capital: "Londre"
        },
        {
            pays: "Espagne",
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


var button = document.getElementById("boutton");

button.onclick = repquestion;

function repquestion(e) {

    var compteur = 0;
    chaine = "";

    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementsByName("compte");

    //recup de la valeur du select (question 1)
    var indexq1 = q1.selectedIndex;
    var repq1 = q1.options[indexq1].value;

    //recup du bouton radio (question 3)
    var repq3;
    for (let i = 0; i < q3.length; i++) {
        if (q3[i].checked) {

            repq3 = q3[i].value
        }
    }

    //test des réponses

    //q1
    switch (repq1) {

        case 'pate':
            chaine = "Oui j'aime les pâtes"
            break;

        case 'riz':
            chaine = "Oui j'aime le riz"
            break;

        case 'tout':
            chaine = "J'aimes les 2 aussi"
            break;

    }
    compteur++;
    document.getElementById("reponse1").textContent = chaine;

    //q2
    switch (q2) {

        case '12':
            chaine = "Oui pluto est bien une planète dans notre système"
            compteur++;
            break;

        default:
            chaine = "Essaye encore"
            break;        

    }
    document.getElementById("reponse2").textContent = chaine;

    //q3
    switch (repq3) {

        case 'oui':
            chaine = "parfait ça"
            compteur++;
            break;

        case 'non':
            chaine = "Alors abbonne toi (@Anto_comptePouBelle)"
            break;        

    }
    document.getElementById("reponse3").textContent = chaine;

    //Affichage du résultat
    var result = "Vous avez " + compteur + " bonnne(s) réponse(s)";
    document.getElementById("resultat").textContent = result;




    //console.log("Vous avez au total  : " + repq3);

}

