import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme";
import { useRef } from "react";
import { useAnimation } from "../../hooks/useAnimation";

export const Animation101Screen = () => {
  
  const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();
  
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]}/>
      <Pressable onPress={()=>{
        fadeIn({});
        startMovingTopPosition({initialPosition: -100, easing: Easing.elastic(2), duration: 750});
      }} style={{marginTop: 10}}>
        <Text>Fade In</Text>
      </Pressable>
      <Pressable onPress={()=>fadeOut({})} style={{marginTop: 10}}>
        <Text>Fade Out</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
})