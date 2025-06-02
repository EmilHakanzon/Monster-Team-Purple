import { UserCard } from "@/src/components/ui/UserCardComponent";
import { useUserContext } from "@/src/context/UserCOntext";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  const router = useRouter();
  const { users, setCurrentUser } = useUserContext();

  const handleSelectUser = (user: any) => {
    setCurrentUser(user);
    router.push("/homePage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välkommen till Startsidan</Text>
      <Text style={styles.subtitle}>Denna sida är för att välja User!</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard user={item} onSelect={handleSelectUser} />
        )}
        contentContainerStyle={styles.userList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  userList: {
    alignItems: "center",
  },
});
