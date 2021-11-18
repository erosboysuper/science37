import React from 'react';
import userImage from '../../../assets/img/userimage.jpeg';
import './style.scss';

const Post = () => {
    return (
        <article className="tweet-area__post">
            <img src={userImage} className="tweet-area__post-img" alt="User Image"/>
            <div className="tweet-area__post-detail">
                <span className="tweet-area__post-username">@arianmahdavii</span>
                <p className="tweet-area__post-desc">Science is so cool <a className="tweet-area__post-link" href="#">https://t.com/BLAH</a> </p>
                <div className="tweet-area__hashtags">
                    <a className="filter-area__item">#coding</a>
                    <a className="filter-area__item">#coding</a>
                </div>
            </div>
        </article>
    );
}
 
export default Post;