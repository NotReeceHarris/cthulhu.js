<p align='center'>
<img src='https://devreece.tech/img/cthulhuText.svg' width='500'>
</p>

---

## Basic Setup
```node
const cthulhu = require('./Cthulhu')

cthulhu.server.serve('/','GET',function(req, res){

    res.write('Hello World ')

})

cthulhu.server.start()

```
