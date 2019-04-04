/**
 * String.fromCharCode()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.fromCodePoint()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41  	29      (No)	            28	    10      ?
 * -------------------------------------------------------------------------------
 */
if (!String.fromCodePoint) {
  (function() {
    var defineProperty = (function() {
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    })();
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function() {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return '';
      }
      var result = '';
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (
          !isFinite(codePoint) ||
          codePoint < 0 ||
          codePoint > 0x10ffff ||
          floor(codePoint) != codePoint
        ) {
          throw RangeError('Invalid code point: ' + codePoint);
        }
        if (codePoint <= 0xffff) {
          // BMP code point
          codeUnits.push(codePoint);
        } else {
          codePoint -= 0x10000;
          highSurrogate = (codePoint >> 10) + 0xd800;
          lowSurrogate = (codePoint % 0x400) + 0xdc00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, 'fromCodePoint', {
        value: fromCodePoint,
        configurable: true,
        writable: true
      });
    } else {
      String.fromCodePoint = fromCodePoint;
    }
  })();
}

/**
 * String.anchor()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	1.0     (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.charAt()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.charCodeAt()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	1.0     (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.codePointAt()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41  	29      11	                28	    10      ?
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict';
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      var index = position ? Number(position) : 0;
      if (index != index) {
        index = 0;
      }
      if (index < 0 || index >= size) {
        return undefined;
      }
      var first = string.charCodeAt(index);
      var second;
      if (first >= 0xd800 && first <= 0xdbff && size > index + 1) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      return first;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String.prototype, 'codePointAt', {
        value: codePointAt,
        configurable: true,
        writable: true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  })();
}

/**
 * String.concat()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.endsWith()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41  	17      (No)	            (No)	9       (Yes)
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (
      typeof position !== 'number' ||
      !isFinite(position) ||
      Math.floor(position) !== position ||
      position > subjectString.length
    ) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

/**
 * String.includes()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41  	40      (No)	            (No)	9       (Yes)
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

/**
 * String.indexOf()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.lastIndexOf()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.link()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	1.0    (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.localeCompare()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	1.0    (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.match()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.normalize()
 * version 0.0.1
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	34   	31      (No)	            (Yes)	10      (Yes)
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.normalize) {
  // need polyfill
}

/**
 * String.padEnd()
 * version 1.0.1
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	57   	48      (No)	            44   	10      15
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(this) + padString.slice(0, targetLength);
    }
  };
}

/**
 * String.padStart()
 * version 1.0.1
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	57   	51      (No)	            44   	10      15
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

/**
 * String.repeat()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41   	24      (No)	            (Yes)   9       (Yes)
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError("can't convert " + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    if (str.length * count >= 1 << 28) {
      throw new RangeError(
        'repeat count must not overflow maximum string size'
      );
    }
    var rpt = '';
    for (;;) {
      if ((count & 1) == 1) {
        rpt += str;
      }
      count >>>= 1;
      if (count == 0) {
        break;
      }
      str += str;
    }
    return rpt;
  };
}

/**
 * String.search()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.slice()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.split()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.startsWith()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41   	17      (No)	            28   	9       (Yes)
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

/**
 * String.substr()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.substring()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.toLocaleLowerCase()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.toLocaleUpperCase()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.toLowerCase()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.toString()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.toUpperCase()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)	            (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.trim()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	3.5     9    	            10.5	5       ?
 * -------------------------------------------------------------------------------
 */
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

/**
 * String.trimLeft()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	3.5     (No)    	        ?	    ?       ?
 * -------------------------------------------------------------------------------
 */

/**
 * String.trimRight()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	3.5     (No)    	        ?	    ?       ?
 * -------------------------------------------------------------------------------
 */

/**
 * String.valueOf()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	(Yes)  	(Yes)   (Yes)    	        (Yes)	(Yes)   (Yes)
 * -------------------------------------------------------------------------------
 */

/**
 * String.raw
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	41   	34      (No)  	            (No)	10      ?
 * -------------------------------------------------------------------------------
 */
