import React from 'react';
import style from './Skill.module.scss'


type SkillPropsType = {
    title: string
    description: string
    style: {
        backgroundImage:string
    }
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

