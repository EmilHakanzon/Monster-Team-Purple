import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välkommen till Startsidan</Text>
      <Text style={styles.subtitle}>Denna sida är för att välja User!</Text>
      <Button
        title="Gå till Home"
        onPress={() => router.push("/homePage")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
