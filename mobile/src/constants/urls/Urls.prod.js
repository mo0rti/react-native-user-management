const BASE_URL = "http://localhost:3001";

export default {
    USERS: {
        INDEX: `${BASE_URL}/api/useraccounts`
    },
    USER: {
        INDEX: `${BASE_URL}/api/user`,
        SIGN_IN: `${BASE_URL}/api/user/signin`,
        SIGN_UP: `${BASE_URL}/api/user/signup`,
        RESET_PASSWORD: `${BASE_URL}/api/resetpassword`,
        CHECK_USERNAME_AVAIBILITY: `${BASE_URL}/api/checkusername`,
    }
};
