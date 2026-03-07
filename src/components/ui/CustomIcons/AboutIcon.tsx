import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const AboutIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 17 15" {...props}>
      <Path
        fill={props.color ?? COLORS.white}
        d="M1.481 14.667q-.633 0-1.057-.424A1.44 1.44 0 0 1 0 13.185V1.481Q0 .848.424.424A1.44 1.44 0 0 1 1.48 0h13.54q.631 0 1.056.424.423.425.424 1.057v11.705q0 .633-.424 1.057a1.43 1.43 0 0 1-1.056.424zm0-.917H15.02a.54.54 0 0 0 .387-.176.54.54 0 0 0 .176-.389V1.481a.54.54 0 0 0-.176-.388.53.53 0 0 0-.387-.176H1.48a.54.54 0 0 0-.387.176.54.54 0 0 0-.176.388v11.705q0 .21.176.388a.53.53 0 0 0 .387.176m.812-2.292h3.666v-.916H2.292zm8.296-2.026 3.884-3.886-.653-.655-3.232 3.255L9.282 6.84l-.63.654zm-8.296-1.64h3.666v-.917H2.292zm0-3.667h3.666v-.917H2.292z"
      ></Path>
    </Svg>
  );
};

export default AboutIcon;
