require('dotenv').config();
const app = require('../app.js');
const http = require('http');
const debug = require('debug')('exer:server');

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    const port = parseInt(val);

    if (isNaN(port))  return port;

    if (port >= 0)  return port;

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port '+port;
    switch (key) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already use`);
            process.exit(1);
            break;
        default:
            throw error;
            break;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof port === 'string' ? 'Pipe ' + addr : 'Port '+addr;
    debug(`Listening on ${bind}`);
}