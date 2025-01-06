import React from "react";

import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";

import { globalStyles } from "@/styles/global-styles";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={globalStyles.backgroundScreen}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
