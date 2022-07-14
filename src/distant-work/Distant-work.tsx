import React from 'react';
import style from './Distant-work.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Title} from "../comman/components/title/Title";


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${stylesContainer.container} ${style.container}`} >
                <Title title='Рассматриваю варианты удаленной работы'/>
                <button>Нанять меня</button>
            </div>
        </div>
    );
};
