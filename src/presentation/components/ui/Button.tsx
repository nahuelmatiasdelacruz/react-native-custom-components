import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface ButtonProps {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({text, onPress}:ButtonProps) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pressable
      onPress={onPress}
      style={({pressed})=>([
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.6 : 1,
          backgroundColor: colors.primary
        }
      ])}
    >
      <Text style={[globalStyles.btnPrimaryText,{
        color: colors.buttonTextColor
      }]}>{text}</Text>
    </Pressable>
  )
}