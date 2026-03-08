import type { SvgProps } from 'react-native-svg';

import AboutIcon from './AboutIcon';
import BackIcon from './BackIcon';
import HeartIcon from './HeartIcon';
import InfoIcon from './InfoIcon';
import LikeIcon from './LikeIcon';
import MoodIcon from './MoodIcon';
import QuizIcon from './QuizIcon';
import RefreshIcon from './RefreshIcon';
import ShareIcon from './ShareIcon';

import type { IconName } from 'src/constants';
import type { MainStackParamList } from 'src/types';

export const ICONS_MAP: Record<IconName, React.FC<SvgProps>> = {
  about: AboutIcon,
  back: BackIcon,
  info: InfoIcon,
  like: LikeIcon,
  friends: HeartIcon,
  mood: MoodIcon,
  quiz: QuizIcon,
  refresh: RefreshIcon,
  share: ShareIcon,
};

export const TAB_BAR_ICONS_MAP: Record<
  keyof MainStackParamList,
  React.FC<SvgProps>
> = {
  AboutScreen: InfoIcon,
  FactsScreen: AboutIcon,
  FriendsScreen: HeartIcon,
  MoodScreen: MoodIcon,
  QuizScreen: QuizIcon,
};
