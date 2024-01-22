(()=>{var t={677:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});let o=new(r(n(543)).default);const s={minutes:2};o.start({countdown:!0,startValues:s}),o.addEventListener("secondsUpdated",(function(t){if(document.querySelector("#gettingvalue")){let t=document.querySelector(".minutes"),e=document.querySelector(".seconds");t.textContent=o.getTimeValues().minutes.toString(),e.textContent=o.getTimeValues().seconds.toString()}i(),setInterval((()=>{l++;const t=l/60,e=t/60;d(c,t),d(a,e)}),1e3)}));const i=()=>{let t=o.getTotalTimeValues().seconds;u(t)},u=t=>{const e=document.querySelector(".progress"),n=document.querySelector(".nav"),r=n.querySelector(".nav > h1"),o=document.querySelector(".menu-icon");if(console.log(t),e&&n&&r&&o){n.offsetHeight;let r=(60*s.minutes-t)/(60*s.minutes)*100;console.log(r),e.style.height=`${r}%`}0===s.minutes&&(e.style.height="100%")},c=document.getElementById("second-hand"),a=document.getElementById("minute-hand");document.getElementById("hour-hand");let f=o.getTotalTimeValues().seconds;console.log(f);let l=0;function d(t,e){t.style.setProperty("--rotate",""+360*e)}},543:function(t,e){!function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){var n,o,s;n=t,o=e,s=r[e],(o=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[o]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){var r,o="";if((t="number"==typeof t?String(t):t).length>e)return t;for(r=0;r<e;r+=1)o+=String(n);return(o+t).slice(-o.length)}function s(){this.reset()}function i(){this.events={}}s.prototype.toString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var r,s=[];for(r=0;r<t.length;r+=1)void 0!==this[t[r]]&&("secondTenths"===t[r]?s.push(this[t[r]]):s.push(o(this[t[r]],n,"0")));return s.join(e)},s.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0},i.prototype.on=function(t,e){var n=this;return Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(e),function(){return n.removeListener(t,e)}},i.prototype.removeListener=function(t,e){if(Array.isArray(this.events[t])){var n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}},i.prototype.removeAllListeners=function(t){t?Array.isArray(this.events[t])&&(this.events[t]=[]):this.events={}},i.prototype.emit=function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];Array.isArray(this.events[t])&&this.events[t].forEach((function(t){return t.apply(e,r)}))};var u="secondTenths",c="seconds",a="minutes",f="hours",l="days",d=[u,c,a,f,l],h={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},v={secondTenths:10,seconds:60,minutes:60,hours:24};function p(t,e){return(t%e+e)%e}function y(){var t,e,o,y,m,g,b,w,O,S,T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},j=new s,A=new s,E=new i,P=!1,V=!1,x={},D={detail:{timer:this}};function L(t,e){var n=A[e];return function(t,e){var n=v[t];A[t]=e,j[t]=t===l?Math.abs(e):p(e>=0?e:n-p(e,n),n)}(e,N(t,h[e])),A[e]!==n}function _(){q(),j.reset(),A.reset()}function q(){clearInterval(t),t=void 0,P=!1,V=!1}function I(n){var r;W()?(O=M(),g=R(m.target)):z(n),r=h[e],C(B(Date.now()))||(t=setInterval(U,r),P=!0,V=!1)}function M(){return B(Date.now())-A.secondTenths*h[u]*o}function U(){var t,e=B(Date.now());(t=k())[u]&&K("secondTenthsUpdated",D),t[c]&&K("secondsUpdated",D),t[a]&&K("minutesUpdated",D),t[f]&&K("hoursUpdated",D),t[l]&&K("daysUpdated",D),y(D.detail.timer),C(e)&&(F(),K("targetAchieved",D))}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B(Date.now()),e=o>0?t-O:O-t,n={};return n[u]=L(e,u),n[c]=function(t){return L(t,c)}(e),n[a]=function(t){return L(t,a)}(e),n[f]=function(t){return L(t,f)}(e),n[l]=function(t){return L(t,l)}(e),n}function B(t){return Math.floor(t/h[e])*h[e]}function C(t){return g instanceof Array&&t>=S}function z(t){var n;e=function(t){if(e=t="string"==typeof t?t:c,!(d.indexOf(e)>=0))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));var e;return t}((t=t||{}).precision),y="function"==typeof t.callback?t.callback:function(){},w=!0===t.countdown,o=!0===w?-1:1,"object"===r(t.startValues)?(n=t.startValues,b=H(n),j.secondTenths=b[0],j.seconds=b[1],j.minutes=b[2],j.hours=b[3],j.days=b[4],A=$(b,A)):b=null,O=M(),k(),"object"===r(t.target)?g=R(t.target):w?(t.target={seconds:0},g=R(t.target)):g=null,x={precision:e,callback:y,countdown:"object"===r(t)&&!0===t.countdown,target:g,startValues:b},m=t}function H(t){var e;if("object"===r(t))if(t instanceof Array){if(5!==t.length)throw new Error("Array size not valid");e=t}else{for(var n in t)if(d.indexOf(n)<0)throw new Error("Error in startValues or target parameter: ".concat(n," is not a valid input value"));e=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}e=e.map((function(t){return parseInt(t,10)}));var o=e[0],s=e[1]+N(o,10),i=e[2]+N(s,60),u=e[3]+N(i,60),c=e[4]+N(u,24);return e[0]=o%10,e[1]=s%60,e[2]=i%60,e[3]=u%24,e[4]=c,e}function N(t,e){var n=t/e;return n<0?Math.ceil(n):Math.floor(n)}function R(t){if(t){var e=$(g=H(t));return S=O+e.secondTenths*h[u]*o,g}}function $(t,e){var n=e||{};return n.days=t[4],n.hours=24*n.days+t[3],n.minutes=60*n.hours+t[2],n.seconds=60*n.minutes+t[1],n.secondTenths=10*n.seconds+t[[0]],n}function F(){_(),K("stopped",D)}function G(t,e){E.on(t,e)}function J(t,e){E.removeListener(t,e)}function K(t,e){E.emit(t,e)}function Q(){return P}function W(){return V}z(T),void 0!==this&&(this.start=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=n(n({},T),t),Q()||(I(t),K("started",D))},this.pause=function(){q(),V=!0,K("paused",D)},this.stop=F,this.reset=function(){_(),I(m),K("reset",D)},this.isRunning=Q,this.isPaused=W,this.getTimeValues=function(){return j},this.getTotalTimeValues=function(){return A},this.getConfig=function(){return x},this.addEventListener=G,this.on=G,this.removeEventListener=J,this.removeAllEventListeners=function(t){E.removeAllListeners(t)},this.off=J)}t.Timer=y,t.default=y,Object.defineProperty(t,"__esModule",{value:!0})}(e)}},e={};!function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(677)})();