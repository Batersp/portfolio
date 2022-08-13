import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../comman/styles/Container.module.css'
import photos from '../assets/image/IMG_4330 — копия.jpg'
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Tilt from 'react-tilt'


export const Main = () => {
    return (
        <div id='Main' className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Fade top>
                    <div className={style.text}>
                        <span className={style.hi}>Hi There</span>
                        <h1 className={style.name}>I am Pavel Ishmukov</h1>
                        <ReactTypingEffect

                            text="Frontend Developer"
                        />
                        {/*   <p>Frontend Developer </p>*/}
                    </div>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className={style.photoContainer}>
                            <img className={style.photo} src={photos} alt=""/>
                        </div>
                    </Tilt>

                </Fade>
            </div>
        </div>
    );
};

