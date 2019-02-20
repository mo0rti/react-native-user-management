import { Platform } from 'react-native';
import Colors from './Colors';
import Urls from './urls';
import * as ActionTypes from './Action-Types';
import Settings from './Settings';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const HEADER_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;

export {
    Colors,
    Urls,
    ActionTypes,
    Settings,
};