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

    getAllWithPositions() {
        return new Promise((resolve, reject) => {
            userApi('/users/users_with_committee_positions', {
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

    getInvite(token) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/get_invite?token=${token}`, {
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

    create(token, email, firstName, middleName, lastName, password, passwordConfirmation, address, city, state, country, zipcode, phoneNumber, party) {
        return new Promise((resolve, reject) => {
            userApi(`/staff`, {
                type: 'post',
                data: { token: token, email: email, first_name: firstName, middle_name: middleName, last_name: lastName, password: password, password_confirmation: passwordConfirmation, address: address, city: city, state: state, country: country, zipcode: zipcode, phone_number: phoneNumber, party: party },
                success: resolve,
                error: reject
            });
        });
    },

    updateCampaignId(id, campaignId) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}/campaign_id`, {
                type: 'patch',
                data: { campaign_id: campaignId },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, email, firstName, middleName, lastName, admin, position, address, city, state, country, zipcode, phoneNumber, party) {
        return new Promise((resolve, reject) => {
            userApi(`/staff/${id}`, {
                type: 'patch',
                data: { email: email, first_name: firstName, middle_name: middleName, last_name: lastName, admin: admin, position: position, address: address, city: city, state: state, country: country, zipcode: zipcode, phone_number: phoneNumber, party: party },
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
