import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const InfoIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 22 22" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M11 9.854a.69.69 0 0 1 .688.688v4.583a.687.687 0 1 1-1.376 0v-4.583A.69.69 0 0 1 11 9.854m0-1.604a.917.917 0 1 0 0-1.833.917.917 0 0 0 0 1.833"
      ></Path>
      <Path
        fill={props.color ?? COLORS.white}
        fillRule="evenodd"
        d="M6.707 3.455a39 39 0 0 1 8.586 0 3.65 3.65 0 0 1 3.223 3.19c.339 2.893.339 5.817 0 8.711-.197 1.683-1.55 3.002-3.223 3.19a39 39 0 0 1-8.586 0c-1.674-.188-3.027-1.507-3.223-3.19a37.6 37.6 0 0 1 0-8.712c.196-1.684 1.55-3.001 3.223-3.19m8.434 1.365a37.6 37.6 0 0 0-8.282 0 2.28 2.28 0 0 0-2.01 1.984 36 36 0 0 0 0 8.391 2.28 2.28 0 0 0 2.01 1.983c2.73.305 5.553.305 8.282 0a2.28 2.28 0 0 0 2.009-1.983 36 36 0 0 0 0-8.39 2.28 2.28 0 0 0-2.01-1.985"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default InfoIcon;
