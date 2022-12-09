import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../../api/reddit";

export const loadPosts = createAsyncThunk(
    "postPreviews/loadPosts",
    async (subreddit) => {
        const data = await getSubredditPosts(subreddit);
        return data;
    }   
)


export const postsSlice = createSlice({
    name: 'postPreviews',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        subreddit: '/r/all',
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.posts = [];
            })
    }
});


export const selectPosts = (state) => state.posts;

export const isLoading = (state) => state.isLoading;

export default postsSlice.reducer;