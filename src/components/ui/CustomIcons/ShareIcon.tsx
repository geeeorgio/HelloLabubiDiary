import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 22" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M15.333 6 10.03.667 4.667 6M10.029.695v15.972M6 10H3.333a2.667 2.667 0 0 0-2.666 2.667V18a2.667 2.667 0 0 0 2.666 2.667h13.334A2.666 2.666 0 0 0 19.333 18v-5.333A2.667 2.667 0 0 0 16.667 10H14"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
