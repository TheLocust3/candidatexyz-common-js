import { userApi } from '../helpers';

let CampaignApi = {
    
    get(id) {
        return new Promise((resolve, reject) => {
            userApi(`/campaigns/${id}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    getByName(name) {
        return new Promise((resolve, reject) => {
            userApi(`/campaigns/name/${name}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/campaigns/${id}`, {
                type: 'patch',
                data: { name: name },
                success: resolve,
                error: reject
            });
        });
    }
};

export default CampaignApi
