import { Entity } from "./Entity";

export type Comment = Entity & {
	post: string; // Post UUID
	author: string; // User UUID
	content: string;
	likes: string[]; // User UUIDs
};
