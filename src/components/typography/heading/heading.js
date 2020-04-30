import React from 'react';
import clsx from 'clsx';
import styles from './heading.module.scss';

const Heading = (props) => {
    return (
        <div className={clsx(
            styles.component,
            props.type  && styles[props.type],
            props.size && styles[props.size],
            props.variant && styles[props.variant],
            props.align && styles[props.align]
        )}>
            {props.children}
        </div>
    );
};

export default Heading;