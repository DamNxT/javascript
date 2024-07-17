function addInput(){
const ul = document.getElementById('inputs')

const newLi = document.createElement('li')
newLi.innerText  = 'Olá Mundo!'

const newInput = document.createElement('input')
newInput.type = 'text'
newInput.name = 'input'

newLi.appendChild(newInput)
ul.appendChild(newLi)
}