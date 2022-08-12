import React from "react";
import style from './Nav.module.scss'
import {Link} from "react-scroll";



export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contacts">Contacts</a>
            <Link
                activeClass={style.active}
                to="Contacts"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Contacts
            </Link>
        </div>
    )
}