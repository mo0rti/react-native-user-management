import Database from "../../../module/db";

class AddressRepository {

    insert(address) {
        let { id, number, street, city, zipcode, user_id } = address;
        return Database.execute(database =>
            database.query(`INSERT INTO address (id, number, street, city, zipcode, user_id)
             VALUES ("${id}",${number},"${street}","${city}","${zipcode}","${user_id}")`))
            .then(() => Promise.resolve(address))
            .catch(err => Promise.reject(err))
    }

    getById(id) {
        return Database.execute(database =>
            database.query(`SELECT * FROM address WHERE id="${id}"`))
            .then(rows => Promise.resolve((rows.length != 0) ? rows : null))
            .catch(err => Promise.reject(err))
    }

    getByUserId(userid) {
        return Database.execute(database =>
            database.query(`SELECT * FROM address WHERE user_id="${userid}"`))
            .then(rows => Promise.resolve(rows))
            .catch(err => Promise.reject(err))
    }

    deleteAllAddressByUserId(userid) {
        return Database.execute(database =>
            database.query(`DELETE FROM address WHERE user_id="${userid}"`))
            .then(() => Promise.resolve(true))
            .catch(err => Promise.reject(err))
    }
}

export default AddressRepository;