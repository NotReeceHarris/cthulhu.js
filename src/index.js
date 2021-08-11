const http = require('http');
const fs = require('fs')

const _about = require('./_about');

var RunningServer = null
var ServeFunctions = []
var ServeList = []

exports.server = {
    start(HttpPort=80) {

        // Port validation
        var intRegex = /^\d+$/;

        if(intRegex.test(HttpPort)) {

            if (0<=HttpPort<65536) {
                let RunningServer = new HttpServer(HttpPort); // Create a new http server
            } else {
                console.log('Invalid Port Range >= 0 and < 65536');
            }

        } else {
            console.log('Invalid Port, Port must only contain numbers');
        }

    },
    serve(Dir=null, Meth=null, Func=null) {

        // Serve validation
        if (Dir == null || Meth == null || Func == null || Dir == '' || Meth == '' || Func == '') {

            console.log('\n  Voiding serve as not all params are provided\n  Dir: ' + Dir + '\n  Method: ' + Meth)

        } else {

            if (Dir.charAt(0) == '/'){
                Dir = Dir.slice(1)
            } else {
                Dir = Dir
            }

            ServeFunctions.push([Dir,Meth,Func])
        }
    }
}

class HttpServer{ 
    constructor(Port){

        for (let i = 0; i < ServeFunctions.length; i++) {
            ServeList.push([ServeFunctions[i][0],ServeFunctions[i][1]])
        }

        this.Server = http.createServer(function(request, response) {

            var Furl = null

            if (request.url.charAt(0) == '/'){
                Furl = request.url.slice(1)
            } else {
                Furl = request.url
            }

            let cDate = new Date();
            let time = cDate.getDate() + ':' + (cDate.getMonth() + 1) + ':' + cDate.getFullYear() + ' ' + cDate.getHours() + ':' + cDate.getMinutes() + ':' + cDate.getSeconds();

            for (let i = 0; i < ServeFunctions.length; i++) {

                if (ServeFunctions[i][0] == '404') {
                    response.writeHead(404, {'server': 'Cthulhu'});
                    ServeFunctions[i][2](request, response);
                    
                    break;

                }else if(Furl === ServeFunctions[i][0]) {

                    if (request.method == ServeFunctions[i][1]) {
                        response.writeHead(200, {'server': 'Cthulhu'});
                        ServeFunctions[i][2](request, response);

                        break;

                    } else {

                        response.writeHead(405, {'server': 'Cthulhu'}); // Method not allowed

                    }
                } else {

                    response.writeHead(404, {'server': 'Cthulhu'}); // Page not found

                }
            }

            console.log('  ' + time + '\x1b[32m' + ' | ' + '\x1b[37m' + request.connection.remoteAddress + '\x1b[32m' + ' | ' + '\x1b[37m' + request.method + '\x1b[32m' + ' | ' + '\x1b[37m' + response.statusCode + '\x1b[32m' + ' | ' + '\x1b[37m' + request.url);

            response.end();
            
        }).listen(Port);

        console.log('\n' + '\x1b[32m' + '  Cthulhu ^(;,;)^' + '\x1b[37m' + '\x1b[1m' + ' | ' + _about._version + '\n  Server Running on port ' + Port + '..\n\n  List of active serves');
        
        for (let i = 0; i < ServeList.length; i++) {

            console.log('  ' + ServeList[i][1] + ' : ' + ServeList[i][0]);

          }

        console.log('\n');
    }

}