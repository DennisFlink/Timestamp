(()=>{var e={677:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=new(r(n(543)).default),s=!1;const i=document.querySelector("header"),c=document.querySelector(".set-timer"),u=(document.querySelector(".visual"),document.querySelector(".analog-timer"),document.querySelector(".pause-view")),a=(document.querySelector(".digital-timer"),document.querySelector(".alarm"),document.getElementById("logo")),d=document.getElementById("startTimer"),l=document.querySelectorAll(".abort-timer-button"),f=document.getElementById("minutes"),m=document.getElementById("countUp"),h=document.getElementById("countDown");a.addEventListener("click",(function(){v()})),l.forEach((e=>{e.addEventListener("click",(function(){v()}))})),d.addEventListener("click",(function(){E()}));const v=()=>{document.querySelectorAll("section:not(#header):not(#setTimer)").forEach((e=>e.classList.add("hidden"))),i.classList.remove("hidden"),c.classList.remove("hidden")},y=()=>{document.querySelectorAll("section:not(#pauseView)").forEach((e=>e.classList.add("hidden"))),u.classList.remove("hidden"),i.classList.add("hidden"),s=!1,(()=>{o.start({countdown:!0,startValues:{seconds:5}}),console.log("start interval timer");let e=document.getElementById("interval-minutes"),t=document.getElementById("interval-seconds");o.addEventListener("secondsUpdated",(function(){e.textContent=o.getTimeValues().minutes.toString(),t.textContent=o.getTimeValues().seconds.toString()}))})()};let p=0;const g=document.getElementById("minutes");if(g){const e=g.textContent||"";p=parseInt(e,10)}const b={seconds:p},E=()=>{o.start({countdown:!0,startValues:b}),console.log("timer started"),o.addEventListener("secondsUpdated",(function(){let e=document.querySelector(".minutes"),t=document.querySelector(".seconds");e.textContent=o.getTimeValues().minutes.toString(),t.textContent=o.getTimeValues().seconds.toString(),w(),function(){O++;const e=O/60,t=e/60;j(L,e),j(T,t)}()})),o.addEventListener("targetAchieved",(function(e){y(),console.log("timer ended!")}))},w=()=>{let e=o.getTotalTimeValues().seconds;S(e)},S=e=>{const t=document.querySelector(".progress"),n=document.querySelector(".nav"),r=n.querySelector(".nav > h1"),o=document.querySelector(".menu-icon");if(t&&n&&r&&o){const i=n.offsetHeight;let c=(60*b.seconds-e)/(60*b.seconds)*100;t.style.height=`${c}%`,!0===s&&c>=i-27?(r.classList.add("white-text"),o.classList.add("white-text")):(r.classList.remove("white-text"),o.classList.remove("white-text"))}0===b.seconds&&(t.style.height="100%")},L=document.getElementById("second-hand"),T=document.getElementById("minute-hand");document.getElementById("hour-hand");let O=0;function j(e,t){e.style.setProperty("--rotate",""+360*t)}let A=1;m.addEventListener("click",(()=>{A++,f.innerHTML=A.toString()})),h.addEventListener("click",(()=>{A>1&&(A--,f.innerHTML=A.toString())})),document.getElementsByClassName("setNew")[0].addEventListener("click",(function(){document.getElementsByClassName("set-timer")[0].classList.remove("hidden"),document.getElementsByClassName("alarm")[0].classList.add("hidden")}))},543:function(e,t){!function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){var n,o,s;n=e,o=t,s=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){var r,o="";if((e="number"==typeof e?String(e):e).length>t)return e;for(r=0;r<t;r+=1)o+=String(n);return(o+e).slice(-o.length)}function s(){this.reset()}function i(){this.events={}}s.prototype.toString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;e=e||["hours","minutes","seconds"],t=t||":",n=n||2;var r,s=[];for(r=0;r<e.length;r+=1)void 0!==this[e[r]]&&("secondTenths"===e[r]?s.push(this[e[r]]):s.push(o(this[e[r]],n,"0")));return s.join(t)},s.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},i.prototype.on=function(e,t){var n=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t),function(){return n.removeListener(e,t)}},i.prototype.removeListener=function(e,t){if(Array.isArray(this.events[e])){var n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}},i.prototype.removeAllListeners=function(e){e?Array.isArray(this.events[e])&&(this.events[e]=[]):this.events={}},i.prototype.emit=function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[e])&&this.events[e].forEach((function(e){return e.apply(t,r)}))};var c="secondTenths",u="seconds",a="minutes",d="hours",l="days",f=[c,u,a,d,l],m={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},h={secondTenths:10,seconds:60,minutes:60,hours:24};function v(e,t){return(e%t+t)%t}function y(){var e,t,o,y,p,g,b,E,w,S,L=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},T=new s,O=new s,j=new i,A=!1,x=!1,q={},I={detail:{timer:this}};function P(e,t){var n=O[t];return function(e,t){var n=h[e];O[e]=t,T[e]=e===l?Math.abs(t):v(t>=0?t:n-v(t,n),n)}(t,z(e,m[t])),O[t]!==n}function B(){V(),T.reset(),O.reset()}function V(){clearInterval(e),e=void 0,A=!1,x=!1}function k(n){var r;W()?(w=D(),g=R(p.target)):N(n),r=m[t],_(U(Date.now()))||(e=setInterval(C,r),A=!0,x=!1)}function D(){return U(Date.now())-O.secondTenths*m[c]*o}function C(){var e,t=U(Date.now());(e=M())[c]&&K("secondTenthsUpdated",I),e[u]&&K("secondsUpdated",I),e[a]&&K("minutesUpdated",I),e[d]&&K("hoursUpdated",I),e[l]&&K("daysUpdated",I),y(I.detail.timer),_(t)&&(F(),K("targetAchieved",I))}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U(Date.now()),t=o>0?e-w:w-e,n={};return n[c]=P(t,c),n[u]=function(e){return P(e,u)}(t),n[a]=function(e){return P(e,a)}(t),n[d]=function(e){return P(e,d)}(t),n[l]=function(e){return P(e,l)}(t),n}function U(e){return Math.floor(e/m[t])*m[t]}function _(e){return g instanceof Array&&e>=S}function N(e){var n;t=function(e){if(t=e="string"==typeof e?e:u,!(f.indexOf(t)>=0))throw new Error("Error in precision parameter: ".concat(e," is not a valid value"));var t;return e}((e=e||{}).precision),y="function"==typeof e.callback?e.callback:function(){},E=!0===e.countdown,o=!0===E?-1:1,"object"===r(e.startValues)?(n=e.startValues,b=H(n),T.secondTenths=b[0],T.seconds=b[1],T.minutes=b[2],T.hours=b[3],T.days=b[4],O=$(b,O)):b=null,w=D(),M(),"object"===r(e.target)?g=R(e.target):E?(e.target={seconds:0},g=R(e.target)):g=null,q={precision:t,callback:y,countdown:"object"===r(e)&&!0===e.countdown,target:g,startValues:b},p=e}function H(e){var t;if("object"===r(e))if(e instanceof Array){if(5!==e.length)throw new Error("Array size not valid");t=e}else{for(var n in e)if(f.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));t=[e.secondTenths||0,e.seconds||0,e.minutes||0,e.hours||0,e.days||0]}t=t.map((function(e){return parseInt(e,10)}));var o=t[0],s=t[1]+z(o,10),i=t[2]+z(s,60),c=t[3]+z(i,60),u=t[4]+z(c,24);return t[0]=o%10,t[1]=s%60,t[2]=i%60,t[3]=c%24,t[4]=u,t}function z(e,t){var n=e/t;return n<0?Math.ceil(n):Math.floor(n)}function R(e){if(e){var t=$(g=H(e));return S=w+t.secondTenths*m[c]*o,g}}function $(e,t){var n=t||{};return n.days=e[4],n.hours=24*n.days+e[3],n.minutes=60*n.hours+e[2],n.seconds=60*n.minutes+e[1],n.secondTenths=10*n.seconds+e[[0]],n}function F(){B(),K("stopped",I)}function G(e,t){j.on(e,t)}function J(e,t){j.removeListener(e,t)}function K(e,t){j.emit(e,t)}function Q(){return A}function W(){return x}N(L),void 0!==this&&(this.start=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=n(n({},L),e),Q()||(k(e),K("started",I))},this.pause=function(){V(),x=!0,K("paused",I)},this.stop=F,this.reset=function(){B(),k(p),K("reset",I)},this.isRunning=Q,this.isPaused=W,this.getTimeValues=function(){return T},this.getTotalTimeValues=function(){return O},this.getConfig=function(){return q},this.addEventListener=G,this.on=G,this.removeEventListener=J,this.removeAllEventListeners=function(e){j.removeAllListeners(e)},this.off=J)}e.Timer=y,e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}(677)})();