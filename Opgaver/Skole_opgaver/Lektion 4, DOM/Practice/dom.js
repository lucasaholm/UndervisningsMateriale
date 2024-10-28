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
h1.textContent = "Velkommen til siden"
h1.id = "title"

//tilføjelsen til min body
document.body.appendChild(h1)


//ændre farven til rød
h1.style.color = "red"

//ændre farven til blå
document.getElementById('title').style.color = 'blue'


//lav en ul 
const ul = document.createElement('ul')
document.body.append(ul)


//lav et li
const li = document.createElement('li')

//tager vores array og propper det ind i vores list items
array.forEach(element =>  {
  const li = document.createElement('li')
  li.textContent = "Navn: " + element.navn + " - " + "Alder: " +  element.alder
  li.style.color = 'red' 
  
  ul.appendChild(li)
})


/*
for(arr of array) {
  li.textContent = "Navn: " + arr.navn + " - " + "Alder: " +  arr.alder
}
*/

//oprettelse af en tabel
const table = document.createElement('table')
document.body.appendChild(table)
//styling
table.style.border = "2px solid black"
table.style.borderCollapse = "collapse"
table.style.width = "79%"
table.style.marginBottom= "10px"



//oprettelse af et tabel - row
const tableRow = document.createElement('tr')
table.appendChild(tableRow)

//oprettelse af et table header (altså et overskrift eller lign)
const tableHeaderNavn = document.createElement('th')
tableHeaderNavn.textContent = "Navn"
tableRow.appendChild(tableHeaderNavn)

//oprettelse af et table header (overskrift)
const tableHeaderAlder = document.createElement('th')
tableHeaderAlder.textContent = "Alder"
tableRow.appendChild(tableHeaderAlder)




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

//laver inputfelter (sum)
const inputSum = document.createElement('input')
inputSum.placeholder = "Sum"
document.body.append(inputSum)


//laver knap 
const button = document.createElement('button')
button.textContent = "Click me!"
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

    //kun hvis summen skal stå permanent på siden til brug af paragraph tag
    sumAlder()

  })



//laver knap 
const sum = document.createElement('button')
sum.textContent = "Sum"
document.body.appendChild(sum)



sum.addEventListener(('click'), function() {
  let totalSum = 0;
    array.forEach(element => {
      totalSum += element.alder
    });
    inputSum.value = totalSum;
})




/**
 * HVIS DET IKKE SKAL VÆRE EN KNAP SOM SUMMEN ER I MEN EN KONSTANT
 */

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

sumAlder()
























