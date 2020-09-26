
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    link: {
        textDecoration: 'none !important',
        color: '#000 !important',
    },
}));

export default function MobileNavBar({ navData }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const iconClasses = ['flaticon-home', 'flaticon-sport-shoes', 'flaticon-shoe', 'flaticon-shoes', 'flaticon-information', 'flaticon-24-hours-support'];

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="static"
                color="transparent"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar id="back-to-top-anchor">
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                            Travel Inc.
                        </Link>
                    </Typography>

                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleDrawer("right", true)}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <SwipeableDrawer
                className={classes.drawer}
                variant="temporary"
                anchor="right"
                open={open}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer("right", false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {navData.map(({ name, link }, index) => (
                        <Link to={link} key={index} className={classes.link}>
                            <ListItem button key={name}>
                                <ListItemIcon>
                                    <i className={clsx(iconClasses[index])} style={{ fontWeight: 'bold' }}></i>
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </SwipeableDrawer>
        </div>
    );
}
