import type { User } from "@/src/types/UserType";
import { getAvatarUrl } from "@/src/utility/GetAvatarUrlImage";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

interface UserCardProps {
  user: User;
  onSelect: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onSelect }) => {
  // Använder utility-funktion här att få bild med matchad id.
  const avatarUrl = getAvatarUrl(user.id);
  return (
    <TouchableOpacity onPress={() => onSelect(user)} style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "600",
  },
});
