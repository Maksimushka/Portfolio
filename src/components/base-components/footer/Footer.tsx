import React from 'react';
import s from './Footer.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faVk} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Footer: React.FC = () => {
    const icons = [
        {icon: faTelegram, link: 'https://t.me/Maxim_Bil'},
        {icon: faGithub, link: 'https://github.com/Maksimushka'},
        {icon: faVk, link: 'https://vk.com/son_of_stolypin'},
        {icon: faLinkedin, link: 'https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B1%D0%B8%D0%BB%D1%8C-3b9635210/'}
    ]

    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Биль Максим</h2>
                <div className={s.footerItems}>
                    {icons.map(el => {
                        return (
                            <div className={s.footerItem} key={el.link}>
                                <a target="_blank" rel="noreferrer" href={el.link}>
                                    <FontAwesomeIcon className={s.footerItemIcon} icon={el.icon}/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer