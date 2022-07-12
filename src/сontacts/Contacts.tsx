import React from 'react';
import style from './Contacts.module.css'
import stylesContainer from "../comman/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${stylesContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.inputs}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button type={'submit'}>Отправить</button>
            </div>
        </div>
    );
};

