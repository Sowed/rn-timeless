import React from 'react';

import { Box, BoxPropsType } from '@theme';

/**
 * Renders an Horizontal Line on the Screen
 */
export function LineHorizontal({
  marginVertical = 'l',
  maxWidth = '50%',
  opacity = 0.25,
  width = '50%',
  ...rest
}: BoxPropsType) {
  return (
    <Box
      borderColor="textCaption"
      borderBottomWidth={1}
      borderStyle="solid"
      flex={1}
      height={1}
      marginVertical={marginVertical}
      maxWidth={maxWidth}
      opacity={opacity}
      width={width}
      {...rest}
    />
  );
}
