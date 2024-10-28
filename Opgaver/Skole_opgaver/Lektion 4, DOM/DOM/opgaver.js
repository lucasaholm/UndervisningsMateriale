// Tilføj kode for opgave 4.1 - 4.5 her!

// Opgave 4.1
//tilgår css klassen og ændrer den til red
function skiftFarveRød() {
for (let element of document.querySelectorAll('p')) {
        element.className = 'red';
    } 
}

skiftFarveRød();

// Opgave 4.2
//skifter hveranden farve til brun efter en overskrift (h1)
function skiftHverandenFarveBrun() {
    for (let element of document.querySelectorAll('h1 + * + *')) {
        element.style.color = 'brown';
    }
}

skiftHverandenFarveBrun();


// Opgave 4.3


function hvertAndetElementLysegråBaggrund() {
    for (let element of document.querySelectorAll('li:nth-child(odd)')) {
        element.style.backgroundColor = 'lightgray';
    }
}

hvertAndetElementLysegråBaggrund();

// Opgave 4.4
function underoverskiftEfterOverskrift() {
for (let e of document.querySelectorAll('h1 + p')) {
    e.outerHTML = '<h2>' + e.innerHTML + '</h2>'
}
}

underoverskiftEfterOverskrift();


// Opgave 4.5
document.body.innerHTML = '<div id="indhold"><p>Indhold:</p></div>'
    + document.body.innerHTML;
let indhold = document.querySelector('#indhold');
let id = 1;
for (let h of document.querySelectorAll('h1, h2')) {
    // Løsningsmodel 1
    h.id = 'id' + id;
    indhold.innerHTML += '<a href="#id' + id++ + '">' + h.innerHTML + '</a><br>';
};




