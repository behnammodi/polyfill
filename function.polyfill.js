
'use strict';

/**
 * Function.prototype.displayName
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	  No      13      No                  No    No      No
 * -------------------------------------------------------------------------------
 */

/**
 * Function.prototype.name
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support	  15      1       No                  10.5  6       14
 * ------------------------------------------------------------------------
 */
if (Function.prototype.name !== "") {
  var rx = /function\ ([\w$]+)\(/;
  Object.defineProperty(Function.prototype, "name", {
    get: function () {
      var match = rx.exec(this + "");
      return match && match.length === 2 ? match[1] : "";
    },
    configurable: true,
  });
}
