import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../comman/styles/Container.module.css'
import stylesContainer from "../comman/styles/Container.module.css";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={ `${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Pavel Ishmukov</h1>
                    <p>Frontend Developer </p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
};

