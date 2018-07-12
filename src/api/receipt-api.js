import { volunteerApi } from '../helpers';

let ReceiptApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/receipts', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/receipts/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, receiptType, amount, address, city, state, country, dateReceived, occupation, employer, email, phoneNumber) {
        return new Promise((resolve, reject) => {
            volunteerApi('/receipts', {
                type: 'post',
                data: { name: name, receipt_type: receiptType, amount: amount, address: address, city: city, state: state, country: country, date_received: dateReceived, occupation: occupation, employer: employer, email: email, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, receiptType, amount, address, city, state, country, dateReceived, occupation, employer, email, phoneNumber) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/receipts/${id}`, {
                type: 'patch',
                data: { name: name, receipt_type: receiptType, amount: amount, address: address, zipcode: zipcode, city: city, state: state, country: country, date_received: dateReceived, occupation: occupation, employer: employer, email: email, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/receipts/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ReceiptApi;
