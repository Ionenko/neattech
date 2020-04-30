import React from 'react';
import {
    container,
    name,
    status,
    link
} from './profile.module.scss'
import Icon from "../ui/icon";

const Profile = () => {
    return (
        <div className={container}>
           <p className={name}>Мелани</p>
           <p className={status}>1 ч 9 мин</p>
            <a className={link} href="./">Ваш уникальный код : F37R9
                <Icon icon="file"/>
            </a>
        </div>
    );
};

export default Profile;