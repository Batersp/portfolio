import React from 'react';
import style from './Footer.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";
import linkedinIcon from '../assets/image/iconLinkedin.svg'
import ggg from '../assets/image/icons8-github.svg'
import telegramIcon from '../assets/image/iconTelegramm.svg'
import codewarsIcon from '../assets/image/codewars-red.svg'

export const Footer = () => {

    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`
    }

    const github = {
        backgroundImage: `url(${ggg})`,
        backgroundSize: 'cover'
    }

    const telegram = {
        backgroundImage: `url(${telegramIcon})`
    }

    const codewars = {
        backgroundImage: `url(${codewarsIcon})`
    }

    return (
        <div className={style.footerBlock}>
            <div className={`${stylesContainer.container} ${style.footerContainer}`}>
                <Title title='Pavel Ishmukov'/>
                <div className={style.body}>
                    <div style={linkedin} className={style.el}></div>
                    <div style={github} className={style.el}></div>
                    <div style={telegram} className={style.el}></div>
                    <div style={codewars} className={style.el}></div>
                </div>
                <span className={style.description}>All rights reserved</span>
            </div>
        </div>
    );
};

