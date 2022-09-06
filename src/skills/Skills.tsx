import React from 'react';
import style from './Skills.module.scss'
import stylesContainer from '../comman/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../comman/components/title/Title";
import jsIcon from "../assets/image/java-script.png";
import reactIcon from "../assets/image/atom.png";
import htmlIcon from "../assets/image/html.png";
import reduxIcon from "../assets/image/redux.svg";
import typescriptIcon from "../assets/image/typescript.svg";
import axiosIcon from "../assets/image/axios.svg";
import postmanIcon from "../assets/image/postman.png";
import formikIcon from "../assets/image/formik.png";
// @ts-ignore
import Fade from 'react-reveal/Fade';


export const Skills = () => {

    const javaScript = {
        backgroundImage: `url(${jsIcon})`
    }

    const react = {
        backgroundImage: `url(${reactIcon})`
    }

    const html = {
        backgroundImage: `url(${htmlIcon})`
    }

    const redux = {
        backgroundImage: `url(${reduxIcon})`
    }

    const typescript = {
        backgroundImage: `url(${typescriptIcon})`
    }

    const axios = {
        backgroundImage: `url(${axiosIcon})`
    }

    const postman = {
        backgroundImage: `url(${postmanIcon})`
    }

    const formik = {
        backgroundImage: `url(${formikIcon})`
    }




    return (
        <div id='Skills' className={style.skillsBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <Fade top>
                <Title title={'My skills'}/>
                <div className={style.skills}>
                    <Skill style={javaScript} title={'JS'}/>
                    <Skill style={html} title={'HTML'}/>
                    <Skill style={react} title={'REACT'}/>
                    <Skill style={redux} title={'REDUX'}/>
                    <Skill style={typescript} title={'TYPESCRIPT'}/>
                    <Skill style={axios} title={'AXIOS'}/>
                    <Skill style={postman} title={'POSTMAN'}/>
                    <Skill style={formik} title={'FORMIK'}/>
                </div>
                    </Fade>
            </div>
        </div>
    );
};

