import React from 'react';
import { Grid } from '@material-ui/core';

import { NotFoundSvg } from '../SVG';
import styles from './NotFound.module.css';


const NotFound = () => {

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    setTimeout(function () {
        window.scrollTo(0, 1);
    }, 0);

    return (
        <div className={styles.notFound}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={11} md={12}>
                    <NotFoundSvg />
                </Grid>
            </Grid>
        </div>
    );
};

export default NotFound;
