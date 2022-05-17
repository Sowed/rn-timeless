import { createRestyleComponent, createVariant } from '@shopify/restyle';

import { Box } from '../box';

/**
 * This provides a themed wrapper around the Native View component, that will be
 * used to wrap the custom card component.
 *
 * `NOTE`: Add tests and more customizations to this file.
 */
export const CardThemed = createRestyleComponent(
  [createVariant({ themeKey: 'cardVariants' })],
  Box
);

export default CardThemed;
