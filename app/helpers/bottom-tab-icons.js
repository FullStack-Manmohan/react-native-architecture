import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../theme';

const { colors } = theme;

const tabIcons = {
  search: <FontAwesome name="search" color={colors.white} size={25} />,
  home: <FontAwesome name="home" color={colors.white} size={25} />,
  profile: <MaterialIcons name="person" color={colors.white} size={25} />,
};

export { tabIcons };
