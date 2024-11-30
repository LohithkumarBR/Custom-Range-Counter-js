let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let counterTextEl = document.getElementById("counterText");

function displayNumbers(fromCount, toCount) {
    let currentCount = fromCount;
    counterTextEl.textContent = currentCount;

    let timerId = setInterval(function() {
        if (currentCount < toCount) {
            currentCount += 1;
            counterTextEl.textContent = currentCount;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

startBtnEl.onclick = function() {
    let fromVal = fromUserInputEl.value;
    let toVal = toUserInputEl.value;

    if (fromVal === "") {
        alert("Enter the from Value");
    } else if (toVal === "") {
        alert("Enter the to Value");
    } else {
        let fromValInteger = parseInt(fromVal);
        let toValInteger = parseInt(toVal);

        displayNumbers(fromValInteger, toValInteger);
    }
};