// Import the Cthulhu module
const cthulhu = require('../src/index.js')

cthulhu.init('prod')

cthulhu.serve('/', ['POST'], function(req, res) {

})

cthulhu.listen('8080')