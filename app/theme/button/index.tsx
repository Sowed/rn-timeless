import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import { Box, BoxPropsType, Text, TextPropsType, useThemeColors } from '@theme';

import { ThemeType } from '@theme/theme';
import { TBaseTextProps } from '../text/text.props';

import { ButtonThemed } from './button';

type TButtonProps = {
  disabled?: boolean;
  iconLeft?: {
    name: string;
    opacity?: number;
    size?: number;
    solid?: boolean;
  };
  iconRight?: {
    name: string;
    opacity: number;
    size: number;
    solid: boolean;
  };
  labelProps?: TextPropsType;
  loading?: boolean;
  marginBottom?: string;
  marginHorizontal?: string;
  marginRight?: string;
  marginTop?: string;
  onPress: () => void;
  padding?: string;
  variant: keyof ThemeType['buttonVariants'];
} & BoxPropsType &
  Pick<TBaseTextProps, 'tx' | 'txOptions' | 'txLocalized' | 'text'>;

/**
 * -----------------------------------------------------------------------------
 * The Button component of the App that exposes button themed variants.
 * - Supports `primary`, `secondary` or `borderless` options.
 *
 * TODO: Extend the button to add support for Icons and Spinners.
 */
export function Button({
  disabled = false,
  labelProps,
  loading = false,
  marginBottom = 'm',
  marginHorizontal = 'l',
  marginTop,
  onPress,
  padding = 'm',
  tx,
  txOptions,
  txLocalized,
  text,
  variant,
  ...rest
}: TButtonProps) {
  const { mainBackground } = useThemeColors();

  let labelVariant: TextPropsType['variant'] = 'titleMd';
  let color = mainBackground;

  switch (variant) {
    case 'primary': {
      // Do nothing, using `primary` button
      break;
    }
    case 'secondary': {
      color = mainBackground;
      labelVariant = 'body';
      break;
    }
    // case 'borderless': {}
    default: {
      // Do nothing, using `primary` button
      break;
    }
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <ButtonThemed
        marginBottom={marginBottom}
        marginHorizontal={marginHorizontal}
        marginTop={marginTop}
        opacity={disabled ? 0.42 : 1}
        padding={padding}
        variant={variant}
        {...rest}>
        {loading && (
          <Box>
            <ActivityIndicator color={color} size="small" />
          </Box>
        )}

        <Text
          paddingVertical="xs"
          {...labelProps}
          variant={labelVariant}
          opacity={disabled ? 0.98 : 1}
          tx={tx}
          txOptions={txOptions}
          txLocalized={txLocalized}
          text={text}
        />
      </ButtonThemed>
    </TouchableOpacity>
  );
}
