import React, { ComponentType } from 'react';

import {
  HomeScreen,
  SettingsScreen,
  TradingScreen,
  WalletScreen,
} from '@screens';

import { Icon } from '@components';

export type TBottomTabsParamsList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  TradingScreen: undefined;
  WalletScreen: undefined;
};

export type TBottomTabItems = {
  name: keyof TBottomTabsParamsList;
  component: ComponentType<unknown>;
  options?: Record<string, unknown>;
};

/**
 * -----------------------------------------------------------------------------
 * List the bottom tab items and respective stack
 * TODO:
 * - Add a custom icon for each tab, SVG instead of the icon fonts, for finer control
 * - Let the bottoms tab item extend the options to allow for things like labels/counters.
 * - Get the focus and label colors from the theme
 */
const bottomRouteItems: TBottomTabItems[] = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      tabBarLabel: 'Drops',
      tabBarIcon: (props: {
        size: number;
        focused: boolean;
        color: string;
      }) => (
        <Icon
          name="diamond"
          color={props.color}
          size={props.size}
          solid={props.focused}
        />
      ),
    },
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    options: {
      tabBarLabel: 'Wallet',
      tabBarIcon: (props: {
        size: number;
        focused: boolean;
        color: string;
      }) => (
        <Icon
          name="credit-card"
          color={props.color}
          size={props.size}
          solid={props.focused}
        />
      ),
    },
  },
  {
    name: 'TradingScreen',
    component: TradingScreen,
    options: {
      tabBarLabel: 'Trading',
      tabBarIcon: (props: {
        size: number;
        focused: boolean;
        color: string;
      }) => (
        <Icon
          name="balance-scale"
          color={props.color}
          size={props.size}
          solid={props.focused}
        />
      ),
    },
  },
  {
    name: 'SettingsScreen',
    component: SettingsScreen,
    options: {
      tabBarLabel: 'Settings',
      tabBarIcon: (props: {
        size: number;
        focused: boolean;
        color: string;
      }) => (
        <Icon
          name="cog"
          color={props.color}
          size={props.size}
          solid={props.focused}
        />
      ),
    },
  },
];

export default bottomRouteItems;
