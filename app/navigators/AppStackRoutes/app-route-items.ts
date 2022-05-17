import { ComponentType } from 'react';

import BottomTabRoutes from '../BottomTabRoutes';

export type TAppStackParamsList = {
  LandingScreen: undefined;
};

export type TAppRouteItems = {
  name: keyof TAppStackParamsList;
  component: ComponentType<any>;
  options?: Record<string, any>;
};

/**
 * -----------------------------------------------------------------------------
 * Lists all the main Routes in the Applications.
 * These are the ones that control the root logic of the App.
 */
const appRouteItems: TAppRouteItems[] = [
  {
    name: 'LandingScreen',
    component: BottomTabRoutes,
  },
];

export default appRouteItems;
