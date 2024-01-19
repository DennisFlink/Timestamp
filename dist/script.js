"use strict";
/* import Timer from "easytimer.js";
let timer = new Timer();

timer.start({ countdown: true, startValues: { minutes: 20 } });

timer.addEventListener("secondsUpdated", function (e) {
  let basicUsageElement = document.querySelector("#basicUsage");
  if (basicUsageElement) {
    basicUsageElement.innerHTML = timer.getTimeValues().toString();
  }
});
 */
const progressBarEl = document.querySelector(".progress");
let remainingTime = 2000; // seconds
const totalTime = remainingTime;
function countdown() {
    const navContainer = document.querySelector(".nav");
    const navH1 = navContainer.querySelector(".nav > h1");
    const menuIcon = document.querySelector(".menu-icon");
    if (progressBarEl && navContainer && navH1 && menuIcon) {
        const containerHeight = navContainer.offsetHeight;
        const progress = ((totalTime - remainingTime) / totalTime) * 100;
        progressBarEl.style.height = `${progress}%`;
        if (progress >= containerHeight - 27) {
            navH1.classList.add("white-text");
            menuIcon.classList.add("white-text");
        }
        else {
            navH1.classList.remove("white-text");
            menuIcon.classList.remove("white-text");
        }
    }
    if (remainingTime > 0) {
        remainingTime--;
        setTimeout(countdown, 1000);
    }
    else {
        // countdown finished
        if (progressBarEl) {
            progressBarEl.style.height = "100%";
        }
    }
}
countdown();
