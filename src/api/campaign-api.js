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

    getAll() {
        return new Promise((resolve, reject) => {
            userApi('/campaigns/', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(name, url, electionDay, preliminaryDay) {
        return new Promise((resolve, reject) => {
            userApi('/campaigns', {
                type: 'post',
                data: { name: name, url: url, election_day: electionDay, preliminary_day: preliminaryDay },
                success: resolve,
                error: reject
            });
        });
    },

    updateCampaignId(id, campaignId) {
        return new Promise((resolve, reject) => {
            userApi(`/campaigns/${id}/campaign_id`, {
                type: 'patch',
                data: { campaign_id: campaignId },
                success: resolve,
                error: reject
            });
        });
    },

    update(id, name, url, electionDay, preliminaryDay) {
        return new Promise((resolve, reject) => {
            userApi(`/campaigns/${id}`, {
                type: 'patch',
                data: { name: name, url: url, election_day: electionDay, preliminary_day: preliminaryDay },
                success: resolve,
                error: reject
            });
        });
    }
};

export default CampaignApi
