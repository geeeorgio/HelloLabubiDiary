import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M0 15c0 8.284 6.716 15 15 15s15-6.716 15-15S23.284 0 15 0 0 6.716 0 15m14.153-2.572H23.5v5.143h-9.347V23L6.5 15l7.653-8z"
      ></Path>
    </Svg>
  );
};

export default BackIcon;
