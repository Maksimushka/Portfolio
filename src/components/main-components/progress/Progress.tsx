import React from 'react';
import styleContainer from '../../../common/styles/Container.module.css';
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
import s from './Progress.module.scss'

const Progress = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, magnam!'
    return (
        <div className={s.progressBlock}>
            <div className={`${styleContainer.container} ${s.progressContainer}`}>
                <HeadOfBlock description={description} title={'Почему я?'} subtitle={'Уровень моих навыков'} />
            </div>
        </div>
    );
};

export default Progress;