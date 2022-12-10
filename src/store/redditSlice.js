import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/popular'
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },

    }
});

export const {
    setPosts,
    getPostsFailed,
    getPostsSuccess,
    startGetPosts,
    setSearchTerm,
    setSelectedSubreddit
} = redditSlice.actions;

export default redditSlice.reducer;



