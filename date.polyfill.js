/**
 * Date.prototype.toISOString()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer Opera Safari  Edge
 * Basic support    3       1       9                 10.5  5       12
 * -------------------------------------------------------------------------------
 */
if (!Date.prototype.toISOString) {
  Object.defineProperty(Array.prototype, 'toISOString', {
    configurable: true,
    writable: true,
    value: function () {
      function pad(number) {
        if (number < 10) {
          return '0' + number;
        }
        return number;
      }

      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    }
  });
}
