import Timer from 'easytimer.js'
let timer = new Timer()

let visualScreen: boolean = false

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
const breakCheckbox = document.getElementById('break') as HTMLInputElement
const intervalsCheckbox = document.getElementById('intervals') as HTMLInputElement;
const headerH1: HTMLElement | null = document.querySelector('h1')
const progressBarEl: HTMLElement | null = document.querySelector('.progress')
const menuIcon: HTMLElement | null = document.querySelector('.menu-icon')
const noPauseButton = document.querySelector('.no-pause-button') as HTMLElement
const counterValue = document.getElementById('minutes') as HTMLElement
const conutUpBtn = document.getElementById('countUp') as HTMLElement
const countDownBtn = document.getElementById('countDown') as HTMLElement

const dropBtn = document.querySelector('.dropbtn') as HTMLElement
const dropDown = document.getElementById('myDropdown') as HTMLElement

dropBtn.addEventListener('click', () => {
   dropDown!.classList.toggle('show')
})

const dropdownLinks = document.querySelectorAll('.dropdown-content a')
dropdownLinks.forEach((link) => {
   link.addEventListener('click', () => {
      dropDown!.classList.remove('show')
   })
})

logoBtn.addEventListener('click', function () {
   goToSetTimer()
})

abortBtns.forEach((button) => {
   button.addEventListener('click', function () {
     resetTimers()
   })
})

const resetTimers = () => {
   stopTimer()
   resetClock()
   resetHeader()
   goToSetTimer()
}

startBtn.addEventListener('click', function () {
   startTimer()
})

const goToSetTimer = () => {
   const sectionsToHide = document.querySelectorAll('section:not(#header):not(#setTimer)')
   sectionsToHide.forEach((section) => section.classList.add('hidden'))
   header.classList.remove('hidden')
   setTimer.classList.remove('hidden')
   dropBtn.setAttribute('style', 'pointer-events: none;')
}
const goToVisual = () => {
   const sectionsToHide = document.querySelectorAll('section:not(#header):not(#visual)')
   sectionsToHide.forEach((section) => section.classList.add('hidden'))
   header.classList.remove('hidden')
   visual.classList.remove('hidden')
   dropBtn.setAttribute('style', 'pointer-events: auto;')
   visualScreen = true
}
const goToAnalogTimer = () => {
   const sectionsToHide = document.querySelectorAll(
      'section:not(#header):not(#analogTimer)',
   )
   sectionsToHide.forEach((section) => section.classList.add('hidden'))
   header.classList.remove('hidden')
   analogTimer.classList.remove('hidden')
   dropBtn.setAttribute('style', 'pointer-events: auto;')
   visualScreen = false
}
const goToDigitalTimer = () => {
   const sectionsToHide = document.querySelectorAll(
      'section:not(#header):not(#ditialTimer)',
   )
   sectionsToHide.forEach((section) => section.classList.add('hidden'))
   header.classList.remove('hidden')
   digitalTimer.classList.remove('hidden')
   dropBtn.setAttribute('style', 'pointer-events: auto;')
   visualScreen = false
}
const goToPauseView = () => {
   const sectionsToHide = document.querySelectorAll('section:not(#pauseView)')
   sectionsToHide.forEach((section) => section.classList.add('hidden'))
   pauseView.classList.remove('hidden')
   header.classList.add('hidden')
   visualScreen = false

   startIntervalTimer()   
}

const startIntervalTimer = () => {
   const initialTime = { minutes: 5 }
   timer.start({ countdown: true, startValues: initialTime })
   let minute = document.getElementById('interval-minutes') as HTMLElement
   let second = document.getElementById('interval-seconds') as HTMLElement
   timer.addEventListener('secondsUpdated', function () {
      minute!.textContent = timer.getTimeValues().minutes.toString()
      second!.textContent = timer.getTimeValues().seconds.toString()
   })

   timer.addEventListener('targetAchieved', function (e) {
      timer.removeEventListener('targetAchieved', function(){})
      resetTimers()
      startTimer()
      visualScreen = false
   })
}

noPauseButton.addEventListener('click', function() {
   timer.removeEventListener('targetAchieved', function(){})
   resetTimers()
   startTimer()
   visualScreen = false
})

