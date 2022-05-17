import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import bottomRouteItems, { TBottomTabsParamsList } from './bottom-route-items';
// import BottomTabs from './BottomTabItem';

/**
 * Documentation: https://reactnavigation.org/docs/stack-navigator/
 */
const TabItem = createBottomTabNavigator<TBottomTabsParamsList>();

/**
 * -----------------------------------------------------------------------------
 * This navigator holds all routes that are displayed immediately on the
 * bottom tab navigation and their respective children
 */
function BottomTabRoutes() {
  return (
    <TabItem.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={bottomRouteItems[0].name}
      // tabBar={(props) => <BottomTabs {...props} />}
    >
      {bottomRouteItems.map(({ name, component, options }) => (
        <TabItem.Screen
          key={name}
          name={name}
          component={component}
          options={
            options || {
              presentation: 'modal',
              headerBackAccessibilityLabel: name,
            }
          }
        />
      ))}
    </TabItem.Navigator>
  );
}

export default BottomTabRoutes;
