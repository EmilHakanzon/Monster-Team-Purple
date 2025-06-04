/* 
	This file is for managing anything that has to do with the comment context.
	The "commnet" type has been renamed to avoid collisions with native types.
	In this file you will find:
		* Comments context value
		* Comments context provider
		* Comments context reducer + actions
		* Comments context hook

	Ther file is heavy commented to allow for collaboration between team members of different skill.
*/

import React, { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react";
import { PostComment } from "../types/PostComment";

// Using a dictionary instead of a list.
// This makes direct ID lookups O1, but we can still itterate for other conditions.
// Might be little overkill, but as long as everyone understands it it shouldn't be any issues.
type PostCommentsState = Record<string, PostComment>;

type PostCommentsContextValue = {
	postComments: PostCommentsState;
	getById: (id: string) => PostComment | null;
	getByAuthor: (authorId: string) => PostComment[];
	getByPost: (postId: string) => PostComment[];
	push: (comment: PostComment) => void;
	remove: (id: string) => void;
	clearAll: () => void;
};

// This is the reducer action and reducer.
// If we want more functionality to it, just add more stuff here. Make sure to do in-line comments explaining potentially unclear payloads.
type Action =
	| { type: "PUSH"; payload: PostComment }
	| { type: "REMOVE"; payload: string } // using comment UUID
	| { type: "CLEAR_ALL" };

const reducer = (state: PostCommentsState, action: Action): PostCommentsState => {
	switch (action.type) {
		case "PUSH": {
			const c = action.payload;
			return { ...state, [c.id]: c };
		}
		case "REMOVE": {
			// Some dictionary magic to remove a value
			// Basically, separate the KVP into 2: one for the payload and one for the rest (as ref) of the dict, then return the rest.
			const { [action.payload]: _, ...rest } = state;
			return rest;
		}
		case "CLEAR_ALL":
			return {};
		default:
			return state;
	}
};

const PostCommentsContext = createContext<PostCommentsContextValue | null>(null);

export const PostCommentsProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {});

	// Methods that mutates the state
	const push = useCallback((c: PostComment) => dispatch({ type: "PUSH", payload: c }), []);
	const remove = useCallback((id: string) => dispatch({ type: "REMOVE", payload: id }), []);
	const clearAll = useCallback(() => dispatch({ type: "CLEAR_ALL" }), []);

	// Methods that collects from the state
	const getById = useCallback((id: string) => state[id] ?? null, [state]);
	const getByAuthor = useCallback(
		(authorId: string) => Object.values(state).filter((PostComment) => PostComment.author === authorId),
		[state]
	);
	const getByPost = useCallback(
		(postId: string) => Object.values(state).filter((PostComment) => PostComment.post === postId),
		[state]
	);

	// The context value.
	// Not sure if useMemo is needed, but my guess is that it can't hurt in this case.
	const value = useMemo(
		() => ({
			postComments: state,
			getById,
			getByAuthor,
			getByPost,
			push,
			remove,
			clearAll,
		}),
		[state, getById, getByAuthor, getByPost, push, remove, clearAll]
	);

	return <PostCommentsContext.Provider value={value}>{children}</PostCommentsContext.Provider>;
};

// use post comments hook - this is where the magic happens.
// Pull this badboy into the code like so:

/*
	Eg:
		const { getByPost, push, remove } = useComments();
		...
		<Button onPress={() => remove(commentId)}>
*/
export const usePostComments = (): PostCommentsContextValue => {
	const ctx = useContext(PostCommentsContext);
	if (!ctx) {
		throw new Error("usePostComments must be used inside PostCommentsProvider");
	}
	return ctx;
};
