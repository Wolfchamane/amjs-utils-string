const capitalize = require('./capitalize');
const stringify = require('./stringify');

/**
 * Transforms a text into its camel-case form, i.e.: 'hello-world' -> 'helloWorld'
 * @param   {String}    text    To be transformed
 * @param   {String}    sep     To add as word-clause separator
 * @return  {String}    camel-case form
 */
module.exports = (text = '', sep = '') =>
{
    text = stringify(text);

    return text
        .split(/\W/)
        .filter(p => !!p)
        .map((p, i) => (i ? capitalize(p) : p))
        .join(sep);
};
