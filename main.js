let balise = document.querySelector("#soleil")

let soleil = new Drag(balise);

let balise2 = document.querySelectorAll("#etoile")
for(let balise_etoile of balise2){
    let etoile = new Drag(balise_etoile)
}

