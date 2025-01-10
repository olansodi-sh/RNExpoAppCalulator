import React from "react";

import { Platform, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as NavigationBar from 'expo-navigation-bar';

import { globalStyles } from "@/styles/global-styles";

const isAndroid = Platform.OS === 'android';

if(isAndroid){
  NavigationBar.setBackgroundColorAsync('#000000');
}

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
