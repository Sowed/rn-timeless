import React from 'react';

import { Box } from '@theme';

import { DropsFilterSlider, DropsList } from '@features/drops';

/**
 * -----------------------------------------------------------------------------
 * The feature provides a view that renders a scrollable list of drops category,
 * and a list of all items belonging to that category.
 */
function DropsPage() {
  return (
    <Box>
      <DropsFilterSlider />
      <DropsList />
    </Box>
  );
}

export default DropsPage;
