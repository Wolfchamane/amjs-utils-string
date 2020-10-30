# @amjs/utils-string 0.1.0

![Statements](https://img.shields.io/badge/Statements-100%25-brightgreen.svg) ![Branches](https://img.shields.io/badge/Branches-100%25-brightgreen.svg) ![Functions](https://img.shields.io/badge/Functions-100%25-brightgreen.svg) ![Lines](https://img.shields.io/badge/Lines-100%25-brightgreen.svg)

> Set of tools as capitalize text, camelize text, etc.

## Installation

```bash
$ npm i @amjs/utils-string
```
## Usage

#### capitalize

```javascript
const { capitalize } = require('@amjs/utils-string');
console.log(capitalize('hello')); // 'Hello'
```

#### camelize

```javascript
const { camelize } = require('@amjs/utils-string');
console.log(camelize('hello-world')); // 'helloWorld'
```

#### decamelize

```javascript
const { decamelize } = require('@amjs/utils-string');
console.log(decamelize('helloWorld'));      // 'hello-world'
// Use second parameter to assign an specific word character separator
console.log(decamelize('helloWorld', '/')); // 'hello/world'
```

#### stringify

```javascript
const { stringify } = require('@amjs/utils-string');
console.log(stringify('text'));                 // 'text'
console.log(stringify(''));                     // ''
console.log(stringify(1));                      // '1'
console.log(stringify(true));                   // 'true'
console.log(stringify({ key : 'value' }));      // '{"key":"value"}'
console.log(stringify([{ key : 'value' }]));    // '[{"key":"value"}]'
console.log(stringify());                       // Error
console.log(stringify(null);                    // Error```
