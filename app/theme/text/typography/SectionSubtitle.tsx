import React from 'react';

import { Box } from '../../box';
import { Text } from '../text';

interface SectionSubtitlePropType {
  subtitle: string;
  titleMetaText?: string | number;
}

/**
 * Renders a small sub next next to a large section title.
 */
export function SectionSubtitle({
  subtitle,
  titleMetaText,
  ...rest
}: SectionSubtitlePropType) {
  return (
    <Box {...rest}>
      <Text
        variant="eyebrow"
        paddingTop="s"
        letterSpacing={0.5}
        textTransform="capitalize"
        opacity={0.75}
      >
        {subtitle}
        {titleMetaText ? ` (${titleMetaText})` : ''}
      </Text>
    </Box>
  );
}
