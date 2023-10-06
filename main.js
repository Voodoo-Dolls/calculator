let screen = document.querySelector("#screen")
let screenLastNumber = document.querySelector("#last-number")
let screenCurrentNumber = document.querySelector("#current-number")
let equal = document.querySelector("#equal");


screenCurrentNumber.textContent = 0
let lastNumber = 0
let currentNumber = []

// Reset
let reset = () => {
    lastNumber = 0
    currentNumber = []
    screenCurrentNumber.textContent = 0
    screenLastNumber.textContent = ""
}

// Button Assignment
let numbers = Array.from(document.querySelectorAll(".number"));
numbers.map((number) => {
    number.addEventListener("click", () => {
        currentNumber.push(number.value)
        screenCurrentNumber.textContent = currentNumber.join("")
    })
})
let operators = Array.from(document.querySelectorAll(".operator"))
operators.map((operator) => {
    operator.addEventListener("click", () => {

        if (currentNumber.length > 0) {
            screenCurrentNumber.textContent = 0
            // Checks if theres a previous value
            if (screenLastNumber.textContent !== "") {
                equalTo(screenLastNumber.textContent.charAt(screenLastNumber.textContent.length - 1))
                screenLastNumber.textContent = lastNumber
                screenLastNumber.textContent = screenLastNumber.textContent + operator.value
            } else {
                lastNumber = currentNumber.join("")
                screenLastNumber.textContent = currentNumber.join("") + operator.value
            }
            currentNumber = []
        }else if (lastNumber !== 0){
            screenLastNumber.textContent = lastNumber + operator.value
        }
    })
})

equal.addEventListener("click", ()=>{
    equalTo(screenLastNumber.textContent.charAt(screenLastNumber.textContent.length - 1))
    screenLastNumber.textContent = lastNumber
    currentNumber = [];
    screenCurrentNumber.textContent = ""
})

let equalTo = (operator) => {
    switch (operator) {
        case "+":
            lastNumber = parseFloat(lastNumber) + parseFloat(currentNumber.join(""))
            break;
        case "-":
            lastNumber = parseFloat(lastNumber) - parseFloat(currentNumber.join(""))
            break;
        case "*":
            lastNumber = parseFloat(lastNumber) * parseFloat(currentNumber.join(""))
            break;
        case "/":
            lastNumber = parseFloat(lastNumber) / parseFloat(currentNumber.join(""))
            break;
        case "%":
            lastNumber = parseFloat(lastNumber) % parseFloat(currentNumber.join(""))
            break;
    }
}