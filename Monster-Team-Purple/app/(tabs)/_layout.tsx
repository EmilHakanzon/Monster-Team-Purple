import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#e0e0e0",
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 22,
          color: "#22223b",
          letterSpacing: 1,
        },
        headerTintColor: "#4B5563",
        tabBarStyle: Platform.select({
          ios: { position: "absolute" },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="StartScreen"
        options={{
          headerShown: false, // Döljer headern på StartScreen
        }}
      />
      <Tabs.Screen
        name="homePage"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomWidth: 0,
            shadowColor: "transparent",
            elevation: 0,
          },
          headerShadowVisible: false, // tar bort linjen från header.
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={35} color="#222" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
