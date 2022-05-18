import React from 'react';

import { Box, Text } from '@theme';
import { Screen } from '@components/screen';


/**
 * -----------------------------------------------------------------------------
 * The landing page of the app. At the moment showing `Drops`
 */
function HomeScreen() {
  return (
    <Screen backgroundColor="secondaryBackground">
      <Box>
        <Text variant="h1" paddingHorizontal="s" marginBottom="xs">
          Drops
        </Text>
      </Box>
    </Screen>
  );
}

export default HomeScreen;
