/**
 * window.requestIdleCallback()
 * version 0.0.0
 * Browser Compatibility:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback#browser_compatibility
 */
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function (cb) {
    var start = Date.now();
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };
}


/**
* window.cancelIdleCallback()
* version 0.0.0
* Browser Compatibility:
* https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelIdleCallback#browser_compatibility
*/
if (!requestIdleCallback) {
  window.cancelIdleCallback = function (id) {
    clearTimeout(id);
  };
}