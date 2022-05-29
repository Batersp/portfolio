import React from 'react';
import style from './Projects.module.css'
import stylesContainer from "../comman/styles/Container.module.css";
import {Project} from "./project/Project";



export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${stylesContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project name={'Todolist'} description={'lalal lala allaa'}/>
                    <Project name={'My finances'} description={'www www wwwww wwww'}/>
                </div>
            </div>
        </div>
    );
};

