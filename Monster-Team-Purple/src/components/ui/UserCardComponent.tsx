import type { User } from "@/src/types/UserType";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  user: User;
  onSelect: (user: User) => void;
}

export const UserCard: React.FC<Props> = ({ user, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(user)} style={styles.card}>
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
