
const express = require('express');

const bodyparser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyparser.json());

dishRouter.get('/', (req, res, next ) => {
    res.end('This route will send all the dishes to you!');
});

dishRouter.put('/', (req, res, next ) => {
    res.statusCode = 403;
    res.end('Put operation not supported on dishes');
});

dishRouter.post('/' ,(req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

dishRouter.delete('/', (req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.get('/:dishId', (req, res, next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

dishRouter.post('/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

dishRouter.put('/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
});

dishRouter.delete('/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;