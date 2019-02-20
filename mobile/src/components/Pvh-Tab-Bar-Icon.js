import React from 'react';
import { Icon } from 'expo';

import Colors from '@Constants/Colors';

const PvhTabBarIcon = ({ name, focused }) =>
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />

export default PvhTabBarIcon;