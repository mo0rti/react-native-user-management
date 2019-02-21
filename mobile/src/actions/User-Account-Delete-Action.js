import { ActionTypes as types, Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockDeleteUser, mockDeleteUserFailed } from "@Store/mock";

const _requested = () => ({
    type: types.USER_ACCOUNT.DELETE_REQUESTED,
    payload: {}
});

const _failed = ({ code, message }) => ({
    type: types.USER_ACCOUNT.DELETE_FAILED,
    payload: {
        code,
        message,
    }
});

const _done = () => ({
    type: types.USER_ACCOUNT.DELETE_SUCCESSFUL,
    payload: {}
});

const _api = (id) => HttpClient().deleteAsync(`${Urls.USER.INDEX}/${id}`);

const _mock = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(mockDeleteUser);
        reject(mockDeleteUserFailed);
    }, Settings.MOCK_SERVICES_TIMEOUT);
});

const _deleteUser = (id) => Settings.USE_MOCK_SERVICES ? _mock(id) : _api(id);

export const deleteUser = (id) => async (dispatch) => {
    dispatch(_requested());

    try {
        let { status, message } = await _deleteUser(id);
        if (status) {
            dispatch(_done());
            return Promise.resolve(status);
        } else {
            dispatch(_failed({ message }));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};
