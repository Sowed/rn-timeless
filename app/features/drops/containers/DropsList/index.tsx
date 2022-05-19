import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { Box, Button, Text } from '@theme';

import useDropAssets from './useDropAssets';
import DropAsset, { IDropListItem } from './DropAsset';

interface IRenderSingleDropListItemProps {
  item: IDropListItem;
}

/**
 * -----------------------------------------------------------------------------
 * Renders a horizontal of Drop categories that can be used to filter the list
 * of `DropList`.
 */
function DropsList() {
  const [activeDropFilterId, setActiveDropFilterId] = useState('');
  const { data, loading, error } = useDropAssets();

  // TODO: Handle retry fetching the data on error.
  const handleRetry = () => {};

  const handleCategoryItemPress = (id: string) => {
    setActiveDropFilterId(id);
  };

  const getListItemKey = (item: IDropListItem, index: number) =>
    `${item.node.label}-${index}`;

  /**
   * Displays a single item for the filter list. Declared within the component
   * body to memoize it and use it within the body of this functions.
   * - Note: `Index` to be used in animating the scroll indicator
   */
  const RenderSingleDropListItem = useCallback(
    ({ item }: IRenderSingleDropListItemProps) => (
      <DropAsset
        isFocused={activeDropFilterId === item.node?.id}
        item={item}
        onPress={handleCategoryItemPress}
      />
    ),
    [activeDropFilterId],
  );

  // TODO: Handle all these cases gracefully
  console.log({
    '☀️☀️☀️☀️ DropsList': '-----',
    data,
    loading,
    error,
  });

  if (loading) {
    return (
      <Box>
        <Text variant="h3">Loading Assets...</Text>
        <Text>Please waiting while we make you life awesome.</Text>
        <Text> - Someone on TV said that.</Text>
      </Box>
    );
  }

  if (error) {
    <Box backgroundColor="error">
      <Text variant="h3">Sorry!</Text>
      <Text>Something went wrong while fetching the assets. Please retry.</Text>
      <Button variant="primary" text="Retry" onPress={handleRetry} />
    </Box>;
  }

  return (
    <Box
      marginVertical="s"
      marginHorizontal="s"
      paddingBottom="xxl"
      marginBottom="xxl">
      <FlatList
        data={data?.assets?.edges || []}
        fadingEdgeLength={10}
        keyExtractor={getListItemKey}
        renderItem={RenderSingleDropListItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

export default DropsList;
