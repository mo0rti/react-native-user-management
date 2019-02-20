import uuidv4 from 'uuid/v4';
import UserRepository from "./repository/index";
import AddressRepository from "../address/repository/index";
import { validateEmail } from '../../helpers/validators';
import User from "./user";
import Address from '../address/address';

class UserService {

    validate(user) {
        if ((!user.username) || (user.username.length < 5))
            throw new Error("User name must be least 5 characters in length");
        if ((user.password) && (user.password.length < 6))
            throw new Error("Password must be least 6 characters in length");
        if ((user.email) && (!validateEmail(user.email)))
            throw new Error("Email is invalid");
        if ((!user.gender) && (user.gender.toLocaleLowerCase() != "male") && (user.gender.toLocaleLowerCase() != "female"))
            throw new Error("Gender is invalid");
        if ((user.phone) && (user.phone.length < 7))
            throw new Error("Phone must be least 7 characters in length");
        if (user.address) {
            if ((user.address.zipcode) && (user.address.zipcode.length < 5))
                throw new Error("Zipcode must be least 5 characters in length");
        }
    }

    signIn({ username, password }) {
        let userRepository = new UserRepository();
        let addressRepository = new AddressRepository();

        return userRepository
            .getByUsername(username)
            .then(user => {
                console.log(user);
                if (!user)
                    return Promise.reject({ status: false, message: "User not found" });
                // TODO: hash check of password needed
                if (user.password != password)
                    return Promise.reject({ status: false, message: "Password is wrong" });

                let token = uuidv4();
                user.token = token;
                userRepository.setToken(user.id, token)
                    .then(res => Promise.resolve(res))
                    .catch(err => Promise.reject(err));

                return addressRepository
                    .getByUserId(user.id)
                    .then(userAddresses => {
                        user.address = userAddresses;
                        return Promise.resolve({ status: true, data: user });
                    })
                    .catch(() => Promise.reject({ status: false, message: "Unexpected error in database, Address" }));
            })
            .catch(error => Promise.reject(error));
    }

    signUp(user) {
        this.validate(user);
        let userRepository = new UserRepository();
        let addressRepository = new AddressRepository();
        let userModel = new User(user);
        return userRepository
            .insert(userModel)
            .then(savedUser => {
                let addressPromises = [];
                let dbAddress = [];

                userModel.address.map(adr => {
                    adr.user_id = savedUser.id;
                    let addressModel = new Address(adr);

                    let addressInsertPromise = addressRepository
                        .insert(addressModel)
                        .then(insertedAddress => {
                            dbAddress.push(insertedAddress);
                            return Promise.resolve();
                        })
                        .catch(err => Promise.reject(err));
                    addressPromises.push(addressInsertPromise);
                });

                return Promise
                    .all(addressPromises)
                    .then(() => {
                        userModel.address = dbAddress;
                        return Promise.resolve({ status: true, data: userModel });
                    })
                    .catch(err => Promise.reject(err));
            })
            .catch(err => Promise.reject(err))
    }

    isUsernameAvailable(username) {
        let userRepository = new UserRepository();
        return userRepository
            .getByUsername(username)
            .then(user => user ? Promise.resolve(false) : Promise.resolve(true));
    }

    getAll(pageNumber, pageSize) {
        let userRepository = new UserRepository();
        let result = userRepository.getAll(pageNumber, pageSize)
        return result;
    }

    get(userid) {
        let userRepository = new UserRepository();
        let addressRepository = new AddressRepository();
        return userRepository
            .getById(userid)
            .then(user => {
                console.log(user);
                if (!user)
                    return Promise.reject("No such User in database");

                return addressRepository
                    .getByUserId(user.id)
                    .then(userAddresses => {
                        user.address = userAddresses;
                        return Promise.resolve(user);
                    })
                    .catch(() => Promise.reject("Unexpected error in database, Address"));
            })
            .catch(error => Promise.reject(error));
    }

    updateUser(user) {
        this.validate(user);
        let userRepository = new UserRepository();
        let userModel = new User(user);
        return userRepository
            .update(userModel)
            .then(() => {
                return Promise.resolve({ status: true, data: userModel, message: "Update Was Successfull" });
            })
            .catch(err => Promise.reject({ status: false, message: err }))
    }

    updateAddressesByUserId(addresses) {
        let addressRepository = new AddressRepository();
        let addressPromises = [];
        let dbAddress = [];
        return addressRepository
            .deleteAllAddressByUserId(addresses.id)
            .then(() => {
                addresses.data.map(adr => {
                    adr.user_id = addresses.id;
                    let addressModel = new Address(adr);
                    let addressInsertPromise = addressRepository
                        .insert(addressModel)
                        .then(insertedAddress => dbAddress.push(insertedAddress));
                    addressPromises.push(addressInsertPromise);
                });

                return Promise.all(addressPromises).then(() => {
                    return Promise.resolve({ status: true, message: "Update Was Successful" });
                });
            })
            .catch(err => Promise.reject({ status: false, message: err }))
    }

    deleteUser(id) {
        let userRepository = new UserRepository();
        let addressRepository = new AddressRepository();
        return userRepository.delete(id)
            .then(() => {
                return addressRepository.deleteAllAddressByUserId(id)
                    .then(() => Promise.resolve({ status: true, message: "Delete Was Successful" }))
                    .catch(err => Promise.reject({ status: false, message: err }))

            }).catch(err => Promise.reject({ status: false, message: err }))
    }
}

export default UserService;