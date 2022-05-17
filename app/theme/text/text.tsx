import * as React from 'react';
import { createText } from '@shopify/restyle';

import { currentLocale, translate } from '@i18n';
import { ThemeType } from '@theme';

import { TBaseTextProps } from './text.props';

/**
 * Create Primitives to Replace the RN Text Components.
 * Allow you to add type safe style props to the text element.
 */
const ThemedText = createText<ThemeType, TBaseTextProps>();
/**
 * Adjust font scaling on Text and TextInput elements to a maximum of 1, so that
 * the user can scale them down but not up.
 */
ThemedText.defaultProps = ThemedText.defaultProps || {};

ThemedText.defaultProps.maxFontSizeMultiplier = 1;

/**
 * -----------------------------------------------------------------------------
 * Provides a themed and translation ready HOC `Text` component.
 * Can render the text through any of the following props options.
 *
 * - `tx` - Text which is looked up via `i18n` for translation.
 * - `text` - The text to display if not using `tx` or nested components.
 * - `children` - Children components, rendered as a last resort if `tx` or
 * `text` are absent.
 */
export function Text(props: TBaseTextProps) {
  const {
    tx,
    txOptions,
    txLocalized,
    text,
    children,
    style,
    variant = 'body',
    ...rest
  } = props;

  /**
   * Renders the translated text is passed via `tx`, or the text i
   */
  const i18nText = tx && translate(tx, txOptions);
  let content = i18nText || text || children;

  /**
   * If localized text is provided, we have to pick out the active language
   */
  if (txLocalized?.en) {
    content = txLocalized[currentLocale];
  }

  return (
    <ThemedText variant={variant} {...rest} style={style}>
      {content}
    </ThemedText>
  );
}

export default Text;
