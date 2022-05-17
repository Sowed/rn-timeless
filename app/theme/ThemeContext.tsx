import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Appearance, StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider as RestyleProvider } from '@shopify/restyle';

import { loadString, saveString, saveData } from '@utils/storage';

import { IS_THEMING_ENABLED, SETTING_CURRENT_THEME } from './constants';

import { theme, darkTheme } from './theme';
import {
  ThemeContextOptionsTypes,
  ThemeModeType,
  ThemeProviderPropsTypes,
  ThemeType,
} from './types';

/**
 * -----------------------------------------------------------------------------
 * Provides App theme to all underlying child components which can access it
 * deep within the tree for direct updates ad customizations.
 */
const ThemeContext = createContext<ThemeContextOptionsTypes>({
  handleThemeChange: null,
  theme,
  themeIsLight: true,
  themeKey: 'default',
});

/**
 * -----------------------------------------------------------------------------
 * Base Theme Provider of the App that exposes configurable settings for the app
 *
 * - Theme Mode support for dark & Light Mode
 */
export function ThemeProvider({ children }: ThemeProviderPropsTypes) {
  let deviceThemeIsLight = true;

  if (IS_THEMING_ENABLED) {
    deviceThemeIsLight = Appearance.getColorScheme() === 'light';
  }

  const colorScheme = useColorScheme();

  const [themeIsLight, setThemeIsLight] = useState(deviceThemeIsLight);
  const [themeKey, setThemeKey] = useState<ThemeModeType>(
    IS_THEMING_ENABLED ? colorScheme || 'light' : 'light',
  );

  useEffect(() => {
    const retrieveSavedThemeSettings = async () => {
      const persistedThemed = await loadString(SETTING_CURRENT_THEME);

      const savedTheme = (persistedThemed || 'default') as ThemeModeType;
      const systemThemeIsLight = colorScheme !== 'dark';

      setThemeIsLight(() => savedTheme === 'light' || systemThemeIsLight);
      setThemeKey(() => savedTheme);
    };

    if (IS_THEMING_ENABLED) {
      retrieveSavedThemeSettings();
    }
  }, [colorScheme]);

  const handleThemeChange = (newTheme: ThemeModeType) => {
    setThemeKey(() => newTheme);

    if (newTheme === 'default') {
      setThemeIsLight(() => colorScheme !== 'dark');
      saveData(SETTING_CURRENT_THEME, null);
    } else {
      setThemeIsLight(() => newTheme === 'light');
      saveString(SETTING_CURRENT_THEME, newTheme);
    }
  };

  if (themeIsLight) {
    StatusBar.setBarStyle('dark-content', true);
  } else {
    StatusBar.setBarStyle('light-content', true);
  }

  const activeTheme: ThemeType = themeIsLight ? theme : darkTheme;

  const memoizedValue = useMemo(
    () => ({
      handleThemeChange,
      theme: activeTheme,
      themeKey,
      themeIsLight,
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeIsLight],
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <RestyleProvider theme={activeTheme}>{children}</RestyleProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
