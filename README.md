<p align='center'>
<img src='https://devreece.tech/img/cthulhuText.svg' width='500'>
</p>

---

## Basic Setup
```node

const cthulhu = require('./project/main.js'); // Import the cthulhu module

let app = new cthulhu({
    'Port': 8080,       // WebServer port, Default: 80
    'Logging':false,    // Logging traffic, Default: false
    'SpamProtect':false // Implement spamming protection, Default: false
});

app.server('/','GET',  function(req, res) {

  res.write('Hello World')

});


```
