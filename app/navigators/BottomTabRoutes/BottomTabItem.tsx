import React from 'react';
import { Pressable } from 'react-native';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs';
import {
  TabNavigationState,
  NavigationHelpers,
} from '@react-navigation/native';

import { Box, Text, useThemeColors } from '@theme';

import { TBottomTabsParamsList } from './bottom-route-items';

interface IRenderTabIconProps {
  options: BottomTabNavigationOptions;
  isFocused: boolean;
  color: string;
}

function RenderTabIcon({ options, isFocused, color }: IRenderTabIconProps) {
  return (
    options.tabBarIcon?.({
      size: 22,
      color,
      focused: isFocused,
    }) || null
  );
}

interface IBottomTabItemProps {
  descriptors: BottomTabBarProps['descriptors'];
  state: TabNavigationState<TBottomTabsParamsList>;
  navigation: NavigationHelpers<
    TBottomTabsParamsList,
    BottomTabNavigationEventMap
  >;
}

/**
 * -----------------------------------------------------------------------------
 * This is to be used in rendering a custom bottom tabs icon.
 */
function BottomTabItem({
  state,
  descriptors,
  navigation,
}: IBottomTabItemProps) {
  const { primaryBackground, typography } = useThemeColors();

  return (
    <Box style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const options = descriptors[route.key]?.options;

        const label = options?.tabBarLabel || route?.name || options?.title;
        const isFocused = state.index === index;
        const color = isFocused ? primaryBackground : typography;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the
            // tab screen are preserved
            navigation.navigate({
              merge: true,
              name: route.name,
              params: route.params,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              marginBottom: 24,
              flex: 1,
              width: 28,
              height: 52,
            }}>
            <Box alignItems="center" justifyContent="center" flex={1}>
              {RenderTabIcon({ isFocused, options, color })}

              {
                // TODO: Handle case for custom element
                typeof label === 'string' && (
                  <Text
                    paddingVertical="xs"
                    fontSize={12}
                    color={isFocused ? 'primaryBackground' : 'typography'}>
                    {label}
                  </Text>
                )
              }
            </Box>
          </Pressable>
        );
      })}
    </Box>
  );
}

export default BottomTabItem;
