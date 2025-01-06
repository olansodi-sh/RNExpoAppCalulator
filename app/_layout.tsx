import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

import { useFonts } from "expo-font";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View>
      <Text>header</Text>
      <Slot />
      <Text>footer</Text>
    </View>
  );
};

export default RootLayout;
