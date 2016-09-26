function constructRepeaterFunction (input) {
  return function () {
    return input;
  }
}

export default {
  null: constructRepeaterFunction,
  array: constructRepeaterFunction,
  string: constructRepeaterFunction,
  number: constructRepeaterFunction,
  undefined: constructRepeaterFunction,
  boolean: constructRepeaterFunction,
  object: constructRepeaterFunction,
  function: input => input
};
