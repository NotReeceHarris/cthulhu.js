<img src='logo.svg' width='500'>

![npm bundle size](https://img.shields.io/bundlephobia/min/cthulhu.js?style=flat-square) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/NotReeceHarris/Cthulhu/Production?style=flat-square) ![npms.io (final)](https://img.shields.io/npms-io/quality-score/cthulhu.js?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/cthulhu.js?style=flat-square)

---

> This package is in early development and is lacking core features, right now only basic http serving is supported and little hardening system are implemented such as the method filtering. All support and contribution would be amazing and hopefully cthulhu becomes a main stream module ! [Wiki](http://devreece.tech/cthulhu/wiki)

```node
// Import the Cthulhu module
const cthulhu = require('cthulhu.js')

// Serve the Webpage '/' allowing only 'GET' requests
cthulhu.server.serve('/','GET',function(req, res){
    res.write('Hello World')   // Write hello to the page
})

// Start the server on port 8080, Default: 80
cthulhu.server.start(8080)

```

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install cthulhu.js
```

## Features
- Route hardening
- High performance
- Redirecting, Caching, Security, Etc
- Minimul setup

# License
[MIT License](https://github.com/NotReeceHarris/Cthulhu/blob/Production/LICENSE)
