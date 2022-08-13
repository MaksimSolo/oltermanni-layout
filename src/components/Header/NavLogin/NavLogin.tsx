import React from 'react';
import s from "../Header.module.scss";

export const NavLogin = () => {
    return <nav className={s.navLogin}>
        <a className={s.btnSignIn} href="#">ВХОД</a>
        <a href="#">РЕГИСТРАЦИЯ</a>
    </nav>
};
