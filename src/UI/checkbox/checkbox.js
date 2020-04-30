import React, {useState} from 'react';
import clsx from "clsx";
import styles from './checkbox.module.scss';
import checkIcon from '../../img/check.svg';
import minusIcon from '../../img/minus.svg';
import Button from "../button";

function getIcon(variant){
    switch (variant) {
        case 'primary':
            return <img src={checkIcon} alt="checked"/>;
        case 'secondary':
            return <img src={minusIcon} alt="checked"/>;
        default:
            return null;
    }
}

const Checkbox = ({variant, id, content, checked, ...props}) => {
    const [value, setValue] = useState(!!checked);

    function handleChange() {
        setValue(!value);
    }

    return (
        <label
            className={clsx(
                styles.container,
                !variant && styles.default
            )}
           htmlFor={id}
        >
            <input
                onChange={handleChange}
                value={value}
                id={id}
                type="checkbox"
                defaultChecked={value}
                {...props}
            />
            <span className={styles.element}>
                { getIcon(variant) }
            </span>
            {content}
        </label>
    );
};

Button.defaultProps  = {
    variant: 'primary',
    checked: false
};

export default Checkbox;