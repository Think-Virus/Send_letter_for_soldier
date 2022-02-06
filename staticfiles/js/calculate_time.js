function getRemainingTime() {
    var currentDate = new Date();
    var now_year = currentDate.getFullYear();
    var now_month = currentDate.getMonth();
    var now_day = currentDate.getDay()-1;

    var nowDate = new Date(now_year,now_month,now_day);
    var finishDate = new Date(2022, 2, 2);
    var difference = finishDate - nowDate;
    if (difference < 0) {
        difference = 0;
    }
    return difference;
}

function showRemainingTime() {
    var timeLeft = getRemainingTime();

    var divisor = 24 * 3600 * 1000;

    var days = Math.floor(timeLeft / divisor);
    // timeLeft -= days * divisor;
    // divisor = Math.floor(divisor / 24)
    //
    // // var hours = Math.floor(timeLeft / divisor);
    // // timeLeft -= hours * divisor;
    // // divisor = Math.floor(divisor / 60)
    // //
    // // var minutes = Math.floor(timeLeft / divisor);
    // // timeLeft -= minutes * divisor;
    // // divisor = Math.floor(divisor / 60)
    // //
    // // var seconds = Math.floor(timeLeft / 1000);
    // //
    // // hours = (hours < 10) ? "0" + hours : hours;
    // // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // // seconds = (seconds < 10) ? "0" + seconds : seconds;

    var result = "D - " + days;
    document.getElementById("RemainingTime").innerText = result;
    document.getElementById("RemainingTime").textContent = result;

    setTimeout(showRemainingTime, 1000);
}

function getPercentage() {
    var timeLeft = getRemainingTime();
    var totalTime = 44 * 24 * 3600 * 1000;
    var timeComplete = totalTime - timeLeft;
    var percentage = timeComplete / totalTime * 100;
    percentage = percentage.toFixed(2);
    var result = percentage + ' %';
    document.getElementById("TimePercentage").innerText = result;
    document.getElementById("TimePercentage").textContent = result;
    setTimeout(getPercentage, 100);
}


showRemainingTime();
getPercentage();