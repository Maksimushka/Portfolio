import React from 'react';
import s from './BurgerNavBar.module.scss'
import {BlockNamesType} from '../navBar/NavBar';
import {Link} from 'react-scroll';
import { useState } from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const BurgerNavBar: React.FC<BlockNamesType> = ({blockNames}) => {
    const [isOpen, setIsOpen] = useState(false)
    const burgerMenuItemsStyle = isOpen ? {} : {transform: 'translate(0, -250px)'}

    return (
        <div className={s.burgerMenu}>
            <div style={burgerMenuItemsStyle} className={s.burgerMenuItems}>
                {
                    blockNames.map(el => {
                        return <Link
                            key={el.name}
                            onClick={() => setIsOpen(false)}
                            activeClass={s.active}
                            to={el.link}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >{el.name}</Link>
                    })
                }
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className={s.burgerMenuButton}>
                <FontAwesomeIcon className={s.icon}  icon={faBars} />
            </div>
        </div>
    );
};

export default BurgerNavBar;