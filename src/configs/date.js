import parseRelativeTime from 'parse-relative-time';


function parseDateKeyword (input) {
  const now = (new Date).getTime();

  if (input === 'now') {
    return now;
  }

  const distance = parseRelativeTime(input);

  if (distance !== null) {
    return now + distance;
  }

  return null;
}


export default {
  number: input => input,
  string: parseDateKeyword
};
