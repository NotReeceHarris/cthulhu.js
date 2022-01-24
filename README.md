<img src='https://raw.githubusercontent.com/Techonaut/.github/a4357dbce5072a204c73e4a1896c97340d891417/cdn/img/cthulhu-logo.svg' width='500'>

> This package is in early development and is lacking core features, right now only basic http serving is supported and little hardening system are implemented such as the method filtering. All support and contribution would be amazing and hopefully cthulhu becomes a main stream module ! [Wiki](http://devreece.tech/cthulhu/wiki).

```node
// Import the Cthulhu module
const cthulhu = require('cthulhu_js')

// Serve the Webpage '/' allowing only 'GET' and 'POST' requests
cthulhu.server.serve('/', ['GET','POST'], function (req, res){
    res.write('Hello World')   // Write hello to the page
})

// Start the server on port 8080 in hardened mode, Default: 80,false
cthulhu.server.start(8080,true)

```

# :hammer_and_wrench: Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install cthulhu_js
```
For more help follow our [installing guide](https://github.com/Techonaut/Cthulhu/wiki/Installation-guide)

# :toolbox: Features
- Http [hardening](https://en.wikipedia.org/wiki/Hardening_(computing))
- High performance
- Module [routing](https://en.wikipedia.org/wiki/Routing)
- Redirecting, Caching, Security, Etc
- Minimul setup

# :paperclip: Links
- Visit the [wiki](https://github.com/Techonaut/Cthulhu/wiki) or [docs](https://github.com/Techonaut/Cthulhu/wiki/Docs)
- Github [repo](https://github.com/Techonaut/Cthulhu/)
- [Npm](https://www.npmjs.com/package/cthulhu_js) package

#### Security Issues
If you discover a vulnerability in Cthulhu, Please review our [Security Policies and Procedures](https://github.com/Techonaut/Cthulhu/blob/Development/SECURITY.md).

# :scroll: License
[GPL-3.0](https://github.com/Techonaut/Cthulhu/blob/Production/LICENSE)
 
