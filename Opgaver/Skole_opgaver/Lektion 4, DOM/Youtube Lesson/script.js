//const body = document.body;
//body.append('Hello World!')

//Appendchild virker kun på elementer, ikke på tekst
//const element = document.createElement('Hello World!');
//body.appendChild(element);
/*

//hvordan laver man  et element
const body = document.body;
const div = document.createElement("div");
div.innerText = "Im in the div!"
div.textContent = "Hey! Im in the div!"

//hvordan tilføjer vi det til siden? 
body.append(div)
*/


const div = document.querySelector('div');

console.log(div.textContent);
console.log(div.innerText);