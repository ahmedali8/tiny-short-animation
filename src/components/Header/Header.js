import React, { useEffect, useState } from 'react';

import NavBar from './NavBar/NavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';

const Header = () => {

    const navData = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Destinations',
            link: '/destinations'
        },
        {
            name: 'Plans',
            link: '/plans'
        },
        {
            name: 'Couple Tour',
            link: '/couple-tour'
        },
        {
            name: 'Booking',
            link: '/booking'
        },
        {
            name: 'About Us',
            link: '/about-us'
        },
        {
            name: 'Contact Us',
            link: '/contact-us'
        },
    ];


	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 720px)').matches
	);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsMobile(window.matchMedia('(max-width: 720px)').matches);
		});
	}, []);

	return (
		<>
			{isMobile ? (
				<MobileNavBar navData={navData} />
			) : (
					<NavBar navData={navData} />
				)}
		</>
	);
};

export default Header;
