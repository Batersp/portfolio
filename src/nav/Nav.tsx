import React from "react";
import style from './Nav.module.scss'
import {Link} from "react-scroll";



export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="Main"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Main
            </Link>
            <Link
                activeClass={style.active}
                to="Skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Skills
            </Link>
            <Link
                activeClass={style.active}
                to="Projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                Projects
            </Link>
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