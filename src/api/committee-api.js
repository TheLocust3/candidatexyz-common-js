import { volunteerApi } from '../helpers';

let CommitteeApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/committees', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/committees/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, email, phoneNumber, address, city, state, country, office, district) {
        return new Promise((resolve, reject) => {
            volunteerApi('/committees', {
                type: 'post',
                data: { name: name, email: email, phone_number: phoneNumber, address: address, city: city, state: state, country: country, office: office, district: district },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, email, phoneNumber, address, city, state, country, office, district) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/committees/${id}`, {
                type: 'patch',
                data: { name: name, email: email, phone_number: phoneNumber, address: address, city: city, state: state, country: country, office: office, district: district },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/committees/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default CommitteeApi;
