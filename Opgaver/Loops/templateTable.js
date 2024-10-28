// Tilfældige data
const data = [
  ['Alice', 28, 'Engineer'],
  ['Bob', 34, 'Designer'],
  ['Charlie', 45, 'Manager'],
  // Tilføj flere rækker efter behov
];

// Funktion til at oprette en tabel med data
function createTable(data) {
  // Opret tabel element
  const table = document.createElement('table');
  table.style.borderCollapse = "collapse"
  
  
  

  // Opret header
  const header = table.createTHead();
  header.style.border = "1px solid black";
  
  const headerRow = header.insertRow();
 
  const headers = ['Name', 'Age', 'Job']; // Angiv kolonneheaders her
  headers.forEach(headerText => {
    let headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  // Opret tbody til at holde data
  const tbody = table.createTBody();

  // Tilføj data til tabel
  data.forEach(rowData => {
    const row = tbody.insertRow();
    
    rowData.forEach(cellData => {
      const cell = row.insertCell();
      cell.style.border = "1px solid black";
      cell.textContent = cellData;
    });
  });


  return table;
}


// Tilføj tabellen til DOM
document.body.appendChild(createTable(data));