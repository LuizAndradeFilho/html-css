const section = document.getElementById('app')

const btn = document.querySelector('.btn')
const input = document.querySelector('#inp')

btn.addEventListener('click', function(e) {
    e.preventDefault()
    const inputValue = +input.value

    alert(inputValue + 3)

    section.classList.toggle('color')    
})
console.log(btn);