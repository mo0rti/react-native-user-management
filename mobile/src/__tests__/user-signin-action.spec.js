import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { signin } from '@Actions/User-Account-SignIn-Action';
import { ActionTypes as types, Urls } from '@Constants';
import { mockSignin, mockSigninFailed } from "@Store/mock";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
fetchMock.config.sendAsJson = true;

describe('User signin async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('creates USER_ACCOUNT.SIGN_IN_SUCCESSFUL when signin process is done', () => {

        // arrange
        let url = Urls.USER.SIGN_IN;
        fetchMock
            .postOnce(url,
                {
                    body: mockSignin,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
        const request = { username: 'morteza', password: 'mypass123' };
        const expectedActions = [
            { type: types.USER_ACCOUNT.SIGN_IN_REQUESTED, payload: {} },
            { type: types.USER_ACCOUNT.SIGN_IN_SUCCESSFUL, payload: { user: mockSignin.data } }
        ]
        const store = mockStore({});

        // act, assert
        return store
            .dispatch(signin(request))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });

    it('creates USER_ACCOUNT.SIGN_IN_FAILED when signin process is failed', () => {

        // arrange
        let url = Urls.USER.SIGN_IN;
        fetchMock
            .postOnce(url,
                {
                    body: mockSigninFailed,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
        const request = { username: 'morteza', password: 'mypass123' };
        const expectedActions = [
            { type: types.USER_ACCOUNT.SIGN_IN_REQUESTED, payload: {} },
            { type: types.USER_ACCOUNT.SIGN_IN_FAILED, payload: { message: mockSigninFailed.message } }
        ]
        const store = mockStore({ account: {} });

        // act, assert
        return store
            .dispatch(signin(request))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });
})