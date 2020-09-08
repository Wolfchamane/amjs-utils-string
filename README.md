# @amjs/utils 0.1.7

![Statements](https://img.shields.io/badge/Statements-100%25-brightgreen.svg) ![Branches](https://img.shields.io/badge/Branches-100%25-brightgreen.svg) ![Functions](https://img.shields.io/badge/Functions-100%25-brightgreen.svg) ![Lines](https://img.shields.io/badge/Lines-100%25-brightgreen.svg)

> Set of tools as capitalize text, camelize text, dotProp, etc.

## Installation

```bash
$ npm i @amjs/utils
```
## Usage

#### capitalize

```javascript
const { capitalize } = require('@amjs/utils');
console.log(capitalize('hello')); // 'Hello'
```

#### camelize

```javascript
const { camelize } = require('@amjs/utils');
console.log(camelize('hello-world')); // 'helloWorld'
```

#### dotProp

```javascript
const { dotProp } = require('@amjs/utils');

const context = {
    key : {
        value : 'value'
    }
};

// Interface: dotProp(ref = {}, prop = '', value = '')
// Use two arguments in order to return a value
console.log(dotProp(context, 'key.value')); // 'value'
// Use additional 3rd argument to assign new value
dotProp(context, 'key.value', 'foo');
console.log(dotProp(context, 'key.value')); // 'foo'
```

#### decamelize

```javascript
const { decamelize } = require('@amjs/utils');
console.log(decamelize('helloWorld'));      // 'hello-world'
// Use second parameter to assign an specific word character separator
console.log(decamelize('helloWorld', '/')); // 'hello/world'
```

#### stringify

```javascript
const { stringify } = require('@amjs/utils');
console.log(stringify('text'));                 // 'text'
console.log(stringify(''));                     // ''
console.log(stringify(1));                      // '1'
console.log(stringify(true));                   // 'true'
console.log(stringify({ key : 'value' }));      // '{"key":"value"}'
console.log(stringify([{ key : 'value' }]));    // '[{"key":"value"}]'
console.log(stringify());                       // Error
console.log(stringify(null);                    // Error```
