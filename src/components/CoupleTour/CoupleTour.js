import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';

import useWebAnimations, { fadeIn, fadeInRight, heartBeat } from '@wellyshen/use-web-animations';

import { CoupleTourSvg } from '../SVG';
import styles from './CoupleTour.module.css';


const CoupleTour = () => {

    const fadeInRightEffect = useWebAnimations({ ...fadeInRight });

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
        <div className={styles.coupletour}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={5} ref={fadeInEffect.ref}>
                    <div>
                        <CoupleTourSvg />
                    </div>
                </Grid>
                <Grid item xs={10} md={5}>
                    <div ref={fadeInRightEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.title}>
                            COUPLES TOUR
                    </Typography>
                        <Typography variant="body1" color="primary" align="left" gutterBottom className={styles.lineTwo}>
                            Discover the best Honeymoon tours packages
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

export default CoupleTour;
