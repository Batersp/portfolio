import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    name: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <button className={style.btn}>ПОСМОТРЕТЬ</button>
            </div>
            <div className={style.info}>
                <div><span>{props.name}</span></div>
                <div><span>{props.description}</span></div>
            </div>
        </div>
    );
};

