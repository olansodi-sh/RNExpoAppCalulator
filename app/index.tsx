import { globalStyles } from "@/styles/global-styles";
import React from "react";

import { View, Text } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult}>index</Text>
      <Text style={globalStyles.subResult}>index</Text>
    </View>
  );
};

export default CalculatorApp;
