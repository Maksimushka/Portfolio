import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import Skill from './skill/Skill';
import HeadOfBlock from "../../reuse-components/head-of-block/HeadOfBlock";
import {faSketch} from "@fortawesome/free-brands-svg-icons";
import {faCubes} from "@fortawesome/free-solid-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faVials} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade'

const Skills = () => {

    const skills = [
        {title: 'Технологии', icon: faCode, text: 'React, Redux, Axios, Thunk, Git, Formik'},
        {title: 'Основы', icon: faCubes, text: 'ES6, HTML5, CSS3, TypeScript, REST API'},
        {title: 'Дизайн', icon: faSketch, text: 'Scss, Flex-box, Grid, Material-UI'},
        {title: 'Тестирование', icon: faVials, text: 'Jest, Unit tests, storybook, snapShot'},
    ]

    return (
        <div id='skills' className={s.skillsBlock}>
            <Fade triggerOnce direction={'bottom-left'}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <HeadOfBlock title={'Мои навыки'} subtitle={'Что я умею?'} />
                    <div className={s.skills}>
                        {skills.map( el => <Skill key={el.title} text={el.text} title={el.title} icon={el.icon} />)}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;