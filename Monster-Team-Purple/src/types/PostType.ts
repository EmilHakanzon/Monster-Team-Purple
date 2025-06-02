export interface Post {
  id: string;
  author: string;
  post: string;
  likes: string[];
  comments: Comment[];
}
