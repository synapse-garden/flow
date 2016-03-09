////  IMPORTS  ////
// Import Express
var express = require('express');

// Import Fake Data
const initTasks = require('./init/initTasks.js');
const initUsers = require('./init/initUsers.js');



////  SERVER FUNCTIONS  ////
// Create the server object
var expressServer = express();

// Express Request Handlers
    // Lists
expressServer.get('/lists/:listId', (req, res) => {
    if( req.params.listId == -1 ){ res.send( initTasks ); }
    else{ res.send( initTasks[ req.params.listId ] ); }
})
    // Users
expressServer.get('/users/:userId', (req, res) => {
    if( req.params.userId == -1 ){ res.send( initUsers ); }
    else{ res.send( initUsers[ req.params.userId ] ); }
})

// Express Listen Function
function expressBackend(port) {
    expressServer.listen(port, function() {
        console.log('Express server listening on port:', port);
    });
}



////  EXPORTS  ////
// Export Modules
module.exports = {
  backend: expressBackend
}
