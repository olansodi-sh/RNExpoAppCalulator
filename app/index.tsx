import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import React from "react";

import { View, Text } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1"> 50*5000 </ThemeText>
      <ThemeText variant="h2"> 250 </ThemeText>
    </View>
  );
};

export default CalculatorApp;
