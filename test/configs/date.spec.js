import constructCoercer from './../../src';

const coerce = constructCoercer('date');

describe('Coercion: date', function () {

  it('coerces undefined => null', function () {
    expect(coerce(undefined)).toEqual(null);
  });

  it('coerces null => null', function () {
    expect(coerce(null)).toEqual(null);
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

  it('coerces number 0 => 0', function () {
    expect(coerce(0)).toEqual(0);
  });

  it('coerces number 123 => null', function () {
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

  it('coerces "now" to current timestamp', function () {
    const now = (new Date).getTime();
    expect(coerce('now')).toEqual(now);
  });

  it('coerces "2 hours" to timestamp of 2 hours in the future', function () {
    const now = (new Date).getTime();
    const expectation = now + (1000 * 60 * 60 * 2);
    expect(coerce('2 hours')).toEqual(expectation);
  });

  it('coerces "-2 hours" to timestamp of 2 hours in the past', function () {
    const now = (new Date).getTime();
    const expectation = now - (1000 * 60 * 60 * 2);
    expect(coerce('-2 hours')).toEqual(expectation);
  });

});
