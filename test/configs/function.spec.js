import constructCoercer from './../../src';

const coerce = constructCoercer('function');

describe('Coercion: function', function () {

  it('returns function returning input', function () {
    const inputs = [
      undefined,
      null,
      true,
      false,
      '', // empty string
      'aaa',
      0,
      123,
      [], // empty array
      ['aaa'],
      {}, // empty object
      {aaa: 'bbb'}
    ];
    inputs.forEach(function (input) {
      console.log('input', input);
      const result = coerce(input);
      expect(result()).toEqual(input);
    });
  });

  it('coerces function', function () {
    const fn = function () {return 'aaa';};
    const result = coerce(fn);
    expect(result()).toEqual('aaa');
  });

});
