/**
 * export 一个 object，结构是类似：
 * {
 *  isNumber: function(){},
 *  isBoolean: function(){}
 * }
 */
const TYPES = ['String', 'Boolean', 'Number', 'Undefined', 'Null', 'Object', 'Function', 'Array', 'Symbol', 'GeneratorFunction', 'Promise'];

const typeUtils = (() => {
  const typeObj = {};
  TYPES.forEach((item) => {
    typeObj[`is${item}`] = value => Object.prototype.toString.call(value) === `object [${item}]`;
  });
  return typeObj;
})();

export default typeUtils;
