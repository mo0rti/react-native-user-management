import { ActionTypes as types, Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockUpdateUserInfo, mockUpdateUserInfoFailed } from "@Store/mock";

const _requested = () => ({
    type: types.USER_ACCOUNT.UPDATE_REQUESTED,
    payload: {}
});

const _failed = ({ code, message }) => ({
    type: types.USER_ACCOUNT.UPDATE_FAILED,
    payload: {
        code,
        message,
    }
});

const _done = () => ({
    type: types.USER_ACCOUNT.UPDATE_SUCCESSFUL,
    payload: {}
});

const _api = ({ id, user }) => HttpClient().postAsync(`${Urls.USER.INDEX}/${id}`, user);

const _mock = ({ id, user }) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mockUpdateUserInfo);
        // reject(mockUpdateUserInfoFailed);
    }, Settings.MOCK_SERVICES_TIMEOUT);
});

const _update = (request) => Settings.USE_MOCK_SERVICES ? _mock(request) : _api(request);

export const update = (request) => async (dispatch) => {
    dispatch(_requested());

    try {
        let { status, data, message } = await _update(request);
        if (status) {
            dispatch(_done());
            return Promise.resolve(message);
        } else {
            dispatch(_failed({ message }));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};
