type Post = {
  id: string;
  name: string;
  authorId: string;
  content: string;
  likedBy: string[];
}

type PostContextType = {
  posts: Post[];
  addPost: (post: Post) => void;
  toggleLike: (postId: string, userId: string) => void;
}


import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([{ id: "1", authorId: "1", name: "Monster", content: "Just had my fifth cup of coffee. Toilet, watch out!", likedBy: ["Sylwia", "Harry"] }]);

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
