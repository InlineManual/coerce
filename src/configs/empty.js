const default_rules = {
  null: true,
  array: input => input.length === 0,
  string: input => input === '',
  number: input => input === 0,
  undefined: true,
  boolean: input => !input,
  object: input => Object.keys(input).length === 0,
  function: false
};


const accept_number_rules = Object.assign({}, default_rules, {
  number: false
});


const reject_number_rules = Object.assign({}, default_rules, {
  number: true
});


export default default_rules;
export const acceptNumber = accept_number_rules;
export const rejectNumber = reject_number_rules;
