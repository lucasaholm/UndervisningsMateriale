const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//fjern et element
spanBye.remove();
//tilføj et element igen
div.append(spanBye);

console.log(spanHi.getAttribute('id'));
console.log(spanHi.getAttribute('title'));


//hvis man vil ændre id'et til noget andet
spanHi.setAttribute('id', 'IdAttributeNew');

spanHi.dataset