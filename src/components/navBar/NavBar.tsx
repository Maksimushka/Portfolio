import React from 'react';
import s from './NavBar.module.css'

const NavBar: React.FC = () => {
    return (
        <div className={s.navBar}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default NavBar