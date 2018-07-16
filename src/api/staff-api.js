import { appDomain } from '../constants';
import { userApi } from '../helpers';

let StaffApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            userApi('/staff', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getPositions() {
        return new Promise((resolve, reject) => {
            userApi(`/staff_positions`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    createToken(email, position) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/create_invite`, {
                type: 'post',
                data: { email: email, position: position, url: `${appDomain()}/campaign/sign-up/` },
                success: resolve,
                error: reject
            });
        });
    },

    create(token, email, firstName, lastName, password, passwordConfirmation, address, city, state, country, phoneNumber) {
        return new Promise((resolve, reject) => {
            userApi(`/staff`, {
                type: 'post',
                data: { token: token, email: email, first_name: firstName, last_name: lastName, password: password, password_confirmation: passwordConfirmation, address: address, city: city, state: state, country: country, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, email, firstName, lastName, admin, position, address, city, state, country, phoneNumber) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'patch',
                data: { email: email, first_name: firstName, last_name: lastName, admin: admin, position: position, address: address, city: city, state: state, country: country, phone_number: phoneNumber },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default StaffApi
