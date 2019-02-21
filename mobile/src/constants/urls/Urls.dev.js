<<<<<<< HEAD
const BASE_URL = "http://192.168.88.51:3001";
=======
const BASE_URL = "http://localhost:3001";
>>>>>>> 7eaa2a60609dcfff2b25430005bf40e545fc6882

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
