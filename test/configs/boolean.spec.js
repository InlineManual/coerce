import constructCoercer from './../../src';

describe('Coercion: boolean', function () {

  const coerce = constructCoercer('boolean');

  it('coerces undefined => false', function () {
    expect(coerce(undefined)).toEqual(false);
  });

  it('coerces null => false', function () {
    expect(coerce(null)).toEqual(false);
  });

  it('coerces true => true', function () {
    expect(coerce(true)).toEqual(true);
  });

  it('coerces false => false', function () {
    expect(coerce(false)).toEqual(false);
  });

  it('coerces empty string "" => false', function () {
    expect(coerce('')).toEqual(false);
  });

  it('coerces string "aaa" => true', function () {
    expect(coerce('aaa')).toEqual(true);
  });

  it('coerces number 0 => false', function () {
    expect(coerce(0)).toEqual(false);
  });

  it('coerces number 123 => true', function () {
    expect(coerce(123)).toEqual(true);
  });

  it('coerces empty array [] => false', function () {
    expect(coerce([])).toEqual(false);
  });

  it('coerces array [aaa] => true', function () {
    expect(coerce(['aaa'])).toEqual(true);
  });

  it('coerces empty object {} => false', function () {
    expect(coerce({})).toEqual(false);
  });

  it('coerces object {aaa: bbb} => true', function () {
    expect(coerce({aaa: 'bbb'})).toEqual(true);
  });

  it('coerces function(){} => false', function () {
    expect(coerce(function () {})).toEqual(false);
  });

  it('coerces function(){return false;} => false', function () {
    expect(coerce(function () {return false;})).toEqual(false);
  });

  it('coerces function(){return true;} => true', function () {
    expect(coerce(function () {return true})).toEqual(true);
  });

});
