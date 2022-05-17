import { Platform, StyleSheet, ViewStyle } from 'react-native';

import { colors } from './colorVariants';

const shadowColor = Platform.select({
  android: colors.primary600,
  ios: colors.primary200,
});

export const shadowVariants = {
  elevation2: {
    elevation: 2,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor,
  },
  elevation4: {
    elevation: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowColor,
  },
  elevation8: {
    elevation: 8,
    shadowOffset: { height: 8, width: 0 },
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowColor,
  },
  elevation16: {
    elevation: 16,
    shadowOffset: { height: 16, width: 0 },
    shadowRadius: 32,
    shadowOpacity: 1,
    shadowColor,
  },
  elevation24: {
    elevation: 24,
    shadowOffset: { height: 24, width: 0 },
    shadowRadius: 48,
    shadowOpacity: 1,
    shadowColor,
  },
} as const;

export type TextShadowVariantsType = keyof typeof shadowVariants;

export const shadows = StyleSheet.create(shadowVariants);

export type Elevation = 2 | 4 | 8 | 16 | 24;

export function useThemeShadowStyle(elevation: Elevation): ViewStyle {
  const shadowKey: TextShadowVariantsType = `elevation${elevation}`;

  return shadows[shadowKey];
}
