import React from "react";

import { View } from "react-native";

import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import CalculatorBotton from "@/components/CalculatorBotton";
import { Colors } from "@/constants/Colors";
import useCalculator from "@/hooks/useCalculator";


const CalculatorApp = () => {

  const {     
    formula,
    number,
    prevNumber,
    
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult

  } = useCalculator()
  return (
    <View style={globalStyles.calculatorContainer}>
      
      <View style={{ paddingHorizontal : 30, paddingBottom:20 }}>
          <ThemeText variant="h1">{formula}</ThemeText>
          {
            formula === prevNumber ?(
              <ThemeText variant="h2"> </ThemeText>
            ):(
              <ThemeText variant="h2">{ prevNumber }</ThemeText>

            )
          }
      </View>

      <View style={globalStyles.row}> 
        <CalculatorBotton label="C"   colorButton={Colors.lightGray}  onPress={clean}   blackText />
        <CalculatorBotton label="+/-" colorButton={Colors.lightGray}  onPress={toggleSign} blackText/>
        <CalculatorBotton label="del" colorButton={Colors.lightGray}  onPress={deleteLast} blackText/>
        <CalculatorBotton label="÷"   colorButton={Colors.orange}     onPress={divideOperation}  />
      </View>
      <View style={globalStyles.row}> 
        <CalculatorBotton label="7" colorButton={Colors.darkGray}     onPress={()=>buildNumber('7')}  />
        <CalculatorBotton label="8" colorButton={Colors.darkGray}     onPress={()=>buildNumber('8')}  />
        <CalculatorBotton label="9" colorButton={Colors.darkGray}     onPress={()=>buildNumber('9')}  />
        <CalculatorBotton label="x" colorButton={Colors.orange}       onPress={multiplyOperation}  />
      </View>
      <View style={globalStyles.row}> 
        <CalculatorBotton label="4" colorButton={Colors.darkGray}     onPress={()=>buildNumber('4')}  />
        <CalculatorBotton label="5" colorButton={Colors.darkGray}     onPress={()=>buildNumber('5')}  />
        <CalculatorBotton label="6" colorButton={Colors.darkGray}     onPress={()=>buildNumber('6')}  />
        <CalculatorBotton label="-" colorButton={Colors.orange}       onPress={subtractOperation}  />
      </View> 
      <View style={globalStyles.row}> 
        <CalculatorBotton label="1" colorButton={Colors.darkGray}     onPress={()=>buildNumber('1')}  />
        <CalculatorBotton label="2" colorButton={Colors.darkGray}     onPress={()=>buildNumber('2')}  />
        <CalculatorBotton label="3" colorButton={Colors.darkGray}     onPress={()=>buildNumber('3')}  />
        <CalculatorBotton label="+" colorButton={Colors.orange}       onPress={addOperation}  />
      </View>
      <View style={globalStyles.row}> 
        <CalculatorBotton label="0" colorButton={Colors.darkGray}     onPress={()=>buildNumber('0')}  doubleSize/>
        <CalculatorBotton label="." colorButton={Colors.darkGray}     onPress={()=>buildNumber('.')}/>
        <CalculatorBotton label="=" colorButton={Colors.orange}       onPress={calculateResult}/>
      </View>
    </View>
  );
};

export default CalculatorApp;
