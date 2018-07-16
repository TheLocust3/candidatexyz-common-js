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

    register(email, password, passwordConfirmation, firstName, lastName) {
        return $.auth.emailSignUp({
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            first_name: firstName,
            last_name: lastName
        });
    },

    editUser(email, password, passwordConfirmation, firstName, lastName, address, phoneNumber) {
        let hash = {};
        if (!_.isEmpty(email)) {
            hash.email = email;
        }

        if (!_.isEmpty(firstName)) {
            hash.first_name = firstName;
        }

        if (!_.isEmpty(lastName)) {
            hash.last_name = lastName;
        }

        if (!_.isEmpty(address)) {
            hash.address = address;
        }

        if (!_.isEmpty(phoneNumber)) {
            hash.phone_number = phoneNumber;
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
