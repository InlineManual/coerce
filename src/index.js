import {getType} from './utilities';

// configs
import config_array from './configs/array';
import config_date from './configs/date';
import config_element from './configs/element';
import config_empty from './configs/empty';
import {acceptNumber, rejectNumber} from './configs/empty';
import config_number from './configs/number';
import config_text from './configs/text';
import config_function from './configs/function';
import config_boolean from './configs/boolean';

const configs = {
  array: config_array,
  date: config_date,
  element: config_element,
  empty: config_empty,
  acceptNumber: acceptNumber,
  rejectNumber: rejectNumber,
  number: config_number,
  text: config_text,
  string: config_text,
  function: config_function,
  boolean: config_boolean
};


/**
 * @typedef {*} coercionConfigItem - If Function, it will receive the input as first parameter and the return value will be used as transformed value. Any other type will be used as transformed value as-is.
 */


/**
 * @typedef {Object} coercionConfig - Each property represents a type. Input will be handled by an item matching its type.
 * @property {coercionConfigItem} [array]
 * @property {coercionConfigItem} [boolean]
 * @property {coercionConfigItem} [function]
 * @property {coercionConfigItem} [null]
 * @property {coercionConfigItem} [number]
 * @property {coercionConfigItem} [object]
 * @property {coercionConfigItem} [string]
 * @property {coercionConfigItem} [undefined]
 */


/**
 * Constructs function that will coerce any input according to config.
 * @name constructCoertor
 * @param {string|coercionConfig} [config] - Identifier of pre-made coercion config (string) or custom config (object).
 * @returns {Function}
 */
export default function (config = {}) {
  if (typeof config === 'string') {
    config = configs[config] || {};
  }

  return function (input) {
    const handler = config[getType(input)];
    switch (typeof handler) {
      case 'function': {
        return handler(input);
      }
      case 'undefined': {
        return null;
      }
      default: {
        return handler;
      }
    }
  }
}
