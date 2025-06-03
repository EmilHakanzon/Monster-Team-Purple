import { Entity } from "./Entity";

// Renamed to avoid collision with native type
export type PostComment = Entity & {
	post: string; // Post UUID
	author: string; // User UUID
	content: string;
	likes: string[]; // User UUIDs
};
