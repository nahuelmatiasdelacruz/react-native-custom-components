import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing(animatedTop,{
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.elastic(1)
    // }).start();
    Animated.timing(animatedOpacity,{
      toValue,
      duration,
      useNativeDriver: true
    }).start(callback);
  }
  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpacity,{
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  }

  const startMovingTopPosition = ({initialPosition = 0,toValue = 0, duration = 300, easing = Easing.linear, callback = () => {}}) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop,{
      toValue,
      duration,
      easing,
      useNativeDriver: true
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  }
}