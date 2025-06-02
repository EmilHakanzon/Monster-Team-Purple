import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="StartScreen"
        options={{
          title: "StartScreen",
        }}
      />
      <Tabs.Screen
        name="HomePage"
        options={{ title: "Homepage" }}
      ></Tabs.Screen>
    </Tabs>
  );
}
