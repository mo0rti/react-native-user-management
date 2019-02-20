import { ToastAndroid } from 'react-native';

const _showError = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
}

const _showSuccess = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
}

export default PvhToast = {
    showSuccess: _showSuccess,
    showError: _showError
}
