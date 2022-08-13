import React from 'react';
import style from './Footer.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";
import linkedinIcon from '../assets/image/iconLinkedin.svg'
import githubIcon from '../assets/image/icons8-github.svg'
import telegramIcon from '../assets/image/iconTelegramm.svg'
import codewarsIcon from '../assets/image/codewars-red.svg'
// @ts-ignore
import Fade from 'react-reveal/Fade';


export const Footer = () => {

    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`
    }

    const github = {
        backgroundImage: `url(${githubIcon})`,
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
                <Fade top>
                    <Title title='Pavel Ishmukov'/>
                    <div className={style.body}>
                        <a href='' style={linkedin} className={style.el}></a>
                        <a href='' style={github} className={style.el}></a>
                        <a href='' style={telegram} className={style.el}></a>
                        <a href='' style={codewars} className={style.el}></a>
                    </div>
                    <span className={style.description}>All rights reserved</span>
                </Fade>
            </div>
        </div>
    );
};

