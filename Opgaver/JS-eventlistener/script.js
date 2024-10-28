const divGrandparent = document.querySelector(".grandparent")

const p = document.createElement('p');
p.id = 'p1'
document.body.append(p)

const button = document.createElement('button');
button.textContent = "click me"
button.id = "button1"
document.body.append(button)

document.addEventListener("click", e => {
  if(e.target.matches('#button1')) {
    p1.innerHTML = "Hey"
    setTimeout(() => {
      p1.innerHTML = ""
    }, 2000)
  }
})

const button2 = document.createElement('button');
button2.textContent = "click me to change color"
button2.id = "button2"
document.body.append(button2)

document.addEventListener("click", e => {
  if(e.target.matches('#button2')) {
    divGrandparent.style = "background-color: red"
  }})