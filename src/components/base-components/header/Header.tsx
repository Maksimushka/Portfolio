import React from 'react';
import s from './Header.module.scss'
import NavBar from './navBar/NavBar';
import styleContainer from '../../../common/styles/Container.module.css'
import BurgerNavBar from './burgerNavBar/BurgerNavBar';

const Header: React.FC = () => {
    const blockNames = [{name: 'Главная', link: 'main'}, {name: 'Обо мне', link: 'aboutMe'},
        {name: 'Навыки', link: 'skills'}, {name: 'Проекты', link: 'projects'}, {name: 'Контакты', link: 'contacts'},]

    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <NavBar blockNames={blockNames} />
                <BurgerNavBar blockNames={blockNames} />
            </div>
        </div>
    );
};

export default Header