import { volunteerApi } from '../helpers';

let DonorApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/donors', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/donors/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, amount, address, zipcode, city, state, dateReceived, occupation, employer) {
        return new Promise((resolve, reject) => {
            volunteerApi('/donors', {
                type: 'post',
                data: { name: name, amount: amount, address: address, zipcode: zipcode, city: city, state: state, date_received: dateReceived, occupation: occupation, employer: employer },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, amount, address, zipcode, city, state, dateReceived, occupation, employer) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/donors/${id}`, {
                type: 'patch',
                data: { name: name, amount: amount, address: address, zipcode: zipcode, city: city, state: state, date_received: dateReceived, occupation: occupation, employer: employer },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/donors/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default DonorApi;
