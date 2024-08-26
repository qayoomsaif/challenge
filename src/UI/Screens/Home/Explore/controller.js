import {
    UserInfoStorage,
    Router,
    Helper,
    SystemStorage,
} from 'src/Factory';
export default class Controller {
    constructor(setData) {
        this.setData = setData;
    }
    async getListing(offset) {
        try {
            let response = await Services.chatServices.getApplicationChatList(
                offset,
                10,
            );
            let response1 = await Services.chatServices.getTaskChatList(offset, 10);
            this.setData(response1);
        } catch (e) {
        }
    }
}
