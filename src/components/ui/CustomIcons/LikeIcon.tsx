import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const LikeIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 24 21" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.958 1A5.96 5.96 0 0 0 1 6.958c0 5.959 7.042 11.375 10.833 12.635 3.792-1.26 10.834-6.676 10.834-12.635a5.958 5.958 0 0 0-10.834-3.426A5.95 5.95 0 0 0 6.958 1"
      ></Path>
    </Svg>
  );
};

export default LikeIcon;
