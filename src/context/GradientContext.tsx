import React from 'react'
import { createContext, useState } from "react";

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

  const [colors, setColor] = useState<ImageColors>({
    primary: 'red',
    secondary: 'blue'
  })

  const [prevColors, setPrevColor] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const setMainColors = (colors: ImageColors) => {
    setColor( colors )
  }

  const setPrevMainColors  = (colors:ImageColors) => {
    setPrevColor(colors);
  }

  return (
    <GradientContext.Provider value={{
      colors,
      prevColors,
      setMainColors,
      setPrevMainColors
    }}>
      {children}
    </GradientContext.Provider>
  )
}