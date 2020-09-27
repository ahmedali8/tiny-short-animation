import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import useWebAnimations, { fadeIn, fadeInRight, heartBeat } from '@wellyshen/use-web-animations';

import { AboutUsSvg } from '../SVG';
import styles from './AboutUs.module.css';


const AboutUs = () => {
    const fadeInRightEffect = useWebAnimations({ ...fadeInRight });

    const fadeInEffect = useWebAnimations({
        ...fadeIn,
        timing: {
            duration: 2000
        }
    });


    return (
        <div className={styles.aboutUs}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={5} ref={fadeInEffect.ref}>
                    <div>
                        <AboutUsSvg />
                    </div>
                </Grid>
                <Grid item xs={10} md={5}>
                    <div ref={fadeInRightEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.title}>
                            ABOUT US
                        </Typography>
                        <Typography variant="body1" color="primary" align="left" gutterBottom className={styles.lineTwo}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutUs
