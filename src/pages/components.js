import React from 'react';
import Heading from "../components/typography/heading";
import styles from './pages.module.scss';
import Grid from "../components/grid";
import Button from "../UI/button";
import Checkbox from "../UI/checkbox";
import clsx from "clsx";
import Input from "../UI/input";

const inlineStyles = {
    list: {
        listStyle: 'none'
    },
    item: {
        margin: '0 0 20px'
    },
    row: {
        display: 'flex',
        margin: '0 0 15px'
    },
    col: {
        margin: '0 15px 0 0'
    }
}; // just for quick work and example

const ComponentsPage = () => {
    return (
        <div className={styles.container}>
            <div className={clsx(styles.content, styles['content-task2'])}>
                <Heading size="md">
                    <h4>UI components (second task)</h4>
                </Heading>
                <Grid container>
                    <Grid item size="6">
                        <Heading size="sm">
                            <p>Checkboxes</p>
                        </Heading>
                        <ul style={inlineStyles.list}>
                            <li style={inlineStyles.row}>
                                <div style={inlineStyles.col}><Checkbox id="checkbox-1" checked variant="primary"/></div>
                                <div style={inlineStyles.col}><Checkbox id="checkbox-2" checked variant="secondary"/></div>
                                <div style={inlineStyles.col}><Checkbox id="checkbox-3" /></div>
                            </li>
                            <li style={inlineStyles.row}>
                                <div style={inlineStyles.col}><Checkbox id="checkbox-disabled-1" checked disabled variant="primary"/></div>
                                <div style={inlineStyles.col}><Checkbox id="checkbox-disabled-2" checked disabled variant="secondary"/></div>
                                <div style={inlineStyles.col}><Checkbox id="checkbox-disabled-3" checked disabled /></div>
                            </li>
                        </ul>
                        <Heading size="sm">
                            <p>Buttons</p>
                        </Heading>
                        <ul style={inlineStyles.list}>
                            <li style={inlineStyles.item}>
                                <Button>Primary</Button>
                            </li>
                            <li style={inlineStyles.item}>
                                <Button variant="secondary">Secondary</Button>
                            </li>
                            <li style={inlineStyles.item}>
                                <Button variant="primary" disabled>Disable Primary</Button>
                            </li>
                            <li style={inlineStyles.item}>
                                <Button variant="secondary" disabled>Disable Secondary</Button>
                            </li>
                            <li style={inlineStyles.item}>
                                <Button loading>Loading...</Button>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item size="6">
                        <Heading size="sm">
                            <p>Forms</p>
                        </Heading>

                        <ul style={inlineStyles.list}>
                            <li style={inlineStyles.item}>
                                <Input
                                    type="text"
                                    label="Старый пароль"
                                    placeholder="Введите старый пароль"
                                />
                            </li>
                            <li style={inlineStyles.item}>
                                <Input
                                    type="text"
                                    placeholder="Введите старый пароль"
                                />
                            </li>
                            <li style={inlineStyles.item}>
                                <Input
                                    type="text"
                                    placeholder="Введите старый пароль"
                                    value="Какой-то непонятный текст"
                                />
                            </li>
                            <li style={inlineStyles.item}>
                                <Input
                                    type="text"
                                    placeholder="Введите старый пароль"
                                    value="30042020"
                                    error="В ведённом email отсутствует символ @"
                                />
                            </li>
                            <li style={inlineStyles.item}>
                                <Input
                                    type="password"
                                    placeholder="Введите пароль"
                                />
                            </li>
                            <li style={inlineStyles.item}>
                                <Input
                                    type="password"
                                    placeholder="Введите пароль"
                                    value="Валидное значение"
                                    valid
                                />
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ComponentsPage;