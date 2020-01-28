/**
 * Returns the text value of argument.
 * @param   {*} value   Value to be transformed
 * @return  {String}    String representation of the value
 */
module.exports = value =>
{
    if (value === null || typeof value === 'undefined')
    {
        throw new Error('@amjs/utils > stringify > cannot convert to string null or undefined value');
    }
    else if (typeof value === 'object')
    {
        value = JSON.stringify(value);
    }
    else
    {
        value = value.toString();
    }

    return value;
};
