import { useContext } from 'react';
import { useTheme as useRestyleTheme } from '@shopify/restyle';

import { ThemeType } from './types';
import ThemeContext from './ThemeContext';

/**
 * Returns the current theme object, colors, spacing, borders.
 */
export const useTheme = () => useRestyleTheme<ThemeType>();

/**
 * Returns the current active theme colors.
 */
export const useThemeColors = () => useRestyleTheme<ThemeType>().colors;

/**
 * Returns the current active theme spacing constraints.
 */
export const useThemeSpacing = () => useRestyleTheme<ThemeType>().spacing;

/**
 * Returns the current active theme border radius constraints.
 */
export const useThemeBorderRadii = () => useRestyleTheme<ThemeType>().spacing;

/**
 * Returns the current active shadow constraints.
 */
export const useThemeShadows = () => useRestyleTheme<ThemeType>().shadows;

/**
 * Returns boolean of whether the current theme is in light mode.
 */
export const useIsThemeLight = () => useContext(ThemeContext).themeIsLight;

export default useTheme;
