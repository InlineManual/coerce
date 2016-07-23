/**
 * Returns type of the input. Same as `typeof`, but also detects "null" and "array".
 * @param {*} [input]
 * @returns {string}
 * @private
 */
export function getType (input) {
  if (input === null) {return 'null';}
  if (Array.isArray(input)) {return 'array';}
  return typeof input;
}


