window.onload = function() {
    const userConfirmed = window.confirm('I only did the Const for task 3, I dont know the function for the equation. so click "OK" to view the assignment')

    if (userConfirmed) {
        alert('Thank you, you can now view the assignment.')
    } else {
        alert('You have chosen not to view the website. Goodbye!')
        window.close()
    }
}


const myButton = document.getElementById('myButton')
myButton.addEventListener('click', function() {
    alert('Button clicked!')
})


const mySubmitButton = document.getElementById('mySubmitButton')
const myInput = document.getElementById('myInput')

mySubmitButton.addEventListener('click', function() {
    alert('Entered value: ' + myInput.value)
})


const calculateSumButton = document.getElementById('calculateSumButton')
const firstInput = document.getElementById('first')
const secondInput = document.getElementById('second')
const sumResult = document.getElementById('sumResult')



const changeTextButton = document.getElementById('changeTextButton')
const myFav = document.querySelector('.myFav')

changeTextButton.addEventListener('click', function() {
    myFav.textContent = 'New text here !'
})


const keyCodeDisplay = document.getElementById('keyCodeDisplay')

document.addEventListener('keydown', function(event) {
    keyCodeDisplay.textContent = 'Key code: ' + event.keyCode
})
