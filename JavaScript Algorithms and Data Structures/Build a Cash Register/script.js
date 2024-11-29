const input = document.getElementById("cash")
const select = document.getElementById("select")
const btn = document.getElementById("purchase-btn")
const output = document.getElementById("change-due")
const remaining = document.getElementById("list")

btn.addEventListener("click", calcChange)

let price = 10;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

function calcChange() {
    let cr = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let cash = input.value
    let changeDue = cash - price
    let originalChangeDue = changeDue
    let changeDict = {}
    let totalCid = 0;

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item")
    } else if (cash == price) {
        return output.innerText = "No change due - customer paid with exact cash"
    } else {
        cid = cid.reverse();

        for (let item of cid) {
            totalCid += item[1]
        }
        totalCid = totalCid.toFixed(2);
        if (changeDue > totalCid) {
            return output.innerText = "Status: INSUFFICIENT_FUNDS"
        } else {
            for (let item of cid) {
                let keyValue = [item[0], 0]
                while (changeDue >= cr[item[0]] && item[1] > 0) {
                    keyValue[1] += cr[item[0]]
                    item[1] -= cr[item[0]];
                    changeDue -= cr[item[0]];
                    changeDue = changeDue.toFixed(2);
                }
                if (keyValue[1] > 0) {
                    changeDict[keyValue[0]] = keyValue[1].toFixed(2);
                }
            }

            if (changeDue > 0) {
                return output.innerHTML = "Status: INSUFFICIENT_FUNDS";
            }

            let finalChange = ""
            for (let key of Object.keys(changeDict)) {
                finalChange += `${key}: $${changeDict[key]} `
            }

            if (originalChangeDue == totalCid) {
                return output.innerHTML = `Status: CLOSED ${finalChange}`
            } else {
                return output.innerHTML = `Status: OPEN ${finalChange}`
            }
        }
    }
}
