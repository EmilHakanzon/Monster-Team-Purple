import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hej igen 👋</Text>
      <Text style={styles.message}>Detta är en HomePage sidan!</Text>
      <Text style={styles.message}>
        {" "}
        Här kommer main Ui vara för att visa post osv!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/StartScreen")}
      >
        <Text style={styles.buttonText}>Gå till StartScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f7ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 10,
    color: "#007acc",
  },
  message: {
    fontSize: 16,
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007acc",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
