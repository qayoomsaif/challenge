import { Alert } from 'react-native';

export class Validate {
    constructor(router) {
        this.router = router;
    }
    email(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
        if (re.test(email)) {
            return true;
        }
        return false;
    }
    passowrd(passowrd) {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#.&*$!%*?&])[A-Za-z\d@#.&*$!%*?&]{8,15}$/;
        if (re.test(passowrd)) {
            return true;
        }
        return false;
    }
    loginRequired(screenName = 'unknown', data = null) {
        this.Router.Login({ propsData: { screenName, data } });
    }
    async validateNum(num) {
        regex = /^[0-9\s]*$/;
        if (regex.test(num)) {
            return true;
        }
        return false;
    }
    async validateStringWithSpace(str) {
        regex = /^[a-zA-Z ]*$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }
    string(str) {
        regex = /^[a-zA-Z ]*$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }
    async validateOnlyString(str) {
        regex = /^[a-zA-Z]*$/;
        if (regex.test(str)) {
            return true;
        }
        return false;
    }
    async validateNuminArry(num) {
        var value = true;
        for (i = 0; i < num.length; i++) {
            let regex = /^[0-9\s]*$/;
            let res = regex.test(num[i]);
            if (!res) {
                value = false;
            }
        }
        return value;
    }
}