import React from "react";

export default function PostItem({ post }) {
    return (
            <div className="post-content-container">
                <h3 className="post-title">{post.subreddit}</h3>
                <p className="author">{post.author}</p>
            </div>
        );
}
