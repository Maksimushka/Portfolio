import React from 'react';
import s from './Footer.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import FooterItem from './footerItem/FooterItem';

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Биль Максим</h2>
                <div className={s.footerItems}>
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                </div>
                <p>С правами всё хорошо!</p>
            </div>
        </div>
    );
};

export default Footer