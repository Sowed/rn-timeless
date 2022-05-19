import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from '@theme';

export interface IDropListItem {
  id: string;
  label: string;
}

type DropFilterItemPropType = {
  index: number;
  isFocused: boolean;
  isLastItem: boolean;
  item: IDropListItem;
  onPress: (id: string, index: number) => void;
};

/**
 * -----------------------------------------------------------------------------
 * This renders a single item for the drop filter category list.
 */
function DropFilterItem({
  index,
  isFocused,
  isLastItem,
  item,
  onPress,
  ...rest
}: DropFilterItemPropType) {
  const handleGroupItemPress = () => {
    onPress(item.id, index);
  };

  return (
    <TouchableOpacity onPress={handleGroupItemPress}>
      <Box
        alignItems="center"
        borderBottomColor="active"
        borderBottomWidth={isFocused ? 1.5 : 0}
        flexDirection="row"
        justifyContent="center"
        marginStart="s"
        paddingEnd={isLastItem ? 's' : 'none'}
        {...rest}>
        <Text
          variant="body"
          color={isFocused ? 'active' : 'typographySecondary'}
          fontWeight={isFocused ? '600' : '400'}
          paddingEnd="xs"
          paddingVertical="xs">
          {item.label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

export default DropFilterItem;
