const stringify = require('./stringify');

/**
 * Transforms a text into itself but with first character in upper case, i.e: 'hello' -> 'Hello'
 * @param   {String}    text    To be transformed
 * @return  {String}    Capitalized text
 */
module.exports = (text = '') =>
{
    text = stringify(text);

    return `${text.charAt(0).toUpperCase()}${text.substr(1)}`;
};
