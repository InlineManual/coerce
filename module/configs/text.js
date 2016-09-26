export default {
  null: '',
  string: function string(input) {
    return input;
  },
  number: function number(input) {
    return input.toString();
  },
  undefined: '',
  boolean: function boolean(input) {
    return input === true ? 'true' : 'false';
  }
};