import { ReactNode } from 'react';

import {
  StyleProp,
  TextProps as RNTextProperties,
  TextStyle,
} from 'react-native';
import { TextProps as RestyleTextProps } from '@shopify/restyle';
import i18n from 'i18n-js';

import { TxKeyPath, TLocalizedText } from '@i18n';
import { ThemeType, ThemeTextType } from '@theme';

export type TBaseTextProps = RestyleTextProps<ThemeType> &
  RNTextProperties & {
    /**
     * Children components, rendered as a last resort if `tx` or `text` are absent.
     */
    children?: ReactNode;

    /**
     * Text which is looked up via `i18n` for translation
     */
    tx?: TxKeyPath;

    /**
     * Optional options to pass to i18n. Useful for interpolation
     * as well as explicitly setting locale or translation fallbacks.
     */
    txOptions?: i18n.TranslateOptions;

    /**
     * The text to display if not using `tx` or nested components.
     */
    text?: string;

    /**
     * Text which provides different text for each locale e.g.
     * ```ts
     * { en: 'Hello', de: 'Halo' }
     * ```
     */
    txLocalized?: TLocalizedText;

    /**
     * An optional style override useful for padding & margin.
     */
    style?: StyleProp<TextStyle>;

    variant?: ThemeTextType;
  };
