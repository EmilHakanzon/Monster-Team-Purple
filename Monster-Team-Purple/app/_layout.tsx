import { UserProvider } from "@/src/context/UserCOntext";
import { PostProvider } from "@/src/context/PostContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { PostCommentsProvider } from "@/src/context/CommentsContexts";
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <PostProvider>
        <PostCommentsProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="StartScreen" />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </PostCommentsProvider>
      </PostProvider >

    </UserProvider>
  );
}
