import React from 'react';
import style from './Skills.module.scss'
import stylesContainer from '../comman/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../comman/components/title/Title";
import jsIcon from "../assets/image/java-script.png";
import reactIcon from "../assets/image/atom.png";
import htmlIcon from "../assets/image/html.png";


export const Skills = () => {

    const javaScript = {
        backgroundImage: `url(${jsIcon})`
    }

    const react = {
        backgroundImage: `url(${reactIcon})`
    }

    const html = {
        backgroundImage: `url(${htmlIcon})`
    }




    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={style.skills}>
                    <Skill style={javaScript} title={'JS'} description={'javascript is the best programming language in the world, if i were president, js would be the state language'}/>
                    <Skill style={html} title={'HTML'} description={'gfgfgfgfgf'}/>
                    <Skill style={react} title={'REACT'} description={'wWWWWWWWWWWW'}/>
                </div>
            </div>
        </div>
    );
};

