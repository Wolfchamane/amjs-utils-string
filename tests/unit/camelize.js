const { equal, throws } = require('assert');
const camelize = require('../../src/camelize');

(function ()
{
    equal(camelize('hello-world') === 'helloWorld', true,
        '@amjs/utils > camelize > Turns "hello-world" into "helloWorld"');
    equal(camelize() === '', true,
        '@amjs/utils > camelize > Empty string is not transformed');
    equal(camelize({ key : 'value', other :  { key : 'value' } }) === 'keyValueOtherKeyValue',
        true,
        '@amjs/utils > camelize > Objects are transformed');
    throws(() => camelize(null), Error,
        '@amjs/utils > camelize > throws an error for "null" value');
    equal(camelize(undefined), '',
        '@amjs/utils > camelize > "undefined" value is treated as empty string"');
})();
