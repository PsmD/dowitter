import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types/post";

const initialState: IPost[] = [];

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.push(action.payload);
		},
		editPost: (state, action) => {
			const { id, title, text } = action.payload;
			const existingPost = state.find((post) => post.id === id);
			if (existingPost) {
				existingPost.title = title;
				existingPost.text = text;
			}
		},
		deletePost: (state, action) => {
			const { id } = action.payload;
			const existingPost = state.find((post) => post.id === id);
			if (existingPost) {
				return state.filter((post) => post.id !== id);
			}
		},
	},
});

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
