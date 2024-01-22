import Timer from "easytimer.js";
let timer = new Timer();

const initialTime = { minutes: 2 };
timer.start({ countdown: true, startValues: initialTime });

timer.addEventListener("secondsUpdated", function (e) {
  let basicUsageElement = document.querySelector("#gettingvalue");
  if (basicUsageElement) {
    let minute = document.querySelector(".minutes");
    let second = document.querySelector(".seconds");

    minute!.textContent = timer.getTimeValues().minutes.toString();
    second!.textContent = timer.getTimeValues().seconds.toString();
  }
  visualTimer();
});

const visualTimer = () => {
  let totalTimeInSeconds = timer.getTotalTimeValues().seconds;

  upDateProg(totalTimeInSeconds);
};

const upDateProg = (totalTimeInSeconds: any) => {
  const progressBarEl: HTMLElement | null = document.querySelector(".progress");
  const navContainer: HTMLElement | null = document.querySelector(".nav");
  const navH1: HTMLElement | null = navContainer!.querySelector(".nav > h1");
  const menuIcon: HTMLElement | null = document.querySelector(".menu-icon");

  console.log(totalTimeInSeconds);
  if (progressBarEl && navContainer && navH1 && menuIcon) {
    const containerHeight: number = navContainer.offsetHeight;
    let progress: number =
      ((initialTime.minutes * 60 - totalTimeInSeconds) /
        (initialTime.minutes * 60)) *
      100;
    console.log(progress);


    progressBarEl.style.height = `${progress}%`;

    /* if (progress >= containerHeight - 27) {
      navH1.classList.add("white-text");
      menuIcon.classList.add("white-text");
    } else {
      navH1.classList.remove("white-text");
      menuIcon.classList.remove("white-text");
    }*/
  } 

  if (initialTime.minutes === 0) {
    progressBarEl!.style.height = "100%";
  }
};

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