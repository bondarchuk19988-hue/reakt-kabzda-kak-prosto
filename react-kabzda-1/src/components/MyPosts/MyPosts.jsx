import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';




const MyPosts = (props) => {
    
let postsElement = 
    props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} img={p.img}/>)


    return <div className={s.content}>
        <div>My posts</div>
        <textarea></textarea>
        <button>Add post</button>
        <div className={s.posts}>
           {postsElement}
        </div>
    </div>
}

export default MyPosts;