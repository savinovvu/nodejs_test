var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:postgres@localhost:5432/postgres");


class Repository {

    init() {
        db.none("CREATE TABLE IF NOT EXISTS strings(id SERIAL NOT NULL, info varchar(255) NOT NULL)")
            .then(db.none("CREATE TABLE IF NOT EXISTS digits(id SERIAL NOT NULL, info Integer NOT NULL)"))
            .then(() => console.log("good"), (err) => console.log(err));
    }

    addString(added) {
        db.none(`Insert into strings(info) values( '${added}')`)
            .then(() => console.log("add " + added), (err) => console.log(err));
    }

    addNumber(added) {
        db.none(`Insert into digits(info) values(${added})`)
            .then(() => console.log("add " + added), (err) => console.log(err));
    }

    getString(numberLetters) {
        return db.many(`select *from strings WHERE  length(info) = ${numberLetters}`)
            .then((data) => console.log(data), (err) => console.log(err));
    }

    getNumber(numberFrom, numberTo) {
        return db.many(`select * from digits where info between ${numberFrom} AND ${numberTo}`)
            .then((data) => console.log(data), (err) => console.log(err));
    }

}

module.exports = new Repository();

