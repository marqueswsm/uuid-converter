# uuid-converter
It is an npm package developed to allow you to convert Uuid strings to binary. If you want to learn more about Uuid you can take a look at [RFC 4122](https://tools.ietf.org/html/rfc4122). Uuid is a good approach to be used as a primary key in the database since it does not expose any information about the data and can be generated anywhere in the application. However, an Uuid is 128 bits long and may cause performance issues due to their size. In this context, this package provides an easy way to convert Uuid to binary before sending it to the database.

## How to install
It is provided as an npm package:

```bash
npm install uuid-converter
```

## How to import
You can import this package using CommonJs:
```js
const Uuid = require('uuid-converter');
```

Or using ES6:
```js
import * as Uuid from 'uuid-converter';
```

## How to use
You can generate an Uuid:
```js
const uuid = Uuid.generate();
```
> 798895c3-cc7c-4b59-9d85-68798dd36761

Then, convert it to a binary:
```js
const binary = Uuid.stringToBinary(uuid);
```
> <Buffer 79 88 95 c3 cc 7c 4b 59 9d 85 68 79 8d d3 67 61>

And also convert it to uuid again:
```js
const uuid = Uuid.binaryToString(binary);
```
> 798895c3-cc7c-4b59-9d85-68798dd36761
