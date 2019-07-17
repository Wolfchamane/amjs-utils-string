const { equal, throws } = require('assert');
const stringify = require('../../src/stringify');

(function ()
{
    [
        {
            value       : 'text',
            expected    : 'text'
        },
        {
            value       : '',
            expected    : ''
        },
        {
            value       : 1,
            expected    : '1'
        },
        {
            value       : true,
            expected    : 'true'
        },
        {
            value       : {},
            expected    : JSON.stringify({})
        },
        {
            value       : [],
            expected    : JSON.stringify([])
        }
    ].forEach(
        config =>
            equal(stringify(config.value) === config.expected, true,
                `@amjs/utils > stringify > value "${config.value}" is returned as "${config.expected}"`));

    throws(() => stringify(null), Error, '@amjs/utils > stringify > null value throws error');
    throws(() => stringify(), Error, '@amjs/utils > stringify > undefined value throws error');
})();
