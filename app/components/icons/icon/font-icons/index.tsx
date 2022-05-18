import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Optional } from '@types';

import { TIconProps } from '../icon.types';
import { Icon } from '../IconElements';

type TIconBackProps = Optional<TIconProps, 'name'>;

/**
 * -----------------------------------------------------------------------------
 * Navigates the User back to the previous route on clicking it.
 */
export function IconBack({ onPress, ...rest }: TIconBackProps) {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <Icon
      {...rest}
      name="arrow-left"
      nameAndroid="chevron-left"
      onPress={handleBackButtonPress}
    />
  );
}

type TIconCloseProps = Optional<TIconProps, 'name' | 'opacity'>;

/**
 * -----------------------------------------------------------------------------
 * Renders a close button
 */
export function IconClose(props: TIconCloseProps) {
  return <Icon {...props} name="times" />;
}

type TIconSearchProps = Optional<TIconProps, 'name'>;

/**
 * -----------------------------------------------------------------------------
 * Renders a magnifying glass search icon
 */
export function IconSearch(props: TIconSearchProps) {
  return <Icon {...props} name="search" />;
}
