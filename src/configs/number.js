// optional negative sign, max one
// optional numbers
// optional decimal sign, max one
// optional decimal numbers
const number_re = /^-?\d*\.?\d*$/;


function handleString (input) {
  if (input === '') {
    return 0;
  } else if (number_re.test(input)) {
    return parseFloat(input);
  }
  return null;
}


export default {
  null: 0,
  undefined: 0,
  string: handleString,
  number: input => input,
  boolean: input => input === true ? 1 : 0
};
