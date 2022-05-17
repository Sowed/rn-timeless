import React from 'react';

import { Box, BoxPropsType, Text } from '@theme';

interface SectionFooterPropsType extends BoxPropsType {
  baseText?: string;
  subtitle?: string;
  titleCapitalized?: boolean;
  titleText: string;
}

/**
 * Displays a Title text and a borderless action to the right
 */
export function SectionFooter({
  titleText,
  titleCapitalized,
  subtitle,
  baseText,
  ...rest
}: SectionFooterPropsType) {
  return (
    <Box alignItems="flex-start" flex={1} paddingVertical="s" {...rest}>
      <Text
        variant="title"
        fontSize={24}
        paddingBottom="s"
        textTransform={titleCapitalized ? 'uppercase' : 'none'}>
        {titleText}
      </Text>
      {subtitle ? <Text variant="subtitle">{subtitle}</Text> : null}
      {baseText ? (
        <Text variant="body" paddingTop="xs">
          {baseText}
        </Text>
      ) : null}
    </Box>
  );
}
