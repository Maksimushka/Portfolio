import React from "react";
import styleContainer from '../../../common/styles/Container.module.css';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import s from './AboutMe.module.scss'
// @ts-ignore
import Fade from 'react-reveal/Fade'

const AboutMe = () => {
    return (
        <div id='aboutMe' className={s.aboutMeBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.aboutContainer}`}>
                    <HeadOfBlock title={'Обо мне'} subtitle={'Расскажу немного о себе'} />
                    <div className={s.aboutMe}>
                        Я Frontend developer. Создаю SPA с помощью TypeScript/React/Redux. Люблю решать задачи на Codewars, смотреть обучающие видео, читать статьи и изучать новые технологии. В данный момент я занимаюсь front-end разработкой, но в будующем хочу двигаться в сторону fullstack разработчика. Открыт к Ващим предолжениям.
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;