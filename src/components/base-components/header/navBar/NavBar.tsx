import React from 'react';
import s from './NavBar.module.scss'
// @ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

export type BlockNamesType = {
    blockNames: {
        name: string,
        link: string
    }[]
}

const NavBar: React.FC<BlockNamesType> = ({blockNames}) => {
    return (
        <div className={s.navBar}>
            {
                blockNames.map(el => {
                    return <Link
                        key={el.name}
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
    );
};

export default NavBar