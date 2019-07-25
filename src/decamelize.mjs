const stringify = require('./stringify.mjs');

/**
 * Transforms a camelCase text into its non-camelCase value, i.e.: 'helloWorld' -> 'hello-world'
 * @param   {String}    value   To transform
 * @param   {String}    sep     Word character separator, by default '-'
 * @return  {String}    Non-camelCase form of value
 */
module.exports = (value = '', sep = '-') =>
{
    value = stringify(value);

    let parts = [];
    let part = [];
    for (let i = value.length - 1, l = 0; i >= l; i--)
    {
        part.unshift(value[i]);
        if (/[A-Z]/.test(value[i]) && part.length)
        {
            parts.unshift(part.join('.').replace(/\./g, ''));
            part = [];
        }
    }
    if (part.length)
    {
        parts.unshift(part.join('.').replace(/\./g, ''));
    }

    return parts.join(sep).toLowerCase();
};
