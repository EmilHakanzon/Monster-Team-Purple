import { Entity } from "./Entity";

export type Post = Entity & {
	author: string; // User UUID
	content: string;
	likes: string[]; // User UUIDs
};
