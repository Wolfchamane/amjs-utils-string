/**
 * Finds a value referenced by a dot-chained property tree or sets its value
 * @param   {Object}    ref     Where to find the property
 * @param   {*}         prop    Dot-chained tree property
 * @param   {*}         value   New value to assign
 * @return  {*}         Current value of the property
 */
const dotProp = (ref = {}, prop = '', value) =>
{
    let result;
    if (prop.lastIndexOf('.') === -1)
    {
        result = ref[prop];
    }
    else
    {
        prop = prop.split('.');
        const key = prop.shift();
        if (ref && typeof ref[key] === 'object')
        {
            result = dotProp(ref[key], prop.join('.'), value);
        }
    }

    if (value)
    {
        ref[prop] = value;
    }

    return result;
};

module.exports = dotProp;
