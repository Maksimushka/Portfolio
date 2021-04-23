import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'
import HeadOfBlock from '../../reuse-components/head-of-block/HeadOfBlock';
// @ts-ignore
import Fade from 'react-reveal/Fade'

const Contacts = () => {
    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut, illum. Atque cum dicta enim expedita reiciendis repudiandae suscipit veritatis?'
    return (
        <div id='contacts' className={s.formBlock}>
            <Fade>
                <div className={`${styleContainer.container} ${s.formContainer}`}>
                    <HeadOfBlock description={description} title={'Контакты'} subtitle={'Как можно со мной связаться?'} />
                    <div className={s.contactsBlock}>
                        <form className={s.form} action="">
                            <input className={s.input} placeholder={'Name'} type="text"/>
                            <input className={s.input} placeholder={'Email'} type="text"/>
                            <textarea className={s.area} placeholder={'Your message'} />
                            <input value='Send' type='submit' className={s.formBlockButton} />
                        </form>
                        <div className={s.contactsInfo}>
                            <div className={s.contactsInfoItem}>
                                <h4>Моё местоположение</h4>
                                <span>Россия, Новосибирск</span>
                            </div>
                            <div className={s.contactsInfoItem}>
                                <h4>Номер телефона</h4>
                                <span>8-923-182-80-66</span>
                            </div>
                            <div className={s.contactsInfoItem}>
                                <h4>Email</h4>
                                <span>m.billsrc@gmail.com</span>
                            </div>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;