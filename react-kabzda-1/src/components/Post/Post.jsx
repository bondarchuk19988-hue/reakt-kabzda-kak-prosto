import React, { useState } from 'react';
import s from './Post.module.css';

const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(props.likeCount);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className={s.item}>
            <img src={props.img} alt="Post avatar" />
            <div className={s.postContent}>
                {props.message}
            </div>
            <div>
                <span 
                    className={`${s.likeButton} ${isLiked ? s.liked : ''}`}
                    onClick={handleLike}
                >
                    {isLiked ? '💖' : '🤍'} like {likeCount}
                </span>
            </div>
        </div>
    )
}

export default Post;