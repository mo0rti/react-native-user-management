"use strict";
import uuidv4 from 'uuid/v4';
import { getRandomMaleAvatar, getRandomFemaleAvatar } from "../users/repository/random-avatar";

class User {
    constructor({ id, username, name, gender, email, phone, avatar, address, token, password }) {
        this.id = id || uuidv4();
        this.username = username;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar || (gender == "male") ? getRandomMaleAvatar() : getRandomFemaleAvatar();
        this.token = token || uuidv4();
        this.password = password;
        this.address = address || [];
    }
}

export default User;
