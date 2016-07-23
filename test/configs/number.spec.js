import constructCoercer from './../../src';

const coerce = constructCoercer('number');

describe('Coercion: number', function () {

  it('coerces undefined => 0', function () {
    expect(coerce(undefined)).toEqual(0);
  });

  it('coerces null => 0', function () {
    expect(coerce(null)).toEqual(0);
  });

  it('coerces true => 1', function () {
    expect(coerce(true)).toEqual(1);
  });

  it('coerces false => 0', function () {
    expect(coerce(false)).toEqual(0);
  });

  it('coerces empty string "" => 0', function () {
    expect(coerce('')).toEqual(0);
  });

  it('coerces string "aaa" => null', function () {
    expect(coerce('aaa')).toEqual(null);
  });

  it('coerces string containing number "-123.456" => -123.456', function () {
    expect(coerce('-123.456')).toEqual(-123.456);
  });

  it('coerces number 0 => 0', function () {
    expect(coerce(0)).toEqual(0);
  });

  it('coerces number 123 => 123', function () {
    expect(coerce(123)).toEqual(123);
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
