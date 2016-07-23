import constructCoercer from './../../src';


describe('Coercion config', function () {

  it('should convert undefined type to `null`', function () {
    const coerce = constructCoercer({});
    expect(coerce('aaa')).toEqual(null);
  });

  it('should return specific value', function () {
    const coerce = constructCoercer({
      string: 'aaa'
    });
    expect(coerce('bbb')).toEqual('aaa');
  });

  it('should use function to convert value', function () {
    const coerce = constructCoercer({
      string: function (input) {return 'aaa' + input;}
    });
    expect(coerce('bbb')).toEqual('aaabbb');
  });

});

  describe('Coercion config: custom empty', function () {

  const coerce = constructCoercer();

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

  it('coerces number 0 => null', function () {
    expect(coerce(0)).toEqual(null);
  });

  it('coerces number 123 => null', function () {
    expect(coerce(123)).toEqual(null);
  });

  it('coerces empty array [] => null', function () {
    expect(coerce([])).toEqual(null);
  });

  it('coerces array [aaa] => [aaa]', function () {
    expect(coerce(['aaa'])).toEqual(null);
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
