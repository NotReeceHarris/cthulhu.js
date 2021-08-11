<img src='logo.svg' width='500'>

![npm bundle size](https://img.shields.io/bundlephobia/min/cthulhu.js?style=flat-square) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/NotReeceHarris/Cthulhu/Production?style=flat-square) ![npms.io (final)](https://img.shields.io/npms-io/quality-score/cthulhu.js?style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/cthulhu.js?style=flat-square)

---

> This package is in early development and is lacking core features, right now only basic http serving is supported and little hardening system are implemented such as the method filtering. All support and contribution would be amazing and hopefully we cthulhu becomes a main stream module ! [Wiki](http://devreece.tech/cthulhu/wiki)

## Basic Setup
```node
const cthulhu = require('cthulhu.js') // Import the Cthulhu module

cthulhu.server.serve('/','GET',function(req, res){ // Serve the Webpage '/' allowing only 'GET' requests

    res.write('Hello World ')   // Write hello to the page

})

cthulhu.server.start(8080) // Start the server on port 8080, Default: 80

```

## Todo
```node
[] // Support html files internally 
[] // Harden http requests
[] // Add additional features
```
