import { Text, TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';

// extiende de TextProps para poder recibir las props de Text
interface ThemeTextProps extends TextProps {
  variant?:'h1' | 'h2';
  numberOfLines?:number;
}

const ThemeText = ({ children, variant ='h1' ,numberOfLines=1 ,...rest }:ThemeTextProps) => {
  return (
    
    <Text 
    {...rest}
    style={[
      {color: 'white', fontFamily:'SpaceMonoRegular'},
      variant === 'h1' && globalStyles.mainResult,
      variant === 'h2' && globalStyles.subResult,
    ]}
    adjustsFontSizeToFit
    numberOfLines={numberOfLines}
    >
      { children }
    </Text>
    
  )
}

export default ThemeText