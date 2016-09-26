import parseRelativeTime from 'parse-relative-time';

function parseDateKeyword(input) {
  var now = new Date().getTime();

  if (input === 'now') {
    return now;
  }

  var distance = parseRelativeTime(input);

  if (distance !== null) {
    return now + distance;
  }

  return null;
}

export default {
  number: function number(input) {
    return input;
  },
  string: parseDateKeyword
};