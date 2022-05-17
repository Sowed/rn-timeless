import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import {
  TAppRouteItems,
  TAppStackParamsList,
} from './AppStackRoutes/app-route-items';
import { TBottomTabsParamsList } from './BottomTabRoutes/bottom-route-items';

export type { TAppStackParamsList };

/**
 * -----------------------------------------------------------------------------
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using the store(s) to keep application state rather than passing
 * state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type TNavigatorParamList = TAppStackParamsList & TBottomTabsParamsList;

export type TNavigatorScreenNamesList =
  | keyof TAppStackParamsList
  | keyof TBottomTabsParamsList;

export type TAppRouteScreenProps = StackScreenProps<
  TAppStackParamsList,
  TAppRouteItems['name']
>;

export type TAppStackUseNavigatorScreenParams = StackNavigationProp<
  TAppStackParamsList,
  keyof TAppStackParamsList
>;

export type TBottomTabsUseNavigatorScreenParams = BottomTabNavigationProp<
  TBottomTabsParamsList,
  keyof TBottomTabsParamsList
>;

export type TUseNavigatorScreenParams = CompositeNavigationProp<
  StackNavigationProp<TAppStackParamsList>,
  BottomTabNavigationProp<TBottomTabsParamsList>
>;
