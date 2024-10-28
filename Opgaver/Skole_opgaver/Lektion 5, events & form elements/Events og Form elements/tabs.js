const tabArray = document.querySelectorAll('span')
const pArray = document.querySelectorAll('h1')

//sætter den valgte til 0 fordi ingen tabs er valgt fra start af
let valgt = 0

//sætter den valgte array til at være det indeks man har trykket på
tabArray[valgt].dataset.valgt = 'ja';

for (let tab = 0; tab < tabArray.length; tab++) {
    //tjekker om det indeks vi står på er den tab man har valgt, blokere hvis det er, ellers gør den intet
    pArray[tab].style.display = tab == valgt ? 'block' : 'none';

    tabArray[tab].onclick = () => {
        if(tab !== valgt) {
            tabArray[valgt].removeAttribute('data-valgt');
            tabArray[tab].dataset.valgt = 'ja';
            pArray[valgt].style.display = 'none';
            pArray[tab].style.display = 'block';
            valgt = tab;
        }
    }
}
 

function Clear() {
    // Fjerner 'data-valgt' attributtet fra den aktuelt valgte fane
    if (valgt !== null && tabArray[valgt]) {
        tabArray[valgt].removeAttribute('data-valgt');
    }

     // Skjuler det tilsvarende <h1> element for den aktuelt valgte fane
     if (valgt !== null && pArray[valgt]) {
        pArray[valgt].style.display = 'none';
    }

    // Sætter den valgte fane til 0 (den første fane)
    valgt = 0;
    tabArray[valgt].dataset.valgt = 'ja';
    pArray[valgt].style.display = 'block';
}

