import {getType} from './../src/utilities';


describe('utilities', function () {

  describe('getType', function () {

    it('should detect undefined', function () {
      expect(getType(undefined)).toEqual('undefined');
    });

    it('should detect null', function () {
      expect(getType(null)).toEqual('null');
    });

    it('should detect number', function () {
      expect(getType(123)).toEqual('number');
    });

    it('should detect string', function () {
      expect(getType('aaa')).toEqual('string');
    });

    it('should detect array', function () {
      expect(getType([])).toEqual('array');
    });

    it('should detect boolean', function () {
      expect(getType(true)).toEqual('boolean');
      expect(getType(false)).toEqual('boolean');
    });

    it('should detect object', function () {
      expect(getType({})).toEqual('object');
    });

    it('should detect function', function () {
      expect(getType(function () {})).toEqual('function');
    });

  });

});
