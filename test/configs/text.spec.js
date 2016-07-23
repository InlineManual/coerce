import constructCoercer from './../../src';

const coerce = constructCoercer('text');

describe('Coercion: text', function () {

  it('coerces undefined => ""', function () {
    expect(coerce(undefined)).toEqual('');
  });

  it('coerces null => ""', function () {
    expect(coerce(null)).toEqual('');
  });

  it('coerces true => "true"', function () {
    expect(coerce(true)).toEqual('true');
  });

  it('coerces false => "false"', function () {
    expect(coerce(false)).toEqual('false');
  });

  it('coerces empty string "" => ""', function () {
    expect(coerce('')).toEqual('');
  });

  it('coerces string "aaa" => "aaa"', function () {
    expect(coerce('aaa')).toEqual('aaa');
  });

  it('coerces number 0 => "0"', function () {
    expect(coerce(0)).toEqual('0');
  });

  it('coerces number 123 => "123"', function () {
    expect(coerce(123)).toEqual('123');
  });

  it('coerces empty array [] => null', function () {
    expect(coerce([])).toEqual(null);
  });

  it('coerces array [aaa] => null', function () {
    expect(coerce(['aaa'])).toEqual(null);
  });

  it('coerces empty object {} => null', function () {
    expect(coerce({})).toEqual(null);
  });

  it('coerces object {aaa: bbb} => null', function () {
    expect(coerce({aaa: 'bbb'})).toEqual(null);
  });

  it('coerces function(){} => null', function () {
    expect(coerce(function () {})).toEqual(null);
  });

});
