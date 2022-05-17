import React, { ReactNode } from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {
  Box,
  useThemeColors,
  useThemeSpacing,
  // useIsThemeLight
} from '@theme';

import { TIconProps, TIconBaseProps } from './icon.types';
/**
 * Actual component rendering the icon and box wrapper to allow for extra grid
 * space formatting around the icon.
 */
function IconBase({
  color,
  isFocused,
  // light = true,
  name,
  nameAndroid,
  opacity,
  size,
  solid,
  style,
  type,
  ...rest
}: TIconBaseProps) {
  const { primaryForeground, typography } = useThemeColors();
  // const themeIsLight = useIsThemeLight;

  const iconColor = color || (isFocused ? primaryForeground : typography);
  const nameOfName = Platform.OS !== 'android' ? nameAndroid : name;

  // TODO: Use rest.type to determine which icon library to render from.
  // The default one is `FontAwesome5Pro`

  let IconElement: ReactNode = null;

  switch (type) {
    case 'AntDesignIcon': {
      IconElement = (
        <AntDesignIcon
          name={nameOfName || name}
          size={size}
          color={iconColor}
        />
      );
      break;
    }
    case 'EvilIcon': {
      IconElement = (
        <EvilIcon name={nameOfName || name} size={size} color={iconColor} />
      );
      break;
    }
    case 'FeatherIcon': {
      IconElement = (
        <FeatherIcon name={nameOfName || name} size={size} color={iconColor} />
      );
      break;
    }
    case 'IonIcon': {
      IconElement = (
        <IonIcon name={nameOfName || name} size={size} color={iconColor} />
      );
      break;
    }
    default: {
      IconElement = (
        <FAIcon
          name={nameOfName || name}
          size={size}
          color={iconColor}
          // Only available on FA5 Pro
          // light={light || themeIsLight}
          // solid={solid || false}
        />
      );
    }
  }

  return (
    <Box opacity={opacity || 1} pointerEvents="none" style={style} {...rest}>
      {IconElement}
    </Box>
  );
}

/**
 * The base icon component wrapper around the FontAwesome Icon.
 * Please use this instead of directly importing extra lib icons.
 */
export function Icon({
  color,
  isFocused,
  light,
  name,
  nameAndroid,
  opacity,
  onPress,
  size,
  solid,
  style,
  ...rest
}: TIconProps) {
  const { s: hitSlopPadding } = useThemeSpacing();

  if (onPress) {
    return (
      // TODO: Look into using Pressable instead of TouchableOpacity
      <TouchableOpacity
        hitSlop={{
          bottom: hitSlopPadding,
          left: hitSlopPadding,
          right: hitSlopPadding,
          top: hitSlopPadding,
        }}
        onPress={onPress}>
        <IconBase
          color={color}
          name={name}
          nameAndroid={nameAndroid}
          light={light}
          opacity={opacity}
          size={size}
          solid={solid}
          style={style}
          {...rest}
        />
      </TouchableOpacity>
    );
  }

  return (
    <IconBase
      color={color}
      name={name}
      nameAndroid={nameAndroid}
      isFocused={isFocused}
      light={light}
      opacity={opacity}
      size={size}
      solid={solid}
      style={style}
      {...rest}
    />
  );
}
