const { equal } = require('assert');
const decamelize = require('../../src/decamelize');

(function ()
{
    equal(decamelize('helloWorld') === 'hello-world', true,
        '@amjs/utils > decamelize > transforms "helloWorld" into "hello-world"');

    equal(decamelize('helloWorld', '/') === 'hello/world', true,
        '@amjs/utils > decamelize > transforms camelCase word into character split word');

    equal(decamelize() === '', true,
        '@amjs/utils > decamelize > by default does not transform an empty text');
})();
