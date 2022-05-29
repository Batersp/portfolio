import React from 'react';
import style from './Footer.module.css'
import stylesContainer from "../comman/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${stylesContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ишмуков Павел</h2>
                <div className={style.body}>
                    <div className={style.el}></div>
                    <div className={style.el}></div>
                    <div className={style.el}></div>
                    <div className={style.el}></div>
                </div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
};

