import React from 'react';
import style from './Footer.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${stylesContainer.container} ${style.footerContainer}`}>
                <Title title='Ишмуков Павел'/>
                <div className={style.body}>
                    <div className={style.el}></div>
                    <div className={style.el}></div>
                    <div className={style.el}></div>
                    <div className={style.el}></div>
                </div>
                <span className={style.description}>Все права защищены</span>
            </div>
        </div>
    );
};

