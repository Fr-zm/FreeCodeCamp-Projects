const input = document.getElementById("user-input")
const check = document.getElementById("check-btn")
const clear = document.getElementById("clear-btn")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const space = document.getElementById("sp")
const line = document.getElementById("-")
const para1 = document.getElementById("(")
const para2 = document.getElementById(")")
const result = document.querySelector("#results-div");


check.addEventListener("click", checkf)
clear.addEventListener("click", clearf)
one.addEventListener("click", () => { input.value += 1 })
two.addEventListener("click", () => { input.value += 2 })
three.addEventListener("click", () => { input.value += 3 })
four.addEventListener("click", () => { input.value += 4 })
five.addEventListener("click", () => { input.value += 5 })
six.addEventListener("click", () => { input.value += 6 })
seven.addEventListener("click", () => { input.value += 7 })
eight.addEventListener("click", () => { input.value += 8 })
nine.addEventListener("click", () => { input.value += 9 })
zero.addEventListener("click", () => { input.value += 0 })
space.addEventListener("click", () => { input.value += " " })
line.addEventListener("click", () => { input.value += "-" })
para1.addEventListener("click", () => { input.value += "(" })
para2.addEventListener("click", () => { input.value += ")" })

const reg1 = /^1?\s?\d{3}-\d{3}-\d{4}$/; //1 555-555-5555
const reg2 = /^\d{10}$/; //5555555555
const reg3 = /^1?\s?\(\d{3}\)\s\d{3}-\d{4}$/; //1 (555) 555-5555
const reg4 = /^1?\s?\(\d{3}\)\d{3}-\d{4}$/; //(555)555-5555
const reg5 = /^1?\s\d{3}\s\d{3}\s\d{4}$/;//1 555 555 5555"
function checkf() {

    if (input.value.trim() === "") {
        alert("Please provide a phone number");
    }

    else if (reg1.test(input.value)) {
        showResult("Valid US number: " + input.value)
    }

    else if (reg2.test(input.value)) {
        showResult("Valid US number: " + input.value)
    }

    else if (reg3.test(input.value)) {
        showResult("Valid US number: " + input.value)
    }

    else if (reg4.test(input.value)) {
        showResult("Valid US number: " + input.value)
    }

    else if (reg5.test(input.value)) {
        showResult("Valid US number: " + input.value)
    }

    else {
        showResult("invalid US number: " + input.value)
    }
}


function clearf() {
    input.value = "";
    showResult("")
}


function showResult(v) {
    result.innerText = v
}