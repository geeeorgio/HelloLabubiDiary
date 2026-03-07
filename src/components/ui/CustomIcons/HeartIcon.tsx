import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const HeartIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 21 20" {...props}>
      <Path
        stroke={props.color ?? COLORS.white}
        strokeWidth="0.917"
        d="M.466 5.042h9.623m9.615 0h-9.615m0 0A4.814 4.814 0 0 1 14.898.458c2.657 0 4.812 2.184 4.812 4.842a4.89 4.89 0 0 1-1.723 3.724L12.8 13.402a7.66 7.66 0 0 0-2.717 5.848 7.65 7.65 0 0 0-2.717-5.848L2.182 9.024A4.88 4.88 0 0 1 .458 5.3C.458 2.642 2.613.458 5.271.458a4.81 4.81 0 0 1 4.807 4.584M1.843 8.708h16.481M6.151 12.375h7.865"
      ></Path>
    </Svg>
  );
};

export default HeartIcon;
