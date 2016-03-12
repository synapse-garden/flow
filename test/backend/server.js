////  IMPORTS  ////
// Import Express
var express = require('express');

// Import Fake Data
const initFilters = require('./init/initFilters.js');
const initObjects = require('./init/initObjects.js');
const initUsers = require('./init/initUsers.js');



////  SERVER FUNCTIONS  ////
// Create the server object
var expressServer = express();

// Express Request Handlers
    // All
expressServer.get('/all/', (req, res) => {
    res.send([
        initFilters,
        initObjects,
        initUsers
    ]);
})
    // Filters
expressServer.get('/filter/:filterId', (req, res) => {
    if( req.params.filterId == null ){ res.send( initFilters ); }
    else{ res.send( initFilters[ req.params.filterId ] ); }
})
    // Objects
expressServer.get('/object/:objectId', (req, res) => {
    if( req.params.objectId == null ){ res.send( initObjects ); }
    else{ res.send( initObjects[ req.params.objectId ] ); }
})
    // Users
expressServer.get('/users/:userId', (req, res) => {
    if( req.params.userId == null ){ res.send( initUsers ); }
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
