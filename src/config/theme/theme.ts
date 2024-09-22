import { StyleSheet } from "react-native";
import { ThemeColors } from "../../domain/interfaces/theme.interface";

export const colors: ThemeColors = {
  primary: "#5856d6",
  text: "black",
  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
};

export const lightColors: ThemeColors = {
  primary: "#5856d6",
  text: "black",
  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
};

export const darkColors: ThemeColors = {
  primary: "#5856d6",
  text: "white",
  background: "#090909",
  cardBackground: "#2d2d2d",
  buttonTextColor: "white",
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    // color: colors.text,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    // color: colors.text
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },
});