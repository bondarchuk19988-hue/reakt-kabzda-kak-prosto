import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';
import { type } from '@testing-library/user-event/dist/type';
import {updateNewPostTextActionCreator,addPostActionCreator} from "../../redux/state";



const MyPosts = (props) => {
    
let postsElement = 
    props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} img={p.img}/>)

let newPostElement  = React.createRef()

let addPost = () => {
    props.dispatch(addPostActionCreator())
}

let onPostChange = () => {
    let text = newPostElement .current.value
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
}

return <div className={s.content}>
    <div>My posts</div>
        <textarea ref={newPostElement } onChange={onPostChange} value={props.newPostText}/>
        <button onClick={ addPost }>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;