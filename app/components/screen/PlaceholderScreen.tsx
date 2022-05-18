import React from 'react';
import { useWindowDimensions } from 'react-native';

import { Box, BoxPropsType, Text } from '@theme';
import { Screen, useScreenSpacing } from '@components/screen';

type TPlaceholderScreenProps = {
  title: string;
  body: string;
  children?: React.ReactNode;
} & BoxPropsType;

/**
 * -----------------------------------------------------------------------------
 * This displays a for modal/screen prompting the user to update the app on
 * drastic feature of version change based on a remote config & store versions.
 */
export function PlaceholderScreen({
  children,
  body,
  title,
  ...rest
}: TPlaceholderScreenProps) {
  const { width, height } = useWindowDimensions();
  const { spaceTop } = useScreenSpacing();

  return (
    <Screen>
      <Box
        backgroundColor="secondaryBackground"
        height={height}
        paddingHorizontal="s"
        position="absolute"
        width={width}
        {...rest}
        style={{ paddingTop: spaceTop }}>
        <Text variant="h1">{title}</Text>
        <Text variant="itemTitle">{body}</Text>
        {children}
      </Box>
    </Screen>
  );
}
