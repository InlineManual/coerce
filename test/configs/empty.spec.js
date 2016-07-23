import constructCoercer from './../../src';

describe('Coercion: empty', function () {

  const coerce = constructCoercer('empty');

  it('coerces undefined => true', function () {
    expect(coerce(undefined)).toEqual(true);
  });

  it('coerces null => true', function () {
    expect(coerce(null)).toEqual(true);
  });

  it('coerces true => false', function () {
    expect(coerce(true)).toEqual(false);
  });

  it('coerces false => true', function () {
    expect(coerce(false)).toEqual(true);
  });

  it('coerces empty string "" => true', function () {
    expect(coerce('')).toEqual(true);
  });

  it('coerces string "aaa" => false', function () {
    expect(coerce('aaa')).toEqual(false);
  });

  it('coerces number 0 => true', function () {
    expect(coerce(0)).toEqual(true);
  });

  it('coerces number 123 => false', function () {
    expect(coerce(123)).toEqual(false);
  });

  it('coerces empty array [] => true', function () {
    expect(coerce([])).toEqual(true);
  });

  it('coerces array [aaa] => false', function () {
    expect(coerce(['aaa'])).toEqual(false);
  });

  it('coerces empty object {} => true', function () {
    expect(coerce({})).toEqual(true);
  });

  it('coerces object {aaa: bbb} => false', function () {
    expect(coerce({aaa: 'bbb'})).toEqual(false);
  });

  it('coerces function(){} => false', function () {
    expect(coerce(function () {})).toEqual(false);
  });

});

describe('Coercion: empty - accept number', function () {

  const coerce = constructCoercer('acceptNumber');

  it('coerces number 0 => false', function () {
    expect(coerce(0)).toEqual(false);
  });

  it('coerces number 123 => false', function () {
    expect(coerce(123)).toEqual(false);
  });

});


describe('Coercion: empty - reject number', function () {

  const coerce = constructCoercer('rejectNumber');

  it('coerces number 0 => true', function () {
    expect(coerce(0)).toEqual(true);
  });

  it('coerces number 123 => true', function () {
    expect(coerce(123)).toEqual(true);
  });

});


