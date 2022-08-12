import React from 'react';
import style from './Projects.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../comman/components/title/Title";
import todoImage from '../assets/image/todolist.jpg'
import socialNetworkImage from '../assets/image/social-network.jpg'
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetworkImage})`
    }

    const todoList = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div id='Projects' className={style.projectsBlock}>
            <div className={`${stylesContainer.container} ${style.projectsContainer}`}>
                <Fade top>
                    <Title title={"My projects"}/>
                    <div className={style.projects}>
                        <Project style={todoList} name={'Todolist'} description={'Its my first project'}/>
                        <Project style={social} name={'Social-Network'} description={'www www wwwsww wwww'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

