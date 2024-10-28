// opgave12.1.js
const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

async function main(url) {
    try {
        const jsonData = await get(url);
        genererTabel(jsonData);
    } catch (fejl) {
        console.error(fejl);
    }
}

function genererTabel(data) {
    const kolonner = ['Mag', 'Sted', 'Tid'];

    const tabel = document.createElement('table');
    const thead = document.createElement('thead');
    tabel.appendChild(thead);

    // Opretter tabelhovederne
    const headerRow = document.createElement('tr');
    kolonner.forEach(kolonne => {
        const th = document.createElement('th');
        th.textContent = kolonne;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');
    tabel.appendChild(tbody);

    const sortedFeatures = data.features.sort((a,b) => a.properties.mag - b.properties.mag)

    // Opretter en række for hvert jordskælv
    sortedFeatures.forEach(feature => {
        if(feature.properties.mag >= 5){

        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        // Opretter en celle for hver kolonne
        const magCell = document.createElement('td');
        
        magCell.textContent = feature.properties.mag;
        tr.appendChild(magCell);

        const placeCell = document.createElement('td');
        placeCell.textContent = feature.properties.place;
        tr.appendChild(placeCell);

        const typeCell = document.createElement('td');
        typeCell.textContent = feature.properties.time;
        tr.appendChild(typeCell);
        }
    });

    document.body.appendChild(tabel);
}

main(earthquakeUrl);