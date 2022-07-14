import React from 'react';
import style from './Skills.module.scss'
import stylesContainer from '../comman/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../comman/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'laalaggggggggggggggggggggg ggggggggggggggffffffffffffffffff fffffffffffffffffffffffffff ffffffffffffffffgggggglalalala'}/>
                    <Skill title={'HTML'} description={'gfgfgfgfgf'}/>
                    <Skill title={'REACT'} description={'wWWWWWWWWWWW'}/>
                </div>
            </div>
        </div>
    );
};

