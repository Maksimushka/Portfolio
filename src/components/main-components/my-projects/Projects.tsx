import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import Project from './project/Project';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import todoImg from './../../../assets/todolist.png'
import socialNetImg from './../../../assets/social-network.jpg'

const Projects = () => {
    let headDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, tempora.' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, tempora.'

    let projects = [
        {title: 'TodoList', description: headDescription, style: {backgroundImage: 'url(' + todoImg + ')',}},
        {title: 'Social Network', description: headDescription, style: {backgroundImage: `url(${socialNetImg})`}},
    ]

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <HeadOfBlock description={headDescription} title={'Мои проекты'} subtitle={'Портфолио'} />
                <div className={s.projects}>
                    {
                        projects.map(el => {
                            return <Project
                                name={el.title}
                                style={el.style}
                                description={el.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;