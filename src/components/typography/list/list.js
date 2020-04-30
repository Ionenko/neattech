import React from 'react';
import styles from './list.module.scss';
import Icon from "../../ui/icon";

const List = (props) => {
    return (
        <ul className={styles.unordered}>
            {
                props.items.map((el, i) => {
                    return <li className={styles.item} key={i}>
                        <Icon icon="check"/>
                        {el}
                    </li>
                })
            }
        </ul>
    );
};

export default List;