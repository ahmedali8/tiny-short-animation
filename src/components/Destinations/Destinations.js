import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';

import useWebAnimations, { fadeInRight, heartBeat } from '@wellyshen/use-web-animations';

import { DestinationsSvg } from '../SVG';
import styles from './Destinations.module.css';


const Destinations = () => {

    const fadeInRightEffect = useWebAnimations({ ...fadeInRight });

    const heartBeatEffect = useWebAnimations({
        ...heartBeat,
        timing: {
            delay: 1000,
            duration: 2000
        }
    });

    return (
        <div className={styles.destinations}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={5}>
                    <div>
                        <DestinationsSvg />
                    </div>
                </Grid>
                <Grid item xs={10} md={5}>
                    <div ref={fadeInRightEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.title}>
                            EXPLORE AND TRAVEL !
                    </Typography>
                        <Typography variant="body1" color="primary" align="left" gutterBottom className={styles.lineTwo}>
                            The best destinations in the world awaits you
                            <br />
                            Book your Trip Now
                    </Typography>
                        <Button variant="outlined" color="primary" ref={heartBeatEffect.ref}>Bookings</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Destinations
