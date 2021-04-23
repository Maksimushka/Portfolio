import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import Project from './project/Project';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import todoImg from './../../../assets/todolist.png'
import converterImg from './../../../assets/converter.png'
import socialNetImg from './../../../assets/social-network.jpg'
// @ts-ignore
import Fade from 'react-reveal/Fade'

const Projects = () => {
    let headDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, tempora.' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, tempora.'

    let projects = [
        {title: 'TodoList', description: headDescription, style: {backgroundImage: `url(${todoImg})`},
            sourceLink: 'https://github.com/Maksimushka/ToDoList',
            demoLink: 'https://maksimushka.github.io/Currency-Converter/'
        },
        {title: 'Currency converter', description: headDescription, style: {backgroundImage: `url(${converterImg})`},
            sourceLink: 'https://github.com/Maksimushka/Currency-Converter',
            demoLink: 'https://maksimushka.github.io/Currency-Converter/'
        },
        {title: 'Social Network', description: headDescription, style: {backgroundImage: `url(${socialNetImg})`},
            sourceLink: 'https://github.com/Maksimushka/Social_Network',
            demoLink: 'https://maksimushka.github.io/Social_Network/'
        },
        {title: 'Counter', description: headDescription, style: {backgroundImage: `url(${socialNetImg})`},
            sourceLink: 'https://github.com/Maksimushka/Social_Network',
            demoLink: 'https://maksimushka.github.io/Social_Network/'
        },
    ]

    return (
        <div id='projects' className={s.projectsBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                    <HeadOfBlock description={headDescription} title={'Мои проекты'} subtitle={'Портфолио'} />
                    <div className={s.projects}>
                        {
                            projects.map(el => {
                                return <Project
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