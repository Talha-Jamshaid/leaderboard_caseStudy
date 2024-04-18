import {PropsWithChildren} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {styles} from './styleButton';

type SectionProps = PropsWithChildren<{
  title: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  isDisable?: boolean;
  style?: object;
}>;

function DesignButton({
  title,
  onPress,
  isDisable,
  style,
}: SectionProps): React.JSX.Element {
  return (
    <TouchableOpacity
      disabled={isDisable}
      activeOpacity={0.6}
      style={[style, isDisable && {opacity: 0.5}]}
      onPress={onPress}>
      <Text style={styles.bntTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

export default DesignButton;
