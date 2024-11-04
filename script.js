const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equals');
const clearAllE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.clear-last');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let hasDot = false;

numbersE1.forEach (number => {
    number.addEventListener('click', (e)=> {
        if (e.target.innerText === '.' && !hasDot) {
            hasDot = true;
        }else if(e.target.innerText === '.' && hasDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach(operation => {
    operation.addEventListener('click', (e)=> {
        if (!dis2Num) return;
        hasDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultE1.innerHTML = result;
};

function mathOperation(){
    if (lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }
    else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    }
    else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    }
    else if (lastOperation === '/' ) {
        result = parseFloat(result) / parseFloat(dis2Num);
    }
    else if (lastOperation === '&') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
};

equalE1.addEventListener('click', (e)=> {
    if(!dis1Num || !dis2Num) return;
    hasDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    tempResultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearAllE1.addEventListener('click', (e)=> {
    display1E1.innerText = '';
    display2E1.innerText = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '';
});

clearLastE1.addEventListener('click', (e)=> {
    display2E1.innerText = '';
    dis2Num = '';
});