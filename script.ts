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
    /*     let progress: number = totalTimeInSeconds / 100; */

    progressBarEl.style.height = `${progress}%`;

    if (progress >= containerHeight - 27) {
      navH1.classList.add("white-text");
      menuIcon.classList.add("white-text");
    } else {
      navH1.classList.remove("white-text");
      menuIcon.classList.remove("white-text");
    }
  }
  // countdown finished
  if (initialTime.minutes === 0) {
    progressBarEl!.style.height = "100%";
  }
};
