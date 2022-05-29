import React from 'react';
import style from './Distant-work.module.css'
import stylesContainer from "../comman/styles/Container.module.css";


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${stylesContainer.container} ${style.container}`} >
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button>Нанять меня</button>
            </div>
        </div>
    );
};

