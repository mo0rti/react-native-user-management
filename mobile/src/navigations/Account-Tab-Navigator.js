import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { PvhTabBarIcon } from '@Components';
import AddressScreen from '@Screens/address';
import EditScreen from '@Screens/edit';
import SettingScreen from '@Screens/setting';

import { defaultNavigationOptions } from '@Constants/Styles';

const withUserParams = (WrappedComponent) => {
    return class extends React.Component {
        static router = WrappedComponent.router;
        render() {
            const { navigation } = this.props;
            const { user, onGoBack } = navigation.state.params;
            const screenProps = { user, onGoBack };

            return <WrappedComponent navigation={navigation} screenProps={screenProps} />;
        }
    }
};

const EditStack = createStackNavigator({ EditScreen }, { defaultNavigationOptions });
const AddressStack = createStackNavigator({ AddressScreen }, { defaultNavigationOptions });
const SettingStack = createStackNavigator({ SettingScreen }, { defaultNavigationOptions });

export default createBottomTabNavigator({
    UserProfile: {
        screen: withUserParams(EditStack),
        navigationOptions: () => ({
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
                <PvhTabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-person${focused ? '' : '-outline'}`
                            : 'md-person'
                    }
                />
            )
        })
    },
    UserAddress: {
        screen: withUserParams(AddressStack),
        navigationOptions: () => ({
            tabBarLabel: 'Address',
            tabBarIcon: ({ focused }) => (
                <PvhTabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-information-circle${focused ? '' : '-outline'}`
                            : 'md-information-circle'
                    }
                />
            )
        })
    },
    UserSettings: {
        screen: withUserParams(SettingStack),
        navigationOptions: () => ({
            tabBarLabel: 'Setting',
            tabBarIcon: ({ focused }) => (
                <PvhTabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-settings${focused ? '' : '-outline'}`
                            : 'md-settings'
                    }
                />
            )
        })
    }
});
