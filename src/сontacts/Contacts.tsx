import React from 'react';
import style from './Contacts.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div id='Contacts' className={style.contactsBlock}>
            <div className={`${stylesContainer.container} ${style.contactsContainer}`}>
                <Fade top>
                    <Title title='contacts'/>
                    <form className={style.form}>
                        <input className={style.input} type="text"/>
                        <input className={style.input} type="text"/>
                        <textarea className={style.textarea}/>
                        <button className={style.btn} type={'submit'}>Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

