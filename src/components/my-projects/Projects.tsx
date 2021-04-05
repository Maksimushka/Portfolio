import React from 'react';
import s from './Projects.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import Project from './project/Project';
import HeadOfBlock from '../head-of-block/HeadOfBlock';

const Projects = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, tempora.' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, tempora.'
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <HeadOfBlock description={description} title={'My projects'} subtitle={'Portfolio'} />
                <div className={s.projects}>
                    <Project name={'TodoList'}/>
                    <Project name={'Counter'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;