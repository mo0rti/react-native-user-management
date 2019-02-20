import { combineReducers } from 'redux';
import userAccount from './user-account';
import users from './users';

const allReducers = combineReducers(
    {
        account: userAccount,
        users
    });

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;
