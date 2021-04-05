import React from 'react';
import s from './Form.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import HeadOfBlock from '../head-of-block/HeadOfBlock';

const Form = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut, illum. Atque cum dicta enim expedita reiciendis repudiandae suscipit veritatis?'
    return (
        <div className={s.formBlock}>
            <div className={`${styleContainer.container} ${s.formContainer}`}>
                <HeadOfBlock description={description} title={'Contact'} subtitle={'How can you contact with me?'} />
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

export default Form;