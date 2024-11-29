const text_input = document.getElementById('text-input')
const check_btn = document.getElementById('check-btn')
const result = document.getElementById('result')

function check(str) {

    let strFormat = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let strReverse = strFormat.split("").reverse().join("");
    if (strFormat === strReverse) {
        return (result.innerText = `${str} is a palindrome`)
    }
    else {
        return (result.innerText = `${str} is not a palindrome`)
    }
}

function input() {
    if (text_input.value !== "") {
        const word = text_input.value
        check(word)
        text_input.value = ""
    }
    else {
        alert(`Please input a value`)
    }
}

check_btn.addEventListener("click", input)