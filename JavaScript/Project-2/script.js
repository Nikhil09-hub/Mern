//Read form from dom
let form = document.querySelector("form")

let usernameInput = document.querySelector("#username")
let emailInput = document.querySelector("#email")
//Event listener
form.addEventListener('submit',(event)=>{
    //stop page reload after form submit
    event.preventDefault()
    let username = usernameInput.value
    let email = emailInput.value
    console.log(username ,"has email:",email);
})

let addForm = document.querySelector('.add')
let firstInput = document.querySelector('#first')
let secondInput = document.querySelector('#second')

addForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let first = Number(firstInput.value) // element.value =>returns string value 
    let second = Number(secondInput.value)
    console.log(first+second);
})

const multiplyForm = document.querySelector('#multiplyForm')
const num1Input = document.querySelector('#num1')
const num2Input = document.querySelector('#num2')
const resultDisplay = document.querySelector('#result')

multiplyForm.addEventListener('submit', (event) => {
            event.preventDefault()

            let firstNum = Number(num1Input.value)
            let secondNum = Number(num2Input.value)

            let result = firstNum * secondNum

            resultDisplay.textContent = "Result: " + result
        })
