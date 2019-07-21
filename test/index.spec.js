import typeUtils from '../src/index';

test('typeUtils is object', () => {
  expect(typeUtils.isObject(typeUtils));
});

test('typeUtils.isString works ', () => {
  const f = () => {};
  const g = function* a() { yield 1; };
  expect(typeUtils.isString(''));
  expect(typeUtils.isString(' '));
  expect(typeUtils.isString('aaa'));
  expect(typeUtils.isString(false)).toBeFalsy();
  expect(typeUtils.isString(1)).toBeFalsy();
  expect(typeUtils.isString({})).toBeFalsy();
  expect(typeUtils.isString(undefined)).toBeFalsy();
  expect(typeUtils.isString(null)).toBeFalsy();
  expect(typeUtils.isString(Symbol(''))).toBeFalsy();
  expect(typeUtils.isString(f)).toBeFalsy();
  expect(typeUtils.isString(g)).toBeFalsy();
  expect(typeUtils.isString(Promise.resolve())).toBeFalsy();
});

test('typeUtils.isObject works ', () => {
  const f = () => {};
  const g = function* a() { yield 1; };
  expect(typeUtils.isString({}));
  expect(typeUtils.isString({ name: '' }));
  expect(typeUtils.isString('')).toBeFalsy();
  expect(typeUtils.isString(false)).toBeFalsy();
  expect(typeUtils.isString(1)).toBeFalsy();
  expect(typeUtils.isString({})).toBeFalsy();
  expect(typeUtils.isString(undefined)).toBeFalsy();
  expect(typeUtils.isString(null)).toBeFalsy();
  expect(typeUtils.isString(Symbol(''))).toBeFalsy();
  expect(typeUtils.isString(f)).toBeFalsy();
  expect(typeUtils.isString(g)).toBeFalsy();
  expect(typeUtils.isString(Promise.resolve())).toBeFalsy();
});
