var RandomOrg = require('random-org');
let random = new RandomOrg({apiKey: 'fae95ccb-7704-4687-8972-75888c6d729c'});

class DataGenerator {


    async generateIntegers(from, to) {
        let result;
        await random.generateIntegers({min: from, max: to, n: 1})
            .then(
                sended => result = sended.random.data);
        console.log("ended " + result);
        return result;
    }

    async generateString(lengthString) {
        let result;
        await random.generateStrings({
            length: lengthString,
            n: 1,
            characters: "qwertyuiopsadfghjklzxcvbnm1234567890"
        })
            .then(
                sended => result = sended.random.data);
        console.log("ended " + result);
        return result;
    }
}

module.exports = new DataGenerator();