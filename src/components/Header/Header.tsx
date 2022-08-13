import React from "react";
import s from './Header.module.scss'
import iconGroupMain from './../../icons/iconGroupMain.svg'
import {NavMain} from "./NavMain/NavMain";
import {NavLogin} from "./NavLogin/NavLogin";
import {NavMainBurger} from "./NavMain/NavMainBurger";

export function Header() {
    return <header className={s.header}>
        <div className={s.headerContainer}>
            <NavMainBurger/>
            <object
                className={s.iconGroupMain}
                type='iconGroupMain/svg'
                data={iconGroupMain}>
                <a href=""><img className={s.image} src={iconGroupMain} alt={'Logo'}/></a>
            </object>
            <NavMain/>
            <NavLogin/>
        </div>
    </header>;
}