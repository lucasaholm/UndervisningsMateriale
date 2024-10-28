const json = {"name" : "Lucas", "IsMale" : "True", "Age" : 25 };
console.log(json);


let data = JSON.parse(JSON.stringify(json))
console.log(data)




//konverter json data til en string
async function hentOgKonverterJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    const jsonString = JSON.stringify(jsonData);
    return jsonString;
  } catch (error) {
    console.error('Der opstod en fejl:', error);
  }
}

const url = 'https://jsonplaceholder.typicode.com/users'; // Erstat med den ønskede URL
hentOgKonverterJSON(url)
  .then(jsonString => {
    console.log('JSON som streng:', jsonString);
  }).catch(err => {
    console.log(err)
  }) 
    
  