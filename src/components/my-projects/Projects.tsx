import React from 'react';
import s from './Projects.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2>My works</h2>
                <div className={s.projects}>
                    <Project name={'TodoList'}/>
                    <Project name={'Counter'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;