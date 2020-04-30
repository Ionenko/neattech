import React from 'react';
import styles from './table.module.scss';

const TableHead = ({cols}) => {
    return (
        <thead className={styles.head}>
            <tr>
                <th>№</th>
                {
                    cols.map( el => {
                        return (
                            <th key={el.key}>
                                {el.label}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    );
};

const TableBody = ({data}) => {
    return (
        <tbody className={styles.body}>
            {
                data.map( (el, index) => {
                    return (
                        <tr key={index + 1}>
                            <td>{`${index + 1}.`}</td>
                            {
                                Object.values(el).map((val, index) => {
                                    return <td key={index}>{val}</td>
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

const Table = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.component}>
                <TableHead cols={data.cols}/>
                <TableBody data={data.items}/>
            </table>
        </div>
    );
};

export default Table;