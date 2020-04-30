import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss'
import clsx from "clsx";
import iconEye from '../../img/eye.svg';
import iconEyeClosed from '../../img/eye-closed.svg';

const Input = ({label, error, valid, type = 'text', value = '', ...props}) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [currentType, setCurrentTypeType] = useState(type);

    function handleChange(e){
        setCurrentValue(e.target.value)
    }

    function handleClick(){
        if(currentType === 'password') {
            setCurrentTypeType('text');
        } else {
            setCurrentTypeType('password');
        }
    }

    return (
        <div className={clsx(
            styles.field,
            error && styles['field--error'],
            valid && styles['field--success'],
        )}>
            {
                label ? <label>{label}</label> : null
            }
            <div className={styles.input}>
                <input value={currentValue} type={currentType} onChange={handleChange} {...props}/>
                {
                    type === 'password' ?
                        <img
                            className={styles.icon}
                            onClick={handleClick}
                            src={currentType === 'password' ? iconEye : iconEyeClosed} alt="eye"
                        /> : null
                }
            </div>
            {
                error ? <span className={styles.error}>{error}</span>: null
            }
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    hintText: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

export default Input;