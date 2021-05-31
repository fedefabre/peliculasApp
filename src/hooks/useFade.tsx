import { useRef } from "react";
import { Animated } from "react-native";

export default function useFade(initialOpacity = 0, duration = 300) {

  const opacity = useRef(new Animated.Value(initialOpacity)).current;
  const fadeIn = (callback?: Function) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: duration,
        useNativeDriver: true
      }
    ).start(() => callback ? callback() : null)
  }

  const fadeOut = ( durationFO: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: durationFO,
        useNativeDriver: true
      }
    ).start()
  }

  return {
    opacity,
    fadeIn,
    fadeOut
  }
}
