import { volunteerApi } from '../helpers';

let NotificationApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/notifications', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/notifications/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(title, body, campaignId, userId) {
        return new Promise((resolve, reject) => {
            volunteerApi('/notifications', {
                type: 'post',
                data: { title: title, body: body, campaign_id: campaignId, user_id: userId },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, title, body, campaignId, userId) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/notifications/${id}`, {
                type: 'patch',
                data: { title: title, body: body, campaign_id: campaignId, user_id: userId },
                success: resolve,
                error: reject
            });
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/notifications/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default NotificationApi;
