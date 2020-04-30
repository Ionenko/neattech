import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import PaymentPage from "../../pages/payment";
import TasksPage from "../../pages/tasks";
import Sidebar from "../sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './app.module.scss';
import Icon from "../ui/icon";
import Header from "../header";
import ComponentsPage from "../../pages/components";

const ErrorMessage = () => {
    return (<div>
        <Icon icon="info"/>
        This is an error message!
    </div>)
};

const notify = () => {
    toast.error(ErrorMessage,
        {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: `${styles.error} ${styles.message}`,
            bodyClassName: styles.body,
            autoClose: false,
        }
    );
};

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const App = (props) => {

    const [isOpen, setIsOpen] = useState(window.innerWidth > 992);
    const [width] = useWindowSize();

    useEffect(() => {
        notify();
    }, []);


    useEffect(() => {
        if(width <= 992) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    },[width]);

    const toggleNav = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.container}>
            <Header isOpen={isOpen} toggleNav={toggleNav}/>
            <Sidebar isOpen={isOpen}/>
            <main className={styles.main}>
                <Switch>
                    <Route path="/payment" exact component={PaymentPage}/>
                    <Route path="/tasks" exact component={TasksPage}/>
                    <Route path="/" exact component={ComponentsPage}/>
                    <Route path="*">
                        <div>Page Not found</div>
                    </Route>
                </Switch>
                <ToastContainer />
            </main>
        </div>
    );
};

export default App;
