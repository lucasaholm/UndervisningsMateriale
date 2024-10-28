const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];



//opret overskrift
const h1 = document.createElement('h1')
h1.textContent = "Mountains"

document.body.append(h1)
//opret tabel
const table = document.createElement('table')

document.body.append(table)

//tableheader data
const tableHeadData = ["name", "height", "place"]

const trHeader = document.createElement('tr')

//opret tableheaders til vores tabel
tableHeadData.forEach(element => {
  const th = document.createElement('th')
  th.textContent = element
  trHeader.append(th)
});
table.appendChild(trHeader)


//opret en række for hvert bjerg
MOUNTAINS.forEach(mountain => {
  const tr = document.createElement('tr')

  //tilføj en celle for hver egenskab
  tableHeadData.forEach(property => {
    const td = document.createElement('td');
    td.textContent = mountain[property];
    tr.appendChild(td) //tilføj cellen til rækken
  })

  table.appendChild(tr) //tilføj rækken til tabellen
})











