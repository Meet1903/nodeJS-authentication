
const express = require('express');

const bodyparser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyparser.json());

promoRouter.get('/', (req, res, next ) => {
    res.end('This route will send all the promotions to you!');
});

promoRouter.put('/', (req, res, next ) => {
    res.statusCode = 403;
    res.end('Put operation not supported on promotions');
});

promoRouter.post('/' ,(req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
});

promoRouter.delete('/', (req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.get('/:promoId', (req, res, next) => {
    res.end('Will send details of the promotions: ' + req.params.promoId +' to you!');
});

promoRouter.post('/:promoId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
});

promoRouter.put('/:promoId', (req, res, next) => {
    res.write('Updating the promotions: ' + req.params.promoId + '\n');
    res.end('Will update the promotions: ' + req.body.name + 
          ' with details: ' + req.body.description);
});

promoRouter.delete('/:promoId', (req, res, next) => {
    res.end('Deleting promotions: ' + req.params.promoId);
});

module.exports = promoRouter;