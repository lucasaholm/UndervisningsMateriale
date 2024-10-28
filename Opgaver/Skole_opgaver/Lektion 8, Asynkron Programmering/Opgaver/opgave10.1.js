// opgave10.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url)  { //holder URL til API-ressource
        const response = await fetch(url) //foretager netværkskald til URL
        if(response.status !== 200)  //GOD BESKED (OK!)
        {
            throw new Error(response.status); 
        }
        return await response.json();
}


async function main(userUrl) { //en asynkron funktion som tager userUrl som input
    try {
        let users = await get(userUrl); //hvis data hentes uden fejl udskrives det til konsollen
        console.log(users);
    } catch (err) { 
        console.log(err) //hvis fejl under hentning, fanges det i catch-blokken
    }
}

main(userUrl); //kalder på userURL som starter funktionen

get(userUrl)   //Her er et yderligere direkte kald til get-funktionen, med userUrl som argument
.then(users => console.log(users)) //dette kald anvender  .then() og .catch() for at håndterer det (løfte) promise
.catch(fejl => console.log(fejl)) //som get-funktionen returnerer. 

//.then() blokken kører hvis løftet opfølges
//.catch() blokken kører hvis der opstår fejl
