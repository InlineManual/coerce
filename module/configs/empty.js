var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var default_rules = {
  null: true,
  array: function array(input) {
    return input.length === 0;
  },
  string: function string(input) {
    return input === '';
  },
  number: function number(input) {
    return input === 0;
  },
  undefined: true,
  boolean: function boolean(input) {
    return !input;
  },
  object: function object(input) {
    return Object.keys(input).length === 0;
  },
  function: false
};

var accept_number_rules = _extends({}, default_rules, {
  number: false
});

var reject_number_rules = _extends({}, default_rules, {
  number: true
});

export default default_rules;
export var acceptNumber = accept_number_rules;
export var rejectNumber = reject_number_rules;