import React from 'react';
import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Skill = (props) => {

    return (
        <div className={s.skill}>
            <FontAwesomeIcon className={s.icon} icon={props.icon}/>
            <h3>{props.title}</h3>
            <div className={s.description}>{props.text}</div>
        </div>
    );
};

export default Skill;