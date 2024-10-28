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

//laver inputfelter (sum)
const inputSum = document.createElement('input')
inputSum.placeholder = "Sum"
document.body.append(inputSum)

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
