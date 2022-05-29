import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../comman/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'laalaggggggggggggggggggggg ggggggggggggggffffffffffffffffff fffffffffffffffffffffffffff ffffffffffffffffgggggglalalala'}/>
                    <Skill title={'HTML'} description={'gfgfgfgfgf'}/>
                    <Skill title={'REACT'} description={'wWWWWWWWWWWW'}/>
                </div>
            </div>
        </div>
    );
};

