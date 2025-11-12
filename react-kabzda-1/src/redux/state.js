const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state: {
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
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber()  {
    console.log('')
    },
    getState() {
        return this._state
    },
     subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        if (action.type === ADD_POST){
             let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: Math.floor(Math.random()*19)+1,
            img: 'https://ih1.redbubble.net/image.285382301.6882/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg'

        }
        this._state .profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagesPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE){
            let body = this._state.messagesPage.newMessageBody 
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messages.push({id: 4, message: body}, )
            this._callSubscriber(this._state)
        }

    }
}
    export const addPostActionCreator = () => ({type: ADD_POST})
    export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

    export const sendMessageCreator = () => ({type: SEND_MESSAGE})
    export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



window.store = store
export default store;