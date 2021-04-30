/**
 * Int8Array.prototype.from
 * version 0.0.0
 * Browser Compatibility:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from#browser_compatibility
 */
if (!Int8Array.prototype.from) {
  (function () {
    Int8Array.prototype.from = function (obj, func, thisObj) {

      var typedArrayClass = Int8Array.prototype;
      if (typeof this !== 'function') {
        throw new TypeError('# is not a constructor');
      }
      if (this.prototype !== typedArrayClass) {
        throw new TypeError('this is not a typed array.');
      }

      func = func || function (elem) {
        return elem;
      };

      if (typeof func !== 'function') {
        throw new TypeError('specified argument is not a function');
      }

      obj = Object(obj);
      if (!obj['length']) {
        return new this(0);
      }
      var copy_data = [];
      for (var i = 0; i < obj.length; i++) {
        copy_data.push(obj[i]);
      }

      copy_data = copy_data.map(func, thisObj);

      var typed_array = new this(copy_data.length);
      for (var i = 0; i < typed_array.length; i++) {
        typed_array[i] = copy_data[i];
      }
      return typed_array;
    }
  })();
}