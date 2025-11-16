const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state: {
    profilePage: {
        posts: [
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
    },

    musicPage: {
    tracks: [
         
            {
                id: 1,
                title: "Small Axe",
                artist: "Bob Marley",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                duration: ""
            },
            {
                id: 2,
                title: "No Woman No Cry",
                artist: "Bob Marley", 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                duration: ""
            },
            {
                id: 3,
                title: "Three Little Birds",
                artist: "Bob Marley",
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                duration: ""
            }
      

    ],
    albums: [
        {
            id: 1,
            title: "Егор Летов - Всё идет по плану",
            artist: "Егор Летов",
            cover: "https://avatars.mds.yandex.net/i?id=7c654420e904a0dbfb98ae6caa026468_l-5280741-images-thumbs&n=13",
            tracks: [
                {
                    id: 101,
                    title: "Всё идёт по плану",
                    artist: "Егор Летов",
                    src: "https://track.pinkamuz.pro/download/3336373437313531368e373135333534b034370200/2f70e1f1e01973dfade80b800b479f64/Гражданская%20оборона%20-%20Всё%20идёт%20по%20плану.mp3"
                },
                {
                    id: 102,
                    title: "Про дурачка",
                    artist: "Егор Летов",
                    src: "https://track.pinkamuz.pro/download/3336373437313531368c37313533b1343432b30400/d8d974ab1c4c8c3b42c1654618a29785/Гражданская%20оборона%20-%20Про%20дурачка.mp3"
                }
            ]
        },
        {
            id: 2,
            title: "Валентин Стрыкало - Танцевать",
            artist: "Валентин Стрыкало",
            cover: "https://lastfm.freetls.fastly.net/i/u/ar0/2a07eec1a74570062ad3c8e6c5d5955c.jpg",
            tracks: [
                {
                    id: 201,
                    title: "Улица Сталеваров",
                    artist: "Валентин Стрыкало",
                    src: "https://muzbomb.net/getmp3/MC9NakE0TlRjek1UUTVYelExTmpJME5qRTFOMTltTUdZM01HVmpaVGszWmprM05qbGhaVEJmWkRoaE0yRXpObVkwWW1RNE9UWXlPR000THp3aGZDRS1XeUpuY3lJc01Td2lKVVF3SlRreUpVUXdKVUl3SlVRd0pVSkNKVVF3SlVJMUpVUXdKVUpFSlVReEpUZ3lKVVF3SlVJNEpVUXdKVUpFS3lWRU1DVkJNU1ZFTVNVNE1pVkVNU1U0TUNWRU1TVTRRaVZFTUNWQ1FTVkVNQ1ZDTUNWRU1DVkNRaVZFTUNWQ1JTSXNNU3h1ZFd4c0xEQXNOVFVzTUYwPS8lRDAlOTIlRDAlQjAlRDAlQkIlRDAlQjUlRDAlQkQlRDElODIlRDAlQjglRDAlQkQrJUQwJUExJUQxJTgyJUQxJTgwJUQxJThCJUQwJUJBJUQwJUIwJUQwJUJCJUQwJUJFKy0rJUQwJUEzJUQwJUJCJUQwJUI4JUQxJTg2JUQwJUIwKyVEMCVBMSVEMSU4MiVEMCVCMCVEMCVCQiVEMCVCNSVEMCVCMiVEMCVCMCVEMSU4MCVEMCVCRSVEMCVCMl8obXV6Ym9tYi5uZXQpLyVEMCU5MiVEMCVCMCVEMCVCQiVEMCVCNSVEMCVCRCVEMSU4MiVEMCVCOCVEMCVCRCslRDAlQTElRDElODIlRDElODAlRDElOEIlRDAlQkElRDAlQjAlRDAlQkIlRDAlQkUrJUUyJTgwJTkzKyVEMCVBMyVEMCVCQiVEMCVCOCVEMSU4NiVEMCVCMCslRDAlQTElRDElODIlRDAlQjAlRDAlQkIlRDAlQjUlRDAlQjIlRDAlQjAlRDElODAlRDAlQkUlRDAlQjJfKG11emJvbWIubmV0KT9zPXZrJnI9JmNvb2tpZXM9Nzk3NzQyNjU0OTlfMS5jb29raWU="
                },
                {
                    id: 202,
                    title: "Гори",
                    artist: "Валентин Стрыкало",
                    src: "https://muzbomb.net/getmp3/MC9NakF3TURBM056RTNNMTgwTlRZeU5EVXdNelZmTldSbVlqTmtZemhsTWpFM09EWTVZVGd3WHpsaE5ETTBPV1ZpWW1ZNE5EZ3lNVGs0TkM4OElYd2hQbHNpWjNNaUxESXNJaVZFTUNVNU1pVkVNQ1ZDTUNWRU1DVkNRaVZFTUNWQ05TVkVNQ1ZDUkNWRU1TVTRNaVZFTUNWQ09DVkVNQ1ZDUkNzbFJEQWxRVEVsUkRFbE9ESWxSREVsT0RBbFJERWxPRUlsUkRBbFFrRWxSREFsUWpBbFJEQWxRa0lsUkRBbFFrVWlMREVzYm5Wc2JDd3dMRFUxTERCZC8lRDAlOTIlRDAlQjAlRDAlQkIlRDAlQjUlRDAlQkQlRDElODIlRDAlQjglRDAlQkQrJUQwJUExJUQxJTgyJUQxJTgwJUQxJThCJUQwJUJBJUQwJUIwJUQwJUJCJUQwJUJFKy0rJUQwJTkzJUQwJUJFJUQxJTgwJUQwJUI4XyhtdXpib21iLm5ldCkvJUQwJTkyJUQwJUIwJUQwJUJCJUQwJUI1JUQwJUJEJUQxJTgyJUQwJUI4JUQwJUJEKyVEMCVBMSVEMSU4MiVEMSU4MCVEMSU4QiVEMCVCQSVEMCVCMCVEMCVCQiVEMCVCRSslRTIlODAlOTMrJUQwJTkzJUQwJUJFJUQxJTgwJUQwJUI4XyhtdXpib21iLm5ldCk/cz12ayZyPSZjb29raWVzPTc5Nzc0MjY1NDk5XzEuY29va2ll"
                }
            ]
        },
        {
            id: 3,
            title: "KSB - Воскресение",
            artist: "KSB MUZIC",
            cover: "https://images.genius.com/29a635729cc4ff9b2b68d37b7b0f9f53.1000x1000x1.png",
            tracks: [
                {
                    id: 301,
                    title: "Сиять",
                    artist: "KSB MUZIC",
                    src: "https://jamix.cc/files/static/ksb-muzic-siyat.mp3"
                },
                {
                    id: 302,
                    title: "Студент",
                    artist: "KSB MUZIC",
                    src: "https://jamix.cc/files/static/ksb-muzic-student.mp3"
                }
            ]
        },
        {
            id: 4,
            title: "Дайте Танк - Хрупко",
            artist: "Дайте Танк",
            cover: "https://avatars.mds.yandex.net/i?id=cdbbeeb4518099a2959d8ff3082279fbfc0f4ef3-5303267-images-thumbs&n=13",
            tracks: [
                {
                    id: 401,
                    title: "Логика",
                    artist: "Дайте Танк",
                    src: "https://lmusic.kz/api/download/205817"
                },
                {
                    id: 402,
                    title: "Рекурсия",
                    artist: "Дайте Танк",
                    src: "https://lmusic.kz/api/download/210735"
                }
            ]
        }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
    currentAlbumId: null
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
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagesPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.messagesPage.newMessageBody 
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messages.push({id: 4, message: body}, )
            this._callSubscriber(this._state)
        }

        else if (action.type === 'SET_CURRENT_TRACK') {
            this._state.musicPage.currentTrackIndex = action.index
            this._callSubscriber(this._state)
        } else if (action.type === 'TOGGLE_PLAY') {
            this._state.musicPage.isPlaying = action.isPlaying
            this._callSubscriber(this._state)
        }

        else if (action.type === 'SET_CURRENT_ALBUM') {
            this._state.musicPage.currentAlbumId = action.albumId
            this._callSubscriber(this._state)
        } else if (action.type === 'SET_ALBUM_TRACKS') {
            this._state.musicPage.tracks = action.tracks
            this._state.musicPage.currentTrackIndex = 0
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export const setCurrentTrackActionCreator = (index) => ({type: 'SET_CURRENT_TRACK', index})
export const togglePlayActionCreator = (isPlaying) => ({type: 'TOGGLE_PLAY', isPlaying})

export const setCurrentAlbumActionCreator = (albumId) => ({type: 'SET_CURRENT_ALBUM', albumId})
export const setAlbumTracksActionCreator = (tracks) => ({type: 'SET_ALBUM_TRACKS', tracks})


window.store = store
export default store;