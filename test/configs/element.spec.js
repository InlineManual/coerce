import constructCoercer from './../../src';

const coerce = constructCoercer('element');

describe('Coercion: text', function () {

  let elm;

  beforeEach(function () {
    elm = document.body.appendChild(document.createElement('div'));
    elm.className = 'test';
  });

  afterEach(function () {
    elm.parentNode.removeChild(elm);
  });

  it('selector', function () {
    expect(coerce('.test')).toEqual(elm);
  });

  it('element reference', function () {
    expect(coerce(elm)).toEqual(elm);
  });

});
