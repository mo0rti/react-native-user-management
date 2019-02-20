import { Platform } from "react-native";
export const FONT_FAMILY = (Platform.OS == 'ios') ? 'helvetica-neue' : 'sans-serif';

export const NETWORK_STATUS_CODE = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  BAD_REQUEST: 400,
  ABORTED: 'AbortError',
  NET_PROTOCOL_ERROR: { code: 900, message: 'Netowork protocol error' },
  NET_UNHANDLED_ERROR: { code: 901, message: 'Netowork unhandled error' }
}


export const USE_MOCK_SERVICES = false;
export const MOCK_SERVICES_TIMEOUT = 500;
export const API_PAGE_SIZE = 20;

export default {
  FONT_FAMILY,
  NETWORK_STATUS_CODE,
  USE_MOCK_SERVICES,
  MOCK_SERVICES_TIMEOUT,
  API_PAGE_SIZE
}
