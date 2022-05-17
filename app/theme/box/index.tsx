import { createBox } from '@shopify/restyle';

import { ThemeType } from '@theme/theme';

export type { BoxProps } from '@shopify/restyle';

/**
 * -----------------------------------------------------------------------------
 * Create a themed primitives to replace the default React Native `View`
 * components. Allows you to add type safe style props to the View element.
 *
 * `NOTE`: Add tests and more customizations to this file.
 */
export const Box = createBox<ThemeType>();
