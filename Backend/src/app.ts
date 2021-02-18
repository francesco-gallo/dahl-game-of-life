'use strict';

import express from 'express';
import { GameService } from './game-service';

var cors = require('cors')
var bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())
const port = 3000;

app.get('/generate/:seed', (req, res) => {
    const seed = JSON.parse(JSON.stringify(req.params.seed));
    console.log(`Requested generation x=${req.query.x}, y=${req.query.y}, seed=${seed}`);
    res.send(GameService.generate(+req.query.x, +req.query.y, seed));
});

app.post('/tick', (req, res) => {
    console.log(`Requested generation x=${req.body.x}, y=${req.body.y}, world size=${req.body.world.length}`);
    res.send(GameService.tick(req.body.x, req.body.y, req.body.world));
});

app.listen(port, () => {
    return console.log(`God is listening on ${port}`);
});
