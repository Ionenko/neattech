import React from 'react';
import clsx from "clsx";
import styles from './button.module.scss';

const Button = ({tag, className, ...props}) => {
    const Tag = `${tag}`;
    return (
        <Tag {...props} className={clsx(
            className,
            styles.btn
        )}>
            {
                props.children
            }
        </Tag>
    );
};

Button.defaultProps  = {
    tag: 'button'
};

export default Button;