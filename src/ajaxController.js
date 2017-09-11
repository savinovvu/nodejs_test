
var express = require('express');
class AjaxController {

    getGeneratedNumber() {
        const router = express.Router();
        router.get('/', function (req, res, next) {
            let numberFrom = req.param("numberFrom");
            let numberTo = req.param("numberTo");
            res.send(`generate - [${numberFrom},${numberTo}]`);
        });
        return router;
    }

    getGeneratedString() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            let numberLetters = req.param("number");
            res.send(`generate${numberLetters}`);
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

module.exports = new AjaxController();
