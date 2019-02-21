import * as types from '@Constants/Action-Types';

const _requested = () => ({
  type: types.USER_ACCOUNT.SIGN_OUT_REQUESTED,
  payload: {}
});

const _failed = message => ({
  type: types.USER_ACCOUNT.SIGN_OUT_FAILED,
  payload: {
    message
  }
});

const _done = () => ({
  type: types.USER_ACCOUNT.SIGN_OUT_SUCCESSFUL,
  payload: {}
});

export const signout = () => (dispatch) => {
  dispatch(_requested());
  try {
    dispatch(_done());
    return Promise.resolve();
  } catch (error) {
    dispatch(_failed({ message: "Sign Out Error" }));
    return Promise.reject(error);
  }
};
