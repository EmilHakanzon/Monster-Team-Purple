import { useUserContext } from "@/src/context/UserCOntext";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getAvatarUrl } from "../Utility/GetAvatarUrlImage";

type Props = {
  userId: string;
};

export default function UserCardComponent({ userId }: Props) {
  const { users } = useUserContext();

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>Användare ej hittad</Text>
      </View>
    );
  }

  // Placeholder-bild (använder pravatar + userId för unikhet)
  // Ändrad så den använder utility-funktionen här med från din logik.
  const avatarUrl = getAvatarUrl(user.id);

  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
});
