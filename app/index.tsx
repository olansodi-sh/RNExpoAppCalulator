import React from "react";

import { View, Text } from "react-native";

import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import CalculatorBotton from "@/components/CalculatorBotton";
import { Colors } from "@/constants/Colors";


const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      //* Resultados
      <View style={{ paddingHorizontal : 30, paddingBottom:20 }}>
          <ThemeText variant="h1"> 50*5000 </ThemeText>
          <ThemeText variant="h2"> 250 </ThemeText>
      </View>
      //* Botones
      <View style={globalStyles.row}> 
        <CalculatorBotton label="C"   colorButton={Colors.lightGray}  onPress={()=>console.log('C')}   blackText />
        <CalculatorBotton label="+/-" colorButton={Colors.lightGray}  onPress={()=>console.log('+/-')} blackText/>
        <CalculatorBotton label="del" colorButton={Colors.lightGray}  onPress={()=>console.log('del')} blackText/>
        <CalculatorBotton label="÷"   colorButton={Colors.orange}     onPress={()=>console.log('÷')}  />
      </View>
      <View style={globalStyles.row}> 
        <CalculatorBotton label="7" colorButton={Colors.darkGray}     onPress={()=>console.log('7')}  />
        <CalculatorBotton label="8" colorButton={Colors.darkGray}     onPress={()=>console.log('8')}  />
        <CalculatorBotton label="9" colorButton={Colors.darkGray}     onPress={()=>console.log('9')}  />
        <CalculatorBotton label="x" colorButton={Colors.orange}       onPress={()=>console.log('x')}  />
      </View>
      <View style={globalStyles.row}> 
        <CalculatorBotton label="4" colorButton={Colors.darkGray}     onPress={()=>console.log('4')}  />
        <CalculatorBotton label="5" colorButton={Colors.darkGray}     onPress={()=>console.log('5')}  />
        <CalculatorBotton label="6" colorButton={Colors.darkGray}     onPress={()=>console.log('6')}  />
        <CalculatorBotton label="-" colorButton={Colors.orange}       onPress={()=>console.log('-')}  />
      </View> 
      <View style={globalStyles.row}> 
        <CalculatorBotton label="1" colorButton={Colors.darkGray}     onPress={()=>console.log('1')}  />
        <CalculatorBotton label="2" colorButton={Colors.darkGray}     onPress={()=>console.log('2')}  />
        <CalculatorBotton label="3" colorButton={Colors.darkGray}     onPress={()=>console.log('3')}  />
        <CalculatorBotton label="+" colorButton={Colors.orange}       onPress={()=>console.log('+')}  />
      </View>
      <View style={globalStyles.row}> 
        <CalculatorBotton label="0" colorButton={Colors.darkGray}     onPress={()=>console.log('0')}  doubleSize/>
        <CalculatorBotton label="." colorButton={Colors.darkGray}     onPress={()=>console.log('.')}/>
        <CalculatorBotton label="=" colorButton={Colors.orange}       onPress={()=>console.log('=')}/>
      </View>
    </View>
  );
};

export default CalculatorApp;
