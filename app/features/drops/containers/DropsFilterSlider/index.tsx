import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { Box } from '@theme';

import DropFilterItem, { IDropListItem } from './DropFilterItem';

// TODO: Update these Type definitions.
interface IRenderSingleDropListItemProps {
  item: IDropListItem;
  index: number;
}

/**
 * These are randomly generated categories for the drop list.
 * TODO: Replace with real data from graphql server
 */
const listItems = [
  {
    label: 'Test Category',
    id: 'KLJOYIUYIU_KHKJH423423JKHK',
  },
  {
    label: 'Other Devisi',
    id: 'KLJOYIUYIU_KHKJ423423HJKHK',
  },
  {
    label: 'Truly',
    id: 'KLJO23432423YIUYIU_KHKJHJKHK',
  },
  {
    label: 'NFT',
    id: 'KLJ23434OYIUYIU_KHKJHJKHK',
  },
  {
    label: 'Journey',
    id: 'KLJOYIUYIU_KHKJH32423JKHK',
  },
  {
    label: 'Cool',
    id: 'KLJOYIUY2342IU_KHKJHJKHK',
  },
];

/**
 * -----------------------------------------------------------------------------
 * Renders a horizontal of Drop categories that can be used to filter the list
 * of `DropAssets`.
 */
function DropsFilterSlider() {
  const [activeDropFilterId, setActiveDropFilterId] = useState('');

  const handleCategoryItemPress = (id: IDropListItem['id']) => {
    console.log({ '🌼 handleItemCategoryPress': id });
    setActiveDropFilterId(id);
  };

  const getListItemKey = (item: IDropListItem, index: number) =>
    `${item.label}-${index}`;

  const listItemsCount = listItems.length;

  /**
   * Displays a single item for the filter list. Declared within the component
   * body to memoize it and use it within the body of this functions.
   * - Note: `Index` to be used in animating the scroll indicator
   */
  const RenderSingleDropListItem = useCallback(
    ({ item, index }: IRenderSingleDropListItemProps) => (
      <DropFilterItem
        index={index}
        isFocused={activeDropFilterId === item.id}
        isLastItem={listItemsCount - 1 === index}
        item={item}
        onPress={handleCategoryItemPress}
      />
    ),
    [activeDropFilterId, listItemsCount],
  );

  return (
    <Box>
      <Box>
        <FlatList
          bounces={false}
          data={listItems}
          fadingEdgeLength={10}
          horizontal
          keyExtractor={getListItemKey}
          renderItem={RenderSingleDropListItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </Box>
      <Box
        paddingHorizontal="s"
        flex={1}
        borderColor="tlLightGray"
        opacity={0.85}
        borderBottomWidth={0.5}>
        <Box
          backgroundColor="active"
          borderBottomWidth={1}
          height={2}
          position="absolute"
          paddingHorizontal="s"
          opacity={1}
          width={20}
        />
        <Box paddingHorizontal="s" opacity={0} />
      </Box>
    </Box>
  );
}

export default DropsFilterSlider;
