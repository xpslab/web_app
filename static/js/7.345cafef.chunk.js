(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[7],{1027:function(t,e,n){"use strict";function i(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}}function a(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}}function r(t,e){function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}function o(t,e,n){var i;return function(){0<=e.value&&(n||h.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),!e.delta&&void 0!==i||(i=e.value,t(e)))}}function u(){return S<0&&(S=y(),E(),l((function(){setTimeout((function(){S=y(),E()}),0)}))),{get timeStamp(){return S}}}function c(t,e){p||(p=e,m=t,d=new Date,f(removeEventListener),s())}function s(){var t;0<=m&&m<d-T&&(t={entryType:"first-input",name:p.type,target:p.target,cancelable:p.cancelable,startTime:p.timeStamp,processingStart:p.timeStamp+m},v.forEach((function(e){e(t)})),v=[])}function f(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,b,w)}))}n.r(e),n.d(e,"getCLS",(function(){return g})),n.d(e,"getFCP",(function(){return L})),n.d(e,"getFID",(function(){return F})),n.d(e,"getLCP",(function(){return k})),n.d(e,"getTTFB",(function(){return C}));var p,m,d,v,l=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},h=new("function"==typeof WeakSet?WeakSet:Set),g=function(t,e){function n(t){t.hadRecentInput||(s.value+=t.value,s.entries.push(t),u())}var u,c,s=i("CLS",0);(c=a("layout-shift",n))&&(u=o(t,s,e),r((function(){c.takeRecords().map(n),u()})),l((function(){s=i("CLS",0),u=o(t,s,e)})))},S=-1,y=function(){return"hidden"===document.visibilityState?0:1/0},E=function(){r((function(t){t=t.timeStamp,S=t}),!0)},L=function(t,e){function n(t){"first-contentful-paint"===t.name&&(p&&p.disconnect(),t.startTime<c.timeStamp&&(s.value=t.startTime,s.entries.push(t),h.add(s),r()))}var r,c=u(),s=i("FCP"),f=performance.getEntriesByName("first-contentful-paint")[0],p=f?null:a("paint",n);(f||p)&&(r=o(t,s,e),f&&n(f),l((function(n){s=i("FCP"),r=o(t,s,e),requestAnimationFrame((function(){requestAnimationFrame((function(){s.value=performance.now()-n.timeStamp,h.add(s),r()}))}))})))},w={passive:!0,capture:!0},T=new Date,b=function(t){var e,n,i,a;function r(){c(n,i),a()}function o(){a()}t.cancelable&&(e=(1e12<t.timeStamp?new Date:performance.now())-t.timeStamp,"pointerdown"==t.type?(n=e,i=t,a=function(){removeEventListener("pointerup",r,w),removeEventListener("pointercancel",o,w)},addEventListener("pointerup",r,w),addEventListener("pointercancel",o,w)):c(e,t))},F=function(t,e){function n(t){t.startTime<c.timeStamp&&(d.value=t.processingStart-t.startTime,d.entries.push(t),h.add(d),S())}var c=u(),d=i("FID"),g=a("first-input",n),S=o(t,d,e);g&&r((function(){g.takeRecords().map(n),g.disconnect()}),!0),g&&l((function(){d=i("FID"),S=o(t,d,e),v=[],m=-1,p=null,f(addEventListener),v.push(n),s()}))},k=function(t,e){function n(t){var e=t.startTime;e<f.timeStamp&&(p.value=e,p.entries.push(t)),c()}var c,s,f=u(),p=i("LCP"),m=a("largest-contentful-paint",n);m&&(c=o(t,p,e),s=function(){h.has(p)||(m.takeRecords().map(n),m.disconnect(),h.add(p),c())},["keydown","click"].forEach((function(t){addEventListener(t,s,{once:!0,capture:!0})})),r(s,!0),l((function(n){p=i("LCP"),c=o(t,p,e),requestAnimationFrame((function(){requestAnimationFrame((function(){p.value=performance.now()-n.timeStamp,h.add(p),c()}))}))})))},C=function(t){var e=i("TTFB"),n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t,e=performance.timing,n={entryType:"navigation",startTime:0};for(t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(e.value=e.delta=n.responseStart,e.value<0)return;e.entries=[n],t(e)}catch(n){}};"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)}}}]);