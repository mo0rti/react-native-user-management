import * as types from '@Constants/Action-Types';
import { HOST_URL } from '@Constants/Tipz';
import HttpClient from '@Helpers/HttpClient';
import { Task } from '@Helpers/Request';

const _requested = (userId) => ({
    type: types.USER.SIGN_OUT_REQUESTED,
    payload: {
        userId: userId
    }
});

const _failed = message => ({
    type: types.USER.SIGN_OUT_FAILED,
    payload: {
        message
    }
});

const _done = result => ({
    type: types.USER.SIGN_OUT_SUCCESSFUL,
    payload: {
        result
    }
});

export const signout = (userId, token) => (dispatch) => {

  dispatch(_requested(userId));

  return new Promise(async(resolve, reject)=>{

    let[error, _] = await Task.run(HttpClient(token).postAsync(HOST_URL.USER.SIGN_OUT, {userId:userId}));
    if(error){
      dispatch(_failed(error));
      return reject(error);
    }
    dispatch(_done(userId));
    return resolve(userId);
  });
};
