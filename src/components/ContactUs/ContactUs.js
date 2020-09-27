import React from 'react';
import { Grid, Typography, TextField, FormControl, Button, FormHelperText } from '@material-ui/core';

import useWebAnimations, { fadeIn, fadeInLeft } from '@wellyshen/use-web-animations';

import { ContactUsSvg } from '../SVG';

import styles from './ContactUs.module.css';


const ContactUs = () => {

    const fadeInLeftEffect = useWebAnimations({ ...fadeInLeft });

    const fadeInEffect = useWebAnimations({
        ...fadeIn,
        timing: {
            duration: 2000
        }
    });

    return (
        <div className={styles.contactUs}>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.grid}
            >
                <Grid item xs={10} md={4}>
                    <div ref={fadeInLeftEffect.ref}>
                        <Typography variant="h2" color="primary" align="left" gutterBottom className={styles.title}>
                            CONTACT US
                        </Typography>
                        <FormControl>
                            <TextField
                                label="Name"
                                id="outlined-margin-normal"
                                className={styles.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                label="Email"
                                id="outlined-margin-normal"
                                className={styles.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                label="Message"
                                multiline
                                id="outlined-margin-normal"
                                className={styles.textField}
                                margin="normal"
                                variant="outlined"
                            />

                            <Button variant="outlined" color="primary" className={styles.btn}>Submit</Button>

                            <FormHelperText id="my-helper-text" color="primary">Form doesnot work right now</FormHelperText>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={10} md={6} ref={fadeInEffect.ref}>
                    <div>
                        <ContactUsSvg />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactUs
