export class SystemStorage {
    constructor(storageManager, defaultData) {
        this.storageManager = storageManager;
        this.defaultData = defaultData;
    }

    async setOnboardingStep1(status) {
        let location = await this.storageManager._set(
            'OnboardingStep1',
            status ? status : false,
        );
    }
    async setOnboardingStep2(status) {
        let location = await this.storageManager._set(
            'OnboardingStep2',
            status ? status : false,
        );
    }
    async setOnboardingStep3(status) {
        let response = await this.storageManager._set(
            'OnboardingStep3',
            status ? status : false,
        );
    }
    async setActivityCache(data) {
        let response = await this.storageManager._set(
            'activityDataCache',
            data ? data : false,
        );
    }
    async setSelectedUserName(data) {
        let response = await this.storageManager._set(
            'selectedUserName',
            data ? data : false,
        );
    }

    async getOnboardingCompleteStep() {
        let OnboardingStep3 = await this.storageManager._get('OnboardingStep3');
        if (OnboardingStep3) {
            return 3;
        }
        let OnboardingStep2 = await this.storageManager._get('OnboardingStep2');
        if (OnboardingStep2) {
            return 2;
        }
        let OnboardingStep1 = await this.storageManager._get('OnboardingStep1');
        if (OnboardingStep1) {
            return 1;
        }
        return false;
    }

}

