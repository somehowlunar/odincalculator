//on press number, save that number
//on press operator, save that operator
//on press second number, save that number
//on press equal - calculcate

let firstNum
let secondNum
let operation
let step = 0
let result = 0

let numArray = []
let secondNumArray = []

let display = document.getElementById('display')

function getNumber(num){
    if (step === 0 || step === 1) {
        numArray.push(num)
        step = 1
        firstNum = Number(numArray.join(''))
        display.value = firstNum
    }
    else if (step === 2) {
        secondNumArray.push(num)
        secondNum = Number(secondNumArray.join(''))
        display.value = secondNum
    }
}

function getOperator(op) {
    step = 2
    operation = op
}

function clearDisplay(){
    display.value = 0
    firstNum = null
    secondNum = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumArray = []
}

const calcEquals = () => {
    if (operation === '+') {
        result = firstNum + secondNum
        display.value = result
    }
    else if (operation === '-') {
        result = firstNum - secondNum
        display.value = result
    }
    else if (operation === '*') {
        result = firstNum * secondNum
        display.value = result
    }
    else if (operation === '/' && secondNum === 0){
        display.value = 'no way jose'
    }
    else if (operation === '/' && secondNum !== 0){
        result = firstNum / secondNum
        display.value = result.toFixed(2)
    }
}