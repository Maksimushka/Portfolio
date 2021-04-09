import React from 'react';
import s from './Project.module.css'

const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.imageBlock}>
                <button className={s.imageBlockButton}>Смотреть</button>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.name}</h3>
                <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore impedit
                    omnis, quibusdam soluta veniam.
                </div>
            </div>
        </div>
    );
};

export default Project;