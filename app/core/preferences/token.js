'use strict';

import SInfo from 'react-native-sensitive-info';

const options = {
    sharedPreferencesName: 'TOKEN_SHARED_PREFERENCES',
    keychainService: 'TOKEN_KEYCHAIN'
};


const CODE_KEY = 'CODE_KEY';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';


export default class TokenStorage {

    static async isAuthorized() {
        return false;
    }

    static saveCode(code) {

    }

    static async getCode() {

    }


};