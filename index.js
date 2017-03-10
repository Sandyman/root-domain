'use strict';
const isSecondLevelDomain = require('2ldcheck');

/**
 * Determines root domain of a certain domain name. MUST NOT end with '/'.
 * @param domain_name {string}
 * @returns {string}
 */
module.exports = (domain_name) => {
    const lvl = isSecondLevelDomain(domain_name) ? 3 : 2;
    return domain_name.split('.').reverse().splice(0, lvl).reverse().join('.');
};
