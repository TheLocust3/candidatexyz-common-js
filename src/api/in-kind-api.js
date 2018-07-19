import { volunteerApi, createAuthHeadersString } from '../helpers';
import { volunteerApiDomain } from '../constants';

let InKindApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/in_kinds', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/in_kinds/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(fromWhom, description, address, city, state, country, dateReceived, value, email, phoneNumber) {
        return new Promise((resolve, reject) => {
            volunteerApi('/in_kinds', {
                type: 'post',
                data: { from_whom: fromWhom, description: description, address: address, city: city, state: state, country: country, date_received: dateReceived, value: value, email: email, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, fromWhom, description, address, city, state, country, dateReceived, value, email, phoneNumber) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/in_kinds/${id}`, {
                type: 'patch',
                data: { from_whom: fromWhom, description: description, address: address, city: city, state: state, country: country, date_received: dateReceived, value: value, email: email, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/in_kinds/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    },

    exportLink() {
        return `${volunteerApiDomain()}/in_kinds/export.csv?${createAuthHeadersString()}`;
    }
};

export default InKindApi;
