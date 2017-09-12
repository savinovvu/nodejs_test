var RandomOrg = require('random-org');
let random = new RandomOrg({apiKey: 'fae95ccb-7704-4687-8972-75888c6d729c'});

class DataGenerator {


    generateIntegers(from, to) {
        random.generateIntegers({min: from, max: to, n: 1})
            .then(function (result) {
                console.log(result.random.data);
            });
    }

    generateString(lengthString) {
        random.generateStrings({length: lengthString, n: 1, characters: "qwertyuiop[]sadfghjkl;'zxcvbnm,.1234567890"})
            .then(function (result) {
                console.log(result.random.data);
            });
    }

}

module.exports = new DataGenerator();