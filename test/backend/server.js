//var http = require('http');
//import express from 'express'
var express = require('express');

var expressServer = express()


// Express Handler
expressServer.get('/*', (req, res) => {
    res.send('Express server received request: ' + req.url);
})

// Express listen
function expressBackend(port) {
    expressServer.listen(port, function() {
        console.log('Express server listening on port:', port);
    });
}


// // We need a function which handles requests and send response
// function httpHandleRequest(request, response){
//   response.end('Path Hit: ' + request.url);
// }
//
// // HTTP Backend
// function httpBackend(port) {
//   var server = http.createServer(httpHandleRequest);
//
//   // start our server
//   server.listen(port, function(){
//     console.log("Mock service listening on http://localhost:%s", port);
//   });
// }
//
module.exports = {
  //backend: backend
  backend: expressBackend
}
