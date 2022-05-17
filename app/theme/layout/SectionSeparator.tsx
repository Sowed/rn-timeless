import React from 'react';

import { Box } from '@theme';

interface SectionSeparatorPropsType {
  opacity?: number;
}

/**
 * Draws a faint horizontal line that separates two sections.
 */
export function SectionSeparator({
  opacity = 0.15,
  ...rest
}: SectionSeparatorPropsType) {
  return (
    <Box
      borderBottomWidth={1}
      borderColor="textCaption"
      borderStyle="solid"
      flex={1}
      height={1}
      marginHorizontal="l"
      marginVertical="l"
      opacity={opacity}
      {...rest}
    />
  );
}
