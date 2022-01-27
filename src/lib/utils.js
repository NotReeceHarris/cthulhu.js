/*!
 * Cthulhu.js
 * Developed by Techonaut (https://techonaut.tech/)
 * GPL-3.0 Licensed
 */

'use strict';

var utils = exports = module.exports = {};

utils.throw = function(type, msg) {

    switch (type) {
        case 'error':
            console.log('\x1b[31m%s\x1b[0m', 'Error: ' + msg)
            break;
        case 'success':
            console.log('\x1b[32m%s\x1b[0m', 'Success ' + msg)
            break;
        case 'warning':
            console.log('\x1b[33m%s\x1b[0m', 'Warning ' + msg)
            break;
        default:
            break;
    }
}