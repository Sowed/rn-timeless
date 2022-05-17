import React from 'react';

import { Box } from '../../box';
import { Text } from '../text';

interface SectionHeaderPropType {
  action?: {
    label: string;
    onPress?: () => void;
  };
  titleMetaText?: string;
  titleText: string;
}

/**
 * Displays a Title text and a borderless action to the right
 */
export function SectionHeader({
  titleText,
  action,
  titleMetaText,
  ...rest
}: SectionHeaderPropType) {
  return (
    <Box
      alignItems="center"
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom="l"
      paddingHorizontal="l"
      paddingTop="m"
      {...rest}
    >
      <Box alignItems="flex-end" flex={0.75} flexDirection="row">
        <Text paddingLeft="s" variant="title">
          {titleText}
        </Text>
        {titleMetaText && (
          <Text variant="eyebrow" marginBottom="s" marginLeft="s">
            {titleMetaText}
          </Text>
        )}
      </Box>
      {action && (
        <Text
          paddingLeft="l"
          paddingTop="s"
          variant="actionLabel"
          onPress={action.onPress}
          lineHeight={42}
          style={{ flex: 0.25 }}
        >
          {action.label}
        </Text>
      )}
    </Box>
  );
}
