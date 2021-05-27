import { useRef } from "react";
import { Animated } from "react-native";

export default function useFade(initialOpacity = 0, duration = 300) {

  const opacity = useRef(new Animated.Value(initialOpacity)).current;
  const fadeIn = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: duration,
        useNativeDriver: true
      }
    ).start()
  }

  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: duration,
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
