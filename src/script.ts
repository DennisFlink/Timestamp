const secondHand = document.getElementById('second-hand') as HTMLElement
const minutedHand = document.getElementById('minute-hand') as HTMLElement
const hourHand = document.getElementById('hour-hand') as HTMLElement

let timerSeconds: number = 120;
let elapsedSeconds: number = 0;

function startTimer() {
    setInterval(() => {
        elapsedSeconds++
        const seconds = elapsedSeconds / 60
        const minutes = seconds / 60

        rotateClockHand(secondHand, seconds)
        rotateClockHand(minutedHand, minutes)

        if (timerSeconds === elapsedSeconds) {
            goToAlarm();
        }

    }, 1000)
}

function resetTimer() {
    rotateClockHand(secondHand, 0)
    rotateClockHand(minutedHand, 0)
    elapsedSeconds = 0;
}  
    
function rotateClockHand(element: HTMLElement, rotation: number) {
   element.style.setProperty('--rotate', `${rotation * 360}`);
}

function goToAlarm(){}

startTimer()
