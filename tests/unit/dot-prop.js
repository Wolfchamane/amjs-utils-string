const { equal } = require('assert');
const dotProp = require('../../src/dot-prop');

(function ()
{
    const context = {
        other   : {
            key : 'value'
        }
    };

    equal(dotProp(context, 'other.key') === 'value', true,
        '@amjs/utils > dotProp > Returns the value of a inner property');

    equal(dotProp(context, 'other.key.value') === undefined, true,
        '@amjs/utils > dotProp > Returns undefined for non existing property');

    dotProp(context, 'other.key', 'foo');
    equal(context.other.key === 'foo', true,
        '@amjs/utils > dotProp > Assigns new value');

    equal(dotProp() === undefined, true, '@amjs/utils > dotProp > By default returns "undefined"');
})();
