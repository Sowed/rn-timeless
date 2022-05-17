import React from 'react';

import { Box } from '../../box';
import { Text } from '../text';

import { SectionSubtitle } from './SectionSubtitle';

interface SectionHeaderSimplePropType {
  action?: {
    label: string;
    onPress?: () => void;
  };
  subtitle?: string;
  title: string;
  titleMetaText?: string | number;
}

/**
 * Provides a header with meta data and an action to the section of the home
 * screen.
 */
export function SectionHeaderSimple({
  action,
  subtitle,
  title,
  titleMetaText,
  ...rest
}: SectionHeaderSimplePropType) {
  return (
    <Box
      alignItems="center"
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom="m"
      paddingTop="l"
      {...rest}
    >
      <Box alignItems="flex-end" flex={action ? 0.75 : 1} flexDirection="row">
        <Box>
          <Text variant="title" fontSize={22}>
            {title}
          </Text>
          {subtitle && (
            <SectionSubtitle subtitle={subtitle} titleMetaText={titleMetaText} />
          )}
        </Box>
      </Box>
      {action && (
        <Text
          variant="actionLabel"
          paddingLeft="l"
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
