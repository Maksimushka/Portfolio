import React from 'react';
import s from './HeadOfBlock.module.scss'

const HeadOfBlock = (props: { title: string, subtitle: string, description: string }) => {
    return (
        <div className={s.head}>
            <span className={s.subTitle}>{props.subtitle}</span>
            <h2 className={s.title}>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default HeadOfBlock;