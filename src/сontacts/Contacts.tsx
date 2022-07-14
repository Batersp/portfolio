import React from 'react';
import style from './Contacts.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${stylesContainer.container} ${style.contactsContainer}`}>
                <Title title='Контакты'/>
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

