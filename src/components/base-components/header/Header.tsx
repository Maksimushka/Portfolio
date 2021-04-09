import React from 'react';
import s from './Header.module.scss'
import NavBar from '../navBar/NavBar';
import styleContainer from '../../../common/styles/Container.module.css'

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <NavBar />
            </div>
        </div>
    );
};

export default Header