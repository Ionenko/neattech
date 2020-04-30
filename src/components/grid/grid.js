import React from 'react';
import clsx from 'clsx';
import styles from './grig.module.scss';

const Grid = (props) => {
    const {item, container, size} = props;

    return (
        <div className={clsx(
            container && styles.container,
            [
                item && styles.item,
                size && styles[`item--${size}`]
            ]
        )
        }>
            {props.children}
        </div>
    );
};


export default Grid;