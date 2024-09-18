import { StyleProp, View, ViewStyle } from "react-native"
import { colors } from "../../../config/theme/theme";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren{
  style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }:CardProps) => {
  return (
    <View style={[{
      backgroundColor: colors.cardBackground,
      borderRadius: 10,
      padding: 10,
    },style]}>
      {children}
    </View>
  )
}