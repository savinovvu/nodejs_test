var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:postgres@localhost:5432/postgres");


class Repository {

    init() {
        db.none("CREATE TABLE IF NOT EXISTS strings(id SERIAL NOT NULL, info varchar(255) NOT NULL)")
            .then(db.none("CREATE TABLE IF NOT EXISTS digits(id SERIAL NOT NULL, info Integer NOT NULL)"))
            .then(() => console.log("db init-ed"), (err) => console.log(err));
    }

    addString(added) {
        db.none(`Insert into strings(info) values( '${added}')`)
            .then(() => console.log("add " + added), (err) => console.log(err));
    }

    addNumber(added) {
        db.none(`Insert into digits(info) values(${added})`)
            .then(() => console.log("add " + added), (err) => console.log(err));
    }

    async getString(numberLetters) {
        let result;
        await db.many(`select *from strings WHERE  length(info) = ${numberLetters}`)
            .then((data) => result = data, (err) => console.log(err));
        return result.map(val => {
            return {"id": val.id, info: val.info}
        });
    }

    async getNumber(numberFrom, numberTo) {
        let result;
        await db.many(`select * from digits where info between ${numberFrom} AND ${numberTo}`)
            .then((data) => result = data, (err) => console.log(err));
        console.log(result);
        return result.map(val => {
            return {"id": val.id, info: val.info}
        });
    }
}

module.exports = new Repository();

