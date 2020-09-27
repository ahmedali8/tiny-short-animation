import React from 'react';
import { Grid } from '@material-ui/core';

import { NotFoundSvg } from '../SVG';
import styles from './NotFound.module.css';


const NotFound = () => {
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
