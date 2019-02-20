import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import NavigationService from "./Navigation-Service";
import MainTabNavigator from './Main-Tab-Navigator';
import AccountTabNavigator from './Account-Tab-Navigator';
import SignInScreen from '@Screens/signin';
import SignUpScreen from '@Screens/signup';
import SplashScreen from '@Screens/splash';
import ModalScreen from '@Screens/modal';

const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen,
        Signup: SignUpScreen
    }
);

const AppStackNavigation = createStackNavigator(
    {
        Main: MainTabNavigator,
        Edit: AccountTabNavigator
    }, {
        mode: 'modal',
        headerMode: 'none'
    }
);

const FlowNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        App: AppStackNavigation,
        Auth: AuthStack
    }, {
        initialRouteName: 'Splash',
        mode: 'modal',
        headerMode: 'none'
    }
);

const TopLevelStack = createStackNavigator(
    {
        Modal: ModalScreen,
        Application: FlowNavigator,
    }, {
        initialRouteName: 'Application',
        mode: 'modal',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(TopLevelStack);

const handleNavigationChange = (prevState, newState, action) => {
}

const RootNavigation = () => <AppContainer
    onNavigationStateChange={handleNavigationChange}
    ref={NavigationService.setTopLevelNavigator} />;

export default RootNavigation;