import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '../src/features/Posts/postsSlice'

export default configureStore({
    reducer: {
        postPreviews: postsReducer,
    },
})