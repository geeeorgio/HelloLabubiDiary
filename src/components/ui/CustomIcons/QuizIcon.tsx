import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const QuizIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 18" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeWidth="0.917"
        d="M8.708 16.958a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z"
      ></Path>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeWidth="0.917"
        d="m5.042 8.708 2.75 2.75 4.583-5.5"
      ></Path>
    </Svg>
  );
};

export default QuizIcon;
