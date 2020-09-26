let checklist = document.querySelector('#checklist')
let items = checklist.querySelectorAll('li')
let inputs = checklist.querySelectorAll('input')

items.forEach( x => {
  x.addEventListener("click", edit)
})

inputs.forEach( x => {
  x.addEventListener("blur", update)
  x.addEventListener("keypress", pressEnter)
})

function edit() {
  // console.log(this)
  this.className = "edit"
  let input = this.querySelector('input')
  input.focus();
  input.setSelectionRange(0, input.value.length)
}

function update() {
  // console.log(this)
  this.previousElementSibling.innerText = this.value
  this.parentNode.className = ""
}

function pressEnter(e) {
  if(e.which === 13)
    update.call(this)
}
