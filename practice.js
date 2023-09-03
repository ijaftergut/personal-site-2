const practice = document.querySelector('.practice');
const placeholder = document.querySelector('#placeholder');
const button = document.querySelector('form button')
button.addEventListener("click", render)


function render(event) {
    event.preventDefault()
    if (practice.value){
    placeholder.innerHTML = practice.value
    }
    practice.value = ''
  }

