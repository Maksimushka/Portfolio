import React from 'react';
import s from './Varible.module.scss'
import styleContainer from './../../common/styles/Container.module.css'

const Variable = () => {
    return (
        <div className={s.variableBlock}>
            <div className={`${styleContainer.container} ${s.variableContainer}`}>
                <h2>Рассматриваю варианты удалённой работы</h2>
                <button className={s.variableBlockButton}>Нанять меня</button>

            </div>
        </div>
    );
};

export default Variable;