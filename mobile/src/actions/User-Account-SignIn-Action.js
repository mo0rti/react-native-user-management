import { ActionTypes as types, Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockSignin, mockSigninFailed } from "@Store/mock";

const _requested = () => ({
  type: types.USER_ACCOUNT.SIGN_IN_REQUESTED,
  payload: {}
});

const _failed = ({ code, message }) => ({
  type: types.USER_ACCOUNT.SIGN_IN_FAILED,
  payload: { code, message }
});

const _done = user => ({
  type: types.USER_ACCOUNT.SIGN_IN_SUCCESSFUL,
  payload: { user }
});

const _api = ({ username, password }) => HttpClient().postAsync(Urls.USER.SIGN_IN, { username, password });

const _mock = ({ username, password }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(mockSignin);
    //reject(mockSigninFailed);
  }, Settings.MOCK_SERVICES_TIMEOUT);
});

const _signin = (request) => Settings.USE_MOCK_SERVICES ? _mock(request) : _api(request);

export const signin = (request) => async (dispatch) => {
  dispatch(_requested());

  try {
    let { status, data, message } = await _signin(request);
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
