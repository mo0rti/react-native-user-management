import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { PvhTabBarIcon } from '@Components';
import HomeScreen from '@Screens/home';

import { defaultNavigationOptions } from '@Constants/Styles';

const HomeStack = createStackNavigator({ HomeScreen }, { defaultNavigationOptions });

HomeStack.navigationOptions = {
  tabBarLabel: 'Users',
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
};

export default createBottomTabNavigator({
  HomeStack
});
