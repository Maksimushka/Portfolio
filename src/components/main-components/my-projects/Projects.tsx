import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import Project from './project/Project';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import todoImg from '../../../assets/todolist.png'
import converterImg from './../../../assets/converter.png'
import socialNetImg from './../../../assets/network.png'
import socialImg from '../../../assets/network.png'
import counterImg from './../../../assets/AAA.png'
// @ts-ignore
import Fade from 'react-reveal/Fade'

const Projects = () => {

    let projects = [
        {title: 'TodoList',
            description: "Это приложение позволяет создавать несколько списков задач, а также удалять, изменять, добавлять, сортировать задачи.",
            tech: 'TS, React, Redux, Axios, Thunk, Formik, React-router, Material-UI, Storybook',
            style: {backgroundImage: `url(${todoImg})`},
            sourceLink: 'https://github.com/Maksimushka/ToDoList',
            demoLink: 'https://maksimushka.github.io/ToDoList'},
        {title: 'Currency converter',
            description: "Приложение позволяет конвертировать любую мировую валюту, а также просматривать актуальные курсы валют",
            tech: 'TS, React, Redux, React-redux, Axios, Thunk, React-router, Scss',
            style: {backgroundImage: `url(${converterImg})`},
            sourceLink: 'https://github.com/Maksimushka/Currency-Converter',
            demoLink: 'https://maksimushka.github.io/Currency-Converter/'},
        {title: 'Social Network',
            description: "Социальная сеть, с возможностью подписываться на других пользователей, менять свой профиль, загружать фотографию.",
            tech: 'TS, React, Redux, React-redux, Axios, Formik, Thunk, React-router, Scss, Ant design',
            style: {backgroundImage: `url(${socialImg})`},
            sourceLink: 'https://github.com/Maksimushka/Social_Network',
            demoLink: 'https://maksimushka.github.io/Social_Network/'},
        {title: 'Counter',
            description: "Мой первый проект с использование Redux и local storage",
            tech: 'TS, React, Redux, React-redux, Thunk, Local Storage',
            style: {backgroundImage: `url(${counterImg})`},
            sourceLink: 'https://github.com/Maksimushka/Counter',
            demoLink: 'https://maksimushka.github.io/Counter/'},
    ]

    return (
        <div id='projects' className={s.projectsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                    <HeadOfBlock title={'Мои проекты'} subtitle={'Портфолио'} />
                    <div className={s.projects}>
                        {
                            projects.map(el => {
                                return <Project
                                    tech={el.tech}
                                    demo={el.demoLink}
                                    source={el.sourceLink}
                                    key={el.title}
                                    name={el.title}
                                    style={el.style}
                                    description={el.description}/>
                            })
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;