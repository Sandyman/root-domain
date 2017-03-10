'use strict';
const rootDomain = require('../index');

const example = 'example.com';
console.log(example + ' => ' + rootDomain(example));

const subExample = 'sub.example.com';
console.log(subExample + ' => ' + rootDomain(subExample));

const subExample2LD = 'sub.example.com.au';
console.log(subExample2LD + ' => ' + rootDomain(subExample2LD));

const longExample2LD = 'a.b.c.sub.example.com.au';
console.log(longExample2LD + ' => ' + rootDomain(longExample2LD));
