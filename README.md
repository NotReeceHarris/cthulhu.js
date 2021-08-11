<p align='center'>
<img src='https://devreece.tech/img/cthulhuText.svg' width='500'>
</p>

---

## Basic Setup
```node
const cthulhu = require('cthulhu.js') // Import the Cthulhu module

cthulhu.server.serve('/','GET',function(req, res){ // Serve the Webpage '/' allowing only 'GET' requests

    res.write('Hello World ')   // Write hello to the page

})

cthulhu.server.start(8080) // Start the server on port 8080, Default: 80

```
