import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { signup } from '@Actions/User-Account-Signup-Action';
import { ActionTypes as types, Urls } from '@Constants';
import { mockSignup, mockSignupFailed } from "@Store/mock";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('User signup async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('creates USER_ACCOUNT.SIGN_UP_SUCCESSFUL when signup process is done', () => {

        // arrange
        let url = Urls.USER.SIGN_UP;
        fetchMock
            .postOnce(url,
                {
                    body: mockSignup,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            const user = {};
            const expectedActions = [
            { type: types.USER_ACCOUNT.SIGN_UP_REQUESTED, payload: {} },
            { type: types.USER_ACCOUNT.SIGN_UP_SUCCESSFUL, payload: { user: mockSignup.data } }
        ]
        const store = mockStore({});

        // act, assert
        return store
            .dispatch(signup(user))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });

    it('creates USER_ACCOUNT.SIGN_UP_FAILED when signup process is failed', () => {

        // arrange
        let url = Urls.USER.SIGN_UP;
        fetchMock
            .postOnce(url,
                {
                    body: mockSignupFailed,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
        const user = {};
        const expectedActions = [
            { type: types.USER_ACCOUNT.SIGN_UP_REQUESTED, payload: {} },
            { type: types.USER_ACCOUNT.SIGN_UP_FAILED, payload: { message: mockSignupFailed.message } }
        ]
        const store = mockStore({ account: {} });

        // act, assert
        return store
            .dispatch(signup(user))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });
})