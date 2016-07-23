import constructCoercer from './../../src';

const coerce = constructCoercer('array');

describe('Coercion: array to ', function () {

  it('coerces undefined => []', function () {
    expect(coerce(undefined)).toEqual([]);
  });

  it('coerces null => null', function () {
    expect(coerce(null)).toEqual([]);
  });

  it('coerces true => null', function () {
    expect(coerce(true)).toEqual(null);
  });

  it('coerces false => null', function () {
    expect(coerce(false)).toEqual(null);
  });

  it('coerces empty string "" => null', function () {
    expect(coerce('')).toEqual(null);
  });

  it('coerces string "aaa" => null', function () {
    expect(coerce('aaa')).toEqual(null);
  });

  it('coerces number 0 => null', function () {
    expect(coerce(0)).toEqual(null);
  });

  it('coerces number 123 => null', function () {
    expect(coerce(123)).toEqual(null);
  });

  it('coerces empty array [] => null', function () {
    expect(coerce([])).toEqual([]);
  });

  it('coerces array [aaa] => [aaa]', function () {
    expect(coerce(['aaa'])).toEqual(['aaa']);
  });

  it('coerces empty object {} => null ', function () {
    expect(coerce({})).toEqual(null);
  });

  it('coerces object {aaa: bbb} => null', function () {
    expect(coerce({aaa: 'bbb'})).toEqual(null);
  });

  it('coerces function(){} => null', function () {
    expect(coerce(function () {})).toEqual(null);
  });

});
