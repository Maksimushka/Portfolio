import React from 'react';
import s from './Project.module.scss'

const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.imageBlock} style={props.style}>
                <button className={s.imageBlockButton}>Смотреть</button>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.name}</h3>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;