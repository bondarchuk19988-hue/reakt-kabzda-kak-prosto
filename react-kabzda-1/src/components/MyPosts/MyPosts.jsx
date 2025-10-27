import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';




const MyPosts = (props) => {
    
let postsElement = 
    props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} img={p.img}/>)

let newPosytElement = React.createRef()

let addPost = () => {
    let text = newPosytElement.current.value
    props.addPost(text)
}

return <div className={s.content}>
    <div>My posts</div>
        <textarea ref={newPosytElement}></textarea>
        <button onClick={ addPost }>Add post</button>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;