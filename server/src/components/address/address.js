"use strict";
import uuidv4 from 'uuid/v4';

class Address {
    constructor({ id, number, street, city, zipcode, user_id }) {
        this.id = id || uuidv4();
        this.number = number || 0;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.user_id = user_id;
    }
}

export default Address;