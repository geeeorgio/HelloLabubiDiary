import type { SvgProps } from 'react-native-svg';

import AboutIcon from './AboutIcon';
import BackIcon from './BackIcon';
import InfoIcon from './InfoIcon';
import LikeIcon from './LikeIcon';
import MoodIcon from './MoodIcon';
import QuizIcon from './QuizIcon';
import RefreshIcon from './RefreshIcon';
import ShareIcon from './ShareIcon';

import type { IconName } from 'src/constants';

export const ICONS_MAP: Record<IconName, React.FC<SvgProps>> = {
  about: AboutIcon,
  back: BackIcon,
  info: InfoIcon,
  like: LikeIcon,
  mood: MoodIcon,
  quiz: QuizIcon,
  refresh: RefreshIcon,
  share: ShareIcon,
};
