import React from "react";
import styleContainer from '../../../common/styles/Container.module.css';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import s from './AboutMe.module.scss'
// @ts-ignore
import Fade from 'react-reveal/Fade'

const AboutMe = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, magnam!'
    return (
        <div id='aboutMe' className={s.aboutMeBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.progressContainer}`}>
                    <HeadOfBlock description={description} title={'Обо мне'} subtitle={'Расскажу немного о себе'} />
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;