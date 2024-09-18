import { useState } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { colors } from "../../../config/theme/theme";

interface CustomSwitchProps {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange}:CustomSwitchProps) => {

  return (
    <View style={styles.switchRow}>
      {
        text && (<Text style={{color: colors.text}}>{text}</Text>)
      }
      <Switch
          thumbColor={Platform.OS === 'android' ? colors.primary : ''}
          ios_backgroundColor="#3E3E3E"
          onValueChange={onChange}
          value={isOn}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  }
});