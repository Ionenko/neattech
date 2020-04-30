import React from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from '../../../icoMoonSelection.json';
import {img} from './icon.module.scss';

const Icon = ({ ...props }) => {
    return (
        <span className={img}>
            <IcoMoon iconSet={iconSet} {...props} />
        </span>
    )
};

export default Icon;