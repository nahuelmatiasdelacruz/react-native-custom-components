import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";

interface ButtonProps {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({text, styles, onPress}:ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed})=>([
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.6 : 1,
          backgroundColors: colors.primary
        }
      ])}
    >
      <Text style={[globalStyles.btnPrimaryText,{
        color: colors.buttonTextColor
      }]}>{text}</Text>
    </Pressable>
  )
}