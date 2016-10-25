export default {
  null: false,
  array: function array(input) {
    return input.length !== 0;
  },
  string: function string(input) {
    return input !== '';
  },
  number: function number(input) {
    return input !== 0;
  },
  undefined: false,
  boolean: function boolean(input) {
    return input;
  },
  object: function object(input) {
    return Object.keys(input).length !== 0;
  },
  function: function _function(input) {
    return !!input();
  }
};