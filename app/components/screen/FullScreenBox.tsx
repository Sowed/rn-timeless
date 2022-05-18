import React, { ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';

import { Box, BoxPropsType } from '@theme';
import { useScreenSpacing } from '@components/screen';

type TFullScreenBoxProps = {
  children: ReactNode;
  hasTopPadding?: boolean;
  onLayout?: () => void;
} & BoxPropsType;

/**
 * -----------------------------------------------------------------------------
 * This creates a full screen component that takes up the entire bounds of the
 * screen without using the `SafeAreaView` or the template of the underlying
 * screen component.
 *
 * This is to be consumed by components that want to look like screens but
 * don't require the whole floss of the screen.
 */
export function FullScreenBox({
  children,
  hasTopPadding,
  ...rest
}: TFullScreenBoxProps) {
  const { width, height } = useWindowDimensions();
  const { spaceTop } = useScreenSpacing();

  return (
    <Box
      height={height}
      position="absolute"
      style={hasTopPadding ? { paddingTop: spaceTop } : {}}
      width={width}
      {...rest}>
      {children}
    </Box>
  );
}
