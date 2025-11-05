import { renderEntireTree} from './../render';

let state = {
    profilePage: {

        posts: 
        [
            {id:1, message: 'говно пост', likeCount: '3', img:'https://i.pinimg.com/originals/79/0c/00/790c00e470c3d5b40cd2ad53f6d295f9.jpg'},
            {id:2, message: 'чё маме? че папе?', likeCount: '∞', img:'https://i.pinimg.com/originals/23/bb/6a/23bb6ac85eb4781555876d9fb472ff8b.jpg'},
        ],
        newPostText: ''
            },

    messagesPage: {
             dialogs: [
        {id: 1, name: 'Daniil'}, 
        {id: 2, name: 'Nekita'},
        {id: 3, name: 'Timur'}, 
        {id: 4, name: 'Sasha'},
    ],
        messages: [
            {id: 1, message: "Hi"}, 
            {id: 2, message: "idi na"},
            {id: 3, message: "sam idi"}, 
        ]
    }


}

window.state = state

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: Math.floor(Math.random()*19)+1,
        img: 'https://ih1.redbubble.net/image.285382301.6882/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg'

    }
    state .profilePage.posts.push(newPost)
    renderEntireTree(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    
    renderEntireTree(state)
}

export default state;