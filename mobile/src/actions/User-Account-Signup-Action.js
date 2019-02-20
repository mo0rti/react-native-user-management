import { ActionTypes as types, Urls, Settings } from '@Constants';
import HttpClient from '@Helpers/HttpClient';
import { mockSignup, mockSignupFailed } from "@Store/mock";

const _requested = () => ({
    type: types.USER_ACCOUNT.SIGN_UP_REQUESTED,
    payload: {}
});

const _failed = ({ code, message }) => ({
    type: types.USER_ACCOUNT.SIGN_UP_FAILED,
    payload: { code, message }
});

const _done = user => ({
    type: types.USER_ACCOUNT.SIGN_UP_SUCCESSFUL,
    payload: { user }
});

const _api = (request) => HttpClient().postAsync(Urls.USER.SIGN_UP, request);

const _mock = (request) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mockSignup);
        // reject(mockSignupFailed);
    }, Settings.MOCK_SERVICES_TIMEOUT);
});

const _signup = (request) => Settings.USE_MOCK_SERVICES ? _mock(request) : _api(request);

export const signup = (request) => async (dispatch) => {
    dispatch(_requested());
  
    try {
      let { status, data, message } = await _signup(request);
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