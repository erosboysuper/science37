import React from 'react';
import Post from './Post';
import './style.scss';

const Posts = () => {
    return (
        <section className="tweet-area__posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            <div className="tweet-area__loadmore">Load more</div>
        </section>
    );
}
 
export default Posts;