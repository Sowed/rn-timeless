import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';

import {
  Box,
  Text,
  useThemeBorderRadii,
  // useThemeShadows,
  useThemeSpacing,
} from '@theme';

export interface IDropListItem {
  node: {
    id: string;
    label: string;
    status: string;
    model: string;
    make: string;
  };
}

type DropFilterItemPropType = {
  isFocused: boolean;
  item: IDropListItem;
  onPress: (id: string) => void;
};

/**
 * -----------------------------------------------------------------------------
 * This renders a single item for the drop filter category list.
 */
function DropAsset({
  isFocused,
  item,
  onPress,
  ...rest
}: DropFilterItemPropType) {
  const { xs: cardBottomMargin } = useThemeSpacing();
  const { height } = useWindowDimensions();
  const { xs: cardBorderRadius } = useThemeBorderRadii();

  const dropItem = item.node;

  const handleGroupItemPress = () => {
    onPress(dropItem.id);
  };

  // TODO: Refactor this component

  return (
    <Pressable
      accessibilityLabel={`Tap on ${dropItem.label}`}
      accessibilityRole="imagebutton"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={handleGroupItemPress}
      style={{
        borderRadius: cardBorderRadius,
        borderWidth: 0.25,
        marginBottom: cardBottomMargin,
        minHeight: height * 0.5,
      }}
      testID="dropAssetTestID">
      <Box borderBottomWidth={isFocused ? 1.5 : 0} {...rest}>
        <Text
          variant="body"
          color={isFocused ? 'active' : 'typographySecondary'}
          fontWeight={isFocused ? '600' : '400'}
          paddingEnd="xs"
          paddingVertical="xs">
          {dropItem.label}
        </Text>
        <Text variant="body" paddingVertical="xs">
          {dropItem.status}
        </Text>
        <Text variant="body" paddingVertical="xs">
          {dropItem.model}
        </Text>
        <Text variant="body" paddingVertical="xs">
          {dropItem.make}
        </Text>
      </Box>
    </Pressable>
  );
}

export default DropAsset;
