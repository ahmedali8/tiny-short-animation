import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import useStyles from './footerStyles';
import styles from './Footer.module.css';


const Footer = () => {
	const classes = useStyles();
	return (
		<div className={clsx(classes.container, styles.container)}>
			<footer className={clsx(classes.footer, styles.footer)}>
				<Container maxWidth="sm" elevation={3}>
					<Typography variant="body1" color="primary">
						Created by: Ahmed Ali
                    </Typography>

					<div className={classes.linkContainer}>
						<Link
							className={classes.link}
							href="https://contact.fyi/lmeuopplnl"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AccountBoxIcon className={styles.icon} />
						</Link>
						<Link
							className={classes.link}
							href="https://github.com/ahmedali8"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon className={styles.icon} />
						</Link>
						<Link
							className={classes.link}
							href="https://www.facebook.com/imahmedalibhatti"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FacebookIcon className={styles.icon} />
						</Link>
						<Link
							className={classes.link}
							href="https://www.instagram.com/ahmed.ali6262/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<InstagramIcon className={styles.icon} />
						</Link>
					</div>
				</Container>
			</footer>
		</div>
	);
};

export default Footer;
