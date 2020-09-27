import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';

import useWebAnimations, { fadeIn, fadeInLeft, heartBeat } from '@wellyshen/use-web-animations';

import { BookingSvg } from '../SVG';
import styles from './Booking.module.css';


const Booking = () => {
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
        <div className={styles.booking}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={4}>
                    <div ref={fadeInLeftEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.title}>
                            BOOK THE TRIP OF YOUR DREAM
                        </Typography>
                        <Typography variant="body1" color="primary" align="left" gutterBottom className={styles.lineTwo}>
                            Book to experience the best trip of your life
                        </Typography>
                        <Button variant="outlined" color="primary" ref={heartBeatEffect.ref}>Contact Us</Button>
                    </div>
                </Grid>
                <Grid item xs={10} md={6} ref={fadeInEffect.ref}>
                    <div>
                        <BookingSvg />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Booking
