document.addEventListener('DOMContentLoaded', () => {
  const people = document.querySelectorAll('.ansat');
  people.forEach(person => {
      person.addEventListener('click', function() {
        this.style.color = 'blue';
      })
    })
})