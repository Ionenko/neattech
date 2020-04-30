import React from 'react';
import {NavLink} from "react-router-dom";
import Icon from "../ui/icon";
import {
    container,
    list,
    item,
    link,
    active
} from './nav.module.scss';

const Nav = (props) => {
    return (
        <nav className={container}>
            <ul className={list}>
                <li className={item}>
                    <NavLink activeClassName={active}  className={link} to="/tasks">
                        <Icon icon="blocks"/>
                        <span>Ваши задачи</span>
                    </NavLink >
                </li>
                <li className={item}>
                    <NavLink activeClassName={active}  className={link} to="/payment">
                        <Icon icon="coin"/>
                        <span>Пополнение баланса</span>
                    </NavLink >
                </li>
                <li className={item}>
                    <NavLink activeClassName={active}  className={link} to="/sale">
                        <Icon icon="present-box"/>
                        <span>Скидки</span>
                    </NavLink >
                </li>
                <li  className={item}>
                    <NavLink activeClassName={active} className={link} to="/logout">
                        <Icon icon="exit"/>
                        <span>Выйти</span>
                    </NavLink >
                </li>
            </ul>
        </nav>
    );
};

export default Nav;