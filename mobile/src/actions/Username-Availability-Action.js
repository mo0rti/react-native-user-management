import { Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockCheckUsernameAvaibility, mockCheckUsernameAvaibilityFailed } from "@Store/mock";

const _api = (username) => HttpClient().getAsync(`${Urls.USER.CHECK_USERNAME_AVAIBILITY}/${username}`);

const _mock = (username) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mockCheckUsernameAvaibility);
        // reject(mockCheckUsernameAvaibilityFailed);
    }, Settings.MOCK_SERVICES_TIMEOUT);
});

const _checkUsernameAvaibility = (request) => Settings.USE_MOCK_SERVICES ? _mock(request) : _api(request);

export const checkUsernameAvaibility = async (username) => {
    try {
        let { status, message } = await _checkUsernameAvaibility(username);
        if (status) {
            return Promise.resolve(true);
        } else {
            return Promise.reject({ message });
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
