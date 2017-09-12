var express = require('express');
var dataGenerator = require('./dataGenerator');
var repository = require('./repository');

class AjaxController {

    getGeneratedNumber() {
        const router = express.Router();
        router.get('/', function (req, res, next) {

            let numberFrom = req.param("numberFrom");
            let numberTo = req.param("numberTo");
            dataGenerator.generateIntegers(numberFrom, numberTo)
                .then(data => {
                    repository.addNumber(data[0]);
                    res.send([{"id": "none", "info": data[0]}])
                });
        });
        return router;
    }

    getGeneratedString() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            let numberLetters = req.param("number");
            dataGenerator.generateString(numberLetters).then(data => {
                repository.addString(data[0]);
                res.send([{"id": "none", "info": data[0]}])
            });
        });
        return router;
    }

    getBDNumber() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            let numberFrom = req.param("numberFrom");
            let numberTo = req.param("numberTo");
            repository.getNumber(numberFrom, numberTo)
                .then(data => res.send(data)
                )
        });
        return router;
    }

    getBDString() {
        const router = express.Router();

        router.get('/', function (req, res, next) {
            let numberLetters = req.param("number");
            repository.getString(numberLetters)
                .then(data => res.send(data)
                )
        });
        return router;
    }


}

module.exports = new AjaxController();
