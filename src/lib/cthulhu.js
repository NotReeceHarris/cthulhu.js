/*!
 * Cthulhu.js
 * Developed by Techonaut (https://techonaut.tech/)
 * GPL-3.0 Licensed
 */


/*!
 * TODO
 * - Setup backend options
 * - Authentication options
 * - Session storage
 * - Encryption support
 * - Secure / firewall features
 * 
 * IN PROGRESS
 * - Add basic page serving
 * 
 * DONE
 */

'use strict';

const utils = require('./utils')
const security = require('./firewall/secure')

var __MODE__;

var app = exports = module.exports = {};

app.init = function(mode) {
    switch (mode) {
        case 'prod':
            __MODE__ = true
            break;
        case 'dev':
            __MODE__ = false
            break;
        default:
            utils.throw('error', '"' + mode + '" isn\'t a valid mode please provide either ("prod", "dev")');
            process.exit(1);
    }
}

app.serve = function(loc, meth, func) {
    console.log(loc)
}

app.listen = function(port) {

}