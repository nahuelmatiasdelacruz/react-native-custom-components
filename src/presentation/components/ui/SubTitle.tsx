import { Text } from "react-native"
import { globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface SubtitleProps {
  text: string;
  safe?: boolean;
}

export const SubTitle = ({ text, safe = false}:SubtitleProps) => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);
  return (
    <Text style={{
      ...globalStyles.subTitle,
      marginTop: safe ? top : 0,
      marginBottom: 10,
      backgroundColor: colors.background
    }}
    >
      {text}
    </Text>
  );
};