
var express = require('express');
class Controller {

    getGeneratedNumber() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            res.send('respond with a 666');
        });
        return router;
    }

    getGeneratedString() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            res.send('respond with a 2');
        });
        return router;
    }

    getBDNumber(fromNumber, toNumber){
        const router = express.Router();

        router.get('/', function (req, res, next) {
            res.send('respond with a 2');
        });
        return router;
    }

    getBDString(lengthString){
        const router = express.Router();

        router.get('/', function (req, res, next) {
            res.send('respond with a 2');
        });
        return router;
    }


}

module.exports = new Controller();
