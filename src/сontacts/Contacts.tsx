import React from 'react';
import style from './Contacts.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${stylesContainer.container} ${style.contactsContainer}`}>
                <Title title='contacts'/>
                <form className={style.inputs}>
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.input} />
                    <button className={style.btn} type={'submit'}>Send</button>
                </form>

            </div>
        </div>
    );
};

