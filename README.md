<img src='logo.svg' width='500'>

[![Run on repl](https://img.shields.io/badge/replit-run%20on%20repl-green?style=flat-square&logo=replit)](https://replit.com/github/NotReeceHarris/cthulhujs-replit-example) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/NotReeceHarris/Cthulhu/Production?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/cthulhu.js?style=flat-square)

> This package is in early development and is lacking core features, right now only basic http serving is supported and little hardening system are implemented such as the method filtering. All support and contribution would be amazing and hopefully cthulhu becomes a main stream module ! [Wiki](http://devreece.tech/cthulhu/wiki)

```node
// Import the Cthulhu module
const cthulhu = require('cthulhu.js')

// Serve the Webpage '/' allowing only 'GET' and 'POST' requests
cthulhu.server.serve('/', ['GET','POST'], function (req, res){
    res.write('Hello World')   // Write hello to the page
})

// Start the server on port 8080 in hardened mode, Default: 80,false
cthulhu.server.start(8080,true)

```

# 🛠️ Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install cthulhu.js
```
For more help follow our [installing guide](https://github.com/NotReeceHarris/Cthulhu/wiki/Installation-guide)

# 🧰 Features
- Http [hardening](https://en.wikipedia.org/wiki/Hardening_(computing))
- High performance
- Module [routing](https://en.wikipedia.org/wiki/Routing)
- Redirecting, Caching, Security, Etc
- Minimul setup

# 📎 Links
- Visit the [wiki](https://github.com/NotReeceHarris/Cthulhu/wiki) or [docs](https://github.com/NotReeceHarris/Cthulhu/wiki/Docs)
- Github [repo](https://github.com/NotReeceHarris/Cthulhu/)
- [Npm](https://www.npmjs.com/package/cthulhu.js) package

#### Security Issues
If you discover a vulnerability in Cthulhu, Please review our [Security Policies and Procedures](https://github.com/NotReeceHarris/Cthulhu/blob/Development/SECURITY.md).

# 📜 License
[MIT License](https://github.com/NotReeceHarris/Cthulhu/blob/Production/LICENSE)
 
