import React from 'react';
import styles from './sidebar.module.scss';
import {Link} from "react-router-dom";
import Icon from "../ui/icon";
import Nav from "../nav";
import Profile from "../profile";
import clsx from "clsx";

const Sidebar = ({isOpen}) => {
    return (
        <div className={clsx(styles.container, isOpen && styles.visible)}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <Link to="/" className={styles.logo}>
                        <Icon className={styles['logo-icon']} icon="heart"/>
                        <span>GetHelp</span>
                    </Link>
                </div>
                <div className={styles.content} >
                    <Profile/>
                    <Nav/>
                </div>
                <div className={styles.footer}>
                    <a className={styles['footer-link']} href="https://t.me/iamhelp_bot" rel="noopener noreferrer" target="_blank">
                        <Icon icon="heart"/>
                        <span>@iamhelp_bot</span>
                    </a>
                    <p>
                        Made by <a href="https://neattech.io/" rel="noopener noreferrer" target="_blank">NeatTech.io</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;