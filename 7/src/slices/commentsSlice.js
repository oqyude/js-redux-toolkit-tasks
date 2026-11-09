import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const commentsAdapter = createEntityAdapter();

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors((state) => state.comments);
export default commentsSlice.reducer;
// END
