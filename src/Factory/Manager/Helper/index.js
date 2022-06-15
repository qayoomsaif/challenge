import { Alert } from 'react-native';

export class Helper {
    constructor(router) {
        this.router = router;
    }
    alert(message, title, buttons) {
        Alert.alert(title || '', message, buttons);
    }
    msg(message, title, buttons) {
        Alert.alert(title || '', message, buttons);
    }
}

