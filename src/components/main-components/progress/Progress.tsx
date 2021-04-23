import React from 'react';
import styleContainer from '../../../common/styles/Container.module.css';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import s from './Progress.module.scss'
// @ts-ignore
import Fade from 'react-reveal/Fade'

const Progress = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, magnam!'
    let progressItems = [
        {name: 'JavaScript', progress: '75%'},
        {name: 'CSS & HTML', progress: '70%'},
        {name: 'React', progress: '85%'},
        {name: 'English', progress: '55%'},
    ]
    return (
        <div id='progress' className={s.progressBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.progressContainer}`}>
                    <HeadOfBlock description={description} title={'Почему я?'} subtitle={'Уровень моих навыков'}/>
                    <div className={s.progressItems}>
                        {
                            progressItems.map(el => {
                                return (
                                    <div key={el.name} className={s.progressItem}>
                                        <div className={s.progressBar}>
                                            <div style={{width: `${el.progress}`}} className={s.progress}/>
                                        </div>
                                        <div className={s.progressDescription}>
                                            <span>{el.name}</span>
                                            <span>{el.progress}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Progress;