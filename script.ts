import Timer from "easytimer.js";
let timer = new Timer();

let visualScreen: boolean = false;
let interval: boolean = true;

const header = document.querySelector('header') as HTMLElement
const setTimer = document.querySelector('.set-timer') as HTMLElement
const visual = document.querySelector('.visual') as HTMLElement
const analogTimer = document.querySelector('.analog-timer') as HTMLElement
const pauseView = document.querySelector('.pause-view') as HTMLElement
const digitalTimer = document.querySelector('.digital-timer') as HTMLElement
const alarm = document.querySelector('.alarm') as HTMLElement
const logoBtn = document.getElementById('logo') as HTMLElement
const startBtn = document.getElementById('startTimer') as HTMLElement
const abortBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.abort-timer-button')
const counterValue = document.getElementById('minutes') as HTMLElement;
const conutUpBtn = document.getElementById('countUp') as HTMLElement;
const countDownBtn = document.getElementById('countDown') as HTMLElement;

logoBtn.addEventListener('click', function(){
  goToSetTimer()
})

abortBtns.forEach(button => {
  button.addEventListener('click', function() {
    goToSetTimer()
  })
});

startBtn.addEventListener('click', function() {
  startTimer()
})

const goToSetTimer = () => {
  const sectionsToHide = document.querySelectorAll('section:not(#header):not(#setTimer)');
  sectionsToHide.forEach(section => section.classList.add('hidden'));
  header.classList.remove('hidden');
  setTimer.classList.remove('hidden');
};
const goToVisual = () => {
  const sectionsToHide = document.querySelectorAll('section:not(#header):not(#visual)');
  sectionsToHide.forEach(section => section.classList.add('hidden'));
  header.classList.remove('hidden');
  visual.classList.remove('hidden');
  visualScreen = true;
};
const goToAnalogTimer = () => {
  const sectionsToHide = document.querySelectorAll('section:not(#header):not(#analogTimer)');
  sectionsToHide.forEach(section => section.classList.add('hidden'));
  header.classList.remove('hidden');
  analogTimer.classList.remove('hidden');
  visualScreen = false;
};
const goToDigitalTimer = () => {
  const sectionsToHide = document.querySelectorAll('section:not(#header):not(#ditialTimer)');
  sectionsToHide.forEach(section => section.classList.add('hidden'));
  header.classList.remove('hidden');
  digitalTimer.classList.remove('hidden');
  visualScreen = false;
};
const goToPauseView = () => {
  const sectionsToHide = document.querySelectorAll('section:not(#pauseView)');
  sectionsToHide.forEach(section => section.classList.add('hidden'));
  pauseView.classList.remove('hidden');
  header.classList.add('hidden')
  visualScreen = false;

  startIntervalTimer()
};

const startIntervalTimer = () => {
  const initialTime = { seconds: 5 };
  timer.start({ countdown: true, startValues: initialTime });
  console.log('start interval timer')
  let minute = document.getElementById("interval-minutes")as HTMLElement; 
  let second = document.getElementById("interval-seconds")as HTMLElement;

  timer.addEventListener('secondsUpdated', function() {
    minute!.textContent = timer.getTimeValues().minutes.toString();
    second!.textContent = timer.getTimeValues().seconds.toString();
  })
}

const goToAlarm = () => {
  if (interval === true) {
    goToPauseView()
  }
  else {
    const sectionsToHide = document.querySelectorAll('section:not(#alarm)');
    sectionsToHide.forEach(section => section.classList.add('hidden'));
    header.classList.add('hidden')
    alarm.classList.remove('hidden');
    resetClock()
    visualScreen = false;
  }
}



let minutes: number = 0;
const amountMinutesElement = document.getElementById("minutes");

if (amountMinutesElement) {
  const amountMinutes: string = amountMinutesElement.textContent || "";
  minutes = parseInt(amountMinutes, 10);
}

const initialTime = { seconds: minutes };

const startTimer = () => {
  timer.start({ countdown: true, startValues: initialTime });
  console.log('timer started')
  timer.addEventListener("secondsUpdated", function () {
    let minute = document.querySelector(".minutes");
    let second = document.querySelector(".seconds");
  
    minute!.textContent = timer.getTimeValues().minutes.toString();
      second!.textContent = timer.getTimeValues().seconds.toString();
      
      visualTimer();
      startClock();
      
  });
  
  timer.addEventListener('targetAchieved', function(e) {
    goToAlarm()
    console.log('timer ended!')
  })
}



const visualTimer = () => {
  let totalTimeInSeconds = timer.getTotalTimeValues().seconds;

  upDateProg(totalTimeInSeconds);
};

const upDateProg = (totalTimeInSeconds: any) => {
  const progressBarEl: HTMLElement | null = document.querySelector(".progress");
  const navContainer: HTMLElement | null = document.querySelector(".nav");
  const navH1: HTMLElement | null = navContainer!.querySelector(".nav > h1");
  const menuIcon: HTMLElement | null = document.querySelector(".menu-icon");


  if (progressBarEl && navContainer && navH1 && menuIcon) {
    const containerHeight: number = navContainer.offsetHeight;
    let progress: number =
      ((initialTime.seconds * 60 - totalTimeInSeconds) /
        (initialTime.seconds * 60)) *
      100;

    progressBarEl.style.height = `${progress}%`;

     if (visualScreen === true && progress >= containerHeight - 27) {
      navH1.classList.add("white-text");
      menuIcon.classList.add("white-text");
    } else {
      navH1.classList.remove("white-text");
      menuIcon.classList.remove("white-text");
    }
  }

  if (initialTime.seconds === 0) {
    progressBarEl!.style.height = "100%";
  }
};

const secondHand = document.getElementById("second-hand") as HTMLElement;
const minutedHand = document.getElementById("minute-hand") as HTMLElement;
const hourHand = document.getElementById("hour-hand") as HTMLElement;

let elapsedSeconds: number = 0;

function startClock() {
    elapsedSeconds++;
    const seconds = elapsedSeconds / 60;
    const minutes = seconds / 60;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minutedHand, minutes);
}

function resetClock() {
  rotateClockHand(secondHand, 0);
  rotateClockHand(minutedHand, 0);
  elapsedSeconds = 0;
}

function rotateClockHand(element: HTMLElement, rotation: number) {
  element.style.setProperty("--rotate", `${rotation * 360}`);
}

// let minutes: number = 1;

conutUpBtn.addEventListener('click', () => {
  minutes++;
  counterValue.innerHTML = minutes.toString();
});

countDownBtn.addEventListener('click', () => {
  if (minutes > 1) {
    minutes--;
    counterValue.innerHTML = minutes.toString();
  }
});

const setNew = document.getElementsByClassName('setNew')[0] as HTMLElement;
setNew.addEventListener("click", function() {
    document.getElementsByClassName('set-timer')[0].classList.remove("hidden");
    document.getElementsByClassName('alarm')[0].classList.add("hidden");
});