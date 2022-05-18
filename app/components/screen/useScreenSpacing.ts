import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeSpacing } from '@theme';

type TUseScreenSpacingOptions = {
  /**
   * Additional space to be added alongside the bottom insets.
   */
  extraBottom?: number;
  /**
   * Additional space to be added alongside the top insets.
   */
  extraTop?: number;
};

type TUseScreenSpacingReturn = {
  /**
   * Bottom inset of the screen.
   */
  bottomInset: number;
  /**
   * Total padding from the bottom, `insets + extraSpace || ~16`.
   */
  spaceBottom: number;
  /**
   * Total padding from the top, `insets + extraSpace || ~16``.
   */
  spaceTop: number;
  /**
   * Top inset of the screen.
   */
  topInset: number;
};

/**
 * -----------------------------------------------------------------------------
 * Hook that returns the space from the top/bottom of the screen and their
 * respective insets based on the device screen feature types like notches.
 */
export const useScreenSpacing = ({
  extraTop,
  extraBottom,
}: TUseScreenSpacingOptions = {}): TUseScreenSpacingReturn => {
  const insets = useSafeAreaInsets();

  /**
   * Use the responsive spacing from the theme, for extra default.
   * About ~16 on devices and ~20 on tablets
   */
  const { m: extraSpaceDefault } = useThemeSpacing();

  const spaceTop = insets.top + (extraTop || extraSpaceDefault);
  const spaceBottom = insets.bottom + (extraBottom || extraSpaceDefault);

  return {
    spaceTop,
    spaceBottom,
    bottomInset: insets.bottom,
    topInset: insets.top,
  };
};
