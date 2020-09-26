import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import styles from './NavBar.module.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none !important',
        color: '#fff !important',
    },
}));


export default function NavBar({ navData }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar id="back-to-top-anchor">
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link to="/" className={classes.link}>
                            Travel Inc.
                        </Link>
                    </Typography>

                    {navData.map(({ name, link }, index) => (
                        <Link to={link} key={index} className={styles.link}>
                            <Button key={index} color="inherit" className={styles.button}>{name}</Button>
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    );
}
