import React from 'react';
import s from './NavBar.module.scss'
// @ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar: React.FC = () => {
    return (
        <div className={s.navBar}>
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Главная</Link>
            <Link
                activeClass={s.active}
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Обо мне</Link>
            <Link
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Навыки</Link>
            <Link
                activeClass={s.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Проекты</Link>
            <Link
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >Контакты</Link>
        </div>
    );
};

export default NavBar