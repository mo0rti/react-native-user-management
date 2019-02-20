import userAccount from '@Reducers/user-account';
import { ActionTypes as actiontypes } from '@Constants';
import { mockSignin, mockSigninFailed, mockSignup, mockSignupFailed } from "@Store/mock";

const initialState = {
    isRequesting: false,
    user: {
        id: "", username: "", avatar: "", name: "", gender: "male", phone: "", address: [], token: ""
    },
    error: { code: "", message: "" }
};

describe('User signin reducer', () => {
    it('should return the initial state', () => {
        // arrange
        let expectedState = initialState;

        // act
        let actualState = userAccount(undefined, {});

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the user signin request action', () => {

        // arrange
        let expectedState = JSON.parse(JSON.stringify(initialState));
        expectedState.isRequesting = true;

        // act
        let actualState = userAccount(undefined,
            {
                type: actiontypes.USER_ACCOUNT.SIGN_IN_REQUESTED,
                payload: {}
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the user signin failed action', () => {

        // arrange
        let expectedState = JSON.parse(JSON.stringify(initialState));
        expectedState.error = { code: "", message: mockSigninFailed.message };

        // act
        let actualState = userAccount(undefined,
            {
                type: actiontypes.USER_ACCOUNT.SIGN_IN_FAILED,
                payload: {
                    code: "",
                    message: mockSigninFailed.message
                }
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the user signin successfull action', () => {

        // arrange
        let expectedState = JSON.parse(JSON.stringify(initialState));
        expectedState.user = mockSignin.data;

        // act
        let actualState = userAccount(undefined,
            {
                type: actiontypes.USER_ACCOUNT.SIGN_IN_SUCCESSFUL,
                payload: {
                    user: mockSignin.data
                }
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the user signup request action', () => {

        // arrange
        let expectedState = JSON.parse(JSON.stringify(initialState));
        expectedState.isRequesting = true;

        // act
        let actualState = userAccount(undefined,
            {
                type: actiontypes.USER_ACCOUNT.SIGN_UP_REQUESTED,
                payload: {}
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the user signup failed action', () => {

        // arrange
        let expectedState = JSON.parse(JSON.stringify(initialState));
        expectedState.error = { code: "", message: mockSignupFailed.message };

        // act
        let actualState = userAccount(undefined,
            {
                type: actiontypes.USER_ACCOUNT.SIGN_UP_FAILED,
                payload: {
                    code: "",
                    message: mockSignupFailed.message
                }
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the user signup successfull action', () => {

        // arrange
        let expectedState = JSON.parse(JSON.stringify(initialState));
        expectedState.user = mockSignin.data;

        // act
        let actualState = userAccount(undefined,
            {
                type: actiontypes.USER_ACCOUNT.SIGN_UP_SUCCESSFUL,
                payload: {
                    user: mockSignup.data
                }
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });
});