var secondHand = document.getElementById('second-hand');
var minutedHand = document.getElementById('minute-hand');
var hourHand = document.getElementById('hour-hand');
var timerSeconds = 120;
var elapsedSeconds = 0;
function startTimer() {
    setInterval(function () {
        elapsedSeconds++;
        var seconds = elapsedSeconds / 60;
        var minutes = seconds / 60;
        rotateClockHand(secondHand, seconds);
        rotateClockHand(minutedHand, minutes);
        if (timerSeconds === elapsedSeconds) {
            goToAlarm();
        }
    }, 1000);
}
function resetTimer() {
    rotateClockHand(secondHand, 0);
    rotateClockHand(minutedHand, 0);
    elapsedSeconds = 0;
}
function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', "".concat(rotation * 360));
}
function goToAlarm() { }
startTimer();
