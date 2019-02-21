import * as actiontype from '@Constants/Action-Types';

const initState = {
  isRequesting: false,
  user: {
    id: "",
    username: "",
    avatar: "",
    name: "",
    gender: "male",
    phone: "",
    address: [],
    token: ""
  },
  error: { code: "", message: "" }
};

const userAccount = (state = initState, action) => {
  switch (action.type) {
    //------------------- SIGN IN
    case actiontype.USER_ACCOUNT.SIGN_IN_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USER_ACCOUNT.SIGN_IN_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USER_ACCOUNT.SIGN_IN_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, user: action.payload.user, error: { code: "", message: "" } });
    }
    //------------------- SIGN UP
    case actiontype.USER_ACCOUNT.SIGN_UP_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USER_ACCOUNT.SIGN_UP_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USER_ACCOUNT.SIGN_UP_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, user: action.payload.user, error: { code: "", message: "" } });
    }
    //------------------- SIGN OUT
    case actiontype.USER_ACCOUNT.SIGN_OUT_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USER_ACCOUNT.SIGN_OUT_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USER_ACCOUNT.SIGN_OUT_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, user: action.payload, error: { code: "", message: "" } });
    }
    //------------------- ACCOUNT UPDATE
    case actiontype.USER_ACCOUNT.UPDATE_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USER_ACCOUNT.UPDATE_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USER_ACCOUNT.UPDATE_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, error: { code: "", message: "" } });
    }
    //------------------- ACCOUNT ADDRESSES UPDATE
    case actiontype.USER_ACCOUNT.ADDRESS_UPDATE_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USER_ACCOUNT.ADDRESS_UPDATE_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USER_ACCOUNT.ADDRESS_UPDATE_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, error: { code: "", message: "" } });
    }
    //------------------- ACCOUNT DELETE
    case actiontype.USER_ACCOUNT.DELETE_REQUESTED: {
      return Object.assign({}, state, { isRequesting: true, error: { code: "", message: "" } });
    }
    case actiontype.USER_ACCOUNT.DELETE_FAILED: {
      return Object.assign({}, state, { isRequesting: false, error: { ...action.payload } });
    }
    case actiontype.USER_ACCOUNT.DELETE_SUCCESSFUL: {
      return Object.assign({}, state, { isRequesting: false, error: { code: "", message: "" } });
    }
    default: return state;
  }
};

export default userAccount;
