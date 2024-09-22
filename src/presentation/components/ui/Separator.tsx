import {StyleProp, View, ViewStyle} from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface SeparatorProps {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: SeparatorProps) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={{
      backgroundColor: colors.cardBackground
    }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8,
          },
          style,
        ]}
      />
    </View>
  );
};
