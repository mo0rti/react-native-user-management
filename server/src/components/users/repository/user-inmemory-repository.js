import MockData from "./mock.json";

var USERS = MockData.map(t => ({ ...JSON.parse(JSON.stringify(t)) }));

class UserInMemoryRepository {

    getAll = () => Promise.resolve(USERS);
    // getAll = () => Promise.reject("Custom error");

    getById(id) {
        let founded = USERS.filter(t => t.id == id);
        return (founded.length == 0) ? Promise.resolve(null) : Promise.resolve(founded[0]);
        // return Promise.reject("No Such Username Founded");
    }

    getByUsername(username) {
        let founded = USERS.filter(t => t.username == username);
        return Promise.resolve(founded[0]);
        // return Promise.reject("No Such Username Founded")
    }

    setToken(userid, token) {
        return Promise.resolve(token);
        // return Promise.reject("Unexpected Database Error")
    }

    insert(user) {
        USERS.push({ ...user })
        return Promise.resolve(user);
        // return Promise.reject('dataBase custom error');
    }
    
    update({ id, name, gender, email, phone, password }) {
        let updatedUser = null;
        USERS = USERS.map(user => {
            if (user.id != id) return user;
            updatedUser = { ...user, name, gender, email, phone, password };
            return updatedUser;
        });
        return Promise.resolve(updatedUser)
    }

    delete(id) {
        let usersCount = USERS.length;
        USERS = USERS.filter(user => user.id != id);
        return (USERS.length != usersCount) ? Promise.resolve(true) : Promise.reject("User not found");
    }
}

export default UserInMemoryRepository;