const goToAlarm = () => {
   resetTimers()

   if (breakCheckbox.checked) {
      goToPauseView()
   } 
   else if (intervalsCheckbox.checked) {
      startTimer()
   }
   else {
      const sectionsToHide = document.querySelectorAll('section:not(#alarm)')
      sectionsToHide.forEach((section) => section.classList.add('hidden'))
      header.classList.add('hidden')
      alarm.classList.remove('hidden')
      
      visualScreen = false
   }
}

let minutes: number = 0
conutUpBtn.addEventListener('click', () => {
   minutes++
   counterValue.innerHTML = minutes.toString()
})

countDownBtn.addEventListener('click', () => {
   if (minutes > 1) {
      minutes--
      counterValue.innerHTML = minutes.toString()
   }
})

let initialTime = { minutes: minutes }

const startTimer = () => {
   const amountMinutesElement = document.getElementById('minutes')

   if (amountMinutesElement) {
      const amountMinutes: string = amountMinutesElement.textContent || ''
      minutes = parseInt(amountMinutes, 10)
   }
   initialTime = { minutes: minutes }

   timer.start({ countdown: true, startValues: initialTime })

   timer.addEventListener('secondsUpdated', updateAndStartClock)

   timer.addEventListener('targetAchieved', function (e) {
      goToAlarm()
      timer.removeEventListener('targetAchieved', function(){})
      timer.addEventListener('secondsUpdated', function(){})
   })
   goToDigitalTimer()
}

const updateAndStartClock = () => {
   startVisualTimer()
   startAnalogTimer()
   startDigitalTimer()
}

const stopTimer = () => {
   timer.stop()
   timer.addEventListener('stopped', () => {
      counterValue.innerHTML = minutes.toString()
   })
}

const startDigitalTimer = () => {
   timer.addEventListener('secondsUpdated', function () {
      let digitalEl = document.querySelector('#gettingvalue')

      if (digitalEl) {
         let minutes = document.querySelector('.digital-minutes')
         let seconds = document.querySelector('.digital-seconds')
         minutes!.textContent = timer.getTimeValues().minutes.toString()
         seconds!.textContent = timer.getTimeValues().seconds.toString()
      }
   })
}

const startVisualTimer = () => {
   let totalTimeInSeconds = timer.getTotalTimeValues().seconds

   if (progressBarEl && header && headerH1 && menuIcon) {
      const containerHeight: number = header.offsetHeight

      let progress: number =
         ((initialTime.minutes * 60 - totalTimeInSeconds) / (initialTime.minutes * 60)) *
         100

      progressBarEl.style.height = `${progress}%`

      if (visualScreen === true && progress >= containerHeight - 94) {
         headerH1.classList.add('white-text')
         menuIcon.classList.add('white-text')
      }
      else {
         resetHeader()
      }
   }

   if (initialTime.minutes === 0) {
      progressBarEl!.style.height = '100%'
   }
}

const resetHeader = () => {
   headerH1?.classList.remove('white-text')
   menuIcon?.classList.remove('white-text')
   visualScreen = false
}

const secondHand = document.getElementById('second-hand') as HTMLElement
const minutedHand = document.getElementById('minute-hand') as HTMLElement

let elapsedSeconds: number = 0

function startAnalogTimer() {
   elapsedSeconds++
   const seconds = elapsedSeconds / 60
   const minutes = seconds / 60

   rotateClockHand(secondHand, seconds)
   rotateClockHand(minutedHand, minutes)
}

function resetClock() {
   elapsedSeconds = 0
   timer.removeEventListener('secondsUpdated', updateAndStartClock)
   rotateClockHand(secondHand, 0)
   rotateClockHand(minutedHand, 0)
}

function rotateClockHand(element: HTMLElement, rotation: number) {
   element.style.setProperty('--rotate', `${rotation * 360}`)
}

const setNew = document.getElementsByClassName('setNew')[0] as HTMLElement
setNew.addEventListener('click', function () {
   document.getElementsByClassName('set-timer')[0].classList.remove('hidden')
   document.getElementsByClassName('alarm')[0].classList.add('hidden')
   header.classList.remove('hidden')
   dropBtn.setAttribute('style', 'pointer-events: none;')
})

const analogView = document.getElementById('analogview') as HTMLElement

const VisualView = document.getElementById('visualview') as HTMLElement

const digitalView = document.getElementById('digitalview') as HTMLElement

digitalView.addEventListener('click', () => {
   goToDigitalTimer()
})

VisualView.addEventListener('click', () => {
   goToVisual()
})
analogView.addEventListener('click', () => {
   goToAnalogTimer()
})
