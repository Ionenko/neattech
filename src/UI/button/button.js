import React from 'react';
import clsx from "clsx";
import styles from './button.module.scss';

const Spinner = () => <div className={styles.spinner}><div/><div/><div/><div/></div>;

const Button = ({tag = 'button', className, variant='primary', loading, ...props}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={clsx(
            className,
            variant && styles[variant],
            loading && styles.loading,
            props.disabled && styles.disabled,
        )} {...props} >
            {
               loading ? <Spinner/> : props.children
            }
        </Tag>
    );
};

export default Button;