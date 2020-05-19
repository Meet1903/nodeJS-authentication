
const express = require('express');

const bodyparser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyparser.json());

leaderRouter.get('/', (req, res, next ) => {
    res.end('This route will send all the leader to you!');
});

leaderRouter.put('/', (req, res, next ) => {
    res.statusCode = 403;
    res.end('Put operation not supported on leaders/');
});

leaderRouter.post('/' ,(req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

leaderRouter.delete('/', (req, res, next) => {
    res.end('Deleting all leader');
});

leaderRouter.get('/:leaderId', (req, res, next) => {
    res.end('Will send details of the leaders: ' + req.params.leaderId +' to you!');
});

leaderRouter.post('/:leaderId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leader/'+ req.params.leaderId);
});

leaderRouter.put('/:leaderId', (req, res, next) => {
    res.write('Updating the leaders: ' + req.params.leaderId + '\n');
    res.end('Will update the leaders: ' + req.body.name + 
          ' with details: ' + req.body.description);
});

leaderRouter.delete('/:leaderId', (req, res, next) => {
    res.end('Deleting leaders: ' + req.params.leaderId);
});

module.exports = leaderRouter;