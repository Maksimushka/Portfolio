import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import photo from './../../../assets/MyPhotoOld.jpg'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.text}>
                    <span>Всем привет!</span>
                    <h1>Я Биль Максим</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt="MyPhoto"/>
                </div>
            </div>
        </div>
    );
};

export default Main;