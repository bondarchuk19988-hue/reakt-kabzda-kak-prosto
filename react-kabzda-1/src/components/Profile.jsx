import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';

const Profile = () => {
    return (
    <div className={s.content}>
        <div>
          <img src='https://avatars.mds.yandex.net/i?id=93092b5107dd932437fc9054070ec039_l-9461059-images-thumbs&n=13'></img>
        </div>
        <MyPosts />
        </div>
    )
}

export default Profile;