import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadPosts,
    selectPosts,
    isLoading
} from './postsSlice.js';

import PostItem from '../../components/post/postItem';


const Posts = () => {
    const dispatch = useDispatch();
    const postPreviews = useSelector(selectPosts);
    const isLoadingPreviews = useSelector(isLoading);

    useEffect((subreddit) => {
        dispatch(loadPosts(subreddit));
    }, [dispatch]);

    if (isLoadingPreviews) {
        return <div className="loading">Loading Posts</div>
    };

    return (
            <div className="posts-container">
                <h1 className="section-title">Posts</h1>
                {postPreviews ? postPreviews.map((post) => (
                    <PostItem post={post} />
                )) : <div></div>}
            </div>
        )
}

export default Posts