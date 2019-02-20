import * as actiontype from '@Constants/Action-Types';

const initState = {
  isLoading: false,
  error: { code: "", message: "" },
  userAccounts: [],
  selectedUser: { address: [] }
};

const users = (state = initState, action) => {
  switch (action.type) {
    //------------------------ USERS
    case actiontype.USERS.LOAD_REQUESTED: {
      return Object.assign({}, state, { isLoading: true, error: { code: "", message: "" } });
    }
    case actiontype.USERS.LOAD_FAILED: {
      return Object.assign({}, state, { isLoading: false, error: { ...action.payload } });
    }
    case actiontype.USERS.LOAD_RECEIVED: {
      return Object.assign({}, state, { isLoading: false, usersAccounts: action.payload.result, error: { code: "", message: "" } });
    }
    //------------------------ USER
    case actiontype.USERS.INFORMATION_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USERS.INFORMATION_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USERS.INFORMATION_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, selectedUser: action.payload.user, error: { code: "", message: "" } });
    }

    default: return state;
  }
};

export default users;
