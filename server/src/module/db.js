import mysql from "mysql";
import settings from "../common/settings";

class Database {
    constructor(config) {
        if (!config)
            config = settings.db_config;
        this.connection = mysql.createConnection({
            "host": "192.168.43.185",
            "user": "mmttt89",
            "password": "hhayty",
            "database": "user_management"
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}

Database.execute = (callback, config) => {
    const database = new Database(config);
    return callback(database).then(
        result => database.close().then(() => result),
        err => database.close().then(() => { throw err; })
    );
};

export default Database;