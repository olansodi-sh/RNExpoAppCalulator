import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';

interface CalculatorBottonProps {
    label: string;
    colorButton: string;
    blackText?: boolean;
    onPress?: () => void;
    doubleSize?: boolean;
}

const CalculatorBotton = ({ 
    label, 
    colorButton = Colors.darkGray, 
    blackText = false, 
    onPress,
    doubleSize = false
}:CalculatorBottonProps) => {
  return (
    <Pressable 
      style={({pressed}) => ({
        ...globalStyles.button, 
        backgroundColor: colorButton,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })} 
      onPress={onPress}
    >
        <Text 
            style={{
              ...globalStyles.buttonText,
              color: blackText ? 'black' : 'white',
            }}
        >
            {label}
        </Text>

    </Pressable>
  )
}

export default CalculatorBotton