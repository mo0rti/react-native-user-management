import { ActionTypes as types, Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockGetUser, mockGetUserFailed } from "@Store/mock";

const _requested = () => ({
    type: types.USERS.INFORMATION_REQUESTED,
    payload: {}
});

const _failed = ({ code, message }) => ({
    type: types.USERS.INFORMATION_FAILED,
    payload: { code, message }
});

const _done = user => ({
    type: types.USERS.INFORMATION_SUCCESSFUL,
    payload: {
        user
    }
});

const _api = ({ id }) => HttpClient().getAsync(`${Urls.USER.INDEX}/${id}`);

const _mock = ({ id }) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mockGetUser);
        //reject(mockGetUserFailed);
    }, Settings.MOCK_SERVICES_TIMEOUT);
});

const _getUserInfo = (request) => Settings.USE_MOCK_SERVICES ? _mock(request) : _api(request);

export const getUserInfo = (request) => async (dispatch) => {
    dispatch(_requested());

    try {
        let { status, data, message } = await _getUserInfo(request);
        if (status) {
            dispatch(_done(data));
            return Promise.resolve(data);
        } else {
            dispatch(_failed({ message }));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};
