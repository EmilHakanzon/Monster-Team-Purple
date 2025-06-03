import { Post } from '../types/PostType';


type PostContextType = {

  posts: Post[];
  addPost: (post: Post) => void;
  toggleLike: (postId: string, userId: string) => void;
}


import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([{ date: "1st january", id: "1", authorId: "1", name: "Monster Mac Monsterson", content: "Just had my fifth cup of coffee. Toilet, watch out!", likedBy: ["Sylwia", "Harry", "Joel", "Alexander"] }, { date: "1st february", id: "2", authorId: "2", name: "Sylwia", content: "My dogs name is Rolf and he is very cute teehee", likedBy: ["Sylwia", "Harry", "Joel", "Alexander"] }]);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const toggleLike = (postId: string, userId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
            ...post,
            likedBy: post.likedBy.includes(userId)
              ? post.likedBy.filter((id) => id !== userId)
              : [...post.likedBy, userId],
          }
          : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, toggleLike }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
