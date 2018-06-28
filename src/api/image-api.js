import _ from 'lodash';

import { volunteerApi } from '../helpers';

let ImageApi = {

    getAll() {
        return new Promise((resolve, reject) => {
            volunteerApi('/images', {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    get(identifier) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/images/${identifier}`, {
                type: 'get',
                success: resolve,
                error: reject
            });
        });
    },

    create(identifier, file) {
        let readId = identifier;
        if (_.isEmpty(readId)) {
            readId = uuid();
        }
        
        let reader = new FileReader();
        reader.readAsDataURL(file)

        return new Promise((resolve, reject) => {
            reader.onload = (file) => {
                let image = file.target.result;
                image = image.substring(image.indexOf('base64,') + 7, image.length); // TODO: This is horrible
                
                volunteerApi('/images', {
                    type: 'post',
                    data: { identifier: readId, image: image },
                    success: resolve,
                    error: reject
                });
            };
        });
    },

    destroy(id) {
        return new Promise((resolve, reject) => {
            volunteerApi(`/images/${id}`, {
                type: 'delete',
                success: resolve,
                error: reject
            });
        });
    }
};

export default ImageApi;
