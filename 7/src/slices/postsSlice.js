import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addPosts: postsAdapter.addMany,
    addPost: postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
  },
});

export const { actions } = postsSlice;
export const selectors = postsAdapter.getSelectors((state) => state.posts);
export default postsSlice.reducer;
// END
