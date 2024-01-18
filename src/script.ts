const secondHand = document.getElementById('second-hand') as HTMLElement
const minutedHand = document.getElementById('minute-hand') as HTMLElement
const hourHand = document.getElementById('hour-hand') as HTMLElement

function clockTick() {
    const date = new Date()
    const seconds = date.getSeconds() / 60
    const minutes = (seconds + date.getMinutes()) / 60
    const hours = (minutes + date.getHours()) / 60

    rotateClockHand(secondHand, seconds)
    rotateClockHand(minutedHand, minutes)
    rotateClockHand(hourHand, hours)
}


function rotateClockHand(element: HTMLElement, rotation: number) {
    element.style.setProperty('--rotate', `${rotation * 360}`);
}

setInterval(clockTick, 1000);
