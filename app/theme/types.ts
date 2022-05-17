import { ReactElement } from 'react';

import { ThemeType as AppThemeType } from './theme';
import { BoxProps } from './box';
import { TextProps } from './text';

export type { ThemeTextType } from './theme';
export type ThemeType = AppThemeType;
export type BoxPropsType = BoxProps<ThemeType>;
export type TextPropsType = TextProps<ThemeType>;
export type ButtonThemedPropsType = TextProps<ThemeType>;

/**
 * The type definition of the theme
 */
export type ThemeModeType = 'light' | 'dark' | 'default';

export interface ThemeProviderPropsTypes {
  children: ReactElement;
}

export interface ThemeContextOptionsTypes {
  handleThemeChange: ((newTheme: ThemeModeType) => void) | null;
  theme: AppThemeType;
  themeIsLight: boolean;
  themeKey: ThemeModeType;
}
