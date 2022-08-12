import React from 'react';
import style from './Distant-work.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <Fade top>
                <div className={`${stylesContainer.container} ${style.container}`}>
                    <Title title='I am considering options for remote work'/>
                    <button className={style.btn}>Hire me</button>
                </div>
            </Fade>
        </div>
    );
};

