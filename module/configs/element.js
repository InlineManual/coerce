import { safeQuerySelector } from 'safe-query-selector';

export default {
  string: function string(input) {
    return safeQuerySelector(input);
  },
  object: function object(input) {
    return input;
  }
};