import React from 'react';
import clsx from "clsx";
import styles from './card.module.scss';

const Card = (props) => {
    return (
        <div className={styles.block}>
            <div className={clsx(
                styles.content,
                props.center &&  styles['content--center'],
                props.size &&  styles[props.size]
            )}>
                { props.children }
            </div>
        </div>
    );
};

export default Card;