import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import useWebAnimations, { fadeIn, fadeInLeft, heartBeat } from '@wellyshen/use-web-animations';

import { PlansSvg } from '../SVG';
import styles from './Plans.module.css';


const Plans = () => {

    const fadeInLeftEffect = useWebAnimations({ ...fadeInLeft });

    const fadeInEffect = useWebAnimations({
        ...fadeIn,
        timing: {
            duration: 2000
        }
    });

    const heartBeatEffect = useWebAnimations({
        ...heartBeat,
        timing: {
            delay: 3000,
            duration: 2000
        }
    });

    return (
        <div className={styles.plans}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={5}>
                    <div ref={fadeInLeftEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.title}>
                            WHAT'S YOUR DREAM VACATION?
                        </Typography>
                        <Typography variant="body1" color="primary" align="left" gutterBottom className={styles.lineTwo}>
                            At our Travel agency, we offer vacation packages and stress-free planning so you can get the most out of your precious time.
                        </Typography>
                        <Button variant="outlined" color="primary" ref={heartBeatEffect.ref}>Booking</Button>
                    </div>
                </Grid>
                <Grid item xs={10} md={5} ref={fadeInEffect.ref}>
                    <div>
                        <PlansSvg />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Plans
