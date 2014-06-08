# humanb [![Build Status](https://travis-ci.org/cirocosta/humanb.svg?branch=master)](https://travis-ci.org/cirocosta/humanb)

> Transforms a given filesize into a more readable form

## Usage

This module is meant to be used in, at least, three different scenarios

### Nodejs

```javascript
var humanb = require('humanb');

var filesizes = 1024;

humanb(filesize);

// 1kb

```

### Browser

Just reference the library and use it :)


### Shell

```sh
humanb 1024

# 1kb
```
