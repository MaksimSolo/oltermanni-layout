import React from "react";
import s from './Header.module.scss'
import iconGroupMain from './../../icons/iconGroupMain.svg'
import {NavMain} from "./NavMain/NavMain";
import {NavLogin} from "./NavLogin/NavLogin";

export function Header() {
    return <header className={s.header}>
        <object
            className={s.iconGroupMain}
            type='iconGroupMain/svg'
            data={iconGroupMain}>
            <a href=""><img className={s.image} src={iconGroupMain}/></a>
        </object>
        <NavMain/>
        <NavLogin/>
    </header>;
}