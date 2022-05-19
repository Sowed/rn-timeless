import React from 'react';

import { AppNavigator, canExit, useBackButtonHandler } from '@navigators';

import { FullScreenBox } from '@components/screen';
import { ErrorInApp } from '@features/error-boundaries';

/**
 * -----------------------------------------------------------------------------
 * Layout hierarchy for the app scenes/screens/modals/views hierarchy.
 *
 * Order absolutely positioned items required to be above react navigation
 * views here.
 */
function AppScenes({ onLayoutRootView }: { onLayoutRootView: () => void }) {
  useBackButtonHandler(canExit);

  return (
    <FullScreenBox onLayout={onLayoutRootView} right={0}>
      <ErrorInApp catchErrors="always">
        <AppNavigator />
      </ErrorInApp>
    </FullScreenBox>
  );
}

export default AppScenes;
