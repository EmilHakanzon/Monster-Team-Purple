import { useUserContext } from "@/src/context/UserCOntext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { usePostContext } from "@/src/context/PostContexts";
import PostItem from "@/src/components/PostItem";
import { Post } from "@/src/components/PostItem";
export default function HomePage() {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const { posts } = usePostContext();
  const renderPostItem = ({ item }: { item: Post }) => <PostItem post={item} />;

  // Utkommenterad för att inte krascha appen
  // useEffect(() => {
  //   if (!currentUser) {
  //     router.replace("/(tabs)/StartScreen");
  //   }
  // }, [currentUser]);

  return (
    <View style={styles.container}>
      {currentUser ? (
        <>
          <Text style={styles.welcome}>Välkommen, {currentUser.name}!</Text>
          <Text>Du är nu inloggad som {currentUser.name}.</Text>
        </>
      ) : (
        <Text>Ingen användare vald!</Text>
      )}
      <Text style={styles.welcome}>Hej igen 👋</Text>
      <Text style={styles.message}>Detta är en HomePage sidan!</Text>
      <Text style={styles.message}>
        Här kommer main Ui vara för att visa post osv!
      </Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        contentContainerStyle={styles.listContent}
      />

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
  listContent: {
    paddingVertical: 8,
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
