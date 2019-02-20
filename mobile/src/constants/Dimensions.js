import { Dimensions, DeviceInfo, Platform } from 'react-native';
import { Header } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

export const LANDSCAPE = 'landscape';
export const PORTRAIT = 'portrait';

const getHeaderHeight = () => {
  let height;
  const orientation = getOrientation();
  height = getHeaderSafeAreaHeight();
  height += DeviceInfo.isIPhoneX_deprecated && orientation === PORTRAIT ? 24 : 0;

  return height;
};

// This does not include the new bar area in the iPhone X, so I use this when I need a custom headerTitle component
const getHeaderSafeAreaHeight = () => {
  return Header.HEIGHT;
};

export const getOrientation = () => {
  const { width, height } = Dimensions.get('window');
  return width > height ? LANDSCAPE : PORTRAIT;
};

export default {
  navbarHeight: getHeaderHeight(),
  indent: 24,
  halfIndent: 12,
  width,
  height,
};
