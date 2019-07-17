const { equal, throws } = require('assert');
const capitalize = require('../../src/capitalize');

(function ()
{
    equal(capitalize('hello') === 'Hello', true,
        '@amjs/utils > capitalize > Turns "hello" into "Hello"');
    equal(capitalize() === '', true,
        '@amjs/utils > capitalize > Empty string is not transformed');
    equal(capitalize({ key : 'value' }) === '{"key":"value"}', true,
        '@amjs/utils > capitalize > Object are NOT transformed');
    throws(() => capitalize(null), Error,
        '@amjs/utils > capitalize > throws an error for "null" value');
    equal(capitalize(undefined), '',
        '@amjs/utils > capitalize > "undefined" value is treated as empty string"');
})();
