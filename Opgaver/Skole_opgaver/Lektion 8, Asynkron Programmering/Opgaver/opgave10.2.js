const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';


async function get(url) {
    const respons = await fetch(url); //prøver på at hente data 
    if (respons.status !== 200) // OK
        throw new Error(respons.status); //hvis fejl
    return await respons.json(); // sender data
}


async function main(userUrl) { //en asynkron funktion som tager userUrl som input
  try {
      let users = await get(userUrl); //hvis data hentes uden fejl udskrives det til konsollen
      console.log(users);
  } catch (err) { 
      console.log(err) //hvis fejl under hentning, fanges det i catch-blokken
  }
}

main(userUrl)

async function loadUsers() {
  try {
    const users = await get(userUrl)
    genererTabel(users);
  } catch (err) {
    console.log(err)
  }
}

function genererTabel(users) {
  const table = document.createElement('table')
  const thead = table.createTHead()
  const row = thead.insertRow()
  const th = document.createElement('th')
  
  document.body.append(table)
  row.appendChild(th)

  table.id = 'table'
  thead.id = 'thead'

  users.forEach(user => {
      const row = table.insertRow()
      const cell = row.insertCell()
      cell.textContent = user.name

      row.addEventListener('click', () => {
          loadPosts(user.id);
      })  

      
  });
}



async function loadPosts(event) {
  try {
    const posts = await get(postUrl + event);
    createPostTable(posts);
  } catch (error) {
    console.log(err)
  }

}

function createPostTable(posts) {
  let postsTable = document.getElementById('postsTable');

  if (!postsTable) {
      postsTable = document.createElement('table');
      postsTable.id = 'postsTable';
      document.body.appendChild(postsTable);
  } else {
      postsTable.innerHTML = '';
  }

  const thead = postsTable.createTHead();
  const headerRow = thead.insertRow();
  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Title';
  headerRow.appendChild(titleHeader);

  const bodyHeader = document.createElement('th');
  bodyHeader.textContent = 'Body';
  headerRow.appendChild(bodyHeader);

  posts.forEach(post => {
      const row = postsTable.insertRow();
      const titleCell = row.insertCell();
      titleCell.textContent = post.title;
      const bodyCell = row.insertCell();
      bodyCell.textContent = post.body;
  });
}





loadUsers(userUrl);