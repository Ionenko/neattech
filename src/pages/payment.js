import React from 'react';
import Grid from "../components/grid";
import Card from "../components/card";
import styles from './pages.module.scss';
import Table from "../components/table";
import Heading from "../components/typography/heading";
import List from "../components/typography/list";
import Button from "../components/ui/button";

const tableData = {
    cols: [
        {
            key: 'time',
            label: 'Часов'
        },
        {
            key: 'date',
            label: 'Дата/Время'
        }
    ],
    items: [
        {
            time: '10ч',
            date: '2019-12-12 16:02'
        },
        {
            time: '20ч',
            date: '2019-12-12 16:02'
        },
        {
            time: '50ч',
            date: '2019-12-12 16:02'
        }
    ]
};

const PaymentPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Heading type='underline'>
                    <h3>Тарифные планы</h3>
                </Heading>
                <Grid container>
                    <Grid item size="6">
                        <Card size="md">
                            <Heading size="lg" variant='primary-light'>
                                <h3>5 часов </h3>
                            </Heading>
                            <p>Пробный пакет: <br/> возвращаем деньги в 100% размере, если вам не понравилась наша работа</p>
                        </Card>
                    </Grid>
                    <Grid item size="6">
                        <Card size="md">
                            <Heading size="lg" variant='primary-light'>
                                <h3>20 часов </h3>
                            </Heading>
                            <List
                                items={[
                                    'Ваши задачи имеют повышенный приоритет',
                                ]}
                            />
                        </Card>
                    </Grid>
                    <Grid item size="6">
                        <Card size="lg">
                            <Heading size="lg" variant='primary-light'>
                                <h3>50 часов </h3>
                            </Heading>
                            <List
                                items={[
                                    'Повышенный приоритет задач',
                                    'Работаем с английским языком',
                                    'С вами работают одновременно 2 ассистента'
                                ]}
                            />
                        </Card>
                    </Grid>
                    <Grid item size="6">
                        <Card center size="md">
                            <Heading size="sm" align="center">
                                <h6>Не нашли подходящего варианта?</h6>
                            </Heading>
                            <p>
                                Свяжитесь с нами и мы <br/> сделаем Вам персональное <br/> предложение. <br/>
                                Работаем по безналичной <br/> оплате
                            </p>
                            <Button>Cвязаться</Button>
                        </Card>
                    </Grid>
                    <Grid item size="6">
                        <Card>
                            <Heading size="md">
                                <h5>Итог: ₽11 450</h5>
                            </Heading>
                            <Button>Пополнить</Button>
                            <span className="link">У меня есть промокод</span>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.aside}>
                <Heading type='underline'>
                    <h3>История пополнений</h3>
                </Heading>
                <Table data={tableData}/>
            </div>
        </div>
    );
};

export default PaymentPage;