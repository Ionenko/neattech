import React from 'react';
import styles from './header.module.scss';
import Icon from "../ui/icon";
import {Link} from "react-router-dom";
import clsx from "clsx";

const Header = (props) => {
    const {toggleNav, isOpen} = props;

    return (
        <header className={styles.component}>
            <Link to="/" className={styles.logo}>
                <Icon className={styles['logo-icon']} icon="heart"/>
                <span>GetHelp</span>
            </Link>
            <button
                onClick={toggleNav}
                className={clsx(
                    styles.toggle,
                    isOpen && styles['toggle--open']
                )}>
                <span/>
            </button>
        </header>
    );
};

export default Header;