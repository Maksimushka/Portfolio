import React from 'react';
import s from './Form.module.css'
import styleContainer from './../../common/styles/Container.module.css'

const Form = () => {
    return (
        <div className={s.formBlock}>
            <div className={`${styleContainer.container} ${s.formContainer}`}>
                <h2>Contact</h2>
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