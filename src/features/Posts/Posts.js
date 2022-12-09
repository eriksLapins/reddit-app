import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadPosts,
    selectPosts,
    isLoading
} from './postsSlice.js';

import postItem from '../../components/post/postItem';


const Posts = () => {
    const dispatch = useDispatch();
    const postPreviews = useSelector(selectPosts);
    const isLoadingPreviews = useSelector(isLoading);

    useEffect((subreddit) => {
        dispatch(loadPosts(subreddit));
    }, [dispatch])

    if (isLoadingPreviews) {
        return <div className="loading">Loading Posts</div>
    }

    return (
        <>
            <section className="posts-container">
                <h2 className="section-title">Posts</h2>
                {postPreviews.map((post) => (
                    <div key={post.id}>
                        <postItem post={post}/>
                    </div>
                ))
                }
            </section>
        </>
        )
}

export default Posts