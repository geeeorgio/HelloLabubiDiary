import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps extends ViewProps {
  colorVariant?:
    | 'default'
    | 'lightGreen'
    | 'darkGreen'
    | 'mirror'
    | 'lightPink'
    | 'darkPink'
    | 'red'
    | 'green';
}

const CustomContainer = ({
  style,
  colorVariant = 'default',
  ...rest
}: CustomContainerProps) => {
  return <View style={[styles[colorVariant], style]} {...rest} />;
};

export default CustomContainer;
