# Coerce

Configurable utility for coercing values.

[![npm](https://img.shields.io/npm/v/@inlinemanual/coerce.svg?maxAge=2592000)](https://www.npmjs.com/package/@InlineManual/coerce)
[![npm](https://img.shields.io/github/license/InlineManual/coerce.svg?maxAge=2592000)](https://github.com/InlineManual/coerce/blob/master/LICENSE)
[![David](https://img.shields.io/david/InlineManual/coerce.svg?maxAge=2592000)](https://david-dm.org/InlineManual/coerce)
[![Travis](https://img.shields.io/travis/InlineManual/coerce.svg?maxAge=2592000)](https://travis-ci.org/InlineManual/coerce)

## How to use

Install the library via NPM:

```shell
npm install @InlineManual/coerce --save
```

Then use in your project like this:

```javascript
import constructCoertor from 'coerce';
```

You can use predefined coercion configs:

```javascript
var coerceText = constructCoertor('text');

coerceText();      // "" (empty string)
coerceText('aaa'); // "aaa"
coerceText(123);   // "123" (number converted to string)
coerceText(true);  // "true"
```

Or you can define your own coercion config:

```javascript
var coerceCustom = constructCoertor({
  number: 'some number',
  text: function (input) {return 'aaa' + input;}
});

// if value is any other type than function, it will be returned for
// that type
coerceCustom(123); // "some number"

// function will be used to transform the input value
coerceCustom('bbb'); // "aaabbb"

// if value for any type is not defined, `null` will be used
coerceCustom(true); // null
```

## Predefined coercion types

### array

- Converts `null` and `unefined` to an empty array (`[]`).
- Leaves `array` unchanged.

### date

Used to handle timestamps.

- Leaves `number` unchanged.
- Converts `now` to current timestamp.
- Converts strings like `-1 hour` to relative timestamp. See [`parse-relative-time`](https://github.com/fczbkk/parse-relative-time#readme) for more details.

### element

- Treats `string` as CSS selector, returns first matched element (if any).
- Returns `object` unchanged.

### empty

- Converts `undefined` to `true`.
- Converts `null` to `true`.
- Converts `array` to `true` if empty, otherwise `false`.
- Converts `string` to `true` if empty, otherwise `false`.
- Converts `number` to `true` if value is `0`, otherwise `false`.
- Converts `boolean` to `true` if `false`, otherwise `false`. (Yeah, I know this is a bit confusing, but if you think about it, it makes sense.)
- Converts `object` to `true` if it has no keys (e.g. `{}`), otherwise `false`.
- Converts `function` to false.

### acceptNumber

Same as `empty`, but always converts `number` to `false`.

### rejectNumber

Same as `empty`, but always converts `number` to `true`.

### number

- Leaves `number` unchanged.
- Converts `undefined` to `0`.
- Converts `null` to `0`.
- Converts `false` to `0`, `true` to `1`.
- `string`
  - If empty, converts to `0`.
  - If it is possible to parse the string to number, returns parsed number.
  - Otherwise returns `null`.

### text

- Leaves `string` unchanged.
- Converts `undefined` to `""` (empty string).
- Converts `null` to `""` (empty string).
- Converts `number` to string.
- Converts `false` to `"false"`, `true` to `"true"` (textual representation).

## Documentation

### constructCoertor

Constructs function that will coerce any input according to config.

**Parameters**

-   `config` **\[([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [coercionConfig](#coercionconfig))]** Identifier of pre-made coercion config (string) or custom config (object).

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**

### coercionConfigItem

**Parameters**

-   `config`   (optional, default `{}`)

### coercionConfig

**Parameters**

-   `config`   (optional, default `{}`)

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/InlineManual/coerce/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

Coerce is published under the [MIT license](https://github.com/InlineManual/coerce/blob/master/LICENSE).
