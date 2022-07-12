import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    name: string
    description: string
    style: {
        backgroundImage: string
    }
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a className={style.btn}>ПОСМОТРЕТЬ</a>
            </div>
            <div className={style.info}>
                <h3 className={style.projectTitle}>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

