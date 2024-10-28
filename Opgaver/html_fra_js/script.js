/**
 * Tager værdien fra vores input som har id=tbuser og sætter vores egen tekst ind
 */

const txt1 = document.getElementById('tbuser')
const btn1 = document.getElementById('btn1')
const out1 = document.getElementById('output1')

btn1.addEventListener('click', ()  => {
  out1.innerHTML = txt1.value
  out1.style.backgroundColor = "blue"
});