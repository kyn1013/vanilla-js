const btn = document.getElementById("btn");
const output = document.getElementById("output");
const result = document.getElementById("result");
const range = document.getElementById("range");
const userAnswerId = document.getElementById("user");
const userResult = document.getElementById("userResult");
let rangeValue = -1;
let userAnswer = -1;
let machineAnswer = 0;

function valueSummit() {
    rangeValue = range.value;
    rangeValue++;
}

function onBtnClick() {
    userAnswer = userAnswerId.value;
    if (rangeValue >= 0 && parseInt(userAnswer) >= 0) {
        userResult.classList.remove("display1");
        machineAnswer = Math.floor(Math.random() * rangeValue);
        output.innerText = `You chose:${userAnswer} ,the machine chose:${machineAnswer}`
        if (userAnswer == machineAnswer) {
            result.innerText = "you won!";
        }
    }
}


range.addEventListener("change", valueSummit);
btn.addEventListener("click", onBtnClick);