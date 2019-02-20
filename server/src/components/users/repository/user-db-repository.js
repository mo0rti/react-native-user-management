import Database from "../../../module/db";

class UserDbRepository {

    // set user auth token
    setToken(userid, token) {
        return Database.execute(database =>
            database
                .query(`UPDATE users SET token="${token}" WHERE id="${userid}"`)
                .then(() => Promise.resolve(token))
                .catch(err => Promise.reject(err))
        );
    }

    getAll(pageNumber, pageSize) {
        // TODO: pagination must be implemented
        return Database.execute(database =>
            database
                .query(`SELECT * FROM users`)
                .then(rows => Promise.resolve(rows))
                .catch(err => Promise.reject(err))
        );
    }

    getById(id) {
        return Database.execute(database =>
            database
                .query(`SELECT * FROM users WHERE id="${id}"`)
                .then(rows => Promise.resolve((rows.length != 0) ? rows[0] : null))
                .catch(err => Promise.reject(err))
        );
    }

    getByUsername(username) {
        return Database.execute(database =>
            database
                .query(`SELECT * FROM users WHERE username="${username}"`)
                .then(rows => Promise.resolve((rows.length != 0) ? rows[0] : null))
                .catch(err => Promise.reject(err))
        );
    }

    insert(user) {
        // TODO: saving the hashed password needed
        return Database.execute(database =>
            database.query(`INSERT INTO users (id, username, name, gender, avatar, email, phone, password, token) 
            VALUES ("${user.id}","${user.username}","${user.name}","${user.gender}","${user.avatar}","${user.email}", "${user.phone}", "${user.password}", "${user.token}")`)
                .then(() => Promise.resolve(user))
                .catch(err => Promise.reject(err))
        );
    }

    update(user) {
        return Database.execute(database =>
            database.query(`UPDATE users SET name="${user.name}", gender="${user.gender}", email="${user.email}", phone="${user.phone}",
            token="${user.token}",password="${user.password}" WHERE id="${user.id}"`))
            .then(() => Promise.resolve(user))
            .catch(err => Promise.reject(err))
    }

    delete(id) {
        return Database.execute(database =>
            database.query(`DELETE FROM users WHERE id="${id}"`)
                .then(response => Promise.resolve(response))
                .catch(err => Promise.reject(err))
        )
    }
}

export default UserDbRepository;