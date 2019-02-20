import Address from "../Address";
import MockData from "./mock.json";
import uuidv4 from 'uuid/v4';

var ADDRESSES = MockData.map(t => ({ ...JSON.parse(JSON.stringify(t)) }));

class AddressInMemoryRepository {

    insert(address) {
        ADDRESSES.push({ ...address })
        return Promise.resolve(address);
        // return Promise.reject('dataBase custom error');
    }

    getById(id) {
        let founded = ADDRESSES.map(t => t.id == id);
        return Promise.resolve((founded.length != 0) ? founded : null)
        // return Promise.reject("database custom error")
    }

    getByUserId(userid) {
        let founded = ADDRESSES.filter(t => t.user_id == userid);
        return Promise.resolve((founded.length != 0) ? founded : [])
        // return Promise.reject("DataBase custom Error");
    }

    deleteAllAddressByUserId(userid) {
        let founded = ADDRESSES.filter(t => t.user_id !== userid);
        ADDRESSES.length = 0;
        ADDRESSES = founded;
        return Promise.resolve(true);
        // return Promise.reject("dataBase custom error");
    }
}

export default AddressInMemoryRepository;