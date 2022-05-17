import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from './en.json';
import de from './de.json';

i18n.fallbacks = true;
i18n.translations = { en, de };

i18n.locale = Localization.locale || 'en';

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en;

export type LocaleOptionsType = 'en' | 'de';

export const i18nLocale = i18n.locale;

export const currentLocale = i18nLocale?.substring(0, 2) as LocaleOptionsType;

/**
 * Check whether the current locale is a RTL locale, such as `arabic` or `hebrew`.
 */
export const isRTL =
  currentLocale.indexOf('ar') === 0 || currentLocale.indexOf('he') === 0;

/**
 * Allow RTL alignment in RTL languages
 */
I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;
export type TxOptions = Record<string, string>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
  // @ts-ignore
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

/**
 * Text which provides different text for each locale.
 * English is the default locale if no translation is found.
 *
 * For example...
 * ```ts
 * { en: 'Hello', de: 'Hallo' }
 * ```
 */
export type TLocalizedText = {
  en: string;
  de: string;
};
