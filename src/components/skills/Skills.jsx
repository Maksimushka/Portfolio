import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {

    const skills = ['React', 'HTML', 'Css', 'Redux', 'Git', 'Redux-saga']

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    {skills.map( el => <Skill skill={el} />)}
                </div>
            </div>
        </div>
    );
};

export default Skills;