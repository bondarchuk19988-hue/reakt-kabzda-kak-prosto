import React from 'react';
import s from './Music.module.css';
import MyMusic from './MyMusic/MyMusic';
import MyAlbum from './MyAlbum/MyAlbum';

const Music = (props) => {
    return (
    <div className={s.music}>
      <MyMusic musicPage={props.musicPage} dispatch={props.dispatch}/>
      <MyAlbum musicPage={props.musicPage} dispatch={props.dispatch}/>
    </div>
    )
}

export default Music;