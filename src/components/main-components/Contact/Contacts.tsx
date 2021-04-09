import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';

const Contacts = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut, illum. Atque cum dicta enim expedita reiciendis repudiandae suscipit veritatis?'
    return (
        <div className={s.formBlock}>
            <div className={`${styleContainer.container} ${s.formContainer}`}>
                <HeadOfBlock description={description} title={'Контакты'} subtitle={'Как можно со мной связаться?'} />
                <form className={s.form} action="">
                    <input className={s.input} placeholder={'Name'} type="text"/>
                    <input className={s.input} placeholder={'Email'} type="text"/>
                    <textarea className={s.area} placeholder={'Your message'} />
                </form>
                <button className={s.formBlockButton}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;