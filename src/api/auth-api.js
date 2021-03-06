import $ from 'jquery';

let AuthApi = {

    signIn(email, password) {
        return $.auth.emailSignIn({
            email: email,
            password: password
        });
    },

    signOut() {
        return $.auth.signOut();
    },

    register(email, password, passwordConfirmation, firstName, middleName, lastName, address, city, state, country, zipcode, phoneNumber, party) {
        return $.auth.emailSignUp({
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address: address,
            city: city,
            state: state,
            country: country,
            zipcode: zipcode,
            phone_number: phoneNumber,
            party: party
        });
    },

    editUser(email, password, passwordConfirmation, firstName, middleName, lastName, address, city, state, country, zipcode, phoneNumber, party, position) {
        let hash = {};
        if (!_.isEmpty(email)) {
            hash.email = email;
        }

        if (!_.isEmpty(firstName)) {
            hash.first_name = firstName;
        }

        if (!_.isEmpty(middleName)) {
            hash.middle_name = middleName;
        }

        if (!_.isEmpty(lastName)) {
            hash.last_name = lastName;
        }

        if (!_.isEmpty(address)) {
            hash.address = address;
        }

        if (!_.isEmpty(city)) {
            hash.city = city;
        }

        if (!_.isEmpty(state)) {
            hash.state = state;
        }

        if (!_.isEmpty(country)) {
            hash.country = country;
        }

        if (!_.isEmpty(zipcode)) {
            hash.zipcode = zipcode;
        }

        if (!_.isEmpty(phoneNumber)) {
            hash.phone_number = phoneNumber;
        }

        if (!_.isEmpty(party)) {
            hash.party = party;
        }

        if (!_.isEmpty(position)) {
            hash.position = position;
        }

        return $.auth.updateAccount(hash).then((user) => {
            if (!_.isEmpty(password)) {
                return $.auth.updatePassword({
                    password: password,
                    password_confirmation: passwordConfirmation
                });
            }
        });
    },

    forgotPassword(email) {
        return $.auth.requestPasswordReset({
            email: email
        });
    },

    resetPassword(password, passwordConfirmation) {
        return $.auth.updatePassword({
            password: password,
            password_confirmation: passwordConfirmation
        });
    },

    getCurrentUser() {
        return $.auth.validateToken();
    },

    setCampaignId(campaignId) {
        return $.auth.updateAccount({
            campaign_id: campaignId
        });
    }
};

export default AuthApi
