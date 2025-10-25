import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from '../MyPosts/MyPosts';

const ProfileInfo = () => {
    return (
    <div>
          <img src='https://avatars.mds.yandex.net/i?id=93092b5107dd932437fc9054070ec039_l-9461059-images-thumbs&n=13' className={s.profileImage}></img>

        </div>
    )
}

export default ProfileInfo;