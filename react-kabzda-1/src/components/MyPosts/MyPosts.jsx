import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';

const MyPosts = () => {
    return <div className={s.content}>
        <div>My posts</div>
        <textarea></textarea>
        <button>Add post</button>
        <div className={s.posts}>
            <Post message='говно пост' like='3' img='https://i.pinimg.com/originals/79/0c/00/790c00e470c3d5b40cd2ad53f6d295f9.jpg'/>
            <Post message='чё маме? че папе?' like='∞' img='https://i.pinimg.com/originals/23/bb/6a/23bb6ac85eb4781555876d9fb472ff8b.jpg'/>
        </div>
    </div>
}

export default MyPosts;