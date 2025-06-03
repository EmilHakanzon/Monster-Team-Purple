import { UserCard } from "@/src/components/ui/UserProfilCardComponent";
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
      <Text style={styles.monsterTitle}>Monster Social 🧌</Text>
      <Text style={styles.title}>Välkommen till Startsidan</Text>
      <Text style={styles.userTitle}>Välj Användare</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <UserCard user={item} onSelect={handleSelectUser} />
          </View>
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
    top: 60,
  },
  monsterTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#4B5563",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 6,
    textAlign: "center",
    color: "#22223b",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  userTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  userList: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  cardWrapper: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
});
