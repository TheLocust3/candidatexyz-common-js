import { volunteerApi } from '../helpers';

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

    create(fromWhom, description, address, city, state, country, dateReceived, value) {
        return new Promise((resolve, reject) => {
            volunteerApi('/in_kinds', {
                type: 'post',
                data: { from_whome: fromWhom, description: description, address: address, city: city, state: state, country: country, date_received: dateReceived, value: value },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, fromWhom, description, address, city, state, country, dateReceived, value) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/in_kinds/${id}`, {
                type: 'patch',
                data: { from_whome: fromWhom, description: description, address: address, city: city, state: state, country: country, date_received: dateReceived, value: value },
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
    }
};

export default InKindApi;
