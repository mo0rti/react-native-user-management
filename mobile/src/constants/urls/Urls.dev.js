const BASE_URL = "http://192.168.43.185:3001";

export default {
    USER: {
        INDEX: `${BASE_URL}/api/user`,
        ADDRESSES: `${BASE_URL}/api/user/updateaddresses`,
        SIGN_IN: `${BASE_URL}/api/user/signin`,
        SIGN_UP: `${BASE_URL}/api/user/signup`,
        RESET_PASSWORD: `${BASE_URL}/api/user/resetpassword`,
        CHECK_USERNAME_AVAIBILITY: `${BASE_URL}/api/user/checkusername`,
    }
};
