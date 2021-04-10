import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={`${styleContainer.container}`}>
                <div className={s.text}>
                    <span>Всем привет!</span>
                    <h1>Я Биль Максим</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

export default Main;