
var express = require('express');
class Controller {

    getGeneratedNumber() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            res.send('getGeneratedNumber');
        });
        return router;
    }

    getGeneratedString() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            res.send('getGeneratedString');
        });
        return router;
    }

    getBDNumber(){
        const router = express.Router();

        router.get('/', function (req, res, next) {
            let numberFrom = req.param("numberFrom");
            let numberTo = req.param("numberTo");
            res.send(`[${numberFrom},${numberTo}]`);
        });
        return router;
    }

    getBDString(){
        const router = express.Router();

        router.get('/', function (req, res, next) {
            let numberLetters = req.param("number");
            res.send(numberLetters);
        });
        return router;
    }


}

module.exports = new Controller();
