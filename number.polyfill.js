/**
 * Number.isInteger()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    34      16      (No)                21    9       12
 * -------------------------------------------------------------------------------
 */
if (!Number.isInteger) {
  Number.isInteger = function (value) {
    return (
      typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
}
