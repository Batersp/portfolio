import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    name: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.btn}>ПОСМОТРЕТЬ</a>
            </div>
            <div className={style.info}>
                <div className={style.name}>{props.name}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

