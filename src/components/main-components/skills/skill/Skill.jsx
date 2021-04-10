import React from 'react';
import s from './Skill.module.scss'

const Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.skill}</h3>
            <div className={s.description}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Mollitia, optio.
            </div>
        </div>
    );
};

export default Skill;