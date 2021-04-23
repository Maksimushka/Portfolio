import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    demo: string
    source: string
    name: string
    style: any
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imageBlock} style={props.style}>
                <div className={s.imageBlockLinks}>
                    <a href={props.demo} target="_blank" className={s.imageBlockLink}>Demo</a>
                    <a href={props.source} target="_blank" className={s.imageBlockLink}>Source</a>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.name}</h3>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;