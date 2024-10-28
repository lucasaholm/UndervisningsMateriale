let array = [
  {
    navn: "Jacob",
    alder: 36
  },
  {
    navn: "Jacob2",
    alder: 34
  },
  {
    navn: "Jacob3",
    alder: 32
  },
  {
    navn: "Jacob4",
    alder: 31
  },
]

//opretttelse af en overskrift
const h1 = document.createElement('h1')
h1.textContent = "Personer"
h1.id = "title"

//tilføjelsen til min body
document.body.appendChild(h1)

//ændre farven til rød
h1.style.color = "red"

//ændre farven til blå //med id'et
document.getElementById('title').style.color = 'blue'

//oprettelse af en tabel
const table = document.createElement('table')
document.body.appendChild(table)
//styling
table.style.border = "2px solid black"
table.style.borderCollapse = "collapse"
table.style.width = "79%"
table.style.marginBottom= "10px"


const tableHeaderNavnOgAlder = ["Navn", "Alder"]

//oprettelse af et tabelHeader - row
const tableHeader = document.createElement('tr')
table.appendChild(tableHeader)

//for hvert element i tableHeaderNavnOgAlder laves der et tablehead
tableHeaderNavnOgAlder.forEach(headerText => {
  const header = document.createElement('th')
  header.textContent = headerText
  tableHeader.appendChild(header)
})

//lav et table row pr element vi har i vores array
array.forEach(element => {
  const tr = document.createElement('tr')
  table.appendChild(tr)
  
  //oprettelse af table data til vores table row(navn)
  const tdNavn = document.createElement('td')
  tdNavn.textContent = element.navn
  tr.appendChild(tdNavn)
  tdNavn.style.border = "1px solid black";
  tdNavn.style.textAlign = "center"

  //oprettelse af table data til vores table row(alder)
  const tdAlder = document.createElement('td')
  tdAlder.textContent = element.alder
  tr.appendChild(tdAlder)
  tdAlder.style.border = "1px solid black";
  tdAlder.style.textAlign = "center"
})

//laver inputfelter (navn)
const inputNavn = document.createElement('input')
inputNavn.placeholder = "Navn"
document.body.append(inputNavn)

//laver inputfelter (alder)
const inputAlder = document.createElement('input')
inputAlder.placeholder = "Alder"
document.body.append(inputAlder)


//laver knap 
const button = document.createElement('button')
button.textContent = "Tilføj person"
document.body.appendChild(button)



button.addEventListener(('click'), function() {
    const navn = inputNavn.value
    const alder = parseInt(inputAlder.value);

    const tr = document.createElement('tr')
    table.appendChild(tr)

    //oprettelse af table data til vores table row(navn)
    const tdNavn = document.createElement('td')
    tdNavn.textContent = inputNavn.value
    tdNavn.style.border = "1px solid black";
    tdNavn.style.textAlign = "center"
    tr.appendChild(tdNavn)
  
    //oprettelse af table data til vores table row(alder)
    const tdAlder = document.createElement('td')
    tdAlder.textContent = inputAlder.value
    
    tdAlder.style.border = "1px solid black";
    tdAlder.style.textAlign = "center"
    tr.appendChild(tdAlder)


    array.push({navn: navn, alder: alder})

    inputNavn.value = ""
    inputAlder.value = ""

    //Ændre summen hver gang vi klikker tilføj Person
    sumAlder()

  })

//lav paragraph tag
const p = document.createElement('p')
p.textContent = "Sum: "
document.body.appendChild(p)

const sumSpan = document.createElement('span')
p.appendChild(sumSpan)


function sumAlder() {
  let totalSum = 0;
    array.forEach(element => {
      totalSum += element.alder
    });
    sumSpan.textContent = totalSum;
}

//hvis summen skal stå permanent på siden
sumAlder()
