const input = document.getElementById("number")
const o = document.getElementById("output")
const btn = document.getElementById("convert-btn")
const his = document.getElementById("history")
let d


const romans = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]

btn.addEventListener("click", convert)

console.log(i)

function convert() {
    let i = input.value;
    o.innerText = "";
    if (i === "") { o.innerText = "Please enter a valid number"; }
    else if (isNaN(i)) {
        o.innerText = "Please enter a valid number";
    } else if (i < 1) {
        o.innerText = "Please enter a number greater than or equal to 1";
    } else if (i > 3999) {
        o.innerText = "Please enter a number less than or equal to 3999";
    } else {
        let num = parseInt(i);
        let result = '';

        for (const [sym, val] of romans) {
            const count = Math.floor(num / val);
            if (count > 0) {
                result += sym.repeat(count);
                num %= val
            }
        }

        o.innerText = result;
        updateHistory(i, result);
    }
    input.value = "";
}

function updateHistory(input, result) {
    his.innerText += `${input} => ${result}\n`
}


