var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Returns type of the input. Same as `typeof`, but also detects "null" and "array".
 * @param {*} [input]
 * @returns {string}
 * @private
 */
export function getType(input) {
  if (input === null) {
    return 'null';
  }
  if (Array.isArray(input)) {
    return 'array';
  }
  return typeof input === 'undefined' ? 'undefined' : _typeof(input);
}