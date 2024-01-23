"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const easytimer_js_1 = __importDefault(require("easytimer.js"));
let timer = new easytimer_js_1.default();
let visualScreen = false;
let interval = false;
const header = document.querySelector("header");
const setTimer = document.querySelector(".set-timer");
const visual = document.querySelector(".visual");
const analogTimer = document.querySelector(".analog-timer");
const pauseView = document.querySelector(".pause-view");
const digitalTimer = document.querySelector(".digital-timer");
const alarm = document.querySelector(".alarm");
const logoBtn = document.getElementById("logo");
const startBtn = document.getElementById("startTimer");
const abortBtns = document.querySelectorAll(".abort-timer-button");
const counterValue = document.getElementById("minutes");
const conutUpBtn = document.getElementById("countUp");
const countDownBtn = document.getElementById("countDown");
const dropBtn = document.querySelector(".dropbtn");
const dropDown = document.getElementById("myDropdown");
dropBtn.addEventListener("click", () => {
    dropDown.classList.toggle("show");
});
const dropdownLinks = document.querySelectorAll(".dropdown-content a");
dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
        dropDown.classList.remove("show");
    });
});
logoBtn.addEventListener("click", function () {
    goToSetTimer();
});
abortBtns.forEach((button) => {
    button.addEventListener("click", function () {
        stopTimer();
        resetClock();
        goToSetTimer();
    });
});
startBtn.addEventListener("click", function () {
    startTimer();
});
const goToSetTimer = () => {
    const sectionsToHide = document.querySelectorAll("section:not(#header):not(#setTimer)");
    sectionsToHide.forEach((section) => section.classList.add("hidden"));
    header.classList.remove("hidden");
    setTimer.classList.remove("hidden");
    dropBtn.setAttribute("style", "pointer-events: none;");
};
const goToVisual = () => {
    const sectionsToHide = document.querySelectorAll("section:not(#header):not(#visual)");
    sectionsToHide.forEach((section) => section.classList.add("hidden"));
    header.classList.remove("hidden");
    visual.classList.remove("hidden");
    dropBtn.setAttribute("style", "pointer-events: auto;");
    visualScreen = true;
};
const goToAnalogTimer = () => {
    const sectionsToHide = document.querySelectorAll("section:not(#header):not(#analogTimer)");
    sectionsToHide.forEach((section) => section.classList.add("hidden"));
    header.classList.remove("hidden");
    analogTimer.classList.remove("hidden");
    dropBtn.setAttribute("style", "pointer-events: auto;");
    visualScreen = false;
};
const goToDigitalTimer = () => {
    const sectionsToHide = document.querySelectorAll("section:not(#header):not(#ditialTimer)");
    sectionsToHide.forEach((section) => section.classList.add("hidden"));
    header.classList.remove("hidden");
    digitalTimer.classList.remove("hidden");
    dropBtn.setAttribute("style", "pointer-events: auto;");
    visualScreen = false;
};
const goToPauseView = () => {
    const sectionsToHide = document.querySelectorAll("section:not(#pauseView)");
    sectionsToHide.forEach((section) => section.classList.add("hidden"));
    pauseView.classList.remove("hidden");
    header.classList.add("hidden");
    visualScreen = false;
    startIntervalTimer();
};
const startIntervalTimer = () => {
    const initialTime = { seconds: 5 };
    timer.start({ countdown: true, startValues: initialTime });
    console.log("start interval timer");
    let minute = document.getElementById("interval-minutes");
    let second = document.getElementById("interval-seconds");
    timer.addEventListener("secondsUpdated", function () {
        minute.textContent = timer.getTimeValues().minutes.toString();
        second.textContent = timer.getTimeValues().seconds.toString();
    });
};
const goToAlarm = () => {
    if (interval === true) {
        goToPauseView();
    }
    else {
        const sectionsToHide = document.querySelectorAll("section:not(#alarm)");
        sectionsToHide.forEach((section) => section.classList.add("hidden"));
        header.classList.add("hidden");
        alarm.classList.remove("hidden");
        resetClock();
        visualScreen = false;
    }
};
let minutes = 0;
conutUpBtn.addEventListener("click", () => {
    minutes++;
    counterValue.innerHTML = minutes.toString();
});
countDownBtn.addEventListener("click", () => {
    if (minutes > 1) {
        minutes--;
        counterValue.innerHTML = minutes.toString();
    }
});
let initialTime = { minutes: minutes };
const startTimer = () => {
    const amountMinutesElement = document.getElementById("minutes");
    if (amountMinutesElement) {
        const amountMinutes = amountMinutesElement.textContent || "";
        minutes = parseInt(amountMinutes, 10);
    }
    initialTime = { minutes: minutes };
    timer.start({ countdown: true, startValues: initialTime });
    console.log("timer startad");
    /*   timer.addEventListener("secondsUpdated", function () {
      upDateProg();
      startClock();
      console.log(timer.getTotalTimeValues().seconds);
    }); */
    timer.addEventListener("secondsUpdated", () => {
        updateAndStartClock();
    });
    timer.addEventListener("targetAchieved", function (e) {
        goToAlarm();
        console.log("timer ended!");
    });
    goToAnalogTimer();
};
const updateAndStartClock = () => {
    console.log(timer.getTotalTimeValues().seconds);
    upDateProg();
    startClock();
    let basicUsageElement = document.querySelector("#gettingvalue");
    if (basicUsageElement) {
        let minutes = document.querySelector(".digital-minutes");
        let seconds = document.querySelector(".digital-seconds");
        minutes.textContent = timer.getTimeValues().minutes.toString();
        seconds.textContent = timer.getTimeValues().seconds.toString();
    }
};
const stopTimer = () => {
    timer.stop();
    timer.addEventListener("stopped", () => {
        counterValue.innerHTML = minutes.toString();
    });
};
/* const digimon = () => {
  timer.addEventListener("secondsUpdated", function () {
    let basicUsageElement = document.querySelector("#gettingvalue");

    if (basicUsageElement) {
      let minutes = document.querySelector(".digital-minutes");
      let seconds = document.querySelector(".digital-seconds");

      minutes!.textContent = timer.getTimeValues().minutes.toString();
      seconds!.textContent = timer.getTimeValues().seconds.toString();
    }
  });
}; */
const upDateProg = () => {
    let totalTimeInSeconds = timer.getTotalTimeValues().seconds;
    const headerH1 = document.querySelector("h1");
    const progressBarEl = document.querySelector(".progress");
    const menuIcon = document.querySelector(".menu-icon");
    if (progressBarEl && header && headerH1 && menuIcon) {
        const containerHeight = header.offsetHeight;
        let progress = ((initialTime.minutes * 60 - totalTimeInSeconds) /
            (initialTime.minutes * 60)) *
            100;
        progressBarEl.style.height = `${progress}%`;
        if (visualScreen === true && progress >= containerHeight - 94) {
            headerH1.classList.add("white-text");
            menuIcon.classList.add("white-text");
        }
        else {
            headerH1.classList.remove("white-text");
            menuIcon.classList.remove("white-text");
        }
    }
    if (initialTime.minutes === 0) {
        progressBarEl.style.height = "100%";
    }
};
const secondHand = document.getElementById("second-hand");
const minutedHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");
let elapsedSeconds = 0;
function startClock() {
    elapsedSeconds++;
    const seconds = elapsedSeconds / 60;
    const minutes = seconds / 60;
    rotateClockHand(secondHand, seconds);
    rotateClockHand(minutedHand, minutes);
}
function resetClock() {
    elapsedSeconds = 0;
    console.log(elapsedSeconds);
    rotateClockHand(secondHand, 0);
    rotateClockHand(minutedHand, 0);
}
function rotateClockHand(element, rotation) {
    element.style.setProperty("--rotate", `${rotation * 360}`);
}
const setNew = document.getElementsByClassName("setNew")[0];
setNew.addEventListener("click", function () {
    document.getElementsByClassName("set-timer")[0].classList.remove("hidden");
    document.getElementsByClassName("alarm")[0].classList.add("hidden");
    header.classList.remove("hidden");
});
const analogView = document.getElementById("analogview");
const VisualView = document.getElementById("visualview");
const digitalView = document.getElementById("digitalview");
digitalView.addEventListener("click", () => {
    console.log("click");
    goToDigitalTimer();
});
VisualView.addEventListener("click", () => {
    goToVisual();
});
analogView.addEventListener("click", function () {
    goToAnalogTimer();
    console.log("click");
});
