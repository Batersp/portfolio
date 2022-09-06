import React from 'react';
import style from './Projects.module.scss'
import stylesContainer from "../comman/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../comman/components/title/Title";
import todoImage from '../assets/image/todolist.jpg'
import socialNetworkImage from '../assets/image/social-network.jpg'
import cardsImage from '../assets/image/cards.jpg'
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetworkImage})`
    }

    const todoList = {
        backgroundImage: `url(${todoImage})`
    }

    const cards = {
        backgroundImage: `url(${cardsImage})`
    }

    const todolistLink = 'https://github.com/Batersp/TodoList2'
    const socialLink = 'https://github.com/Batersp/samurai-way-main'
    const cardsLink = 'https://github.com/Batersp/cards'

    return (
        <div id='Projects' className={style.projectsBlock}>
            <div className={`${stylesContainer.container} ${style.projectsContainer}`}>
                <Fade top>
                    <Title title={"My projects"}/>
                    <div className={style.projects}>
                        <Project link={todolistLink} style={todoList} name={'Todolist'} description={'Used technologies: React, Redux, Redux-Toolkit, React-router-dom v6, Jest(Unit-Tests), Storybook, Axios, Formik, Material UI; Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests and etc.'}/>
                        <Project link={socialLink} style={social} name={'Social-Network'} description={'Used technologies: React, Redux, TypeScript, Redux thunk, React-router-dom v6, React Hook Form, Axios, Jest; Social network app with using react hooks, routing, lazy loading, working with REST api, login/logout flow, pagination, form and validation, file uploading using unit- tests'}/>
                        <Project link={cardsLink} style={cards} name={'Cards'} description={'Used technologies: React, Redux-Thunk, Redux ToolkitTypeScript, React-router-dom v6, Axios, Formik, Flexbox-CSS, Git, GitHub. Creating learning app in team with using git, work with Axios(CRUD)'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

