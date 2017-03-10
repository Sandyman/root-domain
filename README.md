# root-domain

This module determines the root domain for any domain or sub domain. It takes into account that certain 'second level
domains' exist, like '.co.uk' or 'com.au'. 

# Usage

## Install

`npm i root-domain -S`

## Use

```javascript
const rootDomain = require('root-domain');

console.log(rootDomain('example.com'));                 // prints example.com
console.log(rootDomain('a.b.c.sub.example.com.au'));    // print example.com.au
```

The domain name MUST NOT end with a '/'.

## Warning

Use this module at your own risk. 
