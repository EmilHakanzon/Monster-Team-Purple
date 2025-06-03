// context/UserContext.tsx
import React, { createContext, useContext, useState } from "react";
import type { User } from "../types/UserType";

interface UserContextType {
  users: User[];
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users] = useState<User[]>([
    {
      id: "1",
      name: "Monster",
    },
    {
      id: "2",
      name: "MonsterReact",
    },
    {
      id: "3",
      name: "GreenMonster",
    },
    {
      id: "4",
      name: "YellowMonster",
    },
    {
      id: "5",
      name: "Troll",
    },
    {
      id: "6",
      name: "Witch",
    },
  ]);

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUserContext must be used within UserProvider");
  return context;
};
