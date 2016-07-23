export default {
  null: '',
  string: input => input,
  number: input => input.toString(),
  undefined: '',
  boolean: input => input === true ? 'true' : 'false'
};
