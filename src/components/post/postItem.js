import React from "react";

function postItem({ post }) {
    return (
            <div className="post-content-container">
                <h3 className="post-title">{post.subreddit}</h3>
                <p className="author">{post.author}</p>
            </div>
        );
}

export default postItem;