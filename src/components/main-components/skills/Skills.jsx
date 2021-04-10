import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import Skill from './skill/Skill';
import HeadOfBlock from "../../reuse-components/head-of-block/HeadOfBlock";

const Skills = () => {

    const skills = ['React', 'HTML', 'Css', 'Redux', 'Git', 'Redux-saga']
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut, illum. Atque cum dicta enim expedita reiciendis repudiandae suscipit veritatis?'

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <HeadOfBlock description={description} title={'Мои навыки'} subtitle={'Что я умею?'} />
                <div className={s.skills}>
                    {skills.map( el => <Skill key={el} skill={el} />)}
                </div>
            </div>
        </div>
    );
};

export default Skills;