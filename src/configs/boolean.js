export default {
  null: false,
  array: input => input.length !== 0,
  string: input => input !== '',
  number: input => input !== 0,
  undefined: false,
  boolean: input => input,
  object: input => Object.keys(input).length !== 0,
  function: input => !!input()
};
