;(function() {
  'use strict';
  var vendors = ['webkit', 'moz'];
  for(var i = 0; i < vendors.length && !window.requestAnimationFrame; i++) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }
  
  if (
      /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
      || !window.requestAnimationFrame
      || !window.cancelAnimationFrame
    ) {
    var lastTime = 0;
    window.requestAnimationFrame = function(callback) {
      var now = new Date().getTime();
      var nextTime = Math.max(lastTime + 16, now);
      lastTime = nextTime;
      return setTimeout(function() { callback(lastTime); }, nextTime - now);
    }
    window.cancelAnimationFrame = window.clearTimeout
  }
})()