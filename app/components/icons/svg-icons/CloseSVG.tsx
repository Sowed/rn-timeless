import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CloseSVG(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="#9D9D9C" {...props}>
      <Path
        d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
      />
    </Svg>
  );
}

export default CloseSVG;
