import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

import useWebAnimations, { fadeIn, fadeInLeft, heartBeat } from '@wellyshen/use-web-animations';

import { HomeSvg } from '../SVG';
import styles from './Home.module.css';


const Home = () => {

    const heartBeatEffect = useWebAnimations({
        ...heartBeat,
        timing: {
            delay: 3000,
            duration: 2000
        }
    });

    const fadeInLeftEffect = useWebAnimations({ ...fadeInLeft });

    const fadeInEffect = useWebAnimations({
        ...fadeIn,
        timing: {
            duration: 2000
        }
    });

    return (
        <div className={styles.home}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={5}>
                    <div ref={fadeInLeftEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.home__title}>
                            VISIT YOUR DESIRED DESTINATION
                        </Typography>
                        <Typography variant="body1" color="primary" align="left" gutterBottom className={styles.home__lineTwo}>
                            We provide the best Tours
                        </Typography>
                        <Link to="/destinations" className={styles.link}>
                            <Button variant="outlined" color="primary" ref={heartBeatEffect.ref}>Learn more</Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={10} md={5} ref={fadeInEffect.ref}>
                    <div>
                        <HomeSvg />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